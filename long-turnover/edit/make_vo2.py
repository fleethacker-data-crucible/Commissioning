import json,subprocess,os,sys,glob
sys.path.insert(0,'.')
from lines import L
from taskmap import VO
os.makedirs('vo',exist_ok=True)
meta={}
for i,s,t in L:
    src=glob.glob(f'gen/audio/renoise-{VO[i]}.*')[0]
    out=f'vo/{i}.wav'
    subprocess.run(['ffmpeg','-y','-loglevel','error','-i',src,'-af','aresample=48000,highpass=f=70,silenceremove=start_periods=1:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse,loudnorm=I=-18:TP=-2:LRA=7','-ar','48000','-ac','1',out],check=True)
    d=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',out]).decode())
    meta[i]={'spk':s,'text':t,'dur':round(d,3)}
json.dump(meta,open('vo/meta.json','w'),indent=1)
tot={}
for k,v in meta.items(): tot[v['spk']]=tot.get(v['spk'],0)+v['dur']
print(tot)
