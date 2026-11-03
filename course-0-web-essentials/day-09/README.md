# Day 9 — Capstone 2 Begins: News App Setup

**Phase**: ⭐ **CAPSTONE 2** (Day 1 of 4)
**Project**: News App (new, from scratch)
**Modules touched**: G (HTTP), H, F (AI), A (reading data flow)
**Duration**: 90 min + 3 hr HW

> **This day marks the shift**: students apply ALL learned skills to a NEW project. Habit Tracker is done. News App is the capstone.

---

## Learning outcomes

- **Read**: a complete fetch + display flow
- **Understand**: what the capstone requires end-to-end
- **Direct**: AI to generate a working News App
- **Verify**: articles appear on page

---

## 90-min plan

| Block | Min | Activity |
|---|---|---|
| HW review | 10 | Habit Tracker final showcase, quote feature |
| Concept: What's a capstone? | 10 | Why News App, what's expected by Day 12 |
| Setup: new repo | 10 | Create `news-app` repo from starter |
| Instructor demo | 20 | Build News App from scratch via AI |
| Student build | 30 | Each student builds skeleton |
| Label + commit | 10 | Capstone, JSON parsing |

---

## Concept (10 min)

### What is Capstone 2?

> *"Habit Tracker က ကိုယ့်လေ့ကျင့်ခန်း။ News App က **ကိုယ့်လက်ရာ**။ Course ပြီးရင် employer, friend, family ပြသနိုင်မယ့် proof."*

**Capstone 2 requirements by Day 12**:
1. News App is live on URL
2. Fetches real articles from API
3. Shows at least title, image, date
4. Has 3+ real users
5. Student can explain the code

### API they'll use

Hein's API: `https://api.heinsoe.com/news.json` (or wherever Hein hosts it).

Returns array of news articles. See [`instructor/api-setup.md`](../instructor/api-setup.md).

---

## Setup (10 min)

Each student:
1. On GitHub, **Use template** → create new repo `news-app`
2. Clone via GitHub Desktop
3. Enable Pages (Settings → Pages → main / root)
4. Open starter: `index.html`, `styles.css`, `script.js`

**Pre-make a starter repo** for News App — similar to Day 1's Habit Tracker starter. See [`instructor/starter-repo-setup.md`](../instructor/starter-repo-setup.md).

---

## Instructor demo (20 min)

Open the API URL in browser. Show the JSON:

```json
[
  { "id": 1, "title": "...", "image": "...", "body": "...", "date": "...", "category": "..." },
  ...
]
```

> *"ဒါ server က ပြန်ပေးတဲ့ data။ Browser မှာ ဖတ်ရခက်ပေမဲ့ structured ဖြစ်။"*

Prompt AI (in front of class):

```
I'm building a News App. The API is:
https://api.heinsoe.com/news.json

It returns a JSON array of articles. Each has:
- id, title, image, body, date, category

Build me a complete News App:
- Fetch articles on page load
- Display each in a card with: image, title, date
- Clean modern design
- Mobile-friendly
- Loading state while fetching
- Error state if fetch fails

Give me HTML, CSS, and JavaScript. Explain the fetch section.
```

Read AI's complete solution line by line:
- HTML: container for articles
- CSS: card layout
- JS: fetch → loop → innerHTML

Save all 3 files. Push.

Wait 30 sec. Live URL. **Articles appear.**

---

## Student build (30 min)

Each student:
1. Prompt AI (same demo prompt)
2. Save HTML, CSS, JS to their `news-app/`
3. Push
4. Open URL — see articles

Common issues (instructor circulates):
- CORS error → check API URL
- Fetch returns empty → is API up?
- Articles don't display → check JS loop vs HTML container
- Images don't load → use image URL from API, not placeholder

---

## Label (10 min)

Write:
1. What is a **capstone**?
2. Why fetch from a server vs localStorage?
3. What makes a "card" layout?
4. What is loading state? Why have it?
5. What's the hardest part of your capstone so far?

---

## Common failures

| Failure | Fix |
|---|---|
| API down | Fall back to local `news.json` file |
| CORS error | API host must set `Access-Control-Allow-Origin: *` |
| Articles appear once but stuck | `fetch()` only runs once per load; add refresh button if needed |

---

## NOT

- Pagination (just show all articles today)
- Search (Day 10)
- Backend concerns

Keep tight: fetch → display cards. Loading state. Error state. That's today.
