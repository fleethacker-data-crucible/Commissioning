#!/usr/bin/env bash
# Rebuilds the opening scene from the downloaded Renoise clips.
# Needs: bash (Git Bash on Windows), ffmpeg, ffprobe, Python 3 with Pillow.
#
# Inputs (download these from Renoise first):
#   CLIP_A   task 413642  clip A, blast, alarm, "Report."
#   CLIP_A3  task 413731  A3, Sullivan gripping the joystick
#   CLIP_B   task 413643  B v2, uplink lost and the Captain's order
#   CLIP_C   task 413730  C v3, locked West shot
#   DIALOGUE task 413603  Seed Audio dialogue (mp3), one file with all five lines
#   SCREEN   image shown on the monitor (a screenshot for now; see the note at the end)
#
# Usage:  CLIP_A=... CLIP_A3=... CLIP_B=... CLIP_C=... DIALOGUE=... SCREEN=... WORK=./work ./build-opening.sh
set -euo pipefail

: "${CLIP_A:?}" "${CLIP_A3:?}" "${CLIP_B:?}" "${CLIP_C:?}" "${DIALOGUE:?}" "${SCREEN:?}"
WORK="${WORK:-./work}"
HERE="$(cd "$(dirname "$0")" && pwd)"
mkdir -p "$WORK/plates" "$WORK/frames"

# 1) DELGADO's corrected "Windlass online! Fairlead online!" (19.45 to 21.56 s of the dialogue file),
#    peak-normalised to -3 dB.
peak=$(ffmpeg -hide_banner -ss 19.45 -to 21.56 -i "$DIALOGUE" -af volumedetect -f null - 2>&1 \
       | grep max_volume | sed 's/.*max_volume: \(-\?[0-9.]*\) dB.*/\1/')
gain=$(python -c "print(round(-3.0 - ($peak), 2))")
ffmpeg -v error -y -ss 19.45 -to 21.56 -i "$DIALOGUE" -af "volume=${gain}dB" -c:a libmp3lame -q:a 2 "$WORK/delgado-online.mp3"

# 2) Clip A up to the cut into Sullivan's shot (9.04 s), then A3. Hard cut, 50 ms audio fades.
ffmpeg -v error -y -i "$CLIP_A" -i "$CLIP_A3" -filter_complex "
[0:v]trim=0:9.041667,setpts=PTS-STARTPTS[v0];
[1:v]setpts=PTS-STARTPTS[v1];
[v0][v1]concat=n=2:v=1:a=0[v];
[0:a]atrim=0:9.041667,asetpts=PTS-STARTPTS,aresample=48000,afade=t=out:st=8.99:d=0.05[a0];
[1:a]asetpts=PTS-STARTPTS,aresample=48000,afade=t=in:st=0:d=0.05[a1];
[a0][a1]concat=n=2:v=0:a=1,loudnorm=I=-18:TP=-2:LRA=11[a]" \
  -map "[v]" -map "[a]" -c:v libx264 -crf 18 -pix_fmt yuv420p -r 24 -c:a aac -ar 48000 -ac 2 -b:a 192k "$WORK/A-plus-A3.mp4"

# 3) The zoom. Plates are the frames of clip C (the camera is locked). find_quad.py located the monitor
#    at x 391-592, y 133-243 in the 854x480 plate; zoom_composite.py holds those numbers.
ffmpeg -v error -y -i "$CLIP_C" -vf "fps=24" "$WORK/plates/p-%04d.png"
python "$HERE/zoom_composite.py" "$WORK/plates" "$SCREEN" "$WORK/frames"

# 4) Zoom segment: the rendered frames, a looped room-tone bed (the first 3.3 s of clip C's own audio),
#    and the corrected DELGADO line at 3.55 s. 9.6 s long.
ffmpeg -v error -y -framerate 24 -i "$WORK/frames/f-%04d.jpg" -i "$CLIP_C" -i "$WORK/delgado-online.mp3" -filter_complex "
[1:a]atrim=0:3.3,asetpts=PTS-STARTPTS[b1];[1:a]atrim=0.3:3.1,asetpts=PTS-STARTPTS[b2];[1:a]atrim=0.3:3.1,asetpts=PTS-STARTPTS[b3];[1:a]atrim=0.3:3.1,asetpts=PTS-STARTPTS[b4];
[b1][b2]acrossfade=d=0.15[c1];[c1][b3]acrossfade=d=0.15[c2];[c2][b4]acrossfade=d=0.15[bed];
[2:a]volume=-3dB,adelay=3550|3550[v];[bed][v]amix=inputs=2:duration=longest:normalize=0[mix];
[mix]aresample=48000,aformat=channel_layouts=stereo,atrim=0:9.6,asetpts=PTS-STARTPTS[out]" \
  -map 0:v -map "[out]" -c:v libx264 -crf 17 -pix_fmt yuv420p -r 24 -c:a aac -b:a 192k -ar 48000 -t 9.6 "$WORK/zoom-segment.mp4"

# 5) Everything at 1280x720: A+A3, then B, then the zoom segment. Hard cuts, 40 ms audio fades, loudness matched.
d1=$(ffprobe -v error -select_streams v:0 -show_entries stream=duration -of csv=p=0 "$WORK/A-plus-A3.mp4")
d2=$(ffprobe -v error -select_streams v:0 -show_entries stream=duration -of csv=p=0 "$CLIP_B")
d3=9.6
f1=$(python -c "print($d1-0.04)"); f2=$(python -c "print($d2-0.04)")
ffmpeg -v error -y -i "$WORK/A-plus-A3.mp4" -i "$CLIP_B" -i "$WORK/zoom-segment.mp4" -filter_complex "
[0:v]fps=24,scale=1280:720:flags=lanczos,setsar=1,setpts=PTS-STARTPTS[v0];
[1:v]fps=24,scale=1280:720:flags=lanczos,setsar=1,setpts=PTS-STARTPTS[v1];
[2:v]fps=24,setsar=1,setpts=PTS-STARTPTS[v2];
[0:a]aresample=48000,aformat=channel_layouts=stereo,atrim=0:$d1,asetpts=PTS-STARTPTS,afade=t=out:st=$f1:d=0.04[a0];
[1:a]aresample=48000,aformat=channel_layouts=stereo,atrim=0:$d2,asetpts=PTS-STARTPTS,afade=t=in:st=0:d=0.04,afade=t=out:st=$f2:d=0.04[a1];
[2:a]aresample=48000,aformat=channel_layouts=stereo,atrim=0:$d3,asetpts=PTS-STARTPTS,afade=t=in:st=0:d=0.04[a2];
[v0][a0][v1][a1][v2][a2]concat=n=3:v=1:a=1[v][a];[a]loudnorm=I=-18:TP=-2:LRA=11[aout]" \
  -map "[v]" -map "[aout]" -c:v libx264 -crf 18 -pix_fmt yuv420p -c:a aac -ar 48000 -ac 2 -b:a 192k "$WORK/opening-scene.mp4"

echo "built $WORK/opening-scene.mp4 ($(ffprobe -v error -show_entries format=duration -of csv=p=0 "$WORK/opening-scene.mp4") s)"

# Notes
# - To swap in the real demo, replace SCREEN. A still works as is. A video would need zoom_composite.py to read
#   one demo frame per output frame instead of the single image; that change is not made yet.
# - find_quad.py is the helper that located the monitor. Run it on a plate frame if the shot or the camera changes:
#     python find_quad.py plate.png debug.png <seed x> <seed y> [tolerance]
# - envelope.py prints a loudness strip of 16 kHz mono PCM on stdin, used to find where each spoken line starts:
#     ffmpeg -i clip.mp4 -vn -ac 1 -ar 16000 -f s16le - | python envelope.py
