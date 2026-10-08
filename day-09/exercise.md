# Day 9 — In Class

## Two words that are not the same

| Word | The question |
|---|---|
| **Authentication** | Who are you? |
| **Authorization** | Are you allowed to do this? |

Logging in proves who you are. It does **not** mean you may touch everyone's data.
Most broken apps get the first one right and skip the second.

## Part 1 — Verify your setup (15 min)

You installed the auth library at home. Confirm it still works:

- sign up with a new account
- log in, log out, log in again
- your email appears on a logged-in page

Broken? Tell the instructor now. Do not spend this day on configuration.

## Part 2 — Connect expenses to people (35 min)

**You will not write this, and neither will your agent.** Use a library —
express-session or express-session + bcrypt.

Why: authentication written from scratch is wrong in ways you cannot see until someone
loses their data. Professionals use libraries for this. Your skill is picking one and
checking it works, not inventing it.

1. Every expense gets the id of the person who created it
4. Every query only returns **your own** expenses

### Where the ownership check must live

| Not enough | Correct |
|---|---|
| Hiding the delete button | `WHERE user_id = ...` in the database query |
| Checking in the browser | Checking on the server, every time |
| Trusting a user id sent from the browser | Reading the id from the session |

That last one matters. If the browser tells the server "I am user 7", anyone can say
they are user 7. The server must know who you are from your session — never from what
you sent it.

## Part 3 — Attack your own app (25 min)

Make **two** accounts: A and B.

Log in as B. Create an expense. Note its id.
Now log in as A and try:

```bash
curl -i -X GET    /api/expenses/<B's id>  -H "<A's auth>"
curl -i -X PATCH  /api/expenses/<B's id>  -H "<A's auth>" -d '{"amount":1}'
curl -i -X DELETE /api/expenses/<B's id>  -H "<A's auth>"
```

**All three must return 404.**

### Why 404 and not 403?

`403 Forbidden` says: *this exists, and it is not yours.* You just confirmed the
expense exists. That is a leak.

`404 Not Found` says nothing at all. As far as A is concerned, B's data does not exist.

Most of you will fail this test the first time. **That is the point.** Find it now,
on a class project — not later, on something real.

## Part 4 — Three more holes to check

| Hole | Test |
|---|---|
| **Bad input** | `curl` an amount of `"abc"`, then `-500`. Does your server reject both? |
| **SQL injection** | Is the agent building queries by joining strings? Find out. Parameters only |
| **Secrets** | Is any password, key, or database URL in a file you pushed to GitHub? |

If you find a secret in your repository: tell the instructor now. Deleting the line is
not enough — it is still in your history, and the key must be replaced.

## Remember from day 6

Your browser form checks the amount is not empty. That check protects **nothing**.
`curl` does not use your form. Every rule that matters lives on the server.
