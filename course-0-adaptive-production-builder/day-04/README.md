# Day 4 — Build for Users, Login & Multi-User

**Instructor plan.** 120 minutes. Goal: add signup/login to the Day 3 mini-app and prove that each user sees only their own data.

> **The lesson:** "Who is asking?" is the question every multi-user app answers constantly. Today's mini-app learns to answer it.

---

## What they understand by the end

- A multi-user app has to know **who is using it right now**
- Signup creates an account; login proves it's you
- Each user has their **own** data; one user can't see another's
- Supabase handles this — Lovable wires it in

## What they can do by the end

- Add signup/login to their Day 3 mini-app
- Sign up as 2 different users and see different data
- Explain who sees what

## What they can label by the end

**Account · signup · login · authentication · "my data vs. their data"**

---

## 120-minute plan

| Block | Minutes | Activity |
|---|---|---|
| Homework review | 15 | 2 demos. Discuss what broke, what surprised them. |
| Concept intro — who is asking? | 10 | Analogies: library card, mobile banking |
| **Experience** — add auth to Day 3 app | 60 | Lovable adds auth; students test with 2 accounts |
| **Label** — vocabulary | 15 | Define auth terms, no AI |
| **Transfer** — every app you log into | 10 | Instagram, bank, email — same pattern |
| Verify + homework brief | 10 | 2-account test required |

---

## Concept intro (10 min) — analogies only, no theory

Instructor on whiteboard:

> **Library card analogy:** The library has thousands of books. When you want to borrow one, they check your card. The card says "this is Hein Soe". The library's rules know what Hein can borrow and what belongs to someone else.

> **Mobile banking analogy:** You open the app. It asks for a PIN. After you type it, the app knows "this is Hein's account" — and shows **Hein's** balance, not someone else's.

**That's the whole concept.** 10 min. Do not explain tokens, JWTs, sessions, OAuth. Course 1.

---

## Experience phase (60 min)

### Setup (5 min)

Everyone opens their **Day 3 Lovable project** (todo/notes/journal/expense). We're not starting over — we're adding to it.

### Add auth (30 min)

Prompt Lovable:

```
Add signup and login to this app.

Rules:
- Users must sign up with email + password
- When a user logs in, they only see THEIR OWN [todos / notes / entries]
- When they log out, they see nothing (just the login screen)
- Use Supabase auth

Keep the existing UI the same, just add login/signup pages.
```

Lovable will:
1. Add signup/login screens
2. Add a user_id column to the data table (or set up Row Level Security)
3. Redeploy

**This takes 10-15 min usually. Lovable is sometimes slow on this step.** Patience.

### Test with 2 accounts (25 min)

Each student:

1. Opens the app in a normal browser window
2. **Signs up** as themselves (e.g. `hein@example.com`)
3. Adds 2-3 rows of data
4. Opens a **private / incognito window**
5. Signs up as a second person (e.g. `test@example.com`)
6. Adds different data
7. **Verifies:** each account sees only their own data

**If both accounts see all the data:** the auth isn't filtering by user. Fix with Lovable:

> "The todos are showing to all users. Each user should only see todos they created. Please fix."

Repeat until each user is isolated.

> **Isolation test is the whole lesson.** If this doesn't work by minute 55, drop everything and fix it with the student.

---

## Label phase (15 min)

Each student writes, no AI:

1. What is an **account**? (one sentence)
2. What is the difference between **signup** and **login**? (one sentence)
3. What is **authentication**? (one sentence)
4. When User A logs in and sees their todos, what does the database do differently than User B logging in?

Share with partner.

**Instructor pocket answers:**

- **Account** — a record in the database that represents one person using the app
- **Signup vs login** — signup creates the account first time; login proves it's you on return visits
- **Authentication** — the step of proving who you are (usually with email + password)
- **How the database differs per user** — it filters: "show me only rows where user_id matches this logged-in person"

---

## Transfer phase (10 min)

Instructor asks:

- "What happens when you open Instagram?" → login → see **your** feed, not someone else's
- "What happens when you open Gmail?" → login → see **your** inbox
- "What happens when you open a public news site?" → no login → everyone sees the same thing
- "Why does Facebook ask for your password every time on a new device?" → to authenticate on that device

**Lesson:** every app with "my X" (my messages, my photos, my notes) has done exactly what you did today.

---

## Verify + wrap (10 min)

Each student must show the instructor:

1. Login screen on their URL
2. Signup as User A → add data
3. Logout → signup as User B → add different data
4. Confirm User A's data is NOT visible to User B

If any of those fails: not finished. Stay 10 min and fix.

---

## Common failures (lots today)

| Failure | Fix |
|---|---|
| Auth works but all users see all data (no isolation) | Row Level Security isn't set. Tell Lovable to filter by `user_id` |
| User A can log in but not User B | Email verification turned on; disable in Supabase for class |
| Lovable "forgets" the existing mini-app structure | Open the Lovable chat history, scroll up — reset to a working state |
| Supabase auth email bounces (fake addresses) | Use real-looking addresses (`student1@gmail.com`) even if unused |
| Student panics when they can't log in | 90% of the time: typo in password. Try again. |
| Vibe coder says "yeah I know, auth is just a login screen" | Make them explain the user_id filtering. If they can't, they don't know. |

---

## Vibe coder watch (day 4)

Day 4 vibe coders often get the login screen working but **don't test the isolation** — they stop at "it works for me". Catch this:

- Require them to log in as 2 separate accounts, in front of you
- Ask: "User B just added a todo. If User A refreshes, do they see it? Why or why not?"

If they can't answer, they didn't finish Day 4.

---

## What this day is NOT

- Not a JWT / token / cookie lesson
- Not an OAuth tutorial
- Not a "password hashing" lesson
- Not a "social login" tutorial

Social login (Google, Facebook) is tempting but adds complexity. Email + password is enough for Course 0.
