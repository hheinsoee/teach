// Does this test actually check that negative amounts are rejected?

const { test } = require("node:test");
const assert = require("node:assert");
const { validateAmount } = require("./code");

test("rejects bad amounts", () => {
  assert.throws(() => validateAmount(-500));
  assert.throws(() => validateAmount("abc"));
  assert.throws(() => validateAmount(0));
  assert.doesNotThrow(() => validateAmount(350));
});
