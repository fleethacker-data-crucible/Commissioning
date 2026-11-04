# Pitch and skit: "Deploy any tool in a click"

Draft for review. Built from a read of all 33 repos in the org (READMEs, `edge-ops/catalog.json`, `PORTS.md`, Signal-Gun demo specs, Bridge-Warden judging criteria, Commissioning video notes). Nothing here was run; every claim below comes from those docs.

## 1. What we have (16 launchable tools in the catalog, plus support repos)

| Group | Tools | One line |
|---|---|---|
| Local AI | Fairlead, Windlass, Phoenix LAI | One local OpenAI-style address that falls back to local models when the cloud drops; 70B models on an ordinary PC; GPU model server |
| Work and collaboration | Halyard, Gangplank, PacketRat, Shellback, Eight Bells | Backlog assistant; Git for non-Git people; Outlook triage; skills intelligence; watchstanding-log review and evidence-linked turnover |
| Data and analytics | Semaphore, Data Noodler | Dashboards from a plain-English brief (Qlik replacement); flat-file analytics |
| Capture and media | SnapShackle, Bowerbird, Capstan | Screenshots; file renaming; screen recorder and editor |
| Voice and learning | TalkForge, Scrimshaw | Offline text-to-speech; e-learning authoring |
| Secrets | Lazarette | Credential vault on the workstation |
| Hub | **Edge-Ops** | Catalog page + conventions + port registry that tie them together |
| Support (nothing to launch) | Halyard Ballast, Bosun, Bridge-Warden, Crows-Nest, Signal-Gun, Commissioning, dumping-grounds, comms, forge, etc. | Sandboxes, CI, demo specs, video, branding |

**Shared pattern (this is the real product):** Windows PowerShell 5.1 + Chrome/Edge, `Launch-*.bat`, loopback only (`127.0.0.1`), no admin, no installs, no cloud needed, one reserved port block per tool, `GET /__fleethacker/id` on every tool.

## 2. Recommendation: pick the pattern, show two tools

The judges' own rubric says what to lead with:

| Criterion | Weight | What carries it |
|---|---|---|
| Deckplate impact | 30% | **Eight Bells** (watchstander log review, 0200 turnover) |
| Speed to Fleet | 20% | **The launcher pattern**: unzip, double-click, no admin, no network |
| Scalability | 20% | Same pattern, 16 tools, config-driven, one port registry |
| Barrier removal | 15% | Works on whitelisted, no-install, disconnected machines |
| Judges' discretion | 15% | Live demo, human approval points, stop path |

**Pitch = the launcher. Demo = Edge-Ops catalog → Eight Bells. Windlass + Fairlead = the cold open (already shot) and a 15-second mention of "the AI layer."**

Why not demo Windlass/Fairlead live: Windlass answers at about 8.7 s per token (its own README: 349 s for one sentence), and the Fairlead demo spec is a synthetic fixture with no real model call. Great for the skit, weak as the main demo. Say "slow by design, built for batch" and move on.

## 3. Total running time (target about 3:30)

| Beat | Time | What |
|---|---|---|
| Skit (existing cut) | 0:37 | Opening scene, zoom into the monitor |
| Launcher | 0:45 | Catalog page, filter, badges, double-click a `.bat` |
| Eight Bells demo | 1:20 | Import log → QA findings → disposition → turnover with source lines |
| Montage + close | 0:50 | Tool cards flash by, the ask |

## 4. Spoken pitch (about 45 s, read over the launcher segment)

> That was a bad day. No uplink, no internet, no IT ticket that comes back in time.
>
> We built sixteen tools for exactly that day. Each one is a zip. Unzip it, double-click one file, and it runs: no administrator rights, no install, no network. It talks only to the machine it is on. It runs on the Windows PowerShell and the browser already on every Navy laptop.
>
> This is the catalog. Every tool, what it needs, which port it uses, and the badges that matter: no admin, no installs, loopback only. Anyone can add the twentieth tool in an afternoon, because the pattern is the product.
>
> Let me show you one that matters at two in the morning.

## 5. Eight Bells voiceover (about 80 s)

> A watchstander's log is the memory of the watch. Eight Bells reads it.
>
> Import a log. Before anything is stored, it shows every entry with its source line.
>
> Quality Assurance flags what a tired relief would miss: an unresolved condition, a gap, an entry that doesn't match. Each finding points at the exact lines behind it. The reviewer records a decision and a reason; the original log is never changed.
>
> Then the turnover. Open items, in plain language, each one linked to the line that proves it. No AI service is involved. It works with the network off.
>
> The Sailor relieving the watch spends a minute reading, not twenty reconstructing.

(All demo logs are synthetic. Don't state a time-saved number until someone has measured one; the rubric wants before/after, so put the real stopwatch run in the cold open of the live demo.)

## 6. Closing scene: zoom out of the monitor (Renoise prompt material)

The existing notes plan this: reuse the compositing zoom in reverse, new set and cast per scene. Suggested content:

- **Set:** a different part of the Navy, a ship's watch office at night, fluorescent, coffee, a petty officer at a laptop, the Eight Bells turnover on screen.
- **Beat:** the Captain's order from the sub scene has reached the deckplate. A sailor reads the turnover, nods, hands the watch over. Wall sign reads FLEETHACKER, DATA CRUCIBLE.
- **Last line (voiceover, flat, deadpan, same voice as the Captain):** "Sixteen tools. One double-click. Ready when you are."
- **Title card:** "Edge-Ops. Deploy in a click." + the ask below.

Per `notes/open-questions.md`: describe pictures, not actions; start from a real frame as reference; describe voices in a single multi-speaker pass; fix Windlass ("wind-luhs") and Fairlead ("fehr-leed") with separate audio clipped in. Keep 480p for drafts, re-run keepers at higher resolution.

## 7. The ask (closing line)

> Don't lock these down. Adopt them. Give us a sponsor and two ships to field this on, and we'll show you thirty-day results.

Put the 30/60/90 from `docs/submission.md` on the last slide: mission owner, technical owner, next experiment, resources.

## 8. Honest gaps to cover before the demo

1. **Maturity.** Catalog status: 5 unreleased, 4 prototype, 3 beta, 1 preview, and v0.1/v0.2/v0.3 for three others. Say "working prototypes", not "fielded". The rules require us to separate pre-event work from event work (`prior-work.md`, disclosure).
2. **The "loader" is not built yet.** `edge-ops/tools/fleet-loader` only verifies a folder of zips against a pinned SHA-256 manifest (issue 34); it downloads and runs nothing. Today the launcher is the catalog page plus each tool's `Launch-*.bat`. Don't claim one-click install for the whole fleet unless you build and show it.
3. **Two Phoenix repos** (`phoenix-lai`, `phoenix-perfectus`) look like near-identical copies; Lazarette-Lite is not in the catalog. Decide which is canonical.
4. **Port collisions in the old catalog.** `catalog.json` still lists 8765 for Lazarette, Shellback and SnapShackle, while `PORTS.md` (approved 2026-10-25) assigns distinct blocks. Show the registry, not the catalog column, if a judge asks.
5. **Signal-Gun** specs say Eight Bells' demo uses synthetic logs only and Fairlead's is a fixture. Say so on screen.

## 9. About losing access

You said the judges looked like they'd want to lock this down. Two practical, above-board steps:

- **Get a named sponsor and tell IT yourself, before they find out.** The rules ask for disclosure of tools and prior work; the fastest way to keep these running is to be the team that disclosed them cleanly. The tools' own design (loopback only, no admin, human approval points, audit log) is the security story.
- **Keep your own copy.** Everything is in git and each tool packages as a zip. Cloning the org and pinning a snapshot with `Verify-FleetSnapshot.ps1` gives you a verified, offline set you can hand over.

## 10. Next steps I can do

- Cut a shot list and Renoise prompts for the closing scene in the `prompt-audit` format.
- Write the narrated demo script with exact click paths against the live Eight Bells and catalog pages.
- Draft the submission description in the `docs/submission.md` template.
