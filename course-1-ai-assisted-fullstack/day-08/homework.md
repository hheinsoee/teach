# Homework 8 — Real Data

**Google Classroom assignment**
**Points:** 10
**Due:** evening before Day 9
**Submit:** GitHub link + a screenshot of your database rows

---

## Part 1 — Persistence (5 points)

Your app stores expenses in the database. Restarting the server does not lose anything.
All four endpoints still work.

## Part 2 — Defend your design (5 points)

In `notes/day-08.md`:

1. Draw or describe your tables and columns.
2. Why is `amount` stored the way you stored it? What goes wrong with the alternative?
3. What is the difference between the date the expense happened and the date the row
   was created? Why might you want both?
4. Which column connects an expense to a person? What happens if you remove it?
5. Read one query the agent wrote for you. Explain it in plain words, line by line.
6. You now need to support two currencies. What would you change?

**These are the day 12 oral exam questions.** Answer them properly now and the
final exam is a conversation you have already had.

## Part 3 — Verify the stored data

Add 3 expenses through your app. Then open the database GUI and check each row:

- Is the amount the number you expect?
- Is the date correct?
- Is every column filled in that should be?

Screenshot it.

## Done when

- [ ] Data survives a server restart
- [ ] All 6 questions answered in your own words
- [ ] You looked at real rows in the database, not just your own UI
- [ ] Screenshot attached

## Submit

1. GitHub link to `notes/day-08.md`
2. Screenshot of your `expenses` table with real rows
