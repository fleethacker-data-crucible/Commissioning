// Chapter c03 (Lazarette): the vault, the credential test, the Fairlead share, Fairlead picking the key up.
import { readFileSync } from 'node:fs';
import { lib } from './_lib.mjs';
const cfg = JSON.parse(readFileSync(new URL('../recorder.config.json', import.meta.url), 'utf8'));
export default async function (c) {
  const { page, mark, sleep } = c; const L = lib(c);
  const scrollMain = async (px, ms) => {
    await page.evaluate(async ([px, ms]) => {
      const box = [...document.querySelectorAll('main, div')].filter((e) => e.scrollHeight > e.clientHeight + 10 && getComputedStyle(e).overflowY !== 'visible').sort((a, b) => b.clientHeight - a.clientHeight)[0] || document.scrollingElement;
      const from = box.scrollTop, to = from + px, t0 = performance.now();
      await new Promise((done) => { const step = (n) => { const p = Math.min(1, (n - t0) / ms); const e = p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; box.scrollTop = from + (to - from) * e; p < 1 ? requestAnimationFrame(step) : done(); }; requestAnimationFrame(step); });
    }, [px, ms]); await sleep(500);
  };
  await page.goto('http://127.0.0.1:8765/', { waitUntil: 'domcontentloaded' });
  await page.getByText('All items').first().waitFor({ timeout: 15000 }); await L.ready(); await sleep(1800);
  mark('turn0 vault list');
  await sleep(1500);
  // add form (opened to show where a key goes; nothing is saved)
  await L.click(L.btn('New item'), 1400, 'New item');
  await L.click(page.getByText('API credential', { exact: true }).first(), 900, 'API credential');
  await L.typeInto(page.getByPlaceholder(/GitLab|MAX_UPLOAD/).first(), 'OPENAI_API_KEY', 60); await sleep(1800);
  await L.click(page.getByRole('button', { name: 'Cancel', exact: true }).first(), 900, 'Cancel');
  await sleep(900);
  const ad = page.getByRole('alertdialog');
  if (await ad.count()) { await L.click(ad.getByRole('button', { name: /discard|leave|yes|close|abandon/i }).first(), 900, 'Discard'); }
  mark('turn1 test credential');
  await L.click(page.getByText('OPENAI_API_KEY', { exact: true }).first(), 1600, 'OPENAI_API_KEY');
  await L.click(L.btn('Test credential'), 500, 'Test credential');
  await sleep(900);
  await L.click(page.getByRole('button', { name: 'Send and test', exact: true }).first(), 400, 'Send and test');
  await page.waitForFunction(() => /HTTP\s*200|200\s*OK|\b200\b/.test(document.body.innerText) || /valid|accepted|key is good/i.test(document.body.innerText), null, { timeout: 25000, polling: 400 }).catch(() => mark('no result text'));
  mark('result seen'); await sleep(3200);
  mark('turn2 share with Fairlead');
  await L.click(page.getByText('Settings', { exact: true }).first(), 1200, 'Settings');
  await L.click(page.getByRole('tab', { name: 'Fairlead' }).or(page.getByText('Fairlead', { exact: true })).first(), 1500, 'Fairlead tab');
  await sleep(3500);
  mark('turn3 fairlead reads it');
  await page.goto(cfg.fairlead + '#/providers', { waitUntil: 'domcontentloaded' }); await L.ready(); await sleep(2500);
  await L.click(L.btn('Refresh'), 2500, 'Refresh');
  await L.click(page.getByText('OpenAI', { exact: true }).first(), 1500, 'OpenAI provider');
  await L.click(L.btn('Test connection'), 500, 'Test connection');
  await page.waitForFunction(() => /\b\d{2,3}\s+models?\b/i.test(document.body.innerText) || /Models \(\d+\)/.test(document.body.innerText), null, { timeout: 30000, polling: 500 }).catch(() => mark('no model count'));
  mark('models seen'); await sleep(1200);
  await scrollMain(135, 1000); mark('result raised'); await sleep(3200);
  mark('end');
}
