# Homework 9 — Attack Your Own App

**Google Classroom assignment**
**Points:** 10
**Due:** evening before Day 10
**Submit:** GitHub link + full curl transcript

---

## Part 1 — Auth works (4 points)

- Sign up and log in work on your live site
- Expenses belong to the person who created them
- Logged out, you can see nothing

## Part 2 — The attack transcript (6 points)

Two accounts. Logged in as A, attack B's data. Paste **every command and its full
response** into `notes/day-09.md`:

| Test | Required result |
|---|---|
| `GET` B's expense as A | 404 |
| `PATCH` B's expense as A | 404 |
| `DELETE` B's expense as A | 404 |
| `GET /api/expenses` with no login | 401 |
| `POST` an amount of `"abc"` | 400 |
| `POST` an amount of `-500` | 400 |
| `GET /api/summary` as A | only A's totals |

Then answer:

1. Which line of your code stops A from reading B's expense? File and line number.
2. Why 404 and not 403?
3. If your browser form checks the amount, why does the server need to check it again?
4. Where are your secrets stored? Prove they are not in your GitHub repository.

## If you found a hole

Write what it was, how you found it, and how you fixed it. **Finding a hole in your own
app is worth full marks.** Claiming you had none, when you never tested, is worth zero.

## Done when

- [ ] All 7 tests pass with the required results
- [ ] Real pasted output, not descriptions
- [ ] All 4 questions answered
- [ ] No secrets anywhere in your repository

## Submit

1. GitHub link to `notes/day-09.md`
2. Your live URL
