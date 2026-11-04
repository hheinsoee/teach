# Teacher Onboarding — Read This First

**For**: Hein (or future Course 0 instructors)

**How long**: ~2 hours to read all instructor materials in correct order

**When**: 2-3 weeks before Day 1 (gives time to prepare starters + API)

---

## Reading order

### Step 1 — Understand what this course IS and IS NOT (15 min)

Read in this order:

1. [`../README.md`](../README.md) — course overview, positioning
2. [`../course-0-web-essentials.md`](../course-0-web-essentials.md) — full syllabus (skim)
3. [`../../context/theBuilderPros-roadmap.md`](../../context/theBuilderPros-roadmap.md) — source material from theBuilderPros

**Key takeaways to remember**:
- This is **vocational training**, not engineer training
- Course 0 = inspired beginner, not programmer
- 12 days × 90 min + 36 hr homework = 54 hr total
- React from Day 6 (via CDN, no npm)
- Capstone 2 = News App (Days 9-12)

---

### Step 2 — Understand the teaching philosophy (30 min)

Read: [`teaching-guide.md`](teaching-guide.md) in full

**Key sections**:
- Flipped classroom (3 pillars)
- 90-min class structure (Q&A 25 + Discussion 15 + Build 25 + Label 10 + Wrap 15)
- 8 known risks + mitigations
- AI co-teacher prompt library (⭐ **bookmark this**)

**Mindset shift**:
- Teacher ≠ lecturer
- Teacher = question facilitator + AI co-pilot
- Student questions are the curriculum driver

---

### Step 3 — Prepare infrastructure (60 min)

Read: [`setup-guide.md`](setup-guide.md)

**Action items from this guide**:

**Critical before Day 1** (3-5 hours Hein work):
1. ✅ Create `web-essentials-starter` GitHub repo (template)
   - Mark as template
   - Add React CDN to index.html
   - Add GitHub Actions workflow for Pages deploy
   - Test: fork → enable Pages → push → URL loads

2. ✅ Prepare Viber/Telegram group
   - Invite students
   - Pin Day 1 prework message

**Critical before Day 9** (2-3 hours Hein work):
3. ✅ Host News API at `api.heinsoe.com/news.json` (or similar)
   - Create `course-0-news-api` repo
   - Sample 10 articles (JSON file in setup-guide.md)
   - Enable GitHub Pages
   - Verify CORS works

4. ✅ Create `news-app-starter` GitHub repo (template)
   - React CDN pre-included
   - Fetch placeholder to Hein's news.json

**Don't skip these** — infrastructure failure on Day 1 or Day 9 wastes class time.

---

### Step 4 — Understand grading (15 min)

Read: [`grading-guide.md`](grading-guide.md)

**Key takeaways**:
- 4 soft markers (News App only, not Habit Tracker)
- Google Classroom for homework submission
- No pass/fail oral exam — this is vocational course
- Target: 5-7 of 10 students complete all 4 markers

---

### Step 5 — Keep quick-reference handy (ongoing)

Open on phone during every class: [`quick-reference.md`](quick-reference.md)

**Contains**:
- 90-min structure
- "When silence hits" scripts
- "When I don't know" scripts
- AI quick prompts
- Pre-class checklist

---

## Pre-class ritual (every day)

### 2 days before class
- [ ] Open `day-NN/prework.md`
- [ ] Copy content to Viber/Telegram group
- [ ] Monitor ✅ reactions

### 1 day before class
- [ ] Open `day-NN/self-study.md`
- [ ] Remind students on Viber: "Tonight — self-study (60-90 min + 3 questions)"
- [ ] Open AI, run "dry-run prompt" from teaching-guide.md

### Day of class (1 hour before)
- [ ] Open `day-NN/README.md` (instructor flipped plan)
- [ ] Have `quick-reference.md` ready on phone
- [ ] AI tabs open (ChatGPT, Claude)
- [ ] Starter repo URLs copied
- [ ] Phone timer set (15-min alerts)

### During class
- [ ] Follow 5-phase structure (Q&A → Discussion → Build → Label → Wrap)
- [ ] Use AI for unexpected questions
- [ ] Protect Q&A time (no rescuing silence too early)

### After class
- [ ] Open AI, run "debrief prompt" from teaching-guide.md
- [ ] Assign Day N+1 prework (Viber in 2 days)
- [ ] Collect student questions for next class

---

## If you've never taught before

**You're not alone.** Course 0 is Hein's first teaching experience.

**Safety nets**:
1. **AI co-teacher** — always available during class
2. **"I don't know, let's find out"** is a powerful phrase, not weakness
3. **First cohort = practice** — adjust for cohort 2
4. **Flipped > lecture** — you don't need to know everything

**Red flags to watch** (contact AI for help):
- 3+ students consistently silent in Q&A
- Homework completion rate <50%
- Students confused about course scope
- You feel burned out

---

## If you're an experienced teacher

Course 0 may feel "too soft" (no hard exam, no pass/fail). That's intentional:

- Course 0 = **inspiration + foundations** (vocational trade skill)
- Course 1 = **professional practice** (hard rubric, oral exam)
- Don't bring Course 1 standards to Course 0 — students will drop out

---

## File navigation

```
instructor/
├── teacher-onboarding.md   ← THIS FILE (read first)
├── quick-reference.md      ← On phone during class
├── teaching-guide.md       ← Full teaching philosophy + AI prompts
├── setup-guide.md          ← Infrastructure prep (starters, API)
└── grading-guide.md        ← Completion markers + Classroom

../day-01/ ... ../day-12/
├── prework.md              ← Viber 2 days before
├── self-study.md           ← Night before
├── README.md               ← Instructor plan (90-min flipped)
├── in-class.md             ← Student in-class guide
└── homework.md             ← Post-class
```

(Note: Only Day 3 currently has 5-file structure. Days 1-2 already taught. Days 4-12 being migrated to flipped.)

---

## Timeline for new instructors

### 3 weeks before Day 1
- Read this file (teacher-onboarding.md)
- Read teaching-guide.md
- Read course syllabus

### 2 weeks before Day 1
- Read setup-guide.md
- Create starter repos (Habit Tracker + News App)
- Test fork + Pages workflow

### 1 week before Day 1
- Host News API (test fetching)
- Create Viber/Telegram group
- Invite first cohort
- Send Day 1 prework to students

### Day of Day 1
- Deep breath
- Quick-reference on phone
- AI co-teacher ready
- Teach with confidence

---

## Final reminder

> **You are not alone. AI is your co-teacher. First cohort is practice. Imperfect is fine. Showing up is 80% of teaching.**

Welcome to Course 0.
