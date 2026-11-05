import json,subprocess,os,re,sys
TL=json.load(open('timeline_full.json'));TOT=TL['total']+1.0
B={b['id']:b for b in TL['beats']}
clips=TL['clips']
GAIN={'HAR':1.0,'CAL':0.85,'TOM':0.8,'REL':0.95}
ins=[];fc=[];labels=[]
def add_clip(i,c):
    ins.append(f"vo/{c['id']}.wav");n=len(ins)-1
    ms=int(round(c['t']*1000));d=c['dur']
    fc.append(f"[{n}:a]afade=t=in:d=0.03,afade=t=out:st={max(0,d-0.03):.3f}:d=0.03,volume={GAIN[c['spk']]},adelay={ms},apad=whole_dur={TOT:.2f}[v{n}]")
    labels.append(f"[v{n}]")
for i,c in enumerate(clips):add_clip(i,c)
def src(name,expr,dur,at,vol,fade_out=0.03,extra=''):
    k=len(labels)
    ms=int(round(at*1000))
    fc.append(f"aevalsrc='{expr}':d={dur}:s=48000{extra},afade=t=in:d=0.03,afade=t=out:st={max(0,dur-0.03):.3f}:d=0.03,volume={vol},adelay={ms},apad=whole_dur={TOT:.2f}[s{k}]")
    labels.append(f"[s{k}]")
def noise(dur,at,vol,flt,color='white'):
    k=len(labels);ms=int(round(at*1000))
    fc.append(f"anoisesrc=d={dur}:c={color}:a=0.5:r=48000,{flt},afade=t=in:d=0.03,afade=t=out:st={max(0,dur-0.03):.3f}:d=0.03,volume={vol},adelay={ms},apad=whole_dur={TOT:.2f}[s{k}]")
    labels.append(f"[s{k}]")
# ---- beds ----
night=f"clip((t+0.5)/1.5,0,1)*clip((27.5-t)/1.5,0,1)+clip((t-{B['b18']['start']-1:.2f})/1.5,0,1)*clip(({B['b18']['end']+1:.2f}-t)/1.5,0,1)+clip((t-{B['b31']['start']-1:.2f})/1.5,0,1)*clip(({B['b34']['end']+1:.2f}-t)/1.5,0,1)"
fc.append(f"aevalsrc='0.5*sin(2*PI*55*t)+0.28*sin(2*PI*110.4*t)+0.14*sin(2*PI*165.3*t+1)+0.05*sin(2*PI*220.7*t)':d={TOT:.2f}:s=48000,volume='0.008+0.014*({night})':eval=frame,afade=t=in:d=0.03[hum]")
fc.append(f"anoisesrc=d={TOT:.2f}:c=pink:a=0.5:r=48000,lowpass=f=2500,highpass=f=40,volume=0.012,afade=t=in:d=0.03[pink]")
labels+=['[hum]','[pink]']
# pump cycling thumps (night scenes)
def pumps(a,b):
    t=a
    while t<b:
        src('pump',"0.8*exp(-9*t)*sin(2*PI*62*t)",0.6,t,0.05);t+=2.4
pumps(0.8,25);pumps(B['b31']['start'],B['b34']['end'])
# alarm tone
def alarm(a,b):
    t=a
    while t<b:
        src('alarm',"0.5*sin(2*PI*880*t)*pow(sin(PI*t/0.42),2)",0.42,t,0.035);t+=1.25
alarm(B['b01']['start']+0.4,B['b04']['end']);alarm(B['b31']['start']+.2,B['b32']['start']+3)
# page turn, cup, title swell, bells
noise(0.45,B['b02']['start']+3.7,0.05,"highpass=f=2500,lowpass=f=9000")
src('cup',"0.8*exp(-40*t)*sin(2*PI*210*t)+0.4*exp(-60*t)*sin(2*PI*1400*t)",0.35,B['b11']['start']+3.0,0.09)
src('swell',"0.5*sin(2*PI*82*t)*sin(PI*t/2.2)+0.3*sin(2*PI*123*t)*sin(PI*t/2.2)",2.2,B['b06']['start'],0.10)
bell=lambda f0:f"0.5*exp(-1.1*t)*(sin(2*PI*{f0}*t)+0.5*sin(2*PI*{f0*2.0}*t)+0.35*sin(2*PI*{f0*3.0}*t)+0.2*sin(2*PI*{f0*4.1}*t))"
src('bell',bell(392),5.5,B['b35']['start']+0.15,0.10)
src('chime',bell(1046),3.2,B['b21']['start']+2.5,0.06)
# ui ticks and thuds
tick="0.8*exp(-70*t)*sin(2*PI*2100*t)"
for dt in (2.0,3.0,3.9,4.8):src('tick',tick,0.15,B['b14']['start']+dt,0.05)
for k in range(1,7):src('tick',tick,0.15,B['b15']['start']+B['b15']['cues'][k],0.05)
src('tick',tick,0.15,B['b19']['start']+B['b19']['cues'][3],0.07)
for k in (0,2,3,4,5,6):src('thud',"0.9*exp(-14*t)*sin(2*PI*95*t)",0.3,B['b16']['start']+B['b16']['cues'][k]+0.5,0.08)
for k in range(5):src('tick',tick,0.15,B['b24']['start']+0.7+k*min(1.5,(B['b24']['dur']-4)/5)+0.6,0.04)
n=len(labels)
fc.append(''.join(labels)+f"amix=inputs={n}:normalize=0:duration=longest,alimiter=limit=0.95,pan=stereo|c0=c0|c1=c0[out]")
open('audio_filter.txt','w').write(';\n'.join(fc))
cmd=['ffmpeg','-y','-loglevel','error']
for f in ins:cmd+=['-i',f]
cmd+=['-/filter_complex','audio_filter.txt','-map','[out]','-ar','48000','-c:a','pcm_f32le','mix.wav']
print(len(ins),'clips',n,'streams');subprocess.run(cmd,check=True)
# loudnorm two pass
r=subprocess.run(['ffmpeg','-hide_banner','-i','mix.wav','-af','loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json','-f','null','-'],capture_output=True,text=True)
js=json.loads(re.search(r'\{[^{}]*"input_i"[^{}]*\}',r.stderr,re.S).group(0))
print(js)
af=f"loudnorm=I=-16:TP=-1.5:LRA=11:measured_I={js['input_i']}:measured_TP={js['input_tp']}:measured_LRA={js['input_lra']}:measured_thresh={js['input_thresh']}:offset={js['target_offset']}:linear=true"
subprocess.run(['ffmpeg','-y','-loglevel','error','-i','mix.wav','-af',af,'-ar','48000','-c:a','pcm_s16le','master.wav'],check=True)
r=subprocess.run(['ffmpeg','-hide_banner','-i','master.wav','-af','loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json','-f','null','-'],capture_output=True,text=True)
print(re.search(r'"input_i" : "([^"]+)"',r.stderr).group(1),'LUFS measured on master')
