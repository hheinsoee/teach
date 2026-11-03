# Day 3 — JS Basics: Variables & Data Types

**Phase**: Learning (Day 3 of 8)
**Project**: Habit Tracker
**Modules touched**: A (programming fundamentals), H (JS), F (AI)
**Duration**: 90 min + 3 hr HW

---

## Learning outcomes

- **Read**: a JS line and identify variable, type, assignment
- **Understand**: variables remember things; types are what kind of thing
- **Direct**: AI to log data about habits using variables
- **Verify**: console.log output in DevTools

---

## 90-min plan

| Block | Min | Activity |
|---|---|---|
| HW review | 10 | 2 students show styled pages |
| Concept: "Code remembers things" | 15 | Variables + 4 data types |
| Instructor demo | 15 | AI generates JS with variables, read console output |
| Student build | 35 | Students prompt, log data, inspect console |
| Label + commit | 15 | Variable, type, console.log |

---

## Concept (15 min) — the first programming concept

Whiteboard:

```
Code က အရာတွေကို "မှတ်" ထားတယ်။
"မှတ်" တာ ဟာကို — "variable" လို့ ခေါ်။

Example:
   let habitName = "Pray"
       ↑        ↑  ↑
     ဒါ var   =  value

Types (ဘယ်လိုအရာ ဖြစ်လဲ):
- "Pray"       →  string (စာလုံး)
- 4            →  number (ဂဏန်း)
- true         →  boolean (ဟုတ်/မဟုတ်)
- [1, 2, 3]    →  array (စာရင်း)
```

**Key points**:
- `let` = "assign and can change later"
- `const` = "assign, never changes"
- Types matter — can't add "Pray" + 4
- `console.log(x)` = "show me what x is"

**Analogy**: Variables = **ဘူးထဲမှာ ထည့်ထား**။ Name က ဘူးရဲ့ label, value က ဘူးထဲက အရာ။

---

## Demo (15 min)

Open DevTools (F12 → Console). Type live:

```javascript
let myName = "Hein"
console.log(myName)
```

Output: `"Hein"`.

```javascript
let habitCount = 4
console.log(habitCount)
```

Output: `4`.

```javascript
let habits = ["Pray", "Study", "Exercise", "Water"]
console.log(habits)
```

Output: array.

```javascript
let allDone = false
console.log(allDone)
```

Output: `false`.

Then prompt AI:

```
Add JavaScript to my Habit Tracker that:
- Declares an array of habits
- Logs the number of habits
- Logs the first habit's name
- Logs whether today is a weekday

Explain each line in Burmese or simple English.
```

Read AI's JS line by line. Save to `script.js`. Add `<script src="script.js"></script>` before `</body>`.

Open live URL, F12 → Console. See the logs.

---

## Student build (35 min)

Each student:
1. Open DevTools Console
2. Type a few variables manually (log name, favorite number)
3. Prompt AI for script.js (habits array + logs)
4. Save to `script.js`
5. Push
6. Open live URL + console, see logs

**Instructor circulates**:
- Student doesn't know how to open DevTools → F12 or right-click → Inspect
- Variable name has space → "no spaces in variable names"
- Student uses `=` instead of `===` for compare → Day 4 topic, not today

---

## Label (10 min)

Write (no AI):

1. What is a **variable**?
2. Difference between `let` and `const`?
3. Name the 4 data types we learned
4. What does `console.log()` do?
5. Why do variables exist?

**Pocket answers**:
- Variable = a named box that holds a value
- `let` = can change value later; `const` = can't change
- string, number, boolean, array
- Logs a value to the browser Console for debugging
- To remember and re-use things in code

---

## Common failures

| Failure | Fix |
|---|---|
| F12 doesn't open DevTools | Try right-click → Inspect |
| Console shows red error | Read error, paste to AI with "what does this mean?" |
| JS doesn't run | `<script>` tag placement wrong — before `</body>` |
| AI uses complex syntax | Re-prompt: "simpler, basic variables only" |

---

## NOT

- Operators (`+`, `-`, `*`) → Day 4
- Conditions / if/else → Day 4
- Loops → Day 5
- Writing JS from scratch (reading via AI only)

Keep tight: variable, type, console.log. 3 concepts.
