import json,re
TL=json.load(open('timeline_full.json'))
NAME={'CAL':'SULLIVAN','TOM':'REYES','REL':'RELIEF','HAR':''}
def ts(x):
    ms=int(round(x*1000));h,ms=divmod(ms,3600000);m,ms=divmod(ms,60000);s,ms=divmod(ms,1000);return f"{h:02d}:{m:02d}:{s:02d},{ms:03d}"
cues=[];cur=None
for c in TL['clips']:
    end=c['t']+c['dur']
    if cur and c['spk']==cur['spk'] and c['spk']=='HAR' and c['beat']==cur['beat'] and (len(cur['text'])+1+len(c['text'])<=84) and c['t']-cur['end']<0.9 and end-cur['t']<=7.5:
        cur['text']+=' '+c['text'];cur['end']=end
    else:
        if cur:cues.append(cur)
        cur={'spk':c['spk'],'text':c['text'],'t':c['t'],'end':end,'beat':c['beat']}
if cur:cues.append(cur)
def wrap(s,n=42):
    w=s.split();L=[];cur=''
    for x in w:
        if len((cur+' '+x).strip())>n and cur:L.append(cur.strip());cur=x
        else:cur+=' '+x
    L.append(cur.strip());return L
out=[]
for i,c in enumerate(cues,1):
    txt=c['text']
    if NAME[c['spk']]:txt=NAME[c['spk']]+': '+txt
    L=wrap(txt,42)
    if len(L)>2:
        L=wrap(txt,max(42,len(txt)//2+6))[:2] if len(wrap(txt,max(42,len(txt)//2+6)))<=2 else L
    out.append(f"{i}\n{ts(c['t'])} --> {ts(c['end']+0.15)}\n"+'\n'.join(L)+"\n")
open('../Long-Turnover-480p.srt','w',encoding='utf8').write('\n'.join(out))
print(len(cues),'cues; max lines',max(len(o.strip().split('\n'))-2 for o in out))
import sys;sys.path.insert(0,'.')
from composite import SHOTS
def src(b):
    segs=SHOTS[b['id']];parts=[]
    for s in segs:
        if s['src']=='clip':parts.append(f"Renoise Seedance 2.5 clip task {s['id']} ({s['s']:.1f}-{s['e']:.1f}s)")
        elif s['src']=='still':parts.append(f"Renoise Seedream 5.0 Pro still task {s['id']} with push-in ({s['s']:.1f}-{s['e']:.1f}s)")
        else:parts.append(f"native HTML/SVG '{s['id']}' ({s['s']:.1f}-{s['e']:.1f}s)")
    return '; '.join(parts)+'. '+b['pic']
tl=[]
for b in TL['beats']:
    gen=any(s['src']!='nat' for s in SHOTS[b['id']])
    tl.append({'beat':b['id'],'act':b['act'],'start':round(b['start'],2),'end':round(b['end'],2),'picture_source':src(b),'vo_text':b['vo'],'status':'generated' if gen else ('native, vendor product photos' if b['scene']=='flatlay' else 'native')})
json.dump({'title':'The Long Turnover, 480p (pass 8)','fps':24,'resolution':'854x480','total_seconds':round(TL['total'],2),'beats':tl},open('../timeline.json','w'),indent=1,ensure_ascii=False)
