# Fleet demo video quality audit

**Date:** 2026-11-05 · **Scope:** every demo under `*-demo/` on `main` plus the three open update PRs (#25 Halyard, #26 Phoenix LAi, #27 Bowerbird), the pitch cut and the intro rough cut. TalkForge was left out on request. **Read-only:** nothing in any demo branch was changed; this branch adds only this report and the contact sheets.

Contact sheets (30 frames at even intervals, with timecodes) are in [`contact-sheets/`](contact-sheets/). One per tool, plus `Halyard-PR25.png` and `Phoenix-LAi-PR26.png` for the open update PRs, and `Pitch.png` / `Intro.png`.

## 1. Bottom line

- **15 tool demos are published and were audited.** All are 1920x1080 H.264 at 30 fps with AAC audio and a soft English subtitle track whose text matches the sidecar `.srt` exactly. Fourteen are mastered at the same loudness (-16.1 LUFS, true peak about -1.3 dBTP). The production baseline is consistent and competent.
- **Three demos have a defect a judge would notice** and should be fixed before the submission: **Bowerbird** shows the real Windows user name in file paths; **Phoenix LAi** shows a red-flag error string ("rag error: embedding model ... (500) Internal Server Error") in the client's status bar throughout the chat chapters, in both the merged file and the PR #26 re-export, while the narration says the opposite; **Bridge Warden** is 9 dB quieter than every other demo, uses a different (Piper TTS) voice cast, and is silent for about 40 % of its 7:37 runtime.
- **One fleet-wide caption defect:** every `.srt` is written as one line per cue, with lines up to 238 characters (60 to 75 % of lines are over the 42-character norm). Players wrap these into three to five rows that cover the UI. Re-segmenting is a scripted job, about half an hour per demo.
- **No demo meets the Signal-Gun Tier-1 length (60 to 90 s).** They run 2:02 to 7:37 (77.8 minutes in total). Both Halyard's and Bridge Warden's scripts say short presentation cuts are "not generated yet". If judges walk the stations, these long forms will not be watched to the end.
- **Three tools in the fleet demo list have no demo:** Lazarette (full), SnapShackle and edge-ops. Listed below as "not published, not audited".
- **Reshoot cost:** the ship-blocking fixes are **about 15 hours and 0 Renoise credits** (nothing needs new narration). Full polish including re-voicing Bridge Warden and 15 short cuts is **about 60 hours and 1,260 credits**. Re-recording everything from scratch would be about 120 hours and 3,100 credits against the roughly 6,100 credits in the account (see section 7).

## 2. How the audit was done

| Check | Method |
|---|---|
| Container, streams, duration, bitrate | `ffprobe` on every MP4 (main, phone, captioned, and the PR #25 / #26 files) |
| Loudness, true peak, loudness range | `ffmpeg ebur128` on the 1080p file of every demo |
| Dead air | `silencedetect` at -45 dB, 2 s minimum |
| Static picture, black frames | `freezedetect` (8 s minimum) and `blackdetect` at 640 px |
| Captions | Parsed every `.srt`: cue count, overlaps, cues past the end, line length, rows per cue, characters per second, coverage; extracted the embedded `mov_text` track from every MP4 and diffed it against the sidecar |
| Picture review | 30-frame contact sheet per video, then full-resolution frames wherever a tile looked wrong (terminals, dialogs, key pages, status bars) |
| Intent vs. result | Read every `SCRIPT.md`, `INTENT.md`, `DIALOGUE.md`, the PR bodies and triage comments, `assets.md`, the comms repo's demo pipeline proposal and the Signal-Gun spec |
| Repository hygiene | Large-blob scan of the git history |

Not done: a listening pass of every minute of narration (spot-checked only), speech-to-text against the captions, and a check that each on-screen claim matches the tool's current code.

## 3. Inventory

Durations and sizes are from `ffprobe`. "Script" means a `script/` folder exists on `main`.

| Tool | PR | Length | 1080p MB | Phone copy | Burned-in copy | Script | Architecture |
|---|---|---|---|---|---|---|---|
| Bowerbird | #8 merged, #27 open | 2:02 | 10.8 | yes | no | no (#27 adds INTENT-AND-AUDIT) | SVG + PNG |
| Bridge Warden | #14 merged | 7:37 | 68.2 | `-720p` | `-captioned-720p` | SCRIPT | SVG + PNG |
| Capstan | #9 merged | 3:39 | 17.2 | yes | no | no | SVG + PNG |
| Eight Bells | #10 merged | 5:24 | 25.5 | yes | yes | SCRIPT + INTENT | SVG + PNG |
| Fairlead | #16 merged | 5:54 | 36.7 | yes | no | no | SVG + PNG |
| Gangplank | #17 merged | 2:58 | 14.4 | yes | no | no | SVG + PNG |
| Halyard | #5-#7 merged, #25 open | 5:53 | 47.3 (45.6 in #25) | no (#25 adds) | main file itself is burned-in (#25 fixes) | SCRIPT + DIALOGUE | SVG + PNG + HTML source |
| Lazarette Lite | #11 merged | 3:16 | 10.0 | yes | no | no | SVG + PNG |
| Data Noodler | #19 merged | 4:59 | 19.2 | yes | no | INTENT | SVG + PNG |
| PacketRat | #15 merged | 7:04 | 64.4 | `-720p` | `-720p-captioned` | SCRIPT | SVG + PNG |
| Phoenix LAi | #24 merged, #26 open | 6:18 (6:23 in #26) | 32.3 (35.8) | yes | yes | INTENT (#26 adds DIALOGUE) | SVG + PNG |
| Scrimshaw | #20 merged | 3:36 | 16.8 | yes | no | SCRIPT + INTENT | SVG + PNG |
| Semaphore | #12 merged | 6:33 | 26.2 | yes | yes | no | 2 x SVG + PNG |
| Shellback | #13 merged | 4:47 | 29.9 | yes | no | SCRIPT + INTENT | SVG + PNG |
| Windlass | #23 merged | 7:35 | 33.0 | yes | no | INTENT | SVG + PNG |
| Pitch cut v6 | #21 merged | 1:40 | 37.5 | n/a | n/a | README | n/a |
| Intro rough cut | #4 merged | 0:36 (720p) | 9.8 | n/a | n/a | opening-scene.md | n/a |

**Not published, not audited** (in Signal-Gun's `data/fleet-repos.txt` but with no demo in this repo): **Lazarette** (the full vault; only Lazarette Lite has a demo), **SnapShackle**, **edge-ops**. TalkForge was excluded on request. Repos that are not in the fleet demo list and have no demo (Bosun, crows-nest, Halyard-Ballast, Sea-Trials, Signal-Gun, Watch-Bill, fleet-action-baseline, smpg-crucible-forge, phoenix-perfectus) are infrastructure or data and were not expected to have one.

## 4. Fleet-wide findings

Ranked by what a viewer would notice first.

### F1. Captions are one long line per cue (every demo)

Every `.srt` has exactly one text row per cue. Longest row per demo: Windlass 238 characters, PacketRat 196, Eight Bells 158, Noodler 152, Shellback 152, Phoenix 147, Halyard 141, Fairlead 140, Bridge Warden 135, Gangplank 134, Scrimshaw 130, Semaphore 129, Lazarette Lite 126, Bowerbird 112, Capstan 112. Between 48 % (Bowerbird) and 77 % (Windlass) of rows exceed 42 characters. The embedded `mov_text` track carries the same rows, so every player wraps them into three to five rows over the lower third of the UI. Reading speed is otherwise fine (median under 20 characters per second; one Phoenix cue, "Plus.", at 78 cps is a timing artefact). A few sidecars have overlapping cues (Fairlead 5, Capstan 2, PacketRat 2, Phoenix 2, Gangplank 1, Semaphore 1); the mov_text muxer trims those, so only the sidecar is affected.

**Fix:** re-segment each `.srt` to two rows of at most 42 characters, then remux the subtitle track (`ffmpeg -c copy`), no re-encode. About 0.5 h per demo with a script, 8 h for all fifteen. No credits.

### F2. No short cut exists for any tool

Signal-Gun's spec (`DEMO.md.template`, `duration_target`) sets Tier 1 at 60 to 90 s and Tier 2 at 180 to 240 s. The published demos are long-form walkthroughs of 2:02 to 7:37; Halyard's and Bridge Warden's scripts both say "short presentation cuts use Renoise voices ... not generated yet". If the demos are shown at stations or inside the pitch, a 60 to 90 s cut per tool is missing.

**Fix:** one cut per tool from existing footage: a new 3-line cold open plus one highlight chapter plus the close. About 2 h editing and 3 Renoise voice tasks (60 credits) each; 30 h and 900 credits for all fifteen.

### F3. Variants and naming are inconsistent

- Burned-in copies exist for only 6 of 15 (Bridge Warden, Eight Bells, Halyard in PR #25, PacketRat, Phoenix, Semaphore).
- Bridge Warden and PacketRat call the 720p copy `-720p` and the burned-in copy `-captioned-720p` / `-720p-captioned`; everyone else uses `-phone` and `-captioned-phone`.
- Phone copies are encoded at 80 to 237 kbps; Lazarette Lite (80 kbps) and Phoenix (87 kbps) are at the low end, and their small terminal text goes soft on a phone.
- Phone audio is 96 to 192 kbps; Bridge Warden's is 39 kbps mono.

**Fix:** one `render-variants` script run over the 1080p masters: about 2 h for all, no credits.

### F4. Six demos have no script on `main`

Bowerbird (PR #27 adds it), Capstan, Fairlead, Gangplank, Lazarette Lite and Semaphore have no `script/` folder, so there is no record of what was intended, what is synthetic, or the blur list. Windlass, Noodler and Phoenix have an intent note but no shot list or dialogue (PR #26 adds Phoenix's dialogue). Only Eight Bells, Scrimshaw and Shellback have both.

**Fix:** write `INTENT.md` from the `.srt` and the recording: 1 h each, 6 h total.

### F5. The static architecture card is a third of the shorter demos

Every demo opens on a title card then a "architecture at a glance" diagram that builds up over 30 to 60 s. In a 2 to 3 minute demo that is 25 to 38 % of the runtime before any software appears: Lazarette Lite 55 s of 3:16 (plus 20 s at the end), Bowerbird 40 s of 2:02, Capstan 50 s of 3:39, Scrimshaw 45 s of 3:36. In the long demos it is fine. Freeze detection also shows title cards held 18 to 28 s (Windlass 28 s, Capstan 27 s, Phoenix 26 s, Noodler 22 s, Scrimshaw 22 s).

**Fix:** in the edit, hold the title 6 to 8 s and cut the diagram build to 20 s. About 1 h per affected demo.

### F6. Repository weight

`.git` is 965 MB; 49 blobs over 5 MB total 1.18 GB. `Halyard-demo.mp4` alone is in history eight times (about 350 MB). Both open video PRs (#25, #26) were triaged by `seakintruth` for the same reason: team rules say no big binaries in git, use release assets. The `intro/` and `scene02/` folders are byte-identical copies (9.8 MB of video twice).

**Fix:** publish MP4s as release assets and keep `.srt`, scripts and architecture files in git; remove one of `intro/` / `scene02/`. Not a video task; about 2 h.

### F7. Privacy and sensitive strings

- **Bowerbird** (merged): the real Windows user name appears in `C:\Users\Anthony\Videos\Fleet-Demos\Bowerbird\work\demo\files` in the folder field, the folder hint and the status bar, at least from 1:15 to 1:40 (Smart Rename chapter) and in the status bar of every app chapter. Halyard's blur list explicitly covers "Windows user name in paths"; Gangplank used `C:\Users\you`. Also visible: "Speaks with Microsoft David" in the footer.
- **Scrimshaw** at 1:44: `fairlead clients list` shows the client id and key prefix `fl-vYrv`. Bridge Warden's script blurs the same key-prefix column. A prefix is not a secret, but the fleet's own practice is to blur it.
- Halyard, Bridge Warden and Fairlead reuse the OpenAI key page: tracking ids are blurred; the account label "Personal / Organization" and the six key names (`fleet-tools`, `hackathon-testing`, `fairlead-test`, `synapse-intelligence`, `cascade-intelligence`) are readable. Low risk.
- No API key value, passphrase or session link was found in any sampled frame.

### F8. Loudness and audio format

Fourteen demos sit at -16.1 LUFS integrated, true peak -1.2 to -1.4 dBTP, loudness range 5.3 to 6.8 LU: a clean broadcast-style master. Exceptions: **Bridge Warden** -25.0 LUFS (mono, 44.1 kHz, 82 kbps; the 720p copies are 39 kbps), **Intro** -19.0 LUFS, **Pitch** -16.8 LUFS with a 96 kHz sample rate (harmless but odd). The **Phoenix PR #26** re-export peaks at -0.5 dBTP, closer to clipping than the rest; still legal.

### F9. Two taglines are shared

Capstan and Halyard both close on "Compute and creativity are the new frontier." Halyard's close also contains "So why would you pay for ADO Boards or Jira?", a tone that differs from every other close. Editorial choice; flagged only.

## 5. Per-tool findings and verdict

Verdicts: **Ship** (no change needed), **Edit** (fix from existing footage, no new narration), **Partial reshoot** (re-record chapters, reuse narration), **Re-voice** (new Renoise narration).

### Bowerbird (2:02) — Edit (blocker)

- Real Windows user name in paths (F7). The clean fix is a blur region in the edit over the folder field and status bar; the better fix re-records the five app chapters with a neutral user profile.
- 40 s architecture card plus 12 s end card in a 2:02 video; only about 65 s shows Bowerbird.
- Sheet frames #19-#20: the approval dialog floats on an otherwise empty dark page at 1:15 to 1:19; it reads as a loading gap.
- PR #27 adds the missing intent note; it changes no video.
- **Cost:** blur in edit 1 h, 0 credits. Re-record app chapters: 3 h + 60 credits (narration reused, so credits only if lines change).

### Bridge Warden (7:37) — Edit now, Re-voice if time

- -25 LUFS, 9 dB under the rest (F8). Normalising to -16 LUFS is a 10-minute `loudnorm` pass plus remux.
- Thirteen silent stretches of 2 s or more, totalling about 180 s (about 40 % of the runtime), including 33 s at 4:06 and 23 s at 6:47. Captions cover only 60 % of the runtime (every other demo: 91 to 95 %).
- Voices are TalkForge/Piper (CO, CHIEF, RADIO, XO), not the Renoise cast (HARLAN, SULLIVAN, REYES) used by the other fourteen. Judges watching several demos in a row will hear the switch.
- `SCRIPT.md` says 7:34 with captions burned in; the merged 1080p file is 7:37 with a soft track (the burned-in version is the 720p copy only). Harmless, but the script should match.
- `yuvj420p` (full-range) pixel format on all three files; most players handle it, some show lifted blacks. Re-encode to `yuv420p` when touching the file.
- Two terminal-only chapters (0:22, 2:24) are a 14 px monospace line in the middle of a black 1080p frame; fine on a monitor, unreadable on a phone.
- Chapter cards ("Connect the AI through Fairlead", "Threats need a human", "Human authority") and the ending work well.
- **Cost:** normalise + remux 0.5 h. Trim dead air to under 3 s per gap: 2 h (brings it to about 5:30). Re-voice with the Renoise cast: 13 chapters x 20 credits = 260 credits + 3 h re-cut.

### Capstan (3:39) — Ship (optional trim)

- 27 s static title, 50 s diagram before the app. Trim to 25 s saves half a minute.
- Frame at 2:07 is a black window inside the editor (the recorded clip itself is black while the "Record" dialog plays). Intentional but reads as a glitch for 3 s.
- Two overlapping cues; three cues under 1 s.
- Closing line duplicates Halyard's (F9).
- **Cost:** 0.5 h edit, 0 credits.

### Eight Bells (5:24) — Ship

- Complete set: SCRIPT, INTENT, phone and captioned copies, matching architecture. Narration lands on the right screen in every sampled frame. Four cues over 8 s; readable.
- Terminal at 4:47 is 10 px text on black for a few seconds (the Halyard hand-off command). Fine.
- **Cost:** caption re-segmentation only (F1).

### Fairlead (5:54) — Ship (caption fix)

- Good coverage of Providers, Clients, Settings, Diagnostics, Playground, Activity. Reused Halyard footage is labelled on screen ("footage from the Halyard demo").
- Five overlapping cues and nine cues under 1 s: single words ("OpenAI.") split off as their own cue; merge them.
- No script folder (F4).
- **Cost:** 0.5 h captions, 1 h intent note, 0 credits.

### Gangplank (2:58) — Ship

- Terminal chapters use large text and `C:\Users\you`, the right way to do it. "TEST MODE (LocalDev): synthetic data only" banner stays visible.
- Five static holds over 8 s in the first 50 s; small.
- No script folder (F4).
- **Cost:** 1 h intent note.

### Halyard (5:53) — Ship after PR #25

- The merged `main` file has captions burned in and no phone copy; PR #25 replaces it with a soft-track 1080p file and adds both phone copies. Verified: the PR file is the same picture (identical sheet), 45.6 MB, soft `mov_text`, same `.srt`, same loudness. PR body says 43.5 / 14.8 / 15.8 MB; the files are 45.6 / 15.5 / 16.5 MB (MiB vs MB).
- Three static holds in PR #25's file: title 18 s, "A runner that watches the work" card 18 s, end card 18 s. The runner card is a planned feature; 18 s is long for a thing that does not exist.
- Reset checklist and blur list in `SCRIPT.md` were followed in the sampled frames (key dialog blurred, no user name).
- `Halyard-demo.mp4` has been replaced eight times in history (F6).
- **Cost:** nothing beyond F1 after PR #25.

### Lazarette Lite (3:16) — Edit

- 55 s architecture card (0:20 to 1:15) plus a 20 s repeat at the end (2:50 to 3:10), plus about 50 s of PowerShell overlay (1:48 to 2:35). The Lazarette Lite window itself is on screen for roughly 45 s, mostly as an empty "0 credentials" page. For a vault demo there is very little vault on screen.
- Lowest video bitrate of the set (207 kbps 1080p, 80 kbps phone); fine for static frames, soft on the terminal text.
- No script folder (F4).
- **Cost:** cut the diagram to 20 s and drop the end repeat: 1 h. Re-record a 60 s "add item, favourite, generator, read it back from the CLI" chapter: 2 h + 40 credits (2 tasks).

### Data Noodler (4:59) — Ship

- SQL editor, workers bar and activity log are readable at 1080p (spot-checked 2:34). On the 96 kbps phone copy the 12 px log text will not be.
- Eight static holds over 8 s (title 22 s, diagram build), ok.
- Activity log shows local timestamps (`2026-11-05 00:16`), harmless.
- **Cost:** none beyond F1.

### PacketRat (7:04) — Ship (captions, naming)

- Thorough, with an on-screen "Verified, and not verified" card at 6:14 to 6:28 that is the best candour slide of the set.
- Longest single caption row in the set after Windlass (196 chars); ten cues over 8 s.
- 720p copies named `-720p` / `-720p-captioned` (F3).
- Terminal overlays at 2:00 and 2:14 are single 14 px lines on a 1000 px black window; the window is bigger than the content.
- **Cost:** 0.5 h captions, 0 credits.

### Phoenix LAi (6:18 on main, 6:23 in PR #26) — Partial reshoot (blocker)

- The client's top status bar reads **"rag error: embedding model: The remote server returned an error: (500) Internal Server Error."** in every chat chapter (checked at 3:17 in the merged file and at 4:10 and 5:12 in the PR #26 re-export). The narration at the same time says "Embeddings are not offered, so docs search falls back to keywords." A judge who reads the screen sees a 500 error on a demo that promises everything runs locally and works.
- PR #26's body says the phone copies "were not re-exported alongside the main video"; the diff shows both phone files replaced and now 6:23 like the main file (which is the right outcome; only the body is stale). The body says 6:18; the file is 6:23.
- PR #26 narration change (safety chapter) is an improvement: the old take said "I will not push it"; the new take shows the lockout and says "That is a safety stop, not a bug."
- True peak -0.5 dBTP in the re-export (F8).
- The client window is sparse: large empty canvas around the emblem in most chat frames, and the chat text is 13 px at 1080p. Usable on a monitor, not on the phone copy.
- `INTENT.md` records that Phoenix could not run a Gemma 4 model on the recording PC, so the whole demo routes through Fairlead to a 3B Llama; the close says so. Honest, but the headline feature (Gemma on the GPU) is never shown.
- **Cost:** re-record the six client chapters (c02 to c07, about 3.5 min) with the embedding endpoint healthy or the RAG check disabled, keep the PR #26 narration: 4 h, 0 credits. Alternative in edit: a static blur over the status bar for 3.5 min, 1 h, which hides rather than fixes it.

### Scrimshaw (3:36) — Ship (optional blur)

- Live Fairlead draft, publish, and the stand-in LMS with the 67 % fail and 100 % pass are all on screen and captioned candidly ("a stand-in LMS I wrote for this video").
- 1:44: Fairlead client id and key prefix visible (F7). 1:37 and 2:28 are near-empty dark frames for 2 to 3 s each (window switch).
- Quiz slides are white on a dark editor by design; the contrast jump at 2:13 to 3:18 is sharp but intended.
- **Cost:** 0.5 h blur, 0 credits.

### Semaphore (6:33) — Edit

- Two silent gaps in the PowerShell chapter: 5.9 s at 4:13 and 10.2 s at 4:31 (the 10 s one is also the largest caption gap). Every other demo keeps narration continuous.
- "Can we commit the next sprint?" (4:02) and "Not yet: nothing is ready" (4:55) cards work well; the "Data sources at a glance" second diagram (5:08 to 5:40) is a second architecture card and could be cut to 10 s.
- No script folder (F4). Two architecture diagrams (architecture + connectors) are both present as SVG and PNG.
- **Cost:** trim 16 s of dead air: 1 h, 0 credits.

### Shellback (4:47) — Ship

- SCRIPT and INTENT present; narration matches the picture ranges in the sampled frames. Eleven cues above 20 characters per second (the fastest-spoken demo) but all under 24 cps.
- Terminal chapter at 1:59 to 2:09 is 12 px text on black.
- **Cost:** none beyond F1.

### Windlass (7:35) — Edit

- Second-longest demo. About 2.5 minutes of the 7:35 are a PowerShell window on a dark page (1:53 to 2:09, 3:55 to 5:11), where the viewer watches a 3B model answer a question one token at a time; the narration carries it, the picture does not.
- 6:12 to 7:10 is "Hive mind: one model across many phones", labelled PLANNED · NOT BUILT · NOT TESTED. A full minute on a concept, in a 7-minute demo, is a lot; the intent note says the 70B numbers are quoted from a stress test, not re-run, and the captions say so (good).
- Caption rows up to 238 characters, 14 cues over 8 s: the worst case of F1.
- No SCRIPT (INTENT only).
- **Cost:** cut to about 5:00 (concept section to 20 s, terminals trimmed): 2 h; captions 1 h. 0 credits.

### Pitch cut v6 (1:40) — Ship

- Looks finished: carrier hangar, locked-down desk, clock inserts, the boat, the SCOPE catalog with "Design goal. Not yet authorized." captions, Bridge Warden live capture, "Give us ninety days". The catalog frame at 1:10 is sharp and readable.
- 23.99 fps and 96 kHz audio; a 4K master is noted as pending.
- **Cost:** none.

### Intro rough cut (0:36, 720p) — Superseded

- 480p generated clips upscaled to 720p, placeholder Windlass screenshot in the monitor, -19 LUFS. The pitch cut v6 contains a finished version of this scene. `intro/` and `scene02/` are byte-identical.
- **Cost:** none; remove one copy (F6).

## 6. The three open PRs

| PR | What it does | Audit view |
|---|---|---|
| #25 Halyard demo video (update) | Replaces the burned-in 1080p with a soft-subtitle file, adds phone and captioned-phone copies | Files verified: same picture, correct tracks, same `.srt`. Sizes in the body are MiB. Triage comment asks for release assets instead of git blobs (F6). Content-wise it fixes Halyard's only variant gap. |
| #26 Phoenix LAi demo video (update) | Re-exports main and phone files with a retaken safety chapter and new `.srt`; adds `DIALOGUE.md` | The retake is better narration, but the 500-error status bar is still on screen (section 5). Body is stale on duration (6:18 vs 6:23) and on the phone copies (they were re-exported). Same release-asset triage note and a code-freeze note. |
| #27 Bowerbird demo video (update) | Adds `INTENT-AND-AUDIT.md` only | Correct and useful: it names the real-vs-synthetic split and the known UI style deviations. It does not mention the user-name leak in the merged video. |

No PR was merged, closed, commented on or edited by this audit.

## 7. Reshoot costs

**Basis.** Narration is Renoise Seed Audio voice cloning at **20 credits per task** (one task per chapter; from the Shellback, Scrimshaw, Halyard and Phoenix scripts). The intro's notes give 80 credits per generated 5 s clip and 240 credits for an edit-mode pass; those apply only to the pitch, which needs nothing. Screen recording is Capstan or Playwright and costs time, not credits. Hours below are editing and recording labour at the pace the scripts describe (one chapter recorded and cut in about an hour; a 0.5 h remux for file-only fixes). Credits are only charged where narration changes. The account held about 6,097 credits at the last check in `assets.md`. Convert hours at whatever rate applies; no dollar figure is assumed.

### 7a. Ship-blockers (do these)

| Item | Hours | Credits |
|---|---|---|
| Bowerbird: blur user name in edit | 1 | 0 |
| Phoenix LAi: re-record client chapters without the 500 error (narration reused) | 4 | 0 |
| Bridge Warden: normalise loudness, remux | 0.5 | 0 |
| Semaphore: trim 16 s of dead air | 1 | 0 |
| Captions re-segmented, 15 demos | 8 | 0 |
| **Total** | **14.5** | **0** |

### 7b. Polish (worth doing before judging)

| Item | Hours | Credits |
|---|---|---|
| Bridge Warden: trim silences to ~5:30 | 2 | 0 |
| Bridge Warden: re-voice with the Renoise cast (13 chapters) | 3 | 260 |
| Windlass: cut to ~5:00 and fix captions | 3 | 0 |
| Lazarette Lite: trim cards, record one 60 s vault chapter | 3 | 40 |
| Bowerbird: re-record app chapters with a neutral profile | 3 | 60 |
| Capstan, Scrimshaw, Halyard card trims and blur | 1.5 | 0 |
| Phone / captioned variants regenerated consistently | 2 | 0 |
| Intent notes for the six demos without one | 6 | 0 |
| Short 60 to 90 s cut per tool, 15 tools (2 h + 3 voice tasks each) | 30 | 900 |
| **Total** | **53.5** | **1,260** |

Combined with 7a: about **68 hours and 1,260 credits**.

### 7c. Full reshoot (for reference only)

Re-recording and re-voicing all fifteen demos at their current length (77.8 minutes) at the observed rate of about two narration tasks and 1.5 hours per minute of finished video: **about 3,100 credits and 115 to 120 hours**, plus 30 h and 900 credits for short cuts. Nothing found in this audit justifies that; the fleet's problems are a handful of fixable defects and length, not the recordings.

### 7d. Three unpublished tools

Lazarette (full), SnapShackle and edge-ops at the fleet's long-form pace: about 4 min each, 8 narration tasks (160 credits) and 6 to 8 h each, so **about 480 credits and 20 to 24 hours**; at Tier-1 length instead, about 60 credits and 3 h each.

## 8. Measurement appendix

### 8a. Audio

| Demo | Integrated LUFS | True peak dBTP | LRA (LU) | Silences ≥ 2 s | Audio stream |
|---|---|---|---|---|---|
| Bowerbird | -16.2 | -1.3 | 5.6 | 0 | AAC 2ch 48k 192k |
| Bridge Warden | **-25.0** | -2.2 | 8.5 | **13 (≈180 s)** | AAC **1ch 44.1k 82k** |
| Capstan | -16.1 | -1.4 | 5.5 | 0 | AAC 2ch 48k 192k |
| Eight Bells | -16.2 | -1.2 | 6.7 | 0 | AAC 2ch 48k 192k |
| Fairlead | -16.1 | -1.2 | 5.9 | 0 | AAC 2ch 48k 192k |
| Gangplank | -16.1 | -1.4 | 5.3 | 0 | AAC 2ch 48k 192k |
| Halyard (main and #25) | -16.1 | -1.2 | 6.5 | 0 | AAC 2ch 48k 192k |
| Lazarette Lite | -16.1 | -1.4 | 5.5 | 0 | AAC 2ch 48k 192k |
| Data Noodler | -16.1 | -1.3 | 6.8 | 0 | AAC 2ch 48k 193k |
| PacketRat | -16.1 | -1.3 | 5.9 | 0 | AAC 2ch 48k 192k |
| Phoenix LAi main / #26 | -16.1 / -16.1 | -1.3 / **-0.5** | 6.8 | 0 | AAC 2ch 48k 192k |
| Scrimshaw | -16.1 | -1.3 | 6.4 | 0 | AAC 2ch 48k 193k |
| Semaphore | -16.1 | -1.3 | 5.3 | **2 (5.9 s, 10.2 s)** | AAC 2ch 48k 192k |
| Shellback | -16.1 | -1.3 | 6.3 | 0 | AAC 2ch 48k 192k |
| Windlass | -16.1 | -1.3 | 6.0 | 0 | AAC 2ch 48k 192k |
| Pitch v6 | -16.8 | -1.7 | 7.0 | 0 | AAC 2ch **96k** 162k |
| Intro rough cut | -19.0 | -2.0 | 9.6 | 0 | AAC 2ch 48k 193k |

### 8b. Captions (sidecar `.srt`, 1080p file)

| Demo | Cues | Words | Coverage | Rows > 42 ch | Longest row | Cues > 8 s | Overlaps | Largest gap |
|---|---|---|---|---|---|---|---|---|
| Bowerbird | 33 | 270 | 91 % | 16 (48 %) | 112 | 0 | 0 | 0.7 s |
| Bridge Warden | 75 | 744 | **60 %** | 43 (57 %) | 135 | 3 | 0 | **33.2 s @ 4:06** |
| Capstan | 56 | 497 | 95 % | 33 (59 %) | 112 | 1 | 2 | 0.8 s |
| Eight Bells | 75 | 784 | 92 % | 50 (67 %) | 158 | 4 | 0 | 0.9 s |
| Fairlead | 84 | 856 | 94 % | 50 (60 %) | 140 | 5 | 5 | 0.8 s |
| Gangplank | 38 | 423 | 94 % | 25 (66 %) | 134 | 5 | 1 | 0.8 s |
| Halyard | 97 | 855 | 91 % | 51 (53 %) | 141 | 1 | 0 | 0.8 s |
| Lazarette Lite | 43 | 481 | 95 % | 30 (70 %) | 126 | 3 | 0 | 0.8 s |
| Data Noodler | 63 | 741 | 93 % | 44 (70 %) | 152 | 6 | 0 | 0.9 s |
| PacketRat | 89 | 956 | 92 % | 55 (62 %) | 196 | 10 | 2 | 1.3 s |
| Phoenix LAi (#26) | 82 | 923 | 95 % | 56 (68 %) | 147 | 6 | 2 | 0.9 s |
| Scrimshaw | 43 | 525 | 93 % | 33 (77 %) | 130 | 6 | 0 | 0.9 s |
| Semaphore | 85 | 861 | 91 % | 55 (65 %) | 129 | 4 | 1 | **10.3 s @ 4:31** |
| Shellback | 69 | 704 | 91 % | 45 (65 %) | 152 | 3 | 0 | 0.9 s |
| Windlass | 81 | 1,103 | 95 % | 62 (77 %) | **238** | **14** | 0 | 0.9 s |

Speaking rate is 143 to 164 words per minute everywhere. Every embedded `mov_text` track matches its sidecar text cue for cue; the only timing differences are the muxer trimming overlapping cue ends.

### 8c. Picture

All fifteen 1080p files: H.264 High, 1920x1080, 29.98 to 30.00 fps, `yuv420p` (Bridge Warden `yuvj420p`), 207 kbps (Lazarette Lite) to 1,100 kbps (Bridge Warden). Static holds of 8 s or more are listed per demo in section 5; black-frame detection found only the fades at the start and end of each file. Architecture SVGs are all 1920x1080, text-based, with no external references, embedded fonts or raster images (fonts fall back to Georgia / Cambria / Segoe UI); every PNG export is 2400x1350 RGB.
