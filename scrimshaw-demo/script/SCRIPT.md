# Scrimshaw demo: script

Each task is one Renoise generation (20 credits, 6 tasks, ids in work/ids.json). Picture ranges are seconds in the named clip. c03r is Halyard footage, reused read-only.

## t00-open
- **HARLAN** _(c01 0-14 s)_: A trainer has to turn a procedure into a graded course the LMS can track, and know the package works before anyone uploads it. Scrimshaw builds the course, drafts the first quiz through Fairlead, and publishes a SCORM package. The procedure and the learner are synthetic, and the LMS is a stand-in.

## t01-arch
- **SULLIVAN** _(c02 1.5-8 s)_: It all runs on this one computer. Launch dot bat starts a small PowerShell server on loopback, and the editor and player run in your browser.
- **REYES** _(c02 8-14.5 s)_: Courses autosave in browser storage, with a dot scrim file for backup.
- **SULLIVAN** _(c02 14.5-21 s)_: In: slides you build, PowerPoint, and media files from Capstan, SnapShackle and TalkForge.
- **REYES** _(c02 21-27.5 s)_: Out: SCORM, xAPI, cmi5, a web page, a storyboard and a Word handout.
- **SULLIVAN** _(c02 27.5-34 s)_: AI is optional. The model key sits in Lazarette, shared to Fairlead, and Scrimshaw asks Fairlead for a draft with its own client key.
- **REYES** _(c02 34-40.5 s)_: There is also a command line and a loopback API. Planned: handing the key over from Lazarette directly.
- **SULLIVAN** _(c02 40.5-49.5 s)_: Guardrails: loopback only, drafts are opt-in and reviewed by you, publishing is checked, and the server stops when the tab closes.

## t02-setup
- **SULLIVAN** _(c03r 0-11 s)_: The model key lives in Lazarette, the encrypted vault, and is shared once with Fairlead. This footage is from the Halyard demo: the same key, set up once for every tool.
- **REYES** _(c03 0.8-9.7 s)_: Launch dot bat starts Scrimshaw on port eighty-seven seventy-five, its place in the Fleet port registry.
- **SULLIVAN** _(c03 9.7-20 s)_: Fairlead has a client named Scrimshaw, so its calls can be told apart in the log.
- **REYES** _(c03 20-29.7 s)_: And the page address is allowed as a browser origin, because the page calls Fairlead directly.

## t03-draft
- **REYES** _(c04 0-27.5 s)_: Start a new course and name it. The passing score is eighty percent.
- **SULLIVAN** _(c04 27.5-54 s)_: Drafting is off until you turn it on. This PC has no local model, so I allow a cloud engine, and only a made-up procedure goes through. The client key stays in memory for this session.
- **REYES** _(c04 54-72.6 s)_: Draft asks the model through Fairlead. This is the live wait, sped up.
- **SULLIVAN** _(c04 72.6-99.2 s)_: Three questions come back, but nothing is in the course until I add them. Then I review each question and the answer it marks correct. The model can be wrong, so the author decides.
- **REYES** _(c04 99.2-111.5 s)_: Fairlead keeps its own log: client Scrimshaw, model GPT-5 mini, status two hundred.

## t04-publish
- **SULLIVAN** _(c05 0-9.7 s)_: Publish offers SCORM, xAPI, a web page or the project file. I take SCORM one point two.
- **REYES** _(c05 11.9-22.5 s)_: Inside are the manifest and the player, one file. The eighty percent pass mark travels in the manifest.
- **SULLIVAN** _(c05 22.5-48.7 s)_: Now a learner takes it in a stand-in LMS I wrote for this video. It is not a real LMS, but it speaks the SCORM calls, and every call the package makes is logged on the right. First attempt: one answer wrong on purpose.
- **REYES** _(c05 48.7-54.2 s)_: Sixty-seven percent, under the pass mark, so the LMS is told failed.
- **SULLIVAN** _(c05 54.2-76.3 s)_: Retry with every answer right: a hundred percent, and the status is passed.
- **REYES** _(c05 76.3-85.8 s)_: That record is the evidence. A real LMS is the final check: this proves the package, not any one vendor.

## t05-close
- **HARLAN** _(c06 0-13 s)_: The model drafted, a person checked every answer, and the result was recorded by the LMS, here a stand-in. Not shown: PowerPoint import, xAPI, cmi5 and the command line. No minutes-saved number is claimed.
