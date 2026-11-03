# Commissioning

The presentation video for the FleetHacker hackathon, if the team is chosen to present. It opens in a submarine control room, shows the tools being brought online one at a time, and hands off to each tool's demo by zooming into a monitor.

**Status:** opening scene rough cut done (36.8 s, 720p, placeholder screenshots). The Windlass voiceover, the demo recordings and the next scene are not made yet.

## What is here

| Path | What it is |
|---|---|
| `video/` | Rendered cuts. `opening-scene-rough-cut.mp4` is the current one. |
| `script/opening-scene.md` | Shot list, final dialogue, how to say the tool names, and a draft Windlass voiceover. |
| `prompts/` | Every prompt and setting sent to the generators, with task IDs and costs. `prompt-audit.md` is the first part, `prompt-audit-part2.md` the later fixes. |
| `assets.md` | Task and material IDs for the cast, the set, the voices and the clips, and which were kept or rejected. |
| `edit/` | The ffmpeg and Python scripts that cut the clips together, clip in corrected audio and build the zoom into the monitor. |
| `notes/open-questions.md` | What is unverified, what is still rough, lessons, and the plan for the next scene. |

## How it was made

- **Picture and sound:** Seedance 2.5 for the clips, Seedream 5.0 Pro and GPT Image 2.5 for stills and character sheets, Seed Audio for the voices, all through Renoise.
- **Cast and set:** three fictional crew (Captain HARLAN, Chief SULLIVAN, radioman DELGADO) on a fictional boat, USS FLEETHACKER (SSN 999). Each has a four-panel character sheet, and the control room has a 2x2 north/east/south/west reference sheet plus red emergency-light versions.
- **Editing:** local ffmpeg and Python (Pillow). No generator credits are spent after the clips are rendered.
- **The zoom:** the monitor in the locked West-wall shot is a plain colour. Each frame, the code finds that colour, puts a screenshot or demo behind it, and zooms in until the screen fills the frame.

## Things to know

- The crew names, the boat name and the hull number are made up.
- Uniforms, ranks, insignia and the Navy terms in the dialogue come from public sources and a few photos, and are **not verified** by a submariner. See `notes/open-questions.md`.
- This is a team project. It is not a US Navy product and is not endorsed by the Navy.
- The generated clips are 480p. Keepers should be re-run at a higher resolution once the cut is locked.

## Example Display Video in github pages
```html
<video width="320" height="240" controls loop="" muted="" autoplay="">
    <source src="https://github.com/fleethacker-data-crucible/Commissioning/raw/refs/heads/main/video/opening-scene-rough-cut.mp4" />
</video>
```
