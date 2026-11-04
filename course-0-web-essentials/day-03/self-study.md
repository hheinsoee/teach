# Day 3 — Self-Study (Before Class)

**Do this at home the night before Day 3.** Target time: 60-90 minutes.

**Goal**: Learn how code "remembers" things using variables. See data in your browser's Console.

**After this self-study**: write **3 questions** you want to ask in class. Those questions = your "ticket to class".

---

## Step 1 — Open DevTools Console

Open your live URL in Chrome. Press **F12** (or right-click → **Inspect**).

Click the **Console** tab. You can type JavaScript here directly.

---

## Step 2 — Try variables yourself (3 min)

Type in Console (each line, press Enter):

```javascript
let myName = "YOUR NAME"
```
Then:
```javascript
console.log(myName)
```

What appears?

Try with a number:
```javascript
let myAge = 25
console.log(myAge)
```

Try an array:
```javascript
let myHabits = ["Pray", "Study", "Water"]
console.log(myHabits)
```

**Notice**: `console.log` shows you what's inside a variable.

---

## Step 3 — Prompt AI for script.js

Paste in ChatGPT/Claude:

```
Add JavaScript to my Habit Tracker. Create a file script.js that:
- Declares a const array called `habits` with 4 habit names
- Logs the number of habits using habits.length
- Logs the first habit using habits[0]
- Logs today's date using new Date()
- Logs whether all habits are "done" (hardcode as false for now)

Explain each line in simple English.
```

---

## Step 4 — Save script.js

Copy JS from AI. Open `script.js` in editor. Paste. Save.

---

## Step 5 — Check it's linked

In `index.html`, find before `</body>`:

```html
<script src="script.js"></script>
```

(Starter should have this.)

If not, add it. Save.

---

## Step 6 — Commit + push

GitHub Desktop → Summary: `Day 3 — add JS variables` → Commit → Push.

---

## Step 7 — See the logs

Wait 30 sec. Reload live URL. Open DevTools (F12) → Console.

**You see 4 log lines**. That's your JS running inside the browser.

---

## Step 8 — Read your code

Open `script.js`. Try to answer:
- Which line is a variable?
- Which line is a string?
- Which line is a number?
- Which line is an array?

If stuck, ask AI: "Explain line X of this code: [paste]"

---

## Step 9 — Label (no AI!)

Write:

1. What is a **variable**?
2. `let` vs `const` difference?
3. The 4 types we learned (string, number, boolean, array) — what's each?
4. What does `console.log()` do?
5. Why do variables exist?

---

## Done when (before class)

- [ ] You typed 3 variables in Console directly
- [ ] `script.js` has your habits array
- [ ] Live URL + Console shows 4+ log lines
- [ ] You can point at a line and say "that's a variable" / "that's a string"
- [ ] Label answers written
- [ ] **3 questions written to ask in class** ⭐ (required)

---

## Your 3 questions (ticket to class)

Before arriving to class, write **3 questions** that came up during self-study. Examples of good questions:

- "Why does `let` exist if `const` works for most things?"
- "What happens if I use a variable name that's a reserved word?"
- "Can I store a function inside a variable?"

Bring these questions written down. Teacher will collect at start of class.

**If you have no questions**: write "I understood everything" + attempt to explain variables + types in 3 sentences. If you really can explain, that's your "question-equivalent" — share with class.

---

## If you finish early

Try in Console:

```javascript
let habits = ["Pray", "Study"]
habits.push("Exercise")
console.log(habits)
```

What changes? What does `.push()` do?

Or try:

```javascript
let x = 5
let y = 3
console.log(x + y)
console.log(x - y)
console.log(x * y)
```

Numbers can do math. We'll see this in Day 4.

---

## Rules

1. **Variables have no spaces** in names. `my habit` ❌ → `myHabit` ✅
2. **Strings need quotes** (`"Pray"`). Numbers don't (`4`).
3. **If something breaks**, Console shows red error. Read it, ask AI.
