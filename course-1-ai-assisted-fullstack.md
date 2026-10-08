# AI-Assisted Full-Stack Development
## Course 1 — Knowledge First (6 Weeks)

**Format:** 6 weeks · 12 days · 2 hours/day · **24 contact hours**
**Homework:** 6–8 hours/week
**Mission:** Turn a student into a **full-stack builder** in 6 weeks — able to take an idea to production alone.

---

## Core Principle

> **The AI agent writes the code. The student understands it, directs it, verifies it, and owns it.**

Memorizing syntax and hand-typing 40 loops is not the goal of this course.
**Knowledge first** — understanding how the system works is the priority.

### The Three Layers

| Layer | Meaning | What happens without it |
|---|---|---|
| **1. Understand** | Know how the system works · Be able to **read** code | You don't know what to ask for |
| **2. Direct** | Specify precisely · Break problems into parts | The agent builds the wrong thing |
| **3. Verify** | Review, test, and reject the agent's output | You own an app you don't understand |

**Layer 3 is the heart of this course.** A student can ship an app without Layers 1 and 2. Without Layer 3, the moment that app breaks, they can do nothing.

---

## How the course is structured

| Term | Means | How many |
|---|---|---|
| **Week** | Two days | 6 |
| **Day** | One 2-hour class meeting | 12 |
| **Session** | A teaching block inside a day, numbered `N.M` | 44 |
| **Checkpoint** | A live or oral exam, graded by observation | 3 |

A day is 120 minutes and never changes length. When content does not fit, a *session*
moves to homework — never a day. Each day's `README.md` declares which sessions are
**Fixed**, which are **Elastic**, and what the **cut line** is.

See [`instructor/pacing.md`](instructor/pacing.md). Every day fits; day 12 depends on class size.

---

## The Project

Every student builds the **same app**: an Expense Tracker — see [`project/spec.md`](project/spec.md).

Sessions 6–11 build it. Re-theming is allowed in day 12 only.

Ten students with ten different schemas makes in-class debugging impossible to run as
a group. The project is fixed for that reason, and the feature list is closed — scope
creep is the most common way a student fails to finish.

**One repository, named `expense-tracker`, for the entire course.** Created in Day 0,
submitted every week, read as a commit history in Day 5, graded in Day 12.

---

## Delivery

Homework is delivered through **Google Classroom** — see
[`instructor/classroom-setup.md`](instructor/classroom-setup.md).

Submissions are links and text, never file uploads: code lives in GitHub. Homework is
due the evening before the next day, because every day opens with a 15-minute review of it.

> **Classroom can grade only 2 of the 6 rubric criteria.** Criteria 2, 3, 4, and 6 are
> oral or live, in person. Classroom records the result; it never produces it. A link
> proves an app exists — it proves nothing about who understands it.

---

## Audience & Stack

**Audience:** No programming background required. Must be comfortable with a computer and able to read English documentation.

| Layer | Tool | Account needed? |
|---|---|---|
| Language | JavaScript (Node.js) | — |
| Frontend | Plain HTML, CSS, JavaScript — **no framework** | — |
| Backend | Express | — |
| Database | **SQLite** — a file, not a service | — |
| Auth | `express-session` + `bcrypt` — libraries, not a service | — |
| Tests | `node --test` — built into Node | — |
| Version control | Git + GitHub | **yes** |
| Hosting | Railway (any Node host with a disk works) | **yes** |

**Two accounts for the whole course.** No database service, no error-tracking service,
no CSS framework, no frontend framework, no auth provider. Every external service is one more thing that breaks in
class for reasons that teach nobody anything.

**No framework means every file is one the student asked for.** That is not a
simplification for its own sake — it is what makes rubric criterion 2 enforceable.
There is no scaffolding to hide behind.

**Course 1 is deliberately simple.** The agent removes the typing cost, not the
understanding cost — and every framework, service, and integration added here is more
surface a beginner must understand before they can honestly claim to own their app.
Frameworks and third-party integrations are Course 2 onward.

---

## Scope

### ✅ Included

Mental models · Code reading · Agent direction · Verification & review · Frontend (UI / state / forms) · Backend (HTTP / REST / API) · Database (schema / SQL / CRUD) · **Authentication** · **Security basics** · **Testing** · **Deployment & production** · **Architecture basics** · Git & diffs

> **Auth, Testing, and Architecture** were cut from the original syllabus purely for lack of time. They are back, because with the agent typing, only their *knowledge cost* remains.
>
> **Frameworks are not back.** They were excluded for a different reason — see the stack above.

### ❌ Excluded

| Excluded | Reason |
|---|---|
| Syntax drills (40 loops, 20 functions) | The agent types. Reading fluency is enough |
| Algorithms / data structures (Stack, Tree, Big-O) | Not needed to build products. Separate interview-prep track |
| Manual boilerplate and config memorization | The agent's job |
| Frontend frameworks (plain JavaScript, Vue) | Scaffolding the student cannot explain. Course 2 |
| Scale (caching · queues · load balancing) | Course 4. You can't learn scale with zero users |
| Advanced architecture (DDD · microservices) | Course 3 |

---

## The 12 days at a glance

| Day | Title | Sessions | Pacing | Ships |
|---|---|---|---|---|
| [0](day-00-prework/) | Pre-Work | — | at home | hello commit |
| [1](day-01/) | The Whole Map | 3 | `FITS` | 🚀 Live URL |
| [2](day-02/) | Reading Code | 4 | `FITS` | — |
| [3](day-03/) | Directing an Agent | 4 | `FITS` | CLI tool |
| [4](day-04/) | Reading Errors & Finding Bugs | 4 | `TIGHT` | 5 bugs fixed |
| [5](day-05/) | Git, Diffs & Review | 4 | `FITS` | 10 commits |
| [6](day-06/) | Frontend | 4 | `FITS` | Working UI |
| [7](day-07/) | Backend & API | 3 | `FITS` | CRUD API |
| [8](day-08/) | Database | 4 | `FITS` | Persistent data |
| [9](day-09/) | Authentication & Security | 4 | `FITS` | Auth live |
| [10](day-10/) | Proving the Code Works | 4 | `FITS` | 3 real tests |
| [11](day-11/) | Production | 3 | `FITS` | Real users |
| [12](day-12/) | Architecture & Judgment | 3 | `DEPENDS ON CLASS SIZE` | 🎓 Capstone |
| | **Total** | **44** | | |

⚠️ Days 7–10 are still the drop-out cliff — failures go silent there — but every day now
fits in 120 minutes. The schedule was rebalanced: money/dates moved to day 2, reading SQL
to day 5, auth installation to pre-work, UI rewiring to homework, scaffolding to a starter
template. See [`instructor/pacing.md`](instructor/pacing.md). Day 12 depends on class size.

Each day's full session list (`N.M`, kind, length) lives in its own `README.md`.

---

## 12 Days

### Week 1 — Mental Model

#### Day 0 — Pre-Work (before Week 1, done at home)
**Not a class day.** Completed before day 1, verified by the instructor.

- [ ] Node.js installed, `node --version` runs
- [ ] Editor installed (VS Code / Cursor)
- [ ] AI agent installed and authenticated
- [ ] GitHub account created, able to push
- [ ] Railway account created, linked to GitHub
- [ ] Instructor added as a repository collaborator
- [ ] Starter template cloned into the repository
- [ ] A "hello" commit pushed to a personal repo

> Without this, day 1 is consumed entirely by environment setup and never reaches a live URL. Setup friction is the single most common reason a first day fails.

#### Day 1 — The Whole Map, and Your First Live URL
**Understand:** What software is · How a program executes · The full-stack layers (Browser → Network → Server → Database) · Dev vs Production
**Direct:** Agent setup · Giving your first instruction
**Verify:** Open the live site on your phone
**In class:** Build a page with the agent → **deploy → get a live URL**
**Ships:** 🚀 Live URL, in day 1
**Homework:** Extend your live site · Write down what each tool in the chain actually does

> Deploying in day 1 is deliberate — the student sees the entire map before the parts. The remaining 11 days fill that map in.

#### Day 2 — Reading Code (not writing it)
**Understand:** Variables · Data types · Conditions · Loops · Functions · Arrays · Objects — **to read, not to write**
**Direct:** Asking the agent "explain this code"
**Verify:** Explain a block of code **in your own words, without the agent**
**In class:** Line-by-line explanation of agent-written code, as a group
**Homework:** Annotate 5 code samples · What does each line do, in your own words

---

### Week 2 — Direct & Debug

#### Day 3 — How to Direct an Agent
**Understand:** What a specification is · Decomposition · Providing context · Setting constraints
**Direct:** Vague request vs precise request — compare the results
**Verify:** Check that the output is actually what you asked for
**In class:** Ask for the same feature with 3 different prompts · Discuss why the results differ
**Homework:** Build a CLI tool with the agent · Keep a log of every prompt you used

#### Day 4 — Reading Errors & Finding Bugs
**Understand:** Errors · Exceptions · Stack traces · Logs · When agents get it wrong (hallucination · outdated APIs · wrong assumptions)
**Direct:** How to describe a broken state to the agent
**Verify:** **Rejecting the agent's answer**
**In class:** 5 broken apps · read the error → guess the location → *then* ask the agent
**Homework:** Fix 5 bugs · Write up why each one broke
**Materials:** [`day-04/broken/`](day-04/broken/) — 5 bugs, two of which produce no error at all
**🔺 Checkpoint 1 — Read the Error** (rubric 3): own app broken by the instructor, 10 minutes, no agent

> **Rule:** Read the error message first. Pasting it into the agent unread is not allowed in this course.

---

### Week 3 — Build the Front

#### Day 5 — Git, Diffs & Review
**Understand:** Why version control exists · Commits · History · **Diffs**
**Direct:** Asking for small changes, one at a time — never one giant request
**Verify:** **Read the diff — what did the agent change, and did it touch something it shouldn't have?**
**In class:** Ask for a feature → review the diff line by line → accept or reject
**Homework:** 10 commits · Read every diff yourself before pushing

> **Reading diffs is the most important skill of the AI era.** It matters more than being able to write the code.

#### Day 6 — Frontend
**Understand:** User interface · DOM · **State** · Events · Rendering · Forms · Client-side validation (UX)
**Direct:** Breaking the page into parts before asking
**Verify:** Find your state in `app.js` with browser DevTools
**In class:** Build the Expense Tracker UI — plain HTML, CSS and JavaScript
**Homework:** Finish forms, lists, and filtering · Verify state in DevTools

---

### Week 4 — Build the Back

> ⚠️ **Weeks 4–5 are where students drop.** Until now, mistakes were loud — the page crashed, the error was red. From here failures go *silent*: data saves to the wrong column, a route is simply open to everyone, nothing throws. Budget extra instructor support across days 7–10; this is the cliff, not week 1.

#### Day 7 — Backend & API
**Understand:** Client & server · **HTTP** · Request/response · Status codes · APIs · REST · JSON
**Direct:** Specifying one endpoint at a time
**Verify:** Test endpoints yourself with the Network tab and `curl` — don't trust the UI
**In class:** Build the CRUD API · connect the frontend
**Homework:** Test every endpoint with curl and record the responses

#### Day 8 — Database
**Understand:** Tables · Columns · Primary keys · Foreign keys · Relationships · **Reading SQL** · Schema design · Migrations
**Direct:** Design the schema yourself first, then hand it to the agent
**Verify:** Open the database and inspect the rows yourself
**In class:** Draw the schema → implement with the agent → verify the data
**Homework:** Confirm data is stored correctly by inspecting the DB · Read and explain 10 queries

> **The student designs the schema, not the agent.** A data model is a product decision, not a technical one — and it is the most expensive thing to get wrong later.

---

### Week 5 — Make It Real

#### Day 9 — Authentication & Security
**Pre-work:** install `bcrypt` + `express-session` at home ([`day-09/prework.md`](day-09/prework.md), steps in [`instructor/day-09-auth-steps.md`](instructor/day-09-auth-steps.md)) — class verifies it, never installs it
**Understand:** Authentication vs authorization · Sessions · Password hashing · **Server-side validation** · SQL injection · XSS · Secrets
**Direct:** Use libraries for hashing and sessions — don't write them yourself, and don't let the agent write them either
**Verify:** Try to reach data without logging in · Send malformed input on purpose
**In class:** Add auth → then **attack your own app**
**Homework:** Call every protected route while logged out, and as the wrong user · Record what happens

> Another user's data must return **404, not 403**. 403 confirms the row exists, which
> is itself a leak. Students must be able to explain that difference.

> **Security sits at day 9 on purpose** — the app has been public since day 1, but this lands before real users and real data arrive.

#### Day 10 — Proving the Code Works
**Understand:** What is worth proving · Acceptance criteria · How to read a test · `node --test` is built in — no framework
**Direct:** Asking the agent to write tests
**Verify:** **Prove the test actually works** — break the code on purpose and confirm the test fails
**In class:** Generate tests → break the code → a test that still passes is worthless
**Homework:** Three tests · Break each one to prove it does something
**Materials:** [`day-10/broken/`](day-10/broken/) — 4 passing tests, two of which test nothing
**🔺 Checkpoint 2 — Review the Code** (rubric 4): flawed snippet, 10 minutes, no agent

> Agent-written tests are frequently **assertion-free theater**. Breaking the code is the only way to prove otherwise.

---

### Week 6 — Ship & Judge

#### Day 11 — Production
**Understand:** Environment variables · Config · Production vs development data · **Logging** · Monitoring · Reading host logs · Backing up the SQLite file
**Direct:** Specifying production configuration
**Verify:** Read production logs · Break something deliberately and confirm monitoring catches it
**In class:** Full production deploy · wire up logging · read the host's log viewer
**Homework:** Get 5 people to use your app · Watch the logs · Report what you find

#### Day 12 — Architecture & Judgment
**Understand:** Why code gets messy · Separation of concerns · Coupling · When to refactor · Technical debt · **When to tell the agent "no"**
**Direct:** Breaking a large refactor into steps
**Verify:** **Recognizing over-engineering** — agents add unnecessary abstraction by default
**In class:** The agent over-engineers on request — students reject it · capstone demos
**Homework:** Final submission — live URL, repository, and the written defence in `notes/final.md`
**🔺 Checkpoint 3 — Final Oral** (rubric 2 and 6): 6 minutes per student, agent closed
**Ships:** 🎓 **Full-stack production app**

> Checkpoint 3 is serial — 6 minutes × every student. Above 12 students it does not fit
> in the day; book 10-minute slots outside class instead. Never shorten it to 3 minutes.

---

## Pass Rubric

**Shipping working code is not a pass.** All six required.

> Criterion 2 covers **application code only** — files the student requested. `node_modules` and the starter template's config are excluded.
>
> Because Course 1 uses no framework, there is almost no generated code to exclude: nearly every file in the repository is one the student asked for. That is deliberate — it makes this criterion enforceable rather than hedged.

| # | Criteria | How it's checked |
|---|---|---|
| 1 | A **live** app with frontend + backend + database + auth | Open the URL |
| 2 | Open **any file you asked the agent to write** and explain what it does | Random file, oral exam |
| 3 | Read an error in class and locate the problem **without calling the agent** | Live exercise |
| 4 | **Find what's wrong or unnecessary** in agent-generated code | Given a deliberately flawed suggestion |
| 5 | Prove a protected endpoint is actually protected by calling it without auth | Live exercise |
| 6 | Defend why your data model is shaped the way it is | Oral exam |

### Checkpoints

| Checkpoint | Day | Rubric | Format |
|---|---|---|---|
| 1 — Read the Error | 4 | 3 | own app broken, 10 min, no agent |
| 2 — Review the Code | 10 | 4 | flawed snippet, 10 min, no agent |
| 3 — Final Oral | 12 | 2, 6 | 6 min per student, agent closed |

Criteria 1 and 5 are evidenced by homework submissions. The rest happen in the room.

**Criteria 2, 3, and 4 are the course.**
Everything else can be satisfied by an agent alone. These three cannot — they are what separates a developer who knows from one who is entirely dependent.

---

## Rules for Students

1. **Read the error message before calling the agent.**
2. **Never commit a diff you haven't read.**
3. **Design the schema and data model yourself.**
4. **Never merge code you don't understand** — ask the agent to explain it first.
5. **Never hand-write auth or security, and never let the agent write it** — use a library.
6. **Don't trust everything the agent says** — it suggests outdated APIs and functions that don't exist.

---

## The Biggest Risk

**The "vibe coding graduate"** — the app works, the student understands nothing, and the first time it breaks they are helpless.

The only defense is rubric criteria **2, 3, and 4**. Relax those and this course is worthless. Do not soften the oral exam.

---

## Roadmap

| Course | Content |
|---|---|
| **Course 1** (this one) | AI-assisted full-stack — understand · direct · verify |
| **Course 2** | Integration — Third-party APIs · OAuth · Webhooks · Payments · Email · Storage · AI APIs · Background jobs · Retry / Timeout / Idempotency |
| **Course 3** | Architecture — Coupling · Boundaries · Layers · Modular monolith · Refactoring a growing app |
| **Course 4** | Scale — Performance measurement · Indexing · Caching · Queues · Workers · Observability |

---

## Final Outcome

In 6 weeks, the student becomes a **full-stack builder**: someone who can take an idea to a live, production application using an AI agent — and who understands, can explain, and can fix the code they asked for.

**This is not a junior-engineer course.** 70 hours does not produce someone ready to maintain a large codebase on a team. It produces someone who can ship their own product end to end, alone. State this plainly in any course description — it is a stronger promise to the people who will actually enrol, and it is one that can be kept.

### Realistic results, per 10 students

| Outcome | Expected |
|---|---|
| Live, working app | 8 |
| Pass criteria 2, 3, 4 honestly | 5–6 |
| Drop out (usually week 4) | 2–3 |

5–6 genuine passes out of 10 is a good result for 70 hours. Do not inflate it by softening the oral exam — the moment it softens, all 8 "pass" and the certificate means nothing.

---

## Materials

| Path | Contents |
|---|---|
| [`README.md`](README.md) | Course index |
| [`project/spec.md`](project/spec.md) | The Expense Tracker — features, schema, API, security test |
| [`template/`](template/) | Starter repository — Express + SQLite + `node --test`, nothing else |
| [`day-02/samples/`](day-02/samples/) | The 5 code samples for Homework 2 |
| [`day-00-prework/`](day-00-prework/) … [`day-12/`](day-12/) | Per day: instructor plan, in-class exercise, homework |
| [`day-04/broken/`](day-04/broken/) | 5 broken files — 3 fail silently |
| [`day-10/broken/`](day-10/broken/) | 4 tests — 2 are assertion-free theater |
| [`instructor/rubric.md`](instructor/rubric.md) | How to run each criterion |
| [`instructor/grading-policy.md`](instructor/grading-policy.md) | Pass/fail, remediation, the hard case |
| [`instructor/pacing.md`](instructor/pacing.md) | Which days overrun and what to cut |
| [`instructor/classroom-setup.md`](instructor/classroom-setup.md) | Google Classroom topics, weights, due dates |
| [`instructor/oral-exam-bank.md`](instructor/oral-exam-bank.md) | Checkpoint 3 questions |
| [`instructor/day-09-auth-steps.md`](instructor/day-09-auth-steps.md) | Exact auth setup steps — test these before posting |
| `instructor/day-02-answers.md` · `day-04-answers.md` · `day-10-answers.md` | Answer keys — keep out of student folders |
| [`AGENT.md`](AGENT.md) | Rules for AI agents editing this repo |

Each day's `README.md` carries its own `## Sessions in this day` and `## Pacing` tables.
