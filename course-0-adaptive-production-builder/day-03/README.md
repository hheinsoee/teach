# Day 3 — Stand on Giants, Mini-App With a Database

**Instructor plan.** 120 minutes. Goal: students experience **data persistence** — the moment "it's still there after refresh" clicks.

> **Day 3 is the first wall.** Up to now, students built pages. Today they build an app that **remembers**. This is a bigger mental jump than it looks.

---

## What they understand by the end

- A webpage shows information; an app with a database **remembers** information
- Data lives in a **table** — rows (one thing) and columns (its parts)
- Supabase is the "memory" behind the app; Lovable connects the UI to it
- "App with memory" is a different kind of thing than "landing page"

## What they can do by the end

- Build a data-driven mini-app with Lovable + Supabase
- Open Supabase, see their actual data in a table
- Explain where their data lives

## What they can label by the end

**Database · table · row · column · persistence**

---

## 120-minute plan

| Block | Minutes | Activity |
|---|---|---|
| Homework review | 15 | 2 students demo. Instructor asks: "Who did you interview, what did they say?" |
| Supabase account + concept intro (via analogy, no theory) | 15 | 5 min on "database = Google Sheets" |
| **Experience** — build data mini-app | 60 | Lovable + Supabase, todo/notes/journal app |
| **Label** — vocabulary + see your data | 15 | Open Supabase, look at rows, label |
| **Transfer** — every app you know has this | 10 | Instagram, WhatsApp, YouTube — all have DBs |
| Verify + homework brief | 5 | URL check |

---

## Concept intro (15 min) — do NOT lecture

Instructor opens a Google Sheet in front of class. Shows:

- Each **row** = one thing (one expense, one note, one task)
- Each **column** = one piece of info about that thing (date, amount, category)

Then opens a Supabase table. Shows: same shape, different interface. Rows and columns.

**That's the whole concept.** 5 minutes. Do not explain SQL, primary keys, foreign keys, migrations, RLS, or anything else. Those are for Course 1.

> If a student asks "what is SQL" — answer: "it's the language databases speak, you don't need it today."

---

## Experience phase (60 min)

### Setup (10 min)

Every student:

1. Opens **lovable.dev**, signs in with GitHub or Google
2. Creates a new Supabase account (lovable can prompt for one, or do it separately at supabase.com)
3. In Lovable, connects to Supabase (click button, follow prompt)

**If this takes 20 min, that's fine.** Setup today is harder than Day 1.

### Build (50 min)

Each student picks **one** of:
- A **todo list** app
- A **notes** app
- A **daily journal** app
- An **expense tracker** (if the Day 2 interview person needed one)

Prompt Lovable:

```
Build a [todo list] app with:
- Add new [todos] at the top
- Each [todo] has: text, created date, done/not done
- Click to mark done
- List of all [todos] below
- Store in Supabase

Simple, mobile-first.
```

Lovable will:
1. Design the UI
2. Create the Supabase table
3. Wire them together
4. Deploy

**The magic moment:** student adds a todo → refreshes the page → **it's still there**.

**Instructor:** at minute 50 of the build phase, if any student's data doesn't persist, drop everything and help them. The persistence experience is the whole day.

---

## Label phase (15 min)

Each student:

1. Opens their **Supabase dashboard** → their project → "Table Editor"
2. Finds the table that stores their data
3. Takes a screenshot of 2-3 rows
4. Writes, no AI:
   - What is a **database**? (one sentence)
   - What is a **row**? (one sentence)
   - What is a **column**? (one sentence)
   - What does **persistence** mean? (one sentence)

**Then share aloud.**

**Instructor pocket answers:**

- **Database** — where the app's data lives, so it's still there after you close the tab
- **Row** — one of the things stored (one todo, one note, one expense)
- **Column** — one piece of information about each row (the text, the date, whether it's done)
- **Persistence** — the data stays even after you close the browser or turn off the laptop

---

## Transfer phase (10 min)

Instructor asks: "Where is the database in...?"

- Instagram → the photos, likes, comments are all in a database
- WhatsApp → the messages are in a database (and on your phone)
- YouTube → the videos, views, comments
- Your school's attendance system → students, dates, present/absent

**The lesson:** every app that remembers anything has a database. The specific tech changes (Supabase, MySQL, MongoDB) — the pattern is universal.

---

## Verify + wrap (5 min)

Every student shows:
- The live URL (click, add a row, refresh, show it persists)
- Supabase dashboard with the row visible

If both of those work: pass. If either fails: stay 10 extra min and fix.

---

## Common failures (this day has the most)

| Failure | Fix |
|---|---|
| Supabase signup requires email verification, 5 min delay | Have students sign up during setup block, use Gmail |
| Lovable can't connect to Supabase | Try once more; if still fails, use Lovable's built-in Supabase |
| App shows "Row Level Security" error on insert | Lovable usually handles this; if not, instructor turns RLS off for the single table — this is day 3, security is day 4 |
| Student types data but it doesn't save | Check: is the Supabase project actually connected? Table actually created? |
| Student thinks the data is "in the browser" | Open Supabase table, show the row. The explanation IS seeing the row. |
| Vibe coder says "yeah I've done Supabase" | Make them explain what RLS is. They don't know. Make them build like everyone else. |

---

## Vibe coder watch (day 3)

Day 3 is the biggest filter so far. Vibe coders can prompt Lovable and get a working app — but they often can't:

- Find their table in Supabase
- Explain what a "row" is in their app
- Say what happens when the user clicks "add"

**Response:** The Label phase is non-negotiable today. If a vibe coder can't open Supabase and point at their rows, they haven't finished Day 3 — regardless of whether the app looks like it works.

See [`instructor/vibe-check-playbook.md`](../instructor/vibe-check-playbook.md).

---

## What this day is NOT

- Not a SQL lesson
- Not a schema design lesson
- Not an RLS / auth lesson (that's day 4)
- Not a Lovable deep-dive

If an instructor opens the SQL editor in Supabase, they have broken the lesson. Students should never touch SQL in Course 0.
