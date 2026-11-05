# The Long Turnover

A 4:57 film pitching the Long Turnover R&D proposal: capturing a veteran's tacit knowledge over a whole career, with consent, so it does not walk out the gate with them. Photoreal generated scenes (Chief Sullivan, Petty Officer Reyes), native motion graphics for every figure in the proposal, real narration, score and foley.

| Path | What it is |
|---|---|
| `video/Long-Turnover-480p.mp4` | 854x480 master, H.264, AAC, soft English subtitle track. |
| `video/Long-Turnover-720p-preview.mp4` | 1280x720 preview of the 1080p master (the 1080p file is 192 MB, over GitHub's file limit, and is kept locally). |
| `video/Long-Turnover.srt` | Subtitles, same cues as the embedded track. |
| `storyboard-contact-sheet.png` | One frame per beat. |
| `timeline.json` | Every beat with start, end, picture source (generator task ids or native), narration and status. |
| `SCRIPT.md` | The script as shot. |
| `NOTES.md` | Production notes by pass: what was generated, credits spent, checks run, shot notes, what is unverified. |
| `edit/` | The HTML/SVG scenes (`src/`), the Playwright renderer, numpy compositor, audio builder and encode scripts. Generated clips, voice files and the 1080p master are not in the repo. |

## Things to know

- The people and events are a dramatization; the proposal is real. No organisation is named.
- The equipment beat uses the vendors' own product photos (Neurosity, OpenBCI, Polar, BITalino). Fine for an internal pitch; credit or replace them before any public release.
- The film says anonymized data is distilled by generative models. The proposal documents still say "local models" and must be revised to match.
- Not yet done: a real-time watch-through with sound.
