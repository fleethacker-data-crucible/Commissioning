import json,subprocess,sys
TL=json.load(open('timeline_full.json'));tot=TL['total']
cmd=['ffmpeg','-y','-loglevel','error','-stats','-framerate','24','-i','frames/f%06d.png','-i','master.wav','-i','../Long-Turnover-480p.srt',
 '-map','0:v','-map','1:a','-map','2:s','-c:v','libx264','-preset','slow','-crf','18','-tune','film','-pix_fmt','yuv420p','-profile:v','high','-r','24',
 '-c:a','aac','-b:a','160k','-ar','48000','-c:s','mov_text','-metadata:s:s:0','language=eng','-metadata:s:s:0','title=English','-metadata','title=The Long Turnover (480p, pass 4)',
 '-movflags','+faststart','-t',f'{tot:.3f}','../Long-Turnover-480p.mp4']
subprocess.run(cmd,check=True)
