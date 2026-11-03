# Pacing — Where Days Run Over, What to Cut

Every day is 120 minutes. **The day never gets longer.** When content doesn't fit, cut content.

---

## Pacing status per day

| Day | Status | Risk |
|---|---|---|
| 1 | `FITS` | Only if pre-work done. Add 15 min buffer for account setup if not. |
| 2 | `FITS` | Low risk |
| 3 | `TIGHT` | Supabase setup eats 10-15 min; data persistence is the whole lesson |
| 4 | `TIGHT` | Auth setup eats 15-20 min; 2-account isolation test is critical |
| 5 | `FITS` | Depends on how many planted problems per student (keep to 2-3) |
| 6 | `DEPENDS ON CLASS SIZE` | Final Oral is serial — scales linearly |

---

## Day 1 — if pre-work isn't done

**Risk:** 15-20 min lost to account setup.

**Cut:** Transfer phase (10 min). Save for Day 2.
**Keep:** Experience (build + deploy), Label, Verify.

> **Never cut the live URL.** If a student leaves Day 1 without a URL, Day 2 onwards falls apart.

---

## Day 3 — if Supabase setup overruns

**Risk:** Supabase requires email verification; Lovable-Supabase connection sometimes stalls.

**Cut:** Transfer phase (10 min). Mention briefly, don't do full exercise.
**Keep:** Experience, Label phase (Supabase inspection is the whole point).

> **Never skip opening Supabase.** The Label phase requires students to see their rows in the table — this is the "aha" moment of the day.

---

## Day 4 — if 2-account isolation doesn't work

**Risk:** Lovable sometimes doesn't configure Row Level Security correctly; students see each other's data.

**If 50%+ of class is in this state at minute 70:**
- Stop. Fix as a group. Walk everyone through: "In Supabase → Authentication → Policies → add RLS to filter by user_id"
- Cut Transfer phase

**If just a few students:**
- Pair them with students whose auth works
- Fix one-on-one during Label/Transfer

> **Never pass someone on Day 4 whose users can see each other's data.** The whole lesson is isolation.

---

## Day 5 — planted problems take variable time

Different students will solve bugs at different speeds. **Instructor must triage:**

- Fast students → let them explore, maybe discover extra plants
- Stuck students → remove 1 plant quietly, so they have time for Label + Vibe Check
- All students must do Label + Vibe Check — those are the gates

**Cut if needed:** The 2nd and 3rd planted problem. One well-diagnosed bug is better than three skimmed ones.

---

## Day 6 — Final Oral scales with class size

**4 min per student × student count = oral exam duration**

| Class size | Oral duration | Fits in Day 6? |
|---|---|---|
| 1-3 | 4-12 min | Yes, easily |
| 4-5 | 16-20 min | Yes (the plan budgets 20) |
| 6-7 | 24-28 min | Tight — cut Transfer phase |
| 8-10 | 32-40 min | Does NOT fit — book extra time |
| 11+ | 44+ min | Run orals outside class (10-min slots across next 2 days) |

**Never shorten the oral below 4 min.** 3 min can't surface a vibe coder; the whole point breaks.

---

## 120-minute day timing (reference)

Every day's time budget is identical:

| Block | Minutes |
|---|---|
| Homework review | 15 |
| Concept (if any) | 10-25 |
| Experience | 50-60 |
| Label | 15-20 |
| Transfer | 10-15 |
| Verify + wrap | 5-10 |

If an instructor wants to extend any one, cut another to match.

**Never extend past 120.** The day is a contract.

---

## What to NEVER cut

- Day 1 live URL
- Day 3 opening Supabase + seeing rows
- Day 4 2-account isolation test
- Day 5 looking at system before asking AI
- Day 6 Final Oral (4 min minimum per student)

These are the backbone of the course. Everything else is negotiable; these are not.

---

## What CAN be cut when needed

- Transfer phase (any day) — the connections to other systems. Nice-to-have.
- Concept intro length — can be 5 min instead of 10-15
- Homework review — can be 10 min instead of 15 if only a few shipped

---

## Instructor stress signals

If an instructor finds themselves saying any of these, they are off-plan:

- "Let me explain how HTTP works real quick" → No. Not in Course 0.
- "Let me open the code and look at..." → No. Students don't see code.
- "We'll skip the Label today, we're running late" → No. Cut Transfer instead.
- "You can finish the oral at home" → No. Oral is in person, no AI, graded live.

**When tempted:** re-read the AGENT.md principles. Cut concept, not practice. Cut Transfer, not Label.
