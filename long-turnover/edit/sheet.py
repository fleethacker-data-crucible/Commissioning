import json
from PIL import Image,ImageDraw,ImageFont
TL=json.load(open('timeline_full.json'))
bs=TL['beats'];cols=6;rows=(len(bs)+cols-1)//cols
tw,th=427,240;pad=6;top=26
S=Image.new('RGB',(cols*(tw+pad)+pad,rows*(th+top+pad)+pad+50),(8,12,24))
d=ImageDraw.Draw(S)
try:F=ImageFont.truetype('C:/Windows/Fonts/bahnschrift.ttf',17);FB=ImageFont.truetype('C:/Windows/Fonts/georgiab.ttf',26)
except:F=FB=None
d.text((pad+4,10),'THE LONG TURNOVER: storyboard contact sheet (480p, pass 8: hard-night retake, one frame per beat)',fill=(232,200,114),font=FB)
for i,b in enumerate(bs):
    f=int((b['start']+b["dur"]*0.8)*24)
    im=Image.open('frames/f%06d.png'%f).resize((tw,th),Image.LANCZOS)
    x=pad+(i%cols)*(tw+pad);y=50+pad+(i//cols)*(th+top+pad)
    S.paste(im,(x,y+top))
    m,s=divmod(b['start'],60)
    d.text((x+2,y+3),f"{b['id']}  {int(m)}:{s:04.1f}  {b['scene']}  [{'generated' if b['kind']=='S' and b['scene'] not in ('blackcard','title') else 'native'}]",fill=(200,211,230) if b['kind']=='G' or b['scene'] in ('blackcard','title') else (255,168,58),font=F)
S.save('../storyboard-contact-sheet.png')
print(S.size)
