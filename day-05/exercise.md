# Day 5 — In Class

## Goal

Read what the agent changed, and decide whether to keep it.

## Why this matters more than writing code

You are not going to type most of the code in your app. That means your real job is
**reviewing**. A diff is how you see what the agent did. If you cannot read a diff,
you cannot supervise an agent — you can only hope.

## Reading a diff

| Symbol | Meaning |
|---|---|
| `-` | removed |
| `+` | added |
| nothing | unchanged, shown for context |

```
  function total(list) {
-   let sum = 0;
+   let sum = 0.0;
    for (const a of list) {
```

One line removed, one line added. Everything else is context.

## The four questions — ask these on every diff

1. Did it change files I did not ask about?
2. **Did it delete anything?**
3. Did it add a library to `package.json`?
4. Can I explain every `+` line?

If the answer to 4 is no, **do not commit**. Ask the agent to explain it first.

## Part 1 — Ask, review, decide (45 min)

Three times, do this loop:

1. Ask the agent for **one** small feature on your site
2. Run `git diff`
3. Go through it line by line, out loud, saying "accept" or "reject" for each change
4. Commit, with a message saying *why* you made the change

If a diff is too big to read, **you asked for too much**. Undo it and ask for less.

## Reading SQL you did not write

Today is about reviewing code you did not type. A database query is exactly that — you
will not write these, but you will have to check them.

```sql
SELECT category, SUM(amount) AS total
FROM expenses
WHERE user_id = $1 AND spent_on >= $2
GROUP BY category;
```

Read it as: *"for this one user, since this date, add up the amounts and give me one
row per category."*

| Part | Means |
|---|---|
| `SELECT` | which columns I want back |
| `FROM` | which table |
| `WHERE` | only the rows matching this |
| `GROUP BY` | collapse into one row per value |
| `$1`, `$2` | values filled in safely, not glued into the text |

**`WHERE user_id = $1` is the most important thing on this page.** Without it, this
query returns *everyone's* expenses to *everyone*. You will build the table it talks
about in day 8, and you will attack an app missing that line in day 9.

Practice now: your instructor will show 3 queries. For each, say in plain words what
comes back — and whether anything stops it returning another person's rows.

## Part 2 — Find the planted change (15 min)

Your instructor has added something to your code that you did not ask for.

Find it using `git diff`. It might be:

- a library you never requested
- a line deleted somewhere else
- a changed default value
- something that should never be in code at all

## Rule from today

**Never commit a diff you have not read.**

This applies for the rest of the course, and for the rest of your career.
Every bad thing an agent does reaches your project through a diff you did not read.
