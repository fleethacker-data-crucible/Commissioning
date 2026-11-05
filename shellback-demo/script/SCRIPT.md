# Shellback demo: script

Each task is one Renoise generation (20 credits). Picture ranges are seconds in the named clip. c03r is Halyard footage, reused read-only.

## t00-open
- **HARLAN** _(c01 0-13 s)_: A supervisor has to staff a mission and see where the team is thin. Nobody wants a hidden skills score, and a résumé is a claim, not proof. Shellback shows only what people confirmed and chose to share. Everyone in this video is fictional.

## t01-arch
- **SULLIVAN** _(c02 1.5-10.5 s)_: Here is how it works. It all runs on this one computer: a small PowerShell server on loopback serves the app, and the app runs in your browser.
- **REYES** _(c02 10.5-16 s)_: Your workspace is stored in the browser, and exports can be encrypted.
- **SULLIVAN** _(c02 16-22.5 s)_: A résumé goes in as pasted text, a text file, a Word file, or the text layer of a PDF. Peer cards and an HR feed come in as files.
- **REYES** _(c02 22.5-29.5 s)_: Out come suggestions you confirm, and team coverage from three or more people who opted in. All of it works offline, with no AI.
- **SULLIVAN** _(c02 29.5-40.5 s)_: AI is optional. The model key sits in Lazarette, shared to Fairlead. Shellback has its own Fairlead key, sealed in the browser with your passphrase, and it calls Fairlead directly.
- **REYES** _(c02 40.5-47 s)_: An opt-in peer card is a plain file Halyard can read for planning. A live Halyard link, and a git or CI runner, are planned, not built.
- **SULLIVAN** _(c02 47-55.6 s)_: And the guardrails: loopback and a strict content policy, nothing shared without opt-in, three people before any aggregate, and you confirm every skill.

## t02-vault
- **SULLIVAN** _(c03r 0-11 s)_: The model key lives in Lazarette, the encrypted vault on this machine. This footage is from the Halyard demo: it is the same key, set up once for every tool.
- **REYES** _(c03r 11-28 s)_: Test credential checks it against OpenAI's read-only endpoint. HTTP two hundred, so the key is good.
- **SULLIVAN** _(c03r 28-36 s)_: Then share it with Fairlead by name. Fairlead sees only what you share.
- **REYES** _(c03r 36-50 s)_: Fairlead reads it from the vault and connects. Every model call Shellback makes goes through here.

## t03-setup
- **REYES** _(c04 0-10 s)_: Shellback gets its own Fairlead client key, so its calls can be told apart in the log.
- **SULLIVAN** _(c04 10-20 s)_: Fairlead keeps only a hash and shows the key once. Here is the Shellback client in the list.
- **REYES** _(c04 20-29.1 s)_: The page calls Fairlead directly, so Shellback's address is allowed as a browser origin.
- **SULLIVAN** _(c05 0-12 s)_: In Shellback, open Program, then Intelligence. Choose the Fairlead router on this computer.
- **REYES** _(c05 12-20 s)_: By default it asks for local engines only. This demo machine has no local model, so I allow cloud engines. Only synthetic text goes through.
- **SULLIVAN** _(c05 20-30 s)_: Paste the client key. It is sealed with a passphrase in the browser and never stored in the clear.
- **REYES** _(c05 30-42.6 s)_: Test connection. Fairlead answers, ninety-two models are available, and Shellback is using GPT-5 mini.

## t04-intake
- **SULLIVAN** _(c06 0-10 s)_: Meet the employee. Priya Natarajan is fictional, and so is her résumé. The file is read in the browser and nothing is stored.
- **REYES** _(c06 10-27.2 s)_: Find skill suggestions sends the text to a real model through Fairlead. This is the live wait, sped up.
- **SULLIVAN** _(c06 27.2-39 s)_: These are suggestions, not facts. Priya confirms two and dismisses one. Nothing counts until she says so.
- **REYES** _(c06 39-49 s)_: Her confirmed skills form her web. Everything else stays a suggestion, and dismissed ones never come back.

## t05-team
- **SULLIVAN** _(c07 0-6.5 s)_: Now the supervisor's view: a synthetic team of twenty people who chose to share.
- **REYES** _(c07 6.5-14.7 s)_: Coverage by domain comes only from shared, confirmed skills. With fewer than three people, nothing shows.
- **SULLIVAN** _(c07 14.7-21 s)_: The supervisor brief shows exactly what it is built from: counts and skill names, never people.
- **REYES** _(c07 21-38.3 s)_: Write the brief, and those aggregate numbers go to the model through Fairlead. Live again, sped up.
- **SULLIVAN** _(c07 38.3-45.6 s)_: Plain language, no names, no scores, and it says it is aggregate.
- **REYES** _(c07 45.6-54.4 s)_: A mission needs AWS architecture from two people. Shellback checks that requirement against the people who opted in.

## t06-evidence
- **SULLIVAN** _(c08 0-11.5 s)_: Trust and data lists what leaves this computer. With the router selected it says so, and names what is never sent.
- **REYES** _(c08 11.5-20 s)_: Sharing is a choice, card by card.
- **SULLIVAN** _(c08 20-32 s)_: Export asks twice: how many skills will leave, and that the file cannot be recalled, then whether to encrypt it.
- **REYES** _(c08 32-46 s)_: The card holds confirmed skills only. This is the file Halyard planning reads today. A live link is planned.
- **SULLIVAN** _(c08 46-58 s)_: And the evidence trail for the AI is Fairlead's own request log: client Shellback, model GPT-5 mini, status two hundred.

## t07-close
- **HARLAN** _(c09 0-13 s)_: Claims stay claims. Everything here was synthetic, and a skill counts only when its owner confirms it. Not built yet: a live Halyard link, and the consent ledger in the interface. No scores, no rankings.


## Timed narration (final cut, as in the captions)
Times are minutes:seconds in Shellback-demo.mp4. The soft captions are the same wording split into at most two rows of 42 characters.

- 0:00  A supervisor has to staff a mission and see where the team is thin.
- 0:04  Nobody wants a hidden skills score, and a résumé is a claim, not proof.
- 0:09  Shellback shows only what people confirmed and chose to share.
- 0:13  Everyone in this video is fictional.
- 0:16  Here is how it works.
- 0:17  It all runs on this one computer: a small PowerShell server on loopback serves the app, and the app runs in your browser.
- 0:27  Your workspace is stored in the browser, and exports can be encrypted.
- 0:31  A résumé goes in as pasted text, a text file, a Word file, or the text layer of a PDF.
- 0:36  Peer cards and an HR feed come in as files.
- 0:39  Out come suggestions you confirm, and team coverage from three or more people who opted in.
- 0:46  All of it works offline, with no AI.
- 0:50  AI is optional.
- 0:51  The model key sits in Lazarette, shared to Fairlead.
- 0:55  Shellback has its own Fairlead key, sealed in the browser with your passphrase, and it calls Fairlead directly.
- 1:04  An opt-in peer card is a plain file Halyard can read for planning.
- 1:08  A live Halyard link, and a git or CI runner, are planned, not built.
- 1:14  And the guardrails: loopback and a strict content policy, nothing shared without opt-in, three people before any aggregate, and you confirm every skill.
- 1:26  The model key lives in Lazarette, the encrypted vault on this machine.
- 1:29  This footage is from the Halyard demo: it is the same key, set up once for every tool.
- 1:36  Test credential checks it against OpenAI's read-only endpoint.
- 1:40  HTTP two hundred, so the key is good.
- 1:42  Then share it with Fairlead by name.
- 1:45  Fairlead sees only what you share.
- 1:48  Fairlead reads it from the vault and connects.
- 1:51  Every model call Shellback makes goes through here.
- 1:55  Shellback gets its own Fairlead client key, so its calls can be told apart in the log.
- 2:00  Fairlead keeps only a hash and shows the key once.
- 2:04  Here is the Shellback client in the list.
- 2:06  The page calls Fairlead directly, so Shellback's address is allowed as a browser origin.
- 2:12  In Shellback, open Program, then Intelligence.
- 2:15  Choose the Fairlead router on this computer.
- 2:18  By default it asks for local engines only.
- 2:21  This demo machine has no local model, so I allow cloud engines.
- 2:25  Only synthetic text goes through.
- 2:27  Paste the client key.
- 2:28  It is sealed with a passphrase in the browser and never stored in the clear.
- 2:34  Test connection.
- 2:36  Fairlead answers, ninety-two models are available, and Shellback is using GPT-5 mini.
- 2:41  Meet the employee.
- 2:42  Priya Natarajan is fictional, and so is her résumé.
- 2:46  The file is read in the browser and nothing is stored.
- 2:50  Find skill suggestions sends the text to a real model through Fairlead.
- 2:54  This is the live wait, sped up.
- 2:58  These are suggestions, not facts.
- 3:00  Priya confirms two and dismisses one.
- 3:04  Nothing counts until she says so.
- 3:07  Her confirmed skills form her web.
- 3:09  Everything else stays a suggestion, and dismissed ones never come back.
- 3:15  Now the supervisor's view: a synthetic team of twenty people who chose to share.
- 3:20  Coverage by domain comes only from shared, confirmed skills.
- 3:24  With fewer than three people, nothing shows.
- 3:28  The supervisor brief shows exactly what it is built from: counts and skill names, never people.
- 3:34  Write the brief, and those aggregate numbers go to the model through Fairlead.
- 3:39  Live again, sped up.
- 3:41  Plain language, no names, no scores, and it says it is aggregate.
- 3:46  A mission needs AWS architecture from two people.
- 3:50  Shellback checks that requirement against the people who opted in.
- 3:53  Trust and data lists what leaves this computer.
- 3:57  With the router selected it says so, and names what is never sent.
- 4:02  Sharing is a choice, card by card.
- 4:05  Export asks twice: how many skills will leave, and that the file cannot be recalled, then whether to encrypt it.
- 4:12  The card holds confirmed skills only.
- 4:15  This is the file Halyard planning reads today.
- 4:18  A live link is planned.
- 4:19  And the evidence trail for the AI is Fairlead's own request log: client Shellback, model GPT-5 mini, status two hundred.
- 4:28  Claims stay claims.
- 4:30  Everything here was synthetic, and a skill counts only when its owner confirms it.
- 4:37  Not built yet: a live Halyard link, and the consent ledger in the interface.
- 4:44  No scores, no rankings.
