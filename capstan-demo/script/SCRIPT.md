# Capstan demo: narration script

Voices are generated (Renoise seed-audio-1.0, cloned cast references). Times are from the final cut `Capstan-demo.mp4`; the on-screen captions are in `Capstan-demo.srt`. Spoken "localhost" is written "local host" in the voice prompt only, so it is pronounced as two words; captions keep "localhost".

## Timed captions (final cut)

```
1
00:00:00,250 --> 00:00:02,527
Training videos leak.

2
00:00:02,547 --> 00:00:06,418
A customer's email, a phone number,

3
00:00:06,438 --> 00:00:09,308
an API key left on screen.

4
00:00:09,328 --> 00:00:15,060
Capstan is the screen recorder
and editor that hides

5
00:00:15,080 --> 00:00:19,152
them before the video leaves your PC.

6
00:00:19,172 --> 00:00:21,489
Record a tab, cut it,

7
00:00:21,509 --> 00:00:25,496
blur it, caption it, export the MP4.

8
00:00:25,516 --> 00:00:28,031
No installer, no cloud.

9
00:00:28,281 --> 00:00:30,793
Here is how Capstan fits together.

10
00:00:30,813 --> 00:00:34,281
A PowerShell launcher serves
the editor on localhost,

11
00:00:34,301 --> 00:00:37,130
and the editor runs in
your browser window.

12
00:00:37,592 --> 00:00:39,544
Inside, four stages:

13
00:00:39,564 --> 00:00:43,587
record, edit, redact and caption, export.

14
00:00:43,607 --> 00:00:46,939
One compositor draws both
the preview and the export,

15
00:00:46,959 --> 00:00:48,983
so what you see is what you get.

16
00:00:49,683 --> 00:00:51,460
Fleet connections are plain files.

17
00:00:51,828 --> 00:00:53,333
SnapShackle captures come in.

18
00:00:53,740 --> 00:00:57,175
MP4, captions and chapters
go out for Scrimshaw.

19
00:00:57,489 --> 00:00:58,740
The Fleet CLI drives it.

20
00:00:59,109 --> 00:01:01,402
There is no model,
so no Fairlead or Lazarette.

21
00:01:01,735 --> 00:01:04,616
Speech to text is Windows'
own offline recogniser.

22
00:01:05,316 --> 00:01:10,089
Planned: background removal,
and a Capstan CLI launcher.

23
00:01:10,109 --> 00:01:13,905
And the one rule that matters:
media never leaves this PC.

24
00:01:13,925 --> 00:01:16,495
Nothing is uploaded, ever.

25
00:01:17,156 --> 00:01:18,833
Capstan records one browser tab.

26
00:01:18,853 --> 00:01:21,745
Choose Record screen, then A browser tab,

27
00:01:21,765 --> 00:01:25,245
and switch the microphone
and computer sound off.

28
00:01:25,945 --> 00:01:27,440
Start recording.

29
00:01:27,460 --> 00:01:29,831
Capstan captures only the tab we choose;

30
00:01:29,851 --> 00:01:32,103
screens and other windows are refused.

31
00:01:32,123 --> 00:01:34,721
This is a synthetic support console,

32
00:01:34,741 --> 00:01:37,796
with a made-up customer, working a ticket.

33
00:01:38,496 --> 00:01:41,497
Stop and save. The clip
is on the timeline.

34
00:01:42,247 --> 00:01:43,671
Play it back.

35
00:01:43,691 --> 00:01:46,617
This is the real recording,
with a customer's details

36
00:01:46,637 --> 00:01:48,248
and an API key in plain view.

37
00:01:48,948 --> 00:01:51,254
Split off the dead start
and ripple delete it.

38
00:01:51,795 --> 00:01:53,681
Then add a blur region at the playhead.

39
00:01:54,381 --> 00:01:56,915
Place it over the email,
the phone number and the API key.

40
00:01:56,935 --> 00:02:00,879
It covers every track beneath it,
for the whole clip.

41
00:02:00,899 --> 00:02:03,786
Scrub forward, and the blur
holds as the agent resolves

42
00:02:03,806 --> 00:02:05,604
the ticket and opens the next one.

43
00:02:06,304 --> 00:02:08,910
Import the training
captions from an SRT file.

44
00:02:09,568 --> 00:02:11,460
They are drawn on the video at export.

45
00:02:11,480 --> 00:02:15,597
Export. H.264 MP4, rendered
on this PC, frame by frame.

46
00:02:15,617 --> 00:02:20,661
A software encoder takes over
if the hardware one stalls.

47
00:02:20,681 --> 00:02:25,389
Under four seconds here,
for fifteen seconds of video.

48
00:02:26,089 --> 00:02:29,211
Now check the file, not the screen.

49
00:02:29,231 --> 00:02:31,459
ffprobe reports H.264, 1920 by 1080,

50
00:02:31,479 --> 00:02:34,082
about fifteen seconds, and no audio track.

51
00:02:34,102 --> 00:02:37,268
The microphone was off, so there is none.

52
00:02:37,968 --> 00:02:40,388
Same frame, before and after.

53
00:02:40,408 --> 00:02:44,832
The email, the phone and the
key are gone from the pixels.

54
00:02:44,852 --> 00:02:47,617
The blur is baked into the export.

55
00:02:47,637 --> 00:02:50,561
It is not an overlay anyone can lift.

56
00:02:51,261 --> 00:02:55,796
The saved project hands its captions
to the next tool through the

57
00:02:55,816 --> 00:02:59,019
Fleet CLI: four captions,
ready for Scrimshaw.

58
00:02:59,039 --> 00:03:03,013
Plain files, nothing pushed,
nothing uploaded.

59
00:03:03,826 --> 00:03:08,086
To be candid: the console
and its customers are synthetic.

60
00:03:08,106 --> 00:03:10,149
Capstan has no model,

61
00:03:10,169 --> 00:03:13,883
so no Fairlead, and no approval queue.

62
00:03:13,903 --> 00:03:17,700
It is a single user local tool,
and its trust is in what

63
00:03:17,720 --> 00:03:20,222
it refuses and what stays on this PC.

64
00:03:20,242 --> 00:03:24,132
Close the window and
the host stops itself.

65
00:03:24,152 --> 00:03:28,001
Capstan records locally,
hides what must not show,

66
00:03:28,021 --> 00:03:30,555
and exports a file you can check.

67
00:03:30,575 --> 00:03:32,314
Nothing leaves this PC.

68
00:03:32,334 --> 00:03:35,698
Compute and creativity
are the new frontier.
```

## Narration by chapter (speaker, text)

### t00-open

- **HARLAN:** Training videos leak. A customer's email, a phone number, an API key left on screen. Capstan is the screen recorder and editor that hides them before the video leaves your PC. Record a tab, cut it, blur it, caption it, export the MP4. No installer, no cloud.

### t01-arch

- **REYES:** Here is how Capstan fits together. A PowerShell launcher serves the editor on localhost, and the editor runs in your browser window.
- **SULLIVAN:** Inside, four stages: record, edit, redact and caption, export. One compositor draws both the preview and the export, so what you see is what you get.
- **REYES:** Fleet connections are plain files. SnapShackle captures come in. MP4, captions and chapters go out for Scrimshaw. The Fleet CLI drives it. There is no model, so no Fairlead or Lazarette. Speech to text is Windows' own offline recogniser.
- **SULLIVAN:** Planned: background removal, and a Capstan CLI launcher. And the one rule that matters: media never leaves this PC. Nothing is uploaded, ever.

### t02-record

- **SULLIVAN:** Capstan records one browser tab. Choose Record screen, then A browser tab, and switch the microphone and computer sound off.
- **REYES:** Start recording. Capstan captures only the tab we choose; screens and other windows are refused. This is a synthetic support console, with a made-up customer, working a ticket.
- **SULLIVAN:** Stop and save. The clip is on the timeline.

### t03-edit

- **REYES:** Play it back. This is the real recording, with a customer's details and an API key in plain view.
- **SULLIVAN:** Split off the dead start and ripple delete it. Then add a blur region at the playhead.
- **REYES:** Place it over the email, the phone number and the API key. It covers every track beneath it, for the whole clip. Scrub forward, and the blur holds as the agent resolves the ticket and opens the next one.
- **SULLIVAN:** Import the training captions from an SRT file. They are drawn on the video at export.

### t04-export

- **REYES:** Export. H.264 MP4, rendered on this PC, frame by frame. A software encoder takes over if the hardware one stalls. Under four seconds here, for fifteen seconds of video.
- **SULLIVAN:** Now check the file, not the screen. ffprobe reports H.264, 1920 by 1080, about fifteen seconds, and no audio track. The microphone was off, so there is none.
- **REYES:** Same frame, before and after. The email, the phone and the key are gone from the pixels. The blur is baked into the export. It is not an overlay anyone can lift.
- **SULLIVAN:** The saved project hands its captions to the next tool through the Fleet CLI: four captions, ready for Scrimshaw. Plain files, nothing pushed, nothing uploaded.
- **REYES:** To be candid: the console and its customers are synthetic. Capstan has no model, so no Fairlead, and no approval queue. It is a single user local tool, and its trust is in what it refuses and what stays on this PC. Close the window and the host stops itself.

### t05-close

- **HARLAN:** Capstan records locally, hides what must not show, and exports a file you can check. Nothing leaves this PC. Compute and creativity are the new frontier.

