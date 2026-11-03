# Day 6 — In-Class Exercise

**Goal**: Build a News App that fetches real news from an API. See data from the internet appear on your page.

---

## Step 1 — See the API in action

Open this URL in a new browser tab:

**`https://api.heinsoe.com/news.json`**

You'll see raw text that looks structured — this is **JSON**. It's a list of news articles.

**Look at the data**:
- Each article has a `title`, `image`, `date`, `body`, `category`
- The whole thing is wrapped in `[` and `]` — that's a JavaScript **array**

Don't worry if JSON looks ugly. Browsers display it as text; apps parse it into useful data.

---

## Step 2 — Create a new project folder

On your desktop, create a new folder: **`news-app`** (separate from `habit-tracker`).

---

## Step 3 — Prompt AI for the News App

Go to ChatGPT or Claude. Paste:

```
I want to build a simple News App. It should:

- Fetch news from this URL: https://api.heinsoe.com/news.json
- Display each article's title, image, and date
- Show them in a list, newest first
- Clean, modern design

Give me a complete HTML + CSS + JavaScript file.
Explain the fetch part line by line.

The API returns a JSON array like:
[
  {
    "id": 1,
    "title": "Article title",
    "image": "https://...",
    "body": "Full article text",
    "date": "2026-11-01",
    "category": "tech"
  }
]
```

---

## Step 4 — Save the file

AI gives you code. Save it as `news-app/index.html`.

If AI gave 3 separate files (`index.html`, `styles.css`, `script.js`), save all three.

---

## Step 5 — Open in Chrome

Double-click `index.html`. Chrome opens.

**Articles should appear.** Images, titles, dates — all from Hein's server.

**If nothing appears**:
- Open DevTools (F12) → Console tab
- Read the error (usually red)
- Paste error to AI with: "I got this error — what does it mean?"

---

## Step 6 — Read the fetch code

Open `index.html` (or `script.js`). Find the `fetch(` line.

Try to answer:
- Which line asks the server for data?
- Which line turns the response into JavaScript?
- Which line loops through articles and shows each one?

**Ask AI to explain any line you don't understand**:

```
Explain this line in simple words: [paste line]
```

---

## Step 7 — Customize it

Ask AI for ONE of these improvements:

- **A**: Show the date in human-readable format ("November 3, 2026" instead of "2026-11-03")
- **B**: Add a category badge next to each title
- **C**: Make images clickable to open the full-size image
- **D**: Add a "Loading..." message that shows while data is fetching

Apply the change. Test.

---

## Step 8 — Label (no AI!)

Write:

1. What is an **API**?
2. What is **JSON**?
3. What does `fetch()` do?
4. What is a **server**?
5. What's the big difference between your News App and your Habit Tracker?

---

## Done when

- [ ] You have `news-app/index.html` on your desktop
- [ ] Opening it shows news articles with titles, images, dates
- [ ] You added one improvement (A, B, C, or D)
- [ ] You can point at the `fetch` line and say what it does
- [ ] Label answers written

---

## If you finish early

- Add a **search bar**: filter articles by title text
- Add **category filter**: dropdown that shows only articles in one category
- Try the API URL in a tool called **"REST client"** or **Postman** (optional, advanced)

---

## Rules

1. **Don't modify the API**. The API is Hein's — you only consume it.
2. **Check the Network tab** (DevTools) if data doesn't load. You'll see the request status.
3. **If the API is down** (rare), ask the teacher for a backup `news.json` file.
