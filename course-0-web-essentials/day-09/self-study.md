# Day 9 — Capstone 2 Begins

**Do this at home the night before class.** Target time: 60-90 minutes.

**After this self-study**: write **3 questions** to ask in class. Those questions = your "ticket to class".


**Goal**: Build a React News App that fetches from the internet. By end of class, articles render live.

---

## This is your capstone

By Day 12, this News App must:
- Be live on the internet
- Built with React (components, useState, useEffect)
- Fetch from Hein's API
- 3+ real users
- You can explain every piece

---

## Step 1 — Create news-app repo

On GitHub:
1. Teacher shares `news-app-starter` URL
2. **Use template** → **Create repo** `news-app`
3. Public
4. Clone to laptop via GitHub Desktop

Enable Pages (Settings → Pages → main / root).

The starter includes React CDN + Babel + `<div id="root">`.

---

## Step 2 — Explore API

Open Chrome:

**`https://api.heinsoe.com/news.json`**

JSON array. Each article: `id`, `title`, `image`, `body`, `date`, `category`.

---

## Step 3 — Prompt AI

Paste:

```
I'm building a React News App via CDN (React 18 + Babel, no npm).

API: https://api.heinsoe.com/news.json
Returns JSON array of articles with id, title, image, body, date, category.

Build:
- App component
- ArticleCard component (receives article as prop)
- Fetch articles on mount (useEffect with [])
- Store in useState
- "Loading..." while fetching
- Error message if fetch fails
- Each article as a card: image, title, date
- Clean modern style

Give me:
- Updated index.html (with React CDN + Babel + <div id="root">)
- Complete app.jsx

Explain the fetch section line by line.
```

---

## Step 4 — Save files

- `index.html` — with CDN scripts + root div
- `app.jsx` — React code
- Keep `styles.css` — or ask AI for updated styles

---

## Step 5 — Push + test

GitHub Desktop → commit `Capstone 2 Day 1 — News App skeleton` → push.

Wait 30 sec. Open live URL.

**Articles should appear.**

---

## Step 6 — Debug if needed

If no articles:
- F12 → Console — any errors?
- F12 → Network — see fetch succeeded?
- Babel syntax error → check Console

Fix. Push. Reload.

---

## Step 7 — Read your code

Open `app.jsx`. Find:
- Which line fetches?
- Which line parses JSON?
- Which line creates component instances in loop?
- Where is state declared?

Ask AI to explain anything unclear.

---

## Step 8 — Label (no AI!)

Write:
1. What is a **capstone**?
2. Why fetch from server vs localStorage?
3. What is a **prop**?
4. What does `articles.map(a => <ArticleCard />)` do?
5. Where does loading state live?

---

## Done when

- [ ] `news-app` repo on GitHub
- [ ] Live URL shows articles
- [ ] Built with React components
- [ ] Loading state briefly appears
- [ ] You explained fetch section
- [ ] Label answers written

---

## Rules

1. **Separate from Habit Tracker.** New project.
2. **Push every change.**
3. **React only.** No `document.getElementById`.
4. **If API is down**, teacher gives fallback `news.json`.

---

## If you finish early

- Format date nicely ("Nov 4, 2026" instead of "2026-11-04")
- Add category badge next to date
- Bigger images, better typography

Prompt AI for each. Push.
