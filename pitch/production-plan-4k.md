# Production plan: gripping opening, 4K, coins, AI-voiced demos

Builds on `opening-scene-v2-pull-up-edge-ops.md`. Keeps the Sullivan cut (A3). Nothing below was rendered here: I have no Renoise access in this session, so every generation step is yours to run, and credit costs are from your own notes, not a price list.

## 1. The scene, beat by beat (about 38 s)

| Time | Beat | Keep / change |
|---|---|---|
| 0:00 to 0:09 | North wall, calm, thump, lights go red, gong alarm, "Man battle stations." Captain: "Report." | Keep clip A. |
| 0:09 to 0:14 | Sullivan at the helm, gripping the joystick. | Keep A3 (task 413731). |
| 0:14 to 0:22 | DELGADO: "Captain! We've lost the uplink. No internet!" | Keep the B v2 line. |
| 0:22 to 0:28 | Captain, close-up, one second of silence, then deadpan: "Then we work with what's aboard. Open Edge Ops." | **Re-generate** this shot. |
| 0:28 to 0:33 | DELGADO, hands on the console: "Aye, Captain! Pulling up Edge Ops now!" | New audio, clipped in over C. |
| 0:33 to 0:38 | Zoom into the monitor, which fills the frame with the Edge Ops catalog. The tour voice starts. | Swap the screen picture. |

To make it grip rather than just play: hold on the Captain's face for a beat before he speaks, keep the red light and the alarm bed under his line, and cut on the sound of DELGADO's keystroke.

Unverified Navy terms still need a submariner (see `notes/open-questions.md`). "Aye, Captain" is standard, but "Open Edge Ops" is not a real order; that is fine, it is the joke.

## 2. 4K: what is and is not possible

The generated clips are 480p. Scaling 480p to 3840x2160 with ffmpeg only makes it bigger and softer: it adds no detail, and the notes already say the room "looks soft when zoomed."

Options, best first:
1. **Re-generate the keepers at the highest resolution Renoise offers**, from the same reference frames and the same room sheet (material 394090 to 394093 and the red walls). Check the price per clip before you commit. Your balance at the last check was about 6,097 credits.
2. **Use a Renoise upscale or enhance tool**, if it has one, on the keepers. Check a sample on a face before you run all of them.
3. **Deliver 1080p and let the player upscale.** Lowest risk if credits run short.

Whatever you pick:
- The monitor zoom uses hard-coded numbers from a 854x480 plate (monitor at x 391 to 592, y 133 to 243). Re-run `find_quad.py` on the new plate and update `zoom_composite.py`, or the zoom will land in the wrong place.
- Render the zoom from the catalog page captured at 4K, not a small screenshot.
- Re-use the Sullivan cut only if it matches the new resolution's look. If A3 is regenerated, start from the same frame (material 394295) so the seat and angle stay.

## 3. Coins

Assets: `dumping-grounds/dpae-so-data-crucible-coin-front-v2.png` (1377x1400, transparent), `...-back-v2.png` (1334x1337, transparent), plus `fleethacker_coin_back.png` and `data_crucible_coin_front.png` (887 px).

Three uses, from safest to most effort:
1. **Title and end card:** the coin spins and settles under "Edge Ops. Deploy in a click." Composite the real art in the edit, never generate it.
2. **Prop on the console:** the Captain's coin sits beside the keyboard. Insert it as a composited still so the lettering stays correct.
3. **The Captain's close-up:** a coin turned over in his fingers during the silent beat. This is the most generation-risky shot: video models garble small text and metal. Keep the real coin art as a composited overlay on a plain-colour disc, using the same trick as the monitor.

Cautions:
- The coin art is about 1,400 px. Fine as a third of a 4K frame; it will look soft as a full-screen close-up.
- "DPAE" on the coin may be a government organization's mark. Confirm you have permission to use it in a public video, and keep the line in the Commissioning README: this is a team project, not a US Navy product, and is not endorsed by the Navy.

## 4. AI voiceovers for the demos (replaces TalkForge)

I added `Signal-Gun/tools/render/import-voice.mjs` and a "Using an AI voice" section in `docs/RENDER.md`. The flow per tool:
1. Render with `-Stage plan`.
2. `import-voice.mjs --export` writes the narration for each scene.
3. Generate one clip per scene in the same voice engine as the film (Seed Audio, in one multi-speaker or single-speaker pass), and name each clip `<scene id>.wav` or `.mp3`.
4. `import-voice.mjs --clips <folder>` converts the clips and writes `timing.json`.
5. Render `-Stage capture`, then `-Stage compose`. TalkForge is skipped.

I tested the import with synthetic clips (mp3 and wav inputs, correct conversion and timing, and a refusal when a clip is missing). I did not run a full demo render: it needs Node, Playwright, ffmpeg and a checkout of each tool on your machine.

Choose one narrator for all demos, so the 16 videos feel like one product. The earlier plan for a stern, clipped female voice for Windlass would suit that. Check "Windlass" (wind-luhs) and "Fairlead" (fehr-leed) on a short test clip before generating every scene. The renderer works at 22.05 kHz, which is fine for speech but gives up some of an AI voice's top end.

## 5. Order of work

1. Lock the lines and the voice (this page).
2. Re-generate the Captain shot and DELGADO's audio at the target resolution. Re-run `find_quad.py`.
3. Capture the Edge Ops catalog at 4K for the monitor and the tour.
4. Render the two demos you most want first with the AI voice; let the others say "not rendered yet".
5. Record the tour voiceover and set the cue times in `interactive/index.html`.
6. Cut it all together: scene, tour, coin card.
7. Submariner review of the dialogue and uniforms.
