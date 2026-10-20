# Homework 3 — The CLI Tool and Its Prompts

**Google Classroom assignment**
**Points:** 10
**Due:** evening before Day 4
**Submit:** GitHub links to your tool and your prompt log

---

## Part 1 — Finish the tool (5 points)

Your expense summarizer must:

- read a CSV with columns `date,category,amount`
- print the total
- print the total per category
- accept a month like `2026-03` and filter to it
- handle: missing file, empty file, a bad row — without crashing

Commit it to your repository as `tools/summary.js`.

## Part 2 — The prompt log (5 points)

In `notes/day-03-prompts.md`, record **every** instruction you gave the agent, in order.

For each one, add one line: did it give you what you wanted?

Then answer at the end:

1. Which instruction worked best? Why?
2. Which one gave you something you did not want? What was missing from it?
3. Rewrite your worst instruction as a good one, using the four parts.

## Done when

- [ ] `tools/summary.js` runs and survives all 4 bad inputs
- [ ] `notes/day-03-prompts.md` lists every prompt you used
- [ ] You rewrote your worst prompt

## Submit

1. GitHub link to `tools/summary.js`
2. GitHub link to `notes/day-03-prompts.md`

## Warning for the next day

Next day you will be given broken code and you must find the problem
**without asking the agent**. Practice reading errors before you come.
