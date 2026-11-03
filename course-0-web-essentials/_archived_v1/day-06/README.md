# Day 6 — 🎓 Your Mini-App to Real Users

**Instructor plan.** 120 minutes. Goal: each student ships their **own idea** by end of class, with 3 real users signed up, and defends it in a 4-minute oral exam.

> **Day 6 is the capstone and the final gate.** The oral exam is where rubric criterion 2 is checked. **Do not shorten it, do not soften it.**

---

## What they understand by the end

- Pick a problem, bound the scope, ship, iterate — this is the whole job from here on
- "3 real users" is a different kind of done than "it works on my laptop"
- Explaining your own work out loud is a skill — and a filter

## What they can do by the end

- Scope a mini-app from idea → one page, one problem, one hour of build
- Ship it, deploy it, get real users
- Defend it: explain what it does, how, where the data lives, what they'd change

## What they can label by the end

**Capstone · scope · user feedback · iteration**

---

## 120-minute plan

| Block | Minutes | Activity |
|---|---|---|
| Homework review + capstone brief | 15 | Share Day 5 incident reports (1-2). Explain the scope rule for today. |
| **Pick + scope** (strict) | 10 | Each student writes their idea in 2 sentences. Instructor reviews each. |
| **Experience** — build and ship | 60 | Capstone mini-app. One problem. One page. |
| **Get 3 real users** | 10 | Message friends/family, get signups |
| **Final Oral** (criterion 2) | 20 | 4 min per student, no AI |
| Wrap, certificate, roadmap | 5 | What's next (Course 1) |

**Scaling note:** 4-min oral × student count = can't exceed the class block. If more than 5 students, run orals outside class or across days 6-7.

---

## Pick + scope phase (10 min)

Each student writes, on paper:

> **"My capstone mini-app is for [who] to [what one thing]. They will use it from [device] when they [when]."**

Example: *"My capstone mini-app is for my aunt to track her monthly rotating-savings-group contributions. She will use it from her phone on the 1st and 15th of each month."*

**Instructor reviews each one.** Reject anything with:

- More than one "and" ("A thing to do X **and** Y") → cut to one
- More than one user type ("For teachers and students") → pick one
- No concrete person
- Already exists as a popular app ("Instagram but for food") → fine, but still one problem one page

**Enforce brutally.** This is the single most important instructor action today. Scope creep is the top failure mode.

---

## Experience phase (60 min) — the build

Students use whichever tool they prefer (v0, Lovable, Bolt, etc.). The constraints:

1. **One page.** Not three.
2. **One table in Supabase.** Not three.
3. **Signup/login if needed, otherwise skip auth.**
4. **Live URL by minute 60 of this phase.**

**Instructor:** circulate hard. If a student is "about to add one more thing" at minute 45, say: **ship first, then add.** The URL has to work by minute 60.

---

## Get 3 real users (10 min)

Each student:
- Sends their URL to 3 real people (friends, family — NOT other students in this cohort)
- Asks them to **sign up and add 1 row**
- Shows the instructor the Supabase Users table with 3 real emails

**Why in class?** Because "I'll do it tonight" means it doesn't happen. 10 minutes, do it now.

**If a student can't reach 3 people in 10 min:** acceptable to have 2 real + 1 "pending by end of day". But instructor must see at least 2 real signups during class.

---

## Final Oral — Criterion 2 (20 min)

**4 minutes per student, serial. No AI. No notes.**

### Questions (pick 2-3 per student)

1. **What does your mini-app do? Who is it for?** (describe the user and the problem in your own words)
2. **Walk me through what happens when a user signs up.** (what gets created where?)
3. **Walk me through what happens when a user adds a row.** (what table, what columns, what gets stored?)
4. **Show me your Supabase table. Name the columns and explain each one.**
5. **Something in the UI** — point at a part of your app and ask them to explain it
6. **One thing you'd change next.** If they had another week, what would they build next?

### Grading signal

| Signal | Fail | Pass | Strong |
|---|---|---|---|
| Describes the specific user | Generic "users" | Named person or role | Named person + their specific situation |
| Describes data flow | "AI does it" / "it saves" | Names table + general flow | Names table, columns, triggers |
| Describes the fix from Day 5 | Can't recall | Describes it | Describes **why** it worked |
| Specific "next feature" | Vague ("make it better") | One specific feature | One specific feature + why |

**Pass criterion 2 = can clearly describe the user, the data, and one fix.** Vibe coders fail this.

**Grading happens live.** Mark pass/fail in your notebook per student.

---

## Wrap (5 min)

- Confirm who passed, who didn't (not individually in front of class — brief each student privately after)
- Mention Course 1 — same AI-build approach, but learning to **read code** so you can direct more precisely

---

## Common failures (day 6)

| Failure | Fix |
|---|---|
| Student picks capstone that's "a whole social network" | Reject at scope review. Must fit in 60 min. |
| Student can't get 3 real signups because testers won't bother | Accept 2 real + 1 pending; but no fewer |
| Student freezes in oral exam | Give them 30 seconds, then ask simpler question (e.g. "point at a column in Supabase and tell me what it stores") |
| Vibe coder gives polished answers that avoid specifics | Ask: "What's the name of your table?" If they can't say it, they fail criterion 2 |
| Student built something ambitious that doesn't quite work | **Not shipped = not passed.** Pretty failure is still failure. |

---

## Vibe coder outcome

Students flagged in Day 5 and failing today's oral have **not passed Course 0**. Options:

- Retake days 3-5 (which is where comprehension builds)
- Not pass; try again in next cohort

**No partial credit.** No "they tried hard." Soft-grading criterion 2 destroys the value of the whole course.

See [`instructor/vibe-check-playbook.md`](../instructor/vibe-check-playbook.md) and [`instructor/grading-policy.md`](../instructor/grading-policy.md).

---

## What success looks like

By end of Day 6, a passing student:

- Has shipped a capstone mini-app with 3+ real users
- Can describe, in their own words, what their mini-app does and how
- Can point at the data in Supabase and explain the columns
- Has a URL they can show in a WhatsApp message to a future employer, customer, or collaborator

That is a **builder**. Not a developer, not an engineer — a builder. The course delivered what it promised.
