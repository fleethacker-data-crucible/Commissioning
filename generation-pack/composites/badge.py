#!/usr/bin/env python3
"""Fictional ID badge for the civilian developer. Blank photo area, first name, and the tag 'CIV'.
Deliberately NOT a copy of any real government ID: no seal, no real layout, no real colour bands.
  python badge.py [FIRSTNAME] [--label] -> badge.png (600x900, transparent corners). --label adds a small 'FICTIONAL, FOR FILM' footer."""
import sys
from PIL import Image, ImageDraw, ImageFont
args = [x for x in sys.argv[1:] if not x.startswith('--')]
name = (args[0] if args else 'MORGAN').upper()
W, H = 600, 900
im = Image.new('RGBA', (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
f = lambda s, b=True: ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans%s.ttf' % ('-Bold' if b else ''), s)
d.rounded_rectangle((0, 0, W - 1, H - 1), 40, fill=(250, 250, 246, 255), outline=(60, 70, 90, 255), width=6)
d.rounded_rectangle((0, 0, W - 1, 150), 40, fill=(22, 60, 70, 255)); d.rectangle((0, 100, W - 1, 150), fill=(22, 60, 70, 255))
d.rounded_rectangle((W // 2 - 50, 28, W // 2 + 50, 48), 10, fill=(10, 30, 36, 255))   # lanyard slot
d.text((W // 2, 105), 'TEAM CREDENTIAL', font=f(34), fill=(230, 236, 238, 255), anchor='mm')
d.rectangle((150, 190, 450, 530), fill=(196, 202, 210, 255))                         # blank photo area
d.ellipse((260, 230, 340, 310), fill=(160, 168, 178, 255)); d.rounded_rectangle((215, 330, 385, 530), 70, fill=(160, 168, 178, 255))
d.text((W // 2, 600), name, font=f(70), fill=(20, 26, 40, 255), anchor='mm')
d.rounded_rectangle((200, 690, 400, 790), 18, fill=(214, 169, 72, 255)); d.text((W // 2, 740), 'CIV', font=f(66), fill=(20, 26, 40, 255), anchor='mm')
if '--label' in sys.argv: d.text((W // 2, 850), 'FICTIONAL, FOR FILM', font=f(22, False), fill=(110, 118, 130, 255), anchor='mm')
im.save('badge.png'); print('wrote badge.png for', name)
