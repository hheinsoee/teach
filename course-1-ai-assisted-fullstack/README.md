# Course 1 — AI-Assisted Full-Stack Development

**6 weeks · 12 days · 2 hours/day · ~60-72 hours total**

Full syllabus: [`course-1-ai-assisted-fullstack.md`](course-1-ai-assisted-fullstack.md)

---

## 📦 Status: Future / On-Demand

**This course is NOT currently being taught.**

Course 0 (Web Essentials) is the active course for the Nov 2026 cohort. Course 1 opens when:

- Course 0 graduates signal readiness (3+ interested)
- Hein has bandwidth for a smaller cohort (5-8 students)
- Target cohort: **Feb 2027 or later**

---

## What Course 1 is about

**Real-world professional practice.** Course 0 taught shipping with AI. Course 1 teaches **what professional developers actually do**:

- Full-stack architecture (frontend + backend + database + auth)
- Reading other people's code
- Code review workflow
- Testing — writing tests, breaking code to prove tests work
- Attacking your own app for security holes
- Production deployment, logs, monitoring
- Git diffs, pull requests, debugging workflow
- Defending your data model under oral examination

**Course 1 produces a full-stack builder** — someone who can take an idea to a live production app alone, and defend what they built when AI gets it wrong.

---

## Prerequisites (hard)

- ✅ **Course 0 — Web Essentials complete**, OR equivalent self-study
- ✅ Can read HTML, CSS, JavaScript fluently
- ✅ Committed to 60-72 hours over 6 weeks
- ✅ Comfortable with English documentation (MDN, Stack Overflow)
- ✅ Attitude: "I want to defend my code, not just ship it"
- ✅ Not scared of terminal / CLI

---

## Who this is for

- ✅ Course 0 graduates who want to go deeper
- ✅ Career changers from non-tech (bootcamp alternative)
- ✅ Hobby programmers wanting structured depth
- ✅ Designers/PMs/QAs who want to understand how code actually works
- ✅ University students building portfolio apps

## Who this is NOT for

- ❌ Absolute beginners (that's Course 0)
- ❌ People wanting a certificate without doing the work
- ❌ Vibe coders — the hard rubric will fail them
- ❌ Students expecting to become a junior engineer on a team (that's 2+ years)
- ❌ Students without time for 60-72 hours

---

## The hard rubric

Course 1 has **6 criteria, all required**:

1. Live app with frontend + backend + database + auth
2. Explain any file you asked AI to write (random oral exam, no AI)
3. Read an error in class, locate the problem without AI
4. Find what's wrong in agent-generated code
5. Prove protected endpoints are protected
6. Defend your data model under oral examination

**Realistic expectation**: 5-6 of 10 pass honestly. 2-3 flagged as vibe coders. 1-2 drop out.

**This is the design.** Soft grading destroys the course's value.

---

## Tech stack

| Layer | Tool |
|---|---|
| Language | JavaScript (Node.js) |
| Frontend | Plain HTML/CSS/JS (no framework) |
| Backend | Express |
| Database | SQLite (file-based) |
| Auth | `express-session` + `bcrypt` |
| Tests | `node --test` (built-in) |
| Version control | Git + GitHub |
| Hosting | Railway |

**Deliberately simple.** No framework, no managed services, no scaffolding. Every file is one the student asked for.

---

## The project

**Expense Tracker.** Fixed scope. Every student builds the same schema. Re-theming allowed in Day 12 only.

See [`project/spec.md`](project/spec.md).

---

## Relation to Course 0

| | Course 0 | Course 1 |
|---|---|---|
| Audience | Absolute beginner | Course 0 grad |
| Tech | Browser only | Full-stack |
| Code | Read with AI | Read + direct + verify |
| Grading | Soft markers | Hard rubric + oral exam |
| Produces | Inspired beginner | Full-stack builder |
| Vibe coders | Welcomed | Filtered out |

---

## Materials (reference, not actively taught)

| File | Purpose |
|---|---|
| [`course-1-ai-assisted-fullstack.md`](course-1-ai-assisted-fullstack.md) | Full syllabus |
| [`AGENT.md`](AGENT.md) | AI agent rules |
| `day-00-prework/` ... `day-12/` | Per-day plans |
| `instructor/` | Rubric, pacing, grading policy, oral exam bank |
| `project/` | Expense Tracker spec |
| `template/` | Starter repo contents |

---

## When Course 1 opens

Hein will announce via theBuilderPros when:
- A Course 0 cohort completes with 3+ interested graduates
- Hein has capacity for a 5-8 student intensive

Until then, Course 1 materials remain available for self-study by advanced Course 0 graduates.

For now: **go to [Course 0 — Web Essentials](../course-0-web-essentials/)** to start.
