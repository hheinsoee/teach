# Course 0 — Module × Day Coverage Matrix (v4)

Which theBuilderPros module (A to K, with full names) gets how much attention on which day.

**v4 change**: React introduced from Day 6. Previous versions used vanilla DOM throughout.

See [`course-0-web-essentials.md`](course-0-web-essentials.md) for full syllabus and [`../context/theBuilderPros-roadmap.md`](../context/theBuilderPros-roadmap.md) for module source.

---

## Coverage matrix (full module names)

| Day | Topic | A — Programming Fundamentals | B — Dart & Flutter Basics | C — Development Tooling | D — Command Line & Terminal | E — Software Engineering Principles | F — AI / LLM & Agentic Coding | G — Web Fundamentals | H — HTML, CSS & JavaScript (+React) | I — Git & GitHub | J — DevOps & CI/CD Fundamentals | K — Agentic Coding (Advanced) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **1** | HTML + GitHub starter | | ✗ | ⭐ | ⭐ | ✗ | ⭐⭐⭐ | ⭐ | ⭐⭐⭐ | ☆ | ☆ | |
| **2** | CSS | | ✗ | | | ✗ | ⭐⭐⭐ | | ⭐⭐⭐ | ☆ | ☆ | |
| **3** | JS variables & types | ⭐⭐⭐ | ✗ | ⭐ | | ✗ | ⭐⭐⭐ | | ⭐⭐⭐ | ☆ | ☆ | |
| **4** | Functions & conditions | ⭐⭐⭐ | ✗ | | | ✗ | ⭐⭐⭐ | | ⭐⭐⭐ | ☆ | ☆ | |
| **5** | Loops + `.map()` | ⭐⭐⭐ | ✗ | | | ✗ | ⭐⭐⭐ | | ⭐⭐⭐ | ☆ | ☆ | |
| **6** | **Vanilla DOM + React intro** ⭐ | ⭐⭐ | ✗ | ⭐ | | ✗ | ⭐⭐⭐ | | ⭐⭐⭐ | ☆ | ☆ | |
| **7** | React state (`useState`) | ⭐⭐ | ✗ | ⭐ | | ✗ | ⭐⭐⭐ | | ⭐⭐⭐ | ☆ | ☆ | |
| **8** | React fetch (`useEffect`) | ⭐⭐ | ✗ | | | ✗ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ☆ | ☆ | |
| **9** | Capstone 2 — News App begins | ⭐⭐ | ✗ | ⭐ | | ✗ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ☆ | ☆ | |
| **10** | News App features | ⭐⭐ | ✗ | | | ✗ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ☆ | ☆ | |
| **11** | Polish + real users | | ✗ | | | ✗ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ☆ | ☆ | |
| **12** | 🎓 Showcase + what's next | | ✗ | ⭐ | ⭐⭐ | ✗ | ⭐⭐ | | | ☆☆ | ☆☆ | ⭐⭐ |

---

## Legend

| Symbol | Meaning |
|---|---|
| ⭐⭐⭐ | **Core focus** — main learning that day |
| ⭐⭐ | **Secondary** — present + actively applied |
| ⭐ | **Taught lightly** — touched as mini-lesson |
| ☆ | **Knowledge sharing** — explained briefly, not practiced |
| ☆☆ | **Deeper knowledge sharing** — Day 12 retrospective |
| ✗ | **Excluded entirely** — reserved for Course 1+ |
| (blank) | Not covered that day |

---

## Module summary with full names

| Module | ⭐⭐⭐ Core | ⭐⭐ Secondary | ⭐ Light | ☆ Knowledge share | Overall |
|---|---|---|---|---|---|
| **A — Programming Fundamentals** | 3-5 | 6-10 | — | — | ⭐⭐⭐ Deep |
| **B — Dart & Flutter Basics** | — | — | — | — | ✗ Excluded (Course 1+) |
| **C — Development Tooling** | — | — | 1, 3, 6, 7, 9, 12 | — | ⭐ Light |
| **D — Command Line & Terminal Skills** | — | 12 | 1 | — | ⭐ Light |
| **E — Software Engineering Principles** | — | — | — | — | ✗ Excluded (Course 1+) |
| **F — AI / LLM & Agentic Coding** | 1-11 | 12 | — | — | ⭐⭐⭐ Core, continuous |
| **G — Web Fundamentals** | 8, 9 | 10, 11 | 1 | — | ⭐⭐ Secondary |
| **H — HTML, CSS & JavaScript (+React)** | 1-9 | 10, 11 | — | — | ⭐⭐⭐ Deep |
| **I — Git & GitHub** | — | — | — | 1-11 (☆), 12 (☆☆) | ☆ Knowledge sharing |
| **J — DevOps & CI/CD Fundamentals** | — | — | — | 1-11 (☆), 12 (☆☆) | ☆ Knowledge sharing |
| **K — Agentic Coding (Advanced)** | — | 12 | — | — | ⭐⭐ Taste only |

---

## What changed in v4 (vs v3)

- **Day 6**: vanilla DOM → **vanilla DOM concept + React intro**
- **Days 7-12**: all React (useState, useEffect, components)
- **Module H**: now covers HTML + CSS + JS + **React/JSX**
- **Day 12** "Taste": adds Vite, TypeScript, Next.js, backend (previews what's next)

Previous versions taught vanilla DOM depth. v4 teaches vanilla as **concept** (so students see "why React exists") then switches to React.

**Rationale** (Hein, 2026-11-04): *"Vanilla က ခက်တယ်။ Day 6 ကနေ React မိတ်ဆက်"*

---

## Why B and E are excluded

### B — Dart & Flutter Basics
- Mobile stack (iOS/Android)
- Course 0 is web-only
- Reserved for Course 1+ or separate mobile track

### E — Software Engineering Principles
- Formal code review, testing, team collaboration
- Course 1 territory

---

## Visual density per day

| Day | ⭐⭐⭐ | ⭐⭐ | ⭐ | ☆ | Active modules |
|---|---|---|---|---|---|
| 1 | 2 | 0 | 3 | 2 | 7 |
| 2 | 2 | 0 | 0 | 2 | 4 |
| 3 | 3 | 0 | 1 | 2 | 6 |
| 4 | 3 | 0 | 0 | 2 | 5 |
| 5 | 3 | 0 | 0 | 2 | 5 |
| 6 | 2 | 1 | 1 | 2 | 6 |
| 7 | 2 | 1 | 1 | 2 | 6 |
| 8 | 4 | 1 | 0 | 2 | 7 |
| 9 | 3 | 1 | 1 | 2 | 7 |
| 10 | 1 | 3 | 0 | 2 | 6 |
| 11 | 1 | 2 | 0 | 2 | 5 |
| 12 | 0 | 2 | 2 | 2 | 6 |

**Heaviest day**: Day 8 (4 core modules align for React fetch)
**Lightest day**: Day 2 (CSS focused)

---

## What ☆ (knowledge sharing) means in practice

**Days 1-11** — 30-second reminders when something happens:

> *"သင်တို့ `push` button နှိပ်တိုင်း — background မှာ Git က code သိမ်းတယ်, GitHub Actions ကို message ပို့တယ်, Pages က rebuild လုပ်တယ်။ ဒါ CI/CD လို့ ခေါ်။ ဒီနေ့ — သိရုံပဲ။ Course 1 မှ သေချာ သင်မယ်။"*

Not a session. Not practiced. Just awareness.

**Day 12 (☆☆)** — full retrospective, ~10 minutes:
- Diagram on whiteboard
- What Git was tracking all along
- What GitHub stored
- What Actions ran
- What Pages published
- Why this matters in real jobs

---

## React-specific notes

**React is introduced on Day 6, not Day 1.**

**Why not Day 1?**
- Students need JS basics first (vars, functions, loops → Days 3-5)
- Without vars/functions/loops, React components make no sense
- Day 6 is pivotal: see vanilla pain → meet React

**Why React via CDN, not Vite?**
- No npm install
- No `node_modules`
- No terminal
- Same GitHub Pages deploy
- Simpler for beginners
- Course 1+ teaches Vite properly

---

## Materials

- Full syllabus: [`course-0-web-essentials.md`](course-0-web-essentials.md)
- Source modules: [`../context/theBuilderPros-roadmap.md`](../context/theBuilderPros-roadmap.md)
- Per-day plans: `day-01/` through `day-12/`
