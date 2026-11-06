import json,os,sys,math
import numpy as np
from PIL import Image
HERE=os.path.dirname(os.path.abspath(__file__))
TL=json.load(open(os.path.join(HERE,'timeline_full.json'),encoding='utf8'))
BEATS=TL['beats'];FPS=24
RES=int(os.environ.get('RES','480'))
if RES==1080: W,H=1920,1080;LB_T=119;LB_B=961;CLIPD='clips1080';NATD='nat1080';FRD='frames1080';GRAIN=1.1
else: W,H=854,480;LB_T=53;LB_B=427;CLIPD='clips';NATD='nat';FRD='frames';GRAIN=0.9
# ---- shot map: beat-local segments for generated beats ----
C=lambda tid,s,e,off=0:dict(src='clip',id=tid,s=s,e=e,off=off)
ST=lambda tid,s,e,kb:dict(src='still',id=tid,s=s,e=e,kb=kb)
N=lambda jid,s,e:dict(src='nat',id=jid,s=s,e=e)
DUR={b['id']:b['dur'] for b in BEATS}
d=DUR
SHOTS={
 'b01':[C(445871,0,d['b01'])],
 'b02':[C(445872,0,d['b02'])],
 'b03':[C(445873,0,min(3.6,d['b03']-2.4)),ST(445852,min(3.6,d['b03']-2.4),d['b03'],[(.80,.47,.47),(.70,.46,.48)])],
 'b04':[ST(445854,0,d['b04'],[(.92,.50,.50),(.74,.51,.46)])],
 'b07':[C(445874,0,d['b07'])],
 'b08':[C(445875,0,d['b08'])],
 'b09':[C(445876,0,d['b09'])],
 'b11':[ST(445853,0,d['b11'],[(.86,.50,.56),(.70,.50,.55)])],
 'b12':[C(447915,0,6),N('b12_ui',6,d['b12'])],  # pass 5 retake, take A only (user's pick): laptop square in front of her
 'b18':[C(449913,0,d['b18'])],  # pass 8 retake: seated in chair
 'b20':[N('b20_ui',0,4),C(445879,4,d['b20'])],
 'b28':[C(445880,0,d['b28'])],
 'b31':[C(445881,0,d['b31'])],
 'b32':[C(445882,0,2.5),N('b32_ui',2.5,d['b32']-3.4),C(445882,d['b32']-3.4,d['b32'],4.6)],
 'b33':[C(445883,0,d['b33'])],
 'b34':[C(445884,0,d['b34'])],
}
for b in BEATS:
    if b['id'] not in SHOTS:SHOTS[b['id']]=[N(b['id'],0,b['dur'])]
# ---- masks ----
yy,xx=np.mgrid[0:H,0:W].astype(np.float32)
r=np.sqrt(((xx-W/2)/(W/2))**2+((yy-H/2)/(H/2))**2)/1.0
r=np.sqrt(((xx-W/2)/(W/2))**2+((yy-H/2)/(H/2))**2)
k=np.clip((r*0.75-0.55)/0.45,0,1);k=k*k*(3-2*k)
VIG=(1-0.6*k)[...,None].astype(np.float32)
_cache={}
def load(path):
    im=_cache.get(path)
    if im is None:
        im=np.asarray(Image.open(path).convert('RGB'),dtype=np.float32)
        if len(_cache)>400:_cache.clear()
        _cache[path]=im
    return im
_still={}
def still_src(tid):
    im=_still.get(tid)
    if im is None:
        im=Image.open(os.path.join(HERE,'gen','renoise-%d.png'%tid)).convert('RGB')
        sw=max(2*W,im.width) if RES!=1080 else im.width
        if sw!=im.width:im=im.resize((sw,int(im.height*sw/im.width)),Image.LANCZOS)
        _still[tid]=im
    return im
def still_frame(tid,p,kb):
    im=still_src(tid);(a0,x0,y0),(a1,x1,y1)=kb
    pp=p*p*(3-2*p)
    sc=a0+(a1-a0)*pp;cx=x0+(x1-x0)*pp;cy=y0+(y1-y0)*pp
    kx=im.width*sc/W;ky=kx
    ox=cx*im.width-W/2*kx;oy=cy*im.height-H/2*ky
    ox=min(max(ox,0),im.width-W*kx);oy=min(max(oy,0),im.height-H*ky)
    out=im.transform((W,H),Image.AFFINE,(kx,0,ox,0,ky,oy),Image.BICUBIC)
    return np.asarray(out,dtype=np.float32)
def clip_frame(tid,t,seglen=0,off=0):
    d=os.path.join(HERE,CLIPD,str(tid))
    n=CLIPN.setdefault(tid,len(os.listdir(d)))
    avail=(n-1)/FPS-off
    if seglen>avail+0.05 and avail>0: t=t*avail/seglen
    i=min(n-1,max(0,int(round((t+off)*FPS))))
    return load(os.path.join(d,'f%05d.png'%i))
CLIPN={}
def nat_frame(jid,t):
    d=os.path.join(HERE,NATD,jid)
    n=CLIPN.setdefault(jid,len(os.listdir(d)))
    i=min(n-1,max(0,int(round(t*FPS))))
    return load(os.path.join(d,'f%05d.png'%i))
def letterbox(im):
    im=im*VIG
    im[:LB_T]=2;im[LB_B:]=2
    return im
def beat_frame(bi,tl):
    b=BEATS[bi];segs=SHOTS[b['id']]
    seg=segs[-1]
    for s in segs:
        if s['s']<=tl<s['e']:seg=s;break
    if tl>=segs[-1]['e']:seg=segs[-1];tl=min(tl,seg['e']-1/FPS+0.65) # allow extension for transitions
    if seg['src']=='clip':return letterbox(clip_frame(seg['id'],tl-seg['s'],seg['e']-seg['s'],seg['off']).copy())
    if seg['src']=='still':
        p=min(1,max(0,(tl-seg['s'])/(seg['e']-seg['s'])));return letterbox(still_frame(seg['id'],p,seg['kb']))
    return nat_frame(seg['id'],tl-seg['s']).copy()
def soft(x):x=min(1,max(0,x));return x*x*(3-2*x)
def frame(i):
    T=i/FPS
    bi=0
    for k_,b in enumerate(BEATS):
        if T>=b['start']:bi=k_
    b=BEATS[bi];tl=T-b['start']
    trd=0 if b['tr']=='cut' else (0.6 if b['tr']=='dip' else 0.5)
    if bi>0 and tl<trd:
        k_=soft(tl/trd);prev=beat_frame(bi-1,T-BEATS[bi-1]['start'])
        if b['tr']=='dip':
            out=prev*(1-k_*2) if k_<.5 else beat_frame(bi,tl)*((k_-.5)*2)
        else:
            out=prev*(1-k_)+beat_frame(bi,tl)*k_
    else:out=beat_frame(bi,tl)
    tot=TL['total']
    fin=min(1,max(0,T/0.25));fout=1-min(1,max(0,(T-(tot-1.2))/1.2))
    out=out*(fin*fout)
    g=np.random.default_rng(i).normal(0,GRAIN,(H,W,1)).astype(np.float32)
    out=np.clip(out+g,0,255).astype(np.uint8)
    return out
if __name__=='__main__':
    a,b=int(sys.argv[1]),int(sys.argv[2]);out=os.path.join(HERE,FRD);os.makedirs(out,exist_ok=True)
    for i in range(a,b):
        fn=os.path.join(out,'f%06d.png'%i)
        if os.path.exists(fn):continue
        Image.fromarray(frame(i)).save(fn,compress_level=1)
