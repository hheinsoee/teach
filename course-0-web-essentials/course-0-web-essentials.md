# Course 0 — Web Essentials (v2)
## 8 Days × 90 min + Homework — Code Reading & AI Direction

**Format**: 4 weeks · 8 days · 90 min/day · **12 contact hours**
**Homework**: 3 hr/day · **24 homework hours**
**Total**: **36 hours**

**Taught at theBuilderPros workshops. Organized by theBuilderPros.**

---

## Mission

> **Teach absolute beginners to READ code, UNDERSTAND how it runs in the browser, DIRECT AI to generate it, and VERIFY the result works — by building two web apps from scratch.**

**Core principle (from Hein, 2026-11-03)**:

> *"Code ကို အဓိက မသင်။ AI ရှိတယ်။ Code ကို သဘောပေါက်ရမယ်, ဖတ်တတ်ရမယ်။"*
>
> *(Don't teach code as the primary thing. AI exists. Students must understand code and be able to read it.)*

### The Four Skills

| # | Skill | What it means |
|---|---|---|
| **1. Read** | ကုဒ်တစ်ကြောင်းချင်းကို ဖတ်တတ် | Open any HTML/CSS/JS file and say what each line does |
| **2. Understand** | ကုဒ်က ဘာလို့ အလုပ်လုပ်လဲ သိ | Know how the browser runs the code, where state lives, what triggers what |
| **3. Direct** | AI ကို ကုဒ်ထုတ်ပေးဖို့ မှာတတ် | Write a prompt that produces the code you need |
| **4. Verify** | AI ထုတ်တဲ့ ကုဒ် မှန်မမှန် စစ်တတ် | Run it, check behavior, read it, catch what's wrong |

**No syntax drills. No "type 20 loops". No manual code memorization. AI generates; the student reads and verifies.**

---

## Modules Covered (A-K from theBuilderPros)

| Module | Course 0 depth | Where it appears |
|---|---|---|
| **A** — Programming Fundamentals | Reading-level only | Days 2-4 (variables, functions, events in Habit Tracker) |
| **B** — Dart & Flutter | ❌ Excluded | Course 1+ |
| **C** — Development Tooling | Light | Day 1 (VS Code, browser DevTools) |
| **D** — Terminal | Light | Day 5 (git commands only) |
| **E** — Software Engineering | Concept | Day 7 (code review, verifying AI output) |
| **F** — AI / LLM Coding | ⭐ Core, continuous | Days 2-8 (every day uses AI) |
| **G** — Web Fundamentals | Light | Day 1 (how the web works), Day 6 (HTTP, fetch) |
| **H** — HTML/CSS/JS | ⭐ Depth (reading) | Days 2-4 (Habit Tracker build) |
| **I** — Git & GitHub | Light | Day 5 (basic workflow) |
| **J** — DevOps/CI/CD | Light | Day 5 (GitHub Pages auto-deploy) |
| **K** — Agentic Coding Advanced | Taste only | Day 8 (showing what's possible) |

**Depth philosophy**: Deep on H, F, A reading. Light on C, D, I, J, G. Taste on E, K. Excluded B.

---

## The Two Projects

### Project 1 — **Daily Habit Tracker** (Days 1-5)

Standalone, offline, browser-only. localStorage persistence. No backend.

**What it does**:
- Add habits (ဘုရားရှိခိုး, စာကျက်, exercise, etc.)
- Check off each habit per day
- See today's progress
- Streak counter (via AI)
- Data persists after browser close

**Why this project**:
- Beginner-friendly (boolean logic, visual checkbox feedback)
- Myanmar context relevant
- Low cognitive load — students focus on reading code, not business logic
- Natural progression Day 1 → Day 5 (HTML → CSS → JS → Features → Deploy)

### Project 2 — **News App** (Days 6-8)

Browser-only. Consumes an API that Hein pre-builds and hosts. Students only fetch and display.

**What it does**:
- Fetch news articles from `https://api.heinsoe.com/news.json` (or similar)
- Display: title, image, date, body preview
- Filter by category
- Click to read full article

**Why this project**:
- Introduces "server exists, returns JSON" concept
- Teaches `fetch()`, async/await (reading-level, not writing)
- Bridge to Course 1 (where backend is covered)
- Shows students: real apps have moving parts beyond the browser

---

## The 8 Days

### Week 1 — Build the Habit Tracker

#### Day 1 — Problem, Idea & First HTML
**Marcus stage**: 1-2 (Problem → First App)
**Modules touched**: C (VS Code intro), G (how the web works), H (HTML structure)
**Class (90 min)**:
- 15 min — What this course is / isn't (expectation set)
- 10 min — "Why does Marcus need Sip? Why do you need an app?" (problem framing)
- 15 min — Live demo: AI generates first HTML, instructor reads it line by line
- 40 min — Students use AI to generate their Habit Tracker HTML skeleton, read every line
- 10 min — Label: "What is HTML? What does `<h1>` mean? What is a tag?"
**🚀 Ships**: HTML file open in browser with habits listed
**Homework (3 hr)**:
- Research: "What is HTML?" (watch 2 YouTube videos, write 3 sentences in Burmese)
- Modify the HTML — add 3 more habits, change the heading
- Open DevTools, click Elements tab, explore
- Submit: screenshot of modified page + 3-sentence reflection

#### Day 2 — CSS Styling
**Marcus stage**: 2 continued
**Modules touched**: H (CSS depth), F (AI for styling)
**Class (90 min)**:
- 15 min — Homework review (show 2-3 student styles)
- 10 min — "What is CSS? Style vs structure"
- 15 min — Instructor demo: AI prompts for styling
- 40 min — Students prompt AI for Habit Tracker CSS, read the generated CSS, modify colors
- 10 min — Label: "What does `color` mean? What is a class? What is a selector?"
**🚀 Ships**: Styled Habit Tracker (dark/light theme, nice fonts)
**Homework (3 hr)**:
- Research: 3 CSS properties (watch tutorials, write what they do)
- Try 2 different styles via AI, pick favorite
- Add a hover effect
- Submit: screenshot + 2 CSS properties explained in own words

---

### Week 2 — Make It Interactive

#### Day 3 — JavaScript Basics (reading)
**Marcus stage**: 2-3 (First App → Browser Model)
**Modules touched**: A (variables, functions reading), H (JS in browser)
**Class (90 min)**:
- 15 min — Homework review
- 15 min — "What is JavaScript? HTML = structure, CSS = look, JS = behavior"
- 15 min — Instructor demo: AI generates "click to mark done" JS
- 35 min — Students prompt AI, read the JS, change which habits can be marked
- 10 min — Label: "What is a variable? What is a function? What is an event?"
**🚀 Ships**: Habit Tracker where clicking a checkbox marks it done
**Homework (3 hr)**:
- Research: variable, function, event — 3-sentence definitions in own words
- Add a "clear all" button (via AI)
- Break the code on purpose — delete one line, see what happens, restore
- Submit: before/after screenshot + bug report

#### Day 4 — localStorage & Add Features
**Marcus stage**: 4 (Add Features)
**Modules touched**: A (data persistence concept), H (DOM), F (AI prompting for features)
**Class (90 min)**:
- 15 min — Homework review
- 10 min — "Where does your data go? Browser memory vs saved."
- 15 min — Demo: refresh the page, data disappears → add localStorage via AI
- 40 min — Students add 3 features via AI prompts:
  - Save/load habits across refresh
  - Streak counter
  - Reset streak button
- 10 min — Label: "What is localStorage? What is state? Where does it live?"
**🚀 Ships**: Habit Tracker with persistent data + streaks
**Homework (3 hr)**:
- Research: localStorage limits, privacy, what browser APIs exist
- Add ONE feature of your own via AI (e.g., delete habit, edit habit)
- Break and fix (planted bug via AI)
- Submit: feature demo + 1 bug fixed story

---

### Week 3 — Ship It

#### Day 5 — Git, GitHub & Deploy
**Marcus stage**: 6 (Package, Deploy, Distribute — web part only)
**Modules touched**: I (Git), J (CI/CD), D (terminal basics)
**Class (90 min)**:
- 15 min — Homework review
- 10 min — "What is version control? Why does code history matter?"
- 15 min — Demo: `git init`, commit, push to GitHub, Pages auto-deploys
- 40 min — Students put their Habit Tracker on GitHub + GitHub Pages
- 10 min — Label: "What is a commit? What is CI/CD? What does GitHub Pages do?"
**🚀 Ships**: Live URL on internet (`username.github.io/habit-tracker/`)
**Homework (3 hr)**:
- Research: How Git works (watch 1 video), what is CI/CD
- Make 3 commits with meaningful messages
- Share URL with 2 friends, watch them use it
- Submit: live URL + commit history screenshot + friend feedback (verbatim)

---

### Week 4 — Fetch Data From the World

#### Day 6 — News App: Introduction + Fetch
**Marcus stage**: 7 (connecting to the world)
**Modules touched**: G (HTTP, request/response), F (AI for API work), A (async concepts reading-level)
**Class (90 min)**:
- 15 min — Homework review (show live Habit Trackers)
- 15 min — "Where does Facebook get its posts? What is an API? What is JSON?"
- 15 min — Instructor demo: open the News API URL in browser, see JSON. AI generates fetch code.
- 35 min — Students build News App skeleton with AI, fetch from `https://api.heinsoe.com/news.json`, display titles
- 10 min — Label: "What is fetch? What is JSON? What is a server?"
**🚀 Ships**: News App showing live data from API
**Homework (3 hr)**:
- Research: What is HTTP, what is JSON (one tutorial each)
- Explore the API: open the URL, read the JSON, identify fields
- Add image + date display via AI
- Submit: screenshot + "what the API returns" summary

#### Day 7 — News App: Features & Code Review
**Marcus stage**: 7 continued
**Modules touched**: E (software engineering — reviewing AI code), F (prompting craft), H (DOM depth)
**Class (90 min)**:
- 15 min — Homework review
- 20 min — "AI gets things wrong. Here's how to spot it." (code review intro)
- 15 min — Live: instructor shows an AI-generated News App with 2 bugs, students find them
- 30 min — Students add features: filter by category, click to expand, loading state
- 10 min — Label: "What is a bug? What is 'code review'? Why does AI sometimes lie?"
**🚀 Ships**: News App with filters + expand + loading state
**Homework (3 hr)**:
- Research: 3 common AI coding mistakes
- Review your own News App code: write 1 thing AI did well + 1 thing you'd change
- Add final feature (dark mode, search, etc.)
- Submit: code review doc (1 page) + updated app

#### Day 8 — Capstone: Showcase + Real Users + What's Next
**Marcus stage**: 7 — Real Users + Growth
**Modules touched**: F (final AI skills), E (user feedback), K (taste only — "look what's possible")
**Class (90 min)**:
- 15 min — Homework review
- 30 min — Each student presents BOTH apps (Habit Tracker + News App) — 3 min each
- 20 min — "Taste of advanced" — instructor shows:
  - What agentic AI tools (Cursor, v0, Lovable) do differently
  - What React / frameworks give you
  - What backend adds
- 15 min — "What's next" — Course 1 preview, resources list, Burmese learning channels
- 10 min — Close + certificate
**🎓 Ships**: Both apps live, with 3+ real users each
**Homework (post-course, 1 week)**:
- Share both apps with 5 real people
- Collect feedback
- Pick one app, keep improving for 1 week
- Submit: final write-up (what worked, what didn't, what's next for them)

---

## Day Timing (90 minutes)

Every day follows the same shape:

| Block | Minutes | Purpose |
|---|---|---|
| Homework review | 15 | Who shipped? Who got stuck? What did research find? |
| Concept intro | 10-15 | New vocabulary + why it matters (brief, no lecture) |
| Instructor demo | 15 | Live AI prompt → generated code → read it line by line |
| Student build | 35-40 | They prompt AI, read code, modify, ship |
| Label | 10 | In their own words, what did we just do? Vocabulary stuck. |

**No lectures beyond 15 min.** No theory before practice. If content doesn't fit in 90 min, cut concept intro — never cut Student Build or Label.

---

## Homework Structure (3 hr/day)

Every day's homework = **Research (1 hr) + Build (1-2 hr) + Reflect (0.5 hr)**

### Research (1 hr)

Topics assigned by instructor. Sources:
- YouTube (Burmese or English with subtitles)
- MDN Web Docs (reference)
- ChatGPT / Claude (ask for explanations)

Output: 3-5 sentences in own words (Burmese OK)

### Build (1-2 hr)

Apply what was learned in class to:
- Extend the project with a new feature
- Modify something (change styling, add habit, change API display)
- Break something on purpose, then restore (debugging practice)

### Reflect (0.5 hr)

Write 3-5 sentences:
- What worked
- What didn't
- One question you still have

**Submit via Google Classroom** — URL + screenshots + reflection text.

---

## Pass Criteria (soft, inspiration-focused)

**No pass/fail grading.** Course 0 is inspiration-focused. The deliverables below are **completion markers**, not gating criteria.

| # | Marker | Evidence |
|---|---|---|
| 1 | Habit Tracker shipped live | GitHub Pages URL that works |
| 2 | News App shipped live | GitHub Pages URL that works |
| 3 | 3+ real users on at least one app | Feedback collected in writing |
| 4 | Can explain what their code does | Day 8 oral presentation (3 min) |

**Hein's note**: These are evidence of inspiration taking hold, not a filter to fail students. Any student who completes the arc — even with help — has succeeded. The goal is to **spark curiosity for Course 1**, not to filter.

---

## Vocabulary Table (grows across 8 days)

By Day 8, students can define these in their own words:

| Day | New words |
|---|---|
| 1 | website, browser, URL, HTML, tag, element, VS Code, DevTools |
| 2 | CSS, property, selector, class, color, font |
| 3 | JavaScript, variable, function, event, click, console |
| 4 | localStorage, state, persistence, feature, bug |
| 5 | Git, commit, GitHub, repository, deploy, CI/CD, Pages |
| 6 | API, fetch, HTTP, JSON, server, request, response |
| 7 | code review, debug, prompt, AI output, hallucination |
| 8 | framework, agentic, React, backend, user feedback |

~40 words by end of course. Students leave with vocabulary to **continue learning on their own**.

---

## What Course 0 Is NOT

Honest limits — do not promise beyond these:

- ❌ Not programmer training (Course 1+)
- ❌ Not framework training (React, Flutter — Course 1+)
- ❌ Not backend training (Course 2)
- ❌ Not architecture training (Course 3)
- ❌ Not job-ready after 36 hours

What it IS:

- ✅ Code literacy for beginners
- ✅ AI tool fluency starter
- ✅ Deploy / production pipeline exposure
- ✅ Confidence to continue to Course 1

---

## Materials

| Path | Contents |
|---|---|
| [`course-0-web-essentials.md`](course-0-web-essentials.md) | **OLD v1** (6 days, AI-only). Superseded by this file. |
| [`syllabus-v2-8days.md`](syllabus-v2-8days.md) | **THIS FILE — current syllabus** |
| [`../context/theBuilderPros-roadmap.md`](../context/theBuilderPros-roadmap.md) | theBuilderPros's roadmap source |
| `day-01/` ... `day-08/` | Per-day lesson plans, exercises, homework (to be rebuilt) |
| `instructor/` | Rubric, pacing, classroom setup |
| `AGENT.md` | Rules for AI agents editing this |

---

## Next Steps for Hein

1. **Confirm 8-day plan matches theBuilderPros expectation** — show them this syllabus
2. **Build the News API** — static JSON at a public URL, 10-20 sample articles
3. **Rebuild `day-01/` through `day-08/`** — update folder structure, write per-day exercises/homework
4. **Archive OLD syllabus (`course-0-web-essentials.md` v1)** — don't delete, mark as superseded
5. **Translate key student materials to Burmese** — exercise.md, homework.md (English fine for instructor README)

See [`../context/theBuilderPros-roadmap.md`](../context/theBuilderPros-roadmap.md) for the source material this syllabus is derived from.
