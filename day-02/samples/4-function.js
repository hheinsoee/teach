function format(amountInCents) {
  // MARKED LINE
  return (amountInCents / 100).toFixed(2);
}

console.log(format(35050));
console.log(format(200));
