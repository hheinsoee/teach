# Day 10 — Capstone 2: Features (React)

> **v5 flipped format**: This day uses 5 files: `prework.md` (Viber 2 days before) + `self-study.md` (night before) + `README.md` (this file) + `in-class.md` (student in-class guide) + `homework.md` (post-class).
>
> **Class structure (90 min)**: Q&A 25min + Discussion 15min + Live Build 25min + Label 10min + Wrap 15min. Teacher ~30% active, student ~70% active.
>
> **The 90-min plan table below is legacy v4 traditional**. See `../instructor/teaching-guide.md` for flipped guidance.


**Phase**: ⭐ Capstone 2 (Day 2 of 4)
**Project**: News App
**Modules touched**: H, F, A (state, props, conditional rendering)
**Duration**: 90 min + 3 hr HW

---

## Learning outcomes

- **Read**: React feature code AI generates
- **Understand**: features = more state + more components
- **Direct**: AI to add React features
- **Verify**: each feature works independently and combined

---

## 90-min plan

| Block | Min | Activity |
|---|---|---|
| HW review | 10 | Students show designs |
| Concept: Features via state | 10 | Search = filter state; modal = visible state |
| Instructor demo | 15 | Add search via AI |
| Student build | 45 | Each adds 2-3 features |
| Label + commit | 10 | Filter, modal, conditional render |

---

## Concept (10 min)

Features we'll add:
1. **Search bar** — type → filter articles by title
2. **Category filter** — buttons → show one category
3. **Click to expand** — click article → modal with full body

**All of these = React state + conditional rendering**:

```jsx
// Search state
const [query, setQuery] = useState('');

// Filter articles by query
const filtered = articles.filter(a =>
    a.title.toLowerCase().includes(query.toLowerCase())
);

// Render filtered list
{filtered.map(a => <ArticleCard article={a} />)}
```

Nothing new conceptually. State + map + filter. We know these.

---

## Instructor demo (15 min)

Prompt AI:

```
Add a search bar to my React News App at the top.

- useState for search query
- Filter articles by title (case-insensitive)
- Hide non-matching articles
- Show all when search empty

Keep ArticleCard component. Give me updated app.jsx.
Explain the filter logic.
```

Read AI's output:
- New useState for query
- Input `onChange` updates query
- `.filter()` on articles
- `.map()` on filtered result

Save, push, test.

---

## Student build (45 min)

Each student picks:

### Required
- **Search bar** (title filter)

### Pick 1-2 more
- **Category filter** (buttons per category, filter)
- **Click to expand** (modal component — new state for selected article)
- **Dark mode toggle** (useState, apply className)
- **Bookmarks** (save favorites to localStorage)

For each:
- Prompt AI with specifics
- Read code BEFORE pasting
- Test after push

**Instructor circulates** — heads-down building time.

---

## Label (10 min)

Write:
1. What is a **feature**?
2. What's `.filter()` on an array?
3. What is **conditional rendering**?
4. What makes a **modal** different from a normal component?
5. Which feature was easiest? Hardest?

---

## Common failures

| Failure | Fix |
|---|---|
| Search doesn't filter | Filtering derived array but still rendering original |
| Modal doesn't close | Missing state update for "selected" |
| Category + search fight | Need combined filter logic |
| Student panics at AI code | Read line-by-line, ask AI to explain |

---

## Pacing warning

Day 10 is dense. If struggling:
- Cut to "search only"
- Deeper > wider
- Add more in homework

---

## NOT

- Backend
- Database
- Testing (Course 1+)
- SEO (Course 2+)
