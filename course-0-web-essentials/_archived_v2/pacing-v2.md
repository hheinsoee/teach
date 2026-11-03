# Pacing — Where Days Run Over, What to Cut

Every day is 90 minutes. **The day never gets longer.** When content doesn't fit, cut content.

---

## Pacing status per day

| Day | Status | Risk level |
|---|---|---|
| 1 | `FITS` | Only if pre-work done. Else +15 min account setup risk. |
| 2 | `FITS` | Low |
| 3 | `TIGHT` | JS concept jump is hard; may need +10 min on vocabulary |
| 4 | `FITS` | localStorage mental model is new but Day 3 prep helps |
| 5 | `TIGHT` | Git setup friction; first terminal use for many |
| 6 | `FITS` | **Depends on API being live.** If API breaks, drop to local JSON file |
| 7 | `FITS` | Low |
| 8 | `DEPENDS ON CLASS SIZE` | Showcase scales linearly (3 min × students) |

---

## Day 1 — if pre-work isn't done

**Risk**: 15-20 min lost to account setup.

**Cut**: Concept phase (10 min). Save for Day 2's homework review.
**Keep**: Instructor demo + Student build + Label.

> **Never cut the "HTML file open in browser" moment.** Day 1 ends with students seeing their page in Chrome, period.

---

## Day 3 — JS concept jump is heavy

**Risk**: Students expect `=` to mean "equals"; find out it's "assign". Variables confuse. Events feel abstract.

**Cut**: Concept phase (15 → 10 min). Compress to "HTML/CSS/JS = structure/look/behavior."
**Keep**: Live demo + Student build. Label is critical.

> **Day 3 is the first "wall" in Course 0.** Budget extra 1-on-1 instructor time. Pair stuck students with faster ones.

---

## Day 5 — Git friction

**Risk**: First terminal use. GitHub auth confusion. Pages 404s.

**Pre-decide the path for your cohort**:
- Confident / willing cohort → Terminal (git CLI) — teaches more
- Nervous / mixed cohort → GitHub Desktop — simpler

**Have fallback ready**:
- Pre-create student repos manually if needed
- Have GitHub Pages demo URL ready in case none work in class

**Cut**: concept phase can shrink to 5 min if everyone understands "code goes somewhere → URL"
**Keep**: Each student must leave with a live URL

> **Day 5 is where instructor pairing matters most.** Even in 90 min, 5+ students may need 1-on-1 fixes. Have a TA or classmate helpers.

---

## Day 6 — if API breaks

**Risk**: Hein's API URL returns errors or is slow.

**Prevention**: Test API Day 5 evening. See [`api-setup.md`](api-setup.md).

**If broken mid-class**:
- Give students the backup local `news.json` file
- Each student downloads, uses `fetch('./news.json')` instead of remote URL
- Lesson still works — "same code, different source"

---

## Day 8 — Showcase scales with class size

**3 min per student × student count = showcase duration**

| Class size | Showcase duration | Fits in Day 8? |
|---|---|---|
| 1-5 | 3-15 min | Yes, easily |
| 6-10 | 18-30 min | Yes (plan budgets 30 min) |
| 11-15 | 33-45 min | Tight — cut "What's next" to 15 min |
| 16-20 | 48-60 min | Does NOT fit — split into 2 breakout groups |
| 21+ | 63+ min | Run showcase as homework / video submissions |

**Never shorten below 2 min per student.** The showcase is the celebration — don't rush it.

---

## 90-minute day timing (reference)

Every day:

| Block | Minutes |
|---|---|
| Homework review | 15 |
| Concept intro | 10-20 |
| Instructor demo | 15 |
| Student build | 30-40 |
| Label | 10 |

If an instructor wants to extend any block, cut another to match.

**Never extend past 90 minutes.** The day is a contract.

---

## What to NEVER cut

- Day 1 opening HTML file in browser
- Day 3 Label phase (JS vocabulary — foundation for Day 4+)
- Day 5 each student's live URL
- Day 6 fetch succeeding (even if API is backup JSON)
- Day 8 showcase (every student presents)

These are the backbone. Everything else is negotiable.

---

## What CAN be cut when needed

- Concept intro length (shrink to 5 min)
- Homework review (shrink to 10 min if nothing novel to show)
- "What's next" demo on Day 8 (shrink to 10 min if cohort large)
- Transfer-style extensions ("Where else does this pattern appear?")

---

## Instructor stress signals

If you find yourself saying any of these, you're off-plan:

- *"Let me explain the box model real quick"* → No. Not Course 0.
- *"Let me show you Flexbox properly"* → No. CSS depth is Course 1.
- *"We'll skip Label today, we're late"* → No. Cut concept instead.
- *"Just finish the exercise at home"* → No. Day must end with an artifact.

**When tempted**: re-read principles 0, 1, 4 in AGENT.md. Cut concept, not practice. Cut Transfer, not Label.

---

## Homework pacing — manage expectations

Homework is **3 hours per day** = 24 hours total.

**If students report >4 hours regularly**:
- Simplify research prompts
- Give specific links instead of "search for..."
- Reduce "Build" portion
- Keep "Reflect" short

**If students report <2 hours regularly**:
- They're skipping research or reflection
- Add specific checkpoint questions in reflection
- Pair with "share your research notes with a classmate" accountability
