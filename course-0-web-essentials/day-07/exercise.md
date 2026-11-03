# Day 7 — In-Class Exercise

**Goal**: Make your Habit Tracker remember your checks across reloads.

---

## Step 1 — See the problem

Open your live URL. Check boxes. Reload page.

**Checks disappear.** That's the problem.

---

## Step 2 — Try localStorage in Console

```javascript
localStorage.setItem("test", "Hello from me!")
```

Reload page. Open Console again:

```javascript
localStorage.getItem("test")
```

**"Hello from me!"** survives reload. That's localStorage.

To clear: `localStorage.removeItem("test")`

---

## Step 3 — Prompt AI

Paste:

```
In my Habit Tracker:
- When a checkbox changes, save the done state to localStorage
- When the page loads, read localStorage and restore all checkboxes
- Also save/restore a "streak" counter (increases by 1 when all habits done)
- If localStorage is empty on first load, default to all unchecked

Give me updated JavaScript. Keep existing features working.
```

---

## Step 4 — Save, push, test persistence

Replace your `script.js` with AI's updated version. Push.

Wait 30 sec. Reload live URL. Check all boxes. **Reload again.** Still checked.

Close the tab. Reopen URL. Still checked.

---

## Step 5 — View your data in DevTools

F12 → **Application** tab → **Local Storage** → your URL.

You see your saved data as text (JSON).

---

## Step 6 — Clear and retry

Click Clear All (trash icon in Application tab).

Reload URL. All unchecked again. **That's "no data in localStorage"** — defaults kick in.

---

## Step 7 — Streak test

Check all habits. Streak = 1.

Clear localStorage. Reload. Streak back to 0.

---

## Step 8 — Label (no AI!)

Write:
1. What is **localStorage**?
2. Memory vs localStorage — difference?
3. Why `JSON.stringify`?
4. What is **state**?
5. Where does localStorage physically live?

---

## Done when

- [ ] Checks persist across reload
- [ ] Checks persist across closing tab
- [ ] Streak counter works
- [ ] You viewed localStorage in DevTools
- [ ] Label answers written

---

## Rules

1. **Reload after each change** to test
2. **DevTools → Application → Local Storage** is where to inspect
3. **If weird**, check localStorage first before re-prompting

---

## If you finish early

Add "Clear my data" button:

```javascript
clearBtn.addEventListener("click", () => {
    localStorage.clear()
    location.reload()
})
```

Ask AI for complete integration.
