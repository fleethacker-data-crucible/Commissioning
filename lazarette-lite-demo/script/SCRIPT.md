# Lazarette Lite demo: script

Narration for `Lazarette-Lite-demo.mp4` (3:16). Voices are cloned with Renoise: Captain Harlan opens and closes, Chief Sullivan and Lt. Cmdr. Reyes volley the middle. Times are from the master's caption cues (v1 wording, unchanged by the re-segmented `.srt`). The tool script on screen is a short stand-in, said so in the narration.


## Opening (Harlan)

On screen: c01: empty Lazarette Lite window.

- [0:00.2 to 0:06.6] Fleet tools need credentials by name, and they need somewhere sensible to keep them.
- [0:06.6 to 0:16.6] Lazarette Lite is the light answer: a browser window on the Windows Credential Manager you already have, with no new vault.
- [0:16.6 to 0:20.7] This is a short run, using throwaway credentials only.

## Architecture at a glance (Reyes and Sullivan)

On screen: animated diagram: launcher, browser tab, loopback server, guards, Credential Manager, Fleet-tool loader.

- [0:21.4 to 0:24.9] Lazarette Lite is a browser window on the Windows Credential Manager.
- [0:24.9 to 0:30.2] Double-click the launcher, and a small PowerShell server starts on this computer.
- [0:30.9 to 0:35.9] The server listens on loopback only, on a port Windows picks.
- [0:35.9 to 0:42.4] It answers only your own Windows user's processes, with a one-time launch token and a session cookie.
- [0:43.1 to 0:49.6] The secrets themselves stay in Windows Credential Manager, as ordinary generic entries under a prefix.
- [0:49.6 to 0:52.0] Lite ships no vault of its own.
- [0:52.7 to 1:00.6] Fleet tools reach them through a loader that answers to the same command names as Lazarette: get a secret by service and user.
- [1:01.3 to 1:07.6] What Lite does not do: custom fields, or Lazarette's key sharing with Fairlead.
- [1:07.6 to 1:10.3] That stays with the full Lazarette.
- [1:11.0 to 1:18.5] Safety: secrets stay hidden until you reveal them, delete asks first, and nothing outside its prefix is listed.

## Add a credential

On screen: c03: add throwaway fleet-tools / demo, masked entry, saved, Reveal (blurred).

- [1:18.8 to 1:21.8] First, add a credential in the browser.
- [1:21.8 to 1:26.2] Service fleet-tools, user demo, and a secret I made up for this demo.
- [1:26.2 to 1:30.6] The field masks it as it's typed, and none of it is a real password.
- [1:30.6 to 1:31.4] Save.
- [1:31.5 to 1:34.8] Saved, and it's already in Windows Credential Manager.
- [1:34.8 to 1:37.5] The secret stays hidden until someone clicks Reveal.
- [1:37.5 to 1:42.3] Here it is, blurred for the recording, because even a throwaway doesn't belong on screen.

## A Fleet tool asks by name

On screen: c04: terminal replay of Start-LiteFleet.ps1 with the stand-in tool, then an unknown name is refused.

- [1:42.9 to 1:44.9] Now a Fleet tool asks for it by name.
- [1:44.9 to 1:48.2] This is a short stand-in script, not a real tool.
- [1:48.2 to 1:53.9] It loads Lazarette the way the real ones do, and Start-LiteFleet points that loader at Lite.
- [1:54.6 to 1:57.8] It gets the secret: fifteen characters.
- [1:57.8 to 1:59.2] The value is never printed.
- [1:59.9 to 2:01.5] Now a name Lite doesn't hold.
- [2:01.5 to 2:03.6] It refuses with a plain error.
- [2:03.6 to 2:11.3] It never guesses, and it never hands back an empty password, so a tool fails early instead of running with nothing.

## Evidence trail and clean-up

On screen: c05/c06: Get-LiteItemNames, cmdkey listings, outside-prefix entry, delete with confirm, Quit.

- [2:11.3 to 2:12.6] Now the evidence trail.
- [2:12.6 to 2:17.4] Get-LiteItemNames returns names only, never a secret.
- [2:17.4 to 2:24.1] And this is the whole data store: an ordinary generic entry in Windows Credential Manager.
- [2:24.8 to 2:27.7] I also made a second throwaway entry outside Lite's prefix.
- [2:27.7 to 2:31.8] Windows has it, you can see it here, and Lite's list never showed it.
- [2:31.8 to 2:35.1] Lite only reads and writes entries under its own prefix.
- [2:35.8 to 2:37.4] Cleanup belongs in the trail too.
- [2:37.4 to 2:46.0] Delete asks you to confirm first, then the credential is removed from Windows Credential Manager, and the list is empty again.
- [2:46.7 to 2:48.9] Quit ends the session and the server stops.
- [2:49.2 to 2:50.0] Nothing was left running.

## Close (Harlan)

On screen: finished architecture diagram held.

- [2:50.2 to 2:59.2] That is Lazarette Lite: named credentials for Fleet tools, from the Credential Manager you already have, with no new vault.
- [2:59.2 to 3:05.9] Everything you saw ran for real on this PC, with throwaway credentials that are now deleted.
- [3:05.9 to 3:09.1] The only stand-in was the short tool script.
- [3:09.1 to 3:15.3] Custom fields and Lazarette's key sharing with Fairlead stay with the full Lazarette.
- [3:15.3 to 3:16.1] Fair winds.
