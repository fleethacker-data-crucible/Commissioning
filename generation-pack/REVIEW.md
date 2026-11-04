# Review: everything that would be sent to Renoise
**Nothing has been sent.** This file is the complete payload, in order, for you to review and edit before anything is generated. Placeholders like `{{reyes-pick}}` are filled in with the IDs of earlier results. Edit `jobs.json` (then re-run `python make-prompts.py`) or tell me what to change.
Credits are not shown because I have no price list. Your own ledger puts a character sheet at about 23 credits, a 4k room sheet at about 28 and a 1k image at about 6. Check live prices.
## Review checklist
- Appearance slots (REYES, MORGAN) are filled with my defaults. Change anything you do not want.
- Uniform wording for REYES is a placeholder `[UNIFORM: confirm with a carrier Sailor]`; it is sent as written unless you fix it first.
- No real names, ship names, hull numbers or seals are in any prompt. The cap text and badge are composited later, not generated.
- The Captain job references your existing sheets 413570 and 413362; it sends no new personal data.
- Voice job: voices are described, not cloned.

## 01. Captain HARLAN sheet v3 (cap, no hull number)
- Model: GPT Image 2.5 Sunburst, size 2k, aspect 16:9, count 1
- Needs: captain-v2-sheet, captain-identity
- Result recorded as: `captain-v3-sheet`

```text
USE: Photorealistic character turnaround reference sheet of one US Navy submarine Commanding Officer, for keeping his face identical across many video shots.
IDENTITY AND COSTUME REFERENCE: @task:{{captain-v2-sheet}} is the existing Captain sheet. Keep this exact man's face, hair, build, expression and every part of the uniform identical in every panel. @task:{{captain-identity}} is the original identity pick.
CHANGE ONLY the cap, to a navy blue ball cap with gold embroidery: the boat name "USS FLEETHACKER" and a small crest on the front, and gold oak-leaf embroidery along the visor. No hull number, no "SSN 999". Everything else stays exactly as in the existing sheet: navy blue submarine coverall, name tape "HARLAN" and "U.S. NAVY" tape, gold officer dolphins above the left chest tape, silver oak leaf (Commander, O-5) on each collar point, tan web belt with a metal buckle.
LAYOUT: four equal vertical panels side by side on a seamless pure white studio background, separated by thin grey vertical lines. Panel 1: full body, front view, standing relaxed, arms at his sides. Panel 2: full body, exact side profile facing right. Panel 3: full body, three-quarter view. Panel 4: extreme straight-on close-up of his face, head, cap and collar, looking into the camera, neutral expression, rank insignia visible. Same man, same uniform, same proportions in all four panels. Soft even studio lighting, sharp focus, no shadows on the background.
EXACT TEXT: bold black sans-serif labels centered at the bottom of each panel: "FRONT", "SIDE", "3-QUARTER", "FACE DETAIL". No other text beyond the uniform tapes and the cap embroidery, no watermark, no player controls.
```

## 02. REYES identity picks
- Model: Seedream 5.0 Pro, size 1k, aspect 3:4, count 3
- Needs: nothing
- Result recorded as: `reyes-pick`

```text
Photorealistic full-body photograph of a female US Navy enlisted Sailor standing a night watch aboard an aircraft carrier, [APPEARANCE: a woman in her mid-twenties, lean and weathered, dark hair pulled back in a regulation-neat bun, a tired but steady face with light shadows under the eyes, no makeup, natural and approachable, watchful; uniform lightly worn, boots scuffed]. Plain working uniform [UNIFORM: confirm with a carrier Sailor], zipped or buttoned to the collar, black safety boots, no cap. Standing relaxed facing the camera straight on, arms at her sides, whole body from head to boots in frame, plain neutral mid-grey studio background, soft even lighting, one person only. No text, no labels, no captions, no watermark.
```

## 03. REYES four-panel sheet
- Model: GPT Image 2.5 Sunburst, size 2k, aspect 16:9, count 1
- Needs: reyes-pick
- Result recorded as: `reyes-sheet`

```text
USE: Photorealistic character turnaround reference sheet of one female US Navy enlisted Sailor standing a night watch aboard an aircraft carrier, for keeping her face identical across many video shots.
IDENTITY REFERENCE: @task:{{reyes-pick}} is the identity reference. Keep this exact woman's face, skin tone, hair, build and expression identical in every panel.
CHANGE ONLY their clothing, to the carrier working uniform [UNIFORM: confirm with a carrier Sailor]: a sewn-on name tape over the right chest reading "REYES" and a sewn-on tape over the left chest reading "U.S. NAVY"; petty officer second class (E-5) rank insignia, an eagle above two chevrons; no cap; black safety boots; no warfare pins. The women's version of the uniform and the hair rules should be confirmed by a carrier Sailor [unverified].
LAYOUT: four equal vertical panels side by side on a seamless pure white studio background, separated by thin grey vertical lines. Panel 1: full body, front view, standing relaxed, arms at her sides. Panel 2: full body, exact side profile facing right. Panel 3: full body, three-quarter view. Panel 4: extreme straight-on close-up of the face, head and collar, looking into the camera, neutral expression, rank insignia visible, hair in a regulation bun. Same woman, same uniform, same proportions in all four panels. Soft even studio lighting, sharp focus, no shadows on the background.
EXACT TEXT: bold black sans-serif labels centered at the bottom of each panel: "FRONT", "SIDE", "3-QUARTER", "FACE DETAIL". No other text beyond the uniform tapes, no watermark, no player controls.
```

## 04. MORGAN identity picks
- Model: Seedream 5.0 Pro, size 1k, aspect 3:4, count 3
- Needs: nothing
- Result recorded as: `morgan-pick`

```text
Photorealistic full-body photograph of a government civilian software developer, [APPEARANCE: mid-thirties, medium build, dark hair tied back, light olive skin, calm tired eyes, understated and dry]. Business-casual office clothing: a plain light-blue collared button-up shirt, dark trousers, flat dark shoes, and a plain white badge holder on a dark lanyard around their neck, the badge face blank. Standing relaxed facing the camera straight on, arms at their sides, whole body from head to shoes in frame, plain neutral mid-grey studio background, soft even lighting, one person only. No text, no labels, no captions, no watermark.
```

## 05. MORGAN four-panel sheet
- Model: GPT Image 2.5 Sunburst, size 2k, aspect 16:9, count 1
- Needs: morgan-pick
- Result recorded as: `morgan-sheet`

```text
USE: Photorealistic character turnaround reference sheet of one government civilian software developer, for keeping their face identical across many video shots.
IDENTITY REFERENCE: @task:{{morgan-pick}} is the identity reference. Keep this exact person's face, skin tone, hair, build and expression identical in every panel.
CHANGE ONLY their clothing, to: a plain light-blue collared button-up shirt, dark trousers, flat dark shoes, a plain white rectangular badge holder on a dark lanyard around their neck with a BLANK badge face (no photo, no text), no insignia of any kind.
LAYOUT: four equal vertical panels side by side on a seamless pure white studio background, separated by thin grey vertical lines. Panel 1: full body, front view, standing relaxed, arms at their sides. Panel 2: full body, exact side profile facing right. Panel 3: full body, three-quarter view. Panel 4: extreme straight-on close-up of the face, head, collar and the lanyard, looking into the camera, neutral expression. Same person, same clothes, same proportions in all four panels. Soft even studio lighting, sharp focus, no shadows on the background.
EXACT TEXT: bold black sans-serif labels centered at the bottom of each panel: "FRONT", "SIDE", "3-QUARTER", "FACE DETAIL". No other text, no watermark, no player controls.
```

## 06. Carrier workcenter: north master
- Model: Seedream 5.0 Pro, size 1k, aspect 16:9, count 1
- Needs: nothing
- Result recorded as: `carrier-north-master`

```text
Photorealistic documentary photograph of the back wall of a small US Navy workcenter office aboard an aircraft carrier at 0200, shot from the center of the room at eye height with a 35mm lens, camera straight on. Haze-grey painted steel bulkhead, scuffed. A grey steel desk bolted to the deck, with a raised lip around its edge. On the LEFT of the desk: a thick bound paper watch log lying open, its pages covered in dense handwriting that is not legible, a black pen beside it, and a lidded steel mug. A clipboard hanging on a hook above the desk. A plain analog wall clock with no numerals, its hands near two o'clock. Overhead, thick bundled cable runs and painted pipes with no labels, and a low dim cool-white light fixture. A warm desk lamp switched on at the left. A grey swivel chair secured to the deck. Scuffed grey non-skid deck. No windows, no posters, no readable text anywhere, no logos. U.S. Navy public affairs photograph style, available light, mild film grain, realistic, not a video game.
```

## 07. Carrier workcenter: 2x2 room sheet
- Model: GPT Image 2.5 Sunburst, size 4k, aspect 16:9, count 1
- Needs: carrier-north-master
- Result recorded as: `carrier-sheet`

```text
USE: One photorealistic reference sheet of a single small US Navy workcenter office aboard an aircraft carrier at night, shown as four views in a 2x2 grid, for keeping the room identical across many video shots. No people.
REFERENCE: @task:{{carrier-north-master}} is the North view. The NORTH panel must match it exactly: same desk, same items, same clock, same lamp, same chair, same overhead cable runs and lighting.
SAME ROOM IN ALL FOUR PANELS: one small rectangular room. The camera stays at the exact center of the room, at the same eye height with the same lens in every panel, rotated exactly 90 degrees between panels. Same ceiling, same floor, same lighting, same color, same photographic style (U.S. Navy public affairs photograph, available light, documentary, not a video game render).
FIXED INVENTORY: NORTH (back wall): the desk wall exactly as in the reference. EAST (starboard wall): a grey steel locker with a latch, and a plain grey steel shelf beside it holding a stack of bound paper logs, spines unreadable. SOUTH (door wall): a heavy grey watertight door with a dogging wheel, closed, in the middle of the wall; a plain empty fire-extinguisher bracket beside it. WEST (port wall): a second plain grey steel shelf with a few folders, nothing legible, and a bare section of scuffed bulkhead with a small round gauge with no legible markings.
LAYOUT: 2x2 grid separated by thin white lines, NORTH top-left, EAST top-right, SOUTH bottom-left, WEST bottom-right, each panel 16:9. EXACT TEXT: a small bold white sans-serif label in the top-left corner of each panel: "NORTH", "EAST", "SOUTH", "WEST". No other text, no logos, no watermark.
```

## 08. Carrier: clock insert
- Model: Seedream 5.0 Pro, size 1k, aspect 16:9, count 1
- Needs: carrier-north
- Result recorded as: `carrier-clock`

```text
Close-up of the plain analog wall clock from @material:{{carrier-north}}, no numerals on the face, the second hand mid-sweep, shallow depth of field, same lighting as the reference. No text, no logos, no watermark.
```

## 09. Carrier: watch log insert
- Model: Seedream 5.0 Pro, size 1k, aspect 16:9, count 1
- Needs: carrier-north
- Result recorded as: `carrier-log`

```text
Close-up from above of the open bound watch log from @material:{{carrier-north}}, two ruled pages covered in dense blue-ink handwriting that is NOT legible, scribbled lines and cross-outs, a hand holding a black pen above the page, shallow depth of field, same lighting as the reference. No legible words, no numbers, no logos, no watermark.
```

## 10. Carrier: flight deck establishing shot  (optional)
- Model: Seedream 5.0 Pro, size 1k, aspect 16:9, count 1
- Needs: nothing
- Result recorded as: `carrier-flightdeck`

```text
Photorealistic documentary photograph of the flight deck of a large US Navy aircraft carrier at night, seen from a distance, dark silhouettes of parked aircraft, dim blue taxi lights and a few small amber lights along the deck edge, a faint haze, no people in focus, no readable text, no ship name, no hull number, no logos, no watermark. Generic, not a specific ship.
```

## 11. Shore office: north master
- Model: Seedream 5.0 Pro, size 1k, aspect 16:9, count 1
- Needs: nothing
- Result recorded as: `shore-north-master`

```text
Photorealistic documentary photograph of the back wall of a small plain US government office in the morning, shot from the center of the room at eye height with a 35mm lens, camera straight on. A beige laminate desk against a grey-beige wall. On the desk: a plain black laptop with the lid open and its screen a plain flat pale blue-grey, a small grey smart-card reader on a short cable beside it, a keyboard, a white ceramic coffee mug, a plain desk phone. A plain analog wall clock above the desk, no numerals, its hands near nine. A grey fabric office chair. Ceiling fluorescent panels in a drop ceiling, on, cool white, even light. No windows, no posters, no readable text anywhere, no logos. Documentary photograph style, available light, mild film grain, realistic, not a video game.
```

## 12. Shore office: 2x2 room sheet
- Model: GPT Image 2.5 Sunburst, size 4k, aspect 16:9, count 1
- Needs: shore-north-master
- Result recorded as: `shore-sheet`

```text
USE: One photorealistic reference sheet of a single small plain US government office, shown as four views in a 2x2 grid, for keeping the room identical across many video shots. No people.
REFERENCE: @task:{{shore-north-master}} is the North view. The NORTH panel must match it exactly: same desk, same items, same clock, same chair, same ceiling panels and lighting.
SAME ROOM IN ALL FOUR PANELS: one small rectangular room. The camera stays at the exact center of the room, at the same eye height with the same lens in every panel, rotated exactly 90 degrees between panels. Same ceiling, same floor (grey commercial carpet tile), same lighting, same color, same photographic style.
FIXED INVENTORY: NORTH (back wall): the desk wall exactly as in the reference. EAST: a grey metal filing cabinet and a bare cork board with nothing pinned to it. SOUTH (door wall): a plain closed office door, grey, with a small narrow vision panel, and a coat hook beside it holding nothing. WEST: a second small table with a blank printer on it and a stack of blank paper, nothing legible.
LAYOUT: 2x2 grid separated by thin white lines, NORTH top-left, EAST top-right, SOUTH bottom-left, WEST bottom-right, each panel 16:9. EXACT TEXT: a small bold white sans-serif label in the top-left corner of each panel: "NORTH", "EAST", "SOUTH", "WEST". No other text, no logos, no watermark.
```

## 13. Shore office: clock insert
- Model: Seedream 5.0 Pro, size 1k, aspect 16:9, count 1
- Needs: shore-north
- Result recorded as: `shore-clock`

```text
Close-up of the plain analog wall clock from @material:{{shore-north}}, no numerals on the face, the second hand mid-sweep, shallow depth of field, same lighting as the reference. No text, no logos, no watermark.
```

## 14. Shore office: laptop and reader insert  (optional)
- Model: Seedream 5.0 Pro, size 1k, aspect 16:9, count 1
- Needs: shore-north
- Result recorded as: `shore-laptop`

```text
Close-up of the plain black laptop and the small grey smart-card reader on the beige desk from @material:{{shore-north}}, the laptop screen a plain flat pale blue-grey with nothing on it, shallow depth of field, same lighting as the reference. No text, no logos, no watermark.
```

## 15. Voices: REYES, MORGAN, NARRATOR (Seed Audio)
- Model: Seed Audio, size n/a, aspect n/a, count 1
- Needs: nothing
- Result recorded as: `voices-dialogue`

```text
Setting: clean, dry, close-microphone dialogue recorded for a film, no background noise, no music, no room reverb.
Speaker MORGAN: [VOICE: even, a little weary, understated, neither hurried nor dramatic].
Speaker REYES: [VOICE: a woman's voice, low, tired and dry, steady, never raised].
Speaker NARRATOR: [VOICE: calm, level, slightly dry, neither hurried nor dramatic].
```
