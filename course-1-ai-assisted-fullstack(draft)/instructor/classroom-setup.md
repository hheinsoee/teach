# Google Classroom Setup

## Class structure

**Class name:** AI-Assisted Full-Stack — Course 1
**Topics** (Classroom sidebar, in this order):

| Topic | Contains |
|---|---|
| `Start Here` | Syllabus, project spec, rules, grading policy |
| `Week 1 — Mental Model` | Days 1–2 |
| `Week 2 — Direct & Debug` | Days 3–4 |
| `Week 3 — Build the Front` | Days 5–6 |
| `Week 4 — Build the Back` | Days 7–8 |
| `Week 5 — Make It Real` | Days 9–10 |
| `Week 6 — Ship & Judge` | Days 11–12 |
| `Checkpoints` | The three oral/live exams |

## Post to `Start Here` before week 1

| Item | Type | Source file |
|---|---|---|
| Course syllabus | Material | `course-1-ai-assisted-fullstack.md` |
| The project you will build | Material | `project/spec.md` |
| Rules for students | Material | syllabus § Rules for Students |
| How you pass this course | Material | `instructor/grading-policy.md` |
| **Day 0 — Setup** | **Assignment** | `day-00-prework/homework.md` |

Post Day 0 **at least 5 days before** the first class. Day 1 does not work
if the environment is not ready.

## Grading categories

| Category | Weight | Notes |
|---|---|---|
| Homework | 40% | 12 assignments × 10 points |
| Checkpoints | 60% | 3 live exams, pass/fail each |

Weights are for reporting only. **A student who fails any checkpoint fails the course,
regardless of total points.** Classroom cannot express this — say it in `Start Here`
and in day 1, out loud.

## What Classroom can and cannot grade

| Rubric criterion | Gradable in Classroom? |
|---|---|
| 1 — live app with auth | Yes — submit the URL |
| 2 — explain any file you asked for | **No** — oral, in person |
| 3 — locate a bug without the agent | **No** — live, in person |
| 4 — spot bad agent code | **No** — live, in person |
| 5 — protected endpoint is protected | Yes — submit terminal output |
| 6 — defend the data model | **No** — oral, in person |

**Four of six criteria cannot be graded through Classroom.** A link submission proves
an app exists; it proves nothing about who understands it. Use Classroom for delivery
and record-keeping, never as the exam.

Create the three checkpoints as assignments worth 1 point, marked after the live
day. Attach no student-submitted file — the grade is your observation.

| Checkpoint | After day | Covers |
|---|---|---|
| `Checkpoint 1 — Read the Error` | 4 | criterion 3 |
| `Checkpoint 2 — Review the Code` | 10 | criterion 4 |
| `Checkpoint 3 — Final Oral` | 12 | criteria 2, 6 |

## Assignment settings

- **Due date:** the evening before the next day. Students must arrive having done it.
- **Points:** 10 for homework, 1 for checkpoints.
- **Submission:** link or text, per assignment. Never ask for file uploads of code —
  code lives in GitHub, and asking for zip files teaches the wrong habit.
- **Late work:** accepted until the next day starts, at half points. After that, zero.
  The material is cumulative; late work past one day is worthless to them.

## Reusing a cohort

Classroom's "reuse post" copies assignments but not due dates. Re-set every due date
when cloning, and re-check that the pinned repo links point at the new cohort.

## Repository link convention

Every student creates **one** repository, named `expense-tracker`, public, on day 1.
They submit the same repository link all course. Do not accept a new link each week —
the point is a single history you can read in day 5 and grade in day 12.
