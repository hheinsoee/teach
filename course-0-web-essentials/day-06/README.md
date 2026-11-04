# Day 6 — DOM (Vanilla concept) + React Intro

> **v5 flipped format**: This day uses 5 files: `prework.md` (Viber 2 days before) + `self-study.md` (night before) + `README.md` (this file) + `in-class.md` (student in-class guide) + `homework.md` (post-class).
>
> **Class structure (90 min)**: Q&A 25min + Discussion 15min + Live Build 25min + Label 10min + Wrap 15min. Teacher ~30% active, student ~70% active.
>
> **The 90-min plan table below is legacy v4 traditional**. See `../instructor/teaching-guide.md` for flipped guidance.


**Phase**: Learning (Day 6 of 8)
**Project**: Habit Tracker
**Modules touched**: A (programming), H (JS), F (AI), G (framework concept)
**Duration**: 90 min + 3 hr HW

> **Pivotal day**. Students see vanilla DOM (ugly, verbose) as **concept**, then meet React (clean, declarative) as **the tool going forward**. React from Day 6 on, including the Capstone.

---

## Learning outcomes

- **Read**: vanilla DOM manipulation code (know what it does)
- **Understand**: why DOM manipulation gets painful fast
- **Direct**: AI to generate React components with JSX
- **Verify**: React updates UI when state changes

---

## 90-min plan

| Block | Min | Activity |
|---|---|---|
| HW review | 10 | Students show loop outputs |
| Concept: What is DOM (vanilla) | 10 | JS talks to HTML directly — see one example |
| Concept: Why React exists | 10 | Vanilla pain → React promise |
| Instructor demo | 20 | AI generates React Habit Tracker |
| Student build | 30 | Switch Habit Tracker to React |
| Label + commit | 10 | Component, JSX, state |

---

## Concept 1 — DOM (Vanilla) in 10 min

### What DOM is

Browser က HTML ကို "tree" အဖြစ် မြင်။ JS က tree ကို walk, change လုပ်နိုင်။

### Show one vanilla example (don't teach to write)

```javascript
// Vanilla DOM — just see it, don't write it
const container = document.getElementById('habits');
habits.forEach(habit => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const span = document.createElement('span');
    span.textContent = habit.name;
    li.appendChild(checkbox);
    li.appendChild(span);
    container.appendChild(li);
});
```

Read together. Ask: "ဒါ ဘယ်နှစ်ကြောင်းနဲ့ habit တစ်ခု ပြတာလဲ?"

Answer: **၈ ကြောင်း** — habit တစ်ခုအတွက်။

> *"ဒါ **vanilla DOM** — JS က HTML ကို တိုက်ရိုက် ပြင်။ ရရှိသော်လည်း — code က 'UI ပုံစံ' ကို ပြော မပြ။ Line-by-line လိုက်မှ ဘာဖြစ်လဲ သိ။"*

**This is the pain.** Don't try to write it. Just see it.

---

## Concept 2 — Why React exists in 10 min

### The problem

Vanilla DOM က:
- Verbose (၈ ကြောင်း habit တစ်ခုအတွက်)
- Manual (`createElement`, `appendChild` ထပ်ခါခါ)
- Hidden structure (UI ပုံစံ ကုဒ်ထဲ မြင်မရ)
- Update ရင် ပိုရှုပ် (ဘယ် DOM node ပြင်မလဲ ရှာရ)

### The solution — React

```jsx
// React — Habit list
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

Read together. Ask: "ဒါ ဘယ်နှစ်ကြောင်းလဲ, habit တစ်ခုအတွက်?"

Answer: **၄ ကြောင်း** — plus **UI ပုံစံ ရှင်းရှင်းမြင်**။

### Key insights

- **JSX** = "HTML written inside JS" — UI structure visible
- **Component** = reusable function that returns JSX
- **React handles DOM** — ကိုယ်တို့က UI ပြော, React က DOM ပြင်
- **No `createElement`, no `appendChild`** — React လုပ်ပေး

> *"Day 6 ကနေစ — ကိုယ်တို့ **React** ပဲ သုံးမယ်။ Vanilla DOM က ဘာလဲ သိရုံ — Course 1 မှ သေချာ သင်မယ်။"*

---

## Instructor demo (20 min)

### Setup React in starter (no npm)

Show `index.html` updated with CDN scripts:

```html
<!-- Add to <head> -->
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<!-- In <body> -->
<div id="root"></div>

<!-- At end -->
<script type="text/babel" src="app.jsx"></script>
```

> *"No npm. No install. React က CDN ကနေ ဆွဲ, Babel က JSX ကို browser ထဲ translate။ Course 1 မှ Vite သုံးမယ်။ ဒီနေ့ — simple ထား။"*

### Prompt AI

```
Rewrite my Habit Tracker as a React app using React 18 via CDN with Babel standalone.

Habits list: Pray, Study, Exercise, Water.

Requirements:
- Use JSX, no build step
- Single App component that renders a HabitList
- HabitList renders LI for each habit
- Checkboxes for now (no state yet — that's tomorrow)
- Render into <div id="root"></div>
- Keep my existing styles.css

Give me:
- Updated index.html
- Complete app.jsx

Explain each piece in simple English.
```

Read AI's output:
- `ReactDOM.createRoot` — attach to page
- `function App()` — the main component
- `function HabitList({ habits })` — subcomponent
- `habits.map(...)` — same as Day 5 loop
- `{habits}` in `<HabitList habits={habits} />` — pass data

Save `app.jsx`, update `index.html`. Push.

Reload live URL. Habits appear via React.

> *"ဘာမှ visual မပြောင်း — ဒါပေမဲ့ code က **declarative** ဖြစ်သွားပြီ။ UI ပုံစံ မြင်ရ။"*

---

## Student build (30 min)

Each student:

1. Prompt AI (adapted)
2. Replace `script.js` with `app.jsx`
3. Update `index.html` to include React CDN + `app.jsx`
4. Remove old vanilla script tag
5. Push
6. Test on live URL

**Instructor circulates**:
- Babel slow on first load (OK, dev mode)
- JSX typo → Console shows Babel error → read, fix
- `className` instead of `class` (React quirk) → AI should get right; if not, flag
- Student tries to use old `document.querySelector` — stop them, "we use React now"

---

## Label (10 min)

Write (no AI):

1. What is **React**?
2. What is a **component**?
3. What is **JSX**?
4. Why does React exist? (vs vanilla DOM)
5. Difference between vanilla DOM code and React code?

**Pocket answers**:
- React = JS library for building UI with components
- Component = reusable function returning JSX (UI chunk)
- JSX = HTML-like syntax written inside JS
- Why: vanilla DOM is verbose; React is declarative + reusable
- Difference: vanilla says "how to build step-by-step"; React says "what UI should look like"

---

## Common failures

| Failure | Fix |
|---|---|
| Blank page on reload | Check Console; usually Babel syntax error |
| JSX won't render | `<script type="text/babel">` missing `type` attribute |
| `className` vs `class` confusion | React uses `className` (JS reserved word) |
| Student copies vanilla code into React | "We don't do `document.getElementById` anymore" |
| CDN scripts don't load | Check network; if blocked, download locally |

---

## NOT

- Vite / npm / build tools (Course 1+)
- React Router (Course 1+)
- Redux / Context deep dive (Course 2+)
- TypeScript (Course 2+)
- Vanilla DOM depth — that's concept only today

---

## Looking ahead

- Day 7: `useState` — state in React (replaces localStorage patterns we saw with vanilla)
- Day 8: `useEffect` + fetch
- Days 9-12: Capstone News App in React
