"""python test_frame.py <beatid> <t> [<beatid> <t> ...]  -> renders single native frames to the scratch dir for review"""
import sys,json,os,io
from playwright.sync_api import sync_playwright
from PIL import Image
HERE=os.path.dirname(os.path.abspath(__file__))
TL=json.load(open(os.path.join(HERE,'timeline_full.json'),encoding='utf8'))
B={b['id']:b for b in TL['beats']}
OUT=sys.argv[1];args=sys.argv[2:]
with sync_playwright() as p:
    br=p.chromium.launch(headless=True)
    pg=br.new_context(viewport={'width':854,'height':480},device_scale_factor=2).new_page()
    errs=[];pg.on('pageerror',lambda e:errs.append(str(e)));pg.on('console',lambda m:errs.append(m.text) if m.type=='error' else None)
    pg.goto('file:///'+os.path.join(HERE,'src','film.html').replace(os.sep,'/'))
    pg.evaluate('tl=>initFilm(tl)',TL)
    for i in range(0,len(args),2):
        bid,t=args[i],float(args[i+1]);b=B[bid]
        pg.evaluate('a=>renderBeatLocal(a[0],a[1],a[2],a[3],a[4])',[b['scene'],t,b['dur'],b['cues'],bid])
        Image.open(io.BytesIO(pg.screenshot(type='png'))).convert('RGB').resize((854,480),Image.LANCZOS).save(os.path.join(OUT,f'{bid}_{t}.png'))
    print('ERRORS',errs[:5]) if errs else print('ok')
    br.close()
