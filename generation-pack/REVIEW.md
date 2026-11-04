# Review: everything that would be sent to Renoise

**Nothing has been sent.** Placeholders like {{reyes-pick}} are replaced by the ID of an earlier result. Masters and sheets are task IDs; the two *-north-panel keys are material IDs of the cropped north panels.

## Review checklist

- REYES and MORGAN appearance descriptions use my defaults. Change anything you do not want.
- REYES wears navy blue flame-resistant coveralls with rank on the collar and tapes on the chest (a reviewer's at-sea choice). Her exact uniform is still worth a carrier Sailor's look; the prompts carry no bracketed notes.
- The Captain's cap is plain navy with a small gold crest and gold oak-leaf visor, no lettering. The boat name is composited later.
- Badges are shown turned backward (plain white reverse). The "CIV" tag and name are composited later.
- No real names, ship names, hull numbers or seals appear in any prompt.
- Voices are described and given sample lines, not cloned. Seed Audio took three speakers in one task before (task 413603).
- No prices: there is no price list. Your ledger put a 1k image at about 6 credits, a character sheet at about 23 and a 4k room sheet at about 28.

## 01. Captain HARLAN sheet v3 (cap, no hull number)
- Model: GPT Image 2.5 Sunburst, size 2k, aspect 16:9, count 1
- Needs: captain-v2-sheet, captain-identity
- Result recorded as: `captain-v3-sheet`

```text
USE: Photorealistic character turnaround reference sheet of one US Navy submarine Commanding Officer, for keeping his face identical across many video shots.
IDENTITY AND COSTUME REFERENCE: @task:{{captain-v2-sheet}} is the existing Captain sheet. Keep this exact man's face, hair, build, expression and every part of the uniform identical in every panel. @task:{{captain-identity}} is the original identity pick.
CHANGE ONLY the cap, to a plain navy blue ball cap with a small gold crest on the front and gold oak-leaf embroidery along the visor. No lettering of any kind on the cap, no boat name, no hull number. Everything else stays exactly as in the existing sheet: navy blue submarine coverall, name tape "HARLAN" and "U.S. NAVY" tape, gold officer dolphins above the left chest tape, silver oak leaf (Commander, O-5) on each collar point, tan web belt with a metal buckle.
LAYOUT: four equal vertical panels side by side on a seamless pure white studio background, separated by thin grey vertical lines. Panel 1: full body, front view, standing relaxed, arms at his sides. Panel 2: full body, exact side profile facing right. Panel 3: full body, three-quarter view. Panel 4: extreme straight-on close-up of his face, head, cap and collar, looking into the camera, neutral expression, rank insignia visible. Same man, same uniform, same proportions in all four panels. Soft even studio lighting, sharp focus, no shadows on the background.
EXACT TEXT: bold black sans-serif labels centered at the bottom of each panel: "FRONT", "SIDE", "3-QUARTER", "FACE DETAIL". No other text beyond the uniform tapes, no watermark.
```

## 02. REYES identity picks
- Model: Seedream 5.0 Pro, size 1k, aspect 3:4, count 3
- Needs: nothing
- Result recorded as: `reyes-pick`

```text
Photorealistic full-body photograph of a female US Navy enlisted Sailor, a woman in her mid-twenties, lean and weathered, dark hair pulled back in a regulation-neat bun, a tired but steady face with light shadows under the eyes, no makeup, natural and approachable, watchful; uniform lightly worn, boots scuffed. Navy blue flame-resistant coveralls zipped to the collar, rank insignia on the collar, a name tape on the right chest and a second tape on the left chest, black safety boots, no cap. Standing relaxed facing the camera straight on, arms at her sides, whole body from head to boots in frame, plain neutral mid-grey studio background, soft even lighting, one person only. No text, no labels, no captions, no watermark.
```

## 03. REYES four-panel sheet
- Model: GPT Image 2.5 Sunburst, size 2k, aspect 16:9, count 1
- Needs: reyes-pick
- Result recorded as: `reyes-sheet`

```text
USE: Photorealistic character turnaround reference sheet of one female US Navy enlisted Sailor, for keeping her face identical across many video shots.
IDENTITY REFERENCE: @task:{{reyes-pick}} is the identity reference. Keep this exact woman's face, skin tone, hair, build and expression identical in every panel.
CHANGE ONLY her clothing, to navy blue flame-resistant coveralls zipped to the collar: a sewn-on name tape over the right chest reading "REYES" and a sewn-on tape over the left chest reading "U.S. NAVY"; petty officer second class (E-5) rank insignia, an eagle above two chevrons; no cap; black safety boots; no warfare pins.
LAYOUT: four equal vertical panels side by side on a seamless pure white studio background, separated by thin grey vertical lines. Panel 1: full body, front view, standing relaxed, arms at her sides. Panel 2: full body, exact side profile facing right. Panel 3: full body, three-quarter view. Panel 4: extreme straight-on close-up of the face, head and collar, looking into the camera, neutral expression, rank insignia visible, hair in a regulation bun. Same woman, same uniform, same proportions in all four panels. Soft even studio lighting, sharp focus, no shadows on the background.
EXACT TEXT: bold black sans-serif labels centered at the bottom of each panel: "FRONT", "SIDE", "3-QUARTER", "FACE DETAIL". No other text beyond the uniform tapes, no watermark.
```

## 04. MORGAN identity picks
- Model: Seedream 5.0 Pro, size 1k, aspect 3:4, count 3
- Needs: nothing
- Result recorded as: `morgan-pick`

```text
Photorealistic full-body photograph of a government civilian software developer, mid-thirties, medium build, dark hair tied back, light olive skin, calm tired eyes, understated and dry. Business-casual office clothing: a plain light-blue collared button-up shirt, dark trousers, flat dark shoes, and a dark lanyard around their neck with a plain white badge holder, the badge turned backward so only its plain white reverse side shows. Standing relaxed facing the camera straight on, arms at their sides, whole body from head to shoes in frame, plain neutral mid-grey studio background, soft even lighting, one person only. No text, no labels, no captions, no watermark.
```

## 05. MORGAN four-panel sheet
- Model: GPT Image 2.5 Sunburst, size 2k, aspect 16:9, count 1
- Needs: morgan-pick
- Result recorded as: `morgan-sheet`

```text
USE: Photorealistic character turnaround reference sheet of one government civilian software developer, for keeping their face identical across many video shots.
IDENTITY REFERENCE: @task:{{morgan-pick}} is the identity reference. Keep this exact person's face, skin tone, hair, build and expression identical in every panel.
CHANGE ONLY their clothing, to: a plain light-blue collared button-up shirt, dark trousers, flat dark shoes, a dark lanyard around their neck with a plain white rectangular badge holder, the badge turned backward so only its plain white reverse side shows, no text, no insignia of any kind.
LAYOUT: four equal vertical panels side by side on a seamless pure white studio background, separated by thin grey vertical lines. Panel 1: full body, front view, standing relaxed, arms at their sides. Panel 2: full body, exact side profile facing right. Panel 3: full body, three-quarter view. Panel 4: extreme straight-on close-up of the face, head, collar and the lanyard, looking into the camera, neutral expression. Same person, same clothes, same proportions in all four panels. Soft even studio lighting, sharp focus, no shadows on the background.
EXACT TEXT: bold black sans-serif labels centered at the bottom of each panel: "FRONT", "SIDE", "3-QUARTER", "FACE DETAIL". No other text, no watermark.
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

## 08. Crop the carrier 2x2 sheet and register the north panel
- Model: manual (local), size n/a, aspect n/a, count 1
- Needs: carrier-sheet
- Result recorded as: `carrier-north-panel`

```text
No prompt. Download the carrier 2x2 sheet, run: python tools/crop-sheet.py <sheet.png> panels/carrier
Register panels/carrier/north.png (and east, south, west) in Renoise as materials, then record the NORTH panel's material ID:
  python make-prompts.py --set carrier-north-panel=<material ID>
```

## 09. Carrier: clock insert
- Model: Seedream 5.0 Pro, size 1k, aspect 16:9, count 1
- Needs: carrier-north-panel
- Result recorded as: `carrier-clock`
- Note: The clock hands will be random. Fix the time in post (or ignore: no numerals).

```text
Close-up of the plain analog wall clock from @material:{{carrier-north-panel}}, no numerals on the face, the second hand mid-sweep, shallow depth of field, same lighting as the reference. No text, no logos, no watermark.
```

## 10. Carrier: watch log insert
- Model: Seedream 5.0 Pro, size 1k, aspect 16:9, count 1
- Needs: carrier-north-panel
- Result recorded as: `carrier-log`

```text
Close-up from above of the open bound watch log from @material:{{carrier-north-panel}}, two ruled pages covered in dense blue-ink handwriting that is NOT legible, scribbled lines and cross-outs, a hand holding a black pen above the page, shallow depth of field, same lighting as the reference. No legible words, no numbers, no logos, no watermark.
```

## 11. Carrier: flight deck establishing shot  (optional)
- Model: Seedream 5.0 Pro, size 1k, aspect 16:9, count 1
- Needs: nothing
- Result recorded as: `carrier-flightdeck`

```text
Photorealistic documentary photograph of the flight deck of a large US Navy aircraft carrier at night, seen from a distance, dark silhouettes of parked aircraft, dim blue taxi lights and a few small amber lights along the deck edge, a faint haze, no people in focus, no readable text, no ship name, no hull number, no logos, no watermark. Generic, not a specific ship.
```

## 12. Shore office: north master
- Model: Seedream 5.0 Pro, size 1k, aspect 16:9, count 1
- Needs: nothing
- Result recorded as: `shore-north-master`

```text
Photorealistic documentary photograph of the back wall of a small plain US government office in the morning, shot from the center of the room at eye height with a 35mm lens, camera straight on. A beige laminate desk against a grey-beige wall. On the desk: a plain black laptop with the lid open and its screen a plain flat pale blue-grey, a small grey smart-card reader on a short cable beside it, a keyboard, a white ceramic coffee mug, a plain desk phone. A plain analog wall clock above the desk, no numerals, its hands near nine. A grey fabric office chair. Ceiling fluorescent panels in a drop ceiling, on, cool white, even light. No windows, no posters, no readable text anywhere, no logos. Documentary photograph style, available light, mild film grain, realistic, not a video game.
```

## 13. Shore office: 2x2 room sheet
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

## 14. Crop the shore 2x2 sheet and register the north panel
- Model: manual (local), size n/a, aspect n/a, count 1
- Needs: shore-sheet
- Result recorded as: `shore-north-panel`

```text
No prompt. Download the shore office 2x2 sheet, run: python tools/crop-sheet.py <sheet.png> panels/shore
Register panels/shore/north.png (and east, south, west) in Renoise as materials, then record the NORTH panel's material ID:
  python make-prompts.py --set shore-north-panel=<material ID>
```

## 15. Shore office: clock insert
- Model: Seedream 5.0 Pro, size 1k, aspect 16:9, count 1
- Needs: shore-north-panel
- Result recorded as: `shore-clock`
- Note: The clock hands will be random. Fix the time in post (or ignore: no numerals).

```text
Close-up of the plain analog wall clock from @material:{{shore-north-panel}}, no numerals on the face, the second hand mid-sweep, shallow depth of field, same lighting as the reference. No text, no logos, no watermark.
```

## 16. Shore office: laptop and reader insert  (optional)
- Model: Seedream 5.0 Pro, size 1k, aspect 16:9, count 1
- Needs: shore-north-panel
- Result recorded as: `shore-laptop`
- Note: Becomes required if the close zooms out of Periscope onto Morgan's laptop.

```text
Close-up of the plain black laptop and the small grey smart-card reader on the beige desk from @material:{{shore-north-panel}}, the laptop screen a plain flat pale blue-grey with nothing on it, shallow depth of field, same lighting as the reference. No text, no logos, no watermark.
```

## 17. Voices: REYES, MORGAN, NARRATOR (Seed Audio)
- Model: Seed Audio, size n/a, aspect n/a, count 1
- Needs: nothing
- Result recorded as: `voices-dialogue`
- Note: Seed Audio took three speakers in one task before (task 413603, the control-room dialogue). No tool names are in these lines, so no respelling is needed; your notes say respellings made the tool names worse.

```text
Setting: clean, dry, close-microphone dialogue recorded for a film, no background noise, no music, no room reverb.
Three speakers, one pass.
NARRATOR (calm, level, slightly dry, neither hurried nor dramatic): "Every watch, the same hunt through the same paper." ... "And the people who could fix it can't build on this machine." ... "Now imagine it's not a quiet night."
REYES (a woman's voice, low, tired and dry, steady, never raised): "Third time through this log tonight. Still can't find the open item."
MORGAN (even, a little weary, understated): "Python's not installed. Git's not installed. Nothing's installed."
Leave a short natural pause between lines. These are sample lines; edit them before you send.
```
