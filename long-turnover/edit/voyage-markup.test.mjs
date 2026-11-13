import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const srcDir = join(dirname(fileURLToPath(import.meta.url)), 'src');

function loadScenes() {
  const context = vm.createContext({ console });
  const source = readFileSync(join(srcDir, 'lib.js'), 'utf8')
    + '\n' + readFileSync(join(srcDir, 'graphics.js'), 'utf8')
    + '\nglobalThis.__S = S;\n';
  vm.runInContext(source, context);
  return context.__S;
}

// SHA-256 of S.voyage at these samples before the no-op replace was removed.
const samples = [
  { t: 0, D: 12, c: [], hash: '49ae43dd1c82574ae993aa49bd7651c550e670dc33ca6aa83349969597d534ed' },
  { t: 1.2, D: 12, c: [0.5, 2, 3, 5, 7], hash: '75a75fa96c1f3892d838ce0903bb987f94cb961be39af673dae2d1d4712154fc' },
  { t: 6, D: 12, c: [0.5, 2, 3, 5, 7], hash: 'b07bd40ea540044fea1f304d78024757c8d2fefb37cb38b646fbaa10233cafb0' },
  { t: 8.5, D: 12, c: [0.5, 2, 3, 5, 7], hash: '6522b3fc2e5b4ee78a551c2dd954d81048e79c9b0bf3c60cb8501131bfbff688' },
  { t: 11.5, D: 12, c: [0.5, 2, 3, 5, 7], hash: 'c54b7e77f92472076745f3751e3d3214e32c6124ff472218791606a3fc98c853' },
  { t: 20, D: 30, c: [1, 3, 4, 6, 8], hash: 'd97065bb2a7cc1e39addde69eb2c8fd17599512683146d77689cb184670588d5' },
];

test('voyage chart markup is unchanged and no longer identity-replaces its dash array', () => {
  const graphics = readFileSync(join(srcDir, 'graphics.js'), 'utf8');
  assert.equal(graphics.includes('.replace(\'stroke-dasharray="1 1"\',\'stroke-dasharray="1 1"\')'), false);

  const voyage = loadScenes().voyage;
  for (const sample of samples) {
    const svg = voyage(sample.t, sample.D, sample.c);
    const hash = createHash('sha256').update(svg).digest('hex');
    assert.equal(hash, sample.hash, `t=${sample.t} D=${sample.D}`);
  }

  const drawn = voyage(11.5, 12, [0.5, 2, 3, 5, 7]);
  assert.equal(drawn.includes('stroke-dasharray="1 1"'), true);
  assert.equal(drawn.includes('stroke-dasharray="1.2 1.6"'), true);
  assert.equal(drawn.includes('stroke-dasharray:none'), true);
});
