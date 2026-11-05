import sys,json,os,time
from playwright.sync_api import sync_playwright
from PIL import Image
import io
HERE=os.path.dirname(os.path.abspath(__file__))
TL=open(os.path.join(HERE,'timeline_full.json'),encoding='utf8').read()
def run(times,outdir,names=None,downscale=True,port=None):
    os.makedirs(outdir,exist_ok=True)
    with sync_playwright() as p:
        b=p.chromium.launch(headless=True,args=['--force-device-scale-factor=2'])
        ctx=b.new_context(viewport={'width':854,'height':480},device_scale_factor=2)
        pg=ctx.new_page()
        errs=[]
        pg.on('pageerror',lambda e:errs.append(str(e)))
        pg.on('console',lambda m:errs.append(m.text) if m.type=='error' else None)
        pg.goto('file:///'+os.path.join(HERE,'src','film.html').replace(os.sep,'/'))
        pg.evaluate('tl=>initFilm(tl)',json.loads(TL))
        for n,T in enumerate(times):
            pg.evaluate('T=>renderFilm(T)',T)
            png=pg.screenshot(type='png')
            im=Image.open(io.BytesIO(png)).convert('RGB')
            nm=names[n] if names else '%06d'%n
            if downscale: im.resize((854,480),Image.LANCZOS).save(os.path.join(outdir,nm+'.png'))
            else: im.save(os.path.join(outdir,nm+'.png'))
        if errs: print('ERRORS',errs[:5])
        b.close()
if __name__=='__main__':
    # usage: render.py outdir full|ds T1 T2 ...
    out=sys.argv[1];mode=sys.argv[2];ts=[float(x) for x in sys.argv[3:]]
    run(ts,out,names=['t%07.2f'%t for t in ts],downscale=(mode=='ds'))
