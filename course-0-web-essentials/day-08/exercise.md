# Day 8 — In-Class Exercise

**Goal**: Add data from the internet to your Habit Tracker. Learn `fetch`.

---

## Step 1 — See a fetch work

Open live URL. F12 → Console. Type:

```javascript
fetch('https://api.quotable.io/random')
    .then(r => r.json())
    .then(data => console.log(data))
```

Wait 1 sec. See a quote object in Console.

Try again. Different quote.

---

## Step 2 — Understand the response

In Console, type again:

```javascript
fetch('https://api.quotable.io/random')
    .then(r => r.json())
    .then(data => {
        console.log("Quote:", data.content)
        console.log("Author:", data.author)
    })
```

**That's how you use fetched data.**

---

## Step 3 — Prompt AI

Paste:

```
In my Habit Tracker, add a motivational quote at the top:

- On page load, fetch a random quote from https://api.quotable.io/random
- Display it in a nice box above the habits
- Show quote text and author

If fetch fails, show "Welcome back!" as fallback.

Give me HTML, CSS, and JS updates. Explain the fetch part line by line.
```

---

## Step 4 — Apply changes

Follow AI's HTML changes (add quote container). Follow CSS (styled box). Follow JS (fetch on load).

Save. Push.

---

## Step 5 — Test

Reload URL. **Quote should appear within a second.**

Reload again. **Different quote.**

---

## Step 6 — Read your fetch code

Open `script.js`. Find the fetch section.

Try to answer:
- Which line asks the server?
- Which line waits for response?
- Which line uses the data?

Ask AI to explain any line unclear.

---

## Step 7 — Test error handling

Change URL to broken: `https://api.quotable.io/randooooom`

Push. Reload.

**Fallback should show** "Welcome back!".

Restore URL. Push.

---

## Step 8 — Label (no AI!)

Write:
1. What is **fetch**?
2. What is **HTTP**?
3. What is an **API**?
4. What is **JSON**?
5. What does **async** mean?

---

## Done when

- [ ] Ran `fetch` in Console successfully
- [ ] Quote appears on Habit Tracker reload
- [ ] Different quote each reload
- [ ] Error fallback works
- [ ] Label answers written

---

## Rules

1. **fetch is async** — results don't come instantly
2. **`.then` chain** — process response → use data
3. **Check Console** for errors

---

## If you finish early

Try fetching 5 quotes and showing a different one each day:

```javascript
fetch('https://api.quotable.io/quotes?tags=motivational&limit=5')
    .then(r => r.json())
    .then(data => {
        let today = new Date().getDay()  // 0-6
        let quote = data.results[today % data.results.length]
        // display quote.content and quote.author
    })
```

Ask AI to integrate this with your Habit Tracker.
