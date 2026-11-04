const prices = [350, 1200, 200, 2500];

let total = 0;

// MARKED LINE
for (const price of prices) {
  total = total + price;
}

console.log("total:", total);
console.log("items:", prices.length);
