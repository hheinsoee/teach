# Day 6 — DOM concept + React intro

**Goal**: See why vanilla DOM is painful. Meet React. Convert your Habit Tracker to React.

---

## Part A — See vanilla DOM (don't write it)

### Step 1 — Open DevTools Console

On your live URL, F12 → Console. Type:

```javascript
const h1 = document.querySelector('h1')
h1.textContent = 'Changed from Console!'
h1.style.color = 'red'
```

**Your heading changes.** JS talks to HTML directly. **That's vanilla DOM.**

### Step 2 — See the painful version

Teacher will show on screen — vanilla code to render 4 habits = ~8 lines per habit.

**Don't copy. Just look at how verbose it is.** React makes this easy.

---

## Part B — Meet React

### Step 3 — Read the React version

Teacher shows:

```jsx
function HabitList({ habits }) {
    return (
        <ul>
            {habits.map(h => (
                <li>
                    <input type="checkbox" />
                    <span>{h.name}</span>
                </li>
            ))}
        </ul>
    );
}
```

**UI structure is VISIBLE in the code.** `<ul>`, `<li>` — you see what renders.

---

## Part C — Convert your Habit Tracker to React

### Step 4 — Prompt AI

Paste:

```
Rewrite my Habit Tracker as a React app using React 18 via CDN
with Babel standalone (no npm, no build step).

Habits: [Pray, Study, Exercise, Water]

Requirements:
- JSX syntax
- Single App component rendering a HabitList
- HabitList renders LI for each habit
- Checkboxes next to each (no state yet — tomorrow)
- Mount to <div id="root"></div>
- Keep my existing styles.css

Give me:
- Updated index.html (with CDN scripts)
- Complete app.jsx

Explain each piece.
```

### Step 5 — Replace files

- Replace `index.html` with AI's version (should have React CDN + babel + `<div id="root">` + `<script type="text/babel" src="app.jsx">`)
- Create `app.jsx` with AI's JSX code
- **Delete `script.js`** (no longer used)
- Keep `styles.css`

### Step 6 — Push + test

GitHub Desktop → commit `Day 6 — switch to React` → push.

Wait 30 sec. Reload live URL.

**Habits still appear** — but now rendered by React.

### Step 7 — First load might be slow

Babel compiles JSX in your browser (dev mode). First page load = 2-3 seconds. Normal.

Course 1 teaches "Vite" which makes this instant.

### Step 8 — Read your code

Open `app.jsx`. Find:
- Which line is a component?
- Which line is JSX?
- Which line loops over habits?
- Where does the UI "attach" to HTML?

Ask AI to explain any confusing line.

---

## Step 9 — Label (no AI!)

Write:

1. What is **React**?
2. What is a **component**?
3. What is **JSX**?
4. Why does React exist?
5. 3-line difference between vanilla DOM and React?

---

## Done when

- [ ] You saw vanilla DOM code and understand it's verbose
- [ ] Your Habit Tracker now runs on React
- [ ] Live URL shows habits via React
- [ ] You can point at JSX and say "that's JSX"
- [ ] Label answers written

---

## Rules

1. **Use React from now on.** Don't go back to `document.getElementById`.
2. **JSX uses `className`** not `class`.
3. **If Console shows red Babel error**, there's a JSX typo — paste error to AI.

---

## If you finish early

Try adding a second component:

```jsx
function Header({ title }) {
    return <h1>{title}</h1>;
}

// Then use it:
<Header title="My Daily Habits" />
```

Ask AI to integrate into your App.
