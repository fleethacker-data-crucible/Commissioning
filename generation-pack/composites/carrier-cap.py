#!/usr/bin/env python3
"""Text for the carrier Sailor, composited in the edit: cap embroidery and the two chest tapes.
Names and numbers are FICTIONAL. Tape and cap colours are placeholders, not checked against uniform regulations.
  python carrier-cap.py [SHIP] [HULL] [LASTNAME] -> cap-embroidery.png, tape-name.png, tape-usnavy.png (transparent)"""
import sys
from PIL import Image, ImageDraw, ImageFont
ship = sys.argv[1] if len(sys.argv) > 1 else 'USS CRUCIBLE'
hull = sys.argv[2] if len(sys.argv) > 2 else 'CVN 99'
last = (sys.argv[3] if len(sys.argv) > 3 else 'REYES').upper()
B = lambda s: ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', s)
im = Image.new('RGBA', (900, 260), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
d.text((450, 80), ship.upper(), font=B(84), fill=(214, 169, 72, 255), anchor='mm')
d.text((450, 190), hull.upper(), font=B(70), fill=(214, 169, 72, 255), anchor='mm'); im.save('cap-embroidery.png')
for fn, txt in (('tape-name.png', last), ('tape-usnavy.png', 'U.S. NAVY')):
    t = Image.new('RGBA', (600, 120), (0, 0, 0, 0)); d = ImageDraw.Draw(t)
    d.rounded_rectangle((0, 0, 599, 119), 10, fill=(30, 40, 70, 255)); d.text((300, 60), txt, font=B(66), fill=(235, 235, 235, 255), anchor='mm'); t.save(fn)
print('wrote cap-embroidery.png tape-name.png tape-usnavy.png for', ship, hull, last)
