#!/usr/bin/env bash
# Save one real frame from a clip, to use as the first-frame reference for the next shot.
#   extract-frame.sh <clip.mp4> <seconds> <out.png>
# Use the LAST clean frame of a shot: pass a time a little before the end (see ffprobe for the duration).
set -euo pipefail
[ $# -eq 3 ] || { sed -n '2,5p' "$0"; exit 2; }
ffmpeg -v error -y -ss "$2" -i "$1" -frames:v 1 "$3" && echo "wrote $3"
