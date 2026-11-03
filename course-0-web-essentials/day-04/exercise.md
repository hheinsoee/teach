# Day 4 — In-Class Exercise

**Goal**: Make your Habit Tracker remember checks across reloads. Add streak counter.

---

## Step 1 — Test what you have

Open `habit-tracker/index.html`. Check some habits. Reload Chrome.

**All checks disappear.** That's today's problem.

---

## Step 2 — Prompt AI for localStorage

Paste:

```
I have a Habit Tracker. Checkboxes work with JavaScript but reset on reload.
I want:

- When I check a habit, save it to localStorage
- When the page loads, restore all saved checks
- Add a "streak" counter — how many days in a row all habits were done
- Add a "Reset today" button that unchecks all habits for today only

Give me updated JavaScript. Explain the new lines.

Here is my current HTML:

[PASTE YOUR INDEX.HTML]
```

---

## Step 3 — Replace your JS

Find your `<script>` tag in `index.html`. Replace the content inside it with AI's new code.

Save `index.html`.

---

## Step 4 — Test persistence

Reload Chrome. Check all 4 habits. Reload again.

**Checks should stay.** Close the tab. Reopen `index.html`. Checks still there.

If they disappear:
- Open DevTools (F12) → Application tab → Local Storage → check if your data is there
- If missing, re-prompt AI
- If there but not restored, ask AI: "The data is in localStorage but doesn't restore. Help."

---

## Step 5 — Test streak counter

Check all 4 habits today. Streak should become 1.

Simulate tomorrow:
- Uncheck all
- Imagine it's a new day

Prompt AI if confused: *"How can I simulate 'new day' to test my streak counter?"*

AI might suggest: temporarily change the system date, or add a "test mode" button.

---

## Step 6 — Read the localStorage data

Open DevTools (F12). Click **Application** tab (or **Storage** on Firefox).

In the left sidebar, click **Local Storage** → your file.

You'll see a key like `habits` and some weird-looking text (JSON).

**That's your saved data.** Click on it to see.

---

## Step 7 — Label (no AI!)

Write:

1. What is **localStorage**?
2. Where does localStorage data physically live? (your laptop, Google's server, somewhere else?)
3. What is **state**?
4. If you clear your browser cache, what happens to localStorage?
5. Why can't localStorage save a JavaScript object directly? What do we convert it to?

---

## Done when

- [ ] Checks persist across page reload
- [ ] Checks persist across closing and reopening the tab
- [ ] Streak counter works
- [ ] Reset button clears today's checks
- [ ] You viewed localStorage in DevTools
- [ ] Label answers written

---

## If you finish early

Try:
- **Add a timestamp**: "Last checked at 7:30 AM"
- **Add a weekly view**: show how many days per week you hit all habits
- **Add a new habit via a form** (text input + "Add" button)

---

## Rules

1. **Reload after every change** to test persistence
2. **DevTools → Application → Local Storage** is where your data lives
3. **If something's weird**, inspect localStorage first before re-prompting
