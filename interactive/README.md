# Interactive Edge Ops page

`index.html` is one self-contained page (no external URLs, works from disk or GitHub Pages). It plays the opening scene, then shows the 16 launchable Edge Ops tools as cards. "Watch demo" opens that tool's video in a dialog.

## Files it expects (next to index.html)

| File | What |
|---|---|
| `opening.mp4`, `opening-poster.jpg` | The opening scene (ends on the Edge Ops catalog screen) |
| `demos/<tool-id>.mp4` | One 60-90 s demo per tool, from Signal-Gun (`tools\render\render.ps1`) |
| `demos/<tool-id>.vtt` | Captions (convert the SRT Signal-Gun writes: add `WEBVTT` header, commas to dots) |

`<tool-id>` is the `id` in edge-ops `catalog.json`: halyard, lazarette, gangplank, packetrat, shellback, snapshackle, bowerbird, eight-bells, capstan, scrimshaw, semaphore, fairlead, windlass, talkforge, data-noodler, phoenix-lai. A missing video shows "This demo has not been rendered yet" instead of a broken player.

## Notes
- The tool list is embedded from `edge-ops/catalog.json` (fetch fails from disk). Re-run the embed when the catalog changes.
- No port numbers are shown: `catalog.json` and `PORTS.md` disagree. Use `PORTS.md` if you add them.
- The Fleet Gate fails large files and binaries on pull requests, so keep the MP4s out of the repo and host them as Release assets or on Pages from a separate branch. Check with whoever owns the gate.
