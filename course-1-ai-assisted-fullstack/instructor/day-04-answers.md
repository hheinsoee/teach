# Day 4 — Broken Code Answers

**Do not place this file in `day-04/broken/`.**

---

## 01-typo.js — crashes loudly

**Bug:** line 10, `e.catagory` is misspelled. The property is `category`.
**Output:** `undefined: 1200`
**Teaches:** `undefined` almost always means a name that does not exist. JavaScript does
not warn you — it hands back `undefined` and continues.

**Push them with:** "The code did not crash. Why not? What did JavaScript do instead?"

---

## 02-async.js — crashes loudly

**Bug:** line 11, missing `await`. `loadExpenses()` returns a Promise, not an array.
**Output:** `TypeError: expenses is not iterable`
**Teaches:** an async function hands back a promise of a value, not the value.

**Push them with:** "What *is* `expenses` at that line, if it is not an array?"

---

## 03-off-by-one.js — SILENT

**Bug:** line 15, `i <= list.length` should be `i < list.length`. The loop also starts
one too early for "three items" — it reads index 1,2,3,4 and index 4 does not exist.
**Output:** 4 items, the last one `undefined`. No error.
**Teaches:** the first silent failure. Nothing is wrong *technically*; the answer is
just incorrect.

**Push them with:** "How many items did you ask for? How many did you get?"

> This is the most important file of the five. Most production bugs look like this —
> no crash, wrong data. Spend time here.

---

## 04-type.js — SILENT

**Bug:** line 6, the amounts are strings. `0 + "350"` is `"0350"`, then `"0350" + "200"`...
**Output:** `total: 03502001000` — a string, not a number.
**Teaches:** `+` means addition for numbers and joining for text. Data arriving from a
form, a CSV, or a URL is **always text** until you convert it.

**Push them with:** "Is that a number or is that text? How can you tell?"

> Connect this forward to day 8: this is why `amount` is stored as an integer, and
> why form input must be converted before it touches the database.

---

## 05-swallow.js — the dangerous one

**Bug:** line 15, `catch (e) {}` — the error is caught and thrown away.
**Output:** `parsed 2 of 3 rows` — correct-looking, and it hides a real failure.
**Teaches:** this is what a bad "fix" looks like. The program no longer complains.
The data is still wrong.

**Push them with:** "Nothing crashed. Is anything wrong? How would you ever find out?"

**The fix is not to delete the try/catch** — it is to do something in it: log it,
count it, or report it. Catching an error and doing nothing is lying to yourself.

> Tie this to the course rule: when the agent "fixes" a bug by wrapping it in
> try/catch and doing nothing, it hid your bug. Reject that fix.

---

## Checkpoint 1 bugs (break each student's own day-1 site)

Rotate so neighbours do not get the same one:

| Bug | How to introduce | Error they see |
|---|---|---|
| Renamed variable | Change a name in one place only | `X is not defined` |
| Bad import path | Change `./components/Foo` to `./component/Foo` | `Cannot find module` |
| Removed `await` | Delete one `await` | `undefined` or a Promise printed |
| Wrong env var name | Rename it in `.env` only | `undefined` at runtime |
| Wrong status code | Return 200 where 404 belongs | No error — behaviour is just wrong |

**Pass:** names the file and a plausible cause, within 10 minutes, no agent.
**Fail:** opens the agent, or cannot narrow it below "somewhere in the app".

Record in Classroom under `Checkpoints` → `Checkpoint 1 — Read the Error`.
