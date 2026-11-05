# Windlass: intent note (2026-11-04)

Sources read: README, docs/ARCHITECTURE.md, API.md, USAGE.md, UI.md, LIFECYCLE.md, UNIFIED-UI.md, open issue 17 ("Fleet integrations"), Fairlead's `integrations/windlass/README.md`, recent PRs (#24 to #26), CI history.

**Purpose.** Run very large local models (70B and up) on an ordinary Windows PC by streaming the GGUF file through memory one layer at a time (about two layers resident, next layer prefetched while the current one computes), behind an OpenAI-compatible API and a browser UI. Slow by design: about 8.7 s per token for a 70B Q4_K_M on the dev PC (repo stress test), 0.1 to 0.8 s for a 3B.

**Users.** Someone who needs a model nothing else on the PC can hold (deep, batch or overnight work), and the Fleet tools that ask for it by name through Fairlead's `deep-local` route. Not for chat.

**Inputs.** One GGUF file on a local drive (never downloaded by Windlass). **Outputs.** Chat completions (stream or not), the measured numbers in `/v1/models` (`windlass` object), a log of ids, token counts and timings (no text).

**Integrations.** Fairlead: Windlass is a Local OpenAI-compatible provider, route `deep-local`, reached by name only (works, covered by FairleadRouteTests; live round trip shown in this video). Lazarette: not used (no key needed; `--api-key` is optional and not vault-backed). Planned in the docs: GPU offload (Vulkan). Not claimed: any Teams or Slack, any live link to other tools.

**Documented definition of done.** Issue 17 for Windlass: lifecycle rules (heartbeat, tray; done), Fairlead route kept under test (done), CLI and API parity (`commands --json`; in).

**Demo scope decision.** Demo model is Llama 3.2 3B Q8_0 (3.2 GB) in streaming mode (`--cache-gb 0`) so a viewer can watch it; the 70B numbers are quoted from the repo's own measured stress test and labelled as not re-run on camera.
