# Halyard — full walkthrough (long form)

Shot list and narration written from the live dry run on 2026-11-04 (real GitHub, real OpenAI through Fairlead,
key held in Lazarette; the only synthetic data is the seeded backlog in Halyard-Ballast). Narration says
"the backlog" for Halyard-Ballast, never "sandbox".

**Voices.** Long form: TalkForge. Short presentation cut: Renoise (Seed Audio clones of HARLAN / SULLIVAN /
DELGADO, Gemini TTS female officer). Roles:

| Tag | Character | Role |
|---|---|---|
| CO | Captain HARLAN | opens and closes each chapter: the why |
| CHIEF | Chief SULLIVAN | hands-on: what to click, what to type |
| XO | Lt. Cmdr. REYES (female, clear, concise) | configuration, keys, safety gates |
| RADIO | Radioman DELGADO | integrations: Lazarette, Fairlead, Outlook, Semaphore, runner |

**Recording.** Capstan in Firefox (recorder profile), entire screen, cursor capture on, no audio. Crop to the
browser pane in the edit. One clip per chapter; Ctrl+Shift+F11 drops a marker at each beat.

---

## 0. Cold open (30 s)
- **Shot:** Halyard Overview, slow push-in on the hierarchy bars.
- **CO:** "Every backlog drifts. Stories without acceptance criteria, features without a parent, sizes nobody
  agreed. Halyard is the product owner's mate: it reads the backlog, finds the drift, drafts the fix, and waits
  for a human to approve it. Nothing moves without your say."

## 1. Before you start (60 s)
- **Shot:** release zip, unzip, folder view: `Launch-Halyard.bat`, `config\halyard.env.example`.
- **XO:** "You need three things on the machine: Halyard, Fairlead, and Lazarette. No installer, no admin rights.
  Halyard compiles its engine from source when it launches, so locked-down workstations can run it."

## 2. Get a model key and stow it in Lazarette (90 s)  — reusable clip for every Fleet demo
- **Shot:** platform.openai.com → API keys → **Create new secret key**: name `fleet-tools`, expiry **7 days**,
  permissions All → **Create secret key** → **Copy**. *Blur: key dialog, account name, tracking ids.*
- **XO:** "One key for the whole fleet. Name it something generic, keep the expiry short, and copy it once.
  OpenAI shows it only this one time."
- **Shot:** Lazarette → unlock (*blur passphrase*) → **New item** → **API credential**. Name `OPENAI_API_KEY`,
  account `fleet-tools`, website `https://platform.openai.com/api-keys`, Endpoint `https://api.openai.com/v1`
  (no tags). Paste into **Key / token** (*blur*). **Create item**.
- **Shot:** **Test credential** → **Send and test** → "Key confirmed · HTTP 200".
- **RADIO:** "Lazarette is the vault. It checks the key against OpenAI's read-only endpoint before anything uses it."

## 3. Share it with Fairlead (60 s)
- **Shot:** Lazarette → Settings → **Fairlead** tab → Name Fairlead asks for `OPENAI_API_KEY`, vault item
  `OPENAI_API_KEY · fleet-tools` → **Share with Fairlead** → toast.
- **RADIO:** "Fairlead asks for secrets by name and sees only what you share. Everything else in the vault stays dark to it."
- **Shot:** Fairlead → Providers → Lazarette card: *Connected*, `OPENAI_API_KEY shared`. OpenAI provider:
  label reads *API key (from Lazarette as OPENAI_API_KEY)* → **Test connection** → "Connected · 83 models".
  (If an old key was saved there: **Forget saved key** first — fixed live, Fairlead#65.)
- **XO:** "Fairlead is the only thing that talks to OpenAI. Every tool gets its own Fairlead key instead, so you
  change or revoke the provider key in one place."

## 4. Give Halyard its Fairlead key and configure it (90 s)
- **Shot:** Fairlead → Clients → Install for an app: **Halyard** → **Install for this app** →
  "Saved to Windows Credential Manager as Fairlead/Halyard".
- **Shot:** editor on `config\halyard.env`:
  ```
  HALYARD_PROVIDER=github
  HALYARD_SOURCE_REPO=fleethacker-data-crucible/Halyard-Ballast
  HALYARD_SANDBOX_REPO=fleethacker-data-crucible/Halyard-Ballast
  HALYARD_WRITE_MODE=sandbox
  HALYARD_FAIRLEAD_MODEL=auto
  LAZARETTE_PATH=C:\...\Lazarette
  HALYARD_USE_LAZARETTE=1
  HALYARD_LAZARETTE_ITEM_GitHub=<your GitHub token item>
  ```
- **XO:** "Where Halyard reads, where it may write, and the write mode live only in this file. The browser
  cannot change them. Writes go to the backlog repository you name, and nowhere else."
- **Shot:** double-click `Launch-Halyard.bat` → Settings: Model calls *ready*, Key *installed* → **Test model**
  → "Reply from auto: OK · 2.2 s".
- **CHIEF:** "Halyard to Fairlead, Fairlead to Lazarette for the key, out to the model and back. Two seconds."

## 5. Seed the backlog (60 s)
- **Shot:** Sandbox page → Total work items **30** → gaps 20% → **Seed 30 items** → progress → Seed runs: complete.
- **CHIEF:** "For the walkthrough we seed a synthetic backlog: themes down to tasks, a fifth of it with
  deliberate gaps. Every item carries a run label, so the whole run comes out again in one click."
- **Shot:** GitHub issue list for Halyard-Ballast, the new issues with `halyard-synthetic`, `halyard-run::…`.

## 6. See the drift (75 s)
- **Shot:** Overview → levels, Needs attention, Definition-of-ready gaps. Review → *Only items that need
  attention*, one row expanded: gaps and *Fix with*. Hierarchy tree.
- **CHIEF:** "Every item is checked against its level's definition of ready and the declared parent chain. Each
  finding tells you which fix closes it."

## 7. The intelligence layer: draft, read, approve, apply (2 min)
- **Shot:** Proposals → With the model → Draft missing sections, At most 10 → **Draft** → "Drafting 4/6…".
- **CO:** "This is the part a product owner never has time for."
- **Shot:** batch: six proposals, *high* confidence. Open #679 *Redact tokens from diagnostic logs* → diff:
  green Acceptance criteria added; Parent Feature and Sizing unchanged.
- **CHIEF:** "Read the diff. The model adds what is missing and keeps what is there; if it ever drops a section,
  Halyard puts it back word for word and tells you." *(fixed live: Halyard#64)*
- **Shot:** **Approve all high-confidence** → **Apply 6 approved** → GitHub issue #679 refreshed with the new section.
- **Shot (optional):** Propose sizes → Story points → **Propose sizes**; Tag with the model.

## 8. Undo (45 s)
- **Shot:** Applied changes → "6 written · latest" → **Undo** → "Restore 6 items" → GitHub shows the old text.
  Proposals back to Pending. *(the Undo row now appears right after Apply: Halyard#65)*
- **XO:** "Every apply is recorded with what it replaced. Undo previews first, and leaves alone anything a
  person edited since."

## 9. Bring work in: intake (60 s)
- **Shot:** Intake → Source tickets with guessed levels. Type two notes:
  "Export the leadership dashboard as a PDF for the weekly brief…" / "Alert the on-call engineer when nightly
  ingestion runs more than an hour late." → **Preview drafts** → **Copy 2 into the backlog**.
- **CHIEF:** "Raw tickets and loose notes come in as structured work items, with a link back to where they started."

## 10. Plan the sprint (75 s)
- **Shot:** Plan → Sprint review table → **Preview plan** → sprints filled, owners by skill, skill gaps warning.
- **CHIEF:** "Capacity from the team file, owners matched on skills, and anything that slipped last sprint goes first."
- **RADIO:** "Skills come from peer cards exported from Shellback. A live Shellback link is planned."

## 11. Vision and leadership (90 s)
- **Shot:** Vision → **Draft with the model** → themes, priorities, risks, next quarter, *Facts this draft rests on*.
- **CO:** "Upward, Halyard drafts the portfolio story for leadership, and shows the facts under every claim."
- **Shot:** Leadership → features on track, velocity, ready backlog, capacity, blockers → **Read aloud** (short).

## 12. Integrations (2 min)
- **Outlook — RADIO:** terminal:
  `.\scripts\Send-HalyardReport.ps1 -Via Outlook -Draft -Subject "Platform weekly"` → Outlook opens the
  dashboard as a new message; nothing is sent until a person presses Send. *(new: Halyard#66)*
  Weekly: `Register-HalyardReportSchedule.ps1`.
- **Semaphore — RADIO:** Leadership → **Export for Semaphore** → toast with the folder → Semaphore → Data →
  add the four CSV files → chart on `items.deficiencies`. *(new button: Halyard#67)*
- **Runner (planned) — CO:** "Next: a runner on the team's repositories watches commits and pull requests,
  and Halyard writes the story for the work it sees: what changed, which backlog item it belongs to, what is
  left. Developers stop doing the admin; the product owner approves what the runner proposes, through the same
  diff and the same gate."
- **Lazarette for GitHub — XO:** the GitHub token can come from Lazarette too (`HALYARD_USE_LAZARETTE=1`).

## 13. Safety, cleanup, close (60 s)
- **Shot:** Sandbox → bottom line "Promote to production: off · how to turn it on". *(Halyard#63)*
- **XO:** "Production stays shut: it needs a production write mode, an explicit allow flag, a typed phrase and
  a diff. None of that can be switched on from the browser."
- **Shot:** Diagnostics → Write audit: every write, all to the backlog repository. Sandbox → **Delete run**.
- **CO:** "Halyard proposes. People decide. That's the watch. Fair winds."

## 14. "Found it, fixed it" segment (optional, 60–90 s)
Bugs found during the live dry run and fixed on the spot (each its own PR):
Capstan#61 Firefox recording · Fairlead#65 forget saved key · Halyard#63 promote line · Halyard#64 model drafts keep
sections · Halyard#65 Undo appears after Apply · Halyard#66 Outlook draft · Halyard#67 Semaphore button.

---

## Blur list
OpenAI key dialog, account name and key tracking ids · Lazarette passphrase and Key / token field · launcher
console session links (`?session=`, `#k=`) · Windows user name in paths (Settings → Environment, Diagnostics file path).

## Reset checklist before the clean recorded run
1. Halyard-Ballast: **Wipe everything** (you click Delete permanently), so the old closed issues are gone.
2. Delete `config\halyard.env`; revoke the `Halyard` key in Fairlead → Clients; clear Settings label filter.
3. Lazarette: delete the `OPENAI_API_KEY` item and its Fairlead share; Fairlead: OpenAI provider with no key.
4. OpenAI: revoke `fleet-tools` (it is recreated on camera).
5. Halyard running from a build with PRs #63–#67 merged (today: local branch `demo/halyard-live`).
6. Seed **30** items, not 100.
7. Hide Discord / notifications; Capstan in the Firefox recorder profile.
