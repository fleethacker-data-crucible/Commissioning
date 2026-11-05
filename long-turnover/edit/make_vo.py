import json,subprocess,os,sys
sys.path.insert(0,'.')
from lines import L,V
FF='ffmpeg'
os.makedirs('vo/raw',exist_ok=True)
jobs=[{"id":i,"voice":V[s][0],"rate":V[s][1],"text":t,"out":os.path.abspath(f'vo/raw/{i}.wav')} for i,s,t in L]
json.dump(jobs,open('vo/jobs.json','w'))
ps='''
Add-Type -AssemblyName System.Speech
$jobs = Get-Content -Raw vo/jobs.json | ConvertFrom-Json
$s = New-Object System.Speech.Synthesis.SpeechSynthesizer
foreach($j in $jobs){ $s.SelectVoice($j.voice); $s.Rate=[int]$j.rate; $s.SetOutputToWaveFile($j.out); $s.Speak($j.text); $s.SetOutputToNull() }
'''
open('vo/tts.ps1','w').write(ps)
subprocess.run(['powershell','-NoProfile','-File','vo/tts.ps1'],check=True)
meta={}
for i,s,t in L:
    out=f'vo/{i}.wav'
    f=V[s][2]
    subprocess.run([FF,'-y','-loglevel','error','-i',f'vo/raw/{i}.wav','-af',f'aresample=48000,{f},silenceremove=start_periods=1:start_threshold=-50dB,areverse,silenceremove=start_periods=1:start_threshold=-50dB,areverse,loudnorm=I=-18:TP=-2:LRA=7','-ar','48000','-ac','1',out],check=True)
    d=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',out]).decode())
    meta[i]={'spk':s,'text':t,'dur':round(d,3)}
json.dump(meta,open('vo/meta.json','w'),indent=1)
tot={}
for k,v in meta.items(): tot[v['spk']]=tot.get(v['spk'],0)+v['dur']
print(tot)
