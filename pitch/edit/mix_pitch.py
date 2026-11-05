"""Layered sound for the v3 cut. Same buses as mix_layers.py, with the times read from times.json
(written by assemble_pitch.py), optional beat 2 and close voice tracks, and a true-peak limiter
so nothing sits near 0 dB.

Buses
- Dialogue: the clips' own audio through a gentle downward expander (ambience drops in the pauses, speech
  passes), plus SULLIVAN's narration beats and the close line.
- Music (ducks under dialogue): the calm bed under everything, the clock pulse from the first tick to the blast,
  the warm resolve from 4 s before the SCOPE screen until the end.
- Effects (not ducked): the riser into the boat, the hull boom on the blast, the tick on the cut.

Usage: python mix_pitch.py <joined.mp4> <times.json> <score_dir> <voice_dir> <out.mp4> [--beat2 f.mp3] [--close f.mp3]
<score_dir> holds bed.mp3 pulse.mp3 resolve.mp3 riser.mp3 blast.mp3; <voice_dir> holds sullivan-beat1.mp3 sullivan-beat3.mp3
"""
import json
import os
import subprocess
import sys

JOINED, TIMES, SCORE, VOICE, OUT = [os.path.abspath(a) for a in sys.argv[1:6]]
BEAT2 = os.path.abspath(sys.argv[sys.argv.index("--beat2") + 1]) if "--beat2" in sys.argv else None
CLOSE = os.path.abspath(sys.argv[sys.argv.index("--close") + 1]) if "--close" in sys.argv else None
AUD = "aformat=sample_fmts=fltp:sample_rates=44100:channel_layouts=stereo"


def dur(path):
    return float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                                          "-of", "csv=p=0", path]).decode().strip())


T = json.load(open(TIMES))
TOTAL = dur(JOINED)
T_A = T["boat"]
T_ZOOM = T["zoom"]
PULSE_IN, PULSE_OUT = T["reyes_start"] + 8.0 + 1.0 + 1.0, T_A   # from the booth clock to the blast
RES_IN = T_ZOOM - 1.0                                                  # swells on the push, not under the dialogue
T_CLOSE = T["close"]
print("total %.2f, boat %.2f, zoom %.2f, demo %.2f, close %.2f" % (TOTAL, T_A, T_ZOOM, T["demo"], T_CLOSE))

# Windows where a voice is speaking: the music is pulled down to DUCK of its level here (on top of the sidechain).
VOICE_WINDOWS = [
    (T["reyes_start"] + 0.8, T["reyes_start"] + 7.2),           # REYES's line
    (T["beat1"], T["beat1"] + 6.1),                              # SULLIVAN beat 1
    (T["reyes_start"] + 9.5 + 7.4, T["reyes_start"] + 9.5 + 13.0),  # MORGAN's line (starts 7.4 s into his shot)
    (T_A + 12.2, T_ZOOM + 3.5),                                  # the boat: DELGADO, the Captain, DELGADO's reply
    (T["beat3"], T["beat3"] + 15.5),                             # SULLIVAN beat 3
]
if BEAT2:
    VOICE_WINDOWS.append((T["beat2"], T["beat2"] + dur(BEAT2)))
if CLOSE:
    VOICE_WINDOWS.append((T["close_voice"], T["close_voice"] + dur(CLOSE)))
DUCK = 0.38


def duck_expr():
    """volume expression: 1 outside the windows, DUCK inside, 0.35 s ramps."""
    terms = []
    for s, e in VOICE_WINDOWS:
        terms.append("min(1,max(0,(t-%.3f)/0.35))*min(1,max(0,(%.3f-t)/0.35))" % (s - 0.35, e + 0.35))
    return "max(%.2f,1-%.2f*min(1,%s))" % (DUCK, 1 - DUCK, "+".join(terms))

inputs = ["-i", JOINED]
names = {}


def add(path, key):
    names[key] = len(names) + 1
    inputs.extend(["-i", path])


for k in ("bed", "pulse", "resolve", "riser", "blast"):
    add(os.path.join(SCORE, k + ".mp3"), k)
add(os.path.join(VOICE, "sullivan-beat1.mp3"), "b1")
add(os.path.join(VOICE, "sullivan-beat3.mp3"), "b3")
if BEAT2:
    add(BEAT2, "b2")
if CLOSE:
    add(CLOSE, "close")
inputs.extend(["-f", "lavfi", "-t", "0.1", "-i", "sine=frequency=2600:duration=0.012"])
names["tick_hi"] = len(names) + 1
inputs.extend(["-f", "lavfi", "-t", "0.1", "-i", "sine=frequency=240:duration=0.07"])
names["tick_lo"] = len(names) + 1


def ms(t):
    return int(round(t * 1000))


fc = []
# ---- dialogue bus ------------------------------------------------------------------------------------
fc.append("[0:a]%s,highpass=f=60,compand=attacks=0.04:decays=0.35:points=-90/-95|-46/-64|-38/-50|-30/-30|0/0:soft-knee=4[clip]" % AUD)
voices = [("b1", T["beat1"]), ("b3", T["beat3"])]
if BEAT2:
    voices.append(("b2", T["beat2"]))
if CLOSE:
    voices.append(("close", T["close_voice"]))
labels = ["[clip]"]
for key, t in voices:
    fc.append("[%d:a]%s,volume=1.6,adelay=%d:all=1[%s]" % (names[key], AUD, ms(t), key))   # narration +4 dB
    labels.append("[%s]" % key)
fc.append("%samix=inputs=%d:normalize=0:duration=longest,atrim=0:%.3f,asplit=2[dmix][dkey]" % ("".join(labels), len(labels), TOTAL))

# ---- music bus ---------------------------------------------------------------------------------------
fc.append("[%d:a]%s,atrim=0:%.3f,asetpts=PTS-STARTPTS,volume=0.08,afade=t=in:d=2.0,afade=t=out:st=%.3f:d=3.5[bed]"
          % (names["bed"], AUD, TOTAL, TOTAL - 3.5))
pl = PULSE_OUT - PULSE_IN
fc.append("[%d:a]%s,atrim=8:%.3f,asetpts=PTS-STARTPTS,afade=t=in:d=3.0,afade=t=out:st=%.3f:d=0.3,adelay=%d:all=1,"
          "volume='0.03+0.10*min(1,max(0,(t-%.1f)/%.1f))':eval=frame[pulse]"
          % (names["pulse"], AUD, 8 + pl, pl - 0.3, ms(PULSE_IN), PULSE_IN, PULSE_OUT - PULSE_IN))
rl = TOTAL - RES_IN
fc.append("[%d:a]%s,atrim=0:%.3f,asetpts=PTS-STARTPTS,volume=0.13,afade=t=in:d=5.0,afade=t=out:st=%.3f:d=4.0,adelay=%d:all=1[res]"
          % (names["resolve"], AUD, rl, rl - 4.0, ms(RES_IN)))
fc.append("[bed][pulse][res]amix=inputs=3:normalize=0:duration=longest,atrim=0:%.3f,volume='%s':eval=frame[mus]" % (TOTAL, duck_expr()))
fc.append("[mus][dkey]sidechaincompress=threshold=0.015:ratio=8:attack=30:release=600:makeup=1[musduck]")

# ---- effects bus -------------------------------------------------------------------------------------
fc.append("[%d:a]%s,volume=0.42,adelay=%d:all=1,volume='%s':eval=frame[riser]"      # the riser ducks under the voice too
          % (names["riser"], AUD, ms(T_A - 5.0), duck_expr()))
fc.append("[%d:a]%s,volume=1.0,adelay=%d:all=1[blast]" % (names["blast"], AUD, ms(T_A)))   # on the cut, with the last tick
fc.append("[%d:a][%d:a]amix=inputs=2:duration=longest:normalize=0,afade=t=out:st=0:d=0.07,volume=0.9,%s,adelay=%d:all=1[tick]"
          % (names["tick_hi"], names["tick_lo"], AUD, ms(T_A - 0.02)))

# lights out: a short power-down thump (a falling low tone) on the office clock's last tick before the dark
fc.append("anullsrc=r=44100:cl=stereo,atrim=0:0.1[pdown]")   # no power-down thump any more: the cut is the blast

# ---- sum and master ----------------------------------------------------------------------------------
fc.append("[dmix][musduck][riser][blast][tick][pdown]amix=inputs=6:normalize=0:duration=longest,atrim=0:%.3f,"
          "afade=t=out:st=%.3f:d=1.0,loudnorm=I=-16:TP=-2.0:LRA=9,alimiter=limit=0.79:attack=3:release=60:level=0[a]"
          % (TOTAL, TOTAL - 1.0))
args = (["ffmpeg", "-hide_banner", "-loglevel", "error", "-y"] + inputs
        + ["-filter_complex", ";".join(fc), "-map", "0:v", "-map", "[a]", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", OUT])
subprocess.run(args, check=True)
print("wrote", OUT, round(dur(OUT), 2), "s")
