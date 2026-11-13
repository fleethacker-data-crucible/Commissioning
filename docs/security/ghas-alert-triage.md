# GHAS alert triage (sprint 2026-11)

Open code-scanning alerts on `main` at the start of this sprint, and what was done with each. Alerts were not dismissed from here.

| Alert | Rule | Path | Disposition | Reason | GitHub dismissal to recommend |
| --- | --- | --- | --- | --- | --- |
| code-scanning #1 | js/identity-replacement | long-turnover/edit/src/graphics.js:87 | fixed | `.replace('stroke-dasharray="1 1"','stroke-dasharray="1 1"')` rewrote the voyage chart's draw-on dash array with the same text. The call was removed. `Draw()` and the extra style attributes are unchanged, and the SVG string matches the previous output. | — |
| code-scanning #2 | js/stack-trace-exposure | halyard-demo/edit/rec-server.mjs:43 | fixed | The `127.0.0.1:9340` recording server sent `String(e && e.message \|\| e)` on HTTP 500, so the catch value itself could reach `res.end`. The body is now the error message, or `toString()` when there is no message (the same text as before, without the stack). The stack is written to the server console. | — |
