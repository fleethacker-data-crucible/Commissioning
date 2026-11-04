# Asset sheets: what exists, what to make

Prompts below copy the structure of the ones you already used (`intro/prompts/prompt-audit.md`): identity pick first, then a four-panel character sheet; a master wall, then a 2x2 room sheet; then "same photograph, change only the lighting" for variants. Nothing here was generated: I have no Renoise access in this session. Credit figures are rough, from the costs in your own ledger; check live prices.

## 1. Checklist

| Asset | Status | Task or material | Used in |
|---|---|---|---|
| DELGADO character sheet | **Have** | 413420 | Night Watch, control room |
| Captain HARLAN sheet v2 | **Have** (lettered cap) | 413570 | Control room |
| SULLIVAN sheet | **Have** | 413550 | Sullivan cut |
| Control room sheet (N/E/S/W) | **Have** | 413508; walls 394090 to 394093 | Control room |
| Control room red walls | **Have** | 413519 to 413522 | Control room |
| Dialogue audio (Captain, Sullivan, DELGADO) | **Have**, lines change | 413603 | Control room |
| **REYES (carrier Sailor) identity picks and sheet** | **Need** | | Night Watch |
| **KESSLER (civilian) identity picks and sheet** | **Need** | | The Desk |
| **Captain sheet v3** (cap: boat name and crest kept, hull number dropped) | **Need** | reference 413570 | Control room |
| **Carrier workcenter: north master, 2x2 sheet, inserts** | **Need** | | Night Watch |
| **Shore office: north master, 2x2 sheet, inserts** | **Need** | | The Desk |
| Flight-deck establishing shot | Optional | | Night Watch |
| REYES, KESSLER and NARRATOR voices | **Need** | | Lead-up, tour, demos |
| Reference frame from C v3 | **Need** (free, ffmpeg) | 413730 | Captain's walk |
| ID badge and "CIV" tag art | **Need** (local, composited) | | The Desk |
| Terminal text overlays | **Need** (local, composited) | | The Desk |
| Challenge coin art | **Have** | `dumping-grounds/` | Close card |
| Periscope screen still | **Have** | `overlay/scope-screen-real.png` | Control-room zoom |

Rough cost of the new generated assets at your ledger's rates: about 200 to 250 credits (identity picks about 36 for two characters, two character sheets about 46, two north masters about 24, two 4k room sheets about 56, inserts about 18, Captain v3 about 23). Clips are extra. Check live prices.

## 2. Characters

### Captain v3 (reference 413570)
```text
Same structure as the Captain sheet v2: CHANGE ONLY the cap, to a navy blue ball cap with gold embroidery: the boat name "USS FLEETHACKER" and a small crest on the front, and gold oak-leaf embroidery along the visor. No hull number, no "SSN 999".
```
Keep the rest of the v2 prompt unchanged (gold officer dolphins, silver oak leaf collar devices, tan web belt).

### REYES, carrier Sailor
**Identity picks** (Seedream 5.0 Pro, 1k, 3:4, three candidates). The appearance block is yours to set; default shown. The uniform is a placeholder until a carrier Sailor confirms it.
```text
Photorealistic full-body photograph of a US Navy enlisted Sailor standing a night watch aboard an aircraft carrier, [APPEARANCE: mid-twenties, lean build, short dark hair, tired and watchful eyes]. Plain working uniform [UNIFORM: confirm with a carrier Sailor], zipped or buttoned to the collar, black safety boots, no cap. Standing relaxed facing the camera straight on, arms at their sides, whole body from head to boots in frame, plain neutral mid-grey studio background, soft even lighting, one person only. No text, no labels, no captions, no watermark.
```
**Four-panel sheet** (GPT Image 2.5 Sunburst, 2k, 16:9; reference: the identity pick you choose):
```text
USE: Photorealistic character turnaround reference sheet of one US Navy enlisted Sailor standing a night watch aboard an aircraft carrier, for keeping their face identical across many video shots.
IDENTITY REFERENCE: @task:<REYES pick> is the identity reference. Keep this exact person's face, skin tone, hair, build and expression identical in every panel.
CHANGE ONLY their clothing, to the carrier working uniform [UNIFORM: confirm with a carrier Sailor]: a sewn-on name tape over the right chest reading "REYES" and a sewn-on tape over the left chest reading "U.S. NAVY"; petty officer second class (E-5) rank insignia, an eagle above two chevrons; no cap; black safety boots; no warfare pins.
LAYOUT: four equal vertical panels side by side on a seamless pure white studio background, separated by thin grey vertical lines. Panel 1: full body, front view, standing relaxed, arms at their sides. Panel 2: full body, exact side profile facing right. Panel 3: full body, three-quarter view. Panel 4: extreme straight-on close-up of the face, head and collar, looking into the camera, neutral expression, rank insignia visible. Same person, same uniform, same proportions in all four panels. Soft even studio lighting, sharp focus, no shadows on the background.
EXACT TEXT: bold black sans-serif labels centered at the bottom of each panel: "FRONT", "SIDE", "3-QUARTER", "FACE DETAIL". No other text beyond the uniform tapes, no watermark, no player controls.
```
The carrier name and hull number on the cap are composited later.

### KESSLER, civilian developer
**Identity picks** (Seedream 5.0 Pro, 1k, 3:4, three candidates):
```text
Photorealistic full-body photograph of a government civilian software developer, [APPEARANCE: mid-thirties, medium build, dark hair tied back, light olive skin, calm tired eyes, understated and dry]. Business-casual office clothing: a plain light-blue collared button-up shirt, dark trousers, flat dark shoes, and a plain white badge holder on a dark lanyard around their neck, the badge face blank. Standing relaxed facing the camera straight on, arms at their sides, whole body from head to shoes in frame, plain neutral mid-grey studio background, soft even lighting, one person only. No text, no labels, no captions, no watermark.
```
**Four-panel sheet** (GPT Image 2.5 Sunburst, 2k, 16:9; reference: the identity pick you choose):
```text
USE: Photorealistic character turnaround reference sheet of one government civilian software developer, for keeping their face identical across many video shots.
IDENTITY REFERENCE: @task:<KESSLER pick> is the identity reference. Keep this exact person's face, skin tone, hair, build and expression identical in every panel.
CHANGE ONLY their clothing, to: a plain light-blue collared button-up shirt, dark trousers, flat dark shoes, a plain white rectangular badge holder on a dark lanyard around their neck with a BLANK badge face (no photo, no text), no insignia of any kind.
LAYOUT: four equal vertical panels side by side on a seamless pure white studio background, separated by thin grey vertical lines. Panel 1: full body, front view, standing relaxed, arms at their sides. Panel 2: full body, exact side profile facing right. Panel 3: full body, three-quarter view. Panel 4: extreme straight-on close-up of the face, head, collar and the lanyard, looking into the camera, neutral expression. Same person, same clothes, same proportions in all four panels. Soft even studio lighting, sharp focus, no shadows on the background.
EXACT TEXT: bold black sans-serif labels centered at the bottom of each panel: "FRONT", "SIDE", "3-QUARTER", "FACE DETAIL". No other text, no watermark, no player controls.
```
The badge face stays blank. The tag reading "CIV" and any photo are added in the edit.

## 3. The carrier workcenter (Night Watch)

### North master (Seedream 5.0 Pro, 1k, 16:9)
```text
Photorealistic documentary photograph of the back wall of a small US Navy workcenter office aboard an aircraft carrier at 0200, shot from the center of the room at eye height with a 35mm lens, camera straight on. Haze-grey painted steel bulkhead, scuffed. A grey steel desk bolted to the deck, with a raised lip around its edge. On the LEFT of the desk: a thick bound paper watch log lying open, its pages covered in dense handwriting that is not legible, a black pen beside it, and a lidded steel mug. A clipboard hanging on a hook above the desk. A plain analog wall clock with no numerals, its hands near two o'clock. Overhead, thick bundled cable runs and painted pipes with no labels, and a low dim cool-white light fixture. A warm desk lamp switched on at the left. A grey swivel chair secured to the deck. Scuffed grey non-skid deck. No windows, no posters, no readable text anywhere, no logos. U.S. Navy public affairs photograph style, available light, mild film grain, realistic, not a video game.
```
### 2x2 room sheet (GPT Image 2.5 Sunburst, 4k, 16:9; reference: the chosen north master)
```text
USE: One photorealistic reference sheet of a single small US Navy workcenter office aboard an aircraft carrier at night, shown as four views in a 2x2 grid, for keeping the room identical across many video shots. No people.
REFERENCE: @task:<carrier north master> is the North view. The NORTH panel must match it exactly: same desk, same items, same clock, same lamp, same chair, same overhead cable runs and lighting.
SAME ROOM IN ALL FOUR PANELS: one small rectangular room. The camera stays at the exact center of the room, at the same eye height with the same lens in every panel, rotated exactly 90 degrees between panels. Same ceiling, same floor, same lighting, same color, same photographic style (U.S. Navy public affairs photograph, available light, documentary, not a video game render).
FIXED INVENTORY: NORTH (back wall): the desk wall exactly as in the reference. EAST (starboard wall): a grey steel locker with a latch, and a plain grey steel shelf beside it holding a stack of bound paper logs, spines unreadable. SOUTH (door wall): a heavy grey watertight door with a dogging wheel, closed, in the middle of the wall; a plain empty fire-extinguisher bracket beside it. WEST (port wall): a second plain grey steel shelf with a few folders, nothing legible, and a bare section of scuffed bulkhead with a small round gauge with no legible markings.
LAYOUT: 2x2 grid separated by thin white lines, NORTH top-left, EAST top-right, SOUTH bottom-left, WEST bottom-right, each panel 16:9. EXACT TEXT: a small bold white sans-serif label in the top-left corner of each panel: "NORTH", "EAST", "SOUTH", "WEST". No other text, no logos, no watermark.
```
Crop each panel as its own reference material, as you did for the control room.

### Inserts (Seedream 5.0 Pro, 1k, 16:9, reference: the carrier north panel)
```text
Close-up of the plain analog wall clock from @material:<carrier north>, no numerals on the face, the second hand mid-sweep, shallow depth of field, same lighting as the reference. No text, no logos, no watermark.
```
```text
Close-up from above of the open bound watch log from @material:<carrier north>, two ruled pages covered in dense blue-ink handwriting that is NOT legible, scribbled lines and cross-outs, a hand holding a black pen above the page, shallow depth of field, same lighting as the reference. No legible words, no numbers, no logos, no watermark.
```
### Optional establishing shot (Seedream 5.0 Pro, 1k, 16:9)
```text
Photorealistic documentary photograph of the flight deck of a large US Navy aircraft carrier at night, seen from a distance, dark silhouettes of parked aircraft, dim blue taxi lights and a few small amber lights along the deck edge, a faint haze, no people in focus, no readable text, no ship name, no hull number, no logos, no watermark. Generic, not a specific ship.
```

## 4. The shore office (The Desk)

### North master (Seedream 5.0 Pro, 1k, 16:9)
```text
Photorealistic documentary photograph of the back wall of a small plain US government office in the morning, shot from the center of the room at eye height with a 35mm lens, camera straight on. A beige laminate desk against a grey-beige wall. On the desk: a plain black laptop with the lid open and its screen a plain flat pale blue-grey, a small grey smart-card reader on a short cable beside it, a keyboard, a white ceramic coffee mug, a plain desk phone. A plain analog wall clock above the desk, no numerals, its hands near nine. A grey fabric office chair. Ceiling fluorescent panels in a drop ceiling, on, cool white, even light. No windows, no posters, no readable text anywhere, no logos. Documentary photograph style, available light, mild film grain, realistic, not a video game.
```
### 2x2 room sheet (GPT Image 2.5 Sunburst, 4k, 16:9; reference: the shore north master)
```text
USE: One photorealistic reference sheet of a single small plain US government office, shown as four views in a 2x2 grid, for keeping the room identical across many video shots. No people.
REFERENCE: @task:<shore north master> is the North view. The NORTH panel must match it exactly: same desk, same items, same clock, same chair, same ceiling panels and lighting.
SAME ROOM IN ALL FOUR PANELS: one small rectangular room. The camera stays at the exact center of the room, at the same eye height with the same lens in every panel, rotated exactly 90 degrees between panels. Same ceiling, same floor (grey commercial carpet tile), same lighting, same color, same photographic style.
FIXED INVENTORY: NORTH (back wall): the desk wall exactly as in the reference. EAST: a grey metal filing cabinet and a bare cork board with nothing pinned to it. SOUTH (door wall): a plain closed office door, grey, with a small narrow vision panel, and a coat hook beside it holding nothing. WEST: a second small table with a blank printer on it and a stack of blank paper, nothing legible.
LAYOUT: 2x2 grid separated by thin white lines, NORTH top-left, EAST top-right, SOUTH bottom-left, WEST bottom-right, each panel 16:9. EXACT TEXT: a small bold white sans-serif label in the top-left corner of each panel: "NORTH", "EAST", "SOUTH", "WEST". No other text, no logos, no watermark.
```
### Inserts
Clock close-up (same prompt as the carrier, referencing the shore north panel) and, if needed, a laptop-and-reader close-up with the screen a plain flat colour for compositing.

## 5. Voices (Seed Audio, one pass each, per the notes' lessons)
```text
Setting: clean, dry, close-microphone dialogue recorded for a film, no background noise, no music, no room reverb.
Speaker KESSLER: [VOICE: even, a little weary, understated, neither hurried nor dramatic].
Speaker REYES: [VOICE: tired, flat, dry].
Speaker NARRATOR: [VOICE: calm, level, slightly dry, neither hurried nor dramatic].
```
Add a REYES line to the same pass (tired, flat, dry). Describe the voices in the prompt and do not clone from a reference, because cloning did not keep the voices before. Write the lines once the lead-up scenes are scripted; test "Periscope" and "SCOPE" on a short clip first.

## 6. Local assets (no credits)

- **Reference frame from C v3:** `ffmpeg -ss <time> -i <C v3 clip> -frames:v 1 frame.png`, then register it for the Captain's walk.
- **ID badge face and "CIV" tag:** a fictional design, made with Pillow, composited on the lanyard. Do not copy a real government ID's layout, seal or colour bands.
- **Terminal text and "Access denied":** monospace overlay, composited.

## 7. Order

1. Captain v3 (cap only).
2. REYES identity picks, choose one, then the sheet. KESSLER identity picks, choose one, then the sheet.
3. Carrier north master, then the 2x2 sheet, then inserts. Shore office north master, then the 2x2 sheet, then inserts.
4. Voices.
5. Then the lead-up clips, using these as references.
