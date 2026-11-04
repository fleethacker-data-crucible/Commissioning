# Skit v2: "The Request" (replaces the submarine opening)

About 55 seconds, then it hands off to the live demo. Two actors, one set, one prop (a laptop). Nothing in it needs a submarine, a mine, or a control room.

## The new pitch angle

Old angle: "we lost the uplink, run it offline." New angle: **the distance between a Sailor's problem and a running tool is measured in months. Ours is measured in minutes.** The offline, no-admin, no-install facts become the reason it's possible, not the headline.

One-line pitch: **"Sixteen tools, one double-click. From request to running before the coffee's cold."**

Judge mapping: Speed to Fleet (20%) is the whole skit; Deckplate Impact (30%) is the Sailor's problem; Scalability (20%) is the montage; the human-approval beat covers Judges' Discretion (15%).

Rule for the foil: the villain is **the process**, never IT. End with the skeptic becoming the sponsor. Judges clearly have IT in the room, and the ask in the last line needs them on side.

## Cast and set

| Who | Look | Voice |
|---|---|---|
| PO2 REYES | Sailor, working uniform, tired, holding a paper watch log | Young, dry, deadpan |
| LT OKAFOR | Division officer, sensible, has seen every request die | Calm, kind, slightly weary |
| BUILDER | Civilian in a Data Crucible shirt, laptop under arm, relaxed | Easy, a little amused |

Set: a ship's admin office or shore-command watch office at 0640. One desk, one wall calendar, a stack of paper logs, a laptop. One lighting setup only. (Lesson from the last video: one set, generated once as a reference image, beats several matching views.)

## Script

| Time | Shot | Dialogue / sound |
|---|---|---|
| 0:00 | Close on REYES dropping a thick paper log on the desk. Wall calendar behind: "FY28". | REYES: "Ma'am, turnover is forty minutes every watch. Half of it is me hunting for what's still open." |
| 0:08 | OKAFOR, sympathetic. Hands him a form. | OKAFOR: "Submit a request. Last one took eighteen months." A rubber stamp hits paper: PENDING. |
| 0:16 | Calendar pages flip fast, season changes at the window. Text on screen: "Typical path: request, review, approval, procurement, install." | Light comic sting. |
| 0:22 | BUILDER walks in, sets laptop on the desk. | BUILDER: "Or we could try it now." |
| 0:26 | Over-the-shoulder on the laptop. A zip. Unzip. One double-click. Browser opens Eight Bells. | REYES: "What did you install?" BUILDER: "Nothing." |
| 0:33 | BUILDER unplugs the network cable, wifi icon crosses out. The screen keeps working. | BUILDER: "No admin. No network. It never leaves this laptop." |
| 0:40 | OKAFOR leans in, reads the screen, points at one item. | OKAFOR: "Who approved that change?" BUILDER: "You do. Every action waits for a person, and it's logged." |
| 0:47 | REYES taps a flagged line, source line number highlights. | REYES: "That's the open item I've been hunting for." |
| 0:52 | OKAFOR looks up, quiet. | OKAFOR: "What else have you got?" |
| 0:55 | Camera pushes into the laptop screen: the zoom into the demo. | BUILDER: "Let me show you." |

## Hand-off to the demo

Reuse `edit/zoom_composite.py`. It already finds a plain-colour screen and zooms until it fills the frame, so the laptop screen in shot 0:55 should be a flat, known colour in the generated clip. Same method, new picture. No need to keep the submarine footage.

## Montage and close (about 30 s, after the demo)

Fast cards of the other tools, one line each, over a plain voiceover:

> Fairlead. One local address for every model. Windlass. Models too big for the machine, run anyway. Semaphore. Dashboards from a plain-English brief. Halyard. A backlog that fixes itself, with your approval. Gangplank. Git for people who never learned Git.

Then back in the office, OKAFOR picks up the laptop:

> OKAFOR: "Send me the list. I'll take it to the CO."

Title card: **Edge-Ops. Deploy in a click.** The ask, one line: *"Give us a sponsor and two units, and we'll show you thirty days of results."*

## Renoise notes

- Generate one wide reference of the office with a written inventory (desk, calendar, laptop, log stack, window), then a four-view sheet if you need reverse angles. A single reference shot beats separate prompts per angle.
- Describe pictures, not actions. For the laptop shot, supply a real frame as reference rather than "hands on the controls."
- Describe voices in one multi-speaker pass. Add "Okafor" and "Reyes" as plain sounds; add "Fairlead" ("fehr-leed") and "Windlass" ("wind-luhs") as separate audio, not in video lip-sync.
- Keep every on-screen text card as an overlay added in the edit, not generated, because generated text drifts.
- No real unit insignia or ship names. Keep it fictional, as before.

## Placeholders to fill with real numbers

The skit's laughs need true numbers. Before filming, replace these, or cut the line:
- "forty minutes" of turnover: measure a real one.
- "eighteen months": use a real, citable acquisition timeline, or soften to "months."
- How long your install-to-running actually takes on a clean machine: time it, then say it on camera.
