# Day 3 — In Class

## Goal

Get the agent to build exactly what you meant, not approximately what you typed.

## The four parts of a good instruction

| Part | Example |
|---|---|
| **What** | a Node script that reads a CSV and prints a total |
| **Shape** | the columns are date, category, amount |
| **Edge** | if the file is missing, print `no file` |
| **Constraint** | no libraries, one file, under 40 lines |

Most people write only the first part. The **constraint** is what stops the agent
building something three times bigger than you wanted.

## Part 1 — Write the spec first (15 min, no agent)

You are going to build a command-line expense summarizer.

On paper, before touching the agent, write:

- What it does (one sentence)
- What the input looks like
- What the output looks like, exactly
- Three things that could go wrong, and what should happen
- Three constraints

**Do not open your agent during this part.**

## Part 2 — Build it (45 min)

Now use your agent. One instruction per feature. After each response:

1. Compare the result to your spec
2. Run it
3. Write the prompt down in `notes/day-03-prompts.md`

Build in this order:

1. Read the file and print the total
2. Handle the file being missing
3. Print the total per category
4. Accept a month argument and filter by it

Do **not** ask for all four at once. You will get something you cannot review.

## Part 3 — Break your partner's tool (15 min)

Swap. Try to make their tool fail:

- empty file
- a row with a missing amount
- a letter where a number should be
- a month with no expenses

Write down what happened. Do not fix it yet.

## What you learned

The agent will build what you *said*, not what you *meant*. The difference between a
good and bad result today was not the agent — it was the instruction.
