# AGENT.md — Course 0 (v3)

Instructions for any AI agent working in this course folder.

## What this course is

**Course 0 — Web Essentials.** A 6-week, 12-day course for absolute beginners. Taught at **theBuilderPros** workshops.

**Format**: 12 days × 90 min class + 36 hr homework = **54 hours total**

**Source material**: [`../context/theBuilderPros-roadmap.md`](../context/theBuilderPros-roadmap.md)

---

## Vocabulary — do not mix

| Term | Means | How many |
|---|---|---|
| **Week** | Two days | 6 |
| **Day** | One 90-min class. Folder `day-NN/` | 12 |
| **Project** | A fixed app students build | 2 (Habit Tracker + News App) |
| **Capstone** | THE project that's formally marked | 1 (News App only) |
| **Ship** | An artifact at end of day — code pushed, live URL updated | mandatory per day |

A day is never called "class" or "session" in folder names.

---

## Non-negotiable principles

Do not "improve" these away.

**0. Code reading, not writing.** Hein's confirmed principle:
> *"Code ကို အဓိက မသင်။ AI ရှိတယ်။ Code ကို သဘောပေါက်ရမယ်, ဖတ်တတ်ရမယ်။"*

Students read HTML/CSS/JS AI generates. **No syntax drills.** No "type 20 loops." AI generates; student reads, modifies, verifies.

**0b. Flipped classroom.** Hein's teaching philosophy:
> *"အိမ်စာ များများ + self-study များများ + ကျောင်းသား မေးခွန်း များများ"*

Teacher does NOT lecture 70% of class. Student does prework + self-study, comes to class WITH questions. Class = Q&A (25 min) + discussion (15 min) + live build (25 min) + label (10 min) + wrap (15 min). Teacher active ~30%, student active ~70%.

See [`instructor/teaching-guide.md`](instructor/teaching-guide.md).

**0c. AI as teacher's assistant.** Hein is first-time teacher. AI (ChatGPT/Claude) is his **silent co-teacher** — not students' only AI, but Hein's own.

- Pre-class: AI helps prepare day, anticipates questions
- In-class: AI helps handle unexpected questions, risk mitigations
- Post-class: AI helps debrief, calibrate pacing

See [`instructor/teaching-guide.md`](instructor/teaching-guide.md) for concrete prompts.

**1. Two projects, one capstone.** Days 1-8 = Habit Tracker (practice). Days 9-12 = News App (capstone, formally marked).

**2. API is pre-built by Hein.** Students don't build backends. They fetch from Hein's `news.json` only. See [`instructor/setup-guide.md`](instructor/setup-guide.md).

**3. AI generates code; student reads it.** Every day uses ChatGPT, Claude, or similar. Then Label phase — student explains in own words.

**4. Four skills every day**: Read · Understand · Direct · Verify. If any missing, day is incomplete.

**5. Soft completion markers, not pass/fail.** Course 0 is an **inspiration course**. No oral exam gates, no vibe-coder failures. See [`instructor/grading-guide.md`](instructor/grading-guide.md).

**6. Ship something visible every day.** Day 1 live URL from GitHub starter. Days 2-11 push updates. Day 12 presentation.

**7. Git/CI-CD is integrated, not taught.** Day 1 clones starter → Pages enabled → push works. Daily `git push`. Day 12 retrospective explains what was happening.

**8. Honesty.** Course 0 produces an **inspired beginner**, not a programmer. 54 hours cannot produce a programmer. Never upgrade this claim.

---

## Scope — IN and OUT

### IN

- JS fundamentals (reading-level, Days 3-5): variables, data types, functions, conditions, loops
- Vanilla DOM concept (Day 6, concept only — not written)
- **React via CDN** (Days 6-12): JSX, components, `useState`, `useEffect`, fetch
- HTML/CSS reading
- AI-generated code with prompting + verification
- Git/GitHub Pages (via GitHub Desktop)
- One capstone (React News App) with real users

### OUT

| Excluded | Reason |
|---|---|
| **Module B (Dart & Flutter)** | Mobile stack; Course 1+ |
| **Backend** | localStorage + Hein's API sufficient |
| **TypeScript** | Requires build step; Course 1+ |
| **Vite / npm / build tools** | Course 1+ (React via CDN only) |
| **React depth** (Router, Context, custom hooks) | Course 1+ |
| **Database design** | Course 1+ |
| **Authentication** | Course 1+ |
| **Mobile / Electron / app stores** | Web only |
| **Oral exam / vibe-coder failing** | Inspiration course |
| **Git CLI deep use** | GitHub Desktop; CLI is Course 1+ |
| **Module E (Software Engineering)** | Code review, testing, team workflow → Course 1+ |

---

## theBuilderPros roadmap alignment

Based on "Development 101 — Technical and Production Discovery Map" (received 2026-10-28 via Viber).

See [`../context/theBuilderPros-roadmap.md`](../context/theBuilderPros-roadmap.md) for the roadmap source, Marcus's story, Modules A-K, and Hein's confirmed decisions.

Marcus story stages coverage:
- Stages 1-4 (Problem → First App → Browser Model → Features) — ✅ Days 1-8 via Habit Tracker
- Stage 5 (Frameworks) — ⚠️ Day 12 taste only
- Stage 6 (Deploy) — ✅ Integrated throughout
- Stage 7 (Real Users + Growth) — ✅ Days 11-12 via News App

---

## Day folder contract (5 files per day — flipped structure)

Every `day-NN/` contains:

| File | Audience | Timing | Contains |
|---|---|---|---|
| `prework.md` | student (Burmese) | 1-2 days before class (Viber) | Setup, installs, "do this at home" |
| `self-study.md` | student (Burmese) | Night before class | Videos, docs, AI exploration, 3-question prep |
| `README.md` | instructor | Reference | Q&A-focused 90-min plan, AI prompts, risks |
| `in-class.md` | student (Burmese) | During class | Minimal — follow teacher's lead |
| `homework.md` | student (Classroom-ready) | After class | Build + reflect + 3 questions for next class |

**Total**: 60 files (12 days × 5). OK — each file is single-purpose and short.

**Student experience**:
- 2 days before: Viber message with `prework.md` content
- Night before: do `self-study.md` (videos + research + 3 questions)
- In class: follow `in-class.md`, ask questions
- After class: `homework.md` (build + 3 questions for next class)

**Current state (v4)**: Days have 3 files only (`README.md`, `exercise.md`, `homework.md`).

**v5 rollout plan**:
- **Day 3 prototype first** (since Day 1-2 already taught in `ab/`)
- If Day 3 flipped structure works → extend to Days 4-12
- Days 1-2 stay as-is (already taught)

---

## Day timing (90 min)

| Block | Min |
|---|---|
| HW review | 10 |
| Concept | 10-15 |
| Instructor demo | 15 |
| Student build | 35-40 |
| Label + commit | 10-15 |

Cut concept if tight. Never cut Build or Label.

---

## Homework (3 hr/day)

Each day: **Research (1 hr) + Build (1-1.5 hr) + Reflect (0.5 hr)**

Submit via Google Classroom. URLs + text + screenshots.

---

## Writing conventions

- **English primary** for instructor docs, syllabus, AGENT.md
- **Burmese allowed** for student files when helpful
- Define terms first appearance
- **Analogies > definitions** for beginners
- Tables > prose lists
- Emoji: `🚀` ships, `🎓` capstone, `⚠️` warning
- Instructor README always includes **Common failures**

---

## Known hard points

- **Day 1 setup**: GitHub Desktop + fork + Pages. Pre-work critical.
- **Day 3 (JS variables)**: concept jump. `=` vs `===`, type confusion.
- **Day 6 (DOM)**: foreign. Click → effect takes mental model shift.
- **Day 9 (capstone switch)**: new repo, context loss. Help with setup.
- **Day 10 (features load)**: time-tight. Reduce ambition to 2 features.
- **API dependency**: if Hein's API breaks mid-class, fall back to local `news.json`.

---

## When adding/editing a day

1. Read [`course-0-web-essentials.md`](course-0-web-essentials.md) first.
2. Keep four skills (Read / Understand / Direct / Verify) represented.
3. If content changes, update syllabus in same pass.
4. Do not add days. **Exactly 12.**
5. If you add syntax drills, delete yourself — principle 0 violated.
6. Reference `_archived_v1/` and `_archived_v2/` only for history, never for guidance.

---

## About archives

- `_archived_v1/` — 6-day, AI-only (v0/Lovable). Based on wrong assumptions about theBuilderPros.
- `_archived_v2/` — 8-day, two-project (Habit Tracker + News App), hard rubric. Before "JS deep + single capstone" shift.

Current = **v3**. Do not restore from archives.

---

## About `ab/` live repo

Separate from this course material. `ab/` = `github.com/hheinsoee/ab`, Hein's actual demo repo he shows students in class. Pushed from Hein's laptop manually.

Never edit `ab/` from this folder. See top-level [`../../CLAUDE.md`](../../CLAUDE.md).
