import json,subprocess
TL=json.load(open('timeline_full.json'));tot=TL['total']
cmd=['ffmpeg','-y','-loglevel','error','-stats','-framerate','24','-i','frames1080/f%06d.png','-i','master.wav','-i','../Long-Turnover-480p.srt',
 '-map','0:v','-map','1:a','-map','2:s','-c:v','libx264','-preset','slow','-crf','18','-tune','film','-pix_fmt','yuv420p','-profile:v','high','-r','24',
 '-c:a','aac','-b:a','160k','-ar','48000','-c:s','mov_text','-metadata:s:s:0','language=eng','-metadata:s:s:0','title=English','-metadata','title=The Long Turnover (1080p)',
 '-movflags','+faststart','-t',f'{tot:.3f}','../Long-Turnover-1080p.mp4']
subprocess.run(cmd,check=True)
# 720p preview under 30 MiB for sending
subprocess.run(['ffmpeg','-y','-loglevel','error','-i','../Long-Turnover-1080p.mp4','-map','0','-vf','scale=1280:720:flags=lanczos','-c:v','libx264','-preset','slow','-crf','26','-tune','film','-pix_fmt','yuv420p','-c:a','copy','-c:s','copy','-movflags','+faststart','../Long-Turnover-720p-preview.mp4'],check=True)
