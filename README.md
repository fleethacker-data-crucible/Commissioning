# Commissioning

The presentation videos for the FleetHacker hackathon: the pitch, the opening scene, the tool demos, the judges brief and the Long Turnover film. The opening scene opens in a submarine control room, shows the tools being brought online one at a time, and hands off to each tool's demo by zooming into a monitor.

**Status:** opening scene rough cut done (36.8 s, 720p, placeholder screenshots), pitch cut v6 done (1:40, 1080p), 16 tool demos recorded in the `*-demo/` folders. The Windlass voiceover for the opening scene and the next scene are not made yet (`scene02/` is still an unchanged copy of `intro/`).

## What is here

| Path | What it is |
|---|---|
| `intro/video/` | Rendered cuts of the opening scene. `opening-scene-rough-cut.mp4` is the current one. |
| `intro/script/opening-scene.md` | Shot list, final dialogue, how to say the tool names, and a draft Windlass voiceover. |
| `intro/prompts/` | Every prompt and setting sent to the generators, with task IDs and costs. `prompt-audit.md` is the first part, `prompt-audit-part2.md` the later fixes. |
| `assets.md` | Task and material IDs for the cast, the set, the voices and the clips, and which were kept or rejected. |
| `intro/edit/` | The ffmpeg and Python scripts that cut the clips together, clip in corrected audio and build the zoom into the monitor. |
| `intro/notes/open-questions.md` | What is unverified, what is still rough, lessons, and the plan for the next scene. |
| `scene02/` | Placeholder for the next scene. Currently an unchanged copy of `intro/`. |
| `pitch/` | The elevator pitch, cut v6 at 1080p, with its build scripts. See `pitch/README.md`. |
| `*-demo/` | One folder per tool demo (16: Bowerbird, Bridge Warden, Capstan, Eight Bells, Fairlead, Gangplank, Halyard, Lazarette Lite, Noodler, Packet Rat, Phoenix LAi, Scrimshaw, Semaphore, Shellback, SnapShackle, Windlass), each with `video/` (the demo, a phone cut and the `.srt`), `script/` (`INTENT.md`, `SCRIPT.md`) and `architecture/` (the diagram as SVG and PNG). |
| `judges-brief/` | The 23-slide infographic deck for the judges, with PowerPoint and PDF exports. See `judges-brief/README.md`. |
| `long-turnover/` | The Long Turnover proposal film (4:57), its subtitles, timeline, notes and edit sources. See `long-turnover/README.md`. |
| `audit/` | The demo video quality audit (`AUDIT-REPORT.md`) and its contact sheets. |

## How the opening scene was made

- **Picture and sound:** Seedance 2.5 for the clips, Seedream 5.0 Pro and GPT Image 2.5 for stills and character sheets, Seed Audio for the voices, all through Renoise.
- **Cast and set:** three fictional crew (Captain HARLAN, Chief SULLIVAN, radioman DELGADO) on a fictional boat, USS FLEETHACKER (SSN 999). Each has a four-panel character sheet, and the control room has a 2x2 north/east/south/west reference sheet plus red emergency-light versions.
- **Editing:** local ffmpeg and Python (Pillow). No generator credits are spent after the clips are rendered.
- **The zoom:** the monitor in the locked West-wall shot is a plain colour. Each frame, the code finds that colour, puts a screenshot or demo behind it, and zooms in until the screen fills the frame.

## Things to know

- The crew names, the boat name and the hull number are made up.
- Uniforms, ranks, insignia and the Navy terms in the dialogue come from public sources and a few photos, and are **not verified** by a submariner. See `intro/notes/open-questions.md`.
- This is a team project. It is not a US Navy product and is not endorsed by the Navy.
- The generated clips in the opening scene are 480p. Keepers should be re-run at a higher resolution once the cut is locked.

## Example Display Video in github pages
```html
<video width="320" height="240" controls loop="" muted="" autoplay="">
    <source src="https://github.com/fleethacker-data-crucible/Commissioning/raw/refs/heads/main/intro/video/opening-scene-rough-cut.mp4" />
</video>
```
