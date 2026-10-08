// Expected: prints the total, 4500
// Run: node 02-async.js

function loadExpenses() {
  return new Promise((resolve) => {
    setTimeout(() => resolve([1000, 2000, 1500]), 100);
  });
}

async function total() {
  const expenses = loadExpenses();
  let sum = 0;
  for (const amount of expenses) {
    sum = sum + amount;
  }
  return sum;
}

total().then((t) => console.log("total:", t));
