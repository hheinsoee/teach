# Day 3 — In-Class Exercise

**Goal:** Build a mini-app that **remembers**. Add something. Refresh. It's still there.

---

## What a "database" means today

Think of a database like a **Google Sheet**:

- Each **row** = one thing (one todo, one note, one expense)
- Each **column** = one detail about that thing (text, date, status)

That's it. We're not going to learn SQL. Lovable + Supabase take care of all of it.

---

## Step 1 — Set up accounts (10 min)

1. Go to **https://lovable.dev**, sign in with Google or GitHub
2. Go to **https://supabase.com**, sign up (free tier)
3. In Lovable, when you create your project, it'll ask to connect Supabase — click "yes"

If you get stuck: raise your hand. **Do not skip setup** — the rest of today depends on it.

---

## Step 2 — Pick what you'll build (5 min)

Pick **one**:

- 📝 A **todo list** — add tasks, mark them done
- 📓 A **notes** app — write short notes with dates
- 📔 A **daily journal** — one entry per day
- 💸 An **expense tracker** — amount + category + note

**Don't pick two.** Pick one. If you can't decide, pick the todo list.

---

## Step 3 — Prompt Lovable (30 min)

Example prompt (adjust for your choice):

```
Build a todo list app with Supabase.

Features:
- Form at the top: text input + "Add" button
- Below: list of all todos, newest first
- Each todo has a checkbox to mark done
- Done todos appear with a strikethrough
- Store all todos in Supabase

Design: simple, mobile-first.
```

Press enter. Lovable will:
1. Design the UI
2. Create the Supabase table
3. Connect them
4. Give you a live URL

**Iterate 2-3 times** if you want to change something. Example:
- "Add a date column that shows when each todo was created"
- "Make the Add button bigger"
- "Show the number of todos still not done at the top"

---

## Step 4 — The magic test (5 min)

1. Open your mini-app URL
2. Add a todo (e.g. "buy milk")
3. **Refresh the page** (Cmd+R or F5)
4. The todo should **still be there**

**If it disappears:** your database isn't connected. Ask instructor.

**If it's still there:** congratulations, you built an app with memory. This is a bigger deal than it looks.

---

## Step 5 — Look at your data in Supabase (10 min)

1. Open **supabase.com**, sign in
2. Click your project
3. Click **"Table Editor"** in the left sidebar
4. Find your table (probably called `todos` or `notes`)
5. You should see **the todo you just typed**, as a row in the table

**Take a screenshot.** You'll need it for homework.

---

## Step 6 — Label (no AI!)

Close Lovable and ChatGPT. Write in your notes:

1. What is a **database**? (your own words, one sentence)
2. What is a **row**? (one sentence)
3. What is a **column**? (one sentence)
4. What does **persistence** mean? (one sentence)
5. Where is your todo data stored, physically? (one sentence)

Then share with your partner. They say "yes" or "say it again."

---

## Done when

- [ ] Your mini-app URL works
- [ ] You can add a thing and it's still there after refresh
- [ ] You opened Supabase and saw the row
- [ ] You took a screenshot of your Supabase table
- [ ] You wrote your Label answers, no AI
- [ ] You showed the instructor: URL working + Supabase row visible

---

## Rules

1. **One app, one table.** Don't try to build "an app with 5 types of things."
2. **The URL must persist data.** A page that looks fine but doesn't save is not finished.
3. **You must open Supabase.** If you've never clicked into supabase.com, you haven't finished this exercise.
