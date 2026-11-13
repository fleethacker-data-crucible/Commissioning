import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { clientErrorText } from './client-error.mjs';

// The previous response body. Kept as the oracle so the sanitizer cannot drift.
function legacyClientError(e) {
  return String(e && e.message || e);
}

const cases = [
  new Error('playwright timeout'),
  new Error(''),
  new TypeError('bad url'),
  'nope',
  '',
  0,
  1,
  false,
  true,
  null,
  undefined,
  { message: 'x' },
  { code: 7 },
];

test('client error text matches the previous response and omits the stack', () => {
  for (const value of cases) {
    assert.equal(clientErrorText(value), legacyClientError(value));
  }

  const withStack = new Error('secret path');
  withStack.stack = 'Error: secret path\n    at rec-server.mjs:61:5';
  assert.equal(clientErrorText(withStack), 'secret path');
  assert.equal(clientErrorText(withStack).includes('rec-server.mjs'), false);

  const empty = new Error('');
  empty.stack = 'STACKTRACE at rec-server.mjs:61';
  assert.equal(clientErrorText(empty), 'Error');
  assert.equal(clientErrorText(empty).includes('STACKTRACE'), false);
});

test('the recording server does not stringify the exception into the response', () => {
  const src = readFileSync(new URL('./rec-server.mjs', import.meta.url), 'utf8');
  assert.equal(src.includes('String(e && e.message || e)'), false);
  assert.equal(src.includes('clientErrorText(e)'), true);
  assert.equal(src.includes("listen(9340, '127.0.0.1'"), true);
});
