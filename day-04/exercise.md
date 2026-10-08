# Day 4 — In Class

## Agents stay closed for this entire day.

## Goal

Read an error and find the problem yourself.

## How to read an error — 3 questions

| | Question | Where to look |
|---|---|---|
| 1 | What is the message? | The last line, in plain English |
| 2 | Which file and line is **mine**? | Scan for your own filename — ignore library paths |
| 3 | What was it trying to do? | The function names listed above the error |

Most people read the top of the error. The top is usually someone else's code.
Find your own filename first.

## Part 1 — The five broken files (55 min)

In `broken/` there are 5 files. Each has exactly one problem.

For each one, write in `notes/day-04.md`:

1. What did you expect it to do?
2. What did it actually do?
3. Which line is wrong?
4. Why is it wrong?
5. Your fix

Run each file. Read what comes back.

**Two of these five produce no error at all.** They just give the wrong answer.
Those two are the most important ones in this course — most real bugs look like that.

## Part 2 — Checkpoint (15 min)

Your instructor has broken your own site from day 1.

You get the error message and 10 minutes. No agent.

You need to say: **which file, and what is probably wrong**. You do not have to fix it.

## When the agent is wrong

The agent is confidently wrong in five ways. You will meet all of them:

| | What it does | How you catch it |
|---|---|---|
| 1 | Calls a function that does not exist | It crashes immediately |
| 2 | Uses an old version of a library | "This worked 2 years ago" |
| 3 | Assumes a field you never mentioned | Reads your data wrong |
| 4 | Explains a cause that is not the cause | Its fix does not fix it |
| 5 | **Hides the error instead of fixing it** | The error stops showing, the bug stays |

Number 5 is the dangerous one. If the agent's fix is to wrap something in `try/catch`
and do nothing, it did not fix your bug — it hid it. Reject that.
