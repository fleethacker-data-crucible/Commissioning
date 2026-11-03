# Prompt audit, part 2: fixes and final clips

Continues `prompt-audit.md`. Everything sent to Renoise after the first three opening clips (A v2, B v2, C v2). Balance after this part: about 6,097 credits, 1,273 spent in total.

| Step | Tasks | Credits | Result |
|---|---|---|---|
| Voice-clone redo with "Fehr-leed" | 413709, 413710 | 40 | Rejected. The Captain's voice came back hushed and raspy, DELGADO's came back as a woman. |
| SULLIVAN joystick still | 413711 | 6 | Rejected. Wrong seat and a new angle. |
| Clips B v3, C v3, A3 | 413729, 413730, 413731 | 384 | C v3 and A3 kept. B v3 rejected. |

## Voice-clone redo (Seed Audio 1.0)

Captain, task 413709, reference audio material 394188:
```text
Setting: clean, dry, close-microphone dialogue recorded for a film, no background noise, no music, no room reverb.
Captain (male, deep resonant baritone, slow and calm, completely flat deadpan, the voice of the reference audio): "Then we get our inference local. Rig for ultra-quiet. Windlass and Fehr-leed. Bring them online now." Pronounce the last ship's-gear word as "fehr-leed": the first syllable rhymes with "care", the second syllable rhymes with "need".
```

DELGADO, task 413710, reference audio material 394187:
```text
Setting: clean, dry, close-microphone dialogue recorded for a film, no background noise, no music, no room reverb.
Delgado (male, mid twenties, young tenor, fast, breathless, high with fear and adrenaline, shaky and relieved, the voice of the reference audio): "Windlass online! Fehr-leed online!" Pronounce the second word as "fehr-leed": the first syllable rhymes with "care", the second syllable rhymes with "need".
```

## SULLIVAN joystick still (Seedream 5.0 Pro, 1k, 16:9, references 413550 and 413519)

```text
A single documentary photograph, not a sheet and no panels or labels. Medium shot, camera low and in front, looking back at Chief Sullivan, the man from @task:413550, seated in a black high-back ship-control seat in the Virginia-class submarine control room from @task:413519. His right hand grips a black aircraft-style joystick on a light grey pedestal at the bottom center of the frame; his left hand rests on the edge of the grey console beside him. He looks straight ahead at the screens, squinting, tired and focused. He wears the navy blue coverall with the SULLIVAN and U.S. NAVY tapes and the gold anchor collar devices exactly as in @task:413550. Behind him, the overhead of white cable trays and ducting and a few dim red emergency lamps, a faint haze of dust, the room lit in deep red-orange emergency lighting with the screens glowing dimmer. Documentary photograph style, realistic, shot like a U.S. Navy public affairs photograph. No readable text on screens, no logos, no watermark.
```

## Clips (Seedance 2.5, 480p, 16:9, audio on)

Shared blocks, repeated in each prompt:

```text
STYLE: Documentary realism inside a US Navy Virginia-class submarine control room, dim red emergency lighting, available light, natural color, mild film grain. Not a video game, not stylized. NEGATIVE: no subtitles, no captions, no logos, no watermark, no readable text on any screen, no music and no musical score, only room sound.

PRONUNCIATION: the tool names are said "Wind-luhs" (WIND, then luhs, like "bus") and "Fehr-leed" ("fair" then "need"). Never say "wind-less" and never say "fair-lead" or "fair-line".
```

### B v3, task 413729, 13 s (rejected)
References: West red 413522, Captain sheet 413570, DELGADO sheet 413420, voices 394187 (DELGADO) and 394289 (Captain, trimmed).

Shot 1 (0-6s): locked-off wide shot of the west wall as in 413522, the camera does not move. DELGADO sits in the black seat with his back to the camera, typing fast. The Captain stands behind him on the left of the frame beside the left screen, arms folded, not overlapping the big centre monitor. DELGADO turns his head toward the Captain and says quickly in his voice: "Captain! We've lost the uplink. No internet!" The Captain does not move.
Shot 2 (6-13s): close-up of the Captain's face from the front, lit by the screen glow and the red lamps, deadpan and completely still. A beat of silence, then he says in his flat, calm, serious voice: "Then we get our inference local. Rig for ultra-quiet. Wind-luhs and Fehr-leed. Bring them online now."

Why rejected: DELGADO swivels the wrong way, and the Captain's line came out as "Win, lose, and fair lead".

### C v3, task 413730, 6 s (kept, audio replaced in the edit)
References: West red 413522, DELGADO sheet 413420, Captain sheet 413570, voice 394187.

Single locked-off shot (0-6s), the camera does not move at all: the west wall exactly as in 413522. DELGADO sits in the black seat with his back to the camera, typing fast. The Captain stands behind him on the left side of the frame, arms folded, not overlapping the big centre monitor. The large centre monitor stays plain, flat and fully visible for the whole shot, glowing a plain pale blue-grey. DELGADO says in his voice: "Wind-luhs online! Fehr-leed online!" No other camera movement.

The picture is kept. DELGADO said the tool names wrong ("fear-lead"), so his line is replaced with the Seed Audio take in material 394189 (`edit/build-opening.sh`).

### A3 v2, task 413731, 5 s (kept)
References: first-frame image material 394295 (a frame from clip A at 9.8 s), SULLIVAN sheet 413550, voice 394197.

Single static medium shot (0-5s), framed exactly as 394295, the camera does not move, the same seat and the same angle. At the start of the shot, Sullivan's right hand (on the left side of the frame) lowers onto the joystick, grips it firmly and keeps gripping it for the rest of the shot, making tiny tense adjustments. His left hand (on the right side of the frame) lowers and rests flat on the grey console panel beside him. He squints at the screens and says in his deep, gravelly, smoker's voice: "Helm's answering, Captain. Holding depth and course." A low alarm hum and ventilation sound in the background.

## Notes on the prompts

- The "no music" line was added after the check found B v2 had a pulsing score nobody asked for.
- The respelling "Wind-luhs" and "Fehr-leed" did not fix the pronunciation, and in B v3 it made the Captain's line worse. The fix was audio clipped in afterwards.
