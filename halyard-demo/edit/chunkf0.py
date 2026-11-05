"""Median pitch per speech chunk.  usage: python chunkf0.py file.wav "a-b,a-b,..."  -> JSON list (null where unvoiced)."""
import json, math, struct, sys, wave

w = wave.open(sys.argv[1], 'rb'); sr = w.getframerate(); n = w.getnframes()
d = struct.unpack('<%dh' % n, w.readframes(n))
x = [d[0]] + [d[i] - 0.97 * d[i - 1] for i in range(1, len(d))]
win, hop = int(sr * 0.05), int(sr * 0.05)
lo, hi = int(sr / 320), int(sr / 70)

def f0_at(start):
    seg = x[start:start + win + hi]
    if len(seg) < win + hi: return None
    rms = math.sqrt(sum(v * v for v in seg[:win]) / win)
    if rms < 120: return None
    clip = 0.35 * max(abs(v) for v in seg)
    c = [0 if abs(v) < clip else (v - clip if v > 0 else v + clip) for v in seg]
    e0 = sum(v * v for v in c[:win]) + 1e-9
    best, lag = 0.0, 0
    for L in range(lo, hi):
        s = sum(c[i] * c[i + L] for i in range(win))
        e1 = sum(c[i + L] * c[i + L] for i in range(win)) + 1e-9
        r = s / math.sqrt(e0 * e1)
        if r > best: best, lag = r, L
    return sr / lag if lag and best > 0.45 else None

out = []
for part in sys.argv[2].split(','):
    a, b = (float(v) for v in part.split('-'))
    vals = []
    t = a
    while t + 0.06 < b:
        v = f0_at(int(t * sr))
        if v: vals.append(v)
        t += 0.1
    vals.sort()
    out.append(round(vals[len(vals) // 2]) if len(vals) >= 3 else None)
print(json.dumps(out))
