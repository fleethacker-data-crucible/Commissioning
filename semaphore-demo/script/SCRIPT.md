# Semaphore demo: narration script with timings

Source of truth for the spoken words is `work/dialogue.json`; times below come from the final cut (`Semaphore-demo.srt`, 6:34). Voices are Renoise clones: Captain Harlan opens and closes, Chief Sullivan and Lt. Cmdr. Reyes volley the middle. Timed comparison (PowerShell vs Semaphore stopwatch, about 4:13 to 4:41) runs in real time on purpose, so those silent stretches are intentional.

| Time | Narration |
|---|---|
| 00:00 | Every dashboard starts with a question that someone has to translate into a tool. |
| 00:06 | Semaphore skips the translation. |
| 00:08 | You describe the page in plain English, you review what it drafts, |
| 00:13 | and leadership asks questions that your reviewed work answers. |
| 00:18 | All of it runs on this computer. |
| 00:20 | Semaphore is a dashboard workbench for analysts, |
| 00:23 | and a question box for leadership. |
| 00:26 | Three pieces: a launcher, a small server |
| 00:29 | on this computer, and the web page. |
| 00:32 | Double-click the launcher, and it starts the server, |
| 00:35 | which hands your browser a one-time link. |
| 00:39 | The server listens on loopback only, and keeps hoists, |
| 00:41 | the catalog and the playbook as plain files in one home folder. |
| 00:45 | Halyard feeds it backlog health as four CSV files, read in the browser. |
| 00:49 | PacketRat and Eight Bells exports load the same way, tested so far on sample files. |
| 00:56 | For drafting, the server calls Fairlead with its own key from Credential Manager. |
| 01:00 | Fairlead routes to the model, and gets its model keys from Lazarette. |
| 01:05 | The page never sees a key. |
| 01:08 | Databases and the data lake use Semaphore's own connectors, |
| 01:11 | and still need validation. |
| 01:13 | Routing them through Fairlead is planned. |
| 01:17 | Safety: one read-only select per query, an analyst accepts every draft, |
| 01:21 | and leadership sees reviewed answers only. |
| 01:24 | Semaphore ships as one folder. |
| 01:25 | Download the zip, unblock it, |
| 01:28 | extract it, and double-click Launch-Semaphore. |
| 01:32 | Nothing to install, no admin rights. |
| 01:35 | It starts a small server on this computer, on a loopback port, |
| 01:39 | and gives your browser a one-time session link. |
| 01:42 | Nothing leaves the machine. |
| 01:45 | Four ways in: continue the example, a new page, your own data, |
| 01:50 | or the leadership view. |
| 01:52 | Models come through Fairlead. |
| 01:55 | Its OpenAI key sits in Lazarette, the vault, |
| 01:58 | and Fairlead only sees what you share. |
| 02:01 | On Fairlead's Clients page, pick Semaphore and install. |
| 02:04 | The key lands in Windows Credential Manager, and the page never holds it. |
| 02:10 | A config file picks the route. |
| 02:12 | This demo data is synthetic, so it uses the smart route. |
| 02:17 | Remove these two lines and drafts stay on the local route, on this computer. |
| 02:21 | This is a hoist: one page of flags. |
| 02:24 | The brief across the top is plain English, |
| 02:27 | and Semaphore highlights what it understood. |
| 02:30 | Click Gulf and the whole page filters. |
| 02:33 | The monthly trend ignores it on purpose. |
| 02:36 | Flip a flag over to read what it shows in plain English, |
| 02:39 | and the exact SQL behind the number. |
| 02:42 | The AI switch is on, so drafts go through Fairlead. |
| 02:46 | Describe a flag in plain English: top ten hulls by labor cost. |
| 02:51 | A few seconds later: a table, a confidence figure, |
| 02:54 | and a note that Fairlead drafted it. |
| 02:56 | Every key the model used was checked against the catalog. |
| 03:00 | Accept it, and the playbook keeps it. |
| 03:03 | Brief me reads the page back, every sentence tied to a flag. |
| 03:07 | Halyard writes backlog health for Semaphore as four CSV files. |
| 03:12 | This is the real export from the Halyard demo. |
| 03:15 | Add them under Data. |
| 03:16 | Semaphore recognises Halyard's schema and proposes measures and fields: |
| 03:21 | thirty-four measures, sixty-three fields. |
| 03:24 | Now describe flags. |
| 03:25 | Items needing review: seven. |
| 03:29 | Items by type: twenty stories, seven tasks, four features. |
| 03:34 | Items by state. Features by status: three on track, one at risk. |
| 03:39 | Sprint velocity, planned against done. |
| 03:43 | A person accepts each draft. |
| 03:45 | Accepted flags are what leadership can ask about. |
| 03:49 | In the Ask view, the same numbers answer questions, labelled as reviewed. |
| 03:55 | The decision: can we commit the next sprint? |
| 03:59 | Four numbers decide it: items needing review, ready stories, blockers, |
| 04:04 | and features at risk. |
| 04:06 | First, the raw export in PowerShell. |
| 04:09 | Four commands, typed at a steady pace: about eleven seconds. |
| 04:19 | Now Semaphore, same four questions, same typing speed. |
| 04:22 | One import, four plain-English briefs, |
| 04:25 | four accepts: about twenty seconds. |
| 04:28 | For one analyst and four numbers, PowerShell is faster. |
| 04:41 | But now a leader can ask the question themselves, |
| 04:44 | and the answer comes back in under a second, labelled reviewed. |
| 04:49 | The answer: not yet. |
| 04:51 | Nothing is ready, seven items need review, |
| 04:54 | there is one blocker and one feature at risk. |
| 04:57 | Sample data: the Halyard demo backlog. |
| 05:00 | Semaphore reads more than CSV. |
| 05:02 | Here is what connects, and how well each one is proven. |
| 05:08 | In the browser: CSV, Halyard exports, PacketRat and Eight Bells exports, |
| 05:14 | and Qlik load scripts. |
| 05:16 | A QVD is Qlik's own format, so export it to CSV first. |
| 05:21 | Through the server: databases over ODBC or OLE DB, including Postgres on AWS RDS, |
| 05:26 | Oracle, SQL Server and Access. |
| 05:28 | Plus an S3 data lake through Athena, with a cost guard. |
| 05:32 | The AWS paths are built and tested against simulated AWS. |
| 05:36 | Live validation is pending. |
| 05:38 | Here is a real database. |
| 05:40 | This Access file holds the Halyard backlog. |
| 05:43 | One entry in sources.json, then pick the table, profile and add. |
| 05:48 | Now the same plain-English brief runs |
| 05:52 | a real query through the server, |
| 05:55 | and the SQL is shown. |
| 05:57 | Share as a report saves one HTML file with working filters, summarised numbers only, |
| 06:03 | optionally locked with a passphrase. |
| 06:06 | It also reads PacketRat and Eight Bells |
| 06:09 | exports, tested so far on synthetic files. |
| 06:13 | Semaphore drafts. |
| 06:14 | People review. |
| 06:16 | Leadership asks. |
| 06:17 | And a thought for your team: before you rent a dashboard tool, |
| 06:23 | ask what you could build in a week. |
| 06:26 | The new frontier is compute and creativity. |
| 06:30 | That's the watch. |
| 06:32 | Fair winds. |
