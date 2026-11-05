# Shellback: intent note

## What it is
Shellback (formerly Synapse) is a local-first workforce capability tool where **skills are attested by the employee, not claimed for them**. Résumé claims, confirmed skills, task confidence, voluntary activity and self-entered credentials stay separate. It never creates a hidden proficiency rating, score or ranking. Name: a shellback is a sailor who has actually crossed the equator, a status you earn.

Status in its own words: synthetic demonstration, not an authoritative readiness, competency, credential or performance system; no login; browser storage is not a secure multi-user store; missing data means unknown, not low.

## Users
- **The employee**: scans a résumé, confirms or dismisses suggested skills, chooses what to share.
- **The supervisor / team lead**: sees aggregate coverage and missions only from cards people chose to share (3+ people before an aggregate appears).
- **Program / HR sponsor**: reads the trust and data screens, the consent ledger, the ROI laboratory.

## Operator's problem (the demo story)
A supervisor must staff a mission and see where the team is thin, but nobody wants a hidden skills score, and a résumé is a claim, not proof. Shellback shows coverage built only from skills people confirmed and chose to share, and the proof of who agreed to what.

## Inputs and outputs
| In | Out |
|---|---|
| Résumé text (paste, .txt, .docx, .pdf text layer; read in the browser, never stored); peer cards (JSON, optionally signed or encrypted); synthetic HR feed CSV (becomes unverified drafts); optional dictated note | Confirmed-skills web and galaxy; team coverage, missions, mentors; supervisor brief (aggregate numbers only); consent ledger with revocation and audit trail; encrypted workspace export; peer-card JSON for Halyard |

## How it runs
PowerShell 5.1 serves the compiled React app from `dist\` on loopback (`Start-Shellback.ps1`, a `TcpListener`; stops when the tab closes). Data lives in the browser's IndexedDB; résumé scanning runs in a Web Worker; a service worker caches for offline use; exports use Web Crypto AES-GCM. CSP `connect-src` allows only the page's own origin plus the Fairlead loopback address.

## Fleet relationships (issue 35, the accepted contracts)
| Contract | Status in the code |
|---|---|
| Intelligence through Fairlead on `127.0.0.1:8776`, local-only header `X-Fairlead-Privacy: local`, its own client key (sealed with a passphrase in the browser) | built, merged (PR 38). Needs Fairlead's Browser origins to allow the Shellback origin |
| Credentials: provider keys in Lazarette, shared to Fairlead | Shellback itself holds no provider key; the model key lives Lazarette -> Fairlead. No direct Lazarette read in Shellback code (the issue lists a credential import as "works"; I found no such code, so the video does not claim it) |
| Voice: read summary aloud, dictation after opt-in (local voices) | built, merged (PR 42) |
| Work flows as plain files: peer-card JSON into Halyard (Halyard's Plan reads Shellback peer cards); HR feed CSV in | built (PR 40, 43). A live Shellback link for Halyard is planned |
| CLI parity: `commands --json` | built (PR 39) |
Planned only: a live Halyard link; Shellback skills feeding a git or CI runner.

## Documented definition of done
Issue 35 boxes each with a test or hand check; roadmap phases A-E shipped.
