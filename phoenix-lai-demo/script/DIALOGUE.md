# Phoenix LAi voiceover: Harlan opens and closes, Sullivan and Reyes volley

Each task is one Renoise generation (20 credits). Turns map to the picture ranges shown.

## t00-open
- **HARLAN** _(card: open)_: A developer on a locked-down PC wants an AI pair programmer. Cloud assistants are blocked, and nobody wants project files leaving the machine. Phoenix LAi runs Gemma models on your own GPU, serves them as an OpenAI API, and gives you a chat that edits project files only where you allow it. Everything you will see is running for real.

## t01-arch
- **REYES** _(arch 0.0-9.0 s)_: Phoenix is two programs on one PC. The server turns Gemma 4 models into an OpenAI API on port 1234, with a dashboard and a console.
- **SULLIVAN** _(arch 9.0-17.0 s)_: Models are plain files in a models folder. The engine runs them on your GPU through the driver's own Vulkan. No installs, no admin.
- **REYES** _(arch 17.0-27.0 s)_: The client is the chat window. It holds your project files in a jailed folder, with a backup before every edit, and talks to the server over the same API.
- **SULLIVAN** _(arch 27.0-37.0 s)_: Providers are any OpenAI compatible address: the Phoenix server, Fairlead, LM Studio, Ollama, even a cloud. Only the Phoenix server gets your files by default. Everyone else gets what you type.
- **REYES** _(arch 37.0-45.0 s)_: Cloud keys live in Lazarette and are shared to Fairlead. Phoenix never reads the vault. It holds only its own Fairlead key, in Windows Credential Manager.
- **SULLIVAN** _(arch 45.0-52.0 s)_: A VS Code panel shows the same chat, with inline completion from the server.
- **REYES** _(arch 52.0-61.0 s)_: And the safety line: the model never runs a command, every edit keeps the old version, and your files stay on this PC.

## t02-server
- **SULLIVAN** _(c01 0.0-11.2 s)_: This is the Phoenix server's dashboard, live. No model is loaded and no GPU memory is in use. One client is connected, the Phoenix client, with its last call listed. Everything here is local.
- **REYES** _(c01 11.2-17.6 s)_: The console speaks only Phoenix's own commands, never a shell. Status shows the API address and the device.
- **SULLIVAN** _(c01 17.6-22.1 s)_: Models lists what the API offers. Here, no models folder yet.
- **REYES** _(c01 22.1-27.3 s)_: This PC has no Gemma 4 file, and Phoenix refuses other models. So for this demo, the model comes through Fairlead.

## t03-fairlead
- **REYES** _(c02 0.0-9.5 s)_: The client opens, and the Fleet skin switches it to navy and brass. Providers lists the Phoenix server, green because it is running. Now we add Fairlead.
- **SULLIVAN** _(c02 9.5-18.8 s)_: Plus. A name, Fairlead's local address, and the key Fairlead issued to this app. It goes straight into Windows Credential Manager, never into a file.
- **REYES** _(c02 18.8-28.6 s)_: Load models: Fairlead offers its routes, here one called local. Test probes eighteen OpenAI features, so Phoenix never sends this provider something it refuses.
- **SULLIVAN** _(c02 28.6-42.4 s)_: The feature map is saved with the provider. Embeddings are not offered, so docs search falls back to keywords. And look at the privacy switch: off. This provider gets only what you type, never your files. Save.
- **REYES** _(c03 0.0-11.3 s)_: First live answer: the question goes through Fairlead to a three billion parameter Llama on this machine, about ninety tokens a second. The answer is rough, as small models are, but it is real and it is live.

## t04-project
- **SULLIVAN** _(c04 0.0-11.3 s)_: Scenario: a ledger clerk with a small PowerShell script. A project is a folder, jailed inside Phoenix projects. I drop in two synthetic files, a script and a sample ledger, and ask about the script.
- **REYES** _(c04 11.3-20.2 s)_: With the privacy switch off, Fairlead never saw the file. The model can only guess, and it does. That is the gate working, not a bug.
- **SULLIVAN** _(c04 20.2-32.7 s)_: To let this provider see the project, open its window and switch on send local context. The red warning says project files are sent to this provider. Fairlead's local route stays on this PC, so I accept it. Save.
- **REYES** _(c04 32.7-41.3 s)_: Now the same chat lists the project with a real list command, and finds the script, the ledger and a rules file.
- **SULLIVAN** _(c04 41.3-55.0 s)_: A deliberately mechanical edit for a small model: replace this text with the decimal cast. Phoenix shows the diff, writes it, and keeps the previous version in a dot llm backup folder. A small model can get this wrong, so the backup is the point.

## t05-safety
- **REYES** _(c05 0.0-10.5 s)_: Safety. The model never runs anything. I ask it to run the script, and all it does is give me the command to run myself.
- **SULLIVAN** _(c05 10.5-15.5 s)_: Ask again, even with permission, and the run guard steps in.
- **REYES** _(c05 15.5-31.0 s)_: A red warning, and the chat says this is the third request to run something. The sixth locks chat input for five minutes, and the lockout survives a restart. I will not push it.
- **SULLIVAN** _(c05b 0.0-11.2 s)_: The project jail: I try to open a folder outside Phoenix projects. Dots in the path are refused, and the message says folders are always inside the projects folder, fixed and unchangeable.
- **REYES** _(c05b 11.2-17.8 s)_: Same answer for a project path that tries to climb out with dot dot.

## t05b-commands
- **REYES** _(c07 0.0-10.9 s)_: Everything in the client is a slash command, no menus. Help lists them all: connect a project, switch provider, compact a long chat, accept mode to approve each file action.
- **SULLIVAN** _(c07 10.9-19.5 s)_: Skills are reusable instructions in plain files, matched to what you type or called by name. The Skill Builder drafts and tests them.

## t06-evidence
- **REYES** _(c06 0.0-8.8 s)_: The evidence trail. The chat is saved with the project, and the edit line names the exact backup folder holding the version from before the change.
- **SULLIVAN** _(c06 8.8-16.3 s)_: Open the saved chat and every step is there: the list, the diff, the write and the backup path.
- **REYES** _(c06 16.3-26.0 s)_: Back on the server dashboard, the only requests are the client's embedding checks. The chat itself went through Fairlead.

## t07-close
- **HARLAN** _(card: close)_: Phoenix LAi keeps the work on the machine. Your files go only where you allow, the model never runs a command, and every edit keeps its backup. Today's model came through Fairlead, because this PC has no Gemma 4 file. Everything else you saw was live.
