# Day 5 — Loops

> **v5 flipped format**: This day uses 5 files: `prework.md` (Viber 2 days before) + `self-study.md` (night before) + `README.md` (this file) + `in-class.md` (student in-class guide) + `homework.md` (post-class).
>
> **Class structure (90 min)**: Q&A 25min + Discussion 15min + Live Build 25min + Label 10min + Wrap 15min. Teacher ~30% active, student ~70% active.
>
> **The 90-min plan table below is legacy v4 traditional**. See `../instructor/teaching-guide.md` for flipped guidance.


**Phase**: Learning (Day 5 of 8)
**Project**: Habit Tracker
**Modules touched**: A (programming), H (JS), F (AI)
**Duration**: 90 min + 3 hr HW

---

## Learning outcomes

- **Read**: `for` and `forEach` loops; identify what varies per iteration
- **Understand**: loops do the same thing many times
- **Direct**: AI to loop over habit arrays
- **Verify**: output shows all items processed

---

## 90-min plan

| Block | Min | Activity |
|---|---|---|
| HW review | 10 | Students show function logs |
| Concept: Loops | 15 | Why repeat; `for` vs `forEach` |
| Instructor demo | 15 | AI generates loop to log habits |
| Student build | 35 | Students loop over habits array, change rendering |
| Label + commit | 15 | Loop, iteration, index |

---

## Concept (15 min)

### Why loops

Without loop (bad):
```javascript
console.log(habits[0])
console.log(habits[1])
console.log(habits[2])
console.log(habits[3])
```

With loop:
```javascript
for (let i = 0; i < habits.length; i++) {
    console.log(habits[i])
}
```

**4 ကြိမ်လား 100 ကြိမ်လား — code ထပ်မရေးရ**။

### Two main styles

**`for` loop** — classic, counts manually:
```javascript
for (let i = 0; i < habits.length; i++) {
    console.log(i, habits[i])  // 0 "Pray", 1 "Study", ...
}
```
Parts:
- `let i = 0` — start counter
- `i < habits.length` — keep going while true
- `i++` — increase counter by 1
- `{...}` — do this each time

**`forEach`** — simpler, works for arrays:
```javascript
habits.forEach(function(habit) {
    console.log(habit)
})
```

Or shorter with arrow:
```javascript
habits.forEach(habit => {
    console.log(habit)
})
```

Both work. Beginners can use either; AI picks for them.

---

## Demo (15 min)

Prompt AI:

```
Add to script.js: a loop that goes through my habits array
and logs each habit with a number, like:
   "1. Pray"
   "2. Study"
   "3. Exercise"
   "4. Water"

Also add a function `countTodo(habits, doneArray)` that uses a loop
to count how many habits are NOT done.
```

Read loop line by line:
- The counter
- The condition
- The body
- When it ends

Save, push, see 4 logs with numbers.

---

## Student build (35 min)

Each student prompts AI for:
1. Loop that logs habits numbered
2. Loop that counts total characters across all habit names
3. Loop that logs each habit with "Done!" or "Not yet" based on a parallel done array

Each student reads the loop after AI generates. Must be able to explain `i++`.

**Instructor circulates**:
- `i < habits.length` vs `i <= habits.length` → off-by-one bug
- `forEach` vs `for` — show both, let student pick
- Infinite loop (forgot `i++`) → Console freezes → close tab, re-prompt

---

## Label (10 min)

Write:
1. What is a **loop**?
2. What is an **iteration**?
3. What is the **index** (`i`)?
4. Difference between `for` and `forEach`?
5. What happens if you forget `i++`?

**Pocket answers**:
- Loop = repeat code multiple times
- Iteration = one run through the loop body
- Index = current position in array (starts at 0)
- `for` = manual counter; `forEach` = built-in for arrays
- Infinite loop → browser freezes

---

## Common failures

| Failure | Fix |
|---|---|
| Infinite loop (browser freezes) | Close tab. Add `i++` or `i--`. |
| Off-by-one (`<=` instead of `<`) | `arr[arr.length]` is undefined |
| Student doesn't understand `i = 0` | "Arrays start at 0, not 1" |
| `forEach` arrow syntax confuses | Show both styles; pick one |

---

## NOT

- `while` loop (encourage `for` or `forEach`)
- `.map()`, `.filter()`, `.reduce()` deep dive (Day 10)
- Nested loops
- Recursion

Keep tight: loop, iterate, index. One pattern (either `for` or `forEach`).
