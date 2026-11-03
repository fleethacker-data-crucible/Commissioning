# Opening scene

36.8 seconds at 720p. Setting: the control room of a fictional modern US Navy attack submarine, USS FLEETHACKER (SSN 999). A mine goes off close aboard, the uplink is lost, and the Captain orders the local tools online.

## Cast

| Character | Who | Voice |
|---|---|---|
| Captain HARLAN | Commander (O-5), commanding officer. Lean, angular face, greying hair, navy cap with gold embroidery. Stands. | Deep, calm, completely flat and deadpan |
| Chief SULLIVAN | Chief petty officer (E-7) at the helm. Stocky, weathered, thick mustache, looks older than he is. | Very low, gravelly, smoker's rasp, tired and dry |
| DELGADO | Petty officer second class (E-5), radioman. Tall, wiry, short black hair, headset. | Young tenor, fast, breathless, scared and energetic |

A second sailor sits in the other helm seat. He is only seen from behind and has no sheet.

## Timeline of the current cut

| Time | Shot | Source |
|---|---|---|
| 0:00 to 0:09 | North wall, calm in normal light. Thump at about 3 s, lights flicker out, red emergency lighting, dust, gong alarm, "Man battle stations." The Captain: "Report." | Clip A (413642), up to the cut at 9.04 s |
| 0:09 to 0:14 | Sullivan, medium shot from the front. Right hand grips the joystick, left hand rests on the console panel. | A3 (413731), replaces A's third shot |
| 0:14 to 0:27 | West wall: DELGADO reports the lost uplink. Then the Captain's close-up and his order. | B v2 (413643) |
| 0:27 to 0:37 | Locked West shot with DELGADO's line, then a zoom into the centre monitor and a hand-off to the full-screen screenshot. | C v3 (413730) plus the zoom (`edit/`) |

## Dialogue

> *[Thump, the deck shakes, lights flicker to red, dust falls.]*
> *[General alarm. Ship's announcement: "Man battle stations."]*
> **CAPTAIN** (flat): "Report."
> **SULLIVAN** (gravelly): "Helm's answering, Captain. Holding depth and course."
> **DELGADO** (fast, shaky): "Captain! We've lost the uplink. No internet!"
> **CAPTAIN** (deadpan, a beat first): "Then we get our inference local. Rig for ultra-quiet. Windlass and Fairlead. Bring them online now."
> **DELGADO** (shaky): "Windlass online! Fairlead online!"

How to say the tool names: **Windlass** is "wind-luhs" and **Fairlead** is "fehr-leed". The generators get both wrong, so the corrected words for DELGADO's last line are clipped in from separate audio (`edit/build-opening.sh`). The Captain's line in B v2 still has a slight mispronunciation that was accepted for now.

## After the zoom

The zoom hands off to the demo, one take, Windlass first and then Fairlead. When the demo ends, the camera zooms out of a screen in a different scene, some other part of the Navy, so each new scene gets its own set and cast.

## Windlass voiceover (draft)

Windlass has no GUI, so its part is a stern, clipped, Navy-sounding female voice over the console screenshot. Draft text, from the Windlass README, for review:

> Windlass. Heavy lift for local models. It hauls a seventy-billion-parameter model through memory one layer at a time, so an ordinary Windows PC can run what it could never hold. No installs. No administrator rights. No network. Slow by design: built for batch and deep work, not for chat.

The README measures about 8.7 seconds per token for Llama 3.3 70B on a Ryzen 9 9950X3D, and its sample one-sentence reply took 349 seconds.
