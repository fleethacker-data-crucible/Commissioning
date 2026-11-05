"""Replace a plain pale blue-grey monitor in a generated clip with a screen video.

Per frame: find the plain-blue screen (blue-dominance test, flood fill from a seed), so anything
that crosses the screen (a hand, a head) stays in front. The screen video is warped into the
screen's four corners with a perspective transform and feathered in. Audio is copied from the clip.

The camera in these clips is locked, so the four corners are measured once on a frame at 2.5 s.
Resolution independent: run it on the 480p draft, then again on the 1080p upscale.

Usage: python composite_monitor.py <clip.mp4> <screen.mp4> <out.mp4> [seed_x_frac seed_y_frac]
The screen video must have the same frame rate and at least as many frames as the clip.
"""
import subprocess
import sys
from collections import deque

from PIL import Image, ImageChops, ImageFilter

CLIP, SCREEN, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
SX = float(sys.argv[4]) if len(sys.argv) > 4 else 0.712
SY = float(sys.argv[5]) if len(sys.argv) > 5 else 0.40


def probe(path):
    out = subprocess.check_output(["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries",
                                   "stream=width,height,r_frame_rate", "-of", "csv=p=0", path]).decode().split(",")
    num, den = out[2].strip().split("/")
    return int(out[0]), int(out[1]), float(num) / float(den)


W, H, FPS = probe(CLIP)
SW, SH, _ = probe(SCREEN)


def is_screen(p):
    return (p[2] - p[0]) > 22 and p[2] > p[1] > p[0]


def flood(img, seed):
    px = img.load()
    w, h = img.size
    if not is_screen(px[seed]):
        return set()
    seen = {seed}
    q = deque([seed])
    while q:
        x, y = q.popleft()
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h and (nx, ny) not in seen and is_screen(px[nx, ny]):
                seen.add((nx, ny))
                q.append((nx, ny))
    return seen


# ---- measure the corners once, on a frame at 2.5 s ---------------------------------------
subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-ss", "2.5", "-i", CLIP, "-frames:v", "1", "_probe_frame.png"], check=True)
probe_img = Image.open("_probe_frame.png").convert("RGB")
seed = (int(W * SX), int(H * SY))
pts = flood(probe_img, seed)
assert len(pts) > 2000, "screen not found at seed %s" % (seed,)
tl = min(pts, key=lambda p: p[0] + p[1])
br = max(pts, key=lambda p: p[0] + p[1])
tr = max(pts, key=lambda p: p[0] - p[1])
bl = min(pts, key=lambda p: p[0] - p[1])
quad = [tl, tr, br, bl]
print("screen corners tl,tr,br,bl", quad, "area px", len(pts))


def solve(A, b):
    n = len(b)
    M = [row[:] + [b[i]] for i, row in enumerate(A)]
    for i in range(n):
        p = max(range(i, n), key=lambda r: abs(M[r][i]))
        M[i], M[p] = M[p], M[i]
        for r in range(i + 1, n):
            f = M[r][i] / M[i][i]
            for c in range(i, n + 1):
                M[r][c] -= f * M[i][c]
    x = [0.0] * n
    for i in range(n - 1, -1, -1):
        x[i] = (M[i][n] - sum(M[i][c] * x[c] for c in range(i + 1, n))) / M[i][i]
    return x


# the screen video is shrunk with a proper filter to about 1.6x the monitor's on-screen width BEFORE the perspective warp;
# warping 1920 px straight into ~370 px skips pixels (aliasing: grain, jagged window edges)
BW = max(p[0] for p in quad) - min(p[0] for p in quad)
PW = max(2, int(BW * 1.6))
PH = max(2, int(round(PW * SH / SW)))
src = [(0, 0), (PW, 0), (PW, PH), (0, PH)]
A, b = [], []
for (x, y), (u, v) in zip(quad, src):
    A.append([x, y, 1, 0, 0, 0, -x * u, -y * u]); b.append(u)
    A.append([0, 0, 0, x, y, 1, -x * v, -y * v]); b.append(v)
coef = solve(A, b)

rd_clip = subprocess.Popen(["ffmpeg", "-hide_banner", "-loglevel", "error", "-i", CLIP, "-f", "rawvideo", "-pix_fmt", "rgb24", "-"], stdout=subprocess.PIPE)
rd_scr = subprocess.Popen(["ffmpeg", "-hide_banner", "-loglevel", "error", "-i", SCREEN, "-f", "rawvideo", "-pix_fmt", "rgb24", "-"], stdout=subprocess.PIPE)
wr = subprocess.Popen(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", "%dx%d" % (W, H),
                       "-r", str(FPS), "-i", "-", "-i", CLIP, "-map", "0:v", "-map", "1:a?", "-c:v", "libx264", "-crf", "12",
                       "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k", "-shortest", OUT], stdin=subprocess.PIPE)


def read(pipe, n):
    buf = b""
    while len(buf) < n:
        chunk = pipe.stdout.read(n - len(buf))
        if not chunk:
            return None
        buf += chunk
    return buf


i, areas = 0, []
while True:
    fb = read(rd_clip, W * H * 3)
    if fb is None:
        break
    sb = read(rd_scr, SW * SH * 3)
    if sb is None:
        break
    frame = Image.frombytes("RGB", (W, H), fb)
    screen = Image.frombytes("RGB", (SW, SH), sb).resize((PW, PH), Image.LANCZOS)
    region = flood(frame, seed)
    areas.append(len(region))
    mask = Image.new("L", (W, H), 0)
    mp = mask.load()
    for (x, y) in region:
        mp[x, y] = 255
    mask = mask.filter(ImageFilter.MaxFilter(5)).filter(ImageFilter.GaussianBlur(0.9))
    warped = screen.transform((W, H), Image.PERSPECTIVE, coef, Image.BICUBIC)
    warped = warped.point(lambda v: int(v * 0.94))
    wr.stdin.write(Image.composite(warped, frame, mask).tobytes())
    i += 1
wr.stdin.close()
wr.wait()
print("frames", i, "screen area px min/max", min(areas), max(areas))
