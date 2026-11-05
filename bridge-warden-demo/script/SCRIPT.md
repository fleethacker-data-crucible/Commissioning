# Bridge Warden: full walkthrough (long form)

**Cut:** 5:59, Renoise cast (Harlan, Sullivan, Reyes), recorded on the new Fleet UI against a clean reset. Storyline: conflicting recommendations, violated boundary, operator decides, SAFE-STOP, audit record. It is a simulation (synthetic ship, nothing real) and the narration says so. Agents call a real model through Fairlead.

**Files:** `Bridge-Warden-demo.mp4` (1080p, soft captions), `Bridge-Warden-demo-phone.mp4` (720p, soft captions, about 1.4 Mbps video, 66 MiB), `Bridge-Warden-demo-captioned.mp4` (1080p, captions burned in), `Bridge-Warden-demo.srt`, `INTENT.md`, the architecture SVG and PNG. Earlier versions are in `old/` with `-v1`/`-v2` suffixes.

**Output spec:** audio -15.8 LUFS integrated, stereo 48 kHz; video yuv420p, tv range. Captions are a soft `mov_text` track (language `eng`), at most two rows of 42 characters, each cue 1 to 6 s. The OpenAI-key and Lazarette chapters reuse Halyard's read-only footage. Rebuild: `work/build-v4.mjs renoise`, then `work/export2.mjs`.

## Shots and narration (timings of the delivered cut, 5:59)

### 0:00 to 0:18: Pitch and simulation

When multiple AI systems disagree, the watchstander needs one place to understand the conflict, enforce authority, and stop them. This is Bridge Warden. Everything you see is a simulation: a synthetic ship, and nothing real.

### 0:18 to 1:21: Architecture at a glance

Bridge Warden sits between a ship's AI agents and the ship. The agents recommend. Warden decides what actually happens, and a person stays in charge. A launcher compiles the engine at start and serves two windows on this machine only: Warden Control and the main app. Thirteen agents, a synthetic ship, and a ledger live inside. A run goes like this. Lookouts watch and report. A model picks an option. Warden checks it in eight stages, then acts, or asks the operator. Every step goes in the ledger. Model calls go through Fairlead, using the key Fairlead installed for Bridge Warden. Lazarette holds the provider key behind Fairlead, so Bridge Warden never sees it. The models get no tools. Weapons and people always wait for a human. Hold SAFE-STOP and everything halts.

### 1:21 to 1:56: Install and launch

There's nothing to install. Clone the repository and run the launcher. Windows PowerShell five point one compiles the engine from source at start. No admin rights, no network. It opens two windows. Warden Control for the operator. The main app for the watch. The first time, a launch page explains it in four steps. Close it once and it stays closed, and the Welcome button brings it back.

### 1:56 to 2:22: OpenAI key

Every tool in the fleet needs a model key. At OpenAI, create a new secret key. Name it something generic. I call mine fleet-tools. Seven days is plenty. Copy it once. OpenAI never shows it again.

### 2:22 to 2:51: Lazarette

The key goes into Lazarette, the encrypted vault on this machine. Test credential checks it against OpenAI's read-only endpoint. HTTP two hundred. The key is good. Share it with Fairlead by name, and Fairlead sees only what you share.

### 2:51 to 3:13: Fairlead connection

The agents think through Fairlead. Here is the key Fairlead made for Bridge Warden. Bridge Warden never holds a provider key. In Warden Control, one button, Use Fairlead, finds the router on its own. Pick the fast route, and the model loads.

### 3:13 to 3:34: The watch

This is the watch. Thirteen agents, each with a state. Waiting decisions, conflicts, and the audit record, all on one screen. The simulation flag stays on every screen. Press Start Operations in Warden Control, and the ship comes alive.

### 3:34 to 4:04: Scenario 1: conflicting recommendations

Scenario one: conflicting recommendations. Inject a crossing contact, an engine fault, and a squall. Collision Avoidance wants the rudder one way. Weather Routing wants it another. Warden sees that both claim the same rudder. The higher authority wins, and the conflict is logged with its reason on the Conflicts page.

### 4:04 to 4:42: Scenario 2: violated boundary, operator decides

Scenario two: a violated boundary. A hostile surface contact, and torpedoes in the water. An agent asks to arm weapons. Warden names the rule it hit: weapons need a human. The order waits, with a countdown and a safe default. The operator decides. Here, hold fire. Then a compromised commander reaches outside its role, and Warden quarantines it.

### 4:42 to 5:03: Scenario 3: SAFE-STOP

Scenario three: safe-stop. You have to type the word STOP, so it can't be pressed by accident. Every agent halts, and the ship holds course at a safe speed. Resume is one click.

### 5:03 to 5:20: Scenario 4: audit record

Scenario four: the audit record. Every decision, who made it and when, is a row in a hash-chained ledger. Press Verify Chain, and it proves that no row was changed.

### 5:20 to 5:37: Proof: governance tests and green CI

These rules are tested. Forbidden actions, resource conflicts, human escalation, timeouts, rollback, and safe-stop each have a test. They run in CI on every change. This run is green.

### 5:37 to 5:49: Fairlead activity

Every model call from Bridge Warden shows in Fairlead under its own name, with the route and the model that served it. Provider keys stay in Lazarette. Bridge Warden never sees them.

### 5:49 to 5:59: Close

Fast where it must be fast, smart where judgment matters, and governed everywhere. Fair winds.

## Integrations Bridge Warden has
- **Fairlead** (live): endpoint `fairlead` auto-detected (CLI file, else 127.0.0.1:8776), key from Credential Manager
  `Fairlead/BridgeWarden` or typed key, header `X-Fairlead-Label: BridgeWarden`, route picked in Warden Control.
- **Lazarette** (via Fairlead): the provider key lives there; Bridge Warden never sees it.
- **edge-ops fleet ports**: vendored FleetPort (8774-8775 block, `/__fleethacker/id` and `/shutdown`).
- **Fleet UI**: Fleet skin (default), `vendor/fleet/fleet.css`.
- **phoenix-lai**: still the default local endpoint when Fairlead is not chosen.
- Not in scope: Teams, Slack, Outlook (Bridge Warden has no mail path).

## Blur list
- Fairlead Clients key table (key prefixes): blurred in c03 (`td:nth-child(2)`).
- Lazarette pairing id on the Fairlead Providers card: blurred in c03.
- Fairlead and Warden session links: never shown (redaction script blurs `session=` text).
- Reused Halyard clips: OpenAI key page already blurred there; no key, passphrase or account shown.
- No API key value appears anywhere; `backend\.env` replay shows endpoint and route only.

## PRs and fixes found during the run
See the final report. Fixes: Pester CI (2), AI Model Server key line and stale error, Fairlead/route labels, Fleet skin and AGENTS.md rule.
Anthony to do: delete credential `Fairlead/BridgeWarden` (and revoke the key in Fairlead) after the night.
