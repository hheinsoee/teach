# Day 6 — News App: Fetch from API

**Project**: News App (new, Days 6-8)
**Marcus stages**: 7 (connecting to the world)
**Modules touched**: G (HTTP, request/response), F (AI for API work), A (async concepts reading-level)
**Duration**: 90 min class + 3 hr homework

---

## Learning outcomes

Students can:
- **Read**: a `fetch()` call and know what it does
- **Understand**: that data lives on a server, their code requests it, server responds with JSON
- **Direct**: AI to build a page that fetches and displays data
- **Verify**: data appears from the API

---

## 90-minute plan

| Block | Minutes | Activity |
|---|---|---|
| Homework review | 15 | Celebrate live Habit Trackers + user quotes |
| Concept: "Where does Facebook get its posts?" | 15 | Server, API, JSON — analogies first |
| Demo | 15 | Open API URL in browser, see JSON. AI generates fetch code. |
| Student build | 35 | Build News App skeleton, fetch, display titles |
| Label | 10 | API? Fetch? JSON? Server? |

---

## Pre-class setup (instructor)

**CRITICAL — the News API must be live before class**:

- Hein's API URL: `https://api.heinsoe.com/news.json` (or wherever Hein hosts it)
- API returns JSON array of 10-20 news articles
- Each article has: `id`, `title`, `image`, `body`, `date`, `category`
- API should be CORS-enabled so browsers can fetch it
- Backup: a local `news.json` file students can use if API breaks

See [`instructor/api-setup.md`](../instructor/api-setup.md) for API spec.

---

## Concept phase (15 min)

Ask the class:
> *"Facebook က feed ထဲမှာ post ၂၀ ပြတယ်။ ဒီ post တွေ ဘယ်ကလာလဲ?"*

Discussion flows:
- From Facebook's server, not from your laptop
- Your browser **requests**, server **responds**

Draw:

```
Your browser                              Server
   fetch("news.json") →               →   receives request
                     ← responds with JSON ←
   displays on page
```

**Key words**:
- **API** — Application Programming Interface, how two programs talk
- **HTTP** — the language of the web (request / response)
- **JSON** — a format for data (looks like text, structured)
- **Server** — a computer always on, waiting to answer requests

Analogy:
- API က **restaurant menu**
- Browser က **customer**
- Server က **kitchen**
- JSON က **order ticket / plate**

---

## Instructor demo (15 min)

Open the API URL in a browser: `https://api.heinsoe.com/news.json`

Browser shows raw JSON. Point at it:

> *"ဒါ server က ပြန်ပေးတဲ့ data။ ဒီ `[`, `{`, `"title":` တွေက **JSON** format။ ဖတ်ရတာ ခက်ပေမဲ့ structured ဖြစ်။"*

Open ChatGPT. Prompt:

```
I want to build a simple News App. It should:

- Fetch news from this URL: https://api.heinsoe.com/news.json
- Display each article's title, image, and date
- Show them in a list, newest first

Give me a complete HTML + CSS + JS file. Explain the fetch part.

The API returns a JSON array like:
[
  {
    "id": 1,
    "title": "...",
    "image": "https://...",
    "body": "...",
    "date": "2026-11-01",
    "category": "tech"
  }
]
```

AI gives complete code. **Instructor reads the fetch part slowly**:

> *"ဒီ `fetch('https://api.heinsoe.com/news.json')` က — server ကို request ပို့။*
>
> *ဒီ `.then(response => response.json())` က — server ပြန်ပေးတဲ့ response ကို JSON အဖြစ် ဖတ်။*
>
> *ဒီ `.then(articles => { ... })` က — articles တွေ လက်ထဲ ရောက်ပြီ, display မှာ ထည့်။*
>
> *ဒီ `articles.forEach(a => { ... })` က — article တစ်ခုချင်းစီ, HTML အဖြစ် ပြင်ဆင်။"*

Save as `news-app/index.html`. Open. **Data appears live.**

> *"ကြည့်။ ကိုယ့် page က server က data ဆွဲထုတ်။ ဒါ **real app** လို အလုပ်လုပ်။"*

---

## Student build (35 min)

Each student:
1. Create new folder `news-app/` on desktop
2. Prompt AI (use demo prompt)
3. Save as `news-app/index.html` (single file is fine, or split HTML/CSS/JS)
4. Open — data loads

**Then iterate**:
- Make image bigger
- Date in human-readable format
- Category shown as a badge

**Instructor circulates**. Common issues:
- CORS error: API not configured for browser access → confirm `api-setup.md` CORS settings
- 404 / wrong URL → check for typos
- "fetch is undefined" → old browser, highly unlikely
- Student spends 20 min on styling → remind: fetch is today's lesson

---

## Label phase (10 min)

Write (no AI):

1. What is an **API**?
2. What is **JSON**?
3. What does `fetch()` do?
4. What is a **server**?
5. What's the difference between the Habit Tracker and the News App?

### Pocket answers

- **API** — a way for programs to talk to each other (e.g., your page asks Hein's API for news)
- **JSON** — a text format for data (lists, objects, numbers)
- **`fetch()`** — JavaScript's way to ask a server for data
- **Server** — a computer online that answers requests
- **Difference** — Habit Tracker stores data locally; News App fetches data from somewhere else

---

## Common failures

| Failure | Fix |
|---|---|
| CORS error | API host must set `Access-Control-Allow-Origin: *` header |
| 404 Not Found | URL typo; check against api-setup.md |
| Nothing displays | Open DevTools → Network tab → check if fetch succeeded |
| JSON parse error | API returned HTML (likely an error page); check URL |
| Images don't load | `<img src>` wrong; AI used placeholder; use real image URLs from API |

---

## What this day is NOT

- Not writing a backend
- Not authentication (public API, open to all)
- Not database
- Not async/await deep-dive (reading `fetch().then()` is enough)
- Not WebSockets, SSE, long polling

Keep tight: URL → fetch → JSON → display. One-way flow, read-only.
