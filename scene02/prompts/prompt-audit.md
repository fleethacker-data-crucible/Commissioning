# Prompt audit, part 1: casting, set and the first opening clips

Written partway through the work. The later fixes and the final clips are in `prompt-audit-part2.md`, which also has the current balance (about 6,097 credits, 1,273 spent).

Everything sent to Renoise in this session, with task IDs, models, settings and credits.
Starting balance 7,370. Balance after the three opening clips (A, C done, B rendering): 6,527. Total spent: 843.

## Spend ledger

| Step | Tasks | Credits | Used in the end? |
|---|---|---|---|
| Round 1 cast and set options (9 images) | 413361-413369 | 54 | Three picks used as identity or set references (413362 Captain, 413366 DELGADO, 413368 room); the rest unused |
| Character sheets (Sailor, Captain) + first E/S/W | 413420, 413421, 413422-413424 | 64 | DELGADO sheet used; Captain sheet replaced by v2; first E/S/W rejected (game look) |
| North tests on three models | 413462-413464 | 35 | 413462 picked as master |
| E/S/W from 413462 | 413483-413485 | 18 | Superseded by room sheet |
| Room sheet N/E/S/W (4k) | 413508 | 28 | Yes; cropped into materials 394090-394093 |
| Red emergency walls | 413519-413522 | 24 | Yes (413519 north, 413522 west) |
| Helm sheets | 413543, 413548, 413550 | 69 | Only 413550 (SULLIVAN) used; 413543 and 413548 were running when the brief changed |
| Captain sheet v2 | 413570 | 23 | Yes |
| Voice tests (TTS x6, Seed Audio) | 413592-413595, 413603-413605 | 32 | Only Seed Audio 413603 used |
| Opening clips A, B, C (480p) | 413642, 413643, 413644 | 496 | A and C reviewed; B rendering |

Registered but never generated from: the four DVIDS photos (materials 394042-394045) and two more (394047, 394048). They are close-ups of real named people. Not used.

## 1. Round 1: cast and set options (Seedream 5.0 Pro, 1k)

Characters were 3:4, rooms 16:9. Shared head and tail, variable middle.

Captain tail (all three): `... plain navy blue coverall zipped to the collar, plain dark navy ball cap with no text, insignia or logo, standing relaxed facing the camera straight on, arms at his sides, whole body from head to boots in frame, plain neutral mid-grey studio background, soft even lighting, one person only. No text, no labels, no captions, no watermark.`

- Captain A (413361): `Photorealistic full-body photograph of the Captain of a US Navy submarine, early fifties, weathered tanned face, short salt-and-pepper hair, strong jaw, light grey stubble, calm tired eyes, deep lines at the corners of his eyes, ...`
- Captain B (413362, picked): `... late forties, lean build, angular face with sharp cheekbones, close-cropped greying dark hair, clean-shaven, steady piercing eyes, ...`
- Captain C (413363): `... late fifties, broad-shouldered heavier build, short trimmed white beard, kind but commanding eyes, weathered face, ...`

Sailor head: `Photorealistic full-body photograph of a young US Navy submarine radioman, ...`; tail adds `plain navy blue coverall, black communications headset with a boom microphone resting around his neck, no text, insignia or logo on anything, standing relaxed ...`

- Sailor A (413364): `early twenties, slim build, short dark brown hair, clean-shaven, alert open face with light freckles across the nose`
- Sailor B (413365): `early twenties, medium build, buzz-cut blond hair, round friendly face, thin wire-frame glasses`
- Sailor C (413366, picked): `mid twenties, tall wiry build, short black hair, warm brown skin, clean-shaven, quick confident expression`

Room (413367-413369), common text: `Photorealistic photograph of the control room of a US Navy submarine, no people, camera at the periscope stand looking forward (north): the helm and dive stations with two empty seats and lit consoles. [STYLE]. Low red-and-amber night lighting with deep teal-black shadows, cramped low ceiling crowded with pipes, cable runs and valve wheels, gritty realistic look, slight film grain, shallow depth of field. No readable text or numbers on any screen, no logos, no watermark.`
- A: `1980s analog style with round dials, toggle switches and heavy painted steel panels, glowing dark screens.`
- B (413368): `Modern style with flat-panel displays and clean grey consoles, glowing dark screens.`
- C: `Worn mixed-era style, older steel panels with a few newer flat screens bolted in, taped cable bundles, scuffed paint, glowing dark screens.`

Problem: I called Room B "modern" and "photorealistic" without looking. It came out as a game-like Cold War room.

## 2. First character sheets (GPT Image 2.5 Sunburst, 2k, 16:9)

Sailor sheet 413420 (reference task 413366):
```text
USE: Photorealistic character turnaround reference sheet of one US Navy submarine sailor, for keeping his face identical across many video shots.
IDENTITY REFERENCE: @task:413366 is the identity reference. Keep this exact man's face, warm brown skin, short black hair, tall wiry build and quick confident expression identical in every panel.
CHANGE ONLY his clothing, to an accurate US Navy enlisted submarine working uniform: a plain navy blue submarine working coverall zipped to the collar; a sewn-on name tape over the right chest reading "DELGADO" and a sewn-on tape over the left chest reading "U.S. NAVY"; the silver enlisted Submarine Warfare Insignia (dolphins) above the left chest; petty officer second class (E-5) rank insignia on the collar: a single eagle above two chevrons; black communications headset with a boom microphone resting around his neck; no cap; black safety boots.
LAYOUT: four equal vertical panels side by side on a seamless pure white studio background, separated by thin grey vertical lines. Panel 1: full body, front view, standing relaxed, arms at his sides. Panel 2: full body, exact side profile facing right. Panel 3: full body, three-quarter view. Panel 4: extreme straight-on close-up of his face, head and collar, looking into the camera, neutral expression, rank insignia and collar visible. Same man, same uniform, same proportions in all four panels. Soft even studio lighting, sharp focus, no shadows on the background.
EXACT TEXT: bold black sans-serif labels centered at the bottom of each panel: "FRONT", "SIDE", "3-QUARTER", "FACE DETAIL". No other text beyond the uniform tapes, no watermark, no player controls.
```

Captain sheet v1 (413421) used the same structure with reference 413362, name "HARLAN", gold officer dolphins, silver oak leaf collar devices, plain dark navy cap with no text. Replaced by v2 (section 7).

Invented by me, not verified: the names DELGADO, HARLAN; the E-5 rating insignia placement; the claim that dolphins go above the left chest tape (supported by a surface-ship photo you sent, not by a submarine source).

## 3. Room tests and set build

North test, same prompt on Seedream (413462), GPT Image (413463), Nano Banana Pro (413464), 1k 16:9:
```text
Documentary photograph of the control room (command center) of a US Navy Virginia-class nuclear attack submarine, wide shot looking forward from the middle of the room, no people. A compact, tidy room with a low overhead of white-painted cable trays and ducting, light grey consoles with large flat-panel displays showing abstract green, white and blue blocks of tactical data with no legible text, two black high-back ship control seats facing the displays with an aircraft-style joystick controller between them. Dim ambient lighting: the room is mostly lit by the glow of the screens plus a few fluorescent strips overhead, neutral natural colors, mild film grain. Shot like a U.S. Navy public affairs photograph on a DSLR, available light, 24mm lens, realistic scale. Not a video game render, not a cinematic poster. No periscope pole, no ship's wheels, no hand-turned valve wheels, no CRT monitors, no logos, no watermark.
```

Room sheet 413508 (Sunburst, 4k, 16:9, reference 413462):
```text
USE: One photorealistic reference sheet of a single Virginia-class US Navy submarine control room, shown as four views in a 2x2 grid, for keeping the room identical across many video shots. No people.
REFERENCE: @task:413462 is the North view. The NORTH panel must match it exactly: same two black high-back seats side by side with a pedestal joystick between them, same wall of flat-panel displays, same grey consoles, same white cable trays, ducting and fluorescent strips, same dim screen-lit lighting.
SAME ROOM IN ALL FOUR PANELS: one rectangular room. The camera stays at the exact center of the room, at the same eye height with the same lens in every panel, rotated exactly 90 degrees between panels. Same ceiling, same floor, same lighting, same color, same photographic style (U.S. Navy public affairs photograph, available light, documentary, not a video game render). Displays are the same model everywhere: black bezel, pale white screen with green data tiles and no legible text.
FIXED INVENTORY: NORTH (forward wall): the ship-control station exactly as in the reference. EAST (starboard wall): the right-hand console bank of the north view continues along this wall: one continuous light grey console desk with a row of four equal flat-panel displays, and one very large flat wall display above it; no seats; the two north seats are visible at the far edge of the frame. SOUTH (aft wall): a round-cornered watertight hatch with a vertical ladder in the middle of the wall; a chart table with a softly lit work surface in the east corner (on the left as seen from the camera); a console desk with two flat-panel displays in the west corner (on the right as seen from the camera). WEST (port wall): the left-hand console bank of the north view continues along this wall: a grey console desk with one black high-back seat, one large flat monitor in the center with a smaller flat-panel display on each side of it, a keyboard and a headset resting on the desk; the large monitor faces the room straight-on, unobstructed, its screen a plain pale blue-grey with no text.
LAYOUT: 2x2 grid separated by thin white lines, NORTH top-left, EAST top-right, SOUTH bottom-left, WEST bottom-right, each panel 16:9. EXACT TEXT: a small bold white sans-serif label in the top-left corner of each panel: "NORTH", "EAST", "SOUTH", "WEST". No other text, no logos, no watermark.
```
The sheet's North panel is a redrawn version, not identical to 413462. Wall layout is my reading of the image, not verified against a real boat.

Red emergency walls (Seedream, 1k, one reference each: 394090 N, 394091 E, 394092 S, 394093 W; tasks 413519-413522). Template, with per-wall nouns swapped:
```text
The same photograph as @material:394090: exact same camera position and framing, same two black seats, same joystick pedestal, same wall of flat-panel displays and screen count, same consoles, same pipes, cable trays and equipment, everything in the same place. CHANGE ONLY the lighting: the white fluorescent strips are off and the room is in dim emergency lighting, deep red-orange emergency lamps casting red light and long hard shadows, the screens still glowing but dimmer and tinted by the red light, a faint haze of dust in the air. Documentary photograph style, realistic. No people, no text, no logos, no watermark.
```

## 4. Helm sheets

- 413543: E-4 petty officer third class, "BRENNAN", sandy-blond, early thirties. Unused.
- 413548: chief petty officer "BRENNAN", early forties, clean-shaven. Unused (running when brief changed).
- 413550: SULLIVAN. Text:
```text
USE: Photorealistic character turnaround reference sheet of one US Navy submarine chief petty officer who supervises the ship-control station at the helm, for keeping his face identical across many video shots.
CHARACTER: a salty, hard-bitten chief in his early forties who looks closer to fifty-five from years at sea and years of smoking: stocky, broad-shouldered, weathered tanned skin with deep lines around the eyes and mouth, tired squinting eyes, short sandy hair going grey at the temples, and a thick, slightly stained grey-flecked mustache trimmed to regulation, otherwise clean-shaven. A calm, experienced, no-nonsense, slightly sardonic expression. He must look clearly different from a lean, greying officer with a narrow angular face and from a tall, wiry young man with black hair.
CLOTHING, an accurate US Navy enlisted submarine working uniform: a plain navy blue submarine working coverall zipped to the collar; a sewn-on name tape over the right chest reading "SULLIVAN" and a sewn-on tape over the left chest reading "U.S. NAVY"; the silver enlisted Submarine Warfare Insignia (dolphins) above the left chest; chief petty officer (E-7) collar devices: a gold fouled anchor with silver letters USN on each collar point; no cap, no headset; black safety boots.
LAYOUT: [same four-panel layout and EXACT TEXT block as the sailor sheet]
```

## 5. Captain sheet v2 (413570, reference 413362)
Same structure as section 2, with: gold officer dolphins "embroidered above the left chest tape", silver oak leaf (Commander, O-5) on each collar point, tan web belt with metal buckle, and `a navy blue ball cap with gold embroidery: the boat name "USS FLEETHACKER" and the hull number "SSN 999" with a small crest between them on the front, and gold oak-leaf embroidery along the visor`.
Invented: the boat name and hull number. Unverified: the Commander rank for a submarine commanding officer (sourced only to a general site), cap colors for submarine crews.

## 6. Voices

TTS (Gemini 3.8 Flash TTS, preset voices, text only):
- 413592 Schedar, 413593 Alnilam, 413604 Charon, 413605 Orus: `Then we get our inference local. Rig for ultra-quiet. Windlass and Fairlead. Bring them online now.`
- 413594 Algenib: `Helm's answering, Captain. Holding depth and course.`
- 413595 Fenrir: `Captain! We've lost the uplink. No internet!`

Seed Audio 413603 (the voices you approved):
```text
Setting: clean, dry, close-microphone dialogue recorded for a film, no background noise, no music, no room reverb.
Captain (male, early fifties, deep resonant baritone, slow and calm, completely flat deadpan, no emotion): "Report."
Sullivan (male, early forties but sounds fifty-five, very low gravelly bass, heavy smoker's rasp, tired, dry): "Helm's answering, Captain. Holding depth and course."
Delgado (male, mid twenties, young tenor, fast, breathless, high with fear and adrenaline): "Captain! We've lost the uplink. No internet!"
Captain (same deep, flat baritone): "Then we get our inference local. Rig for ultra-quiet. Windlass and Fairlead. Bring them online now."
Delgado (same, shaky and relieved): "Windlass online! Fairlead online!"
```
Split by me into materials 394196 (Report, padded), 394197 (Sullivan), 394187 (Delgado uplink), 394188 (Captain order), 394189 (Delgado online; flagged by the check for a stray sound). My first cut put the start of Sullivan's line in the "Report." clip; re-cut fixed it.

## 7. Opening clips (Seedance 2.5, 480p, 16:9, audio on)

Style block used in all three: `STYLE: Documentary realism inside a US Navy Virginia-class submarine control room, ... Not a video game, not stylized. NEGATIVE: no subtitles, no captions, no logos, no watermark, no readable text on any screen.`

Clip A, 413642, 12s, 192 credits. References: Captain sheet 413570, SULLIVAN sheet 413550, North white 394090, North red 413519, voices 394196, 394197.
- Shot 1 (0-4s): wide north view, white dim light, SULLIVAN and a younger sailor in the helm seats from behind, the Captain standing behind them, thump at 3s, lights flicker to black.
- Shot 2 (4-9s): red emergency light, dust, gong alarm, "Man battle stations", the Captain: "Report."
- Shot 3 (9-12s): medium shot of SULLIVAN from the front, "hands on the controls": **this wording is the cause of the held-air problem.** The prompt never gave the model a view of the console or joystick from the front.

Clip B, 413643, 13s, 208 credits (rendering). References: West red 413522, Captain 413570, DELGADO 413420, voices 394187, 394188. Shot 1 locked west wall, DELGADO: "Captain! We've lost the uplink. No internet!"; shot 2 Captain close-up: "Then we get our inference local. Rig for ultra-quiet. Windlass and Fairlead. Bring them online now."

Clip C, 413644, 6s, 96 credits. References: West red 413522, DELGADO 413420, Captain 413570, voice 394187. Locked west wall, DELGADO: "Windlass online! Fairlead online!" The check heard "Fairline." I wrote "Fairlead" in the prompt; the model's pronunciation is the problem.

## Items I'd audit hardest
1. Invented content: HARLAN, DELGADO, SULLIVAN, BRENNAN, USS FLEETHACKER SSN 999.
2. Navy accuracy: ranks, insignia, uniform layout, cap style. Sources were thin and mostly vendor or forum pages; one surface-ship photo you sent.
3. Dialogue terms: "Man battle stations" (supported by forum and reference pages), "rig for ultra-quiet" (unconfirmed by my searches), "Helm's answering" (not confirmed).
4. "Photorealistic" claims in early prompts that I made without looking at the result.
5. Prompts that tell the model what to do but give it no picture: "hands on the controls," reverse-angle shots with no reference.
6. Credits wasted when briefs changed mid-run.
