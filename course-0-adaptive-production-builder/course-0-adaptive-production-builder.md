# Course 0 — Adaptive Production Builder
## Zero to Live Mini-App With Real Users (3 Weeks)

**Format:** 3 weeks · 6 days · 2 hours/day · **12 contact hours**
**Homework:** 4 hours/day · **24 homework hours**
**Mission:** Turn someone with **no programming background** into a **builder** who ships a live mini-app with real users — using AI tools, without writing code.

Taught at **theBuilderPros** workshops as the entry point before Course 1.

---

## Core Principle

> **The student does not write code. The AI builds. The student directs, verifies, ships, and understands enough to keep going.**

This course is **tool-first, output-first**. Every day ends with a URL on the internet. No day is a lecture.

### The Three Phases of Every Day

| Phase | Means | Why |
|---|---|---|
| **1. Experience** | Hands-on build, first thing | Confidence comes from doing, not watching |
| **2. Label** | Name what you just did, in your own words, **without AI** | A thing you cannot name is a thing you do not own |
| **3. Transfer** | Where else does this pattern show up? | The tools change; the pattern stays |

**Label is the heart of this course.** A student who ships but cannot label is a **vibe coder** — the biggest risk this course is designed to prevent.

---

## How the course is structured

| Term | Means | How many |
|---|---|---|
| **Week** | Two days | 3 |
| **Day** | One 2-hour class meeting | 6 |
| **Mini-app** | A live, usable thing that solves one problem | 1+ per day |
| **Ship** | Live URL another person can open | mandatory, every day |

A day is 120 minutes. It always ends with a URL. When content doesn't fit, cut content — never cut shipping.

---

## The Mini-App

The **mini-app is the unit of contribution** in this course. Not a page, not a prototype, not "learning" — a mini-app that:

- Solves **one** problem
- Is **live** on the internet (shareable URL)
- Can be **used** by another person
- The student can **explain** in one sentence

Students ship a different mini-app in every day and in every homework. By day 6, each student has shipped **8-10 mini-apps**. By then, they know what shipping feels like — not as a one-time win, but as a habit.

---

## Delivery

Homework is delivered through **Google Classroom** — see [`instructor/classroom-setup.md`](instructor/classroom-setup.md).

Submissions are **links and text, never files**. The thing itself is on the internet. Homework is due the evening before the next day — every day opens with a 15-minute review of homework ships.

> Classroom cannot grade the Label phase. The oral check in class is the only way to catch vibe coding.

---

## Audience & Tools

**Audience:** No programming background. No prior web/app experience. Owns a laptop with Chrome. Can read basic English.

### Tool Stack

| Need | Tool | Why this one |
|---|---|---|
| UI generation | **v0.dev** | Best UI generator today; Vercel-owned; free tier works |
| Full-stack mini-app | **Lovable.dev** | Database + auth + deploy, click-based |
| Database + Auth | **Supabase** | Free tier, click-based UI, visible rows |
| Hosting | **Vercel** (and Lovable's built-in) | Click deploy; drag-and-drop; free |
| AI chat | **Claude** or **ChatGPT** | Student's choice |

**5 accounts, 1 browser.** No code editor is installed in Course 0. No terminal is opened. No package is installed. These are Course 1.

Tools evolve. v0 and Lovable are the best today; if a better tool exists next year, swap. The **principle** (AI builds, student directs, ship fast, label clearly) is what stays.

---

## Scope

### Included

Deploying · Prompting · Mini-app pattern · Data persistence (Supabase) · Authentication (via Lovable/Supabase) · Reading errors (as a user, not an engineer) · Iterating from feedback · Vocabulary (URL, deploy, database, auth, API, component, prompt)

### Explicitly excluded

| Excluded | Reason | Where it lives |
|---|---|---|
| Writing code | Not the goal | Course 1 |
| Reading code line-by-line | Not the goal | Course 1 |
| Variables, loops, functions | Not needed to ship a mini-app | Course 1 |
| HTML / CSS / JavaScript syntax | AI writes it; student doesn't read it | Course 1 |
| SQL | Supabase is clicked, not queried | Course 1 |
| Terminal / git | Not needed in Course 0 | Course 1 |
| Framework knowledge (React, Next.js) | Not needed to ship | Course 1 / 2 |

---

## The 6 Days

### Week 1 — See the Picture, Ship Fast

#### Day 1 — Bound Your Context, Ship Your First Mini-App
**Experience:** Open v0.dev → prompt a landing page → deploy to Vercel → open URL on phone
**Label:** URL · deploy · mini-app · prompt · tool
**Transfer:** The same pattern (prompt → generate → deploy) works for every tool you'll see
**🚀 Ships:** A live personal landing mini-app, URL on the internet
**Homework:** Ship a second mini-app for a friend or family member (different theme)

> **Day 1 live URL is non-negotiable.** The whole course is built on the first-day "I did this" feeling.

#### Day 2 — Ask Two Questions, Prompt With Precision
**Experience:** Same ask, three prompts (vague → better → precise), compare outputs
**Label:** Specification · constraint · prompt pattern · "what problem, how to use"
**Transfer:** The two questions ("what problem does it solve, how do I use it?") work for choosing tools, not just prompting
**🚀 Ships:** A problem-focused mini-app (e.g. "a page that tells my customers my business hours")
**Homework:** Interview 1 person, ship a mini-app that solves their problem

---

### Week 2 — Data & Users

#### Day 3 — Stand on Giants, Mini-App With a Database
**Experience:** Lovable + Supabase → build a todo/notes mini-app → write a note → refresh → it's still there
**Label:** Database · row · persistence · "app with memory"
**Transfer:** Any app that remembers anything has a database somewhere
**🚀 Ships:** A data-driven mini-app (todo, notes, journal, inventory)
**Homework:** Ship a second data mini-app on a different topic; verify rows appear in Supabase

> **Day 3 is the first wall.** Up to now, students thought a webpage was the app. This day teaches that the app lives in the data.

#### Day 4 — Build for Users, Login & Multi-User
**Experience:** Add signup/login to the day-3 mini-app → sign up as "yourself" and "a friend" → each sees only their own data
**Label:** Authentication · user · session · "who is asking"
**Transfer:** Every app with accounts does this — the pattern is the same whether it's Instagram or your mini-app
**🚀 Ships:** A multi-user mini-app
**Homework:** Share the URL with 2 friends, have them sign up and use it, report what happens

---

### Week 3 — Operate & Ship for Real

#### Day 5 — Operate Like a Pro: Read Errors, Modify, Ship Again
**Experience:** Instructor plants 2-3 realistic breakages in the student's day-4 mini-app → student diagnoses + fixes
**Label:** Error · log · deploy failure · environment · "where does the problem live"
**Transfer:** Every production app breaks eventually; operating it is as much the job as building it
**🚀 Ships:** Fixed and improved version of the day-4 mini-app
**Homework:** Add one new feature to your mini-app, document (in writing) what broke and how you fixed it
**🔺 Vibe Check:** Student explains their own mini-app aloud for 3 minutes, no AI open

> **Day 5 is where confidence breaks.** The instructor plants problems that AI's first response won't fix — this is deliberate. A student who can only prompt their way out is a vibe coder.

#### Day 6 — 🎓 Your Mini-App to Real Users
**Experience:** Student picks their own idea → scope it to **one problem, one page** → ship by end of class → share with 3 real people
**Label:** Capstone · scope · user feedback · "what next"
**Transfer:** This is every mini-app from here on — pick a problem, bound the scope, ship, iterate
**🎓 Ships:** Capstone mini-app with 3 real users (verified by end-of-day)
**🔺 Final Oral:** 4-minute explanation per student — what the mini-app does, how it works, what you'd change next (rubric criteria 2, 4)

> **Capstone scope is capped by rule.** One problem, one page, 3 real users. Scope creep is how students fail day 6.

---

## Pass Rubric

**Shipping is not a pass. Shipping + understanding is.** All four required.

| # | Criterion | How it's checked |
|---|---|---|
| 1 | **At least 3 live mini-apps on different domains** (across days 3, 4, 6) | Open the URLs |
| 2 | **Explain your own capstone mini-app** — what it does, how it works, where the data lives, what happens when someone signs up | Live oral, day 6, no AI |
| 3 | **Fix a planted problem in your own mini-app** (day 5) | Live, instructor-planted, 15 min |
| 4 | **Capstone has 3 real users** (not the student, not another classmate, not the instructor) | Signup list in Supabase |

### Vibe Check (gating)

If a student passes criterion 1 but fails criterion 2 or 3, they are a **vibe coder** and have not passed this course. No partial credit. The remediation is to repeat days 3-5.

---

## Rules for Students

1. **Ship every class.** If you leave class without a URL, you did not finish class.
2. **Explain what you built, out loud, without the AI open.** If you can't, you haven't built it yet.
3. **Scope smaller.** One problem, one mini-app. "The next Facebook" is not a scope.
4. **Try to fix it yourself before asking AI the third time.** First try: AI. Second try: AI with better context. Third try: look at the actual thing yourself.
5. **The URL is the proof.** Not a screenshot. Not "it works on my laptop." A URL another person can open.

---

## The Biggest Risk

**The vibe coder** — the student who ships fast, cannot explain, and will be helpless the moment the AI's first fix doesn't work.

The defenses:

- **Label phase every class** — in their own words, no AI
- **Class 5 planted problems** — AI cannot one-shot all of them
- **Rubric criterion 2** — oral exam on their own capstone, no AI

Soften any of those, and the course is worthless. The whole point is that students leave able to **keep going** when the next tool, next error, next bug comes.

---

## Roadmap

| Course | Content | Writes code? |
|---|---|---|
| **Course 0** (this one) | Adaptive production builder — ship a mini-app with real users, using AI tools | No |
| **Course 1** | AI-assisted full-stack — read code, direct code, verify code | Reads yes, writes mostly no |
| **Course 2** | Integration — third-party APIs, OAuth, webhooks, payments | Yes |
| **Course 3** | Architecture — modular monolith, refactoring, boundaries | Yes |
| **Course 4** | Scale — caching, queues, observability | Yes |

---

## Final Outcome

In 3 weeks, the student becomes a **builder**: someone who can take an idea to a live, usable mini-app on the internet, with real users, using AI tools — and who understands enough of what's happening to keep going when the AI gets it wrong.

**This course does not produce a developer.** 36 hours doesn't produce one. It produces someone who has shipped, who has had their first fix fail, and who kept going anyway. For many students, that is the hardest and most useful thing anyone could give them.

### Realistic results, per 10 students

| Outcome | Expected |
|---|---|
| At least 3 live mini-apps shipped | 9 |
| Pass criterion 2 (explain own capstone) honestly | 6-7 |
| Pass with real users (criterion 4) | 5-6 |
| Flagged as vibe coder (criterion 2 fail despite shipping) | 2-3 |
| Drop out | 1-2 |

5-6 genuine passes out of 10 is a good result for 36 hours. Do not inflate by softening the oral exam. The moment you do, the vibe coders "pass" and the course has produced nothing.

---

## Materials

| Path | Contents |
|---|---|
| [`README.md`](README.md) | Course index |
| [`course-0-adaptive-production-builder.md`](course-0-adaptive-production-builder.md) | This syllabus (source of truth) |
| [`class-01/`](class-01/) ... [`class-06/`](class-06/) | Per-class: instructor plan, exercise, homework |
| [`instructor/tool-setup.md`](instructor/tool-setup.md) | Account setup for students (v0, Lovable, Supabase, Vercel) |
| [`instructor/rubric.md`](instructor/rubric.md) | How to run each criterion |
| [`instructor/pacing.md`](instructor/pacing.md) | What to cut when classes overrun |
| [`instructor/vibe-check-playbook.md`](instructor/vibe-check-playbook.md) | How to spot and intervene on vibe coders |
| [`instructor/class-05-planted-problems.md`](instructor/class-05-planted-problems.md) | The 2-3 problems instructor plants in class 5 |
| [`instructor/classroom-setup.md`](instructor/classroom-setup.md) | Google Classroom setup |
| [`AGENT.md`](AGENT.md) | Rules for AI agents editing this course |
