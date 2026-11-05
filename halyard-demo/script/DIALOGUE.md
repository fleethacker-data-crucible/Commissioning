# Halyard voiceover: Sullivan / Reyes dialogue (Harlan opens and closes)

Each task is one Renoise generation (20 credits). Turns map to the picture ranges shown, so each line lands on its screen.

## t00-open
- **HARLAN** _(card: open)_: Every backlog drifts. Stories without acceptance criteria. Features without a parent. Sizes nobody agreed. Halyard is the product owner's mate. It reads the backlog, finds the drift, drafts the fix, and waits for a person to approve it. Nothing moves without your say.

## t01-key
- **REYES** _(c02 stills 0,1)_: Every tool in the fleet needs a model key. At OpenAI, create a new secret key.
- **SULLIVAN** _(c02 stills 2,3)_: Name it something generic. I call mine fleet-tools. Seven days is plenty.
- **REYES** _(c02 stills 4)_: Copy it once. OpenAI never shows it again.

## t02-lazarette
- **SULLIVAN** _(c03 stills 0,1)_: The key goes into Lazarette, the encrypted vault on this machine.
- **REYES** _(c03 stills 2,3)_: Test credential checks it against OpenAI's read-only endpoint. HTTP two hundred. The key is good.
- **SULLIVAN** _(c03 stills 4)_: Share it with Fairlead by name, and Fairlead sees only what you share.
- **REYES** _(c03 stills 5)_: Fairlead reads it from the vault and connects. Eighty-three models, in under a second.

## t03-config
- **REYES** _(c04 0.1-10.4 s)_: Fairlead gives each tool its own key. Pick Halyard and install it. It lands in Windows Credential Manager.
- **SULLIVAN** _(c04 10.4-23.1 s)_: Halyard's config file names the backlog it reads, the backlog it may write to, and the write mode. The browser can't change any of it.
- **REYES** _(c04 23.1-27.6 s)_: Test the model. Under two seconds, end to end.

## t04-seed
- **SULLIVAN** _(c05 0.2-9.9 s)_: For this walkthrough we seed a synthetic backlog. Thirty items, a quarter of them with deliberate gaps.
- **REYES** _(c05 9.9-128.3 s)_: Each one is a real GitHub issue with a run label, so the whole run comes out again in one click. It takes about two minutes, paced for the rate limits.
- **SULLIVAN** _(c05 128.3-131.8 s)_: Thirty of thirty. The backlog is live.

## t05-drift
- **SULLIVAN** _(c06 0.2-15.8 s)_: The overview shows the shape of the backlog and what needs attention: items to review, missing parents, topology errors. Scroll down for the findings by severity, and the next actions.
- **REYES** _(c06 15.8-26.4 s)_: Review checks every item against its level's definition of ready and the parent chain. Each finding names the fix that closes it.
- **SULLIVAN** _(c06 26.4-31.9 s)_: Hierarchy shows the tree, theme to task.

## t06-draft
- **REYES** _(c07 0.2-18.3 s)_: Draft missing sections sends each gap to the model through Fairlead. Real model, a few seconds per item.
- **SULLIVAN** _(c07 18.3-40.6 s)_: Six drafts, all high confidence. Each is a proposal with a reason. Open one and read the diff: the model adds what's missing and leaves the rest alone. And if it ever drops a section, Halyard puts it back word for word.
- **REYES** _(c07 40.6-59.1 s)_: Approve the high-confidence drafts, then apply. Six written to the backlog on GitHub, and the apply is recorded.

## t07-undo
- **REYES** _(c08 0.2-12 s)_: Every apply is recorded with what it replaced. Undo previews first, then restores the earlier text. Six items restored.
- **SULLIVAN** _(c08 12-40.9 s)_: Anything a person edited since is left alone. The proposals go back to pending, so approve and apply again when you're ready.

## t08-intake
- **SULLIVAN** _(c09 0.1-10.3 s)_: Work comes in from anywhere. A raw ticket, or a note typed straight into Intake. Two loose notes, no structure at all.
- **REYES** _(c09 10.3-23.2 s)_: Preview the drafts. Halyard turns each note into a structured work item and copies it into the backlog, with a link back to where it started.

## t09-plan
- **REYES** _(c10 0.2-5 s)_: Plan fills the next sprints from ready stories.
- **SULLIVAN** _(c10 5-13 s)_: Capacity comes from the team file. Owners are matched on skills, and anything that slipped last sprint goes first.
- **REYES** _(c10 13-21.1 s)_: Skills come from Shellback peer cards today. A live Shellback link is planned.

## t10-vision
- **REYES** _(c11 0.2-7.6 s)_: Upward, Halyard drafts the portfolio story for leadership. This one is the live model, thinking.
- **SULLIVAN** _(c11 7.6-23.2 s)_: Themes, priorities, risks and the next quarter, with the facts every claim rests on. Everything it says about the backlog, it can point to.
- **REYES** _(c11 23.2-34.8 s)_: The leadership page puts features on track, velocity, ready backlog, capacity and blockers on one screen.

## t11-integrations
- **SULLIVAN** _(c12 0.2-8.6 s)_: One click exports backlog health for Semaphore, as four tables ready to chart.
- **REYES** _(c12 8.6-19 s)_: The weekly dashboard opens in Outlook as a draft, so a person reviews it and presses send.
- **SULLIVAN** _(card: runner)_: Next on the chart: a runner on the team's repositories. It watches commits and pull requests, and writes the story for the work it sees.
- **REYES** _(card: runner)_: Developers stop doing the admin. The product owner approves what the runner proposes, through the same diff and the same gate.

## t12-safety
- **REYES** _(c13 0.2-10.2 s)_: Production stays shut. Promote needs a production write mode, an explicit allow flag, a typed phrase and a diff, and none of it can be switched on from the browser.
- **SULLIVAN** _(c13 10.2-22.7 s)_: The write audit lists every write Halyard made. Every one went to the backlog.

## t13-close
- **HARLAN** _(card: close)_: Halyard proposes. People decide. That's the watch. Fair winds.

