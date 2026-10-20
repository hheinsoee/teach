# Day 12 — In Class

## Part 1 — Watch the agent over-engineer (20 min)

Ask your agent, exactly this:

> Refactor my expense API to be more maintainable and scalable.

Look at what comes back. You will probably get factories, repositories, interfaces,
and several new files — for an app with two tables.

Now ask yourself the only question that matters:

> **Does this make my app easier to change, or harder?**

Then ask the agent to explain why each new file exists. If the explanation is
"best practice" or "this scales better", that is not a reason. **Reject it.**

## When to add structure

| Add it when | Do not add it when |
|---|---|
| You have changed the same thing three times | You *might* need it one day |
| Two parts truly must not know about each other | It sounds professional |
| A file is too big to find anything in | The agent suggested it |

Every layer you add is something you must understand before you can change anything.
Abstraction is not free. You pay for it every time you touch the code.

## Why code gets messy — it is normal

Your app is messier than it was in day 6. That is not failure, that is what
happens when software grows. The skill is not keeping it perfect; it is **noticing
when the mess starts costing you more than fixing it would**.

Signs it is time:

- You are afraid to change a file
- One small change breaks three unrelated things
- You cannot find where something happens
- You copy-pasted the same logic a third time

## Part 2 — Final exam

One at a time with your instructor. No agent. No laptop.

You will be asked:

1. To explain a piece of your own code, and what breaks if it is removed
2. Which line stops someone else reading your data
3. Why your amounts are stored the way they are
4. What you would change to support two currencies

While you wait: demo your app to each other. Try to break your classmates' apps.
Finding a hole in a friend's app today is a gift — much better than a stranger finding
it next month.

## What you are now

You can take an idea and put it in front of real users, by yourself. Six weeks ago you
could not. That is real.

You are not finished. You have seen one app, one stack, one set of problems. The next
thing that will teach you most is other people's code — bigger, older, written by
someone who is not available to explain it.
