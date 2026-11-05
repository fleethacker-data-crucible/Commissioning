# Pitch cut

The elevator pitch for the FleetHacker hackathon: a carrier night watch, a locked-down desk, the boat, the SCOPE catalog, the tools, and the ask.

**Status:** cut v6 of the pitch, 1080p. A 4K master is being prepared separately because it is too large for this repository.

## What the cut shows

| Time | Beat |
|---|---|
| 0:00 | Carrier hangar bay at 0200. A watchstander looks for an open item in a paper log. |
| 0:12 | Clock tick, 0200 to 0900. A developer at a locked-down desk tries to install tools and is blocked. |
| 0:35 | Smash cut on the last clock tick to the boat. The Captain orders the catalog up by its full name. |
| 1:00 | The camera pushes into the monitor and lands on the SCOPE catalog. Caption: "Design goal. Not yet authorized." |
| 1:14 | Every tool's landing page, one by one. |
| 1:21 | Bridge Warden, captured live from the running app on a simulated ship. The live demo follows. |
| 1:27 | End card: "Give us ninety days." |

## What is real and what is not

- The terminal on the developer's screen is real Windows PowerShell output. The typing, the progress bar and the mouse are simulated, and the App Control dialog text is a reconstruction.
- The tool landing pages are the tools' own walkthrough screenshots. Each carries its own synthetic-data banner.
- The Bridge Warden pages are captured from the running app. The ship, the contacts and the faults are simulated.
- The crew, the boat and the carrier are fictional and not verified by a Navy sailor.
- **The platform has no Authority to Operate.** The narration says what the design is for, never what its status is.

## Files

| Path | What it is |
|---|---|
| `video/PITCH-v6-1080p.mp4` | The cut. |
| `edit/assemble_pitch.py` | Builds the picture at any resolution and writes the timings. |
| `edit/mix_pitch.py` | Dialogue, music and effects mix with the music pulled down under every voice. |
| `edit/zoom_composite_v3.py` | The push into the monitor. |
| `edit/composite_monitor.py` | Puts the terminal video into the developer's monitor. |
| `edit/make_terminal_screen.py` | Builds the terminal video. |
| `edit/make_clock_insert.py` | The ticking clock inserts, at 1080p or 4K. |
