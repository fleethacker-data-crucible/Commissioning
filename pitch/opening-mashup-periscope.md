# Opening: Night Watch + The Desk, into The Boat, then Periscope

Your pick: C + B leading into A, then the dashboard. Presentation name: **Periscope** (repo and catalog stay `edge-ops`). Spoken and on screen it is "Periscope", never "Edge Ops", so nobody mishears it.

## The arc (about 60 s before the dashboard)

| Part | Time | What the audience sees and hears | Job it does |
|---|---|---|---|
| **C. Night Watch** | 0:00 to 0:10 | A ship's office at 0200. One tired Sailor, a paper watch log, a clock. Voice, calm: "Every watch, the same hunt through the same paper." | The deckplate burden (30% of the score) |
| **B. The Desk** | 0:10 to 0:24 | A developer on a locked-down endpoint types `python --version`, `git clone`, `terraform init`. Each fails: "not recognized," "Access denied." Voice, deadpan: "And the people who could fix it can't build on this machine." | The barrier (15%): developers with no development environment |
| **The turn** | 0:24 to 0:26 | Hold on the failed terminal. Voice: "Now imagine it's not a quiet night." Hard cut. | Raises the stakes |
| **A. The Boat** | 0:26 to 1:00 | Blast, red lights, alarm, "Report." Sullivan: "Helm's answering." DELGADO: "We've lost the uplink." The Captain walks to DELGADO: "Then we work with what's aboard. Raise Periscope." DELGADO: "Aye, Captain! Raising Periscope!" | The payoff: it works when everything else is gone |
| **Dashboard** | 1:00 | The zoom lands on Periscope page (`overlay/periscope-screen-real.png`), then the tour starts | Hand-off to the product |

Trim if the slot is short: C to 6 s, B to 10 s, and cut the Sullivan beat. That gives about 45 s.

Why this order: C and B both show a real person blocked, so by the time the submarine goes dark the audience already wants the answer. A is the hard cut that makes it gripping, and it ends in the product, not in an explanation.

## Variations of the same arc

- **Quieter:** drop A and let B end on Periscope opening, with a human line: "Send me the link." Use this if the reshoot slips.
- **Longer:** after C, show the paper log shrinking to a single screen as a one-second preview of Eight Bells. Only do this if Eight Bells is among your chosen demos.

## Overlay and branding for "Periscope"

The repo and the real catalog page keep the name Edge-Ops, so the film shows the **real page under an overlay** (`overlay/periscope-overlay.js`, see `overlay/README.md`):
- **The overlay:** re-skins the real catalog page at display time. Nothing in the edge-ops repo changes.
- **The judges' interactive page:** `interactive/index.html` is its own page and already reads **PERISCOPE**, with the line "Launch, deliver and run tools on the endpoint you already have."
- **The screen still for the zoom:** `overlay/periscope-screen-real.png` (3840x2160, dark theme). Use it as the `SCREEN` picture behind the flat-colour monitor. It has the title, tagline and the first cards.
- **Title card (add in the edit, not generated):** "PERISCOPE" in the same brass letterspaced type, with "Launch. Deliver. Run." beneath, for 2 s before the zoom. Add a lower-third "PERISCOPE" the first time the Captain says it.
- **Voice:** always "Periscope". The dialogue and the tour voiceover in the scripts have been updated.
- **Keep off screen:** the words "Edge-Ops" and "Edge Ops". The repo link goes in the submission form, not in the video.

## Lines changed everywhere

| Old | New |
|---|---|
| "Open Edge Ops." | "Raise Periscope." |
| "Aye, Captain! Pulling up Edge Ops now!" | "Aye, Captain! Raising Periscope!" |
| "Edge Ops is a home for tools." | "Periscope is a home for tools." |
| "All of them hosted inside Edge Ops. ..." | "All of them hosted in Periscope. ..." |
| Monitor screen, DELGADO's old audio | Periscope screen still; "Aye, Captain! Raising Periscope!" |

Some descriptive text in the older scripts still says "Edge Ops" as the product (headings, notes, the file names). That is the repo name, and it does not affect anything spoken or shown.

## Still to do for this arc

1. C and B need shooting. They have no reference frames yet. B is cheap: screen recording plus a desk; the terminal errors are on-screen overlays, not generated text.
2. Reshoot the Captain's walk (A) as described in `full-script.md`.
3. Record the narration for C and B in the same voice as the tour.
4. Check "Periscope" is clear in the voice take; if a voice ever says "the Doc," re-record.

## Notes on the name Periscope

- **Spelling:** Periscope (P-E-R-I-S-C-O-P-E). Spoken: PER-ih-scope.
- **The in-story line:** "Raise Periscope" borrows a real submarine order, so the joke is that the Captain raises a different kind of periscope. Whether that order is worded correctly aboard a boat is unverified; add it to the submariner review list. Your own notes say a Virginia-class control room has no periscope through the hull (it uses photonics masts), so a viewer who knows boats may smile at it.
- **UI:** the page header now carries a small scope reticle beside the word PERISCOPE. Keep the reticle on the zoom still and on the title card, so the name reads as a mark, not just a word.
- **Collision check, not done:** "Periscope" has been used by other software products. I have not searched trademarks or existing products. Do that before you print it on anything public.
- **Repo name:** still `edge-ops`. Only the presentation name changed.
