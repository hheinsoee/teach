# Day 7 — React State (useState) + localStorage

**Phase**: Learning (Day 7 of 8)
**Project**: Habit Tracker — practice complete after today
**Modules touched**: A, H, F
**Duration**: 90 min + 3 hr HW

---

## Learning outcomes

- **Read**: `useState` hook and understand what it tracks
- **Understand**: state = things that change, React re-renders when state changes
- **Direct**: AI to add state + localStorage to Habit Tracker
- **Verify**: checkboxes stay checked across reload

---

## 90-min plan

| Block | Min | Activity |
|---|---|---|
| HW review | 10 | Students show components added |
| Concept: What is state? | 15 | Why components need memory |
| Instructor demo | 15 | AI adds useState + localStorage |
| Student build | 40 | Habit Tracker with checkable + persistent state |
| Label + commit | 10 | useState, state, hook |

---

## Concept (15 min)

### What is "state"?

So far components render **static** data (habits array passed as props).

But: what if user clicks a checkbox? **Which habit is checked?**

That's **state** — data that changes over time, inside a component.

### useState — React's state hook

```jsx
import { useState } from 'react';  // (not needed with CDN — useState is global)

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Add 1</button>
        </div>
    );
}
```

Parts:
- `useState(0)` — create state starting at 0
- `[count, setCount]` — current value + function to update
- `setCount(count + 1)` — update state, React re-renders

**Key insight**: Don't mutate directly. `count = count + 1` ❌ Must use `setCount`.

### For Habit Tracker

Each habit needs "done" state:

```jsx
const [done, setDone] = useState([false, false, false, false])

// When checkbox clicked:
function toggle(i) {
    const newDone = [...done]
    newDone[i] = !newDone[i]
    setDone(newDone)
}
```

### localStorage with React

Save on state change (effect):

```jsx
// Save whenever `done` changes
useEffect(() => {
    localStorage.setItem('done', JSON.stringify(done))
}, [done])

// Load once on mount
const [done, setDone] = useState(() => {
    const saved = localStorage.getItem('done')
    return saved ? JSON.parse(saved) : [false, false, false, false]
})
```

(Introduce `useEffect` here briefly, Day 8 deep dive.)

---

## Demo (15 min)

Prompt AI:

```
In my React Habit Tracker:
- Add state for which habits are done (array of booleans)
- Clicking a checkbox toggles that habit's done state
- When habit is done, strike through the text
- Save done state to localStorage, restore on page load

Use useState (and useEffect for localStorage).

Keep my component structure (App, HabitList, Habit).

Explain state and useState in simple English.
```

Read AI's code:
- `useState` initial value
- The toggle function
- `onChange` handler on checkbox
- Conditional styling: `done[i] ? 'line-through' : 'none'`
- `useEffect` for save
- Initial state from localStorage

Save, push. Test:
- Click checkbox → strike through
- Reload → still checked
- Close tab, reopen → still checked

---

## Student build (40 min)

Each student:
1. Prompt AI (adapted)
2. Replace `app.jsx` with new version
3. Push
4. Test persistence
5. Open DevTools → Application → Local Storage → see saved data

**Instructor circulates**:
- State doesn't update → forgot to use `setDone`, mutating `done` directly
- `useState` not defined → with CDN, use `const { useState } = React`
- `useEffect` fires infinitely → missing dependency array `[done]`
- localStorage key conflict → use unique name

---

## Label (10 min)

Write:

1. What is **state** in React?
2. What does `useState` return?
3. Why can't you do `done[i] = true` directly?
4. What does `useEffect` do?
5. React vs localStorage — who owns the data?

**Pocket answers**:
- State = component data that changes, triggers re-render
- `useState` returns `[value, setValue]`
- Mutating directly doesn't trigger re-render; must use `setState`
- `useEffect` runs code after render — good for side effects (save to localStorage)
- React owns state in memory; localStorage is backup (survives reload)

---

## Common failures

| Failure | Fix |
|---|---|
| Checkbox doesn't update visually | Mutating `done` instead of calling `setDone` with new array |
| Infinite re-renders | `useEffect` missing dependency array |
| State lost on reload | `useState` initial not reading from localStorage |
| JSX arrow function confusion | `onChange={() => toggle(i)}` not `onChange={toggle(i)}` |

---

## NOT

- useReducer (Course 1)
- Context API (Course 1+)
- Custom hooks (Course 1+)
- State management libraries (Course 2+)

---

## End of Day 7 — Habit Tracker DONE

Students have:
- React-based Habit Tracker
- Multiple components
- useState for interactivity
- localStorage persistence
- Live URL

**Practice project COMPLETE.** From Day 8 we start fetch (quote API), then Days 9-12 News App capstone.
