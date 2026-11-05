# SnapShackle demo: script

Each task is one Renoise generation (20 credits). Picture ranges are seconds in the named clip.


## t00-open
- **HARLAN** _(c01 0-14 s)_: A support engineer has to share a screenshot of a ticket, and it shows an email, a phone number and a deploy token. SnapShackle covers them before the picture leaves, and keeps the evidence. Everything on screen is invented, and this is an expanding prototype.

## t01-arch
- **SULLIVAN** _(c02 1.5-12.1 s)_: Here is how it works. It all runs on this one computer: double-click the launcher and a PowerShell host on loopback serves the studio to your browser.
- **REYES** _(c02 12.1-18.6 s)_: Captures and settings stay in one local folder: a PNG, and a small record beside it.
- **SULLIVAN** _(c02 18.6-26.8 s)_: What goes in is pixels from this PC: a region, a window or a screen, or an image you open or drop in.
- **REYES** _(c02 26.8-36.1 s)_: What comes out is a file you chose: a flat PNG, the clipboard, or a copy into a share folder you set up.
- **SULLIVAN** _(c02 36.1-52.4 s)_: AI is optional, and off. The host calls Fairlead on loopback with SnapShackle's own key, installed in Credential Manager. Lazarette holds Fairlead's provider key, and is not linked to SnapShackle itself.
- **REYES** _(c02 52.4-61.1 s)_: Captures can go to Bowerbird, Capstan and Scrimshaw as files with a manifest. Slack, Teams and Jira upload are not built.
- **SULLIVAN** _(c02 61.1-72.6 s)_: And the guardrails: loopback and a session token, nothing uploaded by SnapShackle, AI off until you turn it on, and you tick every suggestion.

## t02-setup
- **REYES** _(c03 0.0-12.3 s)_: To start from zero, run the start script with its own data folder. It binds an available loopback port, here eighty-seven sixty-six, and prints the address.
- **SULLIVAN** _(c03 12.3-28.5 s)_: Then make the evidence: a purpose-built window that exists only for this demo, captured with PrintWindow, read by Windows OCR, and checked for leftovers. Invented content only. Nothing else on this desktop is ever in frame.

## t03-redact
- **REYES** _(c04 0.0-6.8 s)_: Open the invented ticket window that evidence capture made, then mark it up.
- **SULLIVAN** _(c04 6.8-25.3 s)_: An arrow at the token, a box on the ticket line. Undo is one step, and redo brings it back. Then numbered steps and a text note. Every mark stays a layer you can move.
- **REYES** _(c04 25.3-33.0 s)_: Now the point of the tool. Find sensitive info reads the image with Windows OCR.
- **SULLIVAN** _(c04 33.0-39.7 s)_: It finds the email, the phone number and the API token, and lists each one to tick or untick.
- **REYES** _(c04 39.7-49.5 s)_: Redact checked covers all three with solid boxes. Then redact every instance of the project name.
- **SULLIVAN** _(c04 49.5-55.2 s)_: Export writes a flat PNG, so the boxes are in the pixels.
- **REYES** _(c04 55.2-67.6 s)_: Save it to the library with tags and a note. The saved record is what we check next.

## t04-evidence
- **SULLIVAN** _(c05 0.0-12.6 s)_: Search finds it by the words inside the image, not just its name or tags: ticket forty-eight twenty-one.
- **REYES** _(c05 12.6-22.7 s)_: On disk it is a PNG, and a small record beside it, in this demo's own data folder.
- **SULLIVAN** _(c05 22.7-37.4 s)_: The record holds the tags, the note, and the text Windows OCR reads from the saved picture. The name, the phone and the token are not in it.
- **REYES** _(c05 37.4-49.8 s)_: Reading the saved file again from the command line proves it: no email, no phone, no token. That is the evidence trail.

## t05-ai
- **SULLIVAN** _(c06 0.8-11.2 s)_: AI help goes through Fairlead. SnapShackle has its own client there, so its calls can be told apart.
- **REYES** _(c06 11.2-22.6 s)_: Fairlead installed the key in Windows Credential Manager. This lists the target only, never the key. Lazarette is not involved on this side.
- **SULLIVAN** _(c06 22.6-37.3 s)_: Open the saved capture and turn AI help on. Privacy is local-only by default. For this demo I let the router pick any model, so the redacted picture goes to a cloud model through Fairlead.
- **REYES** _(c06 37.3-45.5 s)_: Describe image asks Fairlead, live, and the alt text comes back in a moment.
- **SULLIVAN** _(c06 45.5-52.0 s)_: Suggest annotations returns a checklist, and the status bar names the model: GPT-4.1.
- **REYES** _(c06 52.0-66.8 s)_: These are a model's guesses. It even offers to cover text that is already covered, so I untick those and keep only the box and the step.
- **SULLIVAN** _(c06 66.8-74.1 s)_: Add checked puts them in as normal layers, and one undo removes them all.
- **REYES** _(c06 74.1-86.6 s)_: And the evidence for the AI call is Fairlead's own log: client SnapShackle, the model, status two hundred. No image, and no prompt.

## t06-share
- **SULLIVAN** _(c07 0.0-11.3 s)_: Sharing is a file copy. Under Settings I name a folder, here an outbox, and the studio never uploads anything.
- **REYES** _(c07 11.3-22.5 s)_: Select the capture, choose that destination and share. A copy never overwrites an existing file.
- **SULLIVAN** _(c07 22.5-31.7 s)_: There it is in the outbox: the same PNG the library holds. Nothing was sent anywhere else.
- **REYES** _(c07 31.7-43.4 s)_: For Bowerbird, Capstan or Scrimshaw, the hand-off script copies chosen captures and writes a manifest with hashes, tags and the recognised text.
- **SULLIVAN** _(c07 43.4-57.3 s)_: Their import is their side, and I have not tested it here. The manifest holds no folder paths.
- **REYES** _(c07 57.3-66.6 s)_: End session stops the host and releases the port.

## t07-close
- **HARLAN** _(c08 0-15 s)_: The window, the customer and the token were all invented. Not built: Slack, Teams or Jira upload, and a direct Lazarette link. OCR can miss text, so look before you share. It still needs a run on a managed workstation.
