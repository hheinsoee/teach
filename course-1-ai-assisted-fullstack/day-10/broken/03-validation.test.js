// Does this test actually check that bad amounts are rejected?

const { test } = require("node:test");
const assert = require("node:assert");
const { validateAmount } = require("./code");

test("validates the amount", () => {
  assert.doesNotThrow(() => validateAmount(350));
});
