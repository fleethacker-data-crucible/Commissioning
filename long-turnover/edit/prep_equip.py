"""Crop/resize the vendor product photos in gen/equip and write src/equip.js (base64 data URIs)."""
import base64,io,os
from PIL import Image
HERE=os.path.dirname(os.path.abspath(__file__));E=os.path.join(HERE,'gen','equip')
def jpg(im,q=86):
    b=io.BytesIO();im.convert('RGB').save(b,'JPEG',quality=q,optimize=True);return 'data:image/jpeg;base64,'+base64.b64encode(b.getvalue()).decode()
def flat(im,bg=(244,241,232)):
    im=im.convert('RGBA');base=Image.new('RGBA',im.size,bg+(255,));base.alpha_composite(im);return base.convert('RGB')
out={}
# Crown: Neurosity lifestyle photo 1920x1080 -> portrait crop around the head, dark bg fits the film
im=Image.open(os.path.join(E,'crown.jpg'));im=im.crop((560,0,1460,1080)).resize((500,600),Image.LANCZOS);out['crown']=jpg(im)
# Gel cap: OpenBCI 3000x3000 white bg -> crop to the cap and shoulders
im=Image.open(os.path.join(E,'gelcap.jpg'));im=im.crop((300,0,2700,1725)).resize((480,345),Image.LANCZOS);out['gelcap']=jpg(im)
# Cyton kit: 1000x1000 transparent -> cream card
im=Image.open(os.path.join(E,'cyton.png'));im=flat(im).resize((300,300),Image.LANCZOS);out['cyton']=jpg(im)
# Polar H10: 600x600 transparent -> cream card, tighten crop
im=Image.open(os.path.join(E,'polar_0496c9c54f1e296e047c2ccb7c3710a989b550a9.png'));im=flat(im.crop((0,120,600,480))).resize((300,180),Image.LANCZOS);out['polar']=jpg(im)
# BITalino kit: 800x800 white bg -> crop the kit
im=Image.open(os.path.join(E,'bitalino.jpg'));im=im.crop((0,160,800,640)).resize((300,180),Image.LANCZOS);out['bitalino']=jpg(im)
js='// product photos (vendor images, see NOTES.md), embedded for the equipment beat\nconst EQ='+'{'+','.join(f'{k}:"{v}"' for k,v in out.items())+'};\n'
open(os.path.join(HERE,'src','equip.js'),'w').write(js)
print({k:len(v)//1024 for k,v in out.items()},'KB')
