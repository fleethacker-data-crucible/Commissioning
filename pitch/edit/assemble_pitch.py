"""Assemble the pitch, version 3: scene C (carrier), B (desk), A (boat), the Bridge Warden demo and the close.

Changes from assemble_full_draft.py: trims (flight deck 1.5 s, hangar pull-back 1.5 s, held frame 2.0 s),
SULLIVAN's beat 2 runs from the held frame across the clock-out insert into the cut, the Bridge Warden demo
replaces the placeholder (two real 1080p captures with a push, then a real recording excerpt, all labelled),
the close (SULLIVAN's line over a card), a backing strip behind every caption, and every timing written to
times.json for mix_pitch.py. Resolution is an argument so the same script builds the 720p draft and the 1080p final.

Usage: python assemble_pitch.py <in_dir> <work_dir> <out.mp4> <width> <height> [--close f.mp3]
<in_dir> holds: flightdeck.png hangar.png reyes.mp4 morgan-desk.mp4 clock-booth-0200.mp4 clock-cubicle-0900.mp4
clock-out-0900-19.mp4 clipA.mp4 clipA3.mp4 clipB.mp4 captain.mp4 clipC.mp4 delgado-444018.mp3 screen.png
warden-control.png warden-decisions.png warden-app-rec.mp4 emblem.png
"""
import json
import os
import subprocess
import sys

from PIL import Image, ImageDraw, ImageFont

IN, WORK, OUT = [os.path.abspath(a) for a in sys.argv[1:4]]
W, H = int(sys.argv[4]), int(sys.argv[5])
CLOSE = os.path.abspath(sys.argv[sys.argv.index("--close") + 1]) if "--close" in sys.argv else None
# Optional re-voiced order: the close-up is cut before the Captain's second sentence, and the new order plus DELGADO's
# new reply play off-screen over the west-wall shot (nobody's lips are visible there).
ORDER = os.path.abspath(sys.argv[sys.argv.index("--order") + 1]) if "--order" in sys.argv else None
REPLY = os.path.abspath(sys.argv[sys.argv.index("--reply") + 1]) if "--reply" in sys.argv else None
EDIT = os.path.dirname(os.path.abspath(__file__))
FPS = 24
S = H / 720.0                                           # font and margin scale
AUD = "aformat=sample_fmts=fltp:sample_rates=44100:channel_layouts=stereo"
VOUT = ["-c:v", "libx264", "-crf", "15" if H <= 1080 else "18", "-preset", "medium", "-pix_fmt", "yuv420p", "-r", str(FPS),
        "-c:a", "aac", "-b:a", "192k", "-ar", "44100", "-ac", "2"]
os.makedirs(WORK, exist_ok=True)
os.chdir(WORK)
SILENCE = ["-f", "lavfi", "-i", "anullsrc=r=44100:cl=stereo"]
ROOM = "anoisesrc=c=brown:a=0.12,lowpass=f=380"


def run(args):
    subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y"] + args, check=True)


def dur(path):
    return float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                                          "-of", "csv=p=0", path]).decode().strip())


def i(name):
    return os.path.join(IN, name)


def font(name, size):
    return ImageFont.truetype("C:/Windows/Fonts/%s" % name, int(round(size * S)))


def caption(path, text, size=42, y_from_bottom=96, x=60, strip=True):
    """Lower-third caption on a transparent frame, with a dark backing strip."""
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    f = font("seguisb.ttf", size)
    x0, y0 = int(x * S), H - int(y_from_bottom * S)
    bb = d.textbbox((x0, y0), text, font=f)
    if strip:
        pad = int(14 * S)
        d.rounded_rectangle((bb[0] - pad, bb[1] - pad * 0.7, bb[2] + pad, bb[3] + pad * 0.7),
                            radius=int(6 * S), fill=(6, 12, 22, 185))
    d.text((x0, y0), text, font=f, fill=(255, 255, 255, 255))
    img.save(path)
    return path


def still_push(src, seconds, out, zoom_in=True, overlay=None, fade_in=0.0, audio=ROOM, strength=0.0012):
    """A still with a slow push (in or out), an optional overlay PNG with its own fades, and room tone."""
    n = int(round(seconds * FPS))
    # the push is rendered here with float crop boxes (ffmpeg's zoompan steps in whole pixels and shakes on video)
    big = Image.open(src).convert("RGB").resize((W * 2, H * 2), Image.LANCZOS)
    raw = "_still_%s" % os.path.basename(out)
    pr = subprocess.Popen(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24",
                           "-s", "%dx%d" % (W, H), "-r", str(FPS), "-i", "-", "-c:v", "libx264", "-crf", "10",
                           "-pix_fmt", "yuv420p", raw], stdin=subprocess.PIPE)
    for k in range(n):
        z = (1 + strength * k) if zoom_in else (1 + strength * n - strength * k)
        bw, bh = W * 2 / z, H * 2 / z
        x0, y0 = (W * 2 - bw) / 2, (H * 2 - bh) / 2
        pr.stdin.write(big.resize((W, H), Image.LANCZOS, box=(x0, y0, x0 + bw, y0 + bh)).tobytes())
    pr.stdin.close()
    pr.wait()
    vf = "[0:v]setsar=1"
    args = ["-i", raw]
    if overlay:
        args += ["-loop", "1", "-t", str(seconds), "-i", overlay[0]]   # raw is the first input, overlay the second
        vf += "[b];[1:v]format=rgba," + overlay[1] + "[c];[b][c]overlay=0:0"
    if fade_in:
        vf += ",fade=t=in:st=0:d=%s" % fade_in
    vf += "[v]"
    ai = 2 if overlay else 1
    args += ["-f", "lavfi", "-t", str(seconds), "-i", audio]
    af = "[%d:a]%s,volume=0.55%s[a]" % (ai, AUD, (",afade=t=in:d=%s" % fade_in) if fade_in else "")
    run(args + ["-filter_complex", vf + ";" + af, "-map", "[v]", "-map", "[a]", "-t", str(seconds)] + VOUT + [out])
    return out


def clip(src, out, t0=None, t1=None, afade_out=0.0):
    trim_v = ("trim=%s:%s," % (t0, t1)) if t1 is not None else ""
    trim_a = ("atrim=%s:%s," % (t0, t1)) if t1 is not None else ""
    fade = (",afade=t=out:st=%s:d=0.05" % afade_out) if afade_out else ""
    v = "[0:v]%sscale=%d:%d:flags=lanczos,setsar=1,setpts=PTS-STARTPTS[v]" % (trim_v, W, H)
    a = "[0:a]%s%s,asetpts=PTS-STARTPTS%s[a]" % (trim_a, AUD, fade)
    run(["-i", src, "-filter_complex", v + ";" + a, "-map", "[v]", "-map", "[a]"] + VOUT + [out])
    return out


def chain(files, d, out):
    """Dissolve consecutive clips into one; return the length."""
    lens = [dur(f) for f in files]
    args = []
    for f in files:
        args += ["-i", f]
    fc, pv, pa, acc = [], "[0:v]", "[0:a]", lens[0]
    for k in range(1, len(files)):
        fc.append("%s[%d:v]xfade=transition=fade:duration=%s:offset=%.3f,format=yuv420p[v%d]" % (pv, k, d, acc - d, k))
        fc.append("%s[%d:a]acrossfade=d=%s[a%d]" % (pa, k, d, k))
        pv, pa, acc = "[v%d]" % k, "[a%d]" % k, acc + lens[k] - d
    run(args + ["-filter_complex", ";".join(fc), "-map", pv, "-map", pa] + VOUT + [out])
    return acc


T = {}
# ---- scene C: the carrier ---------------------------------------------------------------------
caption("card-location.png", "AIRCRAFT CARRIER.  HANGAR BAY.  0200.", size=46, y_from_bottom=120, x=80)
still_push(i("flightdeck.png"), 1.5, "c1.mp4", fade_in=0.5)
still_push(i("hangar.png"), 2.0, "c2.mp4",
           overlay=("card-location.png", "fade=t=in:st=0.3:d=0.4:alpha=1,fade=t=out:st=1.6:d=0.3:alpha=1"))
clip(i("reyes.mp4"), "c3.mp4")
still_push(i("hangar.png"), 1.5, "c4.mp4", zoom_in=False)
LC = chain(["c1.mp4", "c2.mp4", "c3.mp4", "c4.mp4"], 0.5, "blockC.mp4")
T["reyes_start"] = 1.5 - 0.5 + 2.0 - 0.5
T["beat1"] = T["reyes_start"] + 7.0

# ---- the clocks and scene B: the desk ----------------------------------------------------------
clip(i("clock-booth-0200.mp4"), "c5.mp4", 0, 1.0)
clip(i("clock-cubicle-0900.mp4"), "c6.mp4", 0, 1.5)
# MORGAN's shot plays out, then a 0.5 s dissolve straight into the ticking clock: no frozen frame. The clock
# holds CLOCK_OUT seconds with a slow push while SULLIVAN's beat 2 plays over the ticks; the last tick is the cut.
CLOCK_OUT = 8.0        # beat 2 (5.6 s) starts 0.35 s in; lights out on the tick at 7.0; the tick at 8.0 is the cut
clip(i("morgan-desk.mp4"), "b1.mp4")
clip(i("clock-out-0900-19.mp4"), "b3.mp4", 0, CLOCK_OUT)   # the push and the dimming are rendered in the insert itself
LB = chain(["b1.mp4", "b3.mp4"], 0.5, "blockB.mp4")

# ---- scene A: the boat ------------------------------------------------------------------------
# smash cut: the clip is trimmed so the mine blast is on the first frame, the same frame as the clock's last tick
BLAST_AT = 0.6                                   # the blast sits 0.6 s into the trimmed clip A (2.5 s in the original)
clip(i("clipA.mp4"), "a1a.mp4", BLAST_AT, dur(i("clipA.mp4")), afade_out=dur(i("clipA.mp4")) - BLAST_AT - 0.06)
clip(i("clipA3.mp4"), "a1b.mp4")
run(["-i", "a1a.mp4", "-i", "a1b.mp4", "-filter_complex",
     "[0:v][0:a][1:v][1:a]concat=n=2:v=1:a=1[v0][a];[v0]fade=t=in:st=0:d=0.15:color=white[v]",
     "-map", "[v]", "-map", "[a]"] + VOUT + ["a1.mp4"])
clip(i("clipB.mp4"), "a2.mp4", 0, 5.8333, afade_out=5.79)
if ORDER:
    clip(i("captain.mp4"), "a3.mp4", 0, 4.6, afade_out=4.5)      # first sentence and the pause only
else:
    clip(i("captain.mp4"), "a3.mp4", 0, 8.0, afade_out=7.9)     # the new close-up: speech 1.25 to 2.7 s and 4.75 to 7.4 s
os.makedirs("plates", exist_ok=True)
run(["-i", i("clipC.mp4"), "-vf", "fps=24", "plates/p-%04d.png"])
subprocess.run([sys.executable, os.path.join(EDIT, "zoom_composite_v3.py"), "plates", i("screen.png"), "frames",
                str(W), str(H)], check=True)


def level(src, out):
    peak = subprocess.check_output('ffmpeg -hide_banner -i "%s" -af volumedetect -f null - 2>&1 | grep max_volume'
                                   % src, shell=True).decode()
    gain = round(-3.0 - float(peak.split("max_volume:")[1].split("dB")[0]), 2)
    run(["-i", src, "-af", "volume=%sdB" % gain, "-c:a", "libmp3lame", "-q:a", "2", out])


level(REPLY if REPLY else i("delgado-444018.mp3"), "delgado.mp3")
bed = ("[1:a]atrim=0:3.3,asetpts=PTS-STARTPTS[b1];[1:a]atrim=0.3:3.1,asetpts=PTS-STARTPTS[b2];"
       "[1:a]atrim=0.3:3.1,asetpts=PTS-STARTPTS[b3];[1:a]atrim=0.3:3.1,asetpts=PTS-STARTPTS[b4];"
       "[b1][b2]acrossfade=d=0.15[c1];[c1][b3]acrossfade=d=0.15[c2];[c2][b4]acrossfade=d=0.15[bed];")
if ORDER:
    level(ORDER, "order.mp3")
    reply_at = int(round((0.3 + dur("order.mp3") + 0.5) * 1000))
    run(["-framerate", "24", "-i", "frames/f-%04d.jpg", "-i", i("clipC.mp4"), "-i", "delgado.mp3", "-i", "order.mp3",
         "-filter_complex", bed +
         "[3:a]volume=-2dB,adelay=300:all=1[o];[2:a]volume=-3dB,adelay=%d:all=1[v];"
         "[bed][o][v]amix=inputs=3:duration=longest:normalize=0[mix];[mix]%s,atrim=0:9.6,asetpts=PTS-STARTPTS[out]" % (reply_at, AUD),
         "-map", "0:v", "-map", "[out]", "-t", "9.6"] + VOUT + ["a4.mp4"])
else:
    run(["-framerate", "24", "-i", "frames/f-%04d.jpg", "-i", i("clipC.mp4"), "-i", "delgado.mp3", "-filter_complex", bed +
         "[2:a]volume=-3dB,adelay=400:all=1[v];[bed][v]amix=inputs=2:duration=longest:normalize=0[mix];"
         "[mix]%s,atrim=0:9.6,asetpts=PTS-STARTPTS[out]" % AUD,
         "-map", "0:v", "-map", "[out]", "-t", "9.6"] + VOUT + ["a4.mp4"])
# SCOPE hold with the caption on a backing strip
caption("cap-design-goal.png", "Design goal. Not yet authorized.", size=42, y_from_bottom=84, x=60)
run(["-loop", "1", "-t", "4", "-i", i("screen.png"), "-loop", "1", "-t", "4", "-i", "cap-design-goal.png"]
    + SILENCE + ["-t", "4", "-filter_complex",
                 "[0:v]scale=%d:%d:flags=lanczos,setsar=1[b];[1:v]format=rgba,fade=t=in:st=0.3:d=0.4:alpha=1[c];"
                 "[b][c]overlay=0:0,format=yuv420p[v]" % (W, H),
                 "-map", "[v]", "-map", "2:a", "-t", "4"] + VOUT + ["a5.mp4"])


# ---- the tools montage: every tool's real landing page, flashed, while SULLIVAN describes the platform ---------------
TOOLS = ["01-SnapShackle", "02-Bowerbird", "03-Capstan", "04-Halyard", "05-Gangplank", "06-PacketRat", "07-Shellback",
         "08-Eight-Bells", "09-Semaphore", "10-Fairlead", "11-Windlass", "12-Phoenix-LAI", "13-Scrimshaw", "14-Lazarette"]
PER = 12                                          # frames per tool, 0.5 s
HOLD = {"10-Fairlead": 30}                          # the proof tool is held 1.25 s
NAVY = (7, 17, 30)
mp = subprocess.Popen(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24",
                       "-s", "%dx%d" % (W, H), "-r", str(FPS), "-i", "-", "-c:v", "libx264", "-crf", "12",
                       "-pix_fmt", "yuv420p", "_montage_raw.mp4"], stdin=subprocess.PIPE)
for name in TOOLS:
    label = name.split("-", 1)[1].replace("-", " ")
    src = Image.open(os.path.join(IN, "tools", name + ".png")).convert("RGB")
    sc = H / src.size[1]
    fitw, fith = int(round(src.size[0] * sc * 1.04)), int(round(H * 1.04))
    big = src.resize((fitw, fith), Image.LANCZOS)
    ov = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(ov)
    lf = font("seguisb.ttf", 46)
    lx, ly = int(60 * S), H - int(176 * S)
    bb = od.textbbox((lx, ly), label, font=lf)
    pad = int(14 * S)
    od.rounded_rectangle((bb[0] - pad, bb[1] - pad * 0.7, bb[2] + pad, bb[3] + pad * 0.7), radius=int(6 * S), fill=(6, 12, 22, 215))
    od.text((lx, ly), label, font=lf, fill=(255, 255, 255, 255))
    NF = HOLD.get(name, PER)
    for k in range(NF):
        z = 1.0 + 0.03 * k / (NF - 1)
        frame = Image.new("RGB", (W, H), NAVY)
        # slow sub-pixel push: crop box in the oversized image, resized to the output height
        bw, bh = fitw / z, fith / z
        x0, y0 = (fitw - bw) / 2, (fith - bh) / 2
        crop = big.resize((int(round(fitw / 1.04 * 1.0)), H), Image.LANCZOS, box=(x0, y0, x0 + bw, y0 + bh))
        frame.paste(crop, ((W - crop.size[0]) // 2, 0))
        frame.paste(ov, (0, 0), ov)
        mp.stdin.write(frame.tobytes())
mp.stdin.close()
mp.wait()
LM = sum(HOLD.get(n, PER) for n in TOOLS) / FPS
caption("cap-design-goal-m.png", "Design goal. Not yet authorized.", size=42, y_from_bottom=84, x=60)
run(["-i", "_montage_raw.mp4", "-loop", "1", "-t", "%.3f" % LM, "-i", "cap-design-goal-m.png"] + SILENCE + ["-t", "%.3f" % LM,
     "-filter_complex", "[0:v][1:v]overlay=0:0,format=yuv420p[v]", "-map", "[v]", "-map", "2:a", "-t", "%.3f" % LM] + VOUT + ["m1.mp4"])

# ---- the Bridge Warden demo: real captures, labelled ---------------------------------------------
caption("cap-warden.png", "BRIDGE WARDEN  ·  live capture  ·  simulated ship  ·  demo follows",
        size=36, y_from_bottom=84)
UI = "anoisesrc=c=pink:a=0.015,lowpass=f=1200"
still_push(i("warden-control.png"), 3.0, "d1.mp4", audio=UI, strength=0.0010)
still_push(i("warden-decisions.png"), 3.2, "d2.mp4", audio=UI, strength=0.0010)
LD = chain(["d1.mp4", "d2.mp4"], 0.4, "blockD0.mp4")
run(["-i", "blockD0.mp4", "-loop", "1", "-t", "%.3f" % LD, "-i", "cap-warden.png", "-filter_complex",
     "[1:v]format=rgba,fade=t=in:st=0.2:d=0.4:alpha=1[c];[0:v][c]overlay=0:0,format=yuv420p[v]",
     "-map", "[v]", "-map", "0:a"] + VOUT + ["blockD.mp4"])

# ---- the close: SULLIVAN's line over a card ------------------------------------------------------
close_len = (dur(CLOSE) + 1.8) if CLOSE else 8.0    # 0.5 s lead-in, the line, 1.3 s to black
em = Image.open(i("emblem.png")).convert("RGBA")          # the detailed brass emblem from the repo (carries its own SCOPE wordmark)
card = Image.new("RGB", (W, H), (7, 17, 30))
es = int(380 * S)
em = em.resize((es, es), Image.LANCZOS)
card.paste(em, ((W - es) // 2, int(H * 0.04)), em)
d = ImageDraw.Draw(card)
d.text((W // 2, int(H * 0.78)), "Give us ninety days.", font=font("seguisb.ttf", 76), fill=(236, 240, 248), anchor="mm")
d.text((W // 2, int(H * 0.89)), "built aboard, for the fleet", font=font("segoeui.ttf", 36), fill=(201, 166, 107), anchor="mm")
card.save("card-close.png")
run(["-loop", "1", "-t", "%.3f" % close_len, "-i", "card-close.png"] + SILENCE + ["-t", "%.3f" % close_len,
     "-filter_complex", "[0:v]format=yuv420p,fade=t=in:st=0:d=0.6,fade=t=out:st=%.3f:d=1.0[v]" % (close_len - 1.0),
     "-map", "[v]", "-map", "1:a", "-t", "%.3f" % close_len] + VOUT + ["e1.mp4"])

# ---- join and write the timings ------------------------------------------------------------------
parts = ["blockC.mp4", "c5.mp4", "c6.mp4", "blockB.mp4", "a1.mp4", "a2.mp4", "a3.mp4", "a4.mp4",
         "a5.mp4", "m1.mp4", "blockD.mp4", "e1.mp4"]
lens = [dur(p) for p in parts]
starts = [sum(lens[:k]) for k in range(len(lens))]
T["clock_out_start"] = starts[3] + dur("b1.mp4") - 0.5
T["beat2"] = T["clock_out_start"] + 0.35          # beat 2 over the ticking clock, ending before the lights go out
T["boat"] = starts[4]
T["zoom"] = starts[7]
T["beat3"] = starts[7] + 7.2
T["scope_hold"] = starts[8]
T["montage"] = starts[9]
T["demo"] = starts[10]
T["close"] = starts[11]
T["close_voice"] = starts[11] + 0.5
T["total"] = sum(lens)
T["parts"] = dict(zip(parts, [round(x, 3) for x in lens]))
with open("list.txt", "w") as fh:
    for p in parts:
        fh.write("file '%s'\n" % os.path.abspath(p).replace("\\", "/"))
run(["-f", "concat", "-safe", "0", "-i", "list.txt", "-c", "copy", OUT])
with open(os.path.join(os.path.dirname(OUT), "times.json"), "w") as fh:
    json.dump(T, fh, indent=1)
print(json.dumps({k: (round(v, 2) if isinstance(v, float) else v) for k, v in T.items()}, indent=1))
print("wrote", OUT, round(dur(OUT), 2), "s")
