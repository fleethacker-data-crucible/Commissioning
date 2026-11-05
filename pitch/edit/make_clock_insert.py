"""Clock insert, version 4: anti-aliased hands, quartz snap with a touch of motion blur, an optional smooth
sub-pixel push (done here in Python, never with ffmpeg's zoompan, which steps and jitters on video), and an
optional dimming vignette over the last seconds so the room seems to go dark before the cut.

Usage: python make_clock_insert.py <face.png> <pin_x> <pin_y> <face_radius> <h> <m> <s> <seconds> <out.mp4>
       [--push 1.10] [--dim 3.0]
--push Z   : push in smoothly from 1.0 to Z over the clip (ease in-out)
--dim SEC  : over the last SEC seconds the frame darkens to about 55 percent with a growing vignette
Output 1920x1080, 24 fps, face radius 270 px at the start, tick sound on every whole second.
"""
import math
import os
import subprocess
import sys

from PIL import Image, ImageChops, ImageDraw, ImageFilter

face_path = sys.argv[1]
PX, PY, R = int(sys.argv[2]), int(sys.argv[3]), float(sys.argv[4])
H0, M0, S0 = int(sys.argv[5]), int(sys.argv[6]), int(sys.argv[7])
DUR = float(sys.argv[8])
OUT = sys.argv[9]
PUSH = float(sys.argv[sys.argv.index("--push") + 1]) if "--push" in sys.argv else 1.0
DIM = float(sys.argv[sys.argv.index("--dim") + 1]) if "--dim" in sys.argv else 0.0
BLACKOUT = float(sys.argv[sys.argv.index("--blackout") + 1]) if "--blackout" in sys.argv else 0.0   # lights out at this second
K = float(sys.argv[sys.argv.index("--k") + 1]) if "--k" in sys.argv else 1.0   # 2.0 renders the clock at 3840x2160
FPS, W, H = 24, int(1920 * K), int(1080 * K)
SS = 4 if K <= 1 else 2
RO = 270.0 * K
scale = RO / R

src = Image.open(face_path).convert("RGB")
cw, ch = W / scale, H / scale
box = (PX - cw / 2, PY - ch / 2, PX + cw / 2, PY + ch / 2)
bg = src.transform((W, H), Image.EXTENT, box, Image.BICUBIC).convert("RGBA")
CX, CY = W / 2, H / 2
SECOND = (196, 30, 30)
HAND = (22, 22, 24)


def hand_poly(angle, length, width, tail, taper):
    a = math.radians(angle)
    ux, uy = math.sin(a), -math.cos(a)
    nx, ny = -uy, ux
    tx, ty = CX + ux * length, CY + uy * length
    bx, by = CX - ux * tail, CY - uy * tail
    w0, w1 = width / 2, width * taper / 2
    pts = [(bx + nx * w0, by + ny * w0), (tx + nx * w1, ty + ny * w1), (tx - nx * w1, ty - ny * w1), (bx - nx * w0, by - ny * w0)]
    return [(x * SS, y * SS) for x, y in pts]


def draw_hands(hour_a, minute_a, second_angles):
    """second_angles: a list of angles blended together (motion blur during the snap)."""
    big = Image.new("RGBA", (W * SS, H * SS), (0, 0, 0, 0))
    d = ImageDraw.Draw(big)
    d.polygon(hand_poly(hour_a, RO * 0.52, 15 * K, RO * 0.07, 0.6), fill=HAND + (255,))
    d.polygon(hand_poly(minute_a, RO * 0.80, 10 * K, RO * 0.09, 0.6), fill=HAND + (255,))
    n = len(second_angles)
    for sa in second_angles:
        layer = Image.new("RGBA", (W * SS, H * SS), (0, 0, 0, 0))
        ld = ImageDraw.Draw(layer)
        ld.polygon(hand_poly(sa, RO * 0.90, 3.2 * K, RO * 0.22, 0.85), fill=SECOND + (int(255 / n) if n > 1 else 255,))
        a = math.radians(sa)
        tx, ty = CX - math.sin(a) * RO * 0.17, CY + math.cos(a) * RO * 0.17
        ld.ellipse(((tx - 7 * K) * SS, (ty - 7 * K) * SS, (tx + 7 * K) * SS, (ty + 7 * K) * SS), fill=SECOND + (int(255 / n) if n > 1 else 255,))
        big = Image.alpha_composite(big, layer)
    d = ImageDraw.Draw(big)
    d.ellipse(((CX - 9 * K) * SS, (CY - 9 * K) * SS, (CX + 9 * K) * SS, (CY + 9 * K) * SS), fill=SECOND + (255,))
    d.ellipse(((CX - 3.5 * K) * SS, (CY - 3.5 * K) * SS, (CX + 3.5 * K) * SS, (CY + 3.5 * K) * SS), fill=(40, 40, 42, 255))
    return big.resize((W, H), Image.LANCZOS)


STEP = 0.09


def second_angle(t):
    n = S0 + math.floor(t)
    frac = t - math.floor(t)
    base = 6.0 * n
    if frac >= 1.0 - STEP:
        u = (frac - (1.0 - STEP)) / STEP
        ease = 1 - (1 - u) ** 3
        return base + 6.0 * ease + 1.0 * math.sin(math.pi * u) * u
    return base


def second_samples(t):
    """Three sub-frame samples while the hand is stepping, one otherwise."""
    frac = t - math.floor(t)
    if frac >= 1.0 - STEP - 1.0 / FPS:
        return [second_angle(t + k / (3.0 * FPS)) for k in range(3)]
    return [second_angle(t)]


glass = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ImageDraw.Draw(glass).ellipse((CX - RO * 0.95, CY - RO * 1.25, CX + RO * 0.35, CY - RO * 0.15), fill=(255, 255, 255, 26))
glass = glass.filter(ImageFilter.GaussianBlur(28 * K))
clip_mask = Image.new("L", (W, H), 0)
ImageDraw.Draw(clip_mask).ellipse((CX - RO * 0.97, CY - RO * 0.97, CX + RO * 0.97, CY + RO * 0.97), fill=255)
glass.putalpha(ImageChops.multiply(glass.getchannel("A"), clip_mask))

# vignette mask (0 at centre, 255 at the corners), used only with --dim
vig = Image.new("L", (W, H), 0)
ImageDraw.Draw(vig).ellipse((CX - W * 0.55, CY - H * 0.70, CX + W * 0.55, CY + H * 0.70), fill=255)
vig = ImageChops.invert(vig).filter(ImageFilter.GaussianBlur(160 * K))


def ease_io(x):
    x = max(0.0, min(1.0, x))
    return x * x * (3 - 2 * x)


frames = int(round(DUR * FPS))
ff = subprocess.Popen(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24",
                       "-s", "%dx%d" % (W, H), "-r", str(FPS), "-i", "-", "-c:v", "libx264", "-crf", "12" if K <= 1 else "16",
                       "-pix_fmt", "yuv420p", "_clock_silent.mp4"], stdin=subprocess.PIPE)
for f in range(frames):
    t = f / FPS
    sec = S0 + t
    minute_angle = (M0 + sec / 60.0) * 6.0
    hour_angle = ((H0 % 12) + (M0 + sec / 60.0) / 60.0) * 30.0
    layer = draw_hands(hour_angle, minute_angle, second_samples(t))
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    shadow.putalpha(layer.getchannel("A").filter(ImageFilter.GaussianBlur(3.5 * K)).point(lambda v: int(v * 0.35)))
    shadow = ImageChops.offset(shadow, int(4 * K), int(6 * K))
    frame = Image.alpha_composite(bg, shadow)
    frame = Image.alpha_composite(frame, layer)
    frame = Image.alpha_composite(frame, glass).convert("RGB")
    if DIM > 0:
        dim_end = BLACKOUT if BLACKOUT > 0 else DUR
        k = ease_io((t - (dim_end - DIM)) / DIM)
        if k > 0:
            dark = Image.new("RGB", (W, H), (0, 0, 0))
            frame = Image.composite(dark, frame, vig.point(lambda v: int(v * 0.9 * k)))
            frame = Image.blend(frame, dark, 0.45 * k)
    if PUSH != 1.0:
        push_frames = int(round((BLACKOUT if BLACKOUT > 0 else DUR) * FPS))
        z = 1.0 + (PUSH - 1.0) * ease_io(f / max(1, push_frames - 1))
        bw, bh = W / z, H / z
        frame = frame.resize((W, H), Image.LANCZOS, box=(CX - bw / 2, CY - bh / 2, CX + bw / 2, CY + bh / 2))
    if BLACKOUT > 0 and t >= BLACKOUT - 2.0 / FPS:
        # the lights go out on the tick: two frames of decay on the pushed, dimmed frame, then black, with the second
        # hand's red cap left as a dot for a moment (an LED), then nothing
        k = min(1.0, (t - (BLACKOUT - 2.0 / FPS)) * FPS / 2.0)
        frame = Image.blend(frame, Image.new("RGB", (W, H), (0, 0, 0)), 0.3 + 0.7 * k)
        if t < BLACKOUT + 0.35:
            cap = Image.new("RGB", (W, H), (0, 0, 0))
            ImageDraw.Draw(cap).ellipse((CX - 5, CY - 5, CX + 5, CY + 5), fill=(120, 14, 14))
            frame = ImageChops.add(frame, cap)
    ff.stdin.write(frame.tobytes())
ff.stdin.close()
ff.wait()

n_ticks = int(math.ceil(DUR))
filt = ("sine=frequency=2600:duration=0.012,afade=t=out:st=0:d=0.012[hi];"
        "sine=frequency=240:duration=0.07,afade=t=out:st=0:d=0.07,volume=0.7[lo];"
        "[hi][lo]amix=inputs=2:duration=longest:normalize=0,volume=0.9,aformat=sample_rates=44100:channel_layouts=mono[t0];"
        "[t0]asplit=%d" % n_ticks + "".join("[s%d]" % k for k in range(n_ticks)) + ";"
        + ";".join("[s%d]adelay=%d:all=1[d%d]" % (k, k * 1000, k) for k in range(n_ticks)) + ";"
        + "".join("[d%d]" % k for k in range(n_ticks)) + "amix=inputs=%d:duration=longest:normalize=0,apad=whole_dur=%s[a]" % (n_ticks, DUR))
subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-filter_complex", filt, "-map", "[a]", "-t", str(DUR),
                "-ar", "44100", "_clock_ticks.wav"], check=True)
subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", "_clock_silent.mp4", "-i", "_clock_ticks.wav",
                "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", "-shortest", OUT], check=True)
os.remove("_clock_silent.mp4")
os.remove("_clock_ticks.wav")
print("wrote", OUT, frames, "frames, push", PUSH, "dim", DIM)
