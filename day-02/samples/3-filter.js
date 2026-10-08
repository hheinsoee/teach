const expenses = [
  { note: "coffee", amount: 350, category: "food" },
  { note: "bus", amount: 200, category: "transport" },
  { note: "lunch", amount: 1200, category: "food" },
];

// MARKED LINE
const food = expenses.filter((e) => e.category === "food");

for (const e of food) {
  console.log(e.note, e.amount);
}
