# Data Noodler demo: script

Narration with start times in `Noodler-demo.mp4` (1080p, about 5:00). Spoken by HARLAN (open, close), SULLIVAN and REYES (volley). Times are where each turn starts in the final cut. The audio says "local host" as two words so the voices read it right; captions spell it "localhost".

## Opening

- **Harlan** (0:00): A fuel log with a million and a half rows will not open in a spreadsheet. Data Noodler is for that job. It reads big flat files on a locked-down PC, answers questions in plain SQL, and turns the answer into a dashboard, all on your own machine. The data today is synthetic.

## Architecture at a glance

- **Sullivan** (0:23): Here is how it fits together. You double-click Data_Noodler.bat. That starts a small PowerShell server that listens on localhost only, and your browser shows the pages.
- **Reyes** (0:36): Behind it is the data engine, written in C and compiled in memory at start. Tables sit in memory as Arrow, queries spill to disk when memory runs short, and each project is a folder on disk.
- **Sullivan** (0:50): Raw files go in: CSV, Parquet, Arrow or SQLite, copied into the project or read in place.
- **Reyes** (0:57): The work in the middle is plain SQL, saved with the project. Each query builds a clean table.
- **Sullivan** (1:05): Out come dashboards as an image, PDF, PowerPoint slide or a one-file web page, and any table as CSV, Parquet or SQLite.
- **Reyes** (1:16): Semaphore can take that CSV as a plain file. Fairlead and Lazarette are not used: Noodler makes no model calls and holds no keys.
- **Sullivan** (1:26): And the guardrails: localhost only with a session token, file access confined to the project, trash and snapshot archives, and a label on every project.

## Starting the server

- **Reyes** (1:36): Starting it needs no install and no admin rights. The control panel shows the web server and the data engine both online.
- **Sullivan** (1:43): Every request is listed as it happens, and Stop Server is one click. If every window is closed, it stops itself after two minutes.

## Project and import

- **Reyes** (1:52): Make a project: a name, a description, and a classification label. This one is Internal, and the label travels with everything the project publishes.
- **Sullivan** (2:02): Import opens next. Point it at the CSV on a local drive. A network path works too.
- **Reyes** (2:07): One and a half million rows, a hundred and fourteen megabytes, counted in under a second. The columns and their types are detected, and you can change them.
- **Sullivan** (2:17): Import writes it as an Arrow dataset in a couple of seconds, then checks the row count and the column names against the source before it says done.

## Transform: SQL

- **Sullivan** (2:26): Transform is a SQL editor. The question: fuel per nautical mile, by vessel class and month.
- **Reyes** (2:34): The first try fails, and the error says why: this dialect has no DATE_TRUNC, use TRUNC with MM instead. So we make that change.
- **Sullivan** (2:44): Run again. One and a half million rows grouped in under two seconds, and a clean table of eighty-eight rows is saved next to the SQL.

## Dashboard Studio

- **Reyes** (2:51): Dashboard Studio. Add a line chart, open its settings, and click Data.
- **Sullivan** (2:56): You build the chart by dragging fields: month onto the X axis, litres per nautical mile onto Y.
- **Reyes** (3:03): Then class, to split the lines. The chart reads the clean table through the engine.
- **Sullivan** (3:10): Every class burns more per mile from December to February. That winter bump is baked into the synthetic data, and the chart finds it.

## Publish and export

- **Reyes** (3:18): Publish writes the dashboard as a web page and a PDF. Image and PowerPoint slide are one tick away.
- **Sullivan** (3:25): Any table can be exported too. Here the clean table goes out as CSV, ready to hand to Semaphore as a plain file.
- **Reyes** (3:34): And the web page opens straight from the file, with no server and no data behind it. Its header carries the Internal label.

## Update when a new file arrives

- **Reyes** (3:42): Next month's log arrives, and nobody wants to repeat all of this. Update re-runs the project's saved setup, in order.
- **Sullivan** (3:52): The first run sets the baseline: import, transform, dashboard, publish, and a zipped snapshot, in about twenty seconds.
- **Reyes** (3:59): Now fifty thousand new rows land in the source file. Update compares the original file's size and date with what it last read.
- **Sullivan** (4:07): It sees the change, reads the file again, rebuilds the table, and republishes, in about eleven seconds. Ninety-two rows now, up from eighty-eight.

## Evidence trail

- **Sullivan** (4:19): Here is the evidence trail. The project log lists every step with a time: the import, the update, each file published.
- **Reyes** (4:28): Snapshots are zipped copies you can restore. And in this whole recording the browser made no request to any host but this computer.

## Close

- **Harlan** (4:35): Data Noodler does one job: it makes a file too big for a spreadsheet answerable, on your own computer. It proposes nothing and sends nothing. The data was synthetic, and the timings are from this one machine. The SQL, the log and the snapshots are the trail.
