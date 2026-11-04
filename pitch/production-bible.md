# Production bible: sets, cast, props, look, sound

Covers the lead-up scenes (Night Watch on a carrier, The Desk ashore) and ties them to the existing submarine scene. Defaults are marked **[DEFAULT]**; change them and everything below follows. Items marked [unverified] need a Sailor or a uniform-regulation check before you lock them. I did not look up Navy regulations in this session.

## 1. Sets

Three sets, three different places, so the film travels: a carrier at night, a shore office in the morning, a submarine under attack.

### S1. Night Watch: a workcenter office aboard a carrier (new, night only)
Fixed inventory (write it into every prompt, word for word):
- Small haze-grey painted steel workcenter office, low ceiling, thick bundled cable runs and unlabeled painted pipes overhead, no windows.
- A grey steel desk **bolted to the deck**, with a raised lip around its edge. On its **left**: a thick bound paper watch log, open, its pages covered in handwriting that is not readable; a black pen; a lidded steel mug [unverified detail]. A clipboard hung on a hook above the desk.
- A plain analog wall clock, no numerals, hands near two o'clock.
- A grey swivel chair secured to the deck, a heavy grey watertight door with a dogging wheel in one wall, scuffed grey non-skid deck.
- Dim, cool-white night lighting and a single desk lamp, warm. **Not red**, so the cut to the submarine's red emergency light stays the visual jump. (Real carrier spaces do use red night lighting in places [unverified]; here it is a style choice.)
- No windows, no posters, no readable text, no logos.

How the audience knows it is a carrier without a hull shot:
- The Sailor's cap and tapes carry a **fictional** carrier name and hull number, composited in the edit (suggested: "USS CRUCIBLE", "CVN 99"; there is no real CVN 99). Avoid real ship names and numbers.
- Sound: a distant deep thump, a faint rumble, now and then a muffled jet whine through the structure.
- **Optional establishing shot** (one generation): the flight deck at night, aircraft silhouettes, dim blue lights, seen from a distance. Keep it generic; do not reproduce a real ship's island.

### S2. The Desk: a shore office, morning (new, day only)
Fixed inventory:
- Small plain government office, grey-beige walls, ceiling fluorescent panels on and cool white, drop ceiling, no windows, a grey carpet or tile floor.
- A beige laminate desk against the back wall. On it: a plain black laptop (lid open, screen a flat pale blue-grey), a small grey smart-card reader on a short cable beside it, a keyboard, a white coffee mug, a desk phone. A plain analog wall clock above the desk, no numerals, hands near nine.
- A grey fabric office chair, a filing cabinet, a bare cork board with nothing pinned to it, a closed door.
- No posters, no readable text, no logos.

Both rooms hold a plain analog clock, so the clock's tick can carry across the cuts.

### S3. The control room (already built)
Existing north, east, south, west sheet (task 413508; materials 394090 to 394093) and red emergency walls (413519 to 413522). West wall locked shot for the Captain's walk.

### S4. The screen (not generated)
The Periscope page, from the overlay (`overlay/scope-screen-real.png`), composited onto the monitor in the zoom.

Camera: locked off in every shot. Frames per set: a wide, a medium on each station, and the inserts.

## 2. Cast

Different people in each scene. Four speaking characters plus an off-screen narrator.

| Role | Scene | Who | Notes |
|---|---|---|---|
| **REYES** | Night Watch (carrier) | Petty officer second class, enlisted Sailor on watch | New. **[DEFAULT appearance: a crusty female second class in her mid-twenties: lean and weathered, dark hair in a regulation-neat bun, a hard tired face with deep eye bags and a squint, no makeup, uniform faded and worn, boots scuffed. Tired but watchful.]** Needs identity picks and a four-panel sheet. Uniform: see section 2a. Voice: a woman's voice, low and tired, rough and dry, a little crusty, never raised. |
| **MORGAN, the CIV** | The Desk (shore) | Government civilian software developer. **Civilians are addressed by first name**, so the dialogue and the badge use "Morgan" (first name), where Sailors are addressed by rank or last name. First name is a placeholder; change it. | New. **[DEFAULT: mid-thirties, medium build, dark hair tied back, calm, dry.]** Needs identity picks and a four-panel sheet. Business-casual, lanyard with a fictional ID badge. Voice: even, a little weary. |
| **DELGADO** | Control room | Petty officer second class, radioman | Existing sheet 413420. Control room only now. Rating wording unverified; a modern equivalent may be Information Systems Technician. |
| **Captain HARLAN** | Control room | Commander | Existing sheet 413570. **Cap decision: keep the boat name, the crest and the gold visor leaves; drop the hull number "SSN 999".** Needs a v3 sheet (section 2 of `asset-sheets-needed.md`). |
| **Chief SULLIVAN** | Control room | Chief petty officer | Existing sheet 413550. Only in the Sullivan cut. |
| **Second helm sailor** | Control room | Seen from behind only | No sheet needed. |
| **NARRATOR** | Off-screen | Calm, level, slightly dry | One voice for the lead-up, the tour and the demos. |

## 2a. Uniform, badge and insignia details

**Control room (DELGADO, Captain, Sullivan):** from your existing sheets and notes: navy-blue submarine coverall; name tape right chest and "U.S. NAVY" tape left chest; silver (enlisted) or gold (officer) dolphins above the left chest; collar rank devices (E-5 eagle with two chevrons; Commander silver oak leaf; chief gold anchor with silver USN) [all unverified]; the Captain's navy cap with gold visor leaves, boat name and crest, no hull number.

**REYES, carrier:** a shipboard working uniform. Which one a carrier watchstander would wear (blue coverall, the green digital working uniform, or something else) is [unverified], so have a carrier Sailor confirm before generating. Whatever it is (the women's version of the uniform and the hair rules need the same check): name tape, "U.S. NAVY" tape, rank insignia for an E-5, and a ball cap with the fictional carrier name composited. A carrier Sailor may carry a warfare or qualification pin; leave it off rather than invent one.

**MORGAN:** no insignia. A dark lanyard and a white badge holder with a **blank face**. The photo and a small tag reading "CIV" are composited, as a **fictional** badge. Do not copy a real government ID's layout, seal or colour bands.

**Rule for all small text and insignia:** generate the person with the tape or patch area blank, and composite the real text in the edit.

## 3. Props and continuity

| Prop | Where | Rule |
|---|---|---|
| Paper watch log | S1 | Handwriting unreadable; same side of the desk. |
| Lidded mug, pen, clipboard | S1 | Same objects, same places every shot. |
| Laptop, reader, keyboard, phone, mug | S2 | No logos; screen a flat colour for compositing. |
| Wall clock | S1, S2 | No numerals. Its tick is the sound bridge. |
| Fictional carrier name and hull number | Cap and tape | Composited. |
| ID badge and "CIV" tag | S2 | Fictional, composited. |
| Terminal text, "Access denied" | S2 | **Not generated.** Overlaid in a monospace face. |
| Periscope page | Control-room monitor | Composited from the overlay still. |
| Challenge coin | Close card | Real art, composited. |

## 4. Look

- **Style block, every prompt:** "Documentary realism, available light, natural color, mild film grain. Not a video game, not stylized. No subtitles, no captions, no logos, no watermark, no readable text on any screen, no music and no musical score, only room sound."
- **Colour logic:** the carrier is dim and cool; the shore office is flat cool-white; the control room is dim and red. The red jump is the one that should hit hardest.
- **Frame rate and shape:** 24 fps, 16:9. Generate at the highest resolution you can afford; the old clips were 480p.
- **Camera:** locked off. The only movement is people.
- **Overlay type:** monospace for terminal text; the brass letterspaced face from the Periscope page for titles.

## 5. Sound

| Where | Sound |
|---|---|
| Night Watch (carrier) | Room tone, ventilation, deep rumble, a slow clock tick, pen on paper, a distant muffled jet whine or thump. |
| The Desk | Keyboard clatter, a short error chime for each failed command, fluorescent hum. |
| The hinge | The wall clock's tick is the bridge. The Desk ends on the clock insert while the tick speeds from about 60 beats a minute to about 100 over two seconds, matching the gong alarm's pace in your notes. **Hard cut to the control room, calm and in normal light, with the tick still at 100.** About 1.5 seconds later the thump hits, the lights flicker to red, and the gong takes over the same beat. Trim clip A so it starts about 1.5 s before its thump (the thump is at about 3 s) and keep the normal-to-red flip visible. Add a slightly metallic tone near the end of the ramp so the gong reads as the same sound turning dangerous. |
| Control room | Real or licensed gong alarm (about 100 beats a minute for ten seconds), thump, ventilation, human-recorded "Man battle stations." |
| Close | Soft chime as the Periscope page opens, then a held low note. |

No music in any generated clip. Any music is added once, in the edit, over the whole film.

## 6. Voices

| Voice | Description for the audio prompt |
|---|---|
| NARRATOR | Calm, level, slightly dry, neither hurried nor dramatic. |
| REYES | A woman's voice: low and tired, rough and dry, a little crusty; watchful, never raised. |
| MORGAN | Even, a little weary, understated. |
| DELGADO | Young tenor, fast, breathless in the control room. |
| Captain HARLAN | Deep, calm, completely flat and deadpan. |
| Chief SULLIVAN | Very low, gravelly, tired and dry. |

One multi-speaker audio pass for the dialogue, as the notes recommend.

## 7. Generation order (cheapest first)

1. Captain v3 sheet (cap change only).
2. REYES identity picks, then sheet. MORGAN identity picks, then sheet.
3. Carrier workcenter north master, then 2x2 room sheet, then inserts. Shore office north master, then 2x2 room sheet, then inserts.
4. Voices.
5. Control-room reshoot for the Captain's walk.
6. Composites: carrier name, badge, terminal overlays, laptop screen, monitor zoom, coin.

## 8. Open decisions

1. REYES and MORGAN: age, build, look.
2. The carrier uniform for REYES (needs a carrier Sailor's check).
3. The fictional carrier name and hull number ("USS CRUCIBLE", "CVN 99" is a placeholder).
4. Whether to pay for the optional flight-deck establishing shot.
5. Rating wording for DELGADO and every insignia marked [unverified].
6. Whether the lead-up scenes keep a spoken Narrator or run silent with on-screen text only.
