# Full script: "Pull up Scope"

Everything in order: opening scene, tour, demo narration, close. Followed by the reshoot fixes for each known defect. Runtime: about 38 s opening, 35 s tour, then viewer-driven demos of 80 to 90 s each, then the close card.

Style rules for every generation prompt (from your own lessons in `intro/notes/open-questions.md`): describe pictures, not actions; give a reference frame for every shot; one multi-speaker audio pass; no music; tool names as separate clipped-in audio. "Edge Ops" has no pronunciation trap, but say it as two words, and put it on screen as an overlay.

## Part 1: Opening scene (about 38 s)

Cast: Captain HARLAN (deep, flat, deadpan), Chief SULLIVAN (very low, gravelly), DELGADO (young tenor, fast, shaky). Set: control room of the fictional USS FLEETHACKER (SSN 999).

| # | Time | Shot | Sound and dialogue | Source |
|---|---|---|---|---|
| 1 | 0:00 to 0:09 | North wall, calm, normal light. At about 3 s a thump, lights flicker out, red emergency lighting, dust. | Gong alarm. Ship's announcement: "Man battle stations." CAPTAIN (flat): "Report." | Clip A, cut at 9.04 s |
| 2 | 0:09 to 0:14 | Sullivan, medium front shot, right hand on the joystick, left hand on the console panel. | SULLIVAN (gravelly): "Helm's answering, Captain. Holding depth and course." | A3 (task 413731) |
| 3 | 0:14 to 0:19 | West wall, locked wide shot. DELGADO at the console, back to camera, turns toward the Captain. | DELGADO (fast, shaky): "Captain! We've lost the uplink. No internet!" | Reshoot B4a |
| 4 | 0:19 to 0:25 | Captain close-up. Total stillness for one second. | CAPTAIN (deadpan, a beat first): "Then we work with what's aboard. Raise Periscope." | Reshoot B4b |
| 5 | 0:25 to 0:31 | West wall, locked. DELGADO, back to camera, types fast. The centre monitor is a plain flat colour. | DELGADO (shaky, proud): "Aye, Captain! Periscope is up. SCOPE online!" (audio clipped in, lips not visible) | C v3 picture, or C4 at higher resolution |
| 6 | 0:31 to 0:38 | Zoom into the centre monitor until it fills the frame; the Edge Ops catalog is on screen. | Room tone. Keystroke, then a soft chime as the page opens. | Zoom composite |

Hold the red lighting and the alarm bed under shots 3 to 5, and cut on the keystroke.

### Revision: the Captain walks to DELGADO (replaces shots 3 to 5 above, and B4a, B4b and C4 in Part 6)

The Captain talks as he walks from his post beside the left screen to DELGADO's seat. Two chained clips, one locked camera, no cut across the join.

| # | Time | Shot | Sound and dialogue |
|---|---|---|---|
| 3 | 0:14 to 0:22 | West wall, locked wide. DELGADO at the console, back to camera. The Captain stands left, arms folded, still. DELGADO turns to him. After a beat the Captain unfolds his arms and starts walking toward the seat, back and three-quarter profile to camera, never turning his face to the lens. | DELGADO: "Captain! We've lost the uplink. No internet!" Then CAPTAIN, walking, deadpan: "Then we work with what's aboard." |
| 4 | 0:22 to 0:30 | Same locked frame, continuing from the last real frame of shot 3. The Captain arrives behind DELGADO's seat and rests a hand on its back. DELGADO's hands move over the keys. The centre monitor is a plain flat colour. | CAPTAIN, arriving: "Raise Periscope." DELGADO: "Aye, Captain! Periscope is up. SCOPE online!" |
| 5 | 0:30 to 0:38 | Zoom into the centre monitor until the Edge Ops catalog fills the frame. | Room tone, keystroke, soft chime. |

Why it works this way:
- **Back and three-quarter view, locked camera.** Locked wide shots are the only ones that have worked reliably so far. From behind, his lips are never visible, so the Captain's dialogue is clipped in from the clean audio pass, as with DELGADO. That avoids lip-sync trouble and the mispronounced names that burned you before.
- **Chained clips.** Generate shot 3, extract its last real frame, and use that frame as the first-frame reference for shot 4. Your notes say a real frame keeps the seat and angle better than a new still.
- **The walk path is a drawn line.** Describe it as a picture: start at the left screen, finish with his hand on the seat back, along the floor between the two. Do not write "he walks over."
- **Keep the plain-colour monitor and the zoom exactly as before.** Re-run `find_quad.py` on shot 4's frames.

Prompt for shot 3 (about 8 s). References: west wall red 413522, Captain sheet 413570, DELGADO sheet 413420, a real frame from C v3 as the first frame, DELGADO voice 394187.

> Locked-off shot, the camera does not move, framed exactly as the reference frame. DELGADO sits in the black seat with his back to the camera, typing fast. The Captain stands behind him on the left of the frame beside the left screen, arms folded, not overlapping the centre monitor. DELGADO turns his head to his right toward the Captain and says quickly in his voice: "Captain! We've lost the uplink. No internet!" The Captain stays still for one second, then unfolds his arms and walks slowly and steadily across the floor toward DELGADO's seat, seen from behind and in three-quarter profile, his face never turned to the camera. He is still walking when the shot ends. Red emergency lighting, a faint haze of dust, only room sound.

Prompt for shot 4 (about 8 s). Same references, with the real last frame of shot 3 as the first frame.

> Locked-off shot, the camera does not move, continuing exactly from the reference frame. The Captain finishes his walk and stops directly behind DELGADO's seat, resting his right hand on the back of the seat, seen from behind. DELGADO sits with his back to the camera, typing fast. The large centre monitor stays plain, flat and fully visible for the whole shot, glowing a plain pale blue-grey, and nothing passes in front of it. No other camera movement. Red emergency lighting, a faint haze of dust, only room sound.

Both prompts keep the shared STYLE and NEGATIVE blocks, with "no music and no musical score". The dialogue for both men goes in the separate audio pass and is clipped in over the picture.

If you want the Captain's face while he walks (a camera moving toward or alongside him), that is the ambitious version. Nothing in your notes shows a moving camera working in this room, and Seedance would have to keep the cap, the face and the room consistent while both move. I would only try it as an extra take after the locked version is safe, and only if Renoise accepts a last-frame input, which I could not check from here. A cheaper cutaway that still shows his face: a 2-second close-up of him mid-stride from the front, inserted during shot 3, with the dialogue clipped over it.

## Part 2: The tour (about 35 s, on the catalog page)

One calm voice. The page scrolls slowly so the audience sees how many tools there are, and each named tool gets a ring around its card and a caption.

> SCOPE is a home for tools. This is Periscope.
> Halyard tidies a backlog, with your approval.
> Eight Bells turns a watch log into a turnover.
> Semaphore builds dashboards from plain English.
> Fairlead puts every AI model behind one address.
> Windlass runs giant models on an ordinary PC.
> All of them hosted in SCOPE. That's five of sixteen. No admin. No install.

Every card also carries a one-line tagline under its name. Save the voice as `interactive/intro-vo.mp3` and set the cue times in `interactive/index.html`.

## Part 3: Demo narration (stern, clipped narrator, one voice for all 16)

Narration is generated per scene by Signal-Gun from each tool's DEMO spec; the drafts below follow the specs and are the two I recommend recording first. Scene ids in brackets are examples; use the ids Signal-Gun prints in `plan.json`.

### Eight Bells (about 80 s)

> [intro] A watch log is the memory of the watch. Eight Bells reads it.
> [import] Import a log. Before anything is stored, every entry is listed with its source line.
> [findings] Quality Assurance flags what a tired relief would miss: an unresolved condition, a gap, an entry that doesn't match. Each finding lists the lines behind it. Select one to see the evidence.
> [disposition] The reviewer records a decision, an explanation and a time. The original log never changes.
> [turnover] Then the turnover. Open items in plain language, each one pointing to the exact line that supports it. No AI service is involved.
> [close] Eight Bells. Evidence on every line. All data shown is synthetic.

### Halyard (about 90 s)

> [intro] Halyard is a product owner's assistant. It checks a backlog and proposes fixes. A person approves them.
> [seed] Seed the sandbox with one hundred synthetic work items and synchronize. About eighty are complete. Twenty carry one kind of gap.
> [review] The overview shows each level of the hierarchy and the items needing review. Every gap sits beside the path that fixes it.
> [proposals] Select a proposal and see the before and after. A metadata repair, or a proposed parent.
> [apply] Approve it, and apply to the sandbox. The change goes to the sandbox only, never the source. Then delete the run.
> [close] Halyard. Every change is a visible difference, and a person decides. All data shown is synthetic.

The other tools use `Signal-Gun/tools/generate.ps1` to draft theirs from `specs\<tool>.DEMO.md`. Windlass and Fairlead need a plain line that the demo is slow by design or uses a synthetic fixture; do not narrate speed or live failover you did not capture.

## Part 4: Close card (about 8 s)

Plain night-watch background, the real coin art composited and slowly turning to its face.

> Edge Ops. Any tool you want, built to one standard. Deploy in a click.
> Give us a sponsor and an ISSM, and we'll take it to authority to operate.

On screen: "Edge Ops" and "Sixteen tools. One double-click." Footer: "Team project. Not a US Navy product. Not endorsed by the Navy. Demos use synthetic data."

Do not say "we have authority to operate." The ATO assessment in `fleethacker-comms-data-crucible` says there is no authorization package and no sponsor yet.

## Part 5: Fixing the upscale findings at the reshoot

Every item in "Still rough in the current cut" (`intro/notes/open-questions.md`), plus what the upscale exposes, with the fix I would make while reshooting.

| Finding | Cause | Fix at reshoot |
|---|---|---|
| Soft, 480p picture, worse when zoomed | Clips generated at 480p; ffmpeg scaling adds no detail | Re-generate keepers at the highest resolution Renoise offers, from the same reference frames. Check price per clip first. Or test a Renoise upscale on a face. |
| Pulsing music bed in B v2 | Prompt lacked a "no music" line | Keep the shared NEGATIVE block ("no music and no musical score, only room sound"). Listen to each new clip alone before cutting. Build the room-tone bed from clean clip audio as before. |
| Captain's "Windlass and Fairlead" mispronounced | Generator cannot say the names | Gone. The new lines contain no tool names the generator can get wrong. |
| Alarm, blast and "Man battle stations" are the video model's versions | Generated sound | Replace with licensed or recorded sound effects (gong alarm about 100 beats a minute for ten seconds, per your notes) and a human-recorded announcement. Mix in the edit. Check licenses before using any library sound. |
| Second helm sailor has no character sheet | Never made | Make a sheet like the others (about 23 credits for the Captain's), or keep him out of frame or only seen from behind. |
| Cap embroidery text readable at some angles, cut off at others | Small text on a moving head | Use a plain navy cap with the gold visor leaves and no lettering, or hold angles where the text stays whole. Do not rely on the generator for small text. Same rule as the coin: composite real text in the edit. |
| Faint ghost of DELGADO's head over the screen at the hand-off | The monitor mask follows a flat colour, so a head crossing it bleeds through | Re-run `find_quad.py` on the new plates. Inspect frames across the hand-off. Prompt shot 5 so DELGADO stays clear of the monitor, and start the zoom on the first clean frame. Feather the mask edge. I did not open `zoom_composite.py`, so verify it there. |
| Hard-coded monitor coordinates (854x480 plate) | Numbers from the first plate | Recompute for the new resolution; update `zoom_composite.py`. |
| Unverified Navy terms, uniforms, cap, rank, control room | No submariner review | Have a submariner read this script and look at stills before you lock the cut. "Open Edge Ops" is fictional on purpose. |

## Part 6: Reshoot prompts

Keep the shared STYLE and NEGATIVE blocks from `intro/prompts/prompt-audit-part2.md`. Replace the PRONUNCIATION block with: "Say 'Edge Ops' as two words, EDGE then OPS." Use a real frame from the kept C v3 clip (the camera is locked) as the first-frame reference for B4a. B v3 failed because DELGADO swiveled the wrong way, and a real frame fixes that.

### B4a: DELGADO (about 5 s)
References: first frame from C v3 (extract with ffmpeg and register it), west wall red 413522, DELGADO sheet 413420, voice 394187.

Locked-off shot, the camera does not move, framed exactly as the reference. DELGADO sits in the black seat with his back to the camera, typing fast. The Captain stands behind him on the left of the frame beside the left screen, arms folded, not overlapping the centre monitor. DELGADO turns his head to his right, toward the Captain, and says quickly in his voice: "Captain! We've lost the uplink. No internet!" The Captain does not move. Red emergency lighting, a faint haze of dust, only room sound.

### B4b: Captain close-up (about 6 s)
References: Captain sheet 413570 (or the plain-cap version), voice 394289 (trimmed before any tool name).

Close-up of the Captain's face from the front, lit by screen glow and red lamps, deadpan and completely still. One full second of silence, then he says in his flat, calm voice: "Then we work with what's aboard. Raise Periscope." Plain navy cap, no lettering.

### C4: locked west shot (about 6 s), only if you re-render at higher resolution
Same prompt as C v3, with DELGADO's spoken line changed to "Aye, Captain! Periscope is up. SCOPE online!" The centre monitor stays plain flat pale blue-grey and fully visible. His back is to the camera, so his lips are never visible, and the final audio is clipped in from separate audio.

### Dialogue audio (one multi-speaker Seed Audio pass)
"Clean, dry, close-microphone dialogue recorded for a film, no background noise, no music, no room reverb." Lines: Captain "Report."; Sullivan "Helm's answering, Captain. Holding depth and course."; DELGADO "Captain! We've lost the uplink. No internet!"; Captain "Then we work with what's aboard. Raise Periscope."; DELGADO "Aye, Captain! Periscope is up. SCOPE online!" Describe each voice in the prompt rather than cloning (cloning lost the voices last time).

## Part 7: Order of work

1. Submariner reads Parts 1 and 5.
2. Second sailor sheet; plain-cap decision.
3. Extract the reference frame from C v3; generate B4a and B4b; check each clip's audio alone.
4. Dialogue audio pass; sound effects sourced.
5. Re-run `find_quad.py`; capture the Edge Ops catalog at the target size; rebuild the zoom; inspect the hand-off frames.
6. Record the tour voice and set cue times.
7. Render and import the two recommended demos with the AI voice.
8. Cut the film, composite the coin and close card, final listen with the sound off and on.
