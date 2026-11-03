# Day 10 — Capstone 2: Features

**Phase**: ⭐ Capstone 2 (Day 2 of 4)
**Project**: News App
**Modules touched**: H, F, A (events, DOM, state)
**Duration**: 90 min + 3 hr HW

---

## Learning outcomes

- **Read**: feature code AI generates
- **Understand**: features build on existing patterns (events, DOM, state)
- **Direct**: AI to add specific features
- **Verify**: each feature works independently

---

## 90-min plan

| Block | Min | Activity |
|---|---|---|
| HW review | 10 | 2 students show design improvements |
| Concept: Features build on patterns | 10 | Search = filter array; click = event; etc. |
| Instructor demo | 15 | Add search feature via AI |
| Student build | 45 | Each student adds 2-3 features |
| Label + commit | 10 | Feature, filter, modal |

---

## Concept (10 min)

Features we'll add:
1. **Search bar** — type → filter articles by title
2. **Category filter** — buttons → show only one category
3. **Click to expand** — click article → show full body (modal)

Why these patterns matter:
- Search = **loop + if/else** (we know these)
- Category filter = **DOM + events** (we know)
- Modal = **DOM manipulation** (we know)

Nothing new conceptually. Just applied.

---

## Instructor demo (15 min)

Prompt AI:

```
Add a search bar to my News App at the top.

When I type:
- Filter articles whose title contains my search text (case-insensitive)
- Hide articles that don't match
- Show them again when I clear the search

Give me HTML + CSS + JS. Explain the filter logic.
```

Read AI's output:
- Input element in HTML
- Event listener for `input` event
- `.filter()` method on articles array
- Re-render based on filtered result

Save. Push. Test.

---

## Student build (45 min)

Each student picks 2-3 features:

### Required (all do)
- **Search bar** (title filter)

### Pick at least ONE more
- **Category filter** (buttons per category)
- **Click to expand** (modal with full article body)
- **Loading state polish** (spinner, nice animation)
- **Dark mode toggle**

### Advanced (optional)
- **Bookmark articles** (save to localStorage)
- **Share button** (copy URL to clipboard)
- **Pagination** (show 5 per page)

For each feature:
- Prompt AI with specific description
- Read generated code BEFORE pasting
- Test after push

**Instructor circulates heavily** — this is heads-down building time.

---

## Label (10 min)

Write:
1. What is a **feature**?
2. What's `.filter()` on an array?
3. What's a **modal**?
4. What goes in **state** vs **UI**?
5. Which feature was easiest? Hardest?

---

## Common failures

| Failure | Fix |
|---|---|
| Search doesn't filter | Articles array stored in local variable but re-render looks at DOM — need to re-render from array |
| Modal doesn't close | Missing click outside handler |
| Category filter breaks search | Features step on each other — need combined filter logic |
| Student gets AI's code and nothing works | Read before pasting. Did AI assume different HTML? |

---

## Pacing warning

Day 10 is dense. If students struggle:
- Cut features to "search only"
- Deeper = better than wider
- They can add more in homework

---

## NOT

- Backend integration (even if AI suggests it)
- Database (localStorage only)
- Testing frameworks (Course 1+)
- SEO / analytics (Course 2+)
