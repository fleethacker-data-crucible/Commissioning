# PacketRat demo script (Renoise voices; picture ranges are seconds of each recorded chapter)

## t00-open
- **HARLAN** _(card: open)_: Important tasking gets buried in email. PacketRat reads the mail, finds what needs you, shows the reason and the source for every action, and sends nothing. A person decides.

## t01-arch
- **SULLIVAN** _(arch 0.02-10.52s)_: PacketRat is for anyone whose important tasking gets buried in email. It turns an inbox into a short action queue, with the reason beside every item.
- **REYES** _(arch 10.52-21.82s)_: Mail comes in three ways: exported message files, classic Outlook, or Microsoft Graph. This demo reads files. Outlook and Graph are built, but not verified live.
- **SULLIVAN** _(arch 21.82-33.52s)_: Everything runs on this PC. A launcher starts a PowerShell service on loopback, a browser shows the queue, and your rules, dismissals and counts live in a local data folder.
- **REYES** _(arch 33.52-42.32s)_: For judgment it calls a model, always through Fairlead. PacketRat holds only its own Fairlead key, and Fairlead gets OpenAI's key from Lazarette.
- **SULLIVAN** _(arch 42.32-49.32s)_: The model suggests. Your rules decide the priority, and your own overrides and dismissals win over both.
- **REYES** _(arch 49.32-61.02s)_: Out of it come drafts for review in Outlook, a counts file for Semaphore, and a backlog item for Halyard. PacketRat saves them; the receiving side is not tried live.
- **SULLIVAN** _(arch 61.02-69.42s)_: And the rule that matters most: PacketRat never sends or deletes mail. A person approves every reply.

## t02-setup
- **SULLIVAN** _(c00 24.0-47.0s)_: Fairlead holds the real model key. OpenAI's key sits in Lazarette, the vault on this PC, and is shared with Fairlead by name. How it gets there is in the Halyard video.
- **REYES** _(c01 0.1-11.0s)_: Every tool in the fleet gets its own Fairlead key. Pick PacketRat, install it, and it lands in Windows Credential Manager. PacketRat holds no model key itself.
- **SULLIVAN** _(c01 11.0-25.0s)_: Back in PacketRat, Configuration has a Fairlead check. It is local only: it looks for the key in Credential Manager and contacts nothing. Found.

## t03-source
- **SULLIVAN** _(c02 0.2-19.5s)_: PacketRat starts from the launcher. Two settings are optional: batch classification, which gets a typed record for every message, and your address, so it knows which mail is addressed to you.
- **REYES** _(c02 19.5-33.3s)_: For mail it can read classic Outlook, Microsoft Graph, or exported message files. Here it reads fourteen invented messages from a folder, so no mailbox is on screen.
- **SULLIVAN** _(c02 33.3-41.5s)_: Point it at the folder and save. Nothing is read until you analyze.

## t04-analyze
- **REYES** _(c03 3.9-12.0s)_: Analyze inbox. PacketRat reads the folder and sends the messages to the model through Fairlead. A real model, a few seconds.
- **SULLIVAN** _(c03 12.0-18.5s)_: Fourteen messages classified: eight need a reply, six need nothing. Every claim links back to its source message.
- **REYES** _(c03 18.5-27.4s)_: And Fairlead's activity log shows the call: PacketRat's key, the smart route, served by OpenAI's GPT four point one.

## t05-queue
- **SULLIVAN** _(c04 0.2-8.5s)_: Overview shows the shape of the run: open actions, how many are high priority, and the next moves.
- **REYES** _(c04 8.5-20.2s)_: The action queue lists every follow-up with its reason. The badge access and the same-day invoice are High: the model said so, and the rules kept it. The rest are Medium.
- **SULLIVAN** _(c04 20.2-31.0s)_: A person overrides any priority. Lunch Friday is not tasking: it goes to Low, then Dismiss with a reason, and PacketRat remembers.
- **REYES** _(c04 31.0-44.9s)_: Dismissal memory keeps the reason, and Restore brings the item back. Overrides and dismissals survive the next scan.

## t06-draft
- **SULLIVAN** _(c05 5.6-13.4s)_: Draft opens a reply for any action. Add a line of guidance, for example: approve it, and confirm in the finance portal before fifteen hundred.
- **REYES** _(c05 13.4-22.0s)_: Generate draft sends the item to the model. One suggested reply, editable, with no signature of its own.
- **SULLIVAN** _(c05 22.0-29.8s)_: Copy it. With Outlook mail, Open in Outlook puts it above your signature for review. Nothing is ever sent for you.

## t07-report
- **REYES** _(c06 0.1-14.2s)_: The briefing lists the must-reply items. Each Email number is a verified source: the reference is checked against the scan, so a model cannot invent one.
- **SULLIVAN** _(c06 14.2-26.2s)_: Pick a section, pick Action plan, Generate. The model reads only that section, and the plan is advice, not a task record.
- **REYES** _(c06 26.2-36.0s)_: For the whole report, a leadership briefing: a status summary to review, marked as AI interpretation, never an authoritative record.
- **SULLIVAN** _(c06 36.0-48.4s)_: And every retained action keeps its source, with the sender and the reason, ready to draft or track.

## t08-rules
- **SULLIVAN** _(c07 0.1-16.6s)_: Priority is explainable. Configuration lists the rules in order: security and mandatory action first, then direct requests from your organization, then any direct request, then replied and newsletters, which are left out. First match wins, and you can add your own.
- **REYES** _(c07 16.6-24.9s)_: Dismissal memory keeps what you dismissed, and what the rules leave out, each with a Restore button.

## t09-integrations
- **SULLIVAN** _(c08 9.8-20.4s)_: Every button has a named command. A script or an agent can show the queue, or analyze, with no browser.
- **REYES** _(c08 20.4-30.4s)_: Stats show counts what PacketRat did, times the minutes assumed per action. It is an estimate, not a measurement, and not a score for anyone.
- **SULLIVAN** _(c08 30.4-45.0s)_: Stats export saves the raw counts as JSON, and a small script turns them into a CSV that Semaphore or a spreadsheet can load.
- **REYES** _(c08 45.0-56.2s)_: And item handoff saves a tracked mail as a backlog candidate in the format Halyard's Intake reads. Title, action, urgency. No sender, no message body.

## t10-timed
- **REYES** _(c10 7.3-19.5s)_: The same fourteen messages. By hand, one person took one minute twenty. With PacketRat, four seconds to analyze, then fifty seconds to review its queue.
- **SULLIVAN** _(c10 19.5-33.4s)_: A modest saving on only fourteen messages. One person, one run each, not a study. The burden record keeps both numbers, and anyone can enter their own.

## t11-safety
- **REYES** _(c11 2.7-14.8s)_: Verified live in this recording: exported files, a real model through Fairlead, the queue, drafts, the briefing with checked sources, and the files PacketRat saves.
- **SULLIVAN** _(c11 14.8-29.6s)_: Not verified live: classic Outlook, Microsoft Graph, Semaphore reading the counts, Halyard importing the hand-off. Minutes saved is an estimate. Every message here is invented.
- **SULLIVAN** _(c09 4.5-17.3s)_: The authority statement is one command. PacketRat reads mail and proposes work, and a person decides. It changes mail or saved data only on a named command, and it never sends or deletes mail.
- **REYES** _(c09 17.3-26.3s)_: End session stops the local service, and so does closing the tab.

## t12-close
- **HARLAN** _(card: close)_: PacketRat sorts. People decide. That's the run. Fair winds.
