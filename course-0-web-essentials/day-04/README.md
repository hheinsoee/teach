# Day 4 — Functions & Conditions

> **v5 flipped format**: This day uses 5 files: `prework.md` (Viber 2 days before) + `self-study.md` (night before) + `README.md` (this file) + `in-class.md` (student in-class guide) + `homework.md` (post-class).
>
> **Class structure (90 min)**: Q&A 25min + Discussion 15min + Live Build 25min + Label 10min + Wrap 15min. Teacher ~30% active, student ~70% active.
>
> **The 90-min plan table below is legacy v4 traditional**. See `../instructor/teaching-guide.md` for flipped guidance.


**Phase**: Learning (Day 4 of 8)
**Project**: Habit Tracker
**Modules touched**: A (programming), H (JS), F (AI)
**Duration**: 90 min + 3 hr HW

---

## Learning outcomes

- **Read**: a function definition and know what it does
- **Understand**: functions bundle instructions; if/else decides between paths
- **Direct**: AI to write functions and conditions
- **Verify**: calling the function with different inputs gives expected outputs

---

## 90-min plan

| Block | Min | Activity |
|---|---|---|
| HW review | 10 | Students show operations in Console |
| Concept: Functions + if/else | 15 | Why bundle code; how decisions work |
| Instructor demo | 15 | AI generates a function with conditions |
| Student build | 35 | Students add 2+ functions to script.js |
| Label + commit | 15 | Function, parameter, return, if/else |

---

## Concept (15 min)

### Functions — "a named recipe"

```javascript
function greet(name) {
    console.log("Hello, " + name)
}

greet("Hein")   // → "Hello, Hein"
greet("Pwint")  // → "Hello, Pwint"
```

Parts:
- `function` = keyword
- `greet` = name
- `(name)` = parameter (input)
- `{ ... }` = body (what it does)
- Called with `greet("Hein")`

**Why**: same code, used many times. **DRY** = Don't Repeat Yourself.

### Conditions — if/else

```javascript
let count = 4

if (count === 4) {
    console.log("All done!")
} else {
    console.log("Keep going")
}
```

Operators:
- `===` = exactly equal to
- `>` greater than
- `<` less than
- `>=` greater or equal
- `<=` less or equal
- `&&` AND (both true)
- `||` OR (either true)
- `!` NOT

### Combined — function with condition

```javascript
function checkDone(count, total) {
    if (count === total) {
        return "All done!"
    } else {
        return "Still " + (total - count) + " to go"
    }
}

console.log(checkDone(4, 4))   // "All done!"
console.log(checkDone(2, 4))   // "Still 2 to go"
```

---

## Demo (15 min)

Prompt AI:

```
Add to my script.js:
- A function called `countCompleted` that takes an array of booleans
  (whether each habit is done) and returns how many are true
- A function called `getStatusMessage` that returns:
  - "All habits done!" if all are true
  - "Great progress!" if more than half
  - "Keep going" if less than half

Then call both functions with example data and log results.

Explain each line.
```

Read every function:
- Parameter definition
- `if/else if/else` structure
- `return` keyword
- Function call

Save. Push. See logs.

---

## Student build (35 min)

Each student prompts AI for:
1. A function that logs "Welcome to habit tracker" (simple warmup)
2. A function `isWeekend` that returns true if today is Sat/Sun
3. A function `greetByTime` that returns:
   - "Good morning" before noon
   - "Good afternoon" before 6pm
   - "Good evening" after 6pm

They test by calling each in Console or script.

**Instructor circulates**:
- Student writes `=` instead of `===` → "triple equals = exactly equal"
- `return` vs `console.log` confusion → "return gives back a value; log prints"
- AI uses `function expression` or arrow syntax → OK, both work, pick one style

---

## Label (10 min)

Write:

1. What is a **function**?
2. What is a **parameter**?
3. What does `return` do?
4. What is **DRY**?
5. Difference between `=` and `===`?

**Pocket answers**:
- Function = reusable named block of code
- Parameter = input the function needs
- Return = value given back when function is called
- DRY = Don't Repeat Yourself (write once, use many times)
- `=` assigns; `===` compares

---

## Common failures

| Failure | Fix |
|---|---|
| Student calls function but nothing happens | Needs to `console.log(result)` or `return` then log |
| `if` without `{}` | OK for single line, but encourage braces for clarity |
| AI uses `==` instead of `===` | Both work; `===` is stricter and preferred |
| Student confuses `return` with `console.log` | "`return` = give back; `log` = print to Console" |

---

## NOT

- Arrow function syntax deep dive
- Closures / scope deep dive (Course 1)
- Recursion
- Pure functions / side effects (Course 1)

Keep tight: function, parameter, return, if/else. 4 concepts.
