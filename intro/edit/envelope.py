import array
import math
import sys

# reads 16 kHz mono s16le from stdin, prints a loudness strip (dBFS per 100 ms)
data = array.array("h")
data.frombytes(sys.stdin.buffer.read())
sr = 16000
win = sr // 10
rows = []
for i in range(0, len(data) - win, win):
    chunk = data[i : i + win]
    rms = math.sqrt(sum(x * x for x in chunk) / len(chunk)) or 1e-9
    db = 20 * math.log10(rms / 32768)
    rows.append((i / sr, db))

line = ""
for t, db in rows:
    level = int(max(0, min(9, (db + 70) / 6)))  # -70 dB -> 0, about -16 dB -> 9
    line += str(level)
    if len(line) == 50:
        print(f"{t - 4.9:5.1f}s  {line}")
        line = ""
if line:
    print(f"{rows[-1][0] - len(line) * 0.1 + 0.1:5.1f}s  {line}")
