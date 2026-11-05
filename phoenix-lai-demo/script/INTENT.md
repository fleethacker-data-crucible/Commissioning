# Phoenix LAi: intent note (2026-11-04)

**Purpose.** Local AI for coding on locked-down Windows machines: Gemma 4 models run on the user's own GPU (Vulkan, kernels generated in C#, no third-party code) and are offered as an OpenAI-compatible API, plus a chat app that can edit project files safely.

**Users.** Developers and analysts on PCs with no admin rights, no installs and no cloud approval. Dev machine RX 6700 XT; target HP ZBook with NVIDIA.

**Pieces.** Phoenix server (tray, `localhost:1234/v1`, dashboard/console 8780-8789), Phoenix Client (Chrome/Edge app window, 8790-8798, any OpenAI /v1 provider), VS Code extension (side panel plus inline completion).

**Inputs/outputs.** Inputs: `models\*.gguf`, project folders under `%USERPROFILE%\Phoenix_Projects`, `docs\` library. Outputs: streamed replies, edited files (previous version kept in `.llm-backup`), chat logs.

**Fleet integrations (real).** Phoenix Client adds Fairlead as an OpenAI /v1 provider (key held in Windows Credential Manager); Lazarette shares the model key to Fairlead. Phoenix does not read Lazarette directly. Other providers get typed text only unless "send local context" is switched on.

**Planned (docs only).** Coding agent (`.claude/PHOENIX_AGENT_PLAN.md`).

**Definition of done (docs).** Gemma 4 output matches llama.cpp logprobs as closely as the CPU reference; client features pass `client-e2e.py`; security rules enforced by `run.ps1`.

## Audit status
Static review only so far. Code and docs show the tool is feature-complete; it could not be run because no Gemma 4 GGUF exists on this PC (only Llama-3.2-3B, Qwen3.8-27B, Qwen3-1.7B, all refused by Phoenix). Live audit pending a model file.
