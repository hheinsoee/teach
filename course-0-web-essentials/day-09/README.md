# Day 9 — Capstone 2 Begins: News App (React)

**Phase**: ⭐ **CAPSTONE 2** (Day 1 of 4)
**Project**: News App (React, new repo from scratch)
**Modules touched**: G, H, F, A
**Duration**: 90 min + 3 hr HW

---

## Learning outcomes

- **Read**: a complete React fetch + render flow
- **Understand**: capstone expectations
- **Direct**: AI to build React News App skeleton
- **Verify**: articles appear from API

---

## 90-min plan

| Block | Min | Activity |
|---|---|---|
| HW review | 10 | Habit Tracker + quote feature showcase |
| Concept: What's a capstone? | 10 | Why News App |
| Setup: news-app repo | 10 | Clone News App starter (React-ready) |
| Instructor demo | 20 | Build News App via AI |
| Student build | 30 | Each student builds skeleton |
| Label + commit | 10 | Capstone, components, JSX for data |

---

## Concept (10 min)

### What is Capstone 2?

> *"Habit Tracker က လေ့ကျင့်ခန်း။ News App က ကိုယ့်လက်ရာ — employer, friend, family ကို ပြသနိုင်မယ့် proof."*

**Capstone 2 requirements by Day 12**:
1. News App is live
2. Fetches from Hein's API
3. Built with React (components, useState, useEffect)
4. 3+ real users
5. Student can explain the code

### API they'll use

Hein's API: `https://api.heinsoe.com/news.json` (or wherever Hein hosts it).

JSON array of 10-20 articles. Each has: `id`, `title`, `image`, `body`, `date`, `category`.

See [`instructor/setup-guide.md`](../instructor/setup-guide.md).

---

## Setup (10 min)

Each student:
1. On GitHub, **Use template** → create new repo `news-app`
2. Clone via GitHub Desktop
3. Enable Pages (Settings → Pages → main / root)
4. Open starter: `index.html` (React CDN pre-included), `styles.css`, `app.jsx`

**Pre-make `news-app-starter` repo** with React CDN. See [`instructor/setup-guide.md`](../instructor/setup-guide.md).

---

## Instructor demo (20 min)

Open the API URL in browser. Show JSON.

> *"ဒါ server က ပြန်ပေးတဲ့ data။ Course 0 မှာ React နဲ့ ဒီ data ကို ပြမယ်။"*

Prompt AI:

```
I'm building a React News App.

The API is: https://api.heinsoe.com/news.json

It returns JSON array of articles:
- id, title, image, body, date, category

Build a React app (via CDN, no npm):
- App component
- ArticleCard component (receives article as prop)
- Fetch articles on mount with useEffect
- Store in useState
- Loading state while fetching
- Error state if fetch fails
- Each article displayed as a card: image, title, date

Give me complete index.html + app.jsx. Explain each piece.
```

Read AI's output:
- `useState(null)` for articles
- `useEffect(() => fetch(...), [])`
- `.map(a => <ArticleCard article={a} />)`
- Conditional rendering (loading / error / content)

Save, push. Wait 30 sec. Live URL.

**Articles appear.**

---

## Student build (30 min)

Each student:
1. Prompt AI (demo prompt)
2. Save HTML + JSX to `news-app/`
3. Push
4. Open URL — see articles

Common issues:
- CORS error → check API URL
- Fetch returns empty → is API up?
- Components don't render → React mount `<div id="root">` missing
- Babel error → JSX typo in Console

---

## Label (10 min)

Write:
1. What is a **capstone**?
2. Why fetch from server vs localStorage?
3. What is a **component prop**?
4. What does `articles.map(...)` do in JSX?
5. Where does loading state live?

---

## Common failures

| Failure | Fix |
|---|---|
| API down | Fall back to local `news.json` file |
| Articles don't appear | Check Console + Network tab |
| Images don't load | Use actual URLs from API |
| Infinite re-fetch | `useEffect` missing `[]` |

---

## NOT

- Pagination (just show all today)
- Search (Day 10)
- React Router (Course 1+)

Keep tight: fetch → map → render cards.
