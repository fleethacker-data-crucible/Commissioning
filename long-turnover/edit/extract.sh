#!/bin/bash
# usage: extract.sh <taskid>  (reads gen/renoise-<id>.mp4 -> clips/<id>/f%05d.png)
id=$1; mkdir -p clips/$id
ffmpeg -y -loglevel error -i gen/renoise-$id.mp4 -vf "fps=24,scale=854:480:force_original_aspect_ratio=increase:flags=lanczos,crop=854:480" -start_number 0 clips/$id/f%05d.png
echo "$id $(ls clips/$id | wc -l) frames"
