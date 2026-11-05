# Data Noodler: intent note

**Summary.** Data Noodler is for an analyst on a locked-down Windows PC who has a flat file too big for a spreadsheet. The demo takes a synthetic 1.5-million-row fuel log through the whole path on one machine: import, a SQL question in Transform, a Dashboard Studio chart, publishing as web page, PDF and CSV, then an Update when a new file arrives, ending on the project log, snapshots and a record that the browser made no non-local requests. It claims no minutes-saved figure; the data is synthetic and timings are from one PC.

## Detail

## What it is
Data Noodler is a local, self-contained flat-file analytics tool for locked-down Windows PCs. It reads big CSV, Parquet, Arrow and SQLite files, lets an analyst ask questions in plain SQL, builds dashboards from the answers, and publishes them as files. It is served by its own PowerShell 5.1 server and runs in Edge or Chrome. The data engine is C# compiled in memory at start (no DuckDB, no WebAssembly, no third-party DLLs, no installs, no admin rights). Source: `README.md`, `CHANGELOG.md`, `NEXT-PASS.md`, `server/`, `ui/`.

## Users
- The **analyst** with a file too big for a spreadsheet (the demo file has 1.5 million rows; a spreadsheet stops at 1,048,576).
- A **project owner** who needs the same refresh to run again when a new file arrives (the Update workflow).
- A **reviewer** who wants the SQL, the project log and a snapshot as evidence.

## Inputs and outputs
| In | Out |
|---|---|
| CSV, Parquet, Arrow, SQLite; copied into the project or read in place (drive or share) | Arrow datasets (working format); `CLEAN_*` tables built by saved SQL queries |
| SQL queries (Oracle-style dialect) | Dashboards: image, PDF, PowerPoint slide, one-file web page |
| Dashboard Studio widget settings (fields dropped on a widget) | Dataset copies: CSV, Parquet, SQLite |
| | Zipped project snapshots, project activity log, classification label (Public, Internal, Restricted) |

## Fleet relationships (what is true today)
- **No Fairlead, no Lazarette.** The tool makes no model calls and holds no secrets. A code scan finds no outbound request (only XML namespace strings), the recorder aborts and logs every non-localhost request during the demo, and `docs/` of the comms repo records "Network calls: none found".
- **Semaphore** can add CSV files, so the published CSV is a plain-file hand-off. This is not a live integration and nothing in Noodler calls Semaphore.
- No planned integration is documented in the repository, so none is claimed.

## Documented definition of done
The repository has none beyond the README and `NEXT-PASS.md` (a review list of sanitising, security, conformance and cleanup items). This demo treats "done" as: the import, transform, dashboard, publish and update path works for real on a large file, with the trust details (project-only file access, classification label, snapshot archive, change detection) visible.

## Limits it states about itself
Open items in `NEXT-PASS.md`: runtime files still tracked, UNC import paths, widgets run with full page access, UI stack is hand-written JS rather than the TechStack baseline, and the installer can write outside its folder. The control panel's missing same-site check was one of them; this build-out fixes it (see the build log).
