# Scene B: MORGAN at the desk (LOCKED v3, not yet generated)

Status: generated as task 444148 (13 s, 480p) and used in pitch v6, with the terminal video composited onto the plain screen.

## What the scene does in the pitch

The buyer's pain at 0900: a developer on a managed laptop who cannot develop. One continuous shot. MORGAN types real commands, the Windows block screen lands on his monitor, and he says his deadpan line. SULLIVAN follows with one beat. The cubicle clock ticks and the tick becomes the sub's alarm.

## Running order, about 17 s

| # | Shot | Length | How it is made | Credits |
|---|---|---|---|---|
| B0 | Clock tick, 0200 booth clock to 0900 cubicle clock | 1.5 s | Clean generated clock stills plus a ticking second hand, local edit | about 12 |
| B1 | MORGAN at the desk: types, popup lands, his line | 13 s | Seedance 2.5, 480p, payload below. Monitor keyed and replaced with the terminal asset, retimed | 208 |
| B2 | SULLIVAN: "Now imagine you lose the cloud." over a hold on the popup | 2.2 s | Local, audio from task 444041 | 0 |
| B3 | Cubicle clock ticks, tick becomes the general alarm, cut to the boat | 1 s | Local, with the alarm sound | 0 |

## Voice (done)

- MORGAN's line: task 444099, Seed Audio, reference voice task 443826. Words checked: "We're software developers. On this machine, we can't develop."
- Tightened locally: the 2.5 s gap between the sentences and the 1.2 s lead-in cut. Clean file `video/review/morgan-line-cant-develop.mp3`, 5.19 s.
- Padded track for the shot: **material 426708**, 13.0 s. Silence until 7.4 s, a breath, the first sentence at about 7.7 to 9.3 s, the second sentence at about 10.2 to 12.9 s.

## Inputs (all approved)

| Input | ID | Notes |
|---|---|---|
| MORGAN character sheet | task 443787 | White man, mid-thirties, ponytail, thin dark glasses, green polo, grey slacks, brown belt, lanyard with the badge turned backward |
| Shot frame, 16:9 plate | material 426637 | Cubicle from the north-east. Monitor centre-right, open wall at left for MORGAN, chair back bottom-left |
| Cubicle straight on | material 426375 | Only for the chair, keyboard and desk layout |
| MORGAN's padded line | material 426708 | Reference audio for the shot |
| Terminal screen | `video/review/morgan-terminal-screen-1080p.mp4` | Composited into the monitor in the edit |
| Screen corners in the plate | (595,208) (956,190) (942,514) (578,465) | Top-left, top-right, bottom-right, bottom-left |

## Screen retime for the composite (shot time to terminal-asset time)

| Shot time | Asset time | Speed | What the monitor shows |
|---|---|---|---|
| 0 to 4.4 s | 0 to 9.2 s | 2.1x | Idle prompt, python --version typed, Store message, winget typed, "Found", licence and "Downloading" |
| 4.4 to 5.4 s | 9.2 to 12.6 s | 3.4x | Download bar fills |
| 5.4 to 6.4 s | 12.6 to 17.6 s | 5x | Hash verified, "Starting package install...", "will request to run as administrator" |
| 6.4 to 10.4 s | 17.6 to 21.6 s | 1.0x | The App Control popup appears and holds |
| 10.4 s to end | frozen at 21.6 s | none | Popup held. The mouse arrow never moves in this shot, so it never moves without his hand. |

The winget error "0x8007029c" is not in this shot. To show it, add about 3 s (48 credits) with his hand on the mouse closing the popup. Anthony's call.

## Locked payload for B1 (Seedance 2.5)

- model `seedance-2.5-byteplus`, resolution `480p`, ratio `16:9`, duration `13`, audioGeneration on
- references: `task:443787` reference_image, `material:426637` reference_image, `material:426375` reference_image, `material:426708` reference_audio
- price: 208 credits

Prompt, exact:

```text
REFERENCES: @task:443787 is MORGAN, a civilian software developer: keep his face, long light-brown hair in a low ponytail, thin dark-framed glasses, dark-green polo tucked into grey slacks, brown belt, and the lanyard with the plain white badge turned backward, exactly as in this sheet. @material:426637 is the frame of the shot: his cubicle seen from the right-hand front corner; keep this exact framing, set, props, monitor and lighting for the whole clip. The monitor screen is a plain flat pale blue-grey with nothing on it and it stays exactly that, unchanged, for the whole clip. @material:426375 is the same cubicle straight on, only for the chair, the keyboard and the desk layout. @material:426708 is MORGAN's voice: he is silent until 7.4 seconds, then he speaks his one line in sync with this audio.
SHOT: one continuous locked-off shot, 13 seconds, framed exactly as @material:426637. The camera does not move: no pan, no zoom, no cuts. It is 0900 in a government office. Fluorescent light, quiet.
0 to 1 s: MORGAN sits in the grey chair at the left of the frame, seen from behind and to his right, three-quarter back view, the ponytail and the side of his face with the glasses visible. His head and shoulders are above the chair back, left of the monitor and clear of it. Both hands rest on the keyboard. He watches the screen.
1 to 4.4 s: He types steadily on the keyboard in two short bursts with a pause between them, eyes on the screen, head still and always left of the monitor.
4.4 to 6.4 s: He stops typing, moves his right hand to the mouse and watches the screen, waiting.
6.4 to 7.4 s: He freezes, then slowly sits back in the chair a few inches and lets his right hand slide off the mouse into his lap.
7.4 to 12.6 s: He takes a soft breath, then says his line quietly to himself, deadpan, eyes on the screen, never looking at the camera, in sync with @material:426708: "We're software developers. On this machine, we can't develop."
12.6 to 13 s: He is still, staring at the screen.
SOUND: silence from him until 7.4 seconds, then his voice exactly as @material:426708, low and dry, no words added. Quiet office ventilation and a faint fluorescent hum, keyboard clicks while he types. No music.
STYLE: Documentary realism, available light, mild film grain, natural skin, realistic hands. Not a video game, not stylized.
NEGATIVE: no subtitles, no captions, no readable text anywhere, no text on the monitor, no logos, no watermark, no other people, no camera movement, nothing changes on the screen.
```

## Why it is built this way

- Three-quarter back view with the ponytail visible: the ponytail identifies him from behind, and the profile keeps lip sync from mattering.
- He stays left of the monitor and leans away, so the keyed screen is never covered and the composite needs no hand-drawn matte.
- Plain pale blue-grey screen that never changes: the edit keys it per frame and swaps in the terminal, as in the opening.
- Typing is real hands on the keyboard, and the terminal text appears as he types. At this size nobody can match keystrokes to characters, but it reads as typing.
- No mouse movement without his hand: the arrow stays still because the shot ends with the popup held.
- One action per beat, nothing near the face, after the reviewer's note on scene C.

## Known risks to check on the result

1. His face and ponytail match the sheet, and the glasses stay on.
2. He stays left of the monitor and never covers the screen.
3. The screen stays plain, with no reflections, text or flicker.
4. The cubicle props do not drift: card reader, laptop, phone, mug.
5. The clock, which has garbled numerals in the stills, is out of frame in this plate.
6. His hands look right while typing, and his lips roughly match 7.7 to 12.9 s.
7. He stays silent until 7.4 s.

## Not verified

- The Windows App Control popup title, path and button label are drafts. See assets.md.
