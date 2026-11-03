**Google Classroom assignment**
**Points**: 10
**Due**: Evening before Day 4
**Submit**: Live demo video (30 sec) or screenshots + research notes + reflection

---

# Day 3 Homework — JavaScript Research + Add Features

**Total time**: ~3 hours
**Structure**: Research (1 hr) + Build (1-1.5 hr) + Reflect (0.5 hr)

---

## Part 1 — Research (1 hour)

Learn 3 JavaScript concepts in depth (reading, not writing):

Pick 3 from:
- **Variable** (`const`, `let`)
- **Function** (`function name() {}` and `() => {}`)
- **Event** (`click`, `change`, `submit`)
- **Array** (`[1, 2, 3]`)
- **Loop** (`forEach`, `for`)
- **Condition** (`if`, `else`)
- **DOM** (document.querySelector)

For each:
- Watch a short video or read MDN
- Write 2 sentences in your own words

---

## Part 2 — Build (1-1.5 hours)

### A. Add a "Clear all habits" button

Ask AI: *"Add a button labeled 'Clear all' that unchecks all habits when clicked."*

Add the button + JS. Test.

### B. Count habits done

Ask AI: *"Show a counter at the top: 'X of 4 habits done today'"*

Test. The number should update when you check/uncheck.

### C. Change text color when done

Ask AI: *"When a habit is checked, change its text color to grey as well as strikethrough."*

### D. Break on purpose

In your JS, change one line to cause a bug:
- Delete a semicolon
- Change `addEventListener('change', ...)` to `addEventListener('click', ...)`
- Delete a closing brace `}`

Reload. Open DevTools Console (F12). **Read the error.** Can you understand what it means?

Then restore your code. **This teaches you how to read errors.**

---

## Part 3 — Reflect (0.5 hour)

Write 3-5 sentences:

1. What was easier than you expected?
2. What was harder than you expected?
3. When you broke the code, what did the error message tell you?
4. One question you still have

---

## Submit via Google Classroom

1. **Live demo**: short video (30 sec) OR 3 screenshots showing: initial state, some checked, counter working
2. **Research notes** (3 JS concepts, 2 sentences each)
3. **Reflection** (3-5 sentences)
4. **Screenshot of DevTools Console** showing the error from your "break on purpose" test

---

## Done when

- [ ] You added "Clear all" button
- [ ] You added habits-done counter
- [ ] You added text color change when checked
- [ ] You broke your code and read the error
- [ ] You wrote research notes (3 concepts)
- [ ] You wrote reflection

---

## Rules

1. **Ask AI, read, modify.** Don't just copy-paste blindly.
2. **If AI's code doesn't work**, paste the error back to AI
3. **DevTools is your friend** — F12 is the keyboard shortcut

---

## Looking ahead

Tomorrow (Day 4): localStorage. Right now when you reload, everything resets. Tomorrow we fix that — your data **persists** across reloads.
