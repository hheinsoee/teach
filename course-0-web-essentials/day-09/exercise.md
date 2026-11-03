# Day 9 — Capstone 2 Begins

**Goal**: Build a News App that fetches from the internet. By end of class, articles display live.

---

## This is your capstone

By Day 12, this News App must:
- Be live on the internet
- Fetch from Hein's API
- Have 3+ real users
- You can explain every piece of the code

Today = Day 1 of 4. Just get the basic version working.

---

## Step 1 — Create news-app repo

On GitHub:
1. Teacher will share template URL
2. **Use template** → **Create repo**
3. Name: `news-app`
4. Public
5. Click Create

Clone to laptop via GitHub Desktop.

Enable Pages (Settings → Pages → main / root).

---

## Step 2 — Explore the API

Open the API URL in Chrome:

**`https://api.heinsoe.com/news.json`**

You see JSON — an array of articles. Each has:
- `id`
- `title`
- `image`
- `body`
- `date`
- `category`

That's your data source.

---

## Step 3 — Prompt AI

Paste:

```
I'm building a News App. The API returns a JSON array at:
https://api.heinsoe.com/news.json

Each article has: id, title, image, body, date, category.

Build me a complete News App:
- Fetch articles on page load
- Show each in a card with image, title, date
- Clean modern design (cards)
- Mobile-friendly
- "Loading..." before fetch completes
- Error message if fetch fails

Give me complete HTML + CSS + JS. Explain the fetch section line by line.
```

---

## Step 4 — Save files

Replace:
- `index.html`
- `styles.css`
- `script.js`

Save all three.

---

## Step 5 — Push

GitHub Desktop → commit `Capstone 2 day 1 — basic news app` → push.

Wait 30 sec. Open your live URL (`USERNAME.github.io/news-app/`).

**Articles should appear.**

---

## Step 6 — Debug if needed

If no articles:
- F12 → Console — any errors?
- F12 → Network tab → see the fetch request. Status 200 = good.
- If 404 → URL typo
- If CORS error → API issue (ask teacher)

Fix. Push. Reload.

---

## Step 7 — Read the fetch code

Open `script.js`. Find the fetch section.

Try to point out:
- Which line asks the API?
- Which line parses the JSON?
- Which line loops over articles?
- Which line builds HTML for each card?

Ask AI to explain lines you don't get.

---

## Step 8 — Label (no AI!)

Write:
1. What is a **capstone**?
2. Why fetch from server vs localStorage?
3. What is a "card" layout?
4. What is **loading state**? Why have it?
5. Hardest part today?

---

## Done when

- [ ] `news-app` repo exists on GitHub
- [ ] Live URL loads articles
- [ ] Each article has image, title, date
- [ ] Loading state briefly appears
- [ ] You can point at fetch section and explain it
- [ ] Label answers written

---

## Rules

1. **Separate from Habit Tracker.** This is a new project. Keep Habit Tracker alive too.
2. **Push every change.** Live URL updates after push only.
3. **If API breaks mid-class**, teacher will give fallback `news.json` file.

---

## If you finish early

- Make the cards look nicer (bigger images, better spacing)
- Show category badge on each article
- Format dates as "November 4, 2026" instead of "2026-11-04"

Prompt AI for each. Push after each.
