# Day 9 — Authentication & Security

## The three layers

| Layer | Today |
|---|---|
| **Understand** | Authentication vs authorization · sessions · JWT · password hashing · **server-side validation** · SQL injection · XSS · secrets |
| **Direct** | Use a library. Do not write auth, and do not let the agent write it |
| **Verify** | **Attack your own app** |

## The rule for today

> **Nobody writes authentication here — not the student, not the agent.**

Auth written from scratch is wrong in ways that are invisible until it costs someone
their data. Use express-session or express-session + bcrypt. The skill being taught is *choosing and
verifying* a library, not implementing cryptography.

## Why day 9 and not day 2

Their app has been public since day 1 — but it had no real users and no real data.
This lands immediately before both arrive. Earlier, the concepts have nothing to attach to;
later, there is real data to lose.

## Sessions in this day

> A **day** is one 2-hour meeting. A **session** is a teaching block inside it.

| Session | Title | Kind | Length |
|---|---|---|---|
| **9.1** | Authentication vs Authorization | concept | 25 min |
| **9.2** | Verify Your Auth Setup | build | 15 min |
| **9.3** | Scope Every Query to the User | build | 35 min |
| **9.4** | Attack Your Own App | verify | 25 min |

## Pacing — `FITS`

| | |
|---|---|
| **Fixed** (never shorten) | 9.1 Authn vs Authz · 9.4 Attack Your Own App |
| **Elastic** (absorbs overrun) | 9.3 Scope Every Query |
| **Cut line** (goes first) | 9.3 — finish scoping at home; the attack must happen in class |

**Repaired:** library installation moved to pre-work posted after day 8, with exact steps you pre-tested. Class now *verifies* a working setup (15 min) instead of gambling on OAuth callbacks (50 min).

## Timing (120 min)

| Min | Block | Content |
|---|---|---|
| 0–15 | Homework review | Check the database screenshots. Who had wrong data they had not noticed? |
| 15–40 | Concept | Authn vs authz. Hashing. Why browser validation is not security |
| 40–90 | Build | Add auth with a library. Scope every query to the logged-in user |
| 90–115 | **Attack** | Two accounts. Try to read each other's data |
| 115–120 | Wrap | Homework |

## The two words

| Word | Question it answers |
|---|---|
| **Authentication** | Who are you? |
| **Authorization** | Are you allowed to do this? |

Students conflate them, then build an app where being logged in as *anyone* lets you
read *everything*. Separate the words explicitly, with the expense example:
logging in proves you are Aung. It does not make Su's lunch yours.

## The attack exercise — the core of the day

Each student makes two accounts, A and B. Logged in as A, with B's expense id:

```
GET    /api/expenses/<B's id>
PATCH  /api/expenses/<B's id>
DELETE /api/expenses/<B's id>
```

All three must return **404**.

> **404, not 403.** 403 means "this exists and it is not yours" — that confirms the row
> exists, which is itself a leak. 404 reveals nothing. Students must be able to explain
> this distinction; it is a good oral exam question.

Most students' apps **fail this on the first try**. That is the point of the exercise.
Let them find it themselves rather than warning them in advance.

## Where the ownership check goes

| Wrong | Right |
|---|---|
| Hide the edit button in the UI | `WHERE user_id = $currentUser` in the query |
| Check the id in the browser | Check on the server, every single query |
| Trust the user id sent in the request body | Read it from the session, never from the body |

The last row catches the most students. If the client sends `user_id`, the client can
send *any* `user_id`.

## Common failures

| Failure | Fix |
|---|---|
| Hand-rolled auth | Delete it. Use the library. Non-negotiable |
| Takes `user_id` from the request body | "Send me a different one. See what happens." |
| Only the UI hides other users' data | `curl` it. The data is right there |
| Secrets committed to GitHub | Stop class. Rotate the key. Teach `.env` and `.gitignore` now |
| Passes the attack test first try | Verify they actually tested it. Check the transcript |
