# Day 5 — In-Class Exercise

**Goal:** Your mini-app is broken. Not by you. By the instructor. Find what's wrong. Fix it. Ship again.

---

## The reality of shipping

Up to today, you've only built. Today you learn the other half of being a builder: **operating**.

Operating is what happens after shipping — fixing, modifying, redeploying.

Every real app breaks eventually. Networks fail. APIs change. Users do unexpected things. The builders who stay in business are the ones who can fix things when they break.

---

## Where does a problem live?

When something breaks, start by asking: **which of these 3 is it?**

| Layer | What you look at | Example problem |
|---|---|---|
| **UI** | Browser (F12 → Console tab) | Button doesn't do anything |
| **Data** | Supabase dashboard | Rows aren't saving / wrong rows visible |
| **Infrastructure** | Vercel / Lovable deploy logs | Site is down / env variable missing |

Different problems → different tools. If you don't know where it lives, you'll waste time asking the wrong question.

---

## Step 1 — Try to use your own mini-app (10 min)

- Open your URL on your phone
- Try to log in with your old account
- Try to add a new row
- Try to log out, log back in

**Something will break.** The instructor planted 2-3 bugs. Your job is to find them.

Write down, in one sentence, what you notice:

> *"I can log in but when I add a todo, nothing appears."*

> *"I signed up a new user and they can see someone else's data."*

> *"The site shows a blank page when I try to visit it."*

---

## Step 2 — Guess where it lives (5 min)

Based on what's broken, guess: UI, Data, or Infra?

**Examples:**
- "Button doesn't react" → UI
- "Row doesn't save" → probably Data (or UI calling the wrong thing)
- "Blank page" → probably Infra (deploy issue)
- "I see someone else's data" → Data (permissions)

Write your guess down. **Then check the actual place.**

---

## Step 3 — Check the actual system (15 min)

**Before asking AI**, look at the real system:

### If UI:
- Open the page in Chrome
- Press F12 → click **Console** tab
- Try the broken action
- Any red text? Copy it.

### If Data:
- Open supabase.com → your project
- **Table Editor** — are rows there?
- **Authentication → Users** — are the users there?
- **Logs** (left sidebar) — any recent errors?

### If Infra:
- Open **Lovable** or **Vercel**
- Find your project
- Look at the latest **deploy log** — did it fail? What did it say?

**Write down what you found.** This is the raw evidence.

---

## Step 4 — Now ask AI (with specifics!) (15 min)

Now you can go to AI. Your prompt should include:

- **What the user tried to do**
- **What happened instead**
- **The error you saw** (from console / Supabase / deploy logs)
- **Where you think it lives** (UI / Data / Infra)

**Bad prompt:**
> "My app is broken, fix it"

**Good prompt:**
> "When I click Sign Up on my app at [URL], Supabase shows no new user in Authentication → Users. The browser console says `AuthApiError: Invalid API key`. I think the Supabase env variable is wrong. How do I check it in Lovable?"

The second one gets a useful answer. The first one wastes 10 minutes.

---

## Step 5 — Verify the fix (5 min)

After the fix:

1. Try the original broken action
2. Does it work now?
3. Did your fix break something else? Test logout, test with another account.

**"It works" means another person could use it successfully.** Not just that no error shows.

---

## Repeat for each planted bug

The instructor planted 2-3 bugs. Repeat the process for each one.

---

## Step 6 — Label (no AI!)

Write in notes:

1. What is an **error message**? (one sentence)
2. What is a **log**? (one sentence)
3. What is an **environment variable**? (one sentence)
4. For each bug you fixed: which layer did it live in — UI, Data, or Infra?
5. What did you check **first** for each? Was that the right place?

---

## Step 7 — Vibe Check (3 min per student)

The instructor will call each student up for 3 minutes. **No AI. No notes.**

You'll be asked:

1. What does your mini-app do? Who is it for?
2. When a user clicks "add", what happens in the database?
3. When a user signs up, what gets created where?
4. What was the planted bug today? How did you figure it out?

**This is not a test to fail you.** It's a check: can you talk about your own app without AI? If not, you need another day on it.

---

## Done when

- [ ] You identified at least 2 broken things (planted or otherwise)
- [ ] You looked at the real system (console / Supabase / logs) before asking AI
- [ ] Your app works again — all planted bugs fixed
- [ ] You wrote Label answers, no AI
- [ ] You did the Vibe Check with the instructor

---

## Rules

1. **Look at the system first, AI second.** This is the Day 5 discipline. Breaking it is the vibe-coder pattern.
2. **No "AI said fix it this way" without you verifying.** AI gets things wrong. Trust the system you can see.
3. **If AI's first fix doesn't work, don't ask AI again — look at the system again.** Prompting harder doesn't help if the diagnosis is wrong.
