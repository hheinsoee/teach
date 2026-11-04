# Course 0 — Web Essentials (v4)
## 12 Days × 90 min + Homework — JS-Deep + React from Day 6

**Format**: 6 weeks · 12 days · 90 min/day · **18 contact hours**
**Homework**: 3 hr/day · **36 homework hours**
**Total**: **54 hours**

**Taught at theBuilderPros workshops. Organized by theBuilderPros.**

---

## Mission

> **Teach absolute beginners to READ code, UNDERSTAND how browsers run it, DIRECT AI to generate it, and VERIFY the result works — using vanilla JS (Days 3-5), then React (Days 6-12) to ship a real News App with real users.**

**Positioning**: This is **vocational training** (AI-assisted web building trade skill) — NOT engineer training. No CS theory, no algorithms, no system design. Think "AI-era web builder apprenticeship" for shipping real apps.

### Core principle (Hein, 2026-11-03)

> *"Code ကို အဓိက မသင်။ AI ရှိတယ်။ Code ကို သဘောပေါက်ရမယ်, ဖတ်တတ်ရမယ်။"*

### The Four Skills

| Skill | What it means |
|---|---|
| **Read** | Open any HTML/CSS/JS/JSX file and say what each line does |
| **Understand** | Know how browsers run code, where state lives, what triggers what |
| **Direct** | Prompt AI to produce the code you need |
| **Verify** | Run it, check behavior, read it, catch what's wrong |

**No syntax drills. No hand-typed loops. AI generates; students read, understand, modify, verify.** But understanding is **deep** — students know what a variable, function, loop, event, component, state is.

---

## Course Structure (12 days, 2 phases)

### Phase 1 — Learning (Days 1-8): Habit Tracker as practice vehicle

Students build a Habit Tracker across 8 days:
- Days 1-5: HTML, CSS, vanilla JS fundamentals (variables, functions, loops)
- Day 6: Vanilla DOM concept → **React intro** (switch to React from here)
- Day 7: React state (`useState`) + localStorage
- Day 8: React fetch (`useEffect`) + API

**Habit Tracker is NOT a capstone — it's a learning vehicle.**

### Phase 2 — Capstone (Days 9-12): News App in React

Students build a React News App that fetches from Hein's pre-built API. This IS the capstone — graded, presented, user-tested.

---

## Why React from Day 6?

**Vanilla DOM manipulation is painful for beginners**:
- 8 lines to create one `<li>` with checkbox
- `createElement`, `appendChild` verbosity
- UI structure hidden in code

**React is declarative**:
- 3 lines for the same `<li>` via JSX
- UI structure visible
- AI generates clean React code

**Course 0 approach**:
- **Day 6**: Show vanilla DOM as concept (don't write it). Introduce React. Switch Habit Tracker to React.
- **Day 7-12**: All React. Use CDN (no npm, no build step). Keep Course 0 scope simple.

**No TypeScript, no Vite, no npm.** Course 1+ teaches the build pipeline.

---

## Modules A-K Coverage

| Module | Depth | Where |
|---|---|---|
| **A** — Programming Fundamentals | ⭐⭐⭐ Deep (reading) | Days 3-8 (JS vars, functions, loops, DOM, state) |
| **B** — Dart & Flutter | ❌ Excluded | Course 1+ |
| **C** — Dev Tooling | Light | Day 1 (VS Code, DevTools), Day 12 (Vite preview) |
| **D** — Terminal | Light | Day 1 (GitHub Desktop) + Day 12 (retrospective) |
| **E** — Software Engineering | ❌ Excluded | Course 1+ |
| **F** — AI/LLM | ⭐⭐⭐ Core, continuous | Every day |
| **G** — Web Fundamentals | Light | Day 1, 8-9 (HTTP, fetch) |
| **H** — HTML/CSS/JS/JSX | ⭐⭐⭐ Deep (reading) | Days 1-12 |
| **I** — Git & GitHub | ☆ Knowledge sharing | Day 1 setup + daily push + Day 12 retrospective |
| **J** — DevOps/CI/CD | ☆ Knowledge sharing | Day 1 Pages + daily auto-deploy + Day 12 retrospective |
| **K** — Agentic Coding | ⭐⭐ Taste only | Day 12 |

**New in v4**: React from Day 6 extends H (now covers JSX too).

---

## The 12 Days

### Week 1 — HTML & CSS Foundation

#### Day 1 — HTML + GitHub Starter
- Students clone pre-made starter, see Pages auto-deploy
- First HTML via AI
- 🚀 Live URL from Day 1

#### Day 2 — CSS Styling
- Style Habit Tracker via AI
- Iterate styles

---

### Week 2 — JS Fundamentals (vanilla)

#### Day 3 — JS Variables & Types
- `let`, `const`, string, number, boolean, array
- `console.log` for debugging

#### Day 4 — Functions & Conditions
- `function`, parameter, return
- `if/else`, operators (`===`, `>`, `&&`, `||`)

---

### Week 3 — Loops & React Intro

#### Day 5 — Loops
- `for`, `forEach`, `.map()`
- Iterate arrays

#### Day 6 — **Vanilla DOM concept + React intro** ⭐
- Show vanilla DOM as CONCEPT (don't write)
- **Switch to React via CDN** (no npm)
- JSX, components, `.map()` in JSX
- 🔀 **Pivotal day** — all later days use React

---

### Week 4 — React State & External Data

#### Day 7 — React State (`useState`) + localStorage
- `useState` hook
- `useEffect([state])` for localStorage save
- Habit Tracker interactive + persistent 🚀 (practice COMPLETE)

#### Day 8 — React Fetch (`useEffect` + fetch)
- Add motivational quote via quotable.io API
- Loading state, error state
- `useEffect(() => {}, [])` on mount
- Prep for Capstone

---

### Week 5 — Capstone 2 (News App in React)

#### Day 9 — Capstone 2 Begins: News App Setup
- Fresh `news-app` repo (React starter)
- Fetch from Hein's API
- ArticleCard component
- Articles display

#### Day 10 — Capstone 2: Features
- Search, category filter, click-to-expand
- All via React state + conditional rendering
- Pick 2-3 features

---

### Week 6 — Polish & Showcase

#### Day 11 — Polish + Real Users
- Read your own code with AI
- Share URL with 3+ real people
- Collect feedback
- Fix 1 thing based on feedback

#### Day 12 — 🎓 Showcase + What's Next
- 3-min presentation per student
- "What was Git doing?" retrospective
- **Taste**: Vite, TypeScript, Next.js, backend
- Course 1 preview
- 🎓 Capstone 2 presented

---

## The Capstone — News App Only

Only ONE formally marked capstone: **News App (Days 9-12)**.

**Why React News App over vanilla Habit Tracker as capstone**:
- Industry-relevant skill
- Easier to read for beginners (JSX vs DOM)
- Fetch/API teaches "web is connected"
- Habit Tracker gets built as byproduct of learning

### Completion markers (News App)

| # | Marker | Evidence |
|---|---|---|
| 1 | News App is live | GitHub Pages URL loads |
| 2 | Fetches from API | Articles appear on load |
| 3 | Built with React | Components visible in code |
| 4 | 3+ real users | Quotes in Day 11-12 submissions |
| 5 | Can explain code | Day 12 showcase (3 min, own words) |

**Habit Tracker completion** is encouraged but NOT required.

---

## Git/Deploy — Integrated, Not Taught

**Day 1**: Clone pre-made starter (via GitHub Desktop). Pages enabled. Push gets auto-deploy.

**Days 1-11**: Every day ends with `git commit && git push`. Instructor demos in 2 min. Zero concept intro.

**Day 12**: 10-min retrospective — "What was Git doing all 12 days? What's CI/CD?"

Git/Deploy as **background competence**, not foreground topic.

---

## Day Timing (90 minutes)

Every day:

| Block | Minutes | Purpose |
|---|---|---|
| Homework review | 10 | Who shipped? Who got stuck? |
| Concept intro | 10-15 | New vocab + why it matters |
| Instructor demo | 15 | Live AI prompt → generated code → read line by line |
| Student build | 35-40 | Students prompt AI, read code, modify, ship |
| Label + commit | 10-15 | Own words, what did we do? |

If content doesn't fit, cut concept intro — never cut Student Build or Label.

---

## Homework (3 hr/day, 36 hr total)

Each day: **Research (1 hr) + Build (1-1.5 hr) + Reflect (0.5 hr)**

Submit via Google Classroom (URLs + text + screenshots).

---

## Vocabulary (by Day 12)

| Day | New words |
|---|---|
| 1 | website, URL, HTML, tag, element, repository, clone, deploy |
| 2 | CSS, selector, property, value |
| 3 | variable, let, const, string, number, boolean, array, console |
| 4 | function, parameter, return, if/else, operator, DRY |
| 5 | for, forEach, .map(), iteration, index |
| 6 | DOM, React, JSX, component, props |
| 7 | useState, hook, state, useEffect, dependency array |
| 8 | fetch, HTTP, request, response, API, async |
| 9 | capstone, ArticleCard, conditional rendering |
| 10 | search, filter, modal, dark mode |
| 11 | UX feedback, iteration, polish |
| 12 | Vite, TypeScript, Next.js, backend, CI/CD |

~65 words. Students leave with vocabulary to **continue learning on their own**.

---

## Tech stack

| Layer | Tool |
|---|---|
| HTML | Plain, hand-written (with AI) |
| CSS | Plain, external file |
| JS (Days 3-5) | Vanilla JavaScript |
| **JS (Days 6-12)** | **React 18 via CDN** + Babel standalone |
| Build | **None** — Babel in browser (dev mode) |
| State | `useState`, `useEffect` |
| Deploy | GitHub Pages (auto via Actions) |
| AI | ChatGPT or Claude |
| Code editor | VS Code (or any) |
| Version control | GitHub Desktop (not git CLI) |

**No TypeScript, no Vite, no npm, no node_modules.** Keep Course 0 scope simple. Course 1+ handles those.

---

## What Course 0 Is NOT

- ❌ Not programmer training (Course 1+)
- ❌ Not TypeScript / Vite / build pipeline (Course 1+)
- ❌ Not backend / database / auth (Course 1+)
- ❌ Not job-ready after 54 hours
- ❌ Not framework depth (React basics only, not Router, Context, custom hooks)

**What it IS**:

- ✅ Code literacy for beginners
- ✅ JS fundamentals (reading-level)
- ✅ React intro (components, state, effects)
- ✅ AI tool fluency
- ✅ Deploy exposure (integrated)
- ✅ Confidence to continue to Course 1

---

## Materials

| Path | Contents |
|---|---|
| [`course-0-web-essentials.md`](course-0-web-essentials.md) | THIS FILE — syllabus |
| [`README.md`](README.md) | Overview |
| [`AGENT.md`](AGENT.md) | AI agent rules |
| [`module-coverage-matrix.md`](module-coverage-matrix.md) | Module × Day matrix |
| [`../context/theBuilderPros-roadmap.md`](../context/theBuilderPros-roadmap.md) | Source material |
| `day-01/` ... `day-12/` | Per-day: README, exercise, homework |
| `instructor/` | tool-setup, pacing, api-setup, completion-markers, classroom-setup, starter-repo-setup |
| `_archived_v1/` | OLD 6-day v1 (AI-only click tools) |
| `_archived_v2/` | OLD 8-day v2 (two-project) |
