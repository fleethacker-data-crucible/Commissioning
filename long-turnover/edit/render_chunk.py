import sys,json,os,io
from playwright.sync_api import sync_playwright
from PIL import Image
HERE=os.path.dirname(os.path.abspath(__file__))
a,b=int(sys.argv[1]),int(sys.argv[2])
TL=json.load(open(os.path.join(HERE,'timeline_full.json'),encoding='utf8'))
out=os.path.join(HERE,'frames');os.makedirs(out,exist_ok=True)
with sync_playwright() as p:
    br=p.chromium.launch(headless=True)
    pg=br.new_context(viewport={'width':854,'height':480},device_scale_factor=2).new_page()
    errs=[]
    pg.on('pageerror',lambda e:errs.append(str(e)))
    pg.goto('file:///'+os.path.join(HERE,'src','film.html').replace(os.sep,'/'))
    pg.evaluate('tl=>initFilm(tl)',TL)
    for i in range(a,b):
        fn=os.path.join(out,'f%06d.png'%i)
        if os.path.exists(fn):continue
        pg.evaluate('T=>renderFilm(T)',i/24.0)
        im=Image.open(io.BytesIO(pg.screenshot(type='png'))).convert('RGB').resize((854,480),Image.LANCZOS)
        im.save(fn,compress_level=1)
    if errs:print('ERRORS',errs[:3])
    br.close()
