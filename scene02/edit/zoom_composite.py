import glob
import math
import os
import sys

from PIL import Image, ImageChops, ImageDraw, ImageEnhance, ImageFilter

plate_dir, demo_path, out_dir = sys.argv[1], sys.argv[2], sys.argv[3]
OUT_W, OUT_H = 1280, 720
FPS = 24
SCREEN = (391, 133, 592, 243)          # plain monitor in the 854x480 plate (x0, y0, x1, y1)
REF = (136, 144, 172)                  # the monitor's plain colour
TOL = 36
T0, T1, T_END = 3.0, 7.6, 9.6          # zoom start, zoom end, clip end (seconds)
FINAL_W = SCREEN[2] - SCREEN[0] + 12   # final window: screen plus a thin bezel
CENTER_START = (427.0, 240.0)
CENTER_END = ((SCREEN[0] + SCREEN[2]) / 2, (SCREEN[1] + SCREEN[3]) / 2)

os.makedirs(out_dir, exist_ok=True)
plates = sorted(glob.glob(os.path.join(plate_dir, "p-*.png")))
print("plate frames", len(plates))

demo = Image.open(demo_path).convert("RGB")
bg = demo.getpixel((4, demo.size[1] - 4))
print("demo", demo.size, "background colour", bg)


def letterbox(img, size):
    canvas = Image.new("RGB", size, bg)
    s = min(size[0] / img.size[0], size[1] / img.size[1])
    new = img.resize((max(1, int(img.size[0] * s)), max(1, int(img.size[1] * s))), Image.LANCZOS)
    canvas.paste(new, ((size[0] - new.size[0]) // 2, (size[1] - new.size[1]) // 2))
    return canvas


sw, sh = SCREEN[2] - SCREEN[0], SCREEN[3] - SCREEN[1]
demo_screen = letterbox(demo, (sw * 8, sh * 8))      # big master for the monitor
demo_full = letterbox(demo, (OUT_W, OUT_H))          # the full-screen hand-off frame


def smooth(x):
    x = max(0.0, min(1.0, x))
    return x * x * (3 - 2 * x)


rect_mask = Image.new("L", (854, 480), 0)
ImageDraw.Draw(rect_mask).rectangle((SCREEN[0] + 1, SCREEN[1] + 1, SCREEN[2] - 1, SCREEN[3] - 1), fill=255)

n_out = int(round(T_END * FPS))
for n in range(n_out):
    t = n / FPS
    plate = Image.open(plates[min(n, len(plates) - 1)]).convert("RGB")   # last frame is held
    p = smooth((t - T0) / (T1 - T0))

    # window into the plate (log-interpolated zoom, same aspect as the output)
    W0 = 480.0 * OUT_W / OUT_H                      # widest 16:9 window the 854x480 plate allows
    ww = W0 * (FINAL_W / W0) ** p
    wh = ww * OUT_H / OUT_W
    cx = CENTER_START[0] + (CENTER_END[0] - CENTER_START[0]) * p
    cy = CENTER_START[1] + (CENTER_END[1] - CENTER_START[1]) * p
    wx0 = max(0.0, min(854.0 - ww, cx - ww / 2))
    wy0 = max(0.0, min(480.0 - wh, cy - wh / 2))
    box = (wx0, wy0, wx0 + ww, wy0 + wh)
    plate_out = plate.resize((OUT_W, OUT_H), Image.LANCZOS, box=box)

    # matte: screen colour inside the monitor rectangle (anything in front stays in front)
    diff = ImageChops.difference(plate, Image.new("RGB", plate.size, REF))
    r, g, b = diff.split()
    dist = ImageChops.lighter(ImageChops.lighter(r, g), b)
    colour = dist.point(lambda v: 255 if v <= TOL else 0)
    mask = ImageChops.multiply(colour, rect_mask).filter(ImageFilter.MedianFilter(5))
    mask = mask.filter(ImageFilter.GaussianBlur(0.7))
    # the sailor's head hides part of the screen until the screen fills the frame; fade that out
    cover = smooth((p - 0.80) / 0.16)
    if cover > 0:
        mask = ImageChops.lighter(mask, rect_mask.point(lambda v: int(v * cover)))
    mask_out = mask.resize((OUT_W, OUT_H), Image.BILINEAR, box=box)

    # demo drawn from its full-size master at the monitor's current on-screen size
    sx = OUT_W / ww
    sy = OUT_H / wh
    ox0, oy0 = (SCREEN[0] - wx0) * sx, (SCREEN[1] - wy0) * sy
    rw, rh = max(2, int(round(sw * sx))), max(2, int(round(sh * sy)))
    layer = Image.new("RGB", (OUT_W, OUT_H), (0, 0, 0))
    layer.paste(demo_screen.resize((rw, rh), Image.LANCZOS), (int(round(ox0)), int(round(oy0))))
    layer = ImageEnhance.Brightness(layer).enhance(0.82 + 0.18 * p)
    layer = Image.blend(layer, Image.new("RGB", (OUT_W, OUT_H), (170, 70, 70)), 0.10 * (1 - p))

    frame = Image.composite(layer, plate_out, mask_out)

    # final hand-off: crossfade into the full-screen demo
    c = smooth((p - 0.90) / 0.10)
    if c > 0:
        frame = Image.blend(frame, demo_full, c)
    frame.save(os.path.join(out_dir, f"f-{n:04d}.jpg"), quality=95)
    if n % 24 == 0:
        print("frame", n, "of", n_out, "p=%.2f" % p)
print("done", n_out)
