# Production bible: sets, cast, props, look, sound

Covers the lead-up scenes (Night Watch, The Desk) and ties them to the existing submarine scene. Defaults are marked **[DEFAULT]** where you have not decided yet; change them and everything below follows.

## 1. Sets (two to build, one already built)

### S1. The ship's office, 0200 (new, **one set serves both lead-up scenes**)
Night Watch and The Desk happen in the same room: a paper station on one side, a laptop station on the other. One set means one reference sheet, one lighting setup and no matching problems between scenes.

Fixed inventory (write it into every prompt, word for word):
- Small grey-painted steel-bulkhead office, low ceiling, a few exposed cable runs overhead, no windows.
- A grey steel desk against the back wall. On its **left**: a thick bound paper watch log, open, filled with handwriting that is not readable; a pen; a white coffee mug. On its **right**: a plain black laptop (no logo), and next to it a small grey smart-card reader on a short cable, with a card in it.
- A plain analog wall clock above the desk, no numerals, hands at about two o'clock.
- A desk lamp, switched on, warm. The ceiling fluorescent is on but low and cool.
- A grey steel chair with a worn seat, a stack of paper logs on a shelf at the left, a steel locker at the right.
- No posters, no readable text, no screens other than the laptop, no logos.

Four-wall sheet (north, east, south, west) generated **once** as a 2x2 grid, as you did for the control room. Crop each wall as its own reference. The laptop screen in the Desk shots is a flat colour for compositing (as with the control-room monitor).

Camera: locked off in every shot. Planned frames:
| Frame | Used for |
|---|---|
| Wide, front of the desk | Establishing both stations |
| Medium on the left (log, hand, pen) | Night Watch |
| Medium on the right (laptop, card reader) | The Desk |
| Insert: clock | Sound bridge into the gong |
| Insert: log page | Night Watch burden |

### S2. The control room (already built)
Existing north, east, south, west sheet (task 413508; materials 394090 to 394093) and red emergency walls (413519 to 413522). Keep as is. West wall locked shot for the Captain's walk.

### S3. The screen (not generated)
The Periscope page, from the overlay (`overlay/scope-screen-real.png`), composited onto the monitor in the zoom.

## 2. Cast

| Role | Who | Notes |
|---|---|---|
| **DELGADO** | Petty officer second class, the Sailor and the developer **[DEFAULT: one character across all scenes]** | Tall, wiry, short black hair. Existing four-panel sheet (task 413420). In the office: coverall sleeves rolled, no headset. In the control room: headset. Young tenor, fast. Rating wording is unverified: "radioman" may be out of date, and a modern equivalent may be Information Systems Technician. Have a submariner check. |
| **Captain HARLAN** | Commander, commanding officer | Existing sheet (task 413570). Decide the cap: plain navy cap with gold visor leaves and no lettering **[DEFAULT]**. |
| **Chief SULLIVAN** | Chief petty officer at the helm | Existing sheet (task 413550). Only appears in the Sullivan cut. |
| **Second helm sailor** | Seen from behind only | No sheet needed if he never turns. |
| **NARRATOR** | Off-screen voice | One calm voice for the lead-up, the tour and the demos so the whole piece sounds like one film. Describe it in the audio prompt; do not clone. |

Using DELGADO in every scene saves casting and gives the audience one person to follow from the paper log to the control room. If you'd rather use a different Desk developer, add a sheet for him (about as much as the Captain's sheet) and keep him out of the control room.

## 3. Props and continuity

| Prop | Where it appears | Rule |
|---|---|---|
| Paper watch log | Night Watch | Handwriting unreadable. Never show a legible word. |
| Pen, white mug | S1 | Same objects, same side of the desk each time. |
| Wall clock | S1, insert | No numerals. Its tick is the sound bridge. |
| Laptop and card reader | The Desk | No logos. The card reader suggests CAC without showing a real card. |
| Terminal text and "Access denied" | The Desk | **Not generated.** Overlaid in the edit in a monospace face, so it stays crisp and accurate. |
| Periscope page | Control-room monitor | Composited from the overlay still. |
| Challenge coin | Close card, optionally on the desk | Real art, composited. Never generated. |

## 4. Look

- **Style block, every prompt:** "Documentary realism, available light, natural color, mild film grain. Not a video game, not stylized. No subtitles, no captions, no logos, no watermark, no readable text on any screen, no music and no musical score, only room sound."
- **Colour logic:** the office is cool and neutral, with a warm lamp. The control room is dim and red. The hard cut to red is the visual jump. Do not grade the office warm.
- **Frame rate and shape:** 24 fps, 16:9. Generate at the highest resolution you can afford; the old clips were 480p.
- **Camera:** locked off. No dolly or handheld in any shot. The only movement is people.
- **Overlay type:** a monospace face for terminal text; the brass letterspaced face from the Periscope page for titles.

## 5. Sound

| Where | Sound |
|---|---|
| Night Watch | Room tone, ventilation, a slow clock tick, a pen on paper. |
| The Desk | Keyboard clatter, a short error chime for each failed command. |
| The hinge | The clock tick continues under "Now imagine it's not a quiet night," then becomes the **gong alarm** on the hard cut. |
| Control room | Real or licensed gong alarm (about 100 beats a minute for ten seconds), thump, ventilation, human-recorded "Man battle stations." |
| Close | Soft chime as the Periscope page opens, then a held low note. |

No music in any generated clip. Any music is added in the edit, once, over the whole film.

## 6. Voices

| Voice | Description for the audio prompt |
|---|---|
| NARRATOR | Calm, level, slightly dry, neither hurried nor dramatic. |
| DELGADO | Young tenor, fast, breathless in the control room; tired and flat in the office. |
| Captain HARLAN | Deep, calm, completely flat and deadpan. |
| Chief SULLIVAN | Very low, gravelly, tired and dry. |

One multi-speaker audio pass for the dialogue, as the notes recommend.

## 7. Generation order (cheapest first)

1. Office four-wall sheet (one generation).
2. DELGADO office wardrobe check from his existing sheet (re-use; no new sheet unless the look is wrong).
3. Night Watch and Desk clips from locked reference frames cropped from the sheet.
4. Clock and log inserts.
5. Control-room reshoot for the Captain's walk.
6. Dialogue and narration audio passes.
7. Composites: terminal overlays, laptop screen, monitor zoom, coin.

## 8. Open decisions

1. One character across all scenes, or a separate Desk developer? **[DEFAULT: one]**
2. Captain's cap: plain or lettered? **[DEFAULT: plain]**
3. Is the office aboard a ship or ashore? Written as a ship's office; change the bulkhead details if it is shore.
4. Rating wording for DELGADO (submariner review).
5. Whether the lead-up scenes keep a spoken Narrator or run silent with on-screen text only.
