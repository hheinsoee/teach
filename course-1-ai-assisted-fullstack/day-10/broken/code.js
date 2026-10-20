// The code under test. Break it on purpose, then re-run the tests.

function monthlyTotal(expenses, month) {
  return expenses
    .filter((e) => e.spent_on.startsWith(month))
    .reduce((sum, e) => sum + e.amount, 0);
}

function expensesFor(all, userId) {
  return all.filter((e) => e.user_id === userId);
}

function validateAmount(amount) {
  if (typeof amount !== "number") throw new Error("amount must be a number");
  if (amount <= 0) throw new Error("amount must be positive");
}

module.exports = { monthlyTotal, expensesFor, validateAmount };
