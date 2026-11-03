import sys
from PIL import Image, ImageChops, ImageDraw

src, dbg = sys.argv[1], sys.argv[2]
seed = (int(sys.argv[3]), int(sys.argv[4]))
im = Image.open(src).convert("RGB")
W, H = im.size
ref = im.getpixel(seed)
print("size", W, H, "seed", seed, "seed color", ref)

# per-pixel colour distance to the plain screen colour (max over channels)
diff = ImageChops.difference(im, Image.new("RGB", im.size, ref))
r, g, b = diff.split()
dist = ImageChops.lighter(ImageChops.lighter(r, g), b)
TOL = int(sys.argv[5]) if len(sys.argv) > 5 else 28
mask = dist.point(lambda v: 255 if v <= TOL else 0)
px = mask.load()

# flood fill from the seed
seen = bytearray(W * H)
stack = [seed]
pts = []
while stack:
    x, y = stack.pop()
    if x < 0 or y < 0 or x >= W or y >= H:
        continue
    i = y * W + x
    if seen[i] or px[x, y] == 0:
        continue
    seen[i] = 1
    pts.append((x, y))
    stack.extend(((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)))
print("region pixels", len(pts))
xs = [p[0] for p in pts]
ys = [p[1] for p in pts]
x0, x1, y0, y1 = min(xs), max(xs), min(ys), max(ys)
print("bbox", x0, y0, x1, y1)

inside = {}
for x, y in pts:
    inside.setdefault(x, []).append(y)
rows = {}
for x, y in pts:
    rows.setdefault(y, []).append(x)


def fit(points):
    n = len(points)
    sx = sum(p[0] for p in points)
    sy = sum(p[1] for p in points)
    sxx = sum(p[0] ** 2 for p in points)
    sxy = sum(p[0] * p[1] for p in points)
    d = n * sxx - sx * sx
    if abs(d) < 1e-9:
        return None
    a = (n * sxy - sx * sy) / d
    return a, (sy - a * sx) / n


bw, bh = x1 - x0, y1 - y0
# top edge: top-most y per column, central 70 % of the width
top = [(x, min(v)) for x, v in inside.items() if x0 + 0.15 * bw <= x <= x1 - 0.15 * bw]
# bottom edge: bottom-most y per column, right 45 % (left part is hidden by the seated sailor)
bot = [(x, max(v)) for x, v in inside.items() if x >= x0 + 0.55 * bw and x <= x1 - 0.1 * bw]
# left edge: left-most x per row, upper 50 % (below that the sailor's head overlaps)
lef = [(min(v), y) for y, v in rows.items() if y0 + 0.1 * bh <= y <= y0 + 0.5 * bh]
# right edge: right-most x per row, central 80 %
rig = [(max(v), y) for y, v in rows.items() if y0 + 0.1 * bh <= y <= y1 - 0.1 * bh]

ft = fit(top)  # y = a x + b
fb = fit(bot)
fl = fit([(y, x) for x, y in lef])  # x = a y + b
fr = fit([(y, x) for x, y in rig])


def inter(hor, ver):
    a, b = hor  # y = a x + b
    c, d = ver  # x = c y + d
    # x = c (a x + b) + d  ->  x (1 - c a) = c b + d
    x = (c * b + d) / (1 - c * a)
    return (x, a * x + b)


tl, tr = inter(ft, fl), inter(ft, fr)
bl, br = inter(fb, fl), inter(fb, fr)
quad = [tl, tr, br, bl]
print("QUAD", [(round(x, 1), round(y, 1)) for x, y in quad])

out = im.copy()
d = ImageDraw.Draw(out)
d.polygon(quad, outline=(255, 255, 0))
for p in quad:
    d.ellipse((p[0] - 3, p[1] - 3, p[0] + 3, p[1] + 3), outline=(0, 255, 0))
out.save(dbg)
mask.save(dbg.replace(".png", "-mask.png"))
