# Day 4 — In-Class Exercise

**Goal**: Learn to bundle code into **functions** and make **decisions** with if/else.

---

## Step 1 — Try a function in Console

Open your live URL. F12 → Console. Type:

```javascript
function sayHello(name) {
    console.log("Hello, " + name)
}

sayHello("Hein")
sayHello("Pwint")
```

Notice:
- You defined `sayHello` once
- You called it twice with different names
- That's a function. **Reusable.**

---

## Step 2 — Try if/else in Console

```javascript
let count = 4

if (count === 4) {
    console.log("All done!")
} else {
    console.log("Keep going")
}
```

Change `count` to `2`. Re-run.

**That's if/else — code makes decisions.**

---

## Step 3 — Prompt AI for functions

Paste:

```
Update my script.js to add these 3 functions:

1. isWeekend() — returns true if today is Saturday or Sunday
2. greetByTime() — returns:
   - "Good morning" if hour < 12
   - "Good afternoon" if hour < 18
   - "Good evening" otherwise
3. countCompleted(arr) — takes an array of booleans
   and returns how many are true

At the end, call each function and console.log the result.

Explain each function in simple English.
```

---

## Step 4 — Save script.js

Copy JS from AI. Append to `script.js` (don't delete old code — add after).

Save.

---

## Step 5 — Push and test

GitHub Desktop → commit `Day 4 — add functions` → push.

Wait 30 sec. Reload live URL. F12 → Console.

**See the function outputs**. Check they make sense.

---

## Step 6 — Read your code

For each function, answer:
- What are the parameters?
- What does it return?
- What's inside the if/else?

Ask AI: "Explain the countCompleted function line by line"

---

## Step 7 — Modify

Change `greetByTime` to return "Good night" if hour >= 22.

Push. Test.

---

## Step 8 — Label (no AI!)

Write:
1. What is a **function**?
2. What is a **parameter**?
3. What does `return` do?
4. What's **DRY**?
5. Difference between `=` and `===`?

---

## Done when

- [ ] You typed a function in Console
- [ ] You typed an if/else in Console
- [ ] script.js has 3 functions
- [ ] Live URL + Console shows function outputs
- [ ] Modified greetByTime
- [ ] Label answers written

---

## Rules

1. **Call the function** or nothing happens (`greet("Hein")` not just `greet`)
2. **`===` for compare, `=` for assign**
3. **Read every function** before pushing. Understand it.

---

## If you finish early

Try nested conditions:

```javascript
let count = 3
let total = 4

if (count === total) {
    console.log("Perfect!")
} else if (count > total / 2) {
    console.log("Almost there")
} else {
    console.log("Just started")
}
```

**`else if`** lets you check multiple cases.
