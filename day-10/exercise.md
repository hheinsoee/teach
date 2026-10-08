# Day 10 — In Class

## The rule

> **A test that still passes when you break the code is worthless.**

Worse than worthless — it tells you everything is fine while it is not.

## What is worth testing

| Worth it | Not worth it |
|---|---|
| A can never read B's expense | a button is blue |
| A negative amount is rejected | a variable got assigned |
| This month's total is correct | a library works |
| A missing field gives 400 | something that cannot realistically break |

The filter: **could a believable bug make this test fail?** If no, do not write it.

## The test runner

```
npm test
```

That runs `node --test`. It is built into Node — there is nothing to install and no
config file. Tests live in `test/` and end in `.test.js`.

## Part 1 — Get three tests written (20 min)

Ask your agent for **three** tests. Only these three:

1. A negative or non-numeric amount is rejected
2. User A cannot read user B's expense
3. The monthly total adds up correctly

Three is enough. A test you have not proven is worth nothing, and you will prove each
of these by hand in Part 2.

## Part 2 — Prove each test is real (30 min)

**This is the important part of today.**

For every test:

1. **Break the code it is supposed to catch.** Remove the `user_id` filter. Change
   `<` to `<=`. Return 200 instead of 400.
2. Run the test.
3. **Did it fail?**
   - Failed → the test is real. Undo your break. Keep it.
   - Still passed → **the test is fake.** It checks nothing. Fix it or delete it.
4. Undo the break.

A test you have not broken is a test you do not know works.

## Part 3 — Four tests, two are fake (20 min)

Look in `broken/`. Four tests, all passing, all green.

Two of them would not notice if the code were completely broken.

For each, write down: is it real or theater? How do you know?
Then prove it — break the code and see.

## Part 4 — Checkpoint

Your instructor will hand you a piece of code that looks fine and has one real problem.

Find it. You have 10 minutes, no agent.

This is rubric criterion 4 — **spot bad agent output**. It is one of the three things
you cannot pass this course without.
