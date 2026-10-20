# Grading Policy — Pass, Fail, Vibe Coder, Incomplete

How the final grade is determined for Course 0.

---

## Three outcomes per student

| Outcome | Means | What to tell them |
|---|---|---|
| **PASS** | All 4 criteria met | "You've completed Course 0. You're a builder." |
| **VIBE CODER** | Criterion 1 and 4 met, but 2 or 3 fail | "You shipped. But right now you can't operate what you shipped. Here's the remediation." |
| **INCOMPLETE** | Criterion 1 failed (didn't ship enough) | "You haven't shipped enough yet. Here's what to do before the next cohort." |

---

## Pass requirements (all 4)

1. **3+ live mini-apps shipped** across the course (days 3, 4, 6 at minimum)
2. **Explain own capstone** in 4-min oral, no AI (criterion 2)
3. **Fixed planted problem** in Day 5 (criterion 3)
4. **3 real users** on capstone by end of Day 6 (criterion 4)

**All four, no substitutions.**

---

## Vibe Coder outcome

**When:** Student passes criterion 1 and 4 (shipped a lot, has real users) but **fails criterion 2 or 3** (can't explain or can't operate).

**What this means:**
- They have shipping velocity
- They lack understanding
- The moment their app breaks seriously, they will not be able to fix it alone

**Response:**

1. **Honest, private conversation** at end of Day 6:
   > "You shipped more mini-apps than most of the class. That's real skill. But the oral exam is about whether you understand your own app, and today you couldn't tell me where your data lives or name your table's columns. In this course, that's a fail. Not because what you built is bad — because the course promises you can keep going after it ends, and right now I don't think you can."

2. **Specific remediation plan:**
   - Retake days 3-5 in a future cohort, OR
   - Self-study: open each of your mini-apps' Supabase, write down every table and column, explain what each does. Send me the document. If it's solid, I'll re-grade.
   - **Not** "try harder next time with no plan" — that doesn't help.

3. **Classroom record:**
   > "Vibe Coder — ship velocity high, criterion 2 fail. Recommended: redo days 3-5. Can re-attempt oral in [cohort N+1]."

---

## Incomplete outcome

**When:** Student didn't ship enough (fewer than 3 live mini-apps) or didn't complete the capstone.

**What this means:**
- They didn't finish the course mechanically
- Not necessarily a vibe coder — just didn't put in the time

**Response:**

- Note what's missing specifically (e.g. "Didn't ship Day 3 or Day 4 homework; capstone not deployed by end of Day 6")
- Offer to complete asynchronously, with a hard deadline (2 weeks post-course)
- If they do complete: run oral exam over Zoom, pass/fail on criteria 2 and 3 as normal
- If they don't: incomplete stands

---

## No partial credit on criterion 2

**This is non-negotiable.** The oral exam is binary: pass or fail.

Reasons to be strict:

- "They tried hard" doesn't equal understanding
- "They're nervous" is accommodated by re-asking the question in simpler form or in Burmese — not by lowering the bar
- "They almost had it" — if they almost had it, they'll have it on the retake. Right now, no.

**Soft-grading criterion 2 is the single thing that destroys this course.** The whole value proposition is that passers can keep going. Give that away, and the certificate means nothing.

---

## What counts as "3 real users" (criterion 4)

- Must be 3 distinct email addresses in Supabase Authentication → Users
- Must NOT be:
  - The student themselves
  - Other students in this same cohort
  - Obviously fake addresses (e.g. `test1@test.com`, `test2@test.com`)

**Allowed:**
- Family members, friends, colleagues
- Classmates from previous Course 0 cohorts (if truly reused — rare)
- Random internet people the student recruited (great sign)

**Grace:** 2 real + 1 pending within a week is OK. 0 real means fail criterion 4.

---

## Attendance

- Missing 1 day: must self-study the material and show the instructor the shipped mini-app from that day's homework
- Missing 2+ days: cannot pass — must retake or do serious makeup
- Missing Day 6: cannot pass without rescheduling the oral exam

**Course 0 is 12 contact hours.** Missing 2 is 1/6 of the course. That's a lot.

---

## Grade reporting

In the instructor notebook per student:

```
Hein Soe (hein@example.com):

Criterion 1 (3+ shipped): PASS (5 mini-apps across days 1,2,3,4,6)
Criterion 2 (oral exam):  PASS — named all 4 columns in own Supabase, described signup flow accurately
Criterion 3 (Day 5 fix):  PASS — fixed Plant #1 (RLS) in 10 min, checked Supabase before AI
Criterion 4 (3 real users): PASS — 4 real signups by end of Day 6

OVERALL: PASS

Notes: Strong — grade for Course 1 enrollment.
```

```
Student X (x@example.com):

Criterion 1 (3+ shipped): PASS (3 mini-apps, days 3, 4, 6)
Criterion 2 (oral exam):  FAIL — couldn't name table columns, said "the AI handles the data"
Criterion 3 (Day 5 fix):  PASS — fixed Plant #3 (empty validation)
Criterion 4 (3 real users): PASS — 3 real signups

OVERALL: VIBE CODER

Remediation: redo days 3-5 next cohort, OR submit written walkthrough of own Supabase schema for all mini-apps.
```

---

## Certificate language

If a cohort gets certificates, the language must be honest.

**For PASS:**
> "has completed Course 0 — Adaptive Production Builder, demonstrating the ability to ship live mini-apps with real users and explain how they work."

**NOT:**
- "...is now a web developer" (false)
- "...can build any software" (false)
- "...is job-ready" (false — Course 0 doesn't produce engineers)

Over-promising on the certificate undermines the course and the student. Underpromising is kinder than underdelivering.

---

## Expected pass rate (realistic)

Per 10 students:

| Outcome | Count |
|---|---|
| PASS | 5-6 |
| VIBE CODER | 2-3 |
| INCOMPLETE | 1-2 |

**5-6 real passes out of 10 is a good result.** Do not inflate it. The 2-3 vibe coders are the honest filter — this is the course working as designed.

If you ever grade 10 out of 10 passing, you've softened the oral exam. Pull back.
