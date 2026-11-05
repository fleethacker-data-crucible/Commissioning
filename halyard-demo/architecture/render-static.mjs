// Renders the static PNG (2400 px wide) and standalone SVG of the Halyard architecture infographic.
import { createRequire } from 'node:module';
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const require = createRequire('C:/Users/Anthony/Projects/Capstan/package.json');
const { chromium } = require('playwright');
const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, '..');
const url = pathToFileURL(join(here, 'architecture.html')).href + '?static=1';
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1.25 });
const page = await ctx.newPage();
await page.goto(url);
await page.waitForFunction(() => window.__ready);
await page.waitForTimeout(300);
await page.screenshot({ path: join(out, 'Halyard-architecture.png') });
const svg = await page.evaluate(() => {
  const s = document.getElementById('arch').cloneNode(true);
  s.classList.add('static');
  s.querySelectorAll('.cur').forEach((e) => e.classList.remove('cur'));
  return s.outerHTML;
});
writeFileSync(join(out, 'Halyard-architecture.svg'), '<?xml version="1.0" encoding="UTF-8"?>\n' + svg + '\n');
await browser.close();
console.log('ok');
