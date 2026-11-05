# Bowerbird demo: intent and short audit

## Intent
Operator problem in one sentence: screenshots and files pile up as `Screenshot_2026-11-03_091204.png`, and nobody can find the one they need.

Bowerbird is a local-first file mate for Windows PowerShell 5.1 and a browser. It indexes a folder, proposes honest names for screenshots (file metadata first, an optional vision model second), and moves nothing until a person types APPLY. Every move is journaled and can be undone.

Scenario (one, end to end): seven invented screenshots -> Smart Rename with AI vision, through Fairlead -> review the proposals -> approve with the typed phrase -> new names in Explorer -> Undo restores every original name.

## What is real and what is synthetic
- Real: Bowerbird Studio (the shipped PowerShell server and web UI), a live Fairlead call with Bowerbird's own Fairlead key from Windows Credential Manager, the OpenAI key held in Lazarette and shared to Fairlead, real file renames and a real undo.
- Synthetic: the seven screenshots are invented pages (a fake invoice, test output, calendar, dashboard, error dialog, chat, checklist) rendered for this demo. Nothing comes from the user's machine.
- Not shown: Semaphore export and SnapShackle sidecar rename appear in the architecture diagram because they exist in the code (`docs/SEMAPHORE-EXPORT.md`, `docs/CLI.md`), but are not demonstrated.
- Model: vision goes through Fairlead's `auto` route. Fairlead had no local vision model on this PC, so the run used the cloud route; Bowerbird's default privacy is `local`, and cloud use needs `-AllowCloudAI` at launch plus a consent dialog.
- No minutes-saved claim is made.

## Audit (short)
Fixed on a branch (PR #50, not merged):
- Approvals used the browser's `confirm()` and `prompt()` boxes, which cannot be shown on screen or recorded, and hid what was being approved. Now one in-page dialog shows the question and the phrase (APPLY / UNDO) and keeps its button disabled until it matches.

Style deviations from the Fleet spec (section 7c), not fixed:
- Primary buttons and active nav use the Fleet UI v0.2 signature accent for Bowerbird (violet). The newer spec reserves purple for classification and uses blue for primary actions. It is a shared-token decision across the fleet, so it is flagged, not changed here.
- Body text uses the system font stack (Segoe UI Variable) and headings a serif, not bundled Exo 2 / Syne Mono. Fleet Unified v0.2 fonts are not bundled.
- The footer "Speak progress" control overflows the status bar at 1920x1080 (small layout bug).
- The "Done / Working..." toast sits bottom right over the content.
- Remaining native `confirm()` calls: content-index warning and End session.

## Privacy pass (2026-11-05)
- The recorded app chapters showed the Windows user name in full paths (status bar, scan-location field, applied list). They are covered with solid boxes in the final cut and the Fairlead key-prefix column is blurred. Frames were checked at the affected times.
- A clean re-record through a neutral drive letter was tried, but Fairlead no longer had its cloud provider, so live vision returned 502. The original live-vision recording was kept and masked instead.
