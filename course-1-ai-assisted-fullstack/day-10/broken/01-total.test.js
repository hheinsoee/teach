// Does this test actually check that the total is correct?

const { test } = require("node:test");
const assert = require("node:assert");
const { monthlyTotal } = require("./code");

test("monthly total", () => {
  const expenses = [
    { amount: 350, spent_on: "2026-03-01" },
    { amount: 1200, spent_on: "2026-03-05" },
  ];
  const result = monthlyTotal(expenses, "2026-03");
  assert.ok(result !== undefined);
});
