// Loads the REAL edge-ops catalog page from disk, injects periscope-overlay.js, and saves a 3840x2160 still
// (the picture for the monitor zoom) plus, optionally, a short screen recording.
//   node make-periscope-screen.mjs --edge-ops <path to edge-ops checkout> [--out periscope-screen-real.png]
// Needs Playwright (use the same one as Capstan / Signal-Gun): require('playwright') must resolve.
import { createRequire } from 'node:module';
import { readFile } from 'node:fs/promises';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';
const here = dirname(fileURLToPath(import.meta.url));
const { values: a } = parseArgs({ options: { 'edge-ops': { type: 'string' }, out: { type: 'string', default: join(here, 'periscope-screen-real.png') }, playwright: { type: 'string' } } });
if (!a['edge-ops']) { console.error('usage: node make-periscope-screen.mjs --edge-ops <edge-ops folder>'); process.exit(2); }
const require = createRequire(a.playwright ? resolve(a.playwright) + '/' : import.meta.url);
const { chromium } = require(a.playwright ? resolve(a.playwright) : 'playwright');
const overlay = await readFile(join(here, 'periscope-overlay.js'), 'utf8');
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 2, colorScheme: 'dark' });
await page.addInitScript(overlay);
await page.goto(pathToFileURL(join(resolve(a['edge-ops']), 'index.html')).href);
await page.waitForTimeout(800);
await page.screenshot({ path: resolve(a.out) });
console.log('wrote', resolve(a.out));
await browser.close();
