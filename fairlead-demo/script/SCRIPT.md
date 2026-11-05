# Fairlead demo: narration script

Timings are from the shipped cut (`Fairlead-demo.mp4`, 5:55). Wording is the spoken narration, one line per original caption turn. Voices: Captain Harlan (opens and closes), Chief Sullivan and Lt. Cmdr. Reyes (volley the middle).


## Opening

- `00:00` Every tool on this computer needs a model.
- `00:03` Each one used to carry its own address, its own key, and its own plan for when the internet drops.
- `00:11` Fairlead is the model router.
- `00:13` One local address, one key per tool, and a trace of every request.
- `00:19` Here is how Fairlead fits together.

## Architecture at a glance

- `00:21` Fleet tools call one address on this computer, in the OpenAI or the Anthropic dialect, each with its own key.
- `00:28` Inside the engine, a request is checked, routed, retried if a target fails, and logged.
- `00:36` The log keeps the decision, never the prompt.
- `00:41` One piece makes the outbound calls.
- `00:44` Local models, Ollama and Windlass.
- `00:47` Cloud providers, OpenAI and OpenRouter.
- `00:51` Cloud keys live in Lazarette, shared by name, and held in memory only.
- `00:57` Mark a request private, and it never leaves this PC.
- `01:02` Planned, not built: git hosts and databases behind the same address, and routing by prompt difficulty.
- `01:10` Every request leaves a trace.
- `01:12` That is the evidence.
- `01:13` Start with the key.

## Lazarette: the key goes in, shared by name

- `01:14` It goes into Lazarette, the encrypted vault on this machine, as an API credential named OPENAI underscore API underscore KEY.
- `01:23` Test credential checks it against OpenAI's read only endpoint before anything uses it.
- `01:29` This footage comes from the Halyard demo.
- `01:32` Then share it with Fairlead by name.
- `01:35` Fairlead sees only what you share.
- `01:37` Fairlead reads it from the vault and connects.
- `01:41` That is the only place the cloud key lives.

## Providers

- `01:45` The Providers page.
- `01:46` Lazarette is paired, and Fairlead asks it for two names, both shared.
- `01:51` Lazarette is locked right now, so Fairlead keeps what it already read for eight hours.
- `01:57` OpenAI.
- `01:57` Test connection.
- `01:59` Connected, with the key from Lazarette, not typed here.
- `02:04` Ollama, the local provider.
- `02:06` Fetch model list finds Llama three point two, three billion, imported from a model file already on this PC.

## Routes

- `02:14` Routes are the model names your tools send.
- `02:17` Smart is one target, fast is another, and each can hold an ordered list that fails over to the next.
- `02:24` The local route was empty, so we give it a target: the model we just installed.
- `02:30` Private requests and offline mode land here.
- `02:33` Auto picks a route for each request from rules: prompt size, tools, images, keywords, and whether the prompt carries a secret.
- `02:45` Aliases catch hard coded names, so any claude or gpt name lands on a route.

## Client keys

- `02:50` Every tool gets its own key.
- `02:52` The Install button makes one and saves it to Windows Credential Manager, so the tool reads it from there and it never sits in a config file.
- `03:00` Keys are shown once and stored only as a hash.
- `03:02` Each can be limited by route, by rate, and by daily tokens, and Revoke ends one tool without touching the rest.
- `03:11` Each tool's setup is copy and paste: the OpenAI SDK, curl with the privacy header, or the Halyard profile.
- `03:18` Claude Code needs just a base URL and a token.

## Settings, privacy and diagnostics

- `03:21` Settings.

- `03:21` Kedge mode is the offline switch.
- `03:24` Auto goes local the moment the cloud is out of reach.
- `03:27` I will not force it on here, because other tools share this Fairlead right now.
- `03:34` Privacy: look for secrets in prompts, keep private requests on local models, require a client key.
- `03:41` Prompts are kept only if you tick content logging, in memory, never on disk.
- `03:46` It is off.
- `03:48` Diagnostics.
- `03:49` The network, and each provider: Ollama and OpenAI reachable, Windlass not running, with the reason.
- `03:58` Circuit breakers below keep dead targets out of the way, so a failing model stops costing every request a retry.

## A real request and the privacy route

- `04:06` A real request.

- `04:06` Model auto, a short prompt.
- `04:09` Explain shows the plan without calling a model: the quick chat rule matched, and the first choice is OpenAI mini.
- `04:16` Send.
- `04:16` OpenAI answered, and the decision and the attempt are right there.
- `04:22` Now a prompt that carries a cloud key.
- `04:25` It is the example key from Amazon's documentation, not a real credential.
- `04:30` Explain says private request, local models only.
- `04:34` Send.
- `04:37` It never leaves this PC.
- `04:38` Llama answered, and the log marks it private.
- `04:40` Without a secret, tick private, which sends the privacy header any tool can set.
- `04:45` Same result: it stays on this machine.

## Another Fleet tool: Halyard

- `04:48` Now another Fleet tool.
- `04:49` This is Halyard, with its own Fairlead key.
- `04:53` Test model sends a real request through Fairlead.
- `04:56` Reply from auto, in under half a second.
- `05:00` On the overview, the routing map shows each tool as a client, and the providers it reached.
- `05:05` Activity lists every request with its client, route and target.
- `05:08` Halyard's is right there, next to other demos running on this PC.
- `05:12` Open one: the rule that matched, the target and the timing.
- `05:17` Prompts are not kept.
- `05:19` Failover is logged too.

## Failover in the log

- `05:20` I sent this one from the command line, to a route whose first model was retired.
- `05:26` OpenAI answered not found, and Fairlead moved to the next target before any byte reached the caller.

## Close

- `05:32` Fairlead is the one address.
- `05:34` Keys stay in the vault, each tool holds one key, private requests stay on this PC, and every request leaves a trace you can read.
- `05:44` The demos in this series that call a model went through it.
- `05:48` Planned next: git hosts and databases behind the same address.
- `05:53` That's the watch.
