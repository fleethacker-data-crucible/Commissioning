import subprocess,json,sys,os
HERE=os.path.dirname(os.path.abspath(__file__))
TL=json.load(open(os.path.join(HERE,'timeline_full.json'),encoding='utf8'))
N=int(TL['total']*24)+1
W=int(sys.argv[1]) if len(sys.argv)>1 else 5
step=(N+W-1)//W
ps=[subprocess.Popen([sys.executable,os.path.join(HERE,'render_chunk.py'),str(k*step),str(min(N,(k+1)*step))]) for k in range(W)]
for p in ps:p.wait()
print('done',N)
