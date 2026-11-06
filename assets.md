# Assets

Renoise task and material IDs. A task ID is written `task:N` in prompts, a library material `material:N`. These live in the Renoise account that made them. Balance at the last check: about 6,097 credits, after 1,273 spent.

## Cast

| What | ID | Notes |
|---|---|---|
| DELGADO identity pick | task 413366 | Full-body, front |
| **DELGADO sheet (used)** | **task 413420** | Four panels: front, side, 3/4, face |
| Captain identity pick | task 413362 | Full-body, front |
| Captain sheet v1 | task 413421 | Plain navy cap. Replaced. |
| **Captain sheet v2 (used)** | **task 413570** | Cap with boat name, hull number, gold visor leaves, tan belt |
| **SULLIVAN sheet (used)** | **task 413550** | Chief, mustache |
| Helm sheets, unused | tasks 413543, 413548 | Were running when the brief changed |
| Other round-1 options, unused | tasks 413361, 413363, 413364, 413365 | |

## Set

| What | ID | Notes |
|---|---|---|
| North master | task 413462 | Seedream test, picked over two other models |
| **Room sheet, all four walls** | **task 413508** | 4k 2x2 grid |
| **Walls, labels cropped, white light** | **materials 394090 north, 394091 east, 394092 south, 394093 west** | Cut from the room sheet |
| **Red emergency walls** | **tasks 413519 north, 413520 east, 413521 south, 413522 west** | |
| Old set, rejected (game look) | tasks 413367 to 413369, 413422 to 413424, 413483 to 413485 | |

## Voices

| What | ID | Notes |
|---|---|---|
| **Approved dialogue, one file** | **task 413603** | Seed Audio, all five lines |
| Captain "Report." | material 394196 | Padded to 1.9 s |
| SULLIVAN line | material 394197 | |
| DELGADO "uplink" line | material 394187 | Voice reference for DELGADO |
| Captain order | material 394188 | Contains the mispronounced tool names |
| Captain order, trimmed (before the tool names) | material 394289 | Voice reference for the Captain |
| DELGADO "online" line | material 394189 | Clipped into the final cut |
| First cuts of the Report and SULLIVAN lines, wrong | materials 394185, 394186 | Ignore |
| Preset text-to-speech tests, rejected | tasks 413592 to 413595, 413604, 413605 | Sounded like anime characters |
| Voice-clone redo with "Fehr-leed", rejected | tasks 413709, 413710 | Voices changed |

## Clips

| Clip | ID | Used? |
|---|---|---|
| A, blast, alarm, "Report," helm | task 413642 | Yes, up to 9.04 s |
| A3, SULLIVAN gripping the joystick | task 413731 | Yes. Started from frame material 394295 (clip A at 9.8 s) |
| B v2, uplink lost and Captain's order | task 413643 | Yes |
| B v3 | task 413729 | No. DELGADO turns the wrong way, and the Captain says "Win, lose, and fair lead" |
| C v3, locked West shot | task 413730 | Yes, with DELGADO's line replaced |
| C v2 | task 413644 | No. Said "Fairline" |
| SULLIVAN helm still | task 413711 | No. Wrong seat and angle |
| SULLIVAN edit-mode source | material 394293 | Priced at 240 credits, never run |

## Other

| What | Where |
|---|---|
| Fairlead placeholder screenshot | `Fairlead/docs/screenshots/overview-night-watch.png` |
| Windlass placeholder screenshot | `Windlass/docs/screenshots/console-dark.png` |
| Reference photos registered and not used | materials 394042 to 394045, 394047, 394048 (close-ups of real, named sailors) |

## Scene 2 and 3: carrier workcenter and shore cubicle (added 2026-11-04)

### Cast

| What | ID | Notes |
|---|---|---|
| **Captain sheet v3 (plain cap, no boat name)** | **task 443743** | Replaces v2 for any re-render; cap text to be composited |
| **REYES identity pick (used)** | **task 443744** | Blank tapes, clear eyes |
| REYES picks, unused | tasks 443745, 443746 | 445 red eyes; 446 gibberish tape |
| **REYES sheet (used)** | **task 443775** | Four panels, E-5 collar devices, tapes read correctly |
| MORGAN v1 picks, rejected | tasks 443747, 443748, 443749 | Brief changed: male, ponytail, glasses, polo |
| **MORGAN v2 identity pick (used)** | **task 443777** | Ponytail, glasses, green polo |
| MORGAN v2 picks, unused | tasks 443778, 443779 | |
| **MORGAN sheet (used)** | **task 443787** | Four panels |

### Sets

| What | ID | Notes |
|---|---|---|
| **Carrier workcenter north master** | **task 443750** | Clock reads about 2:50, fix in post; clipboard has a faint printed form |
| **Carrier workcenter room sheet, 2x2, 4k** | **task 443774** | N desk, E locker and log shelf, S watertight door, W shelf and gauge |
| Carrier flight deck, establishing | task 443752 | Generic, no markings |
| Shore office v1, rejected | task 443751 | Separate desk, laptop only; not a standard cubicle |
| **Shore cubicle north master v2** | **task 443776** | Integrated panels, one 32-inch widescreen monitor (plain screen, zoom-out plate), docked laptop, card reader, clock near nine |
| **Shore cubicle room sheet, 2x2, 4k** | **task 443786** | N work wall, E L-return, S aisle, W bare panel |
| Carrier workcenter master and sheet, superseded | tasks 443750, 443774 | Replaced: the watch moves to a real station (hangar bay conflag) |
| **Hangar bay conflag station north master** | **task 443794** | Red-lit booth, log, sound-powered phone, clock near two, jets through the window |
| **Hangar bay at night, establishing** | **task 443795** | Elevator door open to the sea at the far end |
| Shore cubicle three-view sheet v1 | task 443801 | Chair grew posts from the armrests; replaced |
| **Shore cubicle three-view sheet v2 (used)** | **task 443806** | N, NE, NW obliques, chair fixed; this format replaces the 2x2 for video angles |
| **Cubicle panels, labels cropped** | **materials 426375 north, 426376 north-east, 426377 north-west** | Cut from 443806 with `edit/crop_threeview.py` |
| **Conflag station three-view sheet** | **task 443818** | N, NE, NW obliques; log, phone, clock, stool hold position |
| **Conflag panels, labels cropped** | **materials 426378 north, 426379 north-east, 426380 north-west** | Cut from 443818 with `edit/crop_threeview.py` |
| **Conflag 16:9 plate for shot 2.3** | **material 426422** | Rows 700 to 1414 of the north-east panel |

### Where REYES stands watch

Hangar bay conflagration station, 0200, bound watch log on paper, sound-powered phone, window onto the hangar bay. The flight deck and hangar bay stills are establishing shots. Not verified by a carrier Sailor.

### Voice samples, scene 2 and 3 (Seed Audio, 20 credits each)

Lines: REYES "Third time through this log tonight. Still can't find the open item." / "Conflag two, all secure." MORGAN "Python's not installed. Git's not installed. Nothing's installed." / "Ticket's been open since March."

| Take | ID | Machine check |
|---|---|---|
| **REYES A, SoCal Chicana, low and dry (PICKED)** | **task 443823** | 11.7 s. Heavy sigh at the top, slight room reverb. Check heard "Comm flag" instead of "Conflag". |
| REYES B, Nuyorican, clipped Navy | task 443824 | 9.9 s. Clean and dry, words correct, tired then crisp on the report. |
| REYES C, Tejana, husky deadpan | task 443825 | 8.7 s. Words correct, but the model added a radio filter and static hiss. |
| **MORGAN A, even weary baritone (PICKED)** | **task 443826** | 11.2 s. Words correct, 3.5 s dead pause before the last line, trim in the edit. |
| MORGAN B, nasal deadpan tenor | task 443827 | 9.5 s. Clean, words correct, most comic timing. |
| MORGAN C, soft mumble | task 443828 | 8.3 s. Clean, "nothing's installed" nearly whispered. |

The check cannot judge accent; the ear decides whether each REYES take reads as Latina.

**Locked voice descriptions** (reuse word for word in every later Seed Audio or video prompt; describing the voice worked better than cloning in the opening):
- REYES: "a low, dry, tired voice, steady and quiet, never raised. US-born Mexican-American from Southern California, natural light Chicana inflection in an otherwise American accent, not exaggerated."
- MORGAN: "an even, slightly weary baritone, understated and dry, neither hurried nor dramatic, General American accent."

Edit decision: use only REYES's first line from 443823 ("Third time through this log tonight. Still can't find the open item."). Cut "Conflag two, all secure": real Navy jargon, but the audience won't know it and the take may say "Comm flag". Keep MORGAN's "Ticket's been open since March."

**REYES final line: material 426404.** Clipped from 443823 at 7.1 s with a 0.15 s fade: the sigh, then "Third time through this log tonight. Still can't find the open item." "Conflag two" is cut. A pass-down retake (task 443842) was made and rejected: too whispery.

## Resolution plan (decided 2026-11-04)

- Final delivery is 1080p, not 4K.
- Every shot, new and old, is generated and iterated at 480p in Seedance 2.5 (16 credits a second) until it is right.
- Once the cut is locked, only the clips that made it are upscaled to 1080p with Topaz Starlight (30 credits a second). No keeper is regenerated at a higher resolution, so approved takes are kept exactly.
- The opening's locked clips (413642, 413731, 413643, 413730) follow the same path.
- Composite the zoom and demo screens and export at 1080p locally.

### Pitch voices and plate v2 (2026-11-04, later)

| What | ID | Notes |
|---|---|---|
| SULLIVAN narration, Captain "Open Periscope", DELGADO (one combined file) | task 443995 | Split locally into four clips in `video/review/` |
| **DELGADO "Aye, Captain. Pulling up the scope now." (APPROVED)** | **task 444018** | Retake 2, voice reference 394187. Replaces the muddled clip in 443995. |
| DELGADO retake 1, rejected | task 444014 | Came out as a woman's voice |
| Real Super Hornet reference crop | material 426590 | Cropped from DVIDS image 7780913 (public domain, U.S. Navy photo, MCS3 Aaron Arroyo), no people |
| Conflag plate v2, real jets (A) | task 444012, **material 426595** | **PICKED.** Real-looking jets through the glass |
| Conflag plate v2 (B), not used | task 444013 | Jets better than v1 but still soft |
| **REYES reshoot v3 from plate v2 (APPROVED by Anthony)** | **task 444017** | 480p, 8.06 s, 128 credits. Real-looking jets, locked camera. Replaces task 443912. Upscale to 1080p once the cut is locked. |

Open: SULLIVAN's dashboard line (see notes/ato-wording.md), SULLIVAN's two lines against the Captain (are they distinct voices?), MORGAN's new line, the Captain's "Open Periscope" take.

### SULLIVAN narration v2 (2026-11-04)

| What | ID | Notes |
|---|---|---|
| **SULLIVAN, three narration beats, one voice (APPROVED by Anthony)** | **task 444041** | 35.3 s. Machine check: every word correct, no music. Supersedes SULLIVAN's lines in task 443995. |
| Beat 1 "Imagine an environment..." | `video/review/sullivan-beat1-imagine.mp3` | 6.05 s |
| Beat 2 "Now imagine you lose the cloud." | `video/review/sullivan-beat2-lose-the-cloud.mp3` | 2.2 s |
| Beat 3 "This is Periscope. It's built so one Authority to Operate can cover the software developed inside it. Build once, inherit the controls..." | `video/review/sullivan-beat3-periscope.mp3` | 15.4 s. The 3.4 s dead gap after "This is Periscope." tightened to 0.55 s, and the gap after "inside it." to 0.6 s. |

On screen during beat 3: small lower-third, plain white, "Design goal. Not yet authorized."

### Scene B set lock and MORGAN's screen (2026-11-04)

| What | ID / file | Notes |
|---|---|---|
| **Cubicle 16:9 plate for MORGAN's shot (LOCKED)** | **material 426637** | Cut from the north-east panel (material 426376), rows 400 to 1106. Monitor centre-right with a plain screen, open wall at left for MORGAN, chair back at bottom-left. |
| Cubicle north-west 16:9 plate, alternate | `scratchpad/.../cubicle-nw-plate-16x9.png` | Not registered. Straight-on north rejected: a seated head would cover the screen. |
| Screen corners in the plate (tl, tr, br, bl) | (595,208) (956,190) (942,514) (578,465) | `edit/` composite keys the plain pale blue-grey screen and replaces it with the terminal video. |
| **MORGAN's terminal screen v2, 1080p, 26.6 s** | `video/review/morgan-terminal-screen-1080p.mp4` | `edit/make_terminal_screen.py`. Built from the real transcript on the locked-down laptop (file `error-if-u-inst`, pushed by Anthony to origin/main): `python --version` prints the Microsoft Store alias message, then `winget install --id Git.Git -e` downloads and verifies 63.7 MB, App Control for Business blocks the installer (popup, 17.6 to 22.9 s), mouse closes it, winget prints error 0x8007029c. Typing, progress bar and mouse are simulated. v1 (captured on the dev machine) kept as `edit/make_terminal_screen_v1_captured_here.py`. |

Known weak spots in the cubicle stills: the wall clock numerals are garbled, the card reader and laptop badge have faint glitch text, and the phone display is unreadable. Use a dedicated clean clock insert, and keep the card reader out of any close-up.

Popup details NOT yet confirmed by Anthony: dialog title bar text (drafted as the installer file name), the file path (drafted as C:\Users\MORGAN\AppData\Local\Temp\WinGet\Git.Git.2.56.0.4\Git-2.56.0.4-64-bit.exe), the button label (drafted as Close), whether the window title was "Administrator: Windows PowerShell", and whether the winget error printed before or after the popup was closed (drafted as after). Override with POPUP_TITLE, POPUP_PATH, POPUP_BUTTON, WINDOW_TITLE env vars and re-render.

### MORGAN's line (2026-11-04)

| What | ID | Notes |
|---|---|---|
| **MORGAN line "We're software developers. On this machine, we can't develop."** | **task 444099** | Seed Audio, reference voice 443826. Words checked. 7.34 s raw. |
| Tightened clean line | `video/review/morgan-line-cant-develop.mp3` | 5.19 s. 2.5 s gap between the sentences and the 1.2 s lead-in cut. |
| **Padded track for the shot** | **material 426708** | 13.0 s: silence until 7.4 s, breath, first sentence about 7.7 to 9.3 s, second about 10.2 to 12.9 s. |

Scene B shot: locked v3 in `prompts/scene-b-morgan-desk.md`, 13 s at 480p, 208 credits, not yet generated.

### Scene B shot generated (2026-11-04)

| What | ID / file | Notes |
|---|---|---|
| **MORGAN at the desk, 13 s, 480p** | **task 444148** | 208 credits. Checked: right man, ponytail, glasses, polo, real typing, hand to mouse at about 5 s, sits back after the popup, line spoken in sync. Camera locked. Screen stays plain and uncovered (area 33,932 to 34,016 px over all 313 frames). The model reframed tighter and more side-on than plate 426637, so the screen corners were re-measured on the clip. |
| Composite draft, 480p | `video/review/sceneB-morgan-desk-draft-480p.mp4` | `edit/composite_monitor.py` keys the plain screen per frame and warps the retimed terminal into it. Terminal retimed per the table in prompts/scene-b-morgan-desk.md. Audio is the model's own. |
| Screen corners in the clip (854x480) | tl (516,126) tr (709,96) br (697,289) bl (502,275) | Measured once at 2.5 s |

Plan for 1080p: upscale task 444148 with Topaz Starlight, then run `composite_monitor.py` again on the upscale so the terminal text is crisp.

### Clocks and the C to B draft cut (2026-11-04)

| What | ID / file | Notes |
|---|---|---|
| Booth clock face, blank (no numerals, no hands) | task 444158 | 6 credits. Image models draw random times, so hands are drawn locally. |
| Cubicle clock face, blank | task 444159 | 6 credits |
| Clock inserts with exact times and ticking second hand | `edit/make_clock_insert.py` | Booth 02:00:00 and cubicle 09:00:01, red second hand, synthesized tick on every second. Pins and radii: booth (768,390) R150, cubicle (716,377) R185. |
| **Draft cut, scenes C and B, 33.8 s, 720p** | `video/review/sceneC-to-B-draft-720p.mp4` | `edit/assemble_c_b_draft.py`. Flight deck 0 to 2 s, hangar with card 2 to 4, REYES 4 to 12.06, hangar pull-back to 15.06, booth clock to 16.06, cubicle clock to 17.56, MORGAN to 30.61, held frame to 33.8. SULLIVAN beat 1 at 11.0 s (one second before REYES ends, across the clock cut), beat 2 at 31.0 s. Loudness normalized to -16 LUFS. REYES uses the model's own audio. |

 Still to build: scene A (the boat), the SCOPE screen, the Bridge Warden demo, the close, then 1080p upscales and the final mix.

### Scene A: the Captain's new close-up (2026-11-04)

| What | ID / file | Notes |
|---|---|---|
| Captain line, approved take | task 444223 (voice sample material 394196) | Words verified. Carries a low sub rumble; Anthony approved it as natural. |
| Trimmed track | material 426838, `video/review/captain-launcher-trimmed.mp3` | Pause shortened with a 0.12 s crossfade, tail faded, nothing else |
| Rejected takes | 444219 (old sample 394289 carried a synth drone), material 426834 (my noise-cleaned version, sounded bad), 444224 (no sample, 6 s pause) | Do not run noise reduction on the Captain's voice |
| **Captain close-up, 8 s, 480p** | **task 444251** (`video/review/sceneA-captain-closeup-480p.mp4`) | 128 credits. Checked: face matches sheet v3, plain cap with gold visor leaves and small crest, no lettering, silver oak leaves, red light and monitor glow match the opening, camera locked. |

Timing note: the model re-timed the audio. Lips move about 1.6 to 3.8 s (first sentence), pause to 4.9 s, then about 4.9 to 7.4 s. The clip's own audio is lip-synced. The approved trimmed track starts at 0.5 s and its second sentence runs longer, so laying it in would need a delay and a squeeze. Default is the clip's own audio unless Anthony prefers the track.

### Scene A draft and the SCOPE screen candidates (2026-11-04)

| What | File | Notes |
|---|---|---|
| **Scene A, the boat, draft 720p, 37.7 s** | `video/review/sceneA-boat-draft-720p.mp4` | `edit/assemble_a_draft.py`. Clip A to 9.04 s + A3 (14.1 s), B v2 shot 1 (5.83 s), new Captain close-up (8.06 s, task 444251), locked west wall with DELGADO's new reply (task 444018) and the push into the monitor (9.6 s). One continuous brown-noise hum under the whole scene so the sub rumble in the Captain's take never pops in and out. The final screen is a labeled placeholder (`screen.png`). |
| Real Edge Ops catalog, 1080p | `video/review/edge-ops-catalog-real.png` | Rendered with headless Edge from `edge-ops/index.html`. Dark theme, tools grouped by function, "No admin, no installs." Candidate base for the SCOPE screen: swap the title and subtitle only. Bridge Warden is not listed in it. |
| Bridge Warden | `Projects/bridge-warden/challenges/ai-automated-systems` | "A governance and orchestration layer that sits between onboard AI agents and the ship." Launch with `run.bat` (opens Warden Control and the main app on loopback port 8774). Not launched yet. |

Length so far: C and B draft 33.8 s plus A draft 37.7 s = 71.5 s before the demo and the close.

### Full pitch draft with transitions (2026-11-04)

Built by `edit/assemble_full_draft.py` into `video/review/PITCH-full-draft-720p.mp4`.

- Carrier opening: fade from black, 0.5 s dissolves between the flight deck, the hangar bay, REYES and the hangar pull-back.
- Booth clock 0200 to cubicle clock 0900: hard match cut on the tick.
- MORGAN, a held frame, a 0.35 s dissolve into the cubicle clock (09:00:19) ticking.
- The last tick is the hard cut into the boat. The clip starts at 1.9 s so the mine blast lands 0.6 s later. A synthesized tick marks the cut.
- Boat: hard cuts, one continuous low hum underneath, the push into the monitor lands on the SCOPE screen.
- SCOPE screen: `video/review/scope-screen-1080p.png`, a scratch copy of the real Edge Ops catalog page with only the title and subtitle changed to SCOPE and "Ship Continuity Of Operations Environment." The repo's edge-ops files were not touched.
- Caption "Design goal. Not yet authorized." over the SCOPE hold.
- Placeholder card where the Bridge Warden demo goes, then a fade to black.
- SULLIVAN beats: 1 one second before REYES ends, 2 on the held frame after MORGAN, 3 as the camera lands on SCOPE.

### Layered score and the v2 mix (2026-11-04)

| What | ID / file | Notes |
|---|---|---|
| Score layer 1, calm bed | task 444385 (the first try, 444356, failed on a service error) | Lyria 3 Pro, 4 credits, 115 s |
| Score layer 2, clock pulse | task 444357 | Lyria 3 Pro, 117 s. Enters on the first clock tick (14 s), builds to the blast |
| Score layer 3, warm resolve | task 444358 | Lyria 3 Pro, 50 s. Swells in 4 s before the camera reaches the SCOPE screen |
| Riser | task 444360 | ElevenLabs Sound, 5 s. Ends on the cut into the boat |
| Hull boom | task 444359 | ElevenLabs Sound, 6 s. On the mine blast, 0.55 s after the cut |
| **Mixer** | `edit/mix_layers.py` | Dialogue bus (the clips' own audio gently expanded down so each clip's ambience stops jumping at the cuts, plus SULLIVAN), music bus (ducks under dialogue), effects bus (not ducked). Master loudnorm to about -16 LUFS. |
| **Full draft v2** | `video/review/PITCH-full-draft-v2-720p.mp4` | Measured sound jump at the clock inserts went from 24 dB to under 1 dB, and from 11 dB to 2 dB at the cubicle clock into MORGAN. SULLIVAN's beat 2 is left out until the line is rewritten. |

Music cost about 20 credits in total.

Known: the "Design goal. Not yet authorized." caption overlaps card text on the SCOPE hold; give it a dark backing strip in the final pass.

### SCOPE skin (superseded)

The skin was built and merged in edge-ops (pull request 54). Its expansion constant is "Ship Continuity Operations Platform Environment". The Captain's recorded line says "Ship Continuity of Operations Environment", which spells SCOOE, so the spoken and written expansions still differ. That is an open wording decision for Anthony.

## Final state (2026-11-05)

Everything above is a dated working log: statuses such as "not yet generated" or "waiting for Anthony's go" were true when written and are superseded here. Paths: `prompts/` and `edit/` in the log now live under `pitch/prompts/` and `pitch/edit/`; `video/review/` is local only and not in this repository.

| What | Final |
|---|---|
| Cut | Pitch v6, 100.2 s. 1080p in `pitch/video/`; 4K master (3840x2160) in the release `pitch-v6-4k` |
| REYES | task 444017 (reshoot v3), upscaled |
| MORGAN at the desk | task 444148, upscaled, with the terminal video composited onto the plain screen per frame |
| Captain close-up | task 445307, regenerated with on-camera mouth movement; replaces task 444251 |
| SULLIVAN, SCOPE narration | task 445605 (full beat 3, says SCOPE); tasks 445403 and 445597 rejected |
| 4K upscales (Topaz Starlight 2.5) | tasks 445582 to 445588 and 448269 (445584 timed out and was redone as 448269) |
| Bridge Warden shown | two still captures from a simulated ship, captioned as such. They predate its UI rebuild and are to be recaptured when the rebuilt demo is ready |
| Authorization | SCOPE holds no Authority to Operate. The narration claims the design, never the status (`pitch/notes/ato-wording.md`) |
