#!/bin/bash
# usage: extract1080.sh <taskid>  (reads gen/up-<id>.mp4 -> clips1080/<id>/f%05d.png)
id=$1; mkdir -p clips1080/$id
ffmpeg -y -loglevel error -i gen/up-$id.mp4 -vf "fps=24,scale=1920:1080:force_original_aspect_ratio=increase:flags=lanczos,crop=1920:1080" -start_number 0 clips1080/$id/f%05d.png
echo "$id $(ls clips1080/$id | wc -l) frames"
