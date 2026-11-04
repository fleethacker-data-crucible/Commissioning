# Opening: Night Watch + The Desk, into The Boat, then Scope

Your pick: C + B leading into A, then the dashboard. Presentation name: **Scope** (repo and catalog stay `edge-ops`). Spoken and on screen it is "Scope", never "Edge Ops", so nobody mishears it.

## The arc (about 60 s before the dashboard)

| Part | Time | What the audience sees and hears | Job it does |
|---|---|---|---|
| **C. Night Watch** | 0:00 to 0:10 | A carrier workcenter at 0200. REYES, a crusty second class, tired but watchful, a paper watch log, a clock, a distant jet whine. Voice, calm: "Every watch, the same hunt through the same paper." | The deckplate burden (30% of the score) |
| **B. The Desk** | 0:10 to 0:24 | Morgan, a civilian developer in a shore office the next morning, types `python --version`, `git clone`, `terraform init`. Each fails: "not recognized," "Access denied." Voice, deadpan: "And the people who could fix it can't build on this machine." | The barrier (15%): developers with no development environment |
| **The turn** | 0:24 to 0:26 | Hold on the clock insert; the tick speeds from about 60 to 100 beats a minute. Voice: "Now imagine it's not a quiet night." Hard cut to the calm control room, tick still at 100, then the thump, the red alert and the gong take over the same beat. | Raises the stakes |
| **A. The Boat** | 0:26 to 1:00 | The thump and the red alert land on the clock's beat. Alarm, "Report." Sullivan: "Helm's answering." DELGADO: "We've lost the uplink." The Captain walks to DELGADO: "Then we work with what's aboard. Raise Periscope." DELGADO: "Aye, Captain! Periscope is up. SCOPE online!" | The payoff: it works when everything else is gone |
| **Dashboard** | 1:00 | The zoom lands on Scope page (`overlay/scope-screen-real.png`), then the tour starts | Hand-off to the product |

Trim if the slot is short: C to 6 s, B to 10 s, and cut the Sullivan beat. That gives about 45 s.

Why this order: C and B both show a real person blocked, so by the time the submarine goes dark the audience already wants the answer. A is the hard cut that makes it gripping, and it ends in the product, not in an explanation.

## Variations of the same arc

- **Quieter:** drop A and let B end on Scope opening, with a human line: "Send me the link." Use this if the reshoot slips.
- **Longer:** after C, show the paper log shrinking to a single screen as a one-second preview of Eight Bells. Only do this if Eight Bells is among your chosen demos.

## Overlay and branding for "Scope"

The repo and the real catalog page keep the name Edge-Ops, so the film shows the **real page under an overlay** (`overlay/scope-overlay.js`, see `overlay/README.md`):
- **The overlay:** re-skins the real catalog page at display time. Nothing in the edge-ops repo changes.
- **The judges' interactive page:** `interactive/index.html` is its own page and already reads **SCOPE**, with the line "Launch, deliver and run tools on the endpoint you already have."
- **The screen still for the zoom:** `overlay/scope-screen-real.png` (3840x2160, dark theme). Use it as the `SCREEN` picture behind the flat-colour monitor. It has the title, tagline and the first cards.
- **Title card (add in the edit, not generated):** "SCOPE" in the same brass letterspaced type, with "Launch. Deliver. Run." beneath, for 2 s before the zoom. Add a lower-third "SCOPE" the first time the Captain says it.
- **Voice:** always "Scope". The dialogue and the tour voiceover in the scripts have been updated.
- **Keep off screen:** the words "Edge-Ops" and "Edge Ops". The repo link goes in the submission form, not in the video.

## Lines changed everywhere

| Old | New |
|---|---|
| "Open Edge Ops." | "Raise Periscope." |
| "Aye, Captain! Pulling up Edge Ops now!" | "Aye, Captain! Periscope is up. SCOPE online!" |
| "Edge Ops is a home for tools." | "SCOPE is a home for tools. This is Periscope." |
| "All of them hosted inside Edge Ops. ..." | "All of them hosted in SCOPE. ..." |
| Monitor screen, DELGADO's old audio | Scope screen still; "Aye, Captain! Periscope is up. SCOPE online!" |

Some descriptive text in the older scripts still says "Edge Ops" as the product (headings, notes, the file names). That is the repo name, and it does not affect anything spoken or shown.

## Still to do for this arc

1. C and B need shooting. They have no reference frames yet. B is cheap: screen recording plus a desk; the terminal errors are on-screen overlays, not generated text.
2. Reshoot the Captain's walk (A) as described in `full-script.md`.
3. Record the narration for C and B in the same voice as the tour.
4. Check "Scope" is clear in the voice take; if a voice ever says "the Doc," re-record.

## Notes on the names: SCOPE and Periscope

- **SCOPE** is the system: **S**hip **C**ontinuity **O**f o**P**erations **E**nvironment. Say "scope". "Continuity of operations" is a real DoD planning term (COOP), which fits the disconnected-ship story. The P comes from the second letter of "operations", so be ready for a judge to notice.
- **Periscope** is the title of the dashboard: the screen you raise to look into SCOPE. That is how the two names fit together, and it is how to say it if anyone asks: "SCOPE is the environment, Periscope is the window into it."
- **In the film:** the Captain says "Raise Periscope." DELGADO: "Aye, Captain! Periscope is up. SCOPE online!" Raising the periscope is a real submarine order; whether the wording is right aboard a boat is unverified, so add it to the submariner review list. Your notes say a Virginia-class control room has no periscope through the hull (photonics masts), so a viewer who knows boats may smile.
- **On screen:** the heading reads PERISCOPE, with "SCOPE" and the acronym under it, the first letters in brass.
- **Voice scripts:** write "Periscope" and "scope" as words so an AI voice does not spell them out.
- **Repo name:** still `edge-ops`. Only the presentation names changed.
- **Collision check, not done:** both are common words used by other products; I have not searched trademarks.
