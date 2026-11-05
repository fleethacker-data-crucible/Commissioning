// Headed Chromium that stays open so the user can sign in once, then records 1920x1080 page video per chapter.
// Control: HTTP on 127.0.0.1:9340.  Each recorded page has its own video (the page, not the screen).
//   GET  /status
//   POST /page   {name, url?, record?}     open a page (record:false = a throwaway page, its video is deleted)
//   POST /eval   {name, js}                evaluate JS in a page, returns the result
//   POST /shot   {name, path}              PNG of the page
//   POST /run    {file, name?, args?}      run flows/<file>.mjs default export(ctx) on page `name`
//   POST /close  {name, as}                close the page and move its video to `as`
import http from 'node:http';
import { createRequire } from 'node:module';
import { mkdirSync, renameSync, rmSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const require = createRequire('C:/Users/Anthony/Projects/Capstan/package.json');
const { chromium } = require('playwright');
const here = dirname(fileURLToPath(import.meta.url));
const profile = 'C:/Users/Anthony/Videos/Fleet-Demos/_recprofile';
const vdir = join(here, '..', 'clips', '_reshoot'); mkdirSync(vdir, { recursive: true });
const overlay = readFileSync(join(here, 'overlay.js'), 'utf8');
const W = 1920, H = 1080;

const ctx = await chromium.launchPersistentContext(profile, {
  headless: false, viewport: { width: W, height: H }, deviceScaleFactor: 1, colorScheme: 'dark',
  recordVideo: { dir: vdir, size: { width: W, height: H } },
  args: ['--force-device-scale-factor=1', '--window-position=0,0'],
});
const pages = new Map(); const info = new Map();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function openPage(name, url, record = true) {
  const p = await ctx.newPage(); pages.set(name, p); info.set(name, { record, t0: Date.now(), events: [] });
  if (url) await p.goto(url, { waitUntil: 'domcontentloaded' });
  return p;
}
const helpers = (name) => {
  const page = pages.get(name), inf = info.get(name);
  const mark = (what) => inf.events.push({ t: +((Date.now() - inf.t0) / 1000).toFixed(2), what });
  return { page, mark, sleep, overlay, events: () => inf.events, ctx };
};

http.createServer(async (req, res) => {
  const body = await new Promise((r) => { let s = ''; req.on('data', (d) => (s += d)); req.on('end', () => r(s ? JSON.parse(s) : {})); });
  const out = (o, code = 200) => { res.writeHead(code, { 'content-type': 'application/json' }); res.end(JSON.stringify(o)); };
  try {
    if (req.url === '/status') return out({ pages: [...pages.keys()], urls: await Promise.all([...pages.values()].map((p) => p.url())) });
    if (req.url === '/page') { await openPage(body.name, body.url, body.record !== false); return out({ ok: true }); }
    if (req.url === '/eval') return out({ result: await pages.get(body.name).evaluate(body.js) });
    if (req.url === '/shot') { await pages.get(body.name).screenshot({ path: body.path }); return out({ ok: true }); }
    if (req.url === '/run') {
      const mod = await import(pathToFileURL(join(here, 'flows', body.file + '.mjs')).href + '?v=' + Date.now());
      const h = helpers(body.name); const r = await mod.default({ ...h, args: body.args || {} });
      return out({ ok: true, result: r ?? null, events: h.events() });
    }
    if (req.url === '/close') {
      const p = pages.get(body.name), inf = info.get(body.name), v = p.video();
      const events = inf.events; await p.close(); pages.delete(body.name);
      if (v) { const path = await v.path(); if (body.as) { renameSync(path, body.as); return out({ ok: true, video: body.as, events }); } rmSync(path, { force: true }); }
      return out({ ok: true, events });
    }
    out({ error: 'unknown' }, 404);
  } catch (e) { out({ error: String(e && e.message || e) }, 500); }
}).listen(9340, '127.0.0.1', () => console.log('rec-server ready'));
