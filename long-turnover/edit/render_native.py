import sys,json,os,io
from playwright.sync_api import sync_playwright
from PIL import Image
HERE=os.path.dirname(os.path.abspath(__file__))
TL=json.load(open(os.path.join(HERE,'timeline_full.json'),encoding='utf8'))
EXT=0.7
RES=int(os.environ.get('RES','480'))
VW,VH,NATD=(1920,1080,'nat1080') if RES==1080 else (854,480,'nat')
def jobs():
    J=[]
    for b in TL['beats']:
        if b['kind']=='G' or b['scene'] in('blackcard','title'):
            J.append((b['id'],b['scene'],b['dur'],b['cues'],b['id']))
    J+= [('b12_ui','dialogUI',6.0,[],'b12_ui'),('b20_ui','questionUI',6.0,[],'b20_ui'),('b32_ui','reliefUI',10.0,[],'b32_ui')]
    return J
def run(sel):
    with sync_playwright() as p:
        br=p.chromium.launch(headless=True)
        pg=br.new_context(viewport={'width':VW,'height':VH},device_scale_factor=2).new_page()
        errs=[];pg.on('pageerror',lambda e:errs.append(str(e)))
        pg.goto('file:///'+os.path.join(HERE,'src','film.html').replace(os.sep,'/'))
        pg.evaluate('tl=>initFilm(tl)',TL)
        for (jid,scene,dur,cues,bid) in sel:
            out=os.path.join(HERE,NATD,jid);os.makedirs(out,exist_ok=True)
            n=int((dur+EXT)*24)+1
            for i in range(n):
                fn=os.path.join(out,'f%05d.png'%i)
                if os.path.exists(fn):continue
                pg.evaluate('a=>renderBeatLocal(a[0],a[1],a[2],a[3],a[4])',[scene,i/24.0,dur,cues,bid])
                Image.open(io.BytesIO(pg.screenshot(type='png'))).convert('RGB').resize((VW,VH),Image.LANCZOS).save(fn,compress_level=1)
        if errs:print('ERRORS',errs[:3])
        br.close()
if __name__=='__main__':
    J=jobs()
    if len(sys.argv)>1 and sys.argv[1]=='list':
        for j in J:print(j[0],j[1],j[2]);sys.exit()
    k,W=int(sys.argv[1]),int(sys.argv[2])
    run([j for i,j in enumerate(J) if i%W==k])
