# Opening: Night Watch + The Desk, into The Boat, then Scope

Your pick: C + B leading into A, then the dashboard. Presentation name: **Scope** (repo and catalog stay `edge-ops`). Spoken and on screen it is "Scope", never "Edge Ops", so nobody mishears it.

## The arc (about 60 s before the dashboard)

| Part | Time | What the audience sees and hears | Job it does |
|---|---|---|---|
| **C. Night Watch** | 0:00 to 0:10 | A ship's office at 0200. One tired Sailor, a paper watch log, a clock. Voice, calm: "Every watch, the same hunt through the same paper." | The deckplate burden (30% of the score) |
| **B. The Desk** | 0:10 to 0:24 | A developer on a locked-down endpoint types `python --version`, `git clone`, `terraform init`. Each fails: "not recognized," "Access denied." Voice, deadpan: "And the people who could fix it can't build on this machine." | The barrier (15%): developers with no development environment |
| **The turn** | 0:24 to 0:26 | Hold on the failed terminal. Voice: "Now imagine it's not a quiet night." Hard cut. | Raises the stakes |
| **A. The Boat** | 0:26 to 1:00 | Blast, red lights, alarm, "Report." Sullivan: "Helm's answering." DELGADO: "We've lost the uplink." The Captain walks to DELGADO: "Then we work with what's aboard. Bring up Scope." DELGADO: "Aye, Captain! Scope is up!" | The payoff: it works when everything else is gone |
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
| "Open Edge Ops." | "Bring up Scope." |
| "Aye, Captain! Pulling up Edge Ops now!" | "Aye, Captain! Scope is up!" |
| "Edge Ops is a home for tools." | "Scope is a home for tools." |
| "All of them hosted inside Edge Ops. ..." | "All of them hosted in Scope. ..." |
| Monitor screen, DELGADO's old audio | Scope screen still; "Aye, Captain! Scope is up!" |

Some descriptive text in the older scripts still says "Edge Ops" as the product (headings, notes, the file names). That is the repo name, and it does not affect anything spoken or shown.

## Still to do for this arc

1. C and B need shooting. They have no reference frames yet. B is cheap: screen recording plus a desk; the terminal errors are on-screen overlays, not generated text.
2. Reshoot the Captain's walk (A) as described in `full-script.md`.
3. Record the narration for C and B in the same voice as the tour.
4. Check "Scope" is clear in the voice take; if a voice ever says "the Doc," re-record.

## Notes on the name SCOPE

- **Name:** SCOPE, spoken "scope". It stands for **S**hip **C**ontinuity **O**f o**P**erations **E**nvironment. The P comes from the second letter of "operations", so show the acronym with those letters highlighted (the overlay does) and be ready for a judge to notice. "Continuity of operations" is a real DoD planning term (COOP), which fits the disconnected-ship story.
- **In the film:** the Captain says "Bring up Scope." DELGADO answers "Scope is up!" It echoes the real submarine order to raise the scope, so the name does double duty. Whether that wording is right aboard a boat is unverified; add it to the submariner review list.
- **Voice scripts:** write it "Scope" in anything an AI voice reads, so it does not spell out S-C-O-P-E. On screen it is SCOPE.
- **Repo name:** still `edge-ops`. Only the presentation name changed.
- **Collision check, not done:** "scope" is a common word and the name of other products. I have not searched trademarks or existing products.
