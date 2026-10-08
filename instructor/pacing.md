# Pacing

Some days finish early. Two do not fit at all. This file says what to do about it.

## The principle

> **Never cut a day. Cut a session.**

Every day is 120 minutes and that does not move — the calendar is fixed. What moves is
*which sessions happen in class* and which finish as homework. Each `day-NN/README.md`
declares three things:

| | |
|---|---|
| **Fixed** | Must happen in class, at full length. Cutting these breaks a later day |
| **Elastic** | Absorbs overrun. Can be finished at home |
| **Cut line** | What goes first when you are behind |

Decide the cut before the day starts, not at minute 100 with the room watching.

## The whole course at a glance

| Day | Title | Fit |
|---|---|---|
| 1 | The Whole Map | FITS — starter template removes the scaffolding cost |
| 2 | Reading Code | FITS — now carries Money & Dates |
| 3 | Directing an Agent | FITS |
| 4 | Reading Errors | TIGHT — 5 bugs plus a checkpoint |
| 5 | Git, Diffs & Review | FITS — now carries Reading SQL |
| 6 | Frontend | FITS |
| 7 | Backend & API | FITS — UI rewiring is homework |
| 8 | Database | FITS — was overloaded |
| 9 | Auth & Security | FITS — library setup is pre-work |
| 10 | Proving the Code Works | FITS |
| 11 | Production | FITS |
| 12 | Architecture & Judgment | **CLASS SIZE** — the oral exam is serial |

## What was repaired, and how

The schedule used to need its cut lines every week. That is a design fault, not a
teaching skill. Five moves fixed it:

| Move | From | To | Freed |
|---|---|---|---|
| Money, text-vs-number, dates | Day 8 | Day 2 | 10 min |
| Reading SQL | Day 8 | Day 5 | 15 min |
| Auth library installation | Day 9 class | pre-work after Day 8 | 35 min |
| Rewiring the UI to the API | Day 7 class | homework | 15 min |
| Scaffolding a project | Day 1 class | starter template | 20 min |

Each move also improved the teaching:

- **Money and dates belong with data types.** `0.1 + 0.2` is a day-2 fact. Arriving at
  day 8 it is recall, not a new idea — which is why the schema decision gets easier.
- **Reading SQL belongs with reading diffs.** Day 5 is the review-skills day. Reviewing
  a query you did not write is the same muscle.
  *Tradeoff:* they read SQL before they have a table. Draw the table on the board.
- **Auth installation is configuration, not learning.** Redirect URLs failing in class
  taught nobody anything. Pre-test the steps yourself and hand them out.
- **Rewiring a UI is one agent instruction.** It never deserved class time.

The cut lines still exist, but they are now for a bad day — not for every week.

## Where the spare time is

Days 2 and 5 usually finish early. Do not release the class.

Days 2 and 5 absorbed the overload and now run full. The remaining slack is day 3 and
day 11, both of which finish 10–15 minutes early.

| Spare on | Spend it on |
|---|---|
| Day 3 | Extra prompt-comparison rounds — cheap and high value |
| Day 11 | Reading real log output together |

Day 4 is still TIGHT. If you are ahead on day 3, start the stack-trace reading there.

## Day 12 and class size

Checkpoint 3 is **6 minutes per student, run one at a time**. It does not parallelise —
it is you, listening.

| Students | Exam time | Fits in 120 min? |
|---|---|---|
| 8 | 48 min | yes, comfortably |
| 10 | 60 min | yes |
| 12 | 72 min | only if 12.1 and 12.2 compress to 25 min |
| 15 | 90 min | **no** |

**Above 12 students:** run the oral exams as booked 10-minute slots during the final
week, outside class, and use day 12 entirely for the over-engineering exercise and demos.
Do not shorten the exam to 3 minutes — a 3-minute oral cannot distinguish a student who
understands from one who memorised one file, which is the only thing it exists to do.

## The rule when you are behind

In order:

1. Cut the elastic session to homework
2. Cut the cut-line item
3. Shorten the homework review at the start of the next day from 15 min to 5

Never:

- Cut a checkpoint
- Cut a verify session to protect a build session
- Let students take an unreviewed shortcut to "stay on schedule"

The build is the part they can finish at home. The verification is the part they will
never do alone.
