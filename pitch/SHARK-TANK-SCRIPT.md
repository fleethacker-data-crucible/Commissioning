# Shark Tank pitch: Data Crucible

Nov 5, 2026

## The strategy

Pitch one idea: **every other team built an app that needs a place to run; we already run where Sailors work.** Our tools were tested on Nautilus with CAC authentication and NMCI, with no admin rights and no installs. No rival page we read claims that.

- **Sell one watch, not 17 tools.** Rivals each pitch one problem. A list of tools sounds unfocused, so tell one Sailor's story and let the suite appear as the answer to "what else?"
- **Make the sharks picture the deck plate.** Open on the locked-down machine and the software request that never gets approved. Everyone in that room has lived it.
- **Show it, then prove it.** A live run on a government machine beats any claim. It is also the one demo most rivals may be unable to copy.
- **Make a specific ask.** Shark Tank rewards a clear deal. Ask for a sponsor and a limited trial, not general interest.

**The proposed ask:** one sponsor, one command, a 90-day trial of three tools on NMCI, with the sponsor backing the local authorization and security review. Change the scope to fit who is in the room.

## The two-minute script

This runs about two minutes at speaking pace, not counting the demo. Replace the `[brackets]` with your own facts. If your slot is shorter, keep The hook, The proof and The ask.

**The hook (20 seconds)**

> Raise your hand if you've ever seen a great tool at a hackathon and then never seen it again.
>
> Here's why that happens. A Sailor sits down at a locked-down government machine. No admin rights. No installs. No Docker. The software request goes in, and the tool never shows up.

**The insight (15 seconds)**

> So we started from the machine, not the idea. We're Data Crucible, and we asked one question: what can a Sailor run today, on the computer already in front of them, without asking anyone for permission to install it?

**The story (35 seconds)**

> Picture one Sailor coming on watch.
>
> The inbox is overflowing. PacketRat sorts it into a queue, and a human reviews every action.
>
> The last watch left a messy log. Eight Bells checks its quality and builds a turnover linked to the evidence.
>
> The boss needs numbers. Semaphore builds the dashboard right on that thin client.
>
> And when AI agents want to act, Bridge Warden checks every order, logs it, and sends the big ones to a human.

**The proof (20 seconds, then the demo)**

> None of this is a mock-up. We've tested on Nautilus with CAC authentication on NMCI. Unzip it, double-click, and it opens in the browser. No admin. No install. Let me show you.

**The close (20 seconds)**

> That's one watch. Behind it is a suite of 17 tools, all MIT licensed, all built the same way, so the next one costs the Navy almost nothing to field.
>
> Other teams today showed you what could be built. We're showing you what can run tomorrow morning.

**The ask (10 seconds)**

> We're asking for one sponsor and one command: a 90-day trial of three tools on NMCI, and your help getting through the security review. Who's in?

## Live demo plan

Keep it to 60 seconds and one thing: a tool going from zip file to working on a government machine.

1. Show the machine and say what it is: Nautilus, CAC, NMCI, no admin rights.
2. Unzip a tool and double-click the launcher.
3. The browser opens on localhost. Do one real action, ideally a human approving something.
4. Stop. Go straight to the close.

**If it fails:** say "That's a live demo on a locked-down box," and cut to the matching recording in the Commissioning repo. Have it cued up, and do not troubleshoot on stage.

Do not tour the catalog. If a shark asks to see more, that is your opening to show a second tool.

## Hard questions and answers

Answer in one or two sentences, then stop. Admit a gap before they find it.

| The shark asks | Your answer |
| --- | --- |
| Can this really deploy tomorrow? | It runs tomorrow, technically. We've tested it on Nautilus with CAC on NMCI. What's left is local authorization and a security review, and that's what we're asking a sponsor to back. |
| Your README says these are prototypes. | That's right, and we'd rather be straight about it. They run on the real environment, but they haven't been through formal review or fielding. |
| Has this passed a security review or gotten an ATO? | [Confirm, then say it plainly.] If not: no, and we've kept the surface small: loopback only, no admin rights, no machine policy changes. |
| Why no UDS or Zarf package? | Many Sailors have a locked-down Windows box, not a cluster. We started where they already are. [If true: a package is a clear next step for tools that need a server.] |
| Doesn't "compile C# at run time" or a bypass launcher trip app control? | Launchers set execution policy for that one process and don't override Group Policy. Some app-control policies can block run-time compiling, and our hub says so. [Say which tools you've tested under which policy.] |
| 17 tools from one team? How do you maintain that? | They share conventions, a UI kit and release templates. [Say honestly who would own support after the hackathon.] |
| Was this written with AI? Who's checked it? | [Answer directly.] Repos carry AI agent files such as `CLAUDE.md`, so assume they already know. Lead with human review and tests. |
| How much time does it save? | [Give a sourced number or say you're about to measure it. The trial would produce it.] SAGGLE ROC will quote 912+ hours per ship per year, which is their estimate. |
| Why you and not Cyber Thunder or OTIS? | They're strong, and they solve different problems. We're not competing for the same slot: they need a platform, and we run where there isn't one. Never knock another team. |
| What about secrets and credentials? | Provider keys stay out of the repos, and Lazarette Lite is a thin front end to Windows Credential Manager with no new data store. Keep the full Lazarette out of the pitch unless asked. |
| What do you need from us, exactly? | A sponsor, one command, and help with the review. Then repeat the ask. |

## Things to confirm and prep

These could sink the pitch if a shark checks them, so settle them first.

- [ ] Which exact tools ran on Nautilus with CAC on NMCI? The script names PacketRat, Eight Bells, Semaphore and Bridge Warden, so swap out any that didn't.
- [ ] Does "no install" hold for every tool named? Windlass, Phoenix LAI and others compile C# at run time.
- [ ] Is it allowed to demo on a government machine in that room, and to say so publicly?
- [ ] Pick the three tools for the 90-day ask, and name a likely sponsor for each.
- [ ] Get the time limit and format from the organizers, and cut the script to fit.
- [ ] Choose who speaks and who drives the demo. Use one voice for the pitch.
- [ ] Rehearse aloud with a timer at least three times, once with the demo failing.
- [ ] Update the hub README if "prototype" no longer describes these tools.
- [ ] Decide what to do with the public scorecard PR before going in. A judge could read our assessment of the other teams.

The 90-day trial, the three-tool scope and "costs almost nothing to field" are suggestions, not facts from the team. Change them if they don't match what you can commit to.
