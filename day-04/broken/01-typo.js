// Expected: prints "Lunch: 1200"
// Run: node 01-typo.js

const expense = {
  category: "Lunch",
  amount: 1200,
};

function describe(e) {
  return e.catagory + ": " + e.amount;
}

console.log(describe(expense));
