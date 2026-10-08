# AGENT.md

Instructions for any AI agent working in this repository.

## What this repository is

Teaching materials for **Course 1 — AI-Assisted Full-Stack Development**: a 6-week,
12-day course that turns a student with no programming background into a
**full-stack builder** — someone who can take an idea to a live production app
using an AI agent, and who understands the code they asked for.

This repo contains curriculum, not application code. The only runnable code here
is deliberately broken teaching material (`day-04/broken/`, `day-10/broken/`).

## Vocabulary — do not mix these up

| Term | Means | How many |
|---|---|---|
| **Day** | One 2-hour class meeting. Folder `day-NN/` | 12 |
| **Session** | A teaching block inside a day, numbered `N.M` | 42 |
| **Week** | Two days | 6 |
| **Checkpoint** | A live/oral exam, graded by observation | 3 |

A day is never called a session. A session never gets its own folder. When a day's
content changes, update its `## Sessions in this day` table in the same pass — that
table and the timing table must agree.

> `day-09` also uses "session" in its original sense — a logged-in user session.
> That is correct there. Do not rename it.

## Non-negotiable principles

These are the design of the course. Do not "improve" them away.

1. **Knowledge first.** The agent writes code. The student understands, directs,
   verifies, and owns it. Never add syntax drills, loop exercises, or
   "type this out 20 times" assignments. They were removed on purpose.
2. **Three layers.** Every day must teach across `Understand → Direct → Verify`.
   A day plan missing the Verify layer is incomplete.
3. **Never soften the rubric.** Criteria 2, 3, and 4 (explain your code, locate a
   bug unaided, spot bad agent output) are the entire value of the course.
   Do not add retakes, partial credit, or "effort" allowances to them.
4. **No algorithms, no Big-O, no data structures.** Out of scope. This is a
   building course, not interview prep.
5. **Honesty over marketing.** The course produces a builder, not a hireable
   junior engineer. Never upgrade that claim anywhere in this repo.

## Repository layout

```
AGENT.md                              this file
README.md                             course index
course-1-ai-assisted-fullstack.md     the syllabus (source of truth)
program-roadmap-levels-1-8.md         long-term roadmap, Courses 1-4 (Burmese)
project/spec.md                       the fixed student project
instructor/                           rubric, oral exam bank, grading policy
day-00-prework/ .. day-12/            day materials
```

## Day folder contract

Every `day-NN/` contains exactly:

| File | Audience | Contains |
|---|---|---|
| `README.md` | instructor | Session table, pacing, minute-by-minute plan, the three layers, teaching notes, common failures |
| `exercise.md` | student | What they do in class |
| `homework.md` | student | What they do at home, with a done-check |

`day-04/` and `day-10/` additionally contain `broken/` — deliberately broken code.
Answers live in `instructor/`, never beside the broken code.

## Google Classroom

Homework is delivered as Google Classroom assignments. Every `homework.md` is written
to be **copy-pasted directly into a Classroom assignment** and must keep this header:

```
**Google Classroom assignment**
**Points:** 10
**Due:** evening before the next day
**Submit:** <exact artifacts>
```

Rules when editing homework files:

- Submissions are **links and text**, never file uploads. Code lives in GitHub.
- Every student uses **one** repository, `expense-tracker`, for the entire course.
- Homework is always due the evening before the next day — students must arrive
  having done it, because every day opens with a 15-minute review of it.
- End every assignment with a **Done when** checklist the student can self-check.

**Classroom cannot grade 4 of the 6 rubric criteria.** Criteria 2, 3, 4, and 6 are oral
or live, in person. Classroom records the result; it never produces it. Never rewrite a
checkpoint into something auto-gradable — that is the exact failure this course is
designed to prevent. See `instructor/classroom-setup.md`.

## Pacing

Every `day-NN/README.md` declares `## Pacing` with **Fixed** / **Elastic** / **Cut line**.
Days are 120 minutes and never change length — when content does not fit, a *session*
moves to homework. Days 8 and 9 are genuinely overloaded; days 2 and 5 have spare
capacity. Day 12 depends on class size because the oral exam is serial.

Never cut a checkpoint, and never cut a verify session to protect a build session.
Students can finish building at home; they will never verify at home.

See `instructor/pacing.md`.

## Day timing (120 minutes)

| Block | Minutes |
|---|---|
| Homework review | 15 |
| Concept | 25 |
| Build | 60 |
| Verify + wrap | 15 |
| Buffer | 5 |

Keep this shape. If content does not fit, cut content — do not extend the day.

## Writing conventions

- **English only.** The syllabus and all day materials are English.
  (`program-roadmap-levels-1-8.md` is the one Burmese file and stays that way
  unless the owner says otherwise.)
- Write for someone who has never programmed. Define a term the first time it appears.
- Prefer tables over prose lists. Prefer concrete commands over descriptions.
- Never use emoji except the established markers: `🚀` ships, `🎓` capstone, `⚠️` warning.
- Homework always ends with a **Done when** checklist the student can self-check.
- Instructor notes always include **Common failures** — what actually goes wrong in the room.

## The fixed project

Days 6–11 build **one** app: the Expense Tracker in `project/spec.md`.
Everyone builds the same schema. Students may re-theme labels in day 12 only.

Do not let the project vary per student in days 6–11 — divergent apps make
in-class debugging impossible to run as a group.

## When adding or editing a day

1. Read `course-1-ai-assisted-fullstack.md` first. It is the source of truth.
2. Keep the day's Understand / Direct / Verify content aligned with the syllabus.
3. If you change what a day teaches, update the syllabus in the same pass.
4. Do not add new days. The course is 12 days and 24 contact hours.

## Known hard points

- **Weeks 4–5 (days 7–10)** are the drop-out cliff. Failures become silent —
  wrong data, open routes, nothing throws. Materials for these days need more
  verification steps, not more content.
- **Day 1** only works if Day 0 pre-work is genuinely finished. If a cohort
  arrives unprepared, day 1 becomes setup and the course loses a day.
- **Agent-written tests** are often assertion-free. Day 10 exists to catch this;
  never weaken the "break the code to prove the test works" exercise.

## Verified teaching material

The broken code is verified to behave as its answer key claims. If you edit it, re-verify.

| File | Must |
|---|---|
| `day-04/broken/01-typo.js` | print `undefined: 1200`, exit 0 |
| `day-04/broken/02-async.js` | crash, `not iterable`, exit 1 |
| `day-04/broken/03-off-by-one.js` | exit 0, return 4 items, last one `undefined` |
| `day-04/broken/04-type.js` | exit 0, print `total: 03502001000` |
| `day-04/broken/05-swallow.js` | exit 0, print `parsed 2 of 3 rows` |
| `day-10/broken/01-total.test.js` | still pass when `monthlyTotal` returns `0` |
| `day-10/broken/03-validation.test.js` | still pass when `validateAmount` is empty |
| `day-10/broken/02-ownership.test.js` | fail when the filter is removed |
| `day-10/broken/04-negative.test.js` | fail when `<=` becomes `<` |

Files 03/04 of day-04 and tests 01/03 of day-10 are the *silent* cases. They carry
the day. Do not "fix" them.
