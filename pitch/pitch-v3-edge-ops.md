# Pitch v3: Edge-Ops is the product

Supersedes the submarine opening and "The Request" skit as the main angle. Facts are from `edge-ops/README.md`, `catalog.json`, `PORTS.md`, `tools/fleet-loader` and the Signal-Gun demo specs. Nothing here was run.

## The product, in one breath

**Edge-Ops: a suite of self-contained tools that run on a locked-down Windows endpoint, with nothing to install.** Each tool is a zip. Unzip it, double-click one file, and it runs in your own user context on Windows PowerShell 5.1 and the Chrome-engine browser already on the machine. No admin, no installs, no Python, no Node, no git.exe. Servers listen on loopback only.

## The real promise: any tool you want, with authority to operate

Edge-Ops is not sixteen apps. It is a **standard plus a gate plus a release path**, so that any tool, built to the standard, can be fielded under one authorization boundary instead of one ATO per tool. (Name for voice and video: say "Edge Ops", two words. Spell-checkers keep turning "Edge-Ops" into "E-ops", so put the name on screen as an overlay.)

What backs the promise today (from the repos):
- **The standard:** `CONVENTIONS.md`, `STANDARDS.md`, the port registry, a shared `TechStack`.
- **The gate:** the Fleet Gate CI fails non-loopback listeners, binaries, large files, military endpoints and sensitive markings on pull requests, and runs gitleaks.
- **The release path:** hash-pinned zips verified by `Verify-FleetSnapshot.ps1`, failing closed.
- **Proof it runs:** the team reports successful runs and working CAC processes on Nautilus devices.

What the repos say is **not** true yet. The Fleet Readiness and ATO Feasibility Assessment (`fleethacker-comms-data-crucible/docs/reports/fleet-ato-feasibility-assessment-2026-11-03.md`) finds:
- **There is no ATO.** No repo holds an authorization package, there is no sponsor, and no repo tracks an SBOM. Pitch the ATO as the ask, not a fact.
- **17 of 31 repos compile C# at launch with `Add-Type`,** and our own `STANDARDS.md` mandates `-ExecutionPolicy Bypass`. The report says both would fail on an endpoint that enforces Constrained Language Mode or AllSigned, and that the standard itself must change first.
- The recommended path is a **suite-level boundary** (one ATO for the pattern, not per tool), starting with a small first wave inside a sponsor's enclave, plus one ISSM-supervised test on each baseline.

So the honest claim is: **"Build a tool to the Edge Ops standard and it rides one authorization. We have the standard, the gate and the release path. We need a sponsor and an ISSM to turn it into an ATO."** That is a strong ask for Speed to Fleet and Scalability. Saying "we already have authority to operate" would be false and a single question from a judge would break it.

## The problem (this is the heart of it)

We are software developers on the Nautilus endpoint, and the endpoint has no development environment. We can't install Python. We can't install Git. We can't run the tools that infrastructure-as-code and data work depend on. The machine we're told to build on is the machine that won't let us build.

Edge-Ops is the answer: if you can open PowerShell and a browser, you can ship.

## How a tool gets to the endpoint

Release a repo, get a zip, run it. Per the conventions, each tool publishes `ToolName-vX.Y.Z.zip` as a GitHub Release asset with a SHA-256. A fleet snapshot manifest pins one tested set of zips, and `Verify-FleetSnapshot.ps1` checks a folder of downloads against it and fails closed (exit 1 means run nothing). The edge-ops catalog page lists every tool with its launcher, port and badges.

## Pitch (about 60 s spoken)

> We're software developers. On the Nautilus endpoint, we can't install Python. We can't install Git. We can't run Terraform. We can't do the job we were hired for.
>
> So we stopped asking for a development environment and built one out of what's already allowed.
>
> Edge-Ops is a suite of tools. Each one is a zip. Unzip it, double-click one file, and it runs: no admin rights, no install, no network, nothing leaving the machine.
>
> Here is what that gives a developer on a locked-down box. Gangplank gets you into a repository without git. Halyard keeps the backlog honest. Semaphore builds dashboards from a plain-English brief. Fairlead and Windlass give you a language model on the machine itself. Eight Bells turns a watch log into an evidence-linked turnover. Sixteen tools so far, on one pattern, one port registry, one catalog.
>
> The pattern is the product. A seventeenth tool is an afternoon of work, not an acquisition cycle.

## Skit v3: "Not Recognized" (about 45 s, one actor plus one visitor)

One set: a plain desk, one monitor, a terminal window.

| Time | Shot | Line |
|---|---|---|
| 0:00 | Close on a terminal. Cursor blinking. DEV types `python --version`. | Text on screen: `'python' is not recognized as an internal or external command.` |
| 0:05 | DEV types `git clone`. Then `terraform init`. Each fails. A dialog: "Access denied." | DEV (flat, to camera): "I write infrastructure as code." |
| 0:14 | DEV pushes back from the desk. A COLLEAGUE leans in the doorway. | COLLEAGUE: "You're a software developer." DEV: "On paper." |
| 0:19 | COLLEAGUE puts a zip on the desktop. | COLLEAGUE: "Try this." |
| 0:23 | Unzip. One double-click on `Launch-*.bat`. Browser opens a tool. | DEV: "What did you install?" COLLEAGUE: "Nothing." |
| 0:30 | Cut to the Edge-Ops catalog page: cards for every tool, badges "No admin", "Loopback only". | COLLEAGUE: "That's the whole suite." |
| 0:38 | DEV scrolls, quietly impressed. | DEV: "Send me the link." |
| 0:42 | Push into the screen: hand-off to the live demo. | |

Why it works: one actor can carry it, there is no matching-views problem (one desk, one screen), and the terminal errors are real, not generated text. Render the error text as an on-screen overlay, not as generated video.

## Demo (about 90 s)

Open the Edge-Ops catalog (`index.html`, works from disk), use the filter box, show a card's badges, double-click a launcher, and run one flow. Pick the one flow with the audience in mind:

- Developer-facing: **Gangplank** (get a repo with no git) or **Halyard** (backlog fixes shown as before/after diffs, written to a sandbox only after approval).
- Deckplate-facing: **Eight Bells** (every open turnover item points to the exact log line).

Recommendation: show the catalog first (60 s spec exists), then one tool each of those two kinds if time allows. Windlass and Fairlead get one line in the montage; neither is a strong live demo.

## Rubric alignment

| Criterion | Weight | Evidence |
|---|---|---|
| Deckplate impact | 30% | Eight Bells; the lost hours of a developer who can't develop |
| Speed to Fleet | 20% | Zip, double-click, no admin, no network; hash-verified snapshot |
| Scalability | 20% | One pattern, 16 tools, port registry, config-driven |
| Barrier removal | 15% | Works on whitelisted, no-install endpoints; the friction log |
| Judges' discretion | 15% | Live demo, human approval points, loopback-only |

## Honest gaps, so no judge catches us first

1. **The loader isn't built.** `fleet-loader` only verifies assets (issue 34). It doesn't download or run anything. Today you fetch a zip and double-click it. Say "release a zip, verify, run", not "fleet deploys itself".
2. **Maturity.** Of 17 catalog entries: 5 unreleased, 4 prototype, 3 beta, 1 preview, 1 sandbox, and 3 at v0.1 to v0.3. Say "working prototypes."
3. **IaC claim.** Terraform and similar tools are `.exe` files, so the endpoint can't run them. Don't claim we replace them. What we offer is a place to write, review and track the work with approved tooling.
4. **Port column drift.** `catalog.json` shows 8765 for three tools; `PORTS.md` gives each its own block. Show the registry if asked.
5. **Disclosure.** Rules require separating pre-event work from event work and disclosing tools and models.
6. **IT.** A suite that runs unapproved code in user context is exactly what endpoint owners worry about. Lead with the controls (no admin, loopback only, human approval points, audit log, hash-verified releases) and name a sponsor.

## Next

Pick the skit (v2 "The Request" or v3 "Not Recognized"). I'll then write the Renoise shot list and prompts, and the exact click path for the catalog demo.
