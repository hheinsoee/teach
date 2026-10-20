# Rubric — How to Run Each Criterion

**4 criteria. All required. No partial credit on criterion 2.**

| # | Criterion | Day | Format | Who grades |
|---|---|---|---|---|
| 1 | At least 3 live mini-apps shipped | 1-6 | URLs submitted via Classroom | Any — just open URLs |
| 2 | Explain your own capstone — user, data, flow | 6 | 4-min oral, no AI | Instructor only |
| 3 | Fix a planted problem in your own mini-app | 5 | Live, 15-20 min window | Instructor only |
| 4 | Capstone has 3 real users | 6 | Supabase Authentication → Users | Any — count rows |

---

## Criterion 1 — 3+ live mini-apps

**Pass:** By end of course, student has shipped at least 3 live URLs on different mini-apps. Across days 3, 4, 6 (or others).

**How to check:** Open the URL. Does the page load for you? Does the mini-app work (sign up, add row, etc.)?

**Fail:** URL is dead, blank page, deploy failed, "not found".

**No subjective judgment** here — the URL either works or it doesn't.

---

## Criterion 2 — Explain your capstone (THE GATE)

**This is the whole course.** Soften this and you've produced vibe coders.

### Format

- Day 6, after capstone shipped
- 4 minutes per student
- Student in front of instructor (and other students watching — accountability)
- **Laptop closed or screen only showing their deployed app + Supabase (no AI tabs)**
- No notes

### Questions (pick 3)

1. What does your mini-app do? Who is it for? (expect: named person or specific role + specific problem)
2. Walk me through what happens when a user signs up. (expect: naming of where account is created, where it stores)
3. Walk me through what happens when a user adds a row. (expect: table name, column names, mentions Supabase)
4. Show me your Supabase table. Name the columns, tell me what each stores.
5. What did you build in Day 5 (the fix)? Why did it work?
6. What would you build next for this app, and why?

### Pass / Fail decision

| | Pass | Fail |
|---|---|---|
| User | Named person or specific role | "Users" / generic |
| Data location | Names "Supabase" + table + columns | "It just saves" / "AI handles it" |
| Flow | Describes order of events | "I don't know, I just prompted it" |
| Day 5 fix | Describes problem + fix in own words | "AI fixed it" / can't recall |

**3 of 4 required to pass.** If student scores 2 or less, they fail criterion 2 — regardless of how pretty their app is.

### Common vibe-coder answers to catch

- "The AI handles that" → **Fail.** They're outsourcing understanding.
- "I don't know the names" → **Fail.** They haven't looked at their own system.
- "It's about empowering users to..." → **Fail (marketing speak).** Push for specifics.
- "I'd add more features" → **Soft fail.** Push for one specific one.

### Don't fail for

- Nervousness
- Forgetting a word in English (Burmese is fine)
- Confusing "row" and "record" (same thing, both OK)
- Not knowing "RLS" or technical acronyms (Course 1)

**Ask the question again if a student freezes.** Not giving up on them, but also not letting them drift away from the question.

---

## Criterion 3 — Fix the planted problem (Day 5)

**Format:** Instructor plants 2-3 realistic problems in each student's Day 4 mini-app (before class). See [`day-05-planted-problems.md`](day-05-planted-problems.md).

### Pass

Student:
- Describes what's broken in their own words (one sentence)
- Guesses which layer (UI / Data / Infra) — can be wrong, but has a guess
- Checks the actual system (console / Supabase / logs) **before asking AI the first time**
- Fixes at least 1 of the planted problems
- Can explain why the fix worked

### Fail

- Pastes error straight into AI without reading
- Says "AI said this doesn't make sense" and gives up
- Fixes it but can't say what was broken

**Partial credit:** fixing some planted problems but not all is OK — but the process ("look at the system first") must be present.

---

## Criterion 4 — 3 real users on capstone

**Format:** Open the student's Supabase project → Authentication → Users table.

### Pass

- At least 3 users signed up
- Different email addresses
- At least 2 are not the student themselves and not another student in this cohort

### Fail

- Only the student signed up
- 3 fake emails (gmail.com addresses that bounce)
- All 3 are classmates (not "real" users for Course 0 purposes)

**Grace:** 2 real + 1 pending-by-end-of-week is acceptable.

---

## Checkpoints summary

| Checkpoint | Day | Rubric | Format |
|---|---|---|---|
| **Vibe Check** (practice) | 5 | 2 (practice) | 3 min oral, no AI |
| **Fix the Planted Problem** | 5 | 3 | Live, 15-20 min |
| **Final Oral** | 6 | 2 | 4 min oral, no AI |
| **3 real users** | 6 | 4 | Supabase screenshot |

Criterion 1 is evidenced by all shipped URLs across the course.

---

## Grading matrix

Each student in your instructor notebook:

```
Student: _______________________

Day 1 shipped: URL ______________ Y / N
Day 2 shipped: URL ______________ Y / N
Day 3 shipped: URL ______________ Y / N
Day 4 shipped: URL ______________ Y / N
Day 5 fix completed:              Y / N / partial
Day 6 capstone shipped: URL _____ Y / N
Day 6 3 real users:               Y / N / partial

Vibe Check (Day 5) signal:        [notes]
Final Oral (Day 6):               PASS / FAIL
  - User: ______________________
  - Data location: _____________
  - Flow: ______________________
  - Day 5 fix: _________________

OVERALL:                           PASS / VIBE CODER / INCOMPLETE
```

See [`grading-policy.md`](grading-policy.md) for pass/fail decisions.
