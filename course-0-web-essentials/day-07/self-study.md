# Day 7 — Self-Study: React State + localStorage

**Do this at home the night before class.** Target time: 60-90 minutes.

**After this self-study**: write **3 questions** to ask in class. Those questions = your "ticket to class".


**Goal**: Make your Habit Tracker interactive and persistent — using React's `useState` and `useEffect`.

---

## Step 1 — See state in Console

Open live URL. F12 → Console. Can't test React hooks there easily, but understand the concept:

> Components have **memory** (state). When state changes, React re-renders.

---

## Step 2 — Prompt AI

Paste:

```
In my React Habit Tracker:

- Add state for which habits are done (useState with an array of booleans)
- Clicking a checkbox toggles that habit's done state
- When done, strike through the habit text
- Save done state to localStorage on change (useEffect)
- Restore done state from localStorage on first load

Use React 18 CDN patterns (no npm). Keep my component structure.

Explain useState and useEffect in simple English.
```

---

## Step 3 — Replace app.jsx

Save AI's new `app.jsx`. Push.

---

## Step 4 — Test persistence

Reload live URL. Check 2 habits. Reload. Still checked.

Close tab. Reopen. Still checked.

---

## Step 5 — View localStorage

F12 → **Application** → Local Storage → your URL.

See your saved `done` array as JSON.

---

## Step 6 — Clear and test

In Application tab, clear localStorage. Reload. All unchecked (default).

---

## Step 7 — Read your code

Find in `app.jsx`:
- `const [done, setDone] = useState(...)` — state declaration
- `setDone(...)` — how state updates
- `useEffect(() => { ... }, [done])` — save side effect
- `onChange={...}` — event handler

Ask AI to explain any confusing line.

---

## Step 8 — Modify

Try: when all habits done, show a message "🎉 All done today!"

Ask AI to add. Push. Test.

---

## Step 9 — Label (no AI!)

Write:
1. What is **state**?
2. What does `useState` return?
3. Why can't we modify `done` directly?
4. What does `useEffect` do?
5. Who "owns" the data — React or localStorage?

---

## Done when

- [ ] Checkboxes toggle via state
- [ ] State persists across reload
- [ ] You viewed localStorage
- [ ] "All done" message works
- [ ] Label answers written

---

## Rules

1. **Never mutate state directly.** Always use the setter.
2. **useEffect needs dependency array** — otherwise infinite loop.
3. **React owns memory; localStorage is backup.**

---

## If you finish early

Add streak counter:

```
If user checks all habits today, increase a streak number by 1.
Save streak to localStorage too.
```

Ask AI to integrate.
