"""Re-composite a frame range and overlay it onto an existing master.
usage: RES=480|1080 python seg_replace.py <first_frame> <last_frame_inclusive> <in.mp4> <out.mp4>
Audio and subtitle streams are copied from the input master."""
import os,sys,subprocess
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
import composite as cmp
from PIL import Image
a,b=int(sys.argv[1]),int(sys.argv[2]);src,dst=sys.argv[3],sys.argv[4]
seg=os.path.join(cmp.HERE,'seg_%s_%d_%d'%(cmp.RES,a,b));os.makedirs(seg,exist_ok=True)
for i in range(a,b+1):
    fn=os.path.join(seg,'f%06d.png'%(i-a))
    if not os.path.exists(fn):Image.fromarray(cmp.frame(i)).save(fn,compress_level=1)
segmp4=seg+'.mp4'
subprocess.run(['ffmpeg','-y','-loglevel','error','-framerate','24','-i',os.path.join(seg,'f%06d.png'),'-c:v','libx264','-preset','medium','-crf','10','-pix_fmt','yuv420p','-r','24',segmp4],check=True)
off=a/24.0
subprocess.run(['ffmpeg','-y','-loglevel','error','-stats','-i',src,'-i',segmp4,
 '-filter_complex','[1:v]setpts=PTS+%.6f/TB[s];[0:v][s]overlay=eof_action=pass:repeatlast=0[v]'%off,
 '-map','[v]','-map','0:a','-map','0:s','-c:v','libx264','-preset','slow','-crf','18','-tune','film','-pix_fmt','yuv420p','-profile:v','high','-r','24',
 '-c:a','copy','-c:s','copy','-movflags','+faststart',dst],check=True)
print('wrote',dst)
