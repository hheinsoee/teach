# AGENT.md — Course 0

Instructions for any AI agent working in this course folder.

## What this course is

**Course 0 — Web Essentials.** A 4-week, 8-day course for absolute beginners. Taught at **theBuilderPros** workshops. Organized by theBuilderPros.

**Format**: 8 days × 90 min class + 24 hours homework = **36 hours total**

**Source material**: [`../context/theBuilderPros-roadmap.md`](../context/theBuilderPros-roadmap.md) — the theBuilderPros Development 101 roadmap this course is derived from.

## Vocabulary — do not mix these up

| Term | Means | How many |
|---|---|---|
| **Week** | Two days | 4 |
| **Day** | One 90-min class meeting. Folder `day-NN/` | 8 |
| **Project** | A fixed app students build (Habit Tracker or News App) | 2 |
| **Ship** | An artifact at end of class — code visible, URL live by Day 5 | mandatory per day |

A day is never called a "class" or "session" in folder names.

## Non-negotiable principles

These are the design of the course. Do not "improve" them away.

0. **Code reading, not code writing.** Hein's confirmed principle:
   > *"Code ကို အဓိက မသင်။ AI ရှိတယ်။ Code ကို သဘောပေါက်ရမယ်, ဖတ်တတ်ရမယ်။"*

   Students read HTML/CSS/JS that AI generates. They do not write code from scratch by hand. If an exercise says "write 10 for-loops", delete it — that violates principle 0.

1. **Two fixed projects only.** Days 1-5 = Habit Tracker. Days 6-8 = News App. No custom projects allowed, no "pick your own". Fixed projects make in-class debugging possible.

2. **The News App API is pre-built by Hein.** Students don't build backends. They only fetch and display JSON. Backend work is Course 1+.

3. **AI generates the code; the student reads it.** Every day the student uses ChatGPT, Claude, or Cursor to generate code, then reads it line by line in Label phase.

4. **Four skills, every day**: Read · Understand · Direct · Verify. If a day plan is missing any one of these, it's incomplete.

5. **Soft completion markers, not pass/fail.** Course 0 is an **inspiration course** — the goal is to spark curiosity for Course 1, not to filter students. No oral exam gates, no vibe-coder failures. The old v1 "oral exam / fail criteria 2" model is **archived** (see `_archived_v1/`).

6. **Ship something visible every day.** Every day ends with an artifact — HTML file, deployed URL, or a working feature. Day 1 skeleton, Day 5 live URL, Day 8 capstone with real users.

7. **Honesty over marketing.** Course 0 produces an **inspired beginner**, not a developer. 36 hours cannot produce a programmer. Never upgrade this claim anywhere.

## Scope — what's IN and what's OUT

### IN (Modules A, C, D, E, F, G, H, I, J, K-taste)

- Reading-level programming fundamentals (variables, functions, events — reading only)
- HTML/CSS/JS depth (reading, modifying with AI help)
- AI/LLM for coding (prompting, verifying output) — ⭐ core
- Web fundamentals (HTTP, JSON, fetch)
- Git/GitHub basics + GitHub Pages auto-deploy
- Light DevOps/CI/CD (seeing the workflow)
- Light terminal (git commands only)
- Software engineering concept (code review of AI output)
- Taste of advanced agentic coding (Day 8)

### OUT (Hein-confirmed exclusions)

| Excluded | Reason |
|---|---|
| **Module B — Dart & Flutter** | Mobile stack; Course 1+ |
| **Backend** | localStorage sufficient; API is pre-built; Course 1+ |
| **Hand-written code from scratch** | AI generates; principle 0 |
| **Framework depth (React, Vue)** | Day 8 taste only; Course 1 |
| **Database design** | Course 1+ |
| **Authentication system** | Course 1+ |
| **Mobile app / app store** | Web only |
| **Desktop (Electron)** | Web only |
| **Oral exam / vibe coder failing** | Inspiration course, not gating |

## theBuilderPros roadmap alignment

The curriculum is based on theBuilderPros's "Development 101 — Technical and Production Discovery Map" (received 2026-10-28 via Viber).

See [`../context/theBuilderPros-roadmap.md`](../context/theBuilderPros-roadmap.md) for the full source material, Marcus's story, Modules A-K breakdown, and Hein's confirmed scope decisions.

The Habit Tracker + News App projects are Hein's substitutes for theBuilderPros's example "Sip" (water reminder) app. Marcus story stages 1-7 are covered to varying depths:

- Stages 1-4 (Problem → First App → Browser Model → Features) — ✅ Days 1-4
- Stage 5 (Frameworks) — ⚠️ Day 8 taste only
- Stage 6 (Deploy) — ✅ Day 5 (web only; no mobile/app store)
- Stage 7 (Real Users + Growth) — ✅ Day 8

## Day folder contract

Every `day-NN/` contains:

| File | Audience | Contains |
|---|---|---|
| `README.md` | instructor | 90-min plan with timing, AI prompts to use, common failures |
| `exercise.md` | student (English) | Step-by-step in-class exercise |
| `homework.md` | student (English, 10pt, Classroom-ready) | Research + Build + Reflect, 3 hr |
| `exercise-burmese.md` | student (Burmese, optional) | Burmese translation of exercise |

Students read all files; instructors use the README.

## Day timing (90 minutes)

Every day:

| Block | Minutes | Purpose |
|---|---|---|
| Homework review | 15 | Who shipped? Who got stuck? |
| Concept intro | 10-15 | New vocabulary, why it matters (brief) |
| Instructor demo | 15 | Live AI prompt → generated code → read line by line |
| Student build | 35-40 | Students prompt AI, read code, modify, ship |
| Label | 10 | In their own words — what did we do? Vocabulary stuck. |

If content doesn't fit, cut concept intro — never cut Student Build or Label.

## Homework structure (3 hr/day)

Each day's homework is **Research (1 hr) + Build (1-2 hr) + Reflect (0.5 hr)**:

- **Research**: assigned topics, YouTube/MDN/AI sources, 3-5 sentences in own words (Burmese OK)
- **Build**: extend the day's project with a new feature via AI
- **Reflect**: 3-5 sentences — what worked, what didn't, 1 question

Submit via Google Classroom with URL + screenshots + reflection text.

## Writing conventions

- **English primary** for all instructor files, syllabus, AGENT.md
- **Burmese allowed** for student-facing exercise/homework files when it helps comprehension
- Define a term the first time it appears
- Prefer **analogies** over definitions for beginners
- Prefer tables over prose lists
- No emoji except: `🚀` ships, `🎓` capstone, `⚠️` warning
- Instructor READMEs always include **Common failures** section

## Known hard points

- **Day 1 setup**: v0/Lovable/Supabase not used in v2. Only AI chat (ChatGPT/Claude) + browser + VS Code (optional). Simpler stack = fewer Day 1 blockers.
- **Day 3 (JavaScript)**: concept jump from static to dynamic. Common failure: students expect `=` to compare, not assign. AI explains, instructor reinforces.
- **Day 5 (Git)**: first terminal use. Hein pre-prepares a starter repo students clone.
- **Day 6 (News API)**: depends on Hein's API being live. If API breaks mid-class, falls back to local JSON file. Keep both ready.
- **Day 8 capstone**: real users feedback — Myanmar students may struggle to get 3 non-classmate users. Target 2 real + 1 pending; accept honest effort.

## When adding or editing a day

1. Read [`course-0-web-essentials.md`](course-0-web-essentials.md) first. It's the source of truth.
2. Keep the day's four skills (Read / Understand / Direct / Verify) all represented.
3. If you change what a day teaches, update the syllabus in the same pass.
4. Do not add new days. Course is **exactly 8 days**.
5. If you add syntax drills or "type 20 loops", delete yourself — principle 0 violated.
6. Reference `_archived_v1/` only for historical context, never for guidance.

## About the v1 archive

`_archived_v1/` contains the previous 6-day, AI-only (v0/Lovable click-only) version. That design was based on wrong assumptions about what theBuilderPros wanted. **Do not restore from it.** The v2 design is based on the theBuilderPros roadmap and Hein's confirmed principles.

Preserved in archive for context: syllabus-v1-6days.md, day-01 through day-06, instructor/ (old rubric, grading-policy, vibe-check-playbook, planted-problems).
