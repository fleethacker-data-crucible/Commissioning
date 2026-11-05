# Windlass demo: narration script with timings

Voices: Harlan opens and closes; Sullivan and Reyes alternate in between. Timings are from the final 5:14 cut (m:ss from start). The wording is the spoken script as captioned.

| Time | Narration |
|---|---|
| 0:00.2 | Some questions deserve a model far bigger than this computer can hold. |
| 0:05.2 | A seventy billion parameter model is over |
| 0:08.3 | forty gigabytes before it answers a word. |
| 0:11.9 | Windlass hauls it through memory one layer |
| 0:15.2 | at a time, so an ordinary PC can run it. |
| 0:18.8 | It is slow on purpose, and everything you see today runs live. |
| 0:23.9 | Our demo model is a small three billion one, so you can watch it work. |
| 0:29.5 | Here is how it works. |
| 0:31.2 | Windlass reads a GGUF model file from your drive. |
| 0:33.9 | It reads the header first, never the whole model. |
| 0:37.7 | Everything stays on this one computer, on loopback. |
| 0:42.3 | One layer at a time goes into memory. |
| 0:45.0 | While layer N computes on the CPU, layer N plus one loads from disk. |
| 0:49.1 | The keys and values cache stays in RAM, so a seventy |
| 0:52.7 | billion model needs about two gigabytes plus that cache. |
| 0:57.2 | Fairlead, the model router, treats Windlass as one more local provider. |
| 1:02.3 | The route is deep-local, reached by name only, |
| 1:05.3 | so interactive tools never wait on it. |
| 1:08.4 | And the guardrails: loopback only, no outgoing connections, |
| 1:12.2 | no text in the log, and it never stops in the middle of a reply. |
| 1:16.9 | Setup needs no admin rights and no install. |
| 1:19.1 | First, info reads only the model's header: twenty-eight layers, |
| 1:23.9 | three point four gigabytes, Q8 weights, and the Llama 3 chat template. |
| 1:29.2 | Nothing is ever downloaded. |
| 1:32.0 | The overview shows the model, its measured speed, |
| 1:35.0 | and the base URL any program can use. |
| 1:37.3 | There is no key to paste: nothing here leaves the computer. |
| 1:41.6 | Now a real task: a short watch log, and a request for two bullets, |
| 1:46.0 | with a system prompt that says answer only from the log. |
| 1:50.4 | The reply streams token by token. |
| 1:52.1 | Every token costs a pass over all twenty-eight layers, so it is slow, |
| 1:56.3 | about a second a token here, and a seventy billion model would take minutes. |
| 2:00.9 | That is the trade. |
| 2:03.0 | When it finishes, the page shows the first-token time and the counts. |
| 2:06.6 | Now the proof of streaming: the model file is about thirty-two hundred megabytes, |
| 2:11.8 | yet the engine's memory is about one gigabyte, |
| 2:14.7 | because only a couple of layers sit in RAM at once. |
| 2:18.7 | These numbers were measured on this computer, |
| 2:22.7 | not estimated: about a second a reply |
| 2:25.9 | token in streaming mode, a tenth of a |
| 2:29.2 | second a prompt token, the CPU as the limit, |
| 2:33.1 | a perplexity score, and a context |
| 2:36.0 | recall of four of four planted facts. |
| 2:39.2 | Anything never measured shows a dash. |
| 2:42.2 | The Playbook page says why each setting was chosen. |
| 2:45.9 | Our cache of zero overrides the playbook, as the serve log showed. |
| 2:51.2 | For scale, the repo's own stress test measured a seventy |
| 2:55.0 | billion model at about eight point seven seconds a token. |
| 2:59.0 | That was not rerun here. |
| 3:00.6 | Now Fairlead. We register Windlass as a |
| 3:03.6 | local provider, a custom OpenAI-compatible |
| 3:06.9 | one, with a timeout of an hour, because a layer pass can be long. |
| 3:11.8 | Discover finds its one model and its context length. |
| 3:15.5 | Fairlead needs no code for this. |
| 3:18.0 | Now the real call, through Fairlead's |
| 3:21.2 | address, asking for deep-local-3b. |
| 3:24.2 | The model on this machine is working through its layers, so we skip ahead. |
| 3:30.0 | The reply is the model's own, with its token counts and the time it took |
| 3:35.5 | through Fairlead: about ninety seconds, because the model streams from disk. |
| 3:41.2 | Trust details. A request with the wrong |
| 3:43.5 | Host name, or an Origin from some web page, |
| 3:46.0 | gets a four oh three, so no browser tab can quietly drive your model. |
| 3:50.7 | Now a long reply is running, and eleven more requests arrive at once. |
| 3:54.5 | The queue holds eight, so three are told the server is busy, a five oh three that |
| 4:00.0 | Fairlead treats as a reason to fail over, |
| 4:02.8 | and the rest wait their turn, first in, first out. |
| 4:06.2 | Stop cancels the running reply. |
| 4:08.9 | The reply stopped and the queue drained. |
| 4:11.8 | And the check command proves the source makes no outgoing connections, |
| 4:16.3 | starts no process and loads nothing dynamically, before it will even compile. |
| 4:21.1 | The evidence trail. Fairlead's Activity shows the request: client Windlass, |
| 4:27.0 | route deep-local-3b, served by the Windlass provider, a hundred |
| 4:32.0 | and two tokens in, sixty-nine out, first token after eighty-nine seconds. |
| 4:38.1 | And Windlass's own log shows request ids, token counts and timings. |
| 4:43.2 | It never records what you asked or what it answered. |
| 4:47.2 | Windlass is slow on purpose and honest about it. |
| 4:51.0 | Everything you saw ran live on this computer, through Fairlead. |
| 4:55.6 | Not built yet: GPU offload. |
| 4:59.6 | Not measured yet: batching throughput on real models. |
| 5:04.5 | And the seventy billion timings are the repo's, not rerun today. |
| 5:10.2 | Slow, local, and verifiable. |
