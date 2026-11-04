#!/usr/bin/env python3
"""Terminal screens for the laptop monitor, one image per step of The Desk (1920x1080).
The error text is illustrative (modelled on the wording PowerShell and Windows use), not captured from a real machine.
Check it against what your own locked-down endpoint prints before you use it on screen.
  python terminal.py [username] -> term-0.png ... term-3.png"""
import sys
from PIL import Image, ImageDraw, ImageFont
user = sys.argv[1] if len(sys.argv) > 1 else 'morgan'
P = 'PS C:\\Users\\%s> ' % user
def err(cmd): return ["%s : The term '%s' is not recognized as the name of a cmdlet, function, script file, or operable program." % (cmd, cmd),
                      "Check the spelling of the name, or if a path was included, verify that the path is correct and try again."]
steps = [
  [(P, 'python --version')] ,
  [(P, 'python --version'), None] ,
  [(P, 'git clone ...'), None],
  [(P, 'terraform init'), None],
]
lines = [(P + 'python --version', err('python')),
         (P + 'git clone https://example.invalid/repo.git', err('git')),
         (P + 'terraform init', err('terraform'))]
W, H = 1920, 1080
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf', 26)
RED, FG, BG = (230, 90, 90), (235, 235, 235), (1, 36, 86)
def render(n, blocked=False):
    im = Image.new('RGB', (W, H), BG); d = ImageDraw.Draw(im); y = 40
    d.text((40, 40 + 0), 'Windows PowerShell', font=font, fill=FG); y = 100
    for i in range(n):
        d.text((40, y), lines[i][0], font=font, fill=FG); y += 40
        for e in lines[i][1]:
            # wrap at 118 chars
            while e:
                d.text((40, y), e[:112], font=font, fill=RED); e = e[112:]; y += 34
        y += 20
    d.text((40, y), P + '_', font=font, fill=FG)
    if blocked:
        d.rectangle((460, 380, 1460, 700), fill=(240, 240, 240), outline=(120, 120, 120), width=3)
        d.rectangle((460, 380, 1460, 440), fill=(180, 40, 40))
        d.text((490, 396), 'Access denied', font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 30), fill=(255, 255, 255))
        d.text((490, 470), 'This program is blocked by group policy.', font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 28), fill=(20, 20, 20))
        d.text((490, 520), 'For more information, contact your system administrator.', font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 26), fill=(60, 60, 60))
    return im
for k in range(4): render(k, blocked=(k == 3)).save('term-%d.png' % k)
print('wrote term-0.png .. term-3.png (term-3 adds a blocked dialog)')
