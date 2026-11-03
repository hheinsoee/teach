# Day 4 — In-Class Exercise

**Goal:** Add login to your Day 3 mini-app. Prove each user has their own data.

---

## Why today matters

A todo list where **everyone sees everyone's todos** is useless.
A todo list where **you only see your own** is a real app.

Today you add the second part.

---

## Step 1 — Open your Day 3 project (5 min)

- Go to **lovable.dev**
- Open the project you built on Day 3 (todo / notes / journal / expense tracker)
- Make sure the URL still works

**If your Day 3 app is broken:** fix it first. We're building on top of it today.

---

## Step 2 — Ask Lovable to add auth (30 min)

Paste this prompt (change the word in `[brackets]` to match your app):

```
Add signup and login to this app.

Rules:
- Users sign up with email + password
- When a user logs in, they only see THEIR OWN [todos]
- When they log out, they can't see anything — just the login screen
- Use Supabase auth

Keep the existing UI, just add login/signup pages at the beginning.
```

Lovable will:
1. Add a login/signup screen
2. Set up Supabase auth
3. Make sure your data is "owned" by whoever created it
4. Redeploy

Takes about 10-15 minutes.

---

## Step 3 — Test with 2 different accounts (25 min)

This is the whole point of today. Do it carefully.

### Test A — Sign up as yourself

1. Open your URL in a normal browser tab
2. Click **Sign Up**
3. Email: `yourname@example.com` · Password: `test1234` (or any)
4. Log in
5. Add **3 rows** of data (3 todos, 3 notes, whatever)

### Test B — Sign up as a different person

1. Open a **private / incognito window** (Cmd+Shift+N on Chrome)
2. Go to your URL
3. Click **Sign Up**
4. Different email: `friend@example.com` · Password: `test5678`
5. Log in

**You should see NOTHING** — no todos, no notes. Blank list. That is correct.

6. Add 2 rows of your own data

### Test C — Switch back

1. Go back to the first browser tab (where you're logged in as yourself)
2. Refresh

**You should still see your original 3 rows. NOT the 2 from the second account.**

### If both accounts see everything

Your auth isn't filtering by user. Ask Lovable:

```
Bug: Both users see each other's todos. Each user should only see
the todos THEY created. Fix the Supabase Row Level Security.
```

Iterate until Test C passes.

---

## Step 4 — Label (no AI!)

Close Lovable. Write in notes:

1. What is an **account**? (one sentence)
2. What's the difference between **signup** and **login**? (one sentence)
3. What is **authentication**? (one sentence)
4. When User A logs in and sees different data than User B, what is the database doing differently?
5. If you deleted User A, what would happen to User A's todos?

Pair up and share.

---

## Done when

- [ ] Your URL shows a login/signup screen before showing any data
- [ ] You signed up as 2 different accounts and tested both
- [ ] Each account only sees its own data (not the other user's)
- [ ] You wrote Label answers, no AI
- [ ] You demonstrated the 2-account test to the instructor

---

## Rules

1. **Two accounts, two different browsers (or one incognito).** You MUST test isolation.
2. **"It works for me" is not shipped.** It only ships when 2 users have different data.
3. **No social login.** Email + password only. (Google/Facebook login is Course 1.)

---

## If you finish early

- Add a **profile page** where each user can see their email + a "logout" button
- Try to break your own app: can you see someone else's data? If yes, that's a bug to fix.
