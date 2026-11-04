# Day 8 — React + Fetch (useEffect)

**Phase**: Learning (Day 8 of 8) — Last learning day
**Project**: Habit Tracker — add motivational quote via fetch
**Modules touched**: G (HTTP), A, H, F
**Duration**: 90 min + 3 hr HW

---

## Learning outcomes

- **Read**: a `fetch()` call inside `useEffect`
- **Understand**: fetch gets data from internet; useEffect runs it on mount
- **Direct**: AI to add quote fetch to React Habit Tracker
- **Verify**: new quote appears on each reload

---

## 90-min plan

| Block | Min | Activity |
|---|---|---|
| HW review | 10 | Habit Tracker final showcase |
| Concept: fetch + API + async | 15 | Browser asks server for data |
| Instructor demo | 15 | Add quote fetch via useEffect |
| Student build | 40 | Each student adds fetch to React app |
| Label + commit | 10 | fetch, useEffect, async, API |

---

## Concept (15 min)

### Where data comes from

So far:
- HTML — static content
- JS variables — in memory
- useState — React state
- localStorage — persistent in browser

Now:
- **From a server, over the internet** — via `fetch`

### Analogy

```
Your browser (customer)              Server (kitchen)
   fetch('url') →               →   receives request
                     ← responds with JSON ←
   displays
```

Browser က **ဖောက်သည်**, server က **ဆိုင်**, JSON က **menu**。

### fetch in React (with useEffect)

```jsx
function QuoteBox() {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        fetch('https://api.quotable.io/random')
            .then(r => r.json())
            .then(data => setQuote(data));
    }, []);  // [] = run once on mount

    if (!quote) return <p>Loading...</p>;

    return (
        <div>
            <p>"{quote.content}"</p>
            <p>— {quote.author}</p>
        </div>
    );
}
```

Parts:
- `useEffect(() => {...}, [])` — run once when component mounts
- `fetch(url)` — ask server
- `.then()` chain — process response
- `setQuote(data)` — update state, triggers re-render
- `if (!quote) return <Loading />` — loading state

### Why `[]` empty array?

- `[]` = "run once, on mount"
- `[done]` = "run whenever done changes" (Day 7 pattern)
- No array = "run after every render" (usually bad)

---

## Demo (15 min)

Prompt AI:

```
In my React Habit Tracker, add a motivational quote at the top:

- Create a <QuoteBox> component
- On mount, fetch from https://api.quotable.io/random
- Show quote text and author
- Show "Loading..." while fetching
- If fetch fails, show "Welcome back!" as fallback

Use useState + useEffect patterns. Explain the fetch section.
```

Read AI's code:
- `useState(null)` initial
- `useEffect(() => fetch(...), [])` runs on mount
- `.then()` chain
- Conditional rendering: loading / content / error

Save, push. Test:
- Reload → "Loading..." briefly → quote appears
- Reload again → different quote

---

## Student build (40 min)

Each student:
1. Prompt AI (adapted)
2. Add `QuoteBox` component to `app.jsx`
3. Mount it at top of `App`
4. Push
5. Test — quote changes on reload

Then try:
- Fetch 5 quotes, show random one
- Add "Next quote" button that fetches new one

**Instructor circulates**:
- CORS error → quotable.io is safe; check URL typo
- `.then` chain confusion → OK to show async/await alternative
- `useEffect` infinite loop → missing `[]` dependency
- `setState` after unmount warning → ignore for Course 0

---

## Label (10 min)

Write:
1. What is **fetch**?
2. What is an **API**?
3. What is **JSON**?
4. What does **useEffect** do?
5. Why `[]` empty dependency array?

**Pocket answers**:
- `fetch` = JS way to ask a server for data
- API = URL + rules for talking to a server
- JSON = text format for structured data
- `useEffect` = run code after render (for side effects like fetch)
- `[]` = "only on mount", prevents infinite re-fetch

---

## Common failures

| Failure | Fix |
|---|---|
| CORS error | Rare for quotable.io; check URL |
| Quote doesn't appear | Check Console for errors |
| Infinite re-fetch | Missing `[]` or wrong dependency |
| `data.content` undefined | Check API response shape in Network tab |

---

## NOT

- POST/PUT/DELETE (Course 1 — just GET)
- Authentication (Course 1+)
- Custom hooks for fetch (Course 1+)
- React Query / SWR (Course 2+)

Keep tight: fetch URL → setState → React renders.

---

## Transition to Capstone 2

End of Day 8 = Habit Tracker DONE with:
- React components
- useState (interactive)
- useEffect + fetch (external data)
- localStorage (persistence)
- Live URL

Day 9-12 = **News App capstone** using all these React skills, with Hein's API.
