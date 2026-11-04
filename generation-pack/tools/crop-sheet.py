#!/usr/bin/env python3
"""Split a 2x2 room sheet (NORTH top-left, EAST top-right, SOUTH bottom-left, WEST bottom-right) into four panel images.
  python crop-sheet.py sheet.png outdir [--margin 8]
The margin trims the thin white dividing lines. Each panel is saved as <outdir>/north.png etc.
After cropping, check each panel by eye: the small corner label (NORTH, EAST ...) can be painted out or cropped further."""
import sys, os
from PIL import Image
a = [x for x in sys.argv[1:] if not x.startswith('--')]
if len(a) < 2: sys.exit(__doc__)
margin = int(sys.argv[sys.argv.index('--margin') + 1]) if '--margin' in sys.argv else 8
if str(margin) in a: a.remove(str(margin))
im = Image.open(a[0]).convert('RGB'); W, H = im.size
os.makedirs(a[1], exist_ok=True)
for name, (cx, cy) in {'north': (0, 0), 'east': (1, 0), 'south': (0, 1), 'west': (1, 1)}.items():
    box = (cx * W // 2 + margin, cy * H // 2 + margin, (cx + 1) * W // 2 - margin, (cy + 1) * H // 2 - margin)
    p = im.crop(box); p.save(os.path.join(a[1], name + '.png')); print(name, p.size)
