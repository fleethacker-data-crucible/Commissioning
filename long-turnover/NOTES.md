# The Long Turnover: production notes (pass 8)

## Pass 8 change (2026-11-05)
- **Hard-night shot (b18, 2:15) retaken.** In the pass-2 clip (task 445878) the wide showed Sullivan with the cardigan hanging to the floor and no chair seat or legs under her, floating beside the chair. Two Seedance 2.5 takes with the same actor and set references, the wide re-prompted so she is seated with the chair back and armrests in frame (144 credits each): A (task 449913), from behind, clearly seated in the chair, typing; B (task 449914), the cardigan draped over the chair back like a cape, which still reads oddly. The cut uses A for the full 9 s; B is kept in `work/gen` unused. A was upscaled with Topaz Starlight Precise 2.5 at 1080p (task 449933, 270 credits). Only that beat was re-composited at both resolutions (`seg_replace.py`), overlaid onto the previous masters and each file re-encoded once (CRF 18). Credits for pass 8: 558. Total about 5,157.

## Pass 7: 1080p (2026-11-05)
- `Long-Turnover-1080p.mp4` (1920x1080, 24 fps, H.264 CRF 18, AAC 160k, soft English subtitles) plus `Long-Turnover-720p-preview.mp4` for sending. The 480p master is kept as is.
- The 14 generated clips were upscaled with Topaz Starlight Precise 2.5 at 1080p (tasks 448181 to 448195, 30 credits per second, 2,730 credits; output 1918x1078, scaled and cropped to 1920x1080). Checked frame by frame: skin, glasses and hair detail hold; no artifacts seen. The three insert stills were already 2k and are used at native size. All HTML/SVG graphics, cards and screen inserts were re-rendered at 1920x1080 (2x device scale, Lanczos down), no credits. Letterbox is 119 px top and bottom (same 2.39 ratio), grain sigma 1.1 at 1080.
- Pipeline: `RES=1080` env var switches `composite.py` and `render_native.py`; `extract1080.sh`, `assemble1080.py`. Total credits across all passes about 4,599.

## Pass 6 change (2026-11-05)
- **Closing lines rewritten.** "A career should not have to." read as a contradiction. The close is now "A watch turnover takes fifteen minutes. A career takes fifteen years. Hand it over the whole way. Let's start now." (the last line also appears in gold on the end card as it is spoken). Three new Gemini lines, 6 credits (tasks 447984 to 447986). The pull-back beat (b34) lengthens to 5.0 s, the end card to 6.0 s; only the last 11 s were re-composited and joined to the pass-5 picture, the whole audio re-mixed and the file re-encoded once. Length 4:57 (297.0 s). SCRIPT.md updated. Credits for pass 6: 6. Total about 1,869.

## Pass 5 change (2026-11-05)
- **Office shot (b12, 1:00) retaken.** In the pass-2 clip (task 445877) the laptop was angled toward camera and Sullivan reached sideways at it. Two Seedance 2.5 takes with the same actor and office references (96 credits each): A (task 447915), three-quarter front, laptop square in front of her, hand resting on the trackpad; B (task 447916), over her shoulder into the screen with one small dialog. The cut uses take A for the full 6 s (your pick), then the native capture dialog as before; take B is kept in `work/gen` unused. Only that beat was re-composited; it was overlaid onto the pass-4 master and the whole file re-encoded once (CRF 18). Credits for pass 5: 192. Total about 1,863.

## Pass 4 changes (2026-11-05)
- **The models are not local.** The proposal processes anonymized data with generative AI models, so the three "local" claims were reworded and re-voiced (Gemini TTS, same Algieba voice, 2 credits each): H3e "Anonymized, then distilled by generative models."; H4k "Anonymized before any model sees it." (plaque now reads *Anonymized first: Raw capture stays on her machine.*); H6e "Nothing identifiable leaves the building." (the 90-days graphic keeps the red crossed arrows and adds a blue "anonymized data only, to the models" arrow out of the lab box). "On her machine." and the time-synced local sensor log are still true and unchanged. No generated shot was touched, so no reshoot.
- **Keep the headsets.** The Pivot outcome now reads "Pivot: keep the headsets, drop the extra sensors." (signpost: *EEG works, body sensors add nothing*). Re-voiced, 2 credits.
- **Real equipment photos.** The equipment beat (b25) now uses vendor product photos instead of drawn icons, headsets first and largest: Neurosity's Crown studio shot (neurosity.co), OpenBCI's gel-cap and Cyton kit photos (shop.openbci.com), Polar's H10 render (polar.com) and a BITalino (r)evolution kit photo (botnroll.com). They are embedded as data URIs in `work/src/equip.js`; originals in `work/gen/equip`. These are the vendors' marketing images used for an internal proposal; swap or credit them before any public release.
- Length is now 4:56 (295.5 s). SCRIPT.md updated to the new lines and to the Sullivan / Reyes names. Credits for pass 4: 8. Total about 1,671.
- **Still to do in the proposal documents themselves** (`long-turnover.html` lines 166, 265, 291; README lines 17, 18, 73, 146; pilot page "Nothing goes to vendor clouds"): they still say local models and must be revised to match.

Files in this folder: `Long-Turnover-480p.mp4` (854x480, 24 fps, H.264 CRF 17, AAC 160k, soft English `mov_text` subtitle track, never burned in), `Long-Turnover-480p.srt`, `storyboard-contact-sheet.png` (one frame per beat), `timeline.json` (beat, start, end, picture source, VO, status), `SCRIPT.md`. Everything that built the film is in `work/` (HTML/SVG scenes, renderer, compositor, audio builder, generated clips in `work/gen`).

**Length: 4:53 (292.8 s), not the script's 4:10.** The real narrator reads slower than the scratch voice (180 s of narration against 150 s), and every word of the Voice lines is kept and the beats were lengthened to fit. Reaching 4:10 means cutting words; candidates are the Act 2 stage-by-stage list, the Act 3 "hard calls" pair and the Act 4 session list.

## What is in the picture
- **Scene beats (16) are photoreal, generated with Renoise.** Two reference portraits (Chief Sullivan, Petty Officer Reyes) and two set plates (night control room, day office) were made first with Seedream 5.0 Pro, then every Seedance 2.5 shot references them for identity and location. Three text inserts (tape label, sticky note, phone screen) are Seedream 5.0 Pro stills with a slow push-in, because the wording has to be exact.
- **Three screen inserts are native** (capture dialog, the morning question, the RELIEF card), full-frame UI the way a documentary cuts to a screen.
- **Motion-graphics acts are native HTML/SVG** rendered at 2x and downscaled: voyage chart ("Illustrative model, not measured data."), four-layer iceberg (twice), Friday review, six-stage service record, six guardrail plaques, bookmark clock, sticky to typed card, 90 days, four sessions, five research questions with measures, equipment flat lay with $7.6 to $8.1k, Go / Pivot / Stop, four-phase road with "Not part of this request. Not funded.", decision card. All figures and phrases come from `long-turnover.html` and `long-turnover-pilot.html`.
- Grading: all picture goes through one treatment (2.39 letterbox on scene beats, vignette, light film grain) so generated and native frames sit together.
- Honesty: opening card "A fictional dramatization. People and events are invented. The proposal that follows is real." End card: "THE LONG TURNOVER. A moonshot R&D proposal. The scenes are a dramatization: the people and events are invented. The proposal is real." No organisation is named, as you asked.

## Names
Veteran: Chief Sullivan. Successor: Petty Officer Reyes. The RELIEF line says "Confirmed by Chief Sullivan". `SCRIPT.md` still reads Calloway / Brandt.

## Credits spent
Pass 2: 7 stills x 6 = 42, 14 Seedance 2.5 shots at 480p = 1,456. Pass 3 (audio): 71 Gemini 3.8 Flash TTS lines = 142, Lyria 3 Pro score 4 (+4 for one failed attempt the service refunded nothing on), ElevenLabs foley 14.8. **Total about 1,663 credits.** No video retakes. Balance after: about 19,118.

## Audio (final)
Voices: Gemini 3.8 Flash TTS, one task per line so timing stays sentence-accurate. Harlan = Algieba, Sullivan = Gacrux, Reyes = Achird, RELIEF = Erinome. Score: Lyria 3 Pro, instrumental neoclassical chamber piece (solo cello, pizzicato, harp, pad), 2:52, played under the title through Act 4 and again from the ask to the end, ducked under the voice with a sidechain compressor. Foley: ElevenLabs (plant hum looped as the night bed, alarm tone, page turn, pen writing, cup, chime, ship's bell), plus a very low pink bed everywhere so there is never digital silence. 30 ms fades at every splice. Master at -16 LUFS, true peak -1.5 dB.

## Shot notes (what I would change with more takes)
- b31 sunrise: the model gave the empty chair at sunrise without Reyes in it. It plays as a re-establishing shot before b32 (Reyes reading), so I kept it.
- b02 over-shoulder: the SOP binder reads more like a printed manual than a tabbed binder; the tabs show at the end.
- b08 calendar: the aging works (dark hair to silver, navy to tan cardigan, mug fixed) but the counter beat from pass 1 (15 years) is gone; the VO carries it.
- b01 gauge: dial markings are generic (unreadable at 480p, fine).
- The Reyes portrait had a garbled hoodie patch; shots were prompted "plain navy hoodie" and it mostly held; b33 shows a patch.
- Script deviations unchanged from pass 1: the five RQ questions are shown on cards with the one Voice-lines sentence; "seven and a half to eight thousand dollars" (VO) vs "$7.6 to $8.1k" (card); the robot beat carries "Always with a named person accountable" and the road tag carries "This part is not part of this request", per the Voice lines.

## Checks run
ffprobe (one H.264 yuv420p 854x480 24 fps stream, AAC 48 kHz, one mov_text English subtitle stream), loudness of the master -16.07 LUFS, no digital silence, 30 ms fades on every clip, voice onsets against SRT cues, sharpness scan (median 24.5; the low scores are the black cards and the dark pull-back), full-size review of every generated clip (three to four frames each) and of the composite contact sheet, and a free Renoise analysis of the score (confirmed instrumental) and of one narration line (confirmed verbatim, clean). Not done: a real-time watch-through with sound.

## Upscale (quoted, not spent)
Topaz Starlight Precise 2.5 at 1080p is 30 credits per second. Only the 14 generated clips need it (91 s): about 2,730 credits. The graphics, cards and screen inserts re-render natively at 1920x1080 for free, and the three insert stills are already 2k. The compositor then runs at 1080p and the master is re-encoded; expect a file well over 100 MB, so a smaller preview copy would accompany it.
