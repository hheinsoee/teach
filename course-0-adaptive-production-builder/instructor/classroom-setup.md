# Google Classroom Setup

Course 0 uses Google Classroom for homework distribution + submission tracking only. **Grading criterion 2 and 3 happen live, in person.**

---

## Setup checklist (before Day 1)

1. **Create a new Google Classroom class**
   - Class name: `Course 0 — Adaptive Production Builder — [Cohort name/date]`
   - Section: your preferred label (e.g. "theBuilderPros · Oct 2026")
   - Subject: `AI / Web Development`

2. **Invite students**
   - Use Gmail addresses (same ones used for v0 / Lovable / Supabase)
   - Verify each student joins before Day 1

3. **Create 6 topics** (one per day):
   - `Day 1 — First Mini-App`
   - `Day 2 — Precise Prompting`
   - `Day 3 — Database Mini-App`
   - `Day 4 — Auth & Multi-user`
   - `Day 5 — Operate & Fix`
   - `Day 6 — Capstone`

4. **Create 6 assignments** — copy-paste the `homework.md` content from each day

---

## Assignment template

Each day's `homework.md` is written to be **copy-pasted directly into Classroom** with no edits.

The header looks like:

```
**Google Classroom assignment**
**Points:** 10
**Due:** evening before Day N+1
**Submit:** <artifacts>
```

Set:
- **Points: 10**
- **Due date:** 8pm (local time) evening before next class
- **Submission type:** "Students can comment" + accept text submissions and links

---

## Submission format rules

**Course 0 submissions are URLs and text, never files.**

Why: the mini-app lives on the internet. A file submission is already not shipped. If you accept a .zip, you've broken the shipping discipline.

**What counts as a valid submission:**
- A live URL (opens in browser, works)
- Text in the submission box: reflection, prompt log, etc.
- Screenshots (as uploaded images are OK)

**What does NOT count:**
- Project .zip
- Code files
- "I'll show you in class"

---

## What Classroom can grade

Only **4 of the 4 criteria** touch Classroom, and Classroom can **auto-verify** only 2:

| # | Criterion | Classroom role |
|---|---|---|
| 1 | 3+ live mini-apps | Student submits URLs; instructor opens them |
| 2 | Explain capstone (oral) | **In-person only**. Classroom records pass/fail. |
| 3 | Fix planted problem | **In-person only**. Classroom records pass/fail. |
| 4 | 3 real users | Student submits Supabase screenshot |

**Never try to automate the oral exam.** No form, no quiz, no AI-graded submission. Those bypass the exact filter that catches vibe coders.

---

## Weekly flow

| Day | Instructor Classroom actions |
|---|---|
| 1 | Post Day 1 homework at end of class |
| 2 | Day 1 homework due 8pm the night before. Review in first 15 min of class. Post Day 2 homework at end. |
| 3-6 | Same pattern |
| Post-6 | Post Day 6 homework (1 week deadline for capstone follow-up) |

---

## Grading in Classroom

For criteria 1 and 4 (URL-based): give full marks (10/10) if URL works and matches requirements.

For criterion 2 and 3 (oral): **record the result in Classroom as a comment** after the live assessment. Do not grade the Classroom submission itself.

Example comment:
> "Day 5 fix: pass. Diagnosed Supabase RLS, checked policy page before asking AI, explained fix clearly."

> "Final Oral (Day 6): FAIL — could not name own table columns, said 'AI handles that'. Recommended retake."

---

## Attendance

Classroom doesn't track attendance. Keep an attendance log separately.

**Course 0 attendance rule:** miss more than 1 day and you cannot pass without a makeup. The oral exam depends on continuous practice.

---

## Privacy

- Student URLs may be shared with other students in-class (for peer feedback) — but not posted externally
- Instructor should not post student URLs on public channels without student consent
- Supabase screenshots may contain real user emails — treat as sensitive, don't share outside instructor + student
