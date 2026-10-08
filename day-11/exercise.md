# Day 11 — In Class

## Production is not "it works". Production is "I find out when it stops."

Your app has been live since day 1. Today you make it something you can **operate**:
when it breaks at 2am, you find out, and you can tell why.

## Dev vs production

| | Development | Production |
|---|---|---|
| Database | test data you can destroy | real data you cannot |
| Secrets | `.env` on your machine | set in Railway's settings |
| Errors | full detail on screen | logged privately; user sees a plain message |

Two rules that do not bend:

1. **Secrets never go into GitHub.** Once pushed, it is in the history forever —
   deleting the line does not remove it. The key must be replaced.
2. **Users never see a stack trace.** It shows an attacker exactly how your app is built.

## Part 1 — Configure production (50 min)

1. A separate production database — **not** the one with your test junk in it
2. Every secret in Railway's environment settings, nothing in the repository
3. Logging: when something fails, write down what and for whom
4. Error logging
5. **Back up your database** — your data is a SQLite file. Learn how to download a copy of it

## Part 2 — What makes a log useful

```
error
```
Useless. Error where? For whom? Doing what?

```
2026-04-12T09:14:22Z ERROR POST /api/expenses user=a1b2 failed: amount must be a number (got "abc")
```
Useful. Time, severity, route, user, and the actual cause.

Logging everything is the same as logging nothing — you will not read 40,000 lines.
Log **decisions and failures**, not every request.

## Part 3 — Break your own live app (25 min)

One at a time. Undo each before the next.

| Break | Then check |
|---|---|
| Point `DATABASE_URL` at nothing | Did your error tracker email you? Did a user see a stack trace? |
| Make one endpoint throw | Is it in the logs? Can you tell which user and which route? |
| Return 500 from `/api/summary` | Did anything notice? |

**The real question is not "did it break". It is: would I have known?**

If nothing told you, your monitoring does not exist yet. Fix that now, not after
your first real user.

## One more question

Your database is deleted right now. What do you do?

If you do not have an answer, go turn on backups before you leave.
