# Eight Bells demo: narration script

Ten Renoise generations (seed-audio-1.0, cloned voices: HARLAN material:394188, SULLIVAN task:444041, REYES material:426404), one per chapter. Each line is timed to what the recording shows at that moment.

## t00-open
- **HARLAN** (c01 0-11 s): The relieving watchstander needs to know what remains unresolved, and where the evidence is. Eight Bells is a focused watch-turnover tool: it reads the log, flags what needs a second look, and drafts the turnover with a source line behind every point. Today's log is synthetic.

## t01-arch
- **SULLIVAN** (c02 1.5-10.5 s): Here is how it works. Everything runs on this one computer: the page in your browser, a small PowerShell server on loopback, and a launcher you double-click. Closing the tab stops the server.
- **REYES** (c02 10.5-16 s): Records live in an encrypted store for your Windows account, with a hash-chained audit trail.
- **SULLIVAN** (c02 16-22.5 s): Watch logs go in: text, CSV, JSON, tables, XML, and the text layer of digital PDFs.
- **REYES** (c02 22.5-29.5 s): Out come findings and a turnover draft, built offline by rules, with no AI. Every point links to its line in the log.
- **SULLIVAN** (c02 29.5-40.5 s): An AI briefing is optional. The model key sits in Lazarette, shared to Fairlead. Eight Bells has its own Fairlead key, and requests stay local-only unless you say otherwise.
- **REYES** (c02 40.5-46.6 s): Reviewed lessons can go to Halyard as a hand-off file, and counts go to Semaphore as a CSV. Not built yet: OCR for scans, and vendor log formats.
- **SULLIVAN** (c02 46.6-55.1 s): And the guardrails: loopback only, drafts tied to their source, AI only when you consent, and every finding needs a person.

## t02-setup
- **REYES** (c03 0-6 s): To use the AI briefing, give Eight Bells its own key. In Fairlead, open Clients, and choose Install for an app.
- **SULLIVAN** (c03 6-12.5 s): Name it EightBells and install. Fairlead makes the key and saves it straight to Windows Credential Manager. It is never shown.
- **REYES** (c03 12.5-21.4 s): Fairlead's OpenAI connection already takes its key from Lazarette, so the provider key never touches Eight Bells.
- **SULLIVAN** (c03 21.4-29.4 s): Back in Eight Bells, the router card shows Fairlead answering, and its own key installed.

## t03-import
- **SULLIVAN** (c04 0-7.2 s): Start with an empty store, and import a log. This one is a simulated engineering watch, marked synthetic in its first line.
- **REYES** (c04 7.2-16.4 s): The preview shows every entry with its time, its equipment and its source line number, before anything is saved.
- **SULLIVAN** (c04 16.4-19.6 s): Import, and it is stored encrypted.

## t04-quality
- **REYES** (c05 0-7.7 s): Quality review found three advisory findings. They are prompts to check the record, not conclusions.
- **SULLIVAN** (c05 7.7-13.5 s): The first is an entry out of sequence: line eight is a late entry, logged after a later time. Each finding shows its source lines.
- **REYES** (c05 13.5-24.5 s): The second is a possible unresolved condition: Pump B vibration stays open from the first line to the last. A reviewer records a disposition and a reason.
- **SULLIVAN** (c05 24.5-30.4 s): The review is recorded beside the finding. The source log is never changed.

## t05-offline
- **REYES** (c06 0-6.2 s): Now the turnover, offline. This browser can reach nothing but this computer, and AI is off.
- **SULLIVAN** (c06 6.2-12.8 s): Generate the draft. The rules engine writes it in an instant: observations, open conditions, and quality findings.
- **REYES** (c06 12.8-22.9 s): Select any line number and the source line opens below, in the log exactly as imported. That is the evidence trail.

## t06-guard
- **SULLIVAN** (c07 0-9.4 s): Now the stale-draft guard. Generate a draft for this log.
- **REYES** (c07 9.4-21.2 s): Then the log is corrected, and a new version is imported.
- **SULLIVAN** (c07 21.2-32.6 s): Select the corrected log and the old draft is gone. Copy and Save are disabled. A draft cannot be exported once its source has changed.
- **REYES** (c07 32.6-41.7 s): Even going back to the original does not bring it back. Generate again, and the draft is rebuilt from the source as it is now.

## t07-ai
- **SULLIVAN** (c08 0-11.1 s): Now the optional AI briefing, through Fairlead. The card shows Fairlead answering and the key installed. Keep requests on this PC is ticked, so only local models may answer.
- **REYES** (c08 11.1-24.1 s): Ask for a draft with the consent box ticked. No local model is loaded on this PC, so Fairlead refuses, and nothing leaves the machine. Eight Bells says why.
- **SULLIVAN** (c08 24.1-35.3 s): For synthetic data only, untick it and name a model. Fairlead may now use a cloud model, under that provider's terms.
- **REYES** (c08 35.3-43.6 s): Same request, now with cloud allowed.
- **SULLIVAN** (c08 43.6-50.7 s): A real answer in about two seconds, marked unverified, citing line numbers to check against the log.
- **REYES** (c08 50.7-61.6 s): Fairlead's Activity page shows both calls from the client EightBells: one refused as private, one served by OpenAI's gpt-4.1-mini.

## t08-handoffs
- **REYES** (c09 0-9 s): Across the two logs, Eight Bells notices that Pump B stays open, and suggests a lesson.
- **SULLIVAN** (c09 9-18.8 s): Save it as a draft, then mark it reviewed. That mark is local, not a signed approval.
- **REYES** (c09 18.8-21.2 s): Export it for Halyard.
- **SULLIVAN** (c09 21.2-34.3 s): Halyard's Intake reads that file through its API. It returns a story draft linked back to the lesson. Preview only, nothing written to the backlog. There is no button for it in Halyard's page yet.
- **REYES** (c09 34.3-46.9 s): Counts per watch go to Semaphore as a CSV: logs, open conditions, findings, lessons. No log text.

## t09-close
- **HARLAN** (c10 0-12 s): That is Eight Bells: a focused watch-turnover capability. It tells the relieving watch what is open, and where the evidence is. The log was synthetic, the findings are advisory, and a person verifies everything. Fair winds.

