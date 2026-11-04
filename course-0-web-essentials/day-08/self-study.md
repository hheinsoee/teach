# Day 8 — Self-Study: React + Fetch

**Do this at home the night before class.** Target time: 60-90 minutes.

**After this self-study**: write **3 questions** to ask in class. Those questions = your "ticket to class".


**Goal**: Add a motivational quote from the internet to your React Habit Tracker.

---

## Step 1 — See fetch in Console

Open live URL. F12 → Console. Type:

```javascript
fetch('https://api.quotable.io/random')
    .then(r => r.json())
    .then(data => console.log(data))
```

Wait 1 sec. See a quote object.

---

## Step 2 — Prompt AI

Paste:

```
In my React Habit Tracker, add a QuoteBox component:

- On mount (useEffect with []), fetch https://api.quotable.io/random
- Store quote in useState
- Show quote text and author
- Show "Loading..." while fetching
- Fallback "Welcome back!" if fetch fails

Place <QuoteBox /> at top of my App component.

Give me updated app.jsx. Explain the fetch section and why [] matters.
```

---

## Step 3 — Save, push, test

Replace `app.jsx`. Push.

Reload URL. Quote appears after short loading.

Reload again. Different quote.

---

## Step 4 — Understand the pattern

Open `app.jsx`. Find:
- `const [quote, setQuote] = useState(null)` — state for quote
- `useEffect(() => { fetch(...) }, [])` — fetch once on mount
- `if (!quote) return <p>Loading...</p>` — loading state
- `return <div>...</div>` — content

Ask AI to explain `useEffect`'s `[]` dependency.

---

## Step 5 — Break and test error

Change URL to `https://api.quotable.io/randooooom`. Push.

Reload. **Fallback should show** "Welcome back!".

Restore URL. Push.

---

## Step 6 — Label (no AI!)

Write:
1. What is **fetch**?
2. What is an **API**?
3. What is **JSON**?
4. What does **useEffect** do?
5. Why empty `[]` dependency array?

---

## Done when

- [ ] Fetched quote in Console
- [ ] QuoteBox appears on reload
- [ ] Different quote each reload
- [ ] Error fallback works
- [ ] Label answers written

---

## Rules

1. **fetch is async** — results don't come instantly
2. **useEffect with `[]`** = only on mount
3. **Check Console** if anything fails

---

## If you finish early

Add a "Next Quote" button:

```
Add a button below the quote. When clicked, fetch a new quote.
Hint: put fetch in a function, call it in useEffect AND in onClick.
```

Ask AI to integrate.
