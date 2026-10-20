# Day 8 — In Class

## Today your data stops disappearing.

## Part 1 — Design it yourself. Laptops closed. (20 min)

**Your agent does not design your database. You do.**

This is the most expensive thing to get wrong in the whole app. Everything else can be
rewritten in an afternoon; a bad data model follows you for the life of the project.

On paper, draw:

- What tables do you need?
- What columns does each have?
- How are they connected?

Then answer these in writing, before you open anything:

1. An expense belongs to one person. **Where do you store that?**
2. An amount is `350.50`. How do you store it so it never loses a cent?
3. You bought lunch yesterday but enter it today. Which date goes in the row? Do you need both?
4. If a user is deleted, what happens to their expenses?

Swap papers with your partner. Try to break their design with those four questions.

## Part 2 — Remember day 2

You already know these. Apply them now:

| From day 2 | Here |
|---|---|
| `0.1 + 0.2` is not `0.3` | `amount` is a whole number of the smallest unit — `350.50` → `35050` |
| Form input is text, not a number | convert before it reaches the database |
| "when it happened" vs "when it was recorded" | `spent_on` and `created_at` are different columns |

## Part 3 — Build it (40 min)

Now use the agent. Give it **your** schema:

1. Create the tables
2. Change the API to read and write the database instead of the variable
3. Keep every endpoint working

## Part 4 — Look at the actual data (15 min)

Open your database GUI — SQLite has one in the browser.

1. Add an expense through your app
2. Find that row in the table
3. Check every column: is the amount what you expect? Is the date right? Is `user_id` filled in?

**Do not skip this.** Your app can show the right thing on screen while storing the
wrong thing in the database. The only way to know is to look.

## Reading the queries

You read SQL in day 5. Now read the queries the agent writes for *your* tables.

For each one, answer: what comes back, and what stops it returning another person's rows?

That second question is day 9.
