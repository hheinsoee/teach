// Expected: prints the 3 most recent expenses
// Run: node 03-off-by-one.js
//
// This one does NOT crash. Read the output carefully.

const expenses = [
  { note: "coffee", amount: 350 },
  { note: "bus", amount: 200 },
  { note: "lunch", amount: 1200 },
  { note: "book", amount: 2500 },
];

function lastThree(list) {
  const result = [];
  for (let i = list.length - 3; i <= list.length; i++) {
    result.push(list[i]);
  }
  return result;
}

console.log(lastThree(expenses));
