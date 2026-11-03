**Google Classroom assignment**
**Points**: 10
**Due**: Evening before Day 8
**Submit**: Live News App URL + code review doc + reflection

---

# Day 7 Homework — Deploy News App + Code Review Document

**Total time**: ~3 hours
**Structure**: Research (1 hr) + Build + Deploy (1-1.5 hr) + Reflect (0.5 hr)

---

## Part 1 — Research (1 hour)

### A. Common AI coding mistakes

Research "common mistakes AI makes when writing code" (search YouTube, blogs, Reddit).

Write 3 examples with 2 sentences each:
- What AI did wrong
- How a human caught it

### B. What does "code review" mean in a real company?

Research: how do professional teams review each other's code?

Keywords: "pull request", "GitHub code review", "approving code"

Write 3-4 sentences.

---

## Part 2 — Build + Deploy (1-1.5 hours)

### A. Deploy your News App

Create a new GitHub repo: `news-app`

Push your News App code. Enable GitHub Pages. Get a live URL.

(Same process as Day 5 with Habit Tracker — now you've done it twice.)

### B. Add ONE final feature

Pick ONE:

**A**: **Dark mode toggle** — switch between themes
**B**: **Bookmark favorites** — save favorites to localStorage, show in a separate section
**C**: **Share article** — copy URL to clipboard
**D**: **Pagination** — show 5 articles per page, with "Next" / "Previous" buttons

### C. Write a Code Review document

Open your News App code. For each major section, write what it does + one thing you'd improve.

Example:

```
Section: fetch()
What it does: Asks Hein's API for news data.
What I'd improve: Add error handling for timeouts (currently just catches errors generically).

Section: forEach loop
What it does: For each article, builds HTML and adds it to the page.
What I'd improve: AI uses innerHTML which could be a security issue in real apps.
```

Cover at least **4 sections**.

---

## Part 3 — Reflect (0.5 hour)

Write 5 sentences:

1. Which section of your code is you most confident about?
2. Which section still feels confusing?
3. Did AI get something wrong this week? What?
4. How do you feel compared to Day 1?

---

## Submit via Google Classroom

1. **Live URL** of your deployed News App
2. **Code review document** (at least 4 sections, markdown or just plain text)
3. **Reflection** (5 sentences)

---

## Done when

- [ ] News App has a live URL (`username.github.io/news-app/`)
- [ ] One extra feature works
- [ ] Code review document covers 4+ sections
- [ ] Reflection written
- [ ] All submitted

---

## Rules

1. **Code review document is yours, not AI's.** Write in your own words.
2. **It's OK to say "I don't fully understand this."** That's honest and valuable.
3. **Deploy is non-negotiable.** The News App must be live by Day 8.

---

## Looking ahead

Tomorrow (Day 8): **Capstone**. You present BOTH your apps (Habit Tracker + News App) to the class. 3 minutes each. Then the teacher shows you "the next steps" — frameworks, backends, advanced AI tools. 

This is the final day. Bring your energy.
