# Course 0 — Web Essentials

**6 weeks · 12 days · 90 min/day · 18 contact hours · 36 homework hours · 54 hours total**

> A **day** = one 90-min class meeting. 12 days, 2 per week, 6 weeks.
>
> Students learn to **read code**, **understand** how browsers run it, **direct AI** to generate it, and **verify** the output. JS fundamentals (Days 3-5), then **React** from Day 6 (components, state, effects).

Taught at **theBuilderPros** workshops as the entry point before Course 1.

---

## Positioning

> **This is vocational training, not engineer training.**

Course 0 teaches a **trade skill** (AI-assisted web building for shipping real apps). It does NOT teach:
- Computer Science theory
- Algorithms & data structures
- System design & architecture
- Formal software engineering

Think of it as "AI-era web builder apprenticeship" — practical skills for shipping web apps, not academic CS education.

If student wants to become a software engineer → that requires years of CS + engineering work experience. Course 0 doesn't claim that path.

---

## Core principle

> **"Code ကို အဓိက မသင်။ AI ရှိတယ်။ Code ကို သဘောပေါက်ရမယ်, ဖတ်တတ်ရမယ်။"**
>
> *— Hein Soe (2026-11-03)*

Four skills: **Read · Understand · Direct · Verify.** No syntax drills. AI generates; students read, modify, verify.

---

## Who this is for

- ✅ **Absolute beginner** — no programming, no web experience
- ✅ Comfortable with laptop + Chrome
- ✅ Can read basic English
- ✅ Wants to build + ship web apps with AI help
- ✅ Curious about how websites work

## Who this is NOT for

- ❌ Someone who wants to be a professional software engineer (this is vocational, not engineer training)
- ❌ Students who want deep CS theory, algorithms, data structures
- ❌ Experienced developers (will be bored)
- ❌ Students wanting full-stack with backend/database (that's Course 1+)
- ❌ Job-prep for engineering positions in 6 weeks (impossible)

## The promise

> By Day 12: student has a **News App** live on the internet with 3+ real users. Can read HTML/CSS/JS. Can direct AI. Can fix bugs. Knows what Git/CI-CD does. Ready for Course 1.

---

## The 2 Projects

### Habit Tracker (Days 1-8) — **Practice**

Learning vehicle. Built across 8 days while learning HTML, CSS, JS, DOM, localStorage, fetch. **NOT graded.** 

### News App (Days 9-12) — **Capstone 2**

The real capstone. Built from scratch using all learned skills. Fetches from Hein's pre-built API. **This is what's graded** (soft markers, not pass/fail).

---

## The 12 days

### Week 1 — HTML & CSS Foundation
| Day | Title | Ships |
|---|---|---|
| [1](day-01/) | Problem, Idea & First HTML + GitHub starter | Live URL from Day 1 |
| [2](day-02/) | CSS Styling | Styled page |

### Week 2 — JS Fundamentals
| Day | Title | Ships |
|---|---|---|
| [3](day-03/) | JS Basics: Variables & Data Types | Console logs you understand |
| [4](day-04/) | Functions & Conditions | Named functions in code |

### Week 3 — Loops & React Intro
| Day | Title | Ships |
|---|---|---|
| [5](day-05/) | Loops + `.map()` | Dynamic rendered list |
| [6](day-06/) | **Vanilla DOM concept + React intro** ⭐ | Habit Tracker switched to React |

### Week 4 — React State & External Data
| Day | Title | Ships |
|---|---|---|
| [7](day-07/) | React State (`useState`) + localStorage | Persistent React Habit Tracker 🚀 |
| [8](day-08/) | React Fetch (`useEffect`) | Habit Tracker + motivational quote |

### Week 5 — Capstone 2 (News App)
| Day | Title | Ships |
|---|---|---|
| [9](day-09/) | ⭐ Capstone 2 Begins | News App with articles |
| [10](day-10/) | Features (search, filter, modal) | News App with features |

### Week 6 — Polish & Showcase
| Day | Title | Ships |
|---|---|---|
| [11](day-11/) | Polish + Real Users | 3+ real users |
| [12](day-12/) | 🎓 Showcase + What's Next | Presented |

---

## Modules A-K Coverage (from theBuilderPros)

| Module | Depth |
|---|---|
| A — Programming Fundamentals | ⭐⭐ Deep (reading) |
| B — Dart & Flutter | ❌ Excluded (Course 1+) |
| C — Dev Tooling | Light |
| D — Terminal | Light (git CLI not used; GitHub Desktop) |
| E — Software Engineering | ❌ Excluded (Course 1+) |
| F — AI/LLM Coding | ⭐⭐ Core (every day) |
| G — Web Fundamentals | Light (Day 1, 8-9) |
| H — HTML/CSS/JS/JSX | ⭐⭐⭐ Deep (reading) — vanilla JS + React |
| I — Git & GitHub | Light, integrated (Day 1 + daily commits + Day 12 retro) |
| J — DevOps/CI/CD | Light, integrated |
| K — Agentic Coding | Taste only (Day 12) |

---

## Git/Deploy — Integrated

- **Day 1**: Clone pre-made starter → Pages auto-enabled → live URL
- **Days 1-11**: `git commit && git push` daily (2-min demo, no concept intro)
- **Day 12**: Retrospective — "What was Git doing all along?"

Students build muscle memory, concept comes at the end. See [`instructor/setup-guide.md`](instructor/setup-guide.md).

---

## Day timing (90 min) — Flipped Classroom

Teacher ~30% active, student ~70% active. Students come prepared with questions from homework + self-study.

| Block | Min | Who's active |
|---|---|---|
| **Q&A from self-study** | 25 | 🙋 Students ask |
| **Discussion + clarification** | 15 | 💬 Mixed |
| **Live building** | 25 | 🤝 Collaborative (teacher at AI) |
| **Label** | 10 | ✍️ Students write |
| **Next assignment + wrap** | 15 | 📋 Teacher |

**Not traditional lecture-and-exercise.** See [`instructor/teaching-guide.md`](instructor/teaching-guide.md) for full philosophy + risk mitigations + AI co-teacher prompts.

**Note on day READMEs**: Day 1-12 README files currently show v4 traditional schedule (teacher-led). The flipped schedule above is the **override** — follow it over day files.

---

## Homework (3 hr/day, 36 hr total)

**Research (1 hr) + Build (1-1.5 hr) + Reflect (0.5 hr)**

Submit via Google Classroom: URLs + text + screenshots.

---

## Completion Markers (soft, News App only)

| # | Marker | Evidence |
|---|---|---|
| 1 | News App live | URL loads |
| 2 | Fetches from API | Articles appear |
| 3 | 3+ real users | Day 11-12 submission quotes |
| 4 | Can explain code | Day 12 presentation (3 min) |

Habit Tracker completion encouraged, not required.

See [`instructor/grading-guide.md`](instructor/grading-guide.md).

---

## Outcome

By Day 12, student can:
- Read HTML/CSS/JS line by line and explain
- Direct AI (ChatGPT, Claude) to generate specific code
- Verify AI output by testing
- Deploy via Git + GitHub Pages (integrated workflow)
- Fetch data from a server and display it
- Know what to google / ask AI when stuck

**Not a programmer. An inspired beginner, ready for Course 1.**

---

## Slides (Reveal.js — browser only)

Teacher-facing slide decks:
- Source: `day-NN/slides.md` (markdown — easy to edit)
- Viewer: `slides/viewer.html` (ONE viewer for all days)
- Landing: `slides/index.html` (links to all days)

**Zero install. No npm, no VSCode shown.** Just Python's built-in server.

### How to present

```bash
cd course-0-web-essentials
python3 -m http.server 8000
```

Open browser:

```
http://localhost:8000/slides/            ← landing page with all days
http://localhost:8000/slides/viewer.html?day=03   ← direct to Day 3
```

### Controls (Reveal.js built-in)

- `→` `←` `Space` — navigate
- `F` — fullscreen
- `Esc` — slide overview (click any to jump)
- `S` — speaker notes window
- `?` — all shortcuts

**Progress bar** at bottom. **Slide counter** (e.g., "3/16").

### Structure

```
course-0-web-essentials/
├── slides/
│   ├── index.html         ← landing page
│   ├── viewer.html        ← generic Reveal.js viewer
│   └── how-to-present.md  ← full guide
└── day-NN/
    └── slides.md          ← markdown source (edit this)
```

**One viewer, many day sources.** Edit `day-NN/slides.md`, reload browser, see changes.

See [`slides/how-to-present.md`](slides/how-to-present.md) for full guide.

Currently only Day 3 has slides. Extend as flipped format rolls out.

---

## Start here

| Document | Purpose |
|---|---|
| [`course-0-web-essentials.md`](course-0-web-essentials.md) | Full syllabus (source of truth) |
| [`module-coverage-matrix.md`](module-coverage-matrix.md) | Module × Day coverage matrix |
| [`../context/theBuilderPros-roadmap.md`](../context/theBuilderPros-roadmap.md) | Source material from theBuilderPros |
| [`instructor/teaching-guide.md`](instructor/teaching-guide.md) | Flipped teaching philosophy + AI co-teacher prompts |
| [`instructor/setup-guide.md`](instructor/setup-guide.md) | Student tools + starter repos + News API spec |
| [`instructor/grading-guide.md`](instructor/grading-guide.md) | Completion markers + Google Classroom |
| [`AGENT.md`](AGENT.md) | Rules for AI agents editing this |

---

## Archive

- [`_archived_v1/`](_archived_v1/) — Original 6-day v1 (AI-only, click-tools)
- [`_archived_v2/`](_archived_v2/) — 8-day v2 (two-project, inspiration focus)

**Current = v3 (12 days, JS-deep, single capstone = News App).**

---

## License

[MIT](../LICENSE) © 2026 Hein Soe
