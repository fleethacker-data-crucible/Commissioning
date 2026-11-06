# Scene 2: REYES at the conflag station (GENERATED, task 443912)

Status: final take is v3, task 444017 (see Result at the end); task 443912 is superseded. Used in pitch v6.

## What the scene does in the pitch

The pain, in one frame a Navy audience recognizes: 0200, a petty officer on watch hunting through a paper log for an open item. No tools named, no narration needed to get it.

## Running order inside the scene

| # | Shot | Length | How it is made | Credits |
|---|---|---|---|---|
| 2.1 | Flight deck at night, slow push in | 2.0 s | Local, from still task 443752 (ffmpeg zoompan) | 0 |
| 2.2 | Hangar bay at night, slow push in | 2.0 s | Local, from still task 443795 | 0 |
| 2.3 | REYES at the conflag station, line spoken | 8.0 s | Seedance 2.5, 480p, payload below | 128 |

Scene length about 12 s. A location card ("AIRCRAFT CARRIER, HANGAR BAY, 0200") goes over 2.2, composited locally. No ship name, no hull number.

## Inputs (all approved)

| Input | ID | Notes |
|---|---|---|
| REYES character sheet | task 443775 | Four panels, E-5, name tape reads REYES |
| Shot frame, 16:9 plate | material 426422 | Cut from the conflag north-east panel (material 426379), rows 700 to 1414 of 2009 |
| Booth layout, straight on | material 426378 | Conflag north panel |
| REYES voice and line | material 426404 | Clipped from task 443823 at 7.1 s with a 0.15 s fade. Sigh 0 to 1.1 s, line 1.1 to 6.0 s |

## Locked payload (Seedance 2.5)

- model: `seedance-2.5-byteplus`
- resolution: `480p` (keeper is upscaled to 1080p with Topaz after the cut is locked; never regenerated at 1080p)
- ratio: `16:9`
- duration: `8`
- audioGeneration: on (the model's voice is replaced with material 426404 in the edit, as in the opening)
- references: `task:443775` reference_image, `material:426422` reference_image, `material:426378` reference_image, `material:426404` reference_audio
- price: 128 credits (Renoise estimate)

Prompt, exact:

```text
REFERENCES: @task:443775 is REYES, a female US Navy petty officer second class: keep her face, dark hair in a regulation bun, navy blue coveralls, "REYES" name tape and collar insignia exactly as in this sheet. @material:426422 is the frame of the shot: the hangar bay conflagration station seen from its right-hand rear corner; keep this exact framing, set, props and red night lighting for the whole clip. @material:426378 is the same booth seen straight on, only for the stool, the counter height and where the log and phone sit. @material:426404 is REYES's voice and her exact line; she speaks in sync with this audio.
SHOT: one continuous locked-off shot, 0 to 8 seconds, framed exactly as @material:426422. The camera does not move: no pan, no zoom, no cuts. It is 0200 aboard an aircraft carrier. Through the window, the dim hangar bay with parked jets, nothing moving.
0 to 1.1 s: REYES sits on the steel stool at the counter in the lower left of the frame, seen from behind and to her right, three-quarter back view, the side of her face visible, lit by the red booth light and the cool glow from the window. She is close to the camera: her head and shoulders fill the lower-left third of the frame, her head near the top edge, partly covering the phone cord and the left page of the log. The framing stays exactly as the plate; do not zoom out to fit her. She is hunched over the open bound watch log. She holds the black pen from the plate in her right hand; the counter to the right of the log is bare except for the steel mug. She lets out a long tired exhale with the sigh in the audio.
1.1 to 6 s: She tucks the pen between her fingers and turns one page with her right hand, then runs the pen down the handwritten lines, eyes on the page, never looking at the camera. She says her line quietly to herself, in sync with @material:426404: "Third time through this log tonight. Still can't find the open item."
6 to 8 s: She stops, sets the pen down on the open log, sits back slightly and looks up and out through the window at the hangar bay, still.
SOUND: her voice exactly as @material:426404, low and dry, no words added. Quiet ventilation hum of a ship at night. No music.
STYLE: Documentary realism, U.S. Navy public affairs photograph look, available light, mild film grain, natural skin, realistic hands. Not a video game, not stylized.
NEGATIVE: no subtitles, no captions, no readable words on the log pages, no readable text anywhere except her own name tape, no logos, no watermark, no other people, no camera movement.
```

## Why it is built this way

- **Three-quarter back view.** Her face shows in profile, but her lips are not front and centre. If the model's lip sync drifts, the clipped audio still sells. The opening proved that a visible mouth saying the wrong word is the costliest fix.
- **Locked-off camera.** Matches the opening's grammar and keeps the set from drifting.
- **Real reference for every element.** The opening's lesson: an action with no picture behind it fails ("hands on the controls" gave a man gripping air). The log, pen, stool and window are all in the plate.
- **One page turn, one pen move, one rub of the nose.** One action per beat, timed to the audio.

## Known risks to check on the result

1. Her face and name tape match the sheet.
2. She does not look at the camera.
3. The log pages stay illegible.
4. The jets in the window do not move.
5. Lip motion roughly matches 1.1 to 6.0 s; if not, the shot still works because the mouth is in profile.
6. The plate's clock is out of frame, so the earlier clock-numeral problem does not show.

## Not verified

- The conflag booth's interior is the image model's design. The watch itself is real (Navy sources in `notes/handoff-2026-11-04.md`).
- REYES's coveralls and E-5 collar devices are plausible, not checked by a carrier Sailor.

## Review, 2026-11-04 (fresh read-only reviewer)

Verdict: send with edits. All six fixes applied in v2 above:

1. Two pens: the plate already has a pen on the counter. She now holds that pen; the counter right of the log is bare except the mug.
2. Name tape vs negative: the negative now allows her own name tape.
3. Scale: she fills the lower-left third with her head near the top edge, and the model is told not to zoom out to fit her.
4. Last two seconds: cut to set the pen down, sit back, look out. The nose rub is gone (too many actions, and hands near faces fuse).
5. Page turn moved to her right hand, the one nearer the camera.
6. The straight-on reference no longer names the clock, which has numerals on that panel.

Realism notes kept for later shots, not this one:

- A real conflag station has controls (overhead sprinklers, hangar bay doors). Later angles of the booth should show a control panel so it does not read as a guard shack.
- A conflag watch mainly observes and reports; "open item" fits a turnover log more than a lookout log. Kept: a Navy viewer gets it.
- Since 2024 the two-piece flame-resistant uniform is the main at-sea working uniform. Flame-resistant coveralls are still authorized, so REYES's sheet stands.

Unverified per the reviewer: whether a conflag station keeps its own bound log, red night lighting in the booth, name-tape side on FR coveralls, Seedance 2.5 behaviour (guides found cover 2.0 only).

## Result, 2026-11-04

Generated as **task 443912** (Seedance 2.5, 480p, 8.06 s, 128 credits).

Checked by eye on frames and by measurement:

- Camera locked: no cuts, the static corner moves at most 2 px over the clip.
- One pen only, held in her right hand; page turned with the near hand. No fused fingers in close-ups at 1.5, 3.5 and 6.5 s.
- Jets in the window do not move. Log pages are scribble, nothing readable. No other people, no captions.
- Framing matches plate 426422. She sits back and looks out the window at the end, as asked.
- Face reads as the REYES sheet in profile; name tape not visible from this angle.
- The model's own voice says the line correctly, about 1 s later than material 426404 (line at 2.1 to 6.2 s).

Review copies in `video/review/`: A keeps the model's voice (lips in sync); B lays the picked take 426404 over the picture, delayed 1.0 s. Anthony picks by ear.

## v3 reshoot, 2026-11-04

The first result (task 443912) was rejected for the jets: the set plate itself had melted jets and the model copied them. Blur and darkening fixes were rejected as worse. The plate was repainted (task 444012, material 426595) using a real public-domain Navy photo of Super Hornets as the shape reference. v3 (task 444017) uses the same locked prompt with the new plate and one added line: the aircraft stay sharp and unchanged, no moving aircraft.

Result: v3 task 444017 approved by Anthony. Machine check: locked static camera, jets clearly recognizable, line spoken correctly, pen set down and gaze out the window at 5.8 to 8.1 s. v1 (task 443912) is superseded.
