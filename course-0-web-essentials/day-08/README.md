# Day 8 — Fetch: Data From the Internet

**Phase**: Learning (Day 8 of 8) — Last learning day before Capstone 2
**Project**: Habit Tracker — add a motivational quote via fetch
**Modules touched**: G (HTTP), A, H, F
**Duration**: 90 min + 3 hr HW

---

## Learning outcomes

- **Read**: a `fetch()` call and know what it does
- **Understand**: data can come from the internet, not just localStorage
- **Direct**: AI to add fetch to Habit Tracker
- **Verify**: a different quote appears on each reload

---

## 90-min plan

| Block | Min | Activity |
|---|---|---|
| HW review | 10 | Habit Tracker final showcase |
| Concept: "Where does data come from?" | 15 | Server + API + JSON |
| Instructor demo | 15 | Add quote API fetch to Habit Tracker |
| Student build | 35 | Each student adds fetch |
| Label + commit | 15 | fetch, HTTP, API, JSON, async |

---

## Concept (15 min)

### Where does data come from?

So far:
- HTML — written by you (via AI)
- JS variables — in memory
- localStorage — in browser

Now:
- **From a server, over the internet** — via `fetch`

### Analogy

```
Your browser (customer)              Internet server (kitchen)
   fetch('url') →               →   receives request
                     ← responds with JSON ←
   displays
```

Browser က **ဖောက်သည်**, server က **ဆိုင်**, JSON က **ဈေးစာရင်း/menu**။

### `fetch` basics

```javascript
fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        console.log(data.content)   // the quote
    })
```

Parts:
- `fetch(url)` — ask server
- `.then(response => response.json())` — turn response into JS object
- `.then(data => ...)` — now we have the data, use it

**`async`**: data takes time to arrive. `.then` means "when it arrives, do this."

### Why `fetch` matters

- News apps fetch articles
- Weather apps fetch weather
- Social apps fetch posts
- **Every real app** uses fetch (or similar)

---

## Demo (15 min)

Prompt AI:

```
In my Habit Tracker, add:
- When the page loads, fetch a random motivational quote from:
  https://api.quotable.io/random
- Display the quote at the top of the page in a styled box
- Also show the author's name

If fetch fails, show "Welcome back!" instead.

Give me updated HTML + CSS + JS. Explain the fetch section line by line.
```

Read AI's output:
- `fetch()` call
- `.then()` chain
- Where data is used
- Error handling (`.catch`)

Save. Push. Reload URL. **Quote appears.**

Reload again. **Different quote.** (Same quote only ~5% of time by random chance.)

---

## Student build (35 min)

Each student:
1. Prompt AI (adapted)
2. Add fetch to Habit Tracker
3. Push
4. Test: quote changes on reload

Then try:
- `fetch('https://api.quotable.io/quotes?tags=motivational&limit=5')` — fetch 5 quotes
- Loop over them, show random one

**Instructor circulates**:
- CORS error → quotable.io is CORS-safe; probably typo
- `.then` syntax confusion → OK to show `async/await` alternative
- Data appears blank → check `data.content` vs AI's suggested path

---

## Label (10 min)

Write:
1. What is **fetch**?
2. What is **HTTP**?
3. What is an **API**?
4. What is **JSON**?
5. What does **async** mean?

**Pocket answers**:
- `fetch` = JS way to ask a server for data
- HTTP = the language browsers and servers use
- API = a URL + rules for talking to a server
- JSON = text format for structured data
- Async = "takes time, continue when done"

---

## Common failures

| Failure | Fix |
|---|---|
| CORS error | Rare for quotable.io; check URL typo |
| Quote doesn't appear | Check Console for errors |
| `data.content` undefined | AI's path may differ; check actual response in Network tab |
| Fetch runs twice | OK, happens on reload |

---

## NOT

- POST / PUT / DELETE (Course 1 — just read)
- Authentication (Course 1+)
- WebSockets (Course 2+)
- GraphQL (Course 2+)

Keep tight: fetch URL → get JSON → display.

---

## Transition to Capstone 2

End of Day 8 marks:
- ✅ Learning phase complete (HTML, CSS, JS, DOM, localStorage, fetch)
- ✅ Habit Tracker done
- 🎯 Capstone 2 begins Day 9 — News App from scratch using all these skills

Students should feel: "I know enough tools to build something real now."
