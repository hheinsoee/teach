# theBuilderPros — Course Context

**Source**: `viber_image_2026-10-28_17-11-38-968.jpg` (theBuilderPros's "Development 101 — Technical and Production Discovery Map")

**Received from**: theBuilderPros via Viber on 2026-10-28

**Purpose**: Document theBuilderPros's intended curriculum design so the Absolute Beginner course (`course-0-web-essentials/`) aligns with what the organizer actually wants. This supersedes earlier guesses in the syllabus.

---

## Overview — "Development 101"

A **story-driven, discovery-based** introductory programming curriculum. The entire tech stack is unpacked through one character's journey: **Marcus**.

> Marcus forgets to drink water. He looks for a better solution and decides to build a simple app.

Marcus's problem → tiny HTML page → full product with real users. Every tech layer is introduced **when Marcus needs it**, not before.

**Theme**: *"From a simple idea to real users — what you learn, what you build, and how it goes from code to production."*

---

## Marcus's Story Arc — 7 Stages

| # | Stage | What Marcus Does | What's Learned |
|---|---|---|---|
| **1** | Everyday Problem & Idea | Marcus forgets to drink water. Looks at user needs, from idea to requirements. | Problem identification, user research, first-use case |
| **2** | **First App: Sip** (Plain HTML/CSS/JS) | Build a simple web app with HTML, CSS, JS. "Make it work in the browser. First real code, real result." | Structure, style, behavior |
| **3** | Understand the Browser Model | See how the app works inside the browser. | Structure, presentation, logic, state, events, execution + Browser APIs |
| **4** | Add Features (Experiment & Build) | Grow the app through small, runnable features (R1-R5): R1 Water Quiz, R2 Countdown (timer), R3 Drink Button (events), R4 Reminder (notifications), R5 Reminder (notifications). Guided experiments. Modify, test, verify. Integrates features into Sip. | Experimentation, iteration, DevTools |
| **5** | **Use Frameworks** (React & Flutter) | Rebuild or extend Sip using frameworks. Compare approaches and understand when/why to use them. | Component-based development, state management, DRY, code reuse |
| **6** | **Package, Deploy & Distribute** | Run the same app in different environments and share it with real users: **Web**, **Browser extension**, **Desktop (Electron)**, **Mobile app**, **App store**. | Build pipelines, deploy, understand platform differences |
| **7** | **Real Users, Feedback & Growth** | People use Sip. New requirements, feedback, iteration, support. Including building the Employee Wellness Super-App. | User feedback, iteration, maintenance, moving to real production |

---

## Technology Layers (from code to running in the browser)

The Sip app is used to illustrate every layer:

| Layer | What's inside |
|---|---|
| **1. Execution environment** | Browser runtime, rendering engine, JavaScript engine, memory, security, permissions, OS integration |
| **2. Browser APIs** | Timers, storage (local, cloud), network (fetch), device APIs, DevTools |
| **3. Application logic** | Variables, functions, events, state, conditions, data, structures, modules |
| **4. Presentation** | CSS layout, styling, responsive design, transitions, accessibility |
| **5. Structure** | HTML elements, document structure, DOM, user inputs, buttons, containers |

**Visualization in the image**: Sip app shown as a column with these 5 layers labeled, and the "90.00" counter is the water countdown timer running at Application logic + Structure levels.

---

## Code to Production (End-to-End Workflow)

The journey from "I wrote code" to "users use it":

| Stage | Action | Key tools |
|---|---|---|
| **Develop** | Write and organize code | VS Code, Terminal |
| **Version Control** | Track changes with Git and GitHub | Git, GitHub |
| **Build & Test** | Run tests, check quality, build | Vite, test runners |
| **Package** | Wrap app with web, mobile, desktop, or extension targets | React, Flutter, Node, Electron |
| **Deploy** | Deploy to hosting, extension store, or app store | Hosting platforms, app stores |
| **Operate** | Monitor usage, collect feedback, fix issues, add features | Analytics, Issue tracker |

---

## Modules A-K (From the Course Brief)

The underlying knowledge dimension. These modules thread through Marcus's story — not taught as standalone units.

| Module | Topic | Example Activities | Course 0 scope |
|---|---|---|---|
| **A** | **Programming Fundamentals** | Variables & data types, Loops & logic, Conditions, Functions, Data structures, Problem solving, Debugging | ✅ Reading-level |
| **B** | **Dart & Flutter Basics** | Dart language basics, Flutter widgets, State management, Build simple app, Rebuild Sip in Flutter | ❌ **Excluded** (deferred) |
| **C** | **Development Tooling** | Install and setup, Editor (VS Code), Productivity hacks, Debugging DevTools, Browser DevTools, VS Code workflow | ✅ Light |
| **D** | **Command Line & Terminal Skills** | Terminal basics, File system & navigation, Productivity tricks, Debugging tools, Scripting basics, Use terminal with Git and build |
| **E** | **Software Engineering Principles** | Requirements & design, Code review & process, Testing and quality, Team collaboration, Write tests, Refactor code |
| **F** | **AI / LLM & Agentic Coding** | Using AI tools effectively, Prompting for coding, Reviewing AI-assisted development, Client/server basics, Use AI to generate code in Marcus's Sip app |
| **G** | **Web Fundamentals** | How the web works, HTTP, Hosting, Domain and DNS, Browser request flow, Explain how R1 works through DNS, HTTP |
| **H** | **HTML, CSS & JavaScript (Design)** | HTML structure, CSS styling, JavaScript basics, JavaScript in the browser, DOM manipulation, Build Sip main browser app |
| **I** | **Git & GitHub** | Version control basics, Branching strategies, Pull requests, GitHub basics, Collaboration workflow, Push Sip code, Collaborate and review |
| **J** | **DevOps & CI/CD Fundamentals** | Build and test automation, Deploy to Vercel, Monitoring, Environment management, Logging, Set up deployment, Automate builds |
| **K** | **Agentic Coding (Advanced)** | Advanced use of AI/agents, AI tools and when, Combine agents to automate real workflows, Use AI agents in Sip team |

---

## Capstone — Employee Wellness Super-App

**Final project**: *"Combine what you learn to build a real application for real users. Plan, build, test, deploy and operate it — with AI, from laptop to live."*

**Integrates all Modules A-K.**

This is the natural evolution from Marcus's personal "Sip" app into a multi-user, production-grade product. The capstone proves the student can go from idea → shipping product.

---

## Critical Alignment Points

### What theBuilderPros wants (clear from the roadmap)

1. **Story-driven**, not module-first. A character's needs drive what gets taught, when.
2. **Hand-coded first** — Plain HTML/CSS/JS **before** frameworks, **before** AI tools.
3. **Full stack of tech**: HTML/CSS/JS → React → ~~Flutter~~ → ~~Electron~~ → ~~app stores~~ (Course 0 is **web only**; mobile/desktop deferred)
4. **Real production path**: version control → CI/CD → deploy → monitoring → user feedback
5. **AI as one tool, not the only tool** — Module F (AI/LLM) sits alongside Module A (Programming Fundamentals), Module I (Git), etc.
6. **Full-spectrum curriculum** — not just "ship with AI", not just "learn to code"

### Hein's teaching principle (confirmed 2026-11-03)

> **"Code ကို အဓိက မသင်။ AI ရှိတယ်။ Code ကို သဘောပေါက်ရမယ်, ဖတ်တတ်ရမယ်။"**
>
> *(Don't teach code as the primary thing. AI is there. Students must understand code and be able to read it.)*

This means:

- ✅ **Teach**: code reading, comprehension, AI direction, verification of AI output
- ❌ **Don't teach**: syntax drills, memorization, writing from scratch by hand
- AI tools (ChatGPT, Claude, Cursor) **generate the code**; students **read, understand, modify, verify**
- Code is visible (not hidden behind v0/Lovable abstractions) — students must see HTML/CSS/JS to learn to read it

### Scope exclusions for Course 0 (confirmed 2026-11-03)

Hein confirmed these are **out of scope** for Course 0:

- **Backend** — No server, no database beyond browser localStorage, no API design, no auth system. Browser APIs + localStorage + 3rd-party services (if needed) only. Backend concepts are introduced on Day 1 ("what it is, where it lives") but not practiced.
- **Dart & Flutter (Module B)** — Course 0 stays browser-first. Mobile development, Dart language, and Flutter widgets are deferred. When Marcus story Stage 5 mentions "Frameworks (React & Flutter)", only React (web) is covered; Flutter is skipped.
- **App store distribution** — Marcus Stage 6 includes "mobile app, app store". Course 0 covers web + browser extension deploy only.
- **Advanced agentic workflows (Module K deep)** — Introduced as a concept, not practiced.

**Rationale**: Course 0 is 8 days × 90 min + homework. Browser-only web stack keeps the surface area small enough that students can read code (Hein's "code ဖတ်တတ်ရမယ်" principle) without drowning in platform differences.

### Project vehicle is flexible (confirmed 2026-11-03)

> **"Sip, Marcus အကြောင်း အဓိက မဟုတ်။ Task manager တောင် ဟုတ်အုံးမယ်။"**
>
> *(Sip and Marcus aren't the main thing. Even a task manager would work.)*

Marcus's "Sip" app (water reminder) is theBuilderPros's **example story**, not a mandatory project. The curriculum teaches the pattern (problem → first app → iterate → deploy → users). The specific app can be any beginner-friendly single-page app.

**Course 0 uses TWO fixed projects** (confirmed 2026-11-03):

### Project 1 — Daily Habit Tracker (standalone, offline)

- **Vehicle for**: Modules A, G, H (reading-level), I, J, C, D
- **Tech**: HTML + CSS + JS + localStorage only
- **No internet needed after first load**
- **No backend, no API, no fetch**
- Students see every line of code, read it, modify it (with AI help)
- **Lifecycle**: Days 1-5 build this fully
- **Why**: Beginner-friendly (boolean logic, visual checkbox feedback). Myanmar context relevant (ဘုရားရှိခိုး, စာကျက်, exercise). Low cognitive load — students focus on reading code, not business logic.

### Project 2 — News App (fetch from API)

- **Vehicle for**: Module G (HTTP, request/response), F (AI for parsing JSON), introduces "server exists" concept
- **Tech**: HTML + CSS + JS + `fetch()` to a public API
- **The API is pre-built by Hein** — students only consume it
- **No backend work by students** — they only read data, display it
- **Lifecycle**: Days 6-8 build this
- **Purpose**: Bridge to Course 1 (where backend is covered). Students see "server exists, returns JSON, we display it", but don't build the server.

**Why TWO projects**:

- Expense Logger teaches browser fundamentals + storage without any server concept
- News App introduces fetch/API/server-exists without building a server
- Together they cover the full browser-side story Course 0 needs to deliver

**No other projects allowed in Course 0.** Fixed scope prevents in-class debugging chaos (every student has the same code; one bug has one fix the whole room learns from). Capstone (Day 8) is extending one of these two, not a new app.

### What theBuilderPros does NOT want (what my earlier design got wrong)

1. ❌ AI-tools-only (v0, Lovable, Supabase click-only) — their roadmap shows **hand-coded fundamentals + real frameworks**
2. ❌ "Inspiration course, no code" — they want **real code from Day 1 (Sip app)**
3. ❌ Vibe-coder filtering as the main design concern — their design is **discovery-based, not gating**
4. ❌ 6-day short course — their roadmap is **A-K modules + capstone**, which is bigger than 6 days of 2hr each

### What's unclear / needs confirmation

1. **Total duration** — the image doesn't specify how many days/weeks they expect
2. **Depth per module** — do they want survey-level introduction to all 11 modules, or deep dive into subset?
3. **Which modules are mandatory for Absolute Beginner level vs which are optional/next course?**
4. **Capstone expectations** — do they expect it done by the end of Course 0, or at the end of a longer sequence?

---

## How this maps to Hein's current reality (`ab/`)

Hein has already been teaching in-line with this roadmap, even if the Course 0 syllabus didn't say so:

| `ab/` reality | Marcus story stage | Modules touched |
|---|---|---|
| `ab/day1/` — HTML + CSS landing page | Stage 2 — First App: Sip | H (HTML/CSS/JS Design), C (tooling) |
| `ab/day2/` — HTML + CSS + JS color changer | Stage 2 → 3 — Sip + Browser Model | H, A (fundamentals: variables, events) |
| GitHub Pages auto-deploy | Stage 6 — Deploy & Distribute | I (Git/GitHub), J (CI/CD) |

**This means**: Hein's teaching is already closer to theBuilderPros's roadmap than the Course 0 syllabus is. The syllabus is what needs to catch up to reality.

---

## Design decisions for the 8-day × 90-min course

Given the roadmap scope is bigger than 8 days × 90 min allows, the course must:

1. **Pick which Marcus stages fit in 8 days** — can't do all 7 at depth
2. **Pick a subset of Modules A-K to touch** — survey others, deep-dive 3-4
3. **Make the capstone realistic for 8 days** — likely Stage 7's "Sip for real users" rather than full Employee Wellness Super-App
4. **Protect Marcus's problem → first app → ship arc** — this is the discovery pattern theBuilderPros wants preserved

See `course-0-web-essentials/course-0-web-essentials.md` for the 8-day × 90-min design built on this context.

---

## Open questions for theBuilderPros

Before finalizing the 8-day plan, Hein should confirm:

1. Is 8 days × 90 min **enough** for this scope, or is Course 0 meant to be a survey only?
2. Does the capstone need to be the full "Employee Wellness Super-App", or is a smaller user-facing app OK?
3. Are **React / Flutter** required coverage in Course 0, or saved for next course?
4. Is **Dart & Flutter** (Module B) in-scope for Course 0, or next course?
5. Is there an existing cohort size, student profile (age, English level, prior tech) assumption?

Without these, the 8-day design is based on best guess from the image alone.
