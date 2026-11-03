# Open questions, rough spots and lessons

## Not verified (needs a submariner)

- **Dialogue terms.** "Man battle stations" has some support in forum and reference pages (submarines use a general alarm and "man battle stations", not "general quarters"). "Rig for ultra-quiet" could not be confirmed by search, and neither could "Helm's answering." The real general-alarm sound is a repeated gong, about 100 beats a minute for ten seconds according to one source.
- **Uniforms and insignia.** Navy-blue submarine working coverall, name tape and "U.S. NAVY" tape, dolphins above the left chest (gold for officers, silver for enlisted), Commander silver oak leaf, chief gold anchor with silver USN, E-5 eagle and two chevrons, tan belt. The placement is checked only against one surface-ship photo and some vendor pages.
- **Cap.** A navy cap with the boat name and hull number in gold and gold oak leaves on the visor is the officer's cap in the photo we used. Submarine crews also wear tan caps. Not confirmed which applies to a submarine commanding officer.
- **Rank.** A Commander commands most attack submarines. Sourced to a general reference site.
- **Control room.** Modern flat-panel layout based on press descriptions and public Navy photos of a Virginia-class boat, which has no periscope through the hull. Not checked against a real layout.

## Still rough in the current cut

- All clips are 480p. The room looks soft when zoomed.
- B v2 has a faint pulsing music bed that the other clips lack, and the Captain's "Windlass and Fairlead" is slightly mispronounced there.
- The alarm, the blast and the "Man battle stations" call are the video model's versions, not real recordings.
- The second helm sailor has no character sheet.
- Cap embroidery text is readable at some angles and cut off at others.
- At the hand-off a faint ghost of DELGADO's head shows over the screen for a moment.

## Pronunciation

Windlass is "wind-luhs" and Fairlead is "fehr-leed". Hyphenated respellings in prompts made the video model worse (the Captain said "Win, lose, and fair lead"). Do not use a voice reference clip that contains a mispronounced word, since the model copies it. The reliable fix is separate audio clipped in where no lips are visible, or a human recording.

## Lessons from the generation

- Prompts that say what to do without giving the model a picture fail. "Hands on the controls" gave a man gripping air, because the reverse angle had no reference showing the console.
- Four separate views of one room do not match. One generation of a 2x2 sheet, with a fixed written inventory, does.
- A real frame from a clip, used as a reference, keeps the seat and angle better than a new generated still.
- Voice cloning in Seed Audio did not keep the voices. Describing the voice in the prompt, in a single multi-speaker pass, did.
- Editing a finished clip is expensive (240 credits for 4 seconds). Re-generating a short shot from a frame is cheaper (80 for 5 seconds).
- Real photos of named people are not suitable references. Public-domain Navy close-ups were rejected for that reason.

## Plan for what comes next

1. **Demo take.** Windlass first, then Fairlead, in one recording. Windlass has no GUI, so its part is a stern, clipped, Navy-sounding female voiceover over the console screenshot (draft text in `script/opening-scene.md`). The current placeholder is fine for now.
2. **Zoom out into a different scene,** some other part of the Navy, so each new scene gets its own set and cast. It reuses the same screen-compositing method in reverse.
3. **Higher resolution** for the keepers once the cut is locked.
4. **Sound layers.** Real or better alarm, blast and announcement tracks.
5. **Submariner review** of the items above.
