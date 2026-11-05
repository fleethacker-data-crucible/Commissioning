# Eight Bells: intent note

## What it is
Eight Bells (formerly LogHawk) is a Windows-first, local-first watchstanding log intelligence tool. It reads watch logs, flags possible quality problems, drafts an evidence-linked turnover for the relieving watchstander, and keeps reviewed lessons learned. Name: eight bells is rung at the change of the watch.

Status in its own words: engineering prototype, not accredited, synthetic and non-sensitive training logs only, does not replace authoritative watch records. Findings, drafts and lessons are advisory and need a person to verify them.

## Users
- The **relieving watchstander** (wants to see what is open, what changed, where the evidence is).
- A **reviewer** (records dispositions on quality findings, marks lessons reviewed).
- A **training or lessons-learned owner** (turns recurring conditions into lessons and follow-ups).

## Inputs and outputs
| In | Out |
|---|---|
| Text, LOG and Markdown logs; CSV and JSON exports; JSON Lines, tab, semicolon and pipe tables; XML e-log exports; the text layer of digital PDFs (not OCR); pasted or dictated text; images by manual transcription or opt-in vision | Per-entry source line references; quality findings (timestamp regressions, interval gaps, copy-forward candidates, missing dispositions, optional watch-profile rules); a turnover draft; recurring-condition candidates across logs; reviewed lessons; a hash-chained audit trail |
| | Exports: Halyard hand-off file, Semaphore CSV of counts, unencrypted JSON of local records |

## How it runs
PowerShell 5.1 starts a loopback-only HTTP service (raw TCP on 127.0.0.1, an OS-assigned port); a plain HTML and JavaScript page in the browser is the interface. The open tab owns the server (heartbeat, stops itself after the tab closes). Records live in a DPAPI-encrypted store under `%LOCALAPPDATA%\EightBells`. The parsing and quality engine (`web/engine.js`) runs in the browser and in Node tests; a PowerShell port (`EightBells-Engine.ps1`) is held to it by a golden file and backs the command line.

## Fleet relationships (the accepted contracts, issue 19)
1. **Intelligence: one address.** Model requests go to Fairlead on `127.0.0.1:8776`. Each tool has its own Fairlead client key. Local-only requests carry `X-Fairlead-Privacy: local`.
2. **Credentials: one vault.** Lazarette holds the tokens. Provider keys are shared from Lazarette to Fairlead. An app may read an item by name at start (Eight Bells can read its direct key that way, from a visible console).
3. **Voice.** On-device read-aloud and dictation only.
4. **Work flows as plain files.** Reviewed lessons go to Halyard (a `fleet-handoff` v1 file that Halyard's Intake previews as backlog drafts); per-watch counts go to Semaphore as a CSV.
5. **CLI parity.** `eightbells.bat <noun> <verb>` mirrors the page's actions on the stored data.

## Documented definition of done (issue 19)
Each box ticked with a test or a documented hand check: router default, Lazarette connection, voice, flows (Halyard lessons, Semaphore counts), Fleet UI v0.2, CLI and API.

## Limits it states about itself
Not tamper-proof (the audit chain is tamper-evident); DPAPI protects for a Windows user, not against an administrator or another user of the same account; no identity proofing for reviewers; no OCR; no vendor e-log format checked; AI output is unverified.
