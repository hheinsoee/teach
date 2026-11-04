const expenses = [
  { id: 1, note: "coffee", amount: 350 },
  { id: 2, note: "lunch", amount: 1200 },
];

function findById(list, id) {
  // MARKED LINE
  return list.find((item) => item.id === id);
}

const found = findById(expenses, 2);
console.log(found.note);

const missing = findById(expenses, 99);
console.log(missing);
