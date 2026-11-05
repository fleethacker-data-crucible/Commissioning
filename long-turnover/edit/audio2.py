import json,subprocess,os,re,sys,glob
sys.path.insert(0,'.')
from taskmap import SFX
TL=json.load(open('timeline_full.json'));TOT=TL['total']+1.0
B={b['id']:b for b in TL['beats']}
clips=TL['clips']
GAIN={'HAR':1.0,'CAL':0.9,'TOM':0.85,'REL':0.95}
def sfx(name):
    f=glob.glob(f'gen/audio/renoise-{SFX[name]}.*');return f[0]
def dur(f):return float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f]).decode())
ins=[];fc=[];labels=[]
def inp(path):
    ins.append(path);return len(ins)-1
def place(path,at,vol,fade_in=0.03,fade_out=0.03,extra='',trim=None):
    n=inp(path);k=len(labels);ms=int(round(at*1000))
    tr=f"atrim=0:{trim},"if trim else ''
    d=trim or dur(path)
    fc.append(f"[{n}:a]aresample=48000,aformat=channel_layouts=mono,{tr}{extra}afade=t=in:d={fade_in},afade=t=out:st={max(0,d-fade_out):.3f}:d={fade_out},volume={vol},adelay={ms},apad=whole_dur={TOT:.2f}[x{k}]")
    labels.append(f"[x{k}]")
# ---- voices ----
for c in clips: place(f"vo/{c['id']}.wav",c['t'],GAIN[c['spk']])
nvo=len(labels)
# ---- beds ----
hum=sfx('hum');hd=dur(hum)
def hum_bed(a,b,vol):
    n=inp(hum);k=len(labels);ms=int(round(a*1000));L=b-a
    fc.append(f"[{n}:a]aresample=48000,aformat=channel_layouts=mono,aloop=loop=-1:size={int(hd*48000)-2400},atrim=0:{L:.3f},afade=t=in:d=1.2,afade=t=out:st={max(0,L-1.5):.3f}:d=1.5,volume={vol},adelay={ms},apad=whole_dur={TOT:.2f}[x{k}]")
    labels.append(f"[x{k}]")
hum_bed(0,B['b05']['end']+0.3,0.55)
hum_bed(B['b18']['start']-0.5,B['b18']['end']+0.6,0.4)
hum_bed(B['b31']['start']-0.6,B['b34']['end']+0.5,0.45)
k=len(labels);fc.append(f"anoisesrc=d={TOT:.2f}:c=pink:a=0.5:r=48000,lowpass=f=2500,highpass=f=40,volume=0.010,afade=t=in:d=0.03[x{k}]");labels.append(f"[x{k}]")
# ---- alarm (repeat the 4 s clip) ----
al=sfx('alarm');ad=dur(al)
def alarm(a,b,vol):
    t=a
    while t<b-0.5:
        place(al,t,vol,trim=min(ad,b-t));t+=ad
alarm(B['b01']['start']+0.4,B['b04']['end'],0.5)
alarm(B['b31']['start']+0.2,B['b32']['start']+2.6,0.4)
# ---- spot effects ----
place(sfx('page'),B['b02']['start']+3.7,0.8)
place(sfx('pen'),B['b09']['start']+0.6,0.7)
place(sfx('cup'),B['b11']['start']+B['b11']['dur']-0.9,0.9)
place(sfx('chime'),B['b21']['start']+2.5,0.6)
place(sfx('bell'),B['b35']['start']+0.15,0.8)
# title swell (synth, as before)
k=len(labels);fc.append(f"aevalsrc='0.5*sin(2*PI*82*t)*sin(PI*t/2.2)+0.3*sin(2*PI*123*t)*sin(PI*t/2.2)':d=2.2:s=48000,afade=t=in:d=0.03,afade=t=out:st=2.17:d=0.03,volume=0.10,adelay={int(B['b06']['start']*1000)},apad=whole_dur={TOT:.2f}[x{k}]");labels.append(f"[x{k}]")
# ui ticks (synth)
tick="0.8*exp(-70*t)*sin(2*PI*2100*t)"
def synth(expr,d,at,vol):
    k=len(labels);fc.append(f"aevalsrc='{expr}':d={d}:s=48000,afade=t=in:d=0.03,afade=t=out:st={max(0,d-0.03):.3f}:d=0.03,volume={vol},adelay={int(round(at*1000))},apad=whole_dur={TOT:.2f}[x{k}]");labels.append(f"[x{k}]")
for dt in (2.0,3.0,3.9,4.8):synth(tick,0.15,B['b14']['start']+dt,0.05)
for q in range(1,7):synth(tick,0.15,B['b15']['start']+B['b15']['cues'][q],0.05)
synth(tick,0.15,B['b19']['start']+B['b19']['cues'][3],0.07)
for q in (0,2,3,4,5,6):synth("0.9*exp(-14*t)*sin(2*PI*95*t)",0.3,B['b16']['start']+B['b16']['cues'][q]+0.5,0.08)
for q in range(5):synth(tick,0.15,B['b24']['start']+0.7+q*min(1.5,(B['b24']['dur']-4)/5)+0.6,0.04)
# ---- score, ducked under voice ----
sc=sfx('score');sd=dur(sc)
def score(a,b,vol,k_in=3,k_out=6):
    n=inp(sc);k=len(labels);ms=int(round(a*1000));L=b-a
    fc.append(f"[{n}:a]aresample=48000,aformat=channel_layouts=mono,atrim=0:{min(L,sd):.3f},afade=t=in:d={k_in},afade=t=out:st={max(0,min(L,sd)-k_out):.3f}:d={k_out},volume={vol},adelay={ms},apad=whole_dur={TOT:.2f}[x{k}]")
    labels.append(f"[x{k}]")
# first pass: title through Act 4; second: the ask through the end
s1a=B['b06']['start'];s1b=min(s1a+sd,B['b27']['start'])
score(s1a,s1b,1.0)
s2a=B['b30']['start'];score(s2a,TL['total'],1.0,4,2.5)
nsc=2
# mixes
vo_labels=labels[:nvo];fx_labels=labels[nvo:len(labels)-nsc];sc_labels=labels[-nsc:]
fc.append(''.join(vo_labels)+f"amix=inputs={len(vo_labels)}:normalize=0:duration=longest[vo]")
fc.append(''.join(fx_labels)+f"amix=inputs={len(fx_labels)}:normalize=0:duration=longest[fx]")
fc.append(''.join(sc_labels)+f"amix=inputs={len(sc_labels)}:normalize=0:duration=longest,volume=0.16[scraw]")
fc.append("[vo]asplit=2[vo1][vo2]")
fc.append("[scraw][vo2]sidechaincompress=threshold=0.015:ratio=5:attack=120:release=900:makeup=1[sc]")
fc.append("[vo1][fx][sc]amix=inputs=3:normalize=0:duration=longest,alimiter=limit=0.95,pan=stereo|c0=c0|c1=c0[out]")
open('audio_filter.txt','w').write(';\n'.join(fc))
cmd=['ffmpeg','-y','-loglevel','error']
for f in ins:cmd+=['-i',f]
cmd+=['-/filter_complex','audio_filter.txt','-map','[out]','-ar','48000','-c:a','pcm_f32le','mix.wav']
print(len(ins),'inputs',len(labels),'streams');subprocess.run(cmd,check=True)
r=subprocess.run(['ffmpeg','-hide_banner','-i','mix.wav','-af','loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json','-f','null','-'],capture_output=True,text=True)
js=json.loads(re.search(r'\{[^{}]*"input_i"[^{}]*\}',r.stderr,re.S).group(0));print(js['input_i'],js['input_lra'])
af=f"loudnorm=I=-16:TP=-1.5:LRA=11:measured_I={js['input_i']}:measured_TP={js['input_tp']}:measured_LRA={js['input_lra']}:measured_thresh={js['input_thresh']}:offset={js['target_offset']}:linear=true"
subprocess.run(['ffmpeg','-y','-loglevel','error','-i','mix.wav','-af',af,'-ar','48000','-c:a','pcm_s16le','master.wav'],check=True)
r=subprocess.run(['ffmpeg','-hide_banner','-i','master.wav','-af','loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json','-f','null','-'],capture_output=True,text=True)
print(re.search(r'"input_i" : "([^"]+)"',r.stderr).group(1),'LUFS on master')
