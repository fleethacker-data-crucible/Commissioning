/* Generated from edge-ops/catalog.json, then hand-edited. Edit this file to change what SCOPE shows.
   live: set a loopback URL (for example http://127.0.0.1:8769/) to show an 'Open live' button for a tool.
   demo/captions: paths relative to this folder. A missing file shows 'not rendered yet'. */
window.SCOPE_CONFIG={
 "name": "SCOPE",
 "acronym": [
  "Ship",
  "Continuity",
  "Of",
  "oPerations",
  "Environment"
 ],
 "tagline": "Launch, deliver and run tools on the endpoint you already have.",
 "featured": [
  "halyard",
  "eight-bells",
  "semaphore"
 ],
 "featuredNote": "PLACEHOLDER: not decided yet. Change this list, or open index.html#feature=id1,id2,id3.",
 "tools": [
  {
   "id": "halyard",
   "name": "Halyard",
   "group": "work-collaboration",
   "tagline": "A backlog that tidies itself, with your approval",
   "spoken": "Halyard tidies a backlog, with your approval.",
   "summary": "A product owner's assistant that works a backlog upward to leadership and downward to stories and tasks. It runs locally: a PowerShell launcher, one .NET library, and a browser UI on 127.0.0.1.",
   "status": "unreleased",
   "demo": "demos/halyard.mp4",
   "captions": "demos/halyard.vtt",
   "live": null
  },
  {
   "id": "lazarette",
   "name": "Lazarette",
   "group": "secrets-security",
   "tagline": "A credential vault on your workstation",
   "spoken": "Lazarette keeps your credentials locked on your own workstation.",
   "summary": "Your credentials, stowed and locked aboard your own workstation. A Windows PowerShell 5.1 engine serves a local browser app on 127.0.0.1; the browser is the product.",
   "status": "unreleased",
   "demo": "demos/lazarette.mp4",
   "captions": "demos/lazarette.vtt",
   "live": null
  },
  {
   "id": "gangplank",
   "name": "Gangplank",
   "group": "work-collaboration",
   "tagline": "Git for people who never learned Git",
   "spoken": "Gangplank puts people on Git projects without Git training.",
   "summary": "A browser-first workspace that gets people without Git training safely onto GitHub and GitLab projects, from Windows PowerShell 5.1 and a browser; no git.exe, Node or Python on the workstation.",
   "status": "preview",
   "demo": "demos/gangplank.mp4",
   "captions": "demos/gangplank.vtt",
   "live": null
  },
  {
   "id": "packetrat",
   "name": "PacketRat",
   "group": "work-collaboration",
   "tagline": "Inbox triage into an action queue",
   "spoken": "PacketRat turns a noisy inbox into an action queue.",
   "summary": "Outlook triage into a human-reviewed action queue, run from a local Windows PowerShell 5.1 service with a browser UI.",
   "status": "prototype",
   "demo": "demos/packetrat.mp4",
   "captions": "demos/packetrat.vtt",
   "live": null
  },
  {
   "id": "shellback",
   "name": "Shellback",
   "group": "work-collaboration",
   "tagline": "Skills your people attest to themselves",
   "spoken": "Shellback tracks the skills your people attest to themselves.",
   "summary": "Workforce capability intelligence: employee-attested skills, kept separate from claims, in a local-first browser app.",
   "status": "prototype",
   "demo": "demos/shellback.mp4",
   "captions": "demos/shellback.vtt",
   "live": null
  },
  {
   "id": "snapshackle",
   "name": "SnapShackle",
   "group": "capture-media-files",
   "tagline": "Screenshots and annotation",
   "spoken": "SnapShackle captures and annotates your screen.",
   "summary": "A local-first Windows screenshot and annotation studio using native Windows capture, a built-in PowerShell HTTP host, and an offline browser UI.",
   "status": "prototype",
   "demo": "demos/snapshackle.mp4",
   "captions": "demos/snapshackle.vtt",
   "live": null
  },
  {
   "id": "bowerbird",
   "name": "Bowerbird",
   "group": "capture-media-files",
   "tagline": "Smart file and screenshot renaming",
   "spoken": "Bowerbird renames files and screenshots by what is in them.",
   "summary": "Local-first file intelligence and screenshot renaming for Windows PowerShell 5.1 and your existing web browser.",
   "status": "unreleased",
   "demo": "demos/bowerbird.mp4",
   "captions": "demos/bowerbird.vtt",
   "live": null
  },
  {
   "id": "eight-bells",
   "name": "Eight Bells",
   "group": "work-collaboration",
   "tagline": "Watch logs into turnovers, with evidence",
   "spoken": "Eight Bells turns a watch log into a turnover.",
   "summary": "Local-first watchstanding log intelligence: quality review, evidence-linked turnover and lessons learned (v2).",
   "status": "prototype",
   "demo": "demos/eight-bells.mp4",
   "captions": "demos/eight-bells.vtt",
   "live": null
  },
  {
   "id": "capstan",
   "name": "Capstan",
   "group": "capture-media-files",
   "tagline": "Screen recorder and video editor",
   "spoken": "Capstan records your screen and edits the video.",
   "summary": "An open-source, local-first screen recorder and video editor for Windows.",
   "status": "v0.1",
   "demo": "demos/capstan.mp4",
   "captions": "demos/capstan.vtt",
   "live": null
  },
  {
   "id": "scrimshaw",
   "name": "Scrimshaw",
   "group": "voice-learning",
   "tagline": "Build e-learning courses",
   "spoken": "Scrimshaw builds e-learning courses.",
   "summary": "An open-source e-learning authoring tool.",
   "status": "unreleased",
   "demo": "demos/scrimshaw.mp4",
   "captions": "demos/scrimshaw.vtt",
   "live": null
  },
  {
   "id": "semaphore",
   "name": "Semaphore",
   "group": "data-analytics",
   "tagline": "Dashboards from plain English",
   "spoken": "Semaphore builds dashboards from plain English.",
   "summary": "Semaphore is an analyst workbench for building dashboards from plain-English briefs, CSV files and configured database sources, meant to replace Qlik on thin clients. It runs locally: a PowerShell launcher and a browser UI on 127.0.0.1. Engineering preview.",
   "status": "v0.3",
   "demo": "demos/semaphore.mp4",
   "captions": "demos/semaphore.vtt",
   "live": null
  },
  {
   "id": "fairlead",
   "name": "Fairlead",
   "group": "local-ai",
   "tagline": "One address for every AI model",
   "spoken": "Fairlead puts every AI model behind one address.",
   "summary": "One local address for every model. Fairlead is the model router behind the Fleet tools: it speaks the OpenAI and Anthropic APIs on http://127.0.0.1:8776, sends each request to the right cloud or local model, and keeps answering from local models when the internet or a provider goes down.",
   "status": "unreleased",
   "demo": "demos/fairlead.mp4",
   "captions": "demos/fairlead.vtt",
   "live": null
  },
  {
   "id": "windlass",
   "name": "Windlass",
   "group": "local-ai",
   "tagline": "Giant AI models on an ordinary PC",
   "spoken": "Windlass runs giant models on an ordinary PC.",
   "summary": "Run very large local GGUF models (70B and up) on an ordinary PC by streaming them one layer at a time, behind an OpenAI-compatible API.",
   "status": "v0.2",
   "demo": "demos/windlass.mp4",
   "captions": "demos/windlass.vtt",
   "live": null
  },
  {
   "id": "talkforge",
   "name": "TalkForge",
   "group": "voice-learning",
   "tagline": "Offline text to speech",
   "spoken": "TalkForge turns text into speech, offline.",
   "summary": "Client-side neural text-to-speech (Piper, ONNX Runtime Web/WASM) with offline local assets.",
   "status": "beta",
   "demo": "demos/talkforge.mp4",
   "captions": "demos/talkforge.vtt",
   "live": null
  },
  {
   "id": "data-noodler",
   "name": "Data Noodler",
   "group": "data-analytics",
   "tagline": "Analyze CSV and Parquet files, no database",
   "spoken": "Data Noodler analyzes CSV and Parquet files with no database.",
   "summary": "Self-contained flat-file analytics (CSV/Parquet/Arrow/SQLite) with dashboards.",
   "status": "beta",
   "demo": "demos/data-noodler.mp4",
   "captions": "demos/data-noodler.vtt",
   "live": null
  },
  {
   "id": "phoenix-lai",
   "name": "Phoenix LAI",
   "group": "local-ai",
   "tagline": "A local AI model on your own GPU",
   "spoken": "Phoenix runs a local AI model on your own GPU.",
   "summary": "Local Gemma models on your GPU behind an OpenAI-compatible API, plus a Chrome app-window client.",
   "status": "beta",
   "demo": "demos/phoenix-lai.mp4",
   "captions": "demos/phoenix-lai.vtt",
   "live": null
  }
 ],
 "groups": [
  {
   "id": "capture-media-files",
   "name": "Capture, media and files"
  },
  {
   "id": "work-collaboration",
   "name": "Work tracking and collaboration"
  },
  {
   "id": "data-analytics",
   "name": "Data, dashboards and analytics"
  },
  {
   "id": "local-ai",
   "name": "Local AI platform"
  },
  {
   "id": "voice-learning",
   "name": "Voice and learning"
  },
  {
   "id": "secrets-security",
   "name": "Secrets and security"
  }
 ]
};
