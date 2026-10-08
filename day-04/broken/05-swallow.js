// Expected: tells you when an expense is invalid
// Run: node 05-swallow.js
//
// The bug here is not the error. The bug is what this code does WITH the error.

const rows = [
  '{"note":"coffee","amount":350}',
  'this is not valid json',
  '{"note":"lunch","amount":1200}',
];

function parseAll(list) {
  const out = [];
  for (const row of list) {
    try {
      out.push(JSON.parse(row));
    } catch (e) {}
  }
  return out;
}

const parsed = parseAll(rows);
console.log("parsed", parsed.length, "of", rows.length, "rows");
console.log(parsed);
