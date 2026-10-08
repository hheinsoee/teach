// Does this test actually check that A cannot read B's expense?

const { test } = require("node:test");
const assert = require("node:assert");
const { expensesFor } = require("./code");

test("users only see their own expenses", () => {
  const all = [
    { id: 1, user_id: "A", amount: 350 },
    { id: 2, user_id: "B", amount: 1200 },
  ];
  const result = expensesFor(all, "A");
  assert.strictEqual(result.length, 1);
  assert.strictEqual(result[0].user_id, "A");
});
