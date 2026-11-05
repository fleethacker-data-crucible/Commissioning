# Scrimshaw demo: intent and audit (short cut)

Repo: `C:\Users\Anthony\Projects\Scrimshaw`, `main` at 58fd125 (the local checkout was on a merged branch 37 commits behind; I switched it to `main`, no files changed).

## What it is
An open-source e-learning authoring tool (Storyline-style): slides, layers, states, triggers, variables, graded quizzes, preview, and publishing to SCORM 1.2/2004, xAPI, cmi5 or a standalone page. Local-first: a PowerShell 5.1 loopback server (port 8775, Fleet registry) serves one compiled file; courses live in the browser (IndexedDB) and `.scrim` files.

## Who and what problem
A trainer or training developer who must turn a procedure into a graded course the LMS can track, and know the package works before anyone uploads it.

## Fleet connections (verified in code on main)
| Tool | How | Where |
|---|---|---|
| Fairlead | "Draft with the router": quiz or storyboard drafts via `POST /v1/chat/completions` on 127.0.0.1:8776, opt-in, local-only header by default, client key typed per session and held in memory | `src/ai/router.ts`, `Dialogs.tsx` |
| Lazarette | Holds the model key, shared to Fairlead by name (same chain as every tool). Scrimshaw does not talk to Lazarette; a direct key hand-off is marked in the code as separate work (planned) | `router.ts` header comment |
| Capstan, SnapShackle, TalkForge | Import their MP4+VTT, PNG+meta.json, WAV files, checked by their bytes (file based, no live link) | `src/import/media.ts` |
| FleetAction | `scrimshaw.ps1` CLI and loopback API (`Start.ps1 -Api`), eleven actions, per-process token | `docs/CLI-API.md` |
| Halyard, Semaphore, Shellback, Packet Rat, Eight Bells, Bridge Warden | No integration | n/a |

## Demo scenario (one tight run)
Synthetic bridge-watch turnover procedure -> new course -> Fairlead drafts three quiz questions live (gpt-5-mini through Fairlead; this PC has no local model so the cloud switch is unticked on camera) -> author reviews correct answers and adds a results slide -> Publish SCORM 1.2 -> zip contents -> learner takes it in a **stand-in LMS written for this video** (it implements the SCORM 1.2 API and logs every call): first attempt has one answer wrong on purpose (67% vs the 80% pass mark: status failed), retry all correct (100%, passed). Evidence trail: the SCORM call log and learner record, plus Fairlead's request log for the draft.

## Candid limits
- The LMS is synthetic (it proves the package's SCORM 1.2 calls, not any vendor LMS).
- The procedure, learner and course are synthetic. The model's draft varies per run; the author reviews it.
- Not shown: PowerPoint import, xAPI/cmi5, SCORM 2004, media import, the CLI/API, light theme.
- No minutes-saved claim.

## UI against the Fleet style spec (section 7c)
Checked against the bridge-warden style guide and the 2026-10-31 UI review (`comms`). Fonts Exo 2 and Syne Mono are bundled locally (`vendor/ui-kit/fonts`, no CDN). Dark, flat, small radii, 1 px borders: matches. Deviations:
1. Primary action (Publish) uses the UI Kit's gold accent where the style guide says blue = primary. It is the kit's brand choice; flagged, not changed.
2. Several toolbar buttons are icon-only (UI review SCRIMSHAW-02, P2, still open).
3. Slide canvases are white/light by design (they show what learners get), so the editor is dark around a light stage.
SCRIMSHAW-01 (failed-save protection, P1) is already fixed and merged (PR 16).
