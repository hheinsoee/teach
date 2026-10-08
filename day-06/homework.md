# Homework 6 — The Interface

**Google Classroom assignment**
**Points:** 10
**Due:** evening before Day 7
**Submit:** live URL + GitHub link + DevTools screenshot

---

## Part 1 — Finish the UI (6 points)

Your deployed site must let someone:

- see a list of expenses
- add one with amount, category, note, and date
- filter by category
- see the total of what is shown
- delete one

Still no server, still no database. Refreshing loses everything — that is expected.

## Part 2 — Prove you understand state (4 points)

In `notes/day-06.md`:

1. Which variable holds your list of expenses? Which file and line?
2. When you click "add", list every step between the click and the new row appearing.
3. Why does a refresh lose your data? Where was it actually living?
4. Your form checks that the amount is not empty. Could someone add an expense with no
   amount anyway? How?

Question 4 matters. Think about it before answering — the answer is yes.

## Done when

- [ ] Live URL works, all 5 actions work
- [ ] You can point at the line holding your state
- [ ] `notes/day-06.md` answers all 4 questions
- [ ] Every commit message says why

## Submit

1. Your live URL
2. GitHub link to `notes/day-06.md`
3. A screenshot of browser DevTools showing your expense state
