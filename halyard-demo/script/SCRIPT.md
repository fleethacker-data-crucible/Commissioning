# Halyard demo: narration with timings

Timings are from the final cut (`Halyard-demo.mp4`, 5:50). Captions use the same wording.
Cast: Captain HARLAN opens and closes, Chief SULLIVAN and Lt. Cmdr. REYES volley the lines.

## Opening (0:00 to 0:19)

- `0:00.2` Every backlog drifts.
- `0:01.5` Stories without acceptance criteria.
- `0:04.4` Features without a parent.
- `0:06.7` Sizes nobody agreed.
- `0:08.2` Halyard is the product owner's mate.
- `0:11.1` It reads the backlog, finds the drift, drafts the fix, and waits for a person to approve it.
- `0:17.5` Nothing moves without your say.

## Architecture at a glance (0:19 to 1:16)

- `0:19.9` Here is how Halyard fits together.
- `0:22.2` Everything runs on one machine.
- `0:24.5` A PowerShell launcher compiles the engine in memory, and the browser talks to it on localhost.
- `0:30.3` Inside the engine: review, intelligence for drafting and sizing, planning, and a proposal store.
- `0:38.5` Every change starts as a proposal.
- `0:40.9` Halyard reads your backlog from GitHub, read only.
- `0:44.0` The write gateway lets it write to one place: the sandbox backlog you configure.
- `0:49.8` Model calls go through Fairlead and nowhere else.
- `0:52.4` Halyard's own key sits in Windows Credential Manager.
- `0:56.6` The OpenAI key stays in Lazarette, shared to Fairlead.
- `1:00.5` Out the other side: four tables for Semaphore, and the weekly dashboard as an Outlook draft.
- `1:06.7` Dashed means planned: live Shellback skills, and a runner on your repositories.
- `1:12.4` One rule holds it together.
- `1:14.4` Nothing is written until a person approves.

## Create the OpenAI key (1:17 to 1:33)

- `1:17.4` Every tool in the fleet needs a model key.
- `1:20.5` At OpenAI, create a new secret key.
- `1:23.8` Name it something generic.
- `1:26.1` I call mine fleet-tools.
- `1:27.9` Seven days is plenty.
- `1:30.7` Copy it once.
- `1:32.3` OpenAI never shows it again.

## Lazarette and Fairlead (1:33 to 1:55)

- `1:33.8` The key goes into Lazarette, the encrypted vault on this machine.
- `1:38.5` Test credential checks it against OpenAI's read-only endpoint.
- `1:42.1` HTTP two hundred.
- `1:43.8` The key is good.
- `1:45.1` Share it with Fairlead by name, and Fairlead sees only what you share.
- `1:50.5` Fairlead reads it from the vault and connects.
- `1:53.2` Fifty-three models, in about a second.

## Configure Halyard (1:55 to 2:16)

- `1:55.9` Fairlead gives each tool its own key.
- `1:58.7` Pick Halyard and install it.
- `2:00.8` It lands in Windows Credential Manager.
- `2:03.5` Halyard's config file names the backlog it reads, the backlog it may write to, and the write mode.
- `2:09.2` The browser can't change any of it.
- `2:12.3` Test the model.
- `2:13.8` Under two seconds, end to end.

## Seed the backlog (2:17 to 2:38)

- `2:17.0` For this walkthrough we seed a synthetic backlog.
- `2:20.8` Thirty items, a quarter of them with deliberate gaps.
- `2:24.9` Each one is a real GitHub issue with a run label, so the whole run comes out again in one click.
- `2:30.2` It takes about two minutes, paced for the rate limits.
- `2:34.5` Thirty of thirty.
- `2:36.4` The backlog is live.

## Overview, review and hierarchy (2:39 to 3:02)

- `2:39.0` The overview shows the shape of the backlog and what needs attention: items to review, missing parents, topology errors.
- `2:46.8` Scroll down for the findings by severity, and the next actions.
- `2:52.1` Review checks every item against its level's definition of ready and the parent chain.
- `2:56.8` Each finding names the fix that closes it.
- `2:59.7` Hierarchy shows the tree, theme to task.

## Draft and approve (3:02 to 3:32)

- `3:02.8` Draft missing sections sends each gap to the model through Fairlead.
- `3:06.9` Real model, a few seconds per item.
- `3:10.0` Six drafts, all high confidence.
- `3:12.0` Each is a proposal with a reason.
- `3:14.4` Open one and read the diff: the model adds what's missing and leaves the rest alone.
- `3:20.1` And if it ever drops a section, Halyard puts it back word for word.
- `3:25.1` Approve the high-confidence drafts, then apply.
- `3:28.6` Six written to the backlog on GitHub, and the apply is recorded.

## Undo and the write audit (3:32 to 3:49)

- `3:32.5` Every apply is recorded with what it replaced.
- `3:36.1` Undo previews first, then restores the earlier text.
- `3:39.3` Six items restored.
- `3:41.1` Anything a person edited since is left alone.
- `3:44.3` The proposals go back to pending, so approve and apply again when you're ready.

## Intake (3:49 to 4:06)

- `3:49.5` Work comes in from anywhere.
- `3:51.4` A raw ticket, or a note typed straight into Intake.
- `3:55.3` Two loose notes, no structure at all.
- `3:58.2` Preview the drafts.
- `3:59.1` Halyard turns each note into a structured work item and copies it into the backlog, with a link back to where it started.

## Plan and size (4:06 to 4:22)

- `4:06.6` Plan fills the next sprints from ready stories.
- `4:09.7` Capacity comes from the team file.
- `4:11.5` Owners are matched on skills, and anything that slipped last sprint goes first.
- `4:17.4` Skills come from Shellback peer cards today.
- `4:20.5` A live Shellback link is planned.

## Vision (4:22 to 4:48)

- `4:22.6` Upward, Halyard drafts the portfolio story for leadership.
- `4:26.1` This one is the live model, thinking.
- `4:28.9` Themes, priorities, risks and the next quarter, with the facts every claim rests on.
- `4:34.5` Everything it says about the backlog, it can point to.
- `4:38.8` The leadership page puts features on track, velocity, ready backlog, capacity and blockers on one screen.

## Integrations and what is planned (4:48 to 5:16)

- `4:48.0` One click exports backlog health for Semaphore, as four tables ready to chart.
- `4:52.5` The weekly dashboard opens in Outlook as a draft, so a person reviews it and presses send.
- `4:58.0` Next on the chart: a runner on the team's repositories.
- `5:02.2` It watches commits and pull requests, and writes the story for the work it sees.
- `5:07.3` Developers stop doing the admin.
- `5:09.3` The product owner approves what the runner proposes, through the same diff and the same gate.

## Production stays shut (5:16 to 5:31)

- `5:16.9` Production stays shut.
- `5:17.8` Promote needs a production write mode, an explicit allow flag, a typed phrase and a diff, and none of it can be switched on from the browser.
- `5:26.3` The write audit lists every write Halyard made.
- `5:30.0` Every one went to the backlog.

## Close (5:31 to 5:50)

- `5:31.8` Halyard proposes.
- `5:33.2` People decide.
- `5:34.3` That's the watch.
- `5:35.6` This demo took longer to make than the tool took to build.
- `5:40.2` So why would you pay for Azure DevOps Boards or Jira?
- `5:44.5` The tools are changing, and compute and creativity are the new frontier.
