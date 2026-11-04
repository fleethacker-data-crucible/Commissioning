# Opening scene v2: "Pull up Edge Ops"

Keep the submarine cold open (already shot, 36.8 s). Change only the last line and the hand-off. After the zoom, the video ends on the Edge Ops catalog and the viewer takes over: every tool is a card, and each card plays its own demo (`interactive/index.html`). Judges can watch any demo in any order.

## Changes to the existing cut

| Where | Now | New |
|---|---|---|
| Captain's order (clip B v2) | "Then we get our inference local. Rig for ultra-quiet. Windlass and Fairlead. Bring them online now." | "Then we use what we've got. Pull up Edge Ops." |
| DELGADO's last line (clip C v3, audio clipped in separately) | "Windlass online! Fairlead online!" | "Edge Ops online!" |
| Zoom target (the flat-colour monitor) | Fairlead screenshot | Screenshot of the Edge Ops catalog page (`interactive/index.html#tools`) |
| End of video | Hand-off to a demo | Freeze on the catalog; the page unhides the cards |

Why the old line is a problem: the mispronounced "Windlass and Fairlead" in B v2 was already a known flaw, and "Edge Ops" is easy to say. Say it as two words, or the generator may read "E-ops".

## Cost and method

- Re-generating a short shot from a frame is the cheap path (about 80 credits for 5 s, per `notes/open-questions.md`). Editing a finished clip costs about 240 credits for 4 s. Re-generate B from a frame just before the Captain's line, not edit it.
- DELGADO's new line is clipped in as separate audio where no lips are visible, as before.
- `zoom_composite.py` finds the monitor colour and zooms until the screen fills the frame. Swap in the catalog screenshot as the picture behind the monitor. Nothing else in the edit changes.
- Render the final at higher resolution only once the cut is locked. The clips are 480p.

## Why this works

- It uses footage you already paid for.
- The "Pull up Edge Ops" line makes the product the hero, not one tool.
- It turns a passive video into a self-serve demo for judges who walk the stations, which is the Signal-Gun plan (per-tool demos for stations, a polished video for the top five).

## What has to exist before this ships

1. **Per-tool demo videos.** None are rendered yet. Signal-Gun can generate 60 to 90 seconds per tool from the DEMO.md specs (needs Node, ffmpeg, Playwright and TalkForge on a dev machine). Start with the two you most want to show, and let the rest say "not rendered yet" until they are.
2. **Hosting.** The submission form wants a Demo URL. A single page with relative video paths works on GitHub Pages or any static host. Confirm repo visibility rules first: repos are marked internal-only and visibility changes need Jeremy's yes.
3. **Honesty line on the page.** The footer already says demos use synthetic data and the tools are prototypes. Keep it.

## The tour: voiceover and slow scroll

When the zoom lands on the catalog, an AI voice starts and the page scrolls slowly down through every card, so the audience sees how many tools there are. Five tools get a quick spoken line and a highlight ring. Every card carries a one-line tagline under its name, so even the unnamed ones read at a glance.

Voiceover (about 35 s, one calm voice, no hype):

> Edge Ops is a home for tools.
> Halyard tidies a backlog, with your approval.
> Eight Bells turns a watch log into a turnover.
> Semaphore builds dashboards from plain English.
> Fairlead puts every AI model behind one address.
> Windlass runs giant models on an ordinary PC.
> All of them hosted inside Edge Ops. That's five of sixteen. No admin. No install.

Notes:
- The five tools are in the order their cards appear on the page, so the scroll only moves down. If you change the five, keep them in page order or the page will scroll back up.
- Say "Edge Ops" as two words. Pronounce Windlass "wind-luhs" and Fairlead "fehr-leed". Record the voice in one pass and save it as `interactive/intro-vo.mp3`.
- Timings are in the `TOUR` list at the top of the tour code in `index.html`. After you record, adjust each `t` to when the line starts. With an audio file the scroll follows the audio clock. Without one it runs on a timer and shows the same words in a caption bar, which also works for viewers with the sound off.
- Any click, scroll or key press stops the tour so a judge can take over. "Replay the tour" restarts it.
- To go straight to the tour for testing, open `index.html#tour`.
