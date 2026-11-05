# Phoenix LAi demo: narration with timings

Run time 6:23. Times are from the final cut (`Phoenix-LAi-demo.srt`, the same text as the on-screen captions). Voice: Renoise, generated for `DIALOGUE.md`; no new audio was made for this build.

| Start | End | Narration |
|---|---|---|
| 00:00:00 | 00:00:04 | A developer on a locked-down PC wants an AI pair programmer. |
| 00:00:04 | 00:00:07 | Cloud assistants are blocked, |
| 00:00:07 | 00:00:11 | and nobody wants project files leaving the machine. |
| 00:00:11 | 00:00:15 | Phoenix LAi runs Gemma models on your own GPU, |
| 00:00:15 | 00:00:19 | serves them as an OpenAI API, and gives you a chat |
| 00:00:19 | 00:00:23 | that edits project files only where you allow it. |
| 00:00:23 | 00:00:26 | Everything you will see is running for real. |
| 00:00:27 | 00:00:30 | Phoenix is two programs on one PC. |
| 00:00:30 | 00:00:34 | The server turns Gemma 4 models into an OpenAI API on port 1234, |
| 00:00:34 | 00:00:37 | with a dashboard and a console. |
| 00:00:37 | 00:00:39 | Models are plain files in a models folder. |
| 00:00:39 | 00:00:42 | The engine runs them on your GPU through the driver's own Vulkan. |
| 00:00:43 | 00:00:46 | No installs, no admin. |
| 00:00:47 | 00:00:50 | The client is the chat window. |
| 00:00:50 | 00:00:53 | It holds your project files in a jailed folder, |
| 00:00:53 | 00:00:59 | with a backup before every edit, and talks to the server over the same API. |
| 00:01:00 | 00:01:02 | Providers are any OpenAI compatible address: |
| 00:01:02 | 00:01:06 | the Phoenix server, Fairlead, LM Studio, Ollama, even a cloud. |
| 00:01:06 | 00:01:10 | Only the Phoenix server gets your files by default. |
| 00:01:10 | 00:01:12 | Everyone else gets what you type. |
| 00:01:13 | 00:01:17 | Cloud keys live in Lazarette and are shared to Fairlead. |
| 00:01:17 | 00:01:19 | Phoenix never reads the vault. |
| 00:01:19 | 00:01:24 | It holds only its own Fairlead key, in Windows Credential Manager. |
| 00:01:25 | 00:01:27 | A VS Code panel shows the same chat, |
| 00:01:27 | 00:01:30 | with inline completion from the server. |
| 00:01:31 | 00:01:34 | And the safety line: the model never runs a command, |
| 00:01:34 | 00:01:38 | every edit keeps the old version, and your files stay on this PC. |
| 00:01:38 | 00:01:41 | This is the Phoenix server's dashboard, live. |
| 00:01:41 | 00:01:45 | No model is loaded and no GPU memory is in use. |
| 00:01:45 | 00:01:48 | One client is connected, the Phoenix client, |
| 00:01:48 | 00:01:50 | with its last call listed. |
| 00:01:50 | 00:01:52 | Everything here is local. |
| 00:01:52 | 00:01:57 | The console speaks only Phoenix's own commands, never a shell. |
| 00:01:57 | 00:02:00 | Status shows the API address and the device. |
| 00:02:00 | 00:02:02 | Models lists what the API offers. |
| 00:02:02 | 00:02:04 | Here, no models folder yet. |
| 00:02:05 | 00:02:06 | This PC has no Gemma 4 file, and Phoenix refuses other models. |
| 00:02:06 | 00:02:08 | So for this demo, |
| 00:02:08 | 00:02:12 | the model comes through Fairlead. |
| 00:02:12 | 00:02:18 | The client opens, and the Fleet skin switches it to navy and brass. |
| 00:02:18 | 00:02:21 | Providers lists the Phoenix server, |
| 00:02:21 | 00:02:24 | green because it is running. |
| 00:02:24 | 00:02:25 | Now we add Fairlead. |
| 00:02:26 | 00:02:30 | Plus. A name, Fairlead's local address, |
| 00:02:30 | 00:02:34 | and the key Fairlead issued to this app. |
| 00:02:34 | 00:02:39 | It goes straight into Windows Credential Manager, never into a file. |
| 00:02:40 | 00:02:45 | Load models: Fairlead offers its routes, here one called local. |
| 00:02:45 | 00:02:47 | Test probes eighteen OpenAI features, |
| 00:02:47 | 00:02:51 | so Phoenix never sends this provider something it refuses. |
| 00:02:52 | 00:02:56 | The feature map is saved with the provider. |
| 00:02:56 | 00:03:01 | Embeddings are not offered, so docs search falls back to keywords. |
| 00:03:01 | 00:03:04 | And look at the privacy switch: off. |
| 00:03:04 | 00:03:10 | This provider gets only what you type, never your files. |
| 00:03:10 | 00:03:11 | Save. |
| 00:03:11 | 00:03:14 | First live answer: the question goes through Fairlead |
| 00:03:14 | 00:03:20 | to a three billion parameter Llama on this machine, about ninety tokens a second. |
| 00:03:20 | 00:03:25 | The answer is rough, as small models are, but it is real and it is live. |
| 00:03:26 | 00:03:29 | Scenario: a ledger clerk with a small PowerShell script. |
| 00:03:29 | 00:03:33 | A project is a folder, jailed inside Phoenix projects. |
| 00:03:33 | 00:03:35 | I drop in two synthetic files, |
| 00:03:35 | 00:03:39 | a script and a sample ledger, and ask about the script. |
| 00:03:40 | 00:03:44 | With the privacy switch off, Fairlead never saw the file. |
| 00:03:44 | 00:03:47 | The model can only guess, and it does. |
| 00:03:47 | 00:03:50 | That is the gate working, not a bug. |
| 00:03:51 | 00:03:52 | To let |
| 00:03:52 | 00:03:56 | this provider see the project, open its window and switch on send local context. |
| 00:03:56 | 00:04:00 | The red warning says project files are sent to this provider. |
| 00:04:00 | 00:04:04 | Fairlead's local route stays on this PC, so I accept it. |
| 00:04:04 | 00:04:09 | Save. Now the same chat lists the project with a real list command, |
| 00:04:09 | 00:04:12 | and finds the script, the ledger and a rules file. |
| 00:04:13 | 00:04:16 | A deliberately mechanical edit for a small model: |
| 00:04:16 | 00:04:19 | replace this text with the decimal cast. |
| 00:04:19 | 00:04:22 | Phoenix shows the diff, writes it, |
| 00:04:22 | 00:04:27 | and keeps the previous version in a dot llm backup folder. |
| 00:04:27 | 00:04:31 | A small model can get this wrong, so the backup is the point. |
| 00:04:31 | 00:04:35 | Safety. I ask the model to run the script. |
| 00:04:35 | 00:04:40 | It cannot: Phoenix never runs a command, so all it can do is answer in text. |
| 00:04:40 | 00:04:43 | I ask again, this time with permission. |
| 00:04:43 | 00:04:47 | It still declines, and offers a script for me to run myself. |
| 00:04:48 | 00:04:50 | A third try, and the run guard steps in. |
| 00:04:50 | 00:04:53 | Chat is suspended for five minutes, with a countdown, |
| 00:04:53 | 00:04:56 | and by design the lockout survives a restart. |
| 00:04:56 | 00:04:59 | That is a safety stop, not a bug. |
| 00:05:00 | 00:05:04 | The project jail: I try to open a folder outside Phoenix projects. |
| 00:05:04 | 00:05:06 | Dots in the path are refused, |
| 00:05:06 | 00:05:07 | and the |
| 00:05:07 | 00:05:13 | message says folders are always inside the projects folder, fixed and unchangeable. |
| 00:05:14 | 00:05:17 | Same answer for a project path that tries to climb out with dot dot. |
| 00:05:17 | 00:05:21 | Everything in the client is a slash command, no menus. |
| 00:05:21 | 00:05:25 | Help lists them all: connect a project, switch provider, |
| 00:05:25 | 00:05:29 | compact a long chat, accept mode to approve each file action. |
| 00:05:30 | 00:05:33 | Skills are reusable instructions in plain files, |
| 00:05:33 | 00:05:36 | matched to what you type or called by name. |
| 00:05:36 | 00:05:39 | The Skill Builder drafts and tests them. |
| 00:05:39 | 00:05:41 | The evidence trail. |
| 00:05:41 | 00:05:42 | The chat is saved with the project, |
| 00:05:42 | 00:05:43 | and the edit |
| 00:05:43 | 00:05:47 | line names the exact backup folder holding the version from before the change. |
| 00:05:47 | 00:05:50 | Open the saved chat and every step is there: |
| 00:05:50 | 00:05:54 | the list, the diff, the write and the backup path. |
| 00:05:54 | 00:05:55 | Back |
| 00:05:55 | 00:05:58 | on the server dashboard, the only requests are the client's embedding checks. |
| 00:05:58 | 00:06:01 | The chat itself went through Fairlead. |
| 00:06:01 | 00:06:05 | Phoenix LAi keeps the work on the machine. |
| 00:06:05 | 00:06:08 | Your files go only where you allow, |
| 00:06:08 | 00:06:13 | the model never runs a command, and every edit keeps its backup. |
| 00:06:13 | 00:06:16 | Today's model came through Fairlead, |
| 00:06:16 | 00:06:20 | because this PC has no Gemma 4 file. |
| 00:06:20 | 00:06:22 | Everything else you saw was live. |
