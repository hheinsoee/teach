# Day 6 — In Class

## Today the real project begins

Read `project/spec.md` before you start. You are building an **Expense Tracker**,
and so is everyone else. Same features, same shape.

Today: only what the user sees. No server, no database.

## The one idea: state

> **State is what your app currently remembers.
> The screen is just a picture of that state.**

You never change the screen directly. You change the state, and the screen redraws.

```
   state                      screen
   [ coffee 350 ]    ---->    a list with 1 row
   add "bus 200"
   [ coffee 350,              a list with 2 rows
     bus 200    ]    ---->    (you did not touch the screen)
```

## Part 1 — Plan before prompting (10 min, no agent)

On paper, break the page into pieces:

- What are the parts of this screen?
- Which part holds the list of expenses?
- What happens, step by step, when someone submits the form?

## Part 2 — Build (50 min)

One instruction per piece. Review every diff.

1. A page that displays a hard-coded list of 3 expenses
2. A form: amount, category, note, date
3. Submitting the form adds to the list
4. A category filter
5. A total displayed at the top

**Your data is fake today.** Refresh the page and it all disappears.
That is not a bug — it is what day 8 fixes.

## Part 3 — Verify in DevTools (15 min)

Open browser DevTools:

1. Find your list of expenses in the component state
2. Change a number there by hand
3. Watch the screen update without a reload

You just proved the screen follows the state. Write one sentence in your notes
explaining what you saw.

## Validation — important

You will add a check that the amount is not empty. Understand what it is for:

| Where | What it is for | Can you trust it? |
|---|---|---|
| Browser (today) | Telling the user quickly that something is wrong | **No** |
| Server (day 9) | Actually protecting your data | Yes |

Anyone can bypass the browser check. Today's validation is a convenience for honest
users — not protection. We will do the real thing in day 9.
