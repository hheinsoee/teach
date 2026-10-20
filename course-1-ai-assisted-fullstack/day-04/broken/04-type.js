// Expected: prints "total: 1550"
// Run: node 04-type.js
//
// This one does NOT crash. Look at the number it prints.

const amounts = ["350", "200", "1000"];

function total(list) {
  let sum = 0;
  for (const a of list) {
    sum = sum + a;
  }
  return sum;
}

console.log("total:", total(amounts));
