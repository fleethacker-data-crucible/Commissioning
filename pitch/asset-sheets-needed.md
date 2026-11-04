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
| **KESSLER (civilian) identity pick** | **Need** | | The Desk |
| **KESSLER four-panel sheet** | **Need** | | The Desk |
| **Office north master** | **Need** | | Both lead-up scenes |
| **Office 2x2 room sheet (night)** | **Need** | | Both lead-up scenes |
| **Office day walls (4)** | **Need** | | The Desk |
| **Office inserts (clock, log page, laptop and reader)** | **Need** | | Both lead-up scenes |
| Captain sheet v3, plain cap | Optional | | Only if you keep the plain-cap decision |
| DELGADO office variant | Optional | | Only if the existing sheet drifts in the office |
| KESSLER voice and NARRATOR voice | **Need** | | Lead-up, tour, demos |
| Reference frame from C v3 | **Need** (free, ffmpeg) | 413730 | Captain's walk |
| ID badge and "CIV" tag art | **Need** (local, composited) | | The Desk |
| Terminal text overlays | **Need** (local, composited) | | The Desk |
| Challenge coin art | **Have** | `dumping-grounds/` | Close card |
| Periscope screen still | **Have** | `overlay/scope-screen-real.png` | Control-room zoom |

Rough cost of the new generated assets at your ledger's rates: about 120 to 150 credits (identity picks about 18, character sheet about 23, one master wall about 12, the 4k room sheet about 28, four day walls about 24, inserts about 18, plus the optional Captain v3 at about 23). Clips are extra.

## 2. KESSLER (civilian developer)

### Identity picks (Seedream 5.0 Pro, 1k, 3:4, three candidates)
The appearance block is yours to set. Default shown.
```text
Photorealistic full-body photograph of a government civilian software developer, [APPEARANCE: mid-thirties, medium build, dark hair tied back, light olive skin, calm tired eyes, understated and dry]. Business-casual office clothing: a plain light-blue collared button-up shirt, dark trousers, flat dark shoes, and a plain white badge holder on a dark lanyard around their neck, the badge face blank. Standing relaxed facing the camera straight on, arms at their sides, whole body from head to shoes in frame, plain neutral mid-grey studio background, soft even lighting, one person only. No text, no labels, no captions, no watermark.
```

### Four-panel sheet (GPT Image 2.5 Sunburst, 2k, 16:9; reference: the identity pick you choose)
```text
USE: Photorealistic character turnaround reference sheet of one government civilian software developer, for keeping their face identical across many video shots.
IDENTITY REFERENCE: @task:<identity pick> is the identity reference. Keep this exact person's face, skin tone, hair, build and expression identical in every panel.
CHANGE ONLY their clothing, to: a plain light-blue collared button-up shirt, dark trousers, flat dark shoes, a plain white rectangular badge holder on a dark lanyard around their neck with a BLANK badge face (no photo, no text), no insignia of any kind.
LAYOUT: four equal vertical panels side by side on a seamless pure white studio background, separated by thin grey vertical lines. Panel 1: full body, front view, standing relaxed, arms at their sides. Panel 2: full body, exact side profile facing right. Panel 3: full body, three-quarter view. Panel 4: extreme straight-on close-up of the face, head, collar and the lanyard, looking into the camera, neutral expression. Same person, same clothes, same proportions in all four panels. Soft even studio lighting, sharp focus, no shadows on the background.
EXACT TEXT: bold black sans-serif labels centered at the bottom of each panel: "FRONT", "SIDE", "3-QUARTER", "FACE DETAIL". No other text, no watermark, no player controls.
```
The badge face stays blank on purpose. The tag reading "CIV" and any photo are added in the edit.

## 3. The office

### North master (Seedream 5.0 Pro, 1k, 16:9, night)
```text
Photorealistic documentary photograph of the back wall of a small US Navy shipboard office at 0200, shot from the center of the room at eye height with a 35mm lens, camera straight on. A grey-painted steel desk against the wall. On the LEFT of the desk: a thick bound paper watch log lying open, its pages covered in dense handwriting that is not legible, a black pen beside it, and a white ceramic coffee mug. On the RIGHT of the desk: a plain black laptop with the lid open and its screen plain pale blue-grey, a small grey smart-card reader on a short cable beside it. A warm desk lamp switched on at the left. Above the desk, a plain analog wall clock with no numerals, its hands near two o'clock. Overhead, a few exposed cable runs and a low cool-white fluorescent fixture, dim. A grey steel chair with a worn seat pulled slightly back from the desk. Grey-painted steel bulkhead, scuffed, no windows, no posters, no readable text anywhere, no logos. U.S. Navy public affairs photograph style, available light, mild film grain, realistic, not a video game.
```

### 2x2 room sheet (GPT Image 2.5 Sunburst, 4k, 16:9; reference: the chosen north master)
```text
USE: One photorealistic reference sheet of a single small US Navy shipboard office, shown as four views in a 2x2 grid, for keeping the room identical across many video shots. No people.
REFERENCE: @task:<north master> is the North view. The NORTH panel must match it exactly: same desk, same items on the left and right, same wall clock, same lamp, same chair, same cable runs and lighting.
SAME ROOM IN ALL FOUR PANELS: one small rectangular room. The camera stays at the exact center of the room, at the same eye height with the same lens in every panel, rotated exactly 90 degrees between panels. Same ceiling, same floor (grey non-skid deck), same lighting, same color, same photographic style (U.S. Navy public affairs photograph, available light, documentary, not a video game render).
FIXED INVENTORY: NORTH (back wall): the desk wall exactly as in the reference. EAST (starboard wall): a grey steel locker with a latch, and beside it a plain grey steel shelf holding a stack of bound paper logs, spines unreadable. SOUTH (door wall): a grey steel watertight door with rounded corners and a door wheel, closed, in the middle of the wall; a plain grey fire-extinguisher bracket beside it, empty. WEST (port wall): a second plain grey steel shelf with a few folders and a small stack of paper, nothing legible, and a bare section of bulkhead with scuffed paint.
LAYOUT: 2x2 grid separated by thin white lines, NORTH top-left, EAST top-right, SOUTH bottom-left, WEST bottom-right, each panel 16:9. EXACT TEXT: a small bold white sans-serif label in the top-left corner of each panel: "NORTH", "EAST", "SOUTH", "WEST". No other text, no logos, no watermark.
```
Crop each panel as its own reference material, as you did for the control room.

### Day walls (Seedream 5.0 Pro, 1k, one per wall, reference: that wall's cropped night panel)
```text
The same photograph as @material:<wall>: exact same camera position and framing, everything in the same place. CHANGE ONLY the lighting: it is morning. The ceiling fluorescent is fully on and cool white, the desk lamp is off, the light is even and flat with soft shadows, the room is brighter and slightly less warm. Documentary photograph style, realistic. No people, no text, no logos, no watermark.
```

### Inserts (Seedream 5.0 Pro, 1k, 16:9, reference: the north day and night panels)
```text
Close-up of the plain analog wall clock from @material:<north wall>, no numerals on the face, the second hand mid-sweep, shallow depth of field, same lighting as the reference. No text, no logos, no watermark.
```
```text
Close-up from above of the open bound watch log from @material:<north wall>, two ruled pages covered in dense blue-ink handwriting that is NOT legible, scribbled lines and cross-outs, a hand holding a black pen above the page, shallow depth of field, same lighting as the reference. No legible words, no numbers, no logos, no watermark.
```
Generate a laptop-and-reader close-up the same way if the Desk scene needs it, keeping the screen a plain flat colour for compositing.

## 4. Optional

- **Captain v3, plain cap** (reference 413570): "CHANGE ONLY the cap to a plain navy blue ball cap with gold oak-leaf embroidery along the visor and no lettering on the front." Skip it if you keep the lettered cap, and composite or accept what the sheet already shows.
- **DELGADO office variant** (reference 413420): "CHANGE ONLY his clothing: the same navy coverall with the sleeves rolled to the elbows, no headset, no cap." Make it only if Night Watch frames drift from the sheet.

## 5. Voices (Seed Audio, one pass each, per the notes' lessons)
```text
Setting: clean, dry, close-microphone dialogue recorded for a film, no background noise, no music, no room reverb.
Speaker KESSLER: [VOICE: even, a little weary, understated, neither hurried nor dramatic].
Speaker NARRATOR: [VOICE: calm, level, slightly dry, neither hurried nor dramatic].
```
Describe the voices in the prompt and do not clone from a reference, because cloning did not keep the voices before. Write the lines once the lead-up scenes are scripted; test "Periscope" and "SCOPE" on a short clip first.

## 6. Local assets (no credits)

- **Reference frame from C v3:** `ffmpeg -ss <time> -i <C v3 clip> -frames:v 1 frame.png`, then register it for the Captain's walk.
- **ID badge face and "CIV" tag:** a fictional design, made with Pillow, composited on the lanyard. Do not copy a real government ID's layout, seal or colour bands.
- **Terminal text and "Access denied":** monospace overlay, composited.

## 7. Order

1. KESSLER identity picks, choose one, then the sheet.
2. Office north master, then the 2x2 sheet, then day walls and inserts.
3. Voices.
4. Optional variants if drift appears.
5. Then the lead-up clips, using these as references.
