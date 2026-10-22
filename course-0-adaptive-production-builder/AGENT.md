# AGENT.md — Course 0

Instructions for any AI agent working in this course folder.

## What this course is

**Course 0 — Adaptive Production Builder.** A 3-week, 6-class course that takes someone with **no programming background** from zero to a **live mini-app with real users**.

Taught at **theBuilderPros** workshops. The course precedes Course 1 (AI-assisted full-stack with code).

## Vocabulary — do not mix these up

| Term | Means | How many |
|---|---|---|
| **Week** | Two classes | 3 |
| **Class** | One 2-hour meeting. Folder `day-NN/` | 6 |
| **Mini-app** | A deployed, usable thing that solves one problem | 1+ per class |
| **Ship** | Live URL that another person can open | mandatory, every class |

A class is never called a session. A class never becomes a lecture — every class ships.

## Non-negotiable principles

These are the design of the course. Do not "improve" them away.

0. **This is an inspiration course, not a gating course.** The goal is to **spark curiosity** so students want to continue to Course 1 (engineering). Everything infrastructural (deploys, CI/CD, env vars, RLS policies, Supabase schemas) is **pre-built and handed to them** — they click, use, and feel the magic. The "how it actually works under the hood" is Course 1. If a student finishes Course 0 excited to learn more, the course succeeded. If a student finishes exhausted and confused, the course over-engineered itself and failed its own principle.
1. **No code is taught.** No variables, no loops, no functions, no HTML, no SQL. If the student needs those, they go to Course 1. Course 0 is **tool-first, output-first**.
2. **Ship every day.** Every day must end with a URL the student can open on their phone. A day that teaches concepts without a live URL has failed the course design.
3. **Experience → Label → Transfer.** Hands-on first. Only after the student has done it, name what they did. Then show where that pattern appears elsewhere. Theory never comes first.
4. **Mini-app is the unit of contribution.** Not "a feature", not "a page" — a mini-app that solves one problem and is live on the internet.
5. **AI writes the code; the student directs it.** The student never opens a code file to type in it. They prompt, verify, and iterate.
6. **Framework/templates/scripts are the instructor's job, not the student's.** Supabase projects, RLS policies, deploy configs, env var setup — all pre-built in `template/`. Students fork, use, and ship. They learn these layers in Course 1+. This is on purpose.
7. **Honesty over marketing.** This course does **not** produce a developer. It produces an **inspired beginner** who has shipped something real and wants to go deeper. Never upgrade that claim anywhere.

## The theBuilderPros framework (reference, not required)

The course is inspired by the theBuilderPros Master Mental Model (Bound Context, Ask Two Questions, See the Pattern, Experience→Label→Transfer, Stand on Giants, Production-First Learning, Build for Users, Thinking+Doing). You can reference it when it helps a class — you do **not** need to force every class to map onto all 8 principles.

## Audience & tools

**Audience:** No programming background. No prior web/app experience. Reads basic English. Owns a laptop with Chrome.

| Need | Tool | Account? |
|---|---|---|
| UI generation | **v0.dev** (Vercel) | yes |
| Full-stack mini-app | **Lovable.dev** | yes |
| Database + Auth | **Supabase** | yes |
| Deploy / hosting | **Vercel** (and Lovable's built-in) | yes |
| AI chat | **Claude** or **ChatGPT** (student's choice) | yes |
| Code editor (only if needed later) | **not used in Course 0** | — |

Tool list may evolve — v0/Lovable are the current best; the *principle* (AI builds, student directs, ship fast) is what matters. If a better tool appears, swap it in and keep the lesson shape.

## Class folder contract

Every `day-NN/` contains exactly:

| File | Audience | Contains |
|---|---|---|
| `README.md` | instructor | Minute-by-minute plan, framework hooks, common failures |
| `exercise.md` | student | What they do in class |
| `homework.md` | student | What they do at home, with a done-check |

## Class timing (120 minutes)

| Block | Minutes | What |
|---|---|---|
| Homework review (Transfer check) | 15 | Who shipped? Who got stuck? |
| **Experience** — hands-on build | 60 | Student builds. Instructor circulates. |
| **Label** — name what happened | 20 | Vocabulary, concept emergence |
| **Transfer** — where else does this pattern show up? | 15 | Connect to future |
| Verify + ship | 10 | Live URL, done check |

**Experience comes first.** If an instructor wants to lecture before students build, redesign the class — do not change the order.

## Homework rules

Every `homework.md` must:

- Start with a header noting it is Google Classroom-ready, 10 points, due evening before next class
- Require **shipping another mini-app** different from the class one (variety builds confidence)
- End with a **Done when** checklist the student can self-check
- Require a submitted **live URL** and a short reflection (3-5 sentences, in Burmese or English)

**Homework is 4 hours per class.** 2 hours polishing the class mini-app, 2 hours shipping a new one.

## Writing conventions

- **English primary**, but Burmese examples/analogies allowed where useful. Students in theBuilderPros workshops are Myanmar-based.
- Define a term the first time it appears. Beginner means **beginner** — never assume prior knowledge.
- Prefer **analogies over definitions** when introducing a concept for the first time.
- Prefer tables over prose lists. Prefer concrete clickable steps over descriptions.
- No emoji except: `🚀` ships, `🎓` capstone, `⚠️` warning.
- Instructor notes always include **Common failures** — what actually goes wrong in the room.

## Known hard points

- **Class 3 (database) is the first wall.** Everything before is "generate pretty UI". Supabase is the first time students see data persistence — the mental model shift from "page" to "app with memory" is hard.
- **Class 5 (debugging) is where confidence breaks.** When their mini-app breaks and the AI's first fix doesn't work, they panic. Budget extra instructor time.
- **Capstone scope creep.** Students want to build "the next Facebook" in class 6. Enforce: one problem, one page, live by end of class.

## The Vibe Coder risk (biggest risk in this course)

Some students arrive having already "built apps" with v0, Lovable, or ChatGPT. They have shipped something, so they think they know. They do not.

A **vibe coder** is someone who:
- Has made AI tools produce a working thing
- Cannot explain how it works
- When it breaks, pastes the error back to AI and prays
- Over-estimates their ability; under-estimates scope
- Cannot transfer knowledge when a tool changes

Course 0 **welcomes vibe coders** — but it does not let them pass without closing the gap. The defenses are:

1. **Class 1 self-check** — a short list of questions ("what is a URL, what is a database, what happens when you deploy") they answer in writing. Not graded, but surfaces what they don't know.
2. **Label phase is mandatory in every class.** After the build, every student must say in their own words — **without the AI open** — what they just built and why it works. If they can't, they haven't learned it yet.
3. **Class 5 includes problems AI cannot fix in one shot.** The instructor plants 2-3 realistic failures (expired API key, Supabase RLS policy wrong, deploy misconfig) that need the student to look at the actual system, not just prompt harder.
4. **Rubric criterion 2 — explain your own mini-app** — is live oral, no AI. A vibe coder cannot fake this.
5. **Capstone scope is capped.** One problem, one page, 3 real users. Vibe coders want to build the next Facebook; we don't let them.

If an instructor sees a student shipping fast but failing the Label phase, that is a vibe coder. Flag early, intervene often. The worst outcome of this course is a graduate who leaves more confident than they are capable — because the next time their app breaks, no one is there to prompt for them.

## When adding or editing a class

1. Read `course-0-adaptive-production-builder.md` first. It is the source of truth.
2. Keep the class's **Experience → Label → Transfer** structure.
3. If you change what a class teaches, update the syllabus in the same pass.
4. Do not add new classes. The course is 6 classes and 12 contact hours.
5. If you add code examples anywhere, you are violating principle #1. Remove them.
