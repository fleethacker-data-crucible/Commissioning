// Presentation helpers for recorded flows (cursor, ripple, ring, smooth scroll, waits). Same overlay as the Halyard recorder.
export function lib({ page, mark, sleep, overlay }) {
  const ready = async () => { if (!(await page.evaluate(() => !!window.__h))) await page.evaluate(overlay); await page.evaluate(() => { window.__h.raise(); window.__h.cursor(true); }); };
  const moveTo = async (loc, settle = 700) => {
    if (!(await page.evaluate(() => !!window.__h))) await ready();
    await loc.scrollIntoViewIfNeeded(); const b = await loc.boundingBox(); if (!b) throw new Error('not visible');
    const x = b.x + b.width / 2, y = b.y + b.height / 2;
    await page.evaluate(([x, y]) => window.__h.moveTo(x, y), [x, y]); await sleep(settle); return { x, y };
  };
  const click = async (loc, after = 900, label = '') => {
    const { x, y } = await moveTo(loc); await page.evaluate(([x, y]) => window.__h.ripple(x, y), [x, y]);
    mark('click ' + label); await loc.click(); await sleep(after);
  };
  const typeInto = async (loc, text, delay = 55) => { await click(loc, 250, 'field'); await loc.pressSequentially(text, { delay }); await sleep(500); };
  const ring = async (sel, ms = 2200) => { await page.evaluate((s) => window.__h.ring(s), sel); await sleep(ms); await page.evaluate(() => window.__h.ringOff()); };
  const btn = (name) => page.getByRole('button', { name, exact: false }).first();
  const text = (t, exact = false) => page.getByText(t, { exact }).first();
  const scroll = async (px, ms = 1800) => {
    await page.evaluate(async ([px, ms]) => {
      const box = [...document.querySelectorAll('main, .scroll-y, body, div')].filter((e) => e.scrollHeight > e.clientHeight + 10 && getComputedStyle(e).overflowY !== 'visible').sort((a, b) => b.clientHeight - a.clientHeight)[0] || document.scrollingElement;
      const from = box.scrollTop, to = from + px, t0 = performance.now();
      await new Promise((done) => { const step = (n) => { const p = Math.min(1, (n - t0) / ms); const e = p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; box.scrollTop = from + (to - from) * e; p < 1 ? requestAnimationFrame(step) : done(); }; requestAnimationFrame(step); });
    }, [px, ms]); await sleep(500);
  };
  return { ready, moveTo, click, typeInto, ring, btn, text, scroll };
}
