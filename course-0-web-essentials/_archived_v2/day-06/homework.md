**Google Classroom assignment**
**Points**: 10
**Due**: Evening before Day 7
**Submit**: Screenshot of your News App + API exploration notes + research + reflection

---

# Day 6 Homework — Explore the API + Add Image/Date

**Total time**: ~3 hours
**Structure**: Research (1 hr) + Build (1-1.5 hr) + Reflect (0.5 hr)

---

## Part 1 — Research (1 hour)

### A. What is HTTP?

Watch 1 video on HTTP basics (10-15 min). 

Write 3 sentences:
- What is HTTP?
- What is a request vs a response?
- What are status codes (200, 404, 500)?

### B. What is JSON?

Research: 
- What does JSON stand for?
- Why do APIs use JSON instead of other formats?
- What characters does JSON use (`{`, `}`, `[`, `]`, `"`, `:`, `,`)?

Write 2-3 sentences.

### C. Explore Hein's API

Open the API URL: `https://api.heinsoe.com/news.json`

Look at the JSON. Answer:
- How many articles are there?
- What categories exist?
- What's the newest article's date?
- Are all images real URLs or placeholders?

Write a short "API summary" (3-5 sentences).

---

## Part 2 — Build (1-1.5 hours)

### A. Make your News App beautiful

Prompt AI for a complete redesign:

```
Redesign my News App to look like a modern news website:
- Card layout, each article in its own card
- Image on top, title large, date and category in smaller text
- Hover effect
- Mobile-friendly
```

### B. Add a search bar

Ask AI: *"Add a search bar at the top. When I type, filter articles whose title contains the search text."*

Test with a few search terms.

### C. Add category filter

Ask AI: *"Add buttons for each category. Clicking a button shows only articles in that category. Add 'All' button to reset."*

Test.

### D. Break and fix

Change the URL in your fetch code to something wrong, like `news.json` (without the full URL). What happens?

Read the error in Console. Then restore.

---

## Part 3 — Reflect (0.5 hour)

Write 5 sentences:

1. What did you find most interesting about APIs?
2. Which part of your News App do you like best?
3. What was the error when you broke the URL? Did you understand it?
4. One question you still have about fetch/API/JSON

---

## Submit via Google Classroom

1. **Screenshot** of your redesigned News App (showing search + category filter)
2. **API exploration notes** (your summary of what the API returns)
3. **Research notes** (HTTP + JSON)
4. **Reflection** (5 sentences)
5. **Screenshot** of the error you saw during "break and fix"

---

## Done when

- [ ] News App looks modern (card layout)
- [ ] Search bar works
- [ ] Category filter works
- [ ] You wrote API summary
- [ ] You wrote HTTP + JSON research
- [ ] You broke and fixed the fetch
- [ ] Reflection submitted

---

## Rules

1. **The API is read-only.** You don't modify it. You only fetch and display.
2. **Multiple fetches are fine.** AI might show you one fetch per filter — that's OK for now.
3. **Honest confusion** about APIs is valuable. Write what you don't understand.

---

## Looking ahead

Tomorrow (Day 7): Features + Code Review. You'll learn how to **spot bugs in AI's code**. This is one of the most important skills in the AI era.
