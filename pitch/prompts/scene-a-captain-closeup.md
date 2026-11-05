# Scene A: the Captain's close-up (LOCKED, not yet generated)

Status: drafted 2026-11-04. The first take (task 444251) had no mouth movement on his line and was replaced by task 445307, the one in pitch v6.

## What it does

Replaces the opening's old close-up, where his lips said "Then we get our inference local. Rig for ultra-quiet. Windlass and Fairlead. Bring them online now." The new line, in his opening voice: "Then we work with what's aboard. Bring up the Periscope launcher."

## Voice (approved by Anthony)

- **Take: task 444223**, Seed Audio, voice sample material 394196 (the clean "Report." from the approved opening dialogue). Words verified by transcription.
- It carries a low sub-style rumble about 12 dB under his voice. Anthony chose it with the rumble and said it is natural on a sub. Plan: lay one continuous matching hum under the whole boat scene so it never pops in and out at the cuts.
- Rejected: task 444219 and my noise-cleaned version of it (material 426834). The old sample material 394289 carried a synth drone, and the cleaning made his voice sound bad. Also rejected: task 444224, a take with no sample and a 6 second pause, kept in the account for reference. Do not run noise reduction on the Captain's voice again.
- **Track used: material 426838**, `video/review/captain-launcher-trimmed.mp3`, 7.38 s. Trims only: the long pause shortened with a 0.12 s crossfade and the tail faded. He starts speaking at about 0.5 s.

## Inputs

| Input | ID | Notes |
|---|---|---|
| Captain sheet v3 | task 443743 | Plain navy cap, gold crest and visor leaves, no lettering |
| West wall, red emergency | task 413522 | Only for the red glow, the dark equipment and the monitor edge behind him |
| Captain's trimmed line | material 426838 | Reference audio |

## Locked payload (Seedance 2.5)

model `seedance-2.5-byteplus`, resolution `480p`, ratio `16:9`, duration `8`, audioGeneration on. References: `task:443743` reference_image, `task:413522` reference_image, `material:426838` reference_audio. Price 128 credits.

The prompt is the one priced in Renoise on 2026-11-04: locked-off chest-up close-up, red lamps from the side, pale monitor glow from below right, still for the first 0.5 s, the two sentences in sync with the audio with a pause between them from 0.5 to 7.2 s, still for the last 0.8 s, no lettering on the cap.

## Known risks to check on the result

1. His face matches sheet v3 and the opening close-ups.
2. The cap has no lettering.
3. His lips match the line, and he is still while he pauses.
4. The red light matches the opening's close-ups.
5. No alarm sound, no music, no drone.

## Known mismatch

The opening's wide shots show the old cap with the boat name and hull number. This close-up has the plain cap. In the wide shots the cap text is too small to read.
