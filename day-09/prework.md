# Day 9 Pre-Work — Install the Auth Library

**Google Classroom assignment**
**Points:** 5
**Posted:** right after Day 8
**Due:** evening before Day 9
**Submit:** a screenshot of a successful login on `localhost`

---

Login has three moving parts: storing a password safely, remembering who is logged in,
and a `users` table. Wiring them is fiddly but not conceptually hard — so do it at home,
where being stuck is cheap, and spend class on the part that matters.

We use **`bcrypt`** (hashes passwords) and **`express-session`** (remembers the login).
Both are ordinary packages. There is no external service, no account, no callback URL.

Your instructor has posted the **exact steps** (`instructor/day-09-auth-steps.md`). Follow them.

## Checklist

- [ ] `npm install bcrypt express-session`
- [ ] A `users` table: `id`, `email` (unique), `password_hash`, `created_at`
- [ ] `POST /signup` stores a **hash**, never the password itself
- [ ] `POST /login` compares with `bcrypt.compare` and starts a session
- [ ] `POST /logout` ends the session
- [ ] A logged-in page shows your email
- [ ] `SESSION_SECRET` read from an environment variable, not written in the code

## Check this yourself before you submit

Open your `users` table and look at `password_hash`. If you can read your password
there, stop and tell the instructor — you stored it in plain text.

## Stop here

Do **not** connect expenses to users yet. That is day 9 in class, and it is the part
that matters.

## If you are stuck

Message the instructor **the same day**, not the night before. If your login does not
work when you arrive, you will spend day 9 fixing configuration instead of learning
what authorization is — and the attack exercise is the whole point of the day.

## Submit

A screenshot showing you logged in, with your email visible on the page.
