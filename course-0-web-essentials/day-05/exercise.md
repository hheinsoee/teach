# Day 5 — In-Class Exercise

**Goal**: Learn to **repeat** code with loops. Process every habit in an array.

---

## Step 1 — Try a loop in Console

Open live URL. F12 → Console. Type:

```javascript
let items = ["apple", "banana", "cherry"]

for (let i = 0; i < items.length; i++) {
    console.log(i, items[i])
}
```

Press Enter. See 3 lines logged.

**What happened**: loop ran 3 times. Each time `i` was different (0, 1, 2).

---

## Step 2 — Try forEach

```javascript
items.forEach(item => {
    console.log(item)
})
```

Simpler. Same result (minus the index).

---

## Step 3 — Prompt AI for your Habit Tracker

Paste:

```
Update script.js: use a for loop to go through my habits array
and log each one with a number, like:
   "1. Pray"
   "2. Study"
   ...

Then add a function `countTodo(habits, doneArray)` that uses a loop
to count how many habits in `doneArray` are false (not done).

Call countTodo with example data. Log the result.
```

---

## Step 4 — Save, push, test

Save `script.js`. GitHub Desktop → commit `Day 5 — loops` → push.

Wait 30 sec. Reload live URL + Console.

**See numbered habits + todo count.**

---

## Step 5 — Modify

Change the log format in your loop:
- From `"1. Pray"` to `"Habit #1 is Pray"`

Push. Test.

---

## Step 6 — Dangerous experiment: infinite loop

In Console, type:

```javascript
for (let i = 0; i < 10;) {
    console.log(i)
}
```

Notice **no `i++`**. Press Enter.

**Browser freezes.** Close the tab (don't panic). Reopen.

**Lesson**: without `i++`, loop never ends. Infinite loop crashes.

---

## Step 7 — Read your code

Look at your `for` loop. Answer:
- What's the starting value of `i`?
- What's the condition to keep going?
- What makes `i` grow?
- What runs each iteration?

Ask AI if unsure.

---

## Step 8 — Label (no AI!)

Write:
1. What is a **loop**?
2. What is an **iteration**?
3. What is the **index** (`i`)?
4. `for` vs `forEach`?
5. What happens if you forget `i++`?

---

## Done when

- [ ] You ran a `for` loop in Console
- [ ] You ran a `forEach` in Console
- [ ] `script.js` has at least 1 loop
- [ ] Numbered habits appear in Console
- [ ] You experienced infinite loop (and recovered)
- [ ] Label answers written

---

## Rules

1. **Arrays start at 0**. First item is `arr[0]`.
2. **`i < arr.length` not `<=`**. Avoid off-by-one.
3. **Don't forget `i++`**. Or use `forEach` to not worry about it.

---

## If you finish early

Try nested:

```javascript
let days = ["Mon", "Tue"]
let habits = ["Pray", "Study"]

days.forEach(day => {
    habits.forEach(habit => {
        console.log(day + ": " + habit)
    })
})
```

**4 logs**. Day × habit combinations. Nested loops.
