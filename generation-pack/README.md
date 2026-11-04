# Generation pack

Everything needed to make the lead-up assets, ready to paste. **Nothing here has been generated.** I have no Renoise access in this session, so the images and audio still have to be made by you. This pack removes the guesswork: every prompt is final, in order, with its settings and its dependencies, and the local pieces (badge, terminal screens, cap text, cropping) are built and tested.

## 1. Prompts

```
cp ids.example.json ids.json              # fill IDs as you go
python make-prompts.py --list             # every job, ready or blocked, with model, size and aspect
python make-prompts.py                    # writes out/NN-<job>.txt for every job whose references are filled in
python make-prompts.py --set reyes-pick=413900    # record an ID after you generate
```

Each file in `out/` starts with its settings (model, size, aspect, how many to make) and ends with the exact prompt. Jobs wait on the ones they depend on: for example the REYES sheet needs the identity pick you choose.

| # | Job | Model, size | Needs |
|---|---|---|---|
| 01 | Captain HARLAN sheet v3 (cap, no hull number) | GPT Image 2.5 Sunburst, 2k | existing sheets 413570, 413362 |
| 02 | REYES identity picks (3) | Seedream 5.0 Pro, 1k, 3:4 | |
| 03 | REYES four-panel sheet | GPT Image 2.5 Sunburst, 2k | your chosen pick |
| 04 | MORGAN identity picks (3) | Seedream 5.0 Pro, 1k, 3:4 | |
| 05 | MORGAN four-panel sheet | GPT Image 2.5 Sunburst, 2k | your chosen pick |
| 06 | Carrier workcenter: north master | Seedream 5.0 Pro, 1k | |
| 07 | Carrier workcenter: 2x2 room sheet | GPT Image 2.5 Sunburst, 4k | the north master |
| 08, 09 | Carrier clock and log inserts | Seedream 5.0 Pro, 1k | the cropped north panel (material) |
| 10 | Flight-deck establishing shot (optional) | Seedream 5.0 Pro, 1k | |
| 11 | Shore office: north master | Seedream 5.0 Pro, 1k | |
| 12 | Shore office: 2x2 room sheet | GPT Image 2.5 Sunburst, 4k | the north master |
| 13, 14 | Shore clock insert; laptop insert (optional) | Seedream 5.0 Pro, 1k | the cropped north panel (material) |
| 15 | Voices: REYES, MORGAN, NARRATOR | Seed Audio | |

After a 2x2 sheet is generated, crop it: `python tools/crop-sheet.py sheet.png panels/carrier`, register each panel in Renoise as a material, then record the north panel's material ID as `carrier-north` (or `shore-north`).

## 2. Local tools (tested)

| Tool | What it does |
|---|---|
| `tools/crop-sheet.py` | Splits a 2x2 room sheet into north, east, south, west panels. |
| `tools/extract-frame.sh` | Saves a real frame from a clip, for use as the first-frame reference of the next shot (the Captain's walk). |
| `composites/badge.py [NAME]` | Fictional ID badge: blank photo area, first name, "CIV". No seal, no real layout, no real colour bands. |
| `composites/terminal.py [user]` | Four 1920x1080 terminal screens for the laptop monitor: empty prompt, then `python`, `git`, `terraform` failing, then a blocked-by-policy dialog. The wording is illustrative; check it against your own endpoint before it goes on screen. |
| `composites/carrier-cap.py [SHIP HULL LAST]` | Transparent cap embroidery and the two chest tapes for REYES. Fictional name and number; tape colours are placeholders. |

Outputs in `composites/` are not committed (they are quick to rebuild).

## 3. What this does not do

- It does not generate any image or audio.
- It does not know which choices you will make (which identity pick, which north master). Fill `ids.json` as you decide.
- The uniform for REYES, the women's uniform and hair rules, and every insignia are unverified. See `pitch/production-bible.md`.
