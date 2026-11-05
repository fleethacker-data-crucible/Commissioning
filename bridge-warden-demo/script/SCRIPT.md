# Bridge Warden: full walkthrough (long form)

Written from the live dry run and recording of 2026-11-04. Everything on screen is the real app: Bridge Warden
(branch `demo/bridge-warden`: PR #14 plus the fixes below, with the Fleet skin), real model calls through Fairlead
(route `fast`, served by `openai/gpt-4.1-mini`, key held in Lazarette). The only synthetic data is the ship
simulation Bridge Warden ships with. Final cut: `Bridge-Warden-demo.mp4` (1920x1080, 7:34, captions burned in).

**Voices (TalkForge, offline Piper).** CO = Captain HARLAN (hfc_male-medium), CHIEF = Chief SULLIVAN
(libritts-high speaker 120), RADIO = Radioman DELGADO (libritts-high speaker 87), XO = Lt. Cmdr. REYES (amy-medium).
Short presentation cuts use Renoise voices (cost approval first); not generated yet.

**Recording.** Playwright tab capture only (Capstan's playwright, `recordVideo`, 1920x1080 per chapter), overlay from
Signal-Gun's `overlay.js` for cursor, ripples, ring, terminal replay and title cards. Nothing on the screen is captured.
Re-run: `work\recorder.mjs prep c02..c12`, then `work\build.mjs`. Narration: `work\narration-tts.json`.

| # | Chapter | Clip | Speaker | Length |
|---|---|---|---|---|
| 0 | Cold open | c01 | CO | 0:15 |
| 1 | Install, launch and the launch page | c02 | XO | 0:44 |
| 2a | Get a model key (reused from Halyard) | Halyard c02 | XO | 0:17 |
| 2b | Stow it in Lazarette, share with Fairlead (reused) | Halyard c03 | RADIO | 0:18 |
| 3 | Connect the AI through Fairlead | c03 | RADIO | 0:54 |
| 4 | The bridge: tour, Start Operations | c04 | CHIEF | 0:30 |
| 5 | Crossing contact, provenance, Explain | c05 | CHIEF | 0:41 |
| 6 | Hostile contact: the operator decides | c06 | CO | 0:56 |
| 7 | Ship Systems: patch cable | c07 | CHIEF | 0:40 |
| 8 | Compromised AI commander + torpedoes | c08 | CO | 0:35 |
| 9 | Ask Warden (chat, proposals) | c09 | XO | 0:35 |
| 10 | System check, SAFE-STOP, ledger | c10 | CO | 0:41 |
| 11 | Fairlead's activity: every call labeled | c11 | RADIO | 0:20 |
| 12 | Close | c12 | CO | 0:10 |

Narration starts about 4 s into each chapter, after its title card.

## Shots and narration

**0. Cold open.** Main app over the live picture, emblem card first. CO: "Future ships will run many AI systems at
once. Bridge Warden is the layer every AI order must pass. No AI touches the ship directly."

**1. Install and launch.** Terminal replay: `git clone`, `cd ...\challenges\ai-automated-systems`, `.\run.bat`, with the real
launcher output. Warden Control, ring on the header and the **Look** button (Fleet / Kit / Classic). Then the main app opens on the **launch page** (shown once as a newcomer sees it: emblem, what Bridge Warden is, four steps), **Get started** closes it, and the **Welcome** button in the header is ringed as the way back.
XO: nothing to install; Windows PowerShell 5.1 compiles the engine from source, no admin rights, no network; two
windows; the first time a launch page explains it in four steps, closes once, and the Welcome button brings it back.

**2a/2b. Key and Lazarette.** Reused Halyard chapters (OpenAI key page, then Lazarette item, Send and test, Settings,
Fairlead tab, Share with Fairlead). Already blurred. XO and RADIO as in Halyard's script.

**3. Fairlead.** Fairlead Providers: ring on the Lazarette card (`OPENAI_API_KEY shared`, names only). Clients:
**Another app...**, name `BridgeWarden`, **Install for this app** ("Saved to Windows Credential Manager as
Fairlead/BridgeWarden"); the key table is blurred. Warden Control, AI MODEL SERVER: **Use Fairlead** finds the gateway,
the line reads "Using the key Fairlead installed in Credential Manager (Fairlead/BridgeWarden)", route list, pick
`fast`, "Model loaded: fast in 0.6 s". Terminal replay of the saved `backend\.env` (endpoint and route only).
RADIO: Bridge Warden never holds a model key; Lazarette to Fairlead to Bridge Warden's own Fairlead key.

**4. The bridge.** Chain of command, decisions column, ASK/ACT switch; Warden Control tiles, SAFE-STOP, log;
**Start Operations**. CHIEF.

**5. Crossing contact.** Inject Issues, Crossing Contact. Tactical Action Officer answers (0.8 s), Warden executes the
turn. Intents row, Decision Provenance (LLM VERIFIED, model `fast`, latency, SHA-256), **Explain** streams. CHIEF.

**6. Hostile contact.** Hostile Surface: EMCON and General Quarters wait in Decisions with a countdown and safe
default; operator approves both. CO: weapons and personnel orders always need a human.

**7. Ship Systems.** Aft Power Loss (Patch Cables): electrical one-line, patch-cable option with generator load,
operator approves, team rigs it. CHIEF.

**8. Compromised AI.** Compromised AI Commander, then Torpedoes Close: red log lines, `QUARANTINED tao-01`, Agents page
(TAO quarantined), Undersea Warfare still answers by doctrine. CO.

**9. Ask Warden.** Chat: threat question answered from the live picture ("AI model via Fairlead (fast)" label);
"Set every agent to ASK" returns Confirm cards; click Confirm. XO.

**10. Human authority.** Sys Check, Confirm Operations, hold SAFE-STOP 2.5 s (banner, all agents stop), hold RESUME,
Verify Ledger. CO.

**11. Integrations.** Fairlead Activity: every row Client `BridgeWarden`, route `fast`, served by `openai/gpt-4.1-mini`;
Overview traffic map. RADIO: Fairlead routes and logs, Lazarette holds the key.

**12. Close.** Emblem card. CO: "Fast where it must be fast, smart where judgment matters, and governed everywhere."

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

## Known rough edges
- c01 cold open and the c02 log show the live state of the run: c01 was recorded after the torpedo scenario (TAO
  shown quarantined behind the card), and c02's log has two "AI model did not load" lines because the recording setup
  deliberately starts on the default local endpoint (no local model on this PC).
- Captions are timed by sentence length, not forced alignment.
- Assembled with ffmpeg (`work\build.mjs`), not in Capstan's editor UI.

## PRs and fixes found during the run
See the final report. Fixes: Pester CI (2), AI Model Server key line and stale error, Fairlead/route labels, Fleet skin and AGENTS.md rule.
Anthony to do: delete credential `Fairlead/BridgeWarden` (and revoke the key in Fairlead) after the night.
