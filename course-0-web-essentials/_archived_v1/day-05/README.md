# Day 5 — Operate Like a Pro: Read Errors, Modify, Ship Again

**Instructor plan.** 120 minutes. Goal: students experience their app **breaking** in realistic ways, and fix it — without relying entirely on AI.

> **Day 5 is where the vibe coders are revealed.** The instructor plants 2-3 problems that AI's first fix won't resolve. A student who can only prompt their way out has not learned to **operate** — only to build.

See [`instructor/day-05-planted-problems.md`](../instructor/day-05-planted-problems.md) for the exact plants.

---

## What they understand by the end

- Shipping is not the end — **operating** (fix, modify, redeploy) is the ongoing job
- Errors have **locations** (frontend / backend / database / deploy / config)
- The first AI fix often misses the real cause
- Looking at the actual system beats prompting more

## What they can do by the end

- Read an error message out loud and point roughly at **where** the problem lives
- Try a fix, verify, try another if it fails
- Modify a working mini-app without breaking it

## What they can label by the end

**Error · log · deploy · environment · configuration**

---

## 120-minute plan

| Block | Minutes | Activity |
|---|---|---|
| Homework review | 15 | Share 2 testimonials. Who got surprising feedback? |
| Concept intro — where does a problem live? | 10 | 3 layers: UI, data, infrastructure |
| **Experience** — instructor plants problems, students diagnose + fix | 50 | 2-3 planted bugs per student |
| **Label** — vocabulary | 15 | Define error terms, no AI |
| **Vibe Check** — 3-min oral per student | 20 | Explain own mini-app, no AI (criterion 2 practice) |
| Verify + homework brief | 10 | |

---

## Concept intro (10 min)

Instructor on whiteboard:

**Where does a problem live?** 3 common places:

1. **The UI** — the form doesn't submit, the button doesn't click
2. **The data** — the row didn't save, the user doesn't exist
3. **The infrastructure** — the deploy failed, the environment variable is missing

When something breaks, the first question is: **"Which of the 3?"**

Then show:
- UI problem → look in the browser (F12 → Console tab)
- Data problem → look in Supabase (Table Editor, Auth)
- Infra problem → look in Vercel / Lovable deploy logs

**No code is read today.** Students look at UIs: browser console, Supabase dashboard, Vercel log viewer. That is "operating" at this level.

---

## Experience phase (50 min) — the planted problems

**Before class:** instructor opens each student's mini-app from Day 4, and plants 2-3 realistic problems. See [`instructor/day-05-planted-problems.md`](../instructor/day-05-planted-problems.md) for the exact plants, but examples:

1. **Supabase Row Level Security turned off** → users can see other users' data
2. **Environment variable removed** → signup/login breaks on deploy
3. **Form validation removed** → users can submit empty data
4. **A column rename in Supabase that breaks the frontend**

Each student gets a different mix of 2-3 plants.

### Student protocol (per bug)

1. **Open your mini-app.** Try to use it as a user would.
2. **Notice what's broken.** Describe it in one sentence out loud.
3. **Where does it live?** UI / data / infra?
4. **Investigate the actual thing** — not the AI, first:
   - UI? → open browser console
   - Data? → open Supabase
   - Infra? → open Vercel / Lovable logs
5. **Then** go to AI with specifics: "The signup button clicks but Supabase shows no new user. What should I check in Supabase auth config?"
6. **Verify** the fix: redo the broken action, confirm it works.

**Instructor rule:** if a student jumps to AI without looking at the actual system, send them back. "Open Supabase first."

---

## Label phase (15 min)

Each student writes, no AI:

1. What is an **error message**? (one sentence)
2. What is a **log**? (one sentence)
3. What is an **environment variable**? (one sentence, use "like a password the server needs")
4. In your own words, where did the planted problem live for you — UI / data / infra?
5. What did you check first? Was that the right place?

Share with partner.

**Pocket answers:**

- **Error message** — a sentence the computer shows when something didn't work; it hints where to look
- **Log** — a running record of what the system did, used to figure out what happened
- **Environment variable** — a configuration value (like a password or URL) stored on the server, kept out of the code
- **Where does it live** — some problems are visible in the browser; some are in the database; some are in the deploy. Different places, different tools to look.

---

## Vibe Check phase (20 min) — **the key gate**

Each student, in turn, speaks for **3 minutes** about their own mini-app. **No AI open. No notes.** Topics:

1. What does your mini-app do? Who is it for?
2. When a user clicks "add", what happens in the database?
3. When a user signs up, what gets created where?
4. What was the planted problem today? How did you fix it?

Instructor rubric (track per student):

| Signal | Vibe coder likely | OK | Solid |
|---|---|---|---|
| Can describe app in own words | Generic marketing speak | Specific but surface | Specific and accurate |
| Knows what Supabase stores | "I don't know" | "The data" | Names the tables / columns |
| Explains the planted problem | "AI fixed it" | Describes the fix | Describes **why** the fix worked |

**Students flagged as vibe coders** get a note in the instructor's record. They have one more day (Day 6 capstone) to demonstrate otherwise.

See [`instructor/vibe-check-playbook.md`](../instructor/vibe-check-playbook.md).

---

## Verify + homework brief (10 min)

- Each student shows: mini-app URL + a 1-sentence description of their planted bug + the fix
- Homework assigned

---

## Common failures

| Failure | Fix |
|---|---|
| Student pastes error into AI without reading | **Stop them.** "Read it. Where does it live?" |
| Student says "AI said do X" when X is wrong | Push: "Did you check? What does Supabase actually show?" |
| Student fixes one plant but doesn't notice the second | Fine — don't tell them. Let them discover (next time they use the app) |
| Student insists their app is working, but it isn't | Have another student try it. The user experience is the test. |
| Vibe coder has memorized the right words but can't apply them | Flag. Day 6 is their last chance. |

---

## What this day is NOT

- Not a debugger / stack trace lesson (Course 1)
- Not an infrastructure lesson (devops, Course 3-4)
- Not a "root cause analysis" lecture

The goal is **operating basics**: when something breaks, look at the system, not just the AI.
