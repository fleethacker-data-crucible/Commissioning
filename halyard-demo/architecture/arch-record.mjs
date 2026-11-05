// Records the architecture chapter (1920x1080) from architecture.html in a headless Chromium tab.
// Usage: node arch-record.mjs <step-times-comma-separated> <seconds>      steps are seconds from the page's own start
import { createRequire } from 'node:module';
import { mkdirSync, readdirSync, renameSync, writeFileSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const require = createRequire('C:/Users/Anthony/Projects/Capstan/package.json');
const { chromium } = require('playwright');
const here = dirname(fileURLToPath(import.meta.url));
const clips = join(here, '..', 'clips');
const steps = process.argv[2], secs = parseFloat(process.argv[3] || '58');
const tmp = join(clips, '_tmp_arch'); rmSync(tmp, { recursive: true, force: true }); mkdirSync(tmp, { recursive: true });
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1, recordVideo: { dir: tmp, size: { width: 1920, height: 1080 } } });
const page = await ctx.newPage();
const tPage = Date.now();
await page.goto(pathToFileURL(join(here, 'architecture.html')).href + '?steps=' + steps);
await page.waitForFunction(() => window.__ready);
const origin = await page.evaluate(() => performance.timeOrigin + window.__t0);
const lead = (origin - tPage) / 1000;
await page.waitForTimeout(secs * 1000);
const log = await page.evaluate(() => window.__log);
await ctx.close(); await browser.close();
const f = readdirSync(tmp).find((x) => x.endsWith('.webm'));
renameSync(join(tmp, f), join(clips, 'arch.webm'));
writeFileSync(join(clips, 'arch.events.json'), JSON.stringify({ lead, steps: steps.split(',').map(Number), log }, null, 1));
console.log('lead', lead.toFixed(2), 'log', JSON.stringify(log));
