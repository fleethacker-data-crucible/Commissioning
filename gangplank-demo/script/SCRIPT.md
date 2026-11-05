# Gangplank demo: narration with timings

Voices: Renoise seed-audio-1.0 clones. HARLAN opens and closes, SULLIVAN and REYES volley. Times are `m:ss` in `Gangplank-demo.mp4` (180.9 s). The wording below is the caption text; the narrators say "local host" for "localhost" (a pronunciation fix, spelling kept in captions).

Everything on screen is the real Gangplank host running against a synthetic GitHub (`dev/fake-github.mjs`) with a live local model through Fairlead; only the repository data is seeded.

## t00-open

- **0:00** HARLAN: Most people who need to change a project were never taught Git. Gangplank puts them on a branch of their own, in a browser, checks what they save, and hands the work to the team as a review request. The shared branch never moves.

## t01-arch

- **0:14** REYES: Gangplank runs on your PC. A PowerShell server listens on localhost, your browser is the interface, and nothing like git, Node or Python is needed.
- **0:26** SULLIVAN: Inside the server: Smart Save, the Sentinel secret scan, and an audit log. You edit files in an ordinary folder.
- **0:35** REYES: Out to GitHub or GitLab over HTTPS, on a branch of your own. AI help goes through Fairlead only. Lazarette, the vault, is an opt-in source for Git tokens.
- **0:48** SULLIVAN: Safe by design: your branch only, stop if it moved, secrets blocked, every write audited. Single sign-on and roles are planned, not built.

## t02-setup

- **1:00** REYES: Setup starts in Fairlead. One click installs a key for Gangplank in Windows Credential Manager. The key is never shown, and Gangplank reads it from there.
- **1:12** SULLIVAN: Then launch. A local server starts and your browser gets a one-time link. This is the test-mode launcher, so the GitHub behind it is synthetic and Lazarette is off.

## t03-scenario

- **1:22** REYES: The job: a watchstander must add weekend maintenance notes to the team project. Paste the address, connect, name a branch, and start.
- **1:34** SULLIVAN: Gangplank downloads a fresh copy to a folder of their own. They edit with ordinary tools: the notes, a readme line, and by mistake an old deploy script with a token in it.
- **1:47** REYES: Smart Save lists what changed. The script with the token is excluded automatically, and the Sentinel scan names it: a possible GitHub credential.
- **1:59** SULLIVAN: For the commit title, Refine using AI asks first. Only file names and change types go out, through Fairlead, to a local model.
- **2:10** REYES: Publish asks again, then makes one commit on their branch. The review request asks again, then opens a pull request for the team.

## t04-evidence

- **2:22** SULLIVAN: Now the trust check. A teammate pushes to the same branch. Gangplank sees it on refresh and stops: saving stays off until they get the latest. It never force-updates.
- **2:32** REYES: The review request is listed for the team. Every write is in the audit log: the branch, the commit, the review, when and where, never contents or tokens.
- **2:41** SULLIVAN: And the model call is on Fairlead's own log: client Gangplank, local route, served by a small local model.

## t05-close

- **2:50** HARLAN: That was Gangplank in test mode: a synthetic GitHub, a live local model through Fairlead, and the real safeguards. Its own branch, its own review. Fair winds.
