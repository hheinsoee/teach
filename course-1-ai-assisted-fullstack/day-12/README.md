# Day 12 — Architecture & Judgment

**Checkpoint 3 — the final oral exam** (rubric criteria 2 and 6).

## The three layers

| Layer | Today |
|---|---|
| **Understand** | Why code gets messy · separation of concerns · coupling · when to refactor · technical debt |
| **Direct** | Breaking a large refactor into steps |
| **Verify** | **Recognising over-engineering** — and telling the agent no |

## Sessions in this day

> A **day** is one 2-hour meeting. A **session** is a teaching block inside it.

| Session | Title | Kind | Length |
|---|---|---|---|
| **12.1** | Why Code Gets Messy | concept | 20 min |
| **12.2** | Watch the Agent Over-Engineer | verify | 20 min |
| **12.3** | Checkpoint 3 — Final Oral | exam | 60 min |

## Pacing — `DEPENDS ON CLASS SIZE`

| | |
|---|---|
| **Fixed** (never shorten) | 12.3 Checkpoint 3 — Final Oral |
| **Elastic** (absorbs overrun) | 12.1 · 12.2 |
| **Cut line** (goes first) | 12.1 and 12.2 compress to 25 min combined if the class is large |

**6 min per student, run serially.** 10 students = 60 min and it fits. 15 students = 90 min and it does not. See `instructor/pacing.md`.

## Timing (120 min)

| Min | Block | Content |
|---|---|---|
| 0–10 | Open | What went wrong with real users last week |
| 10–30 | Concept | Why code rots. Coupling. When *not* to refactor |
| 30–50 | Exercise | The agent over-engineers on purpose. Students reject it |
| 50–110 | **Checkpoint 3** | Oral exam, one at a time. Others demo to each other |
| 110–120 | Close | What they are now, what they are not yet, what comes next |

## The over-engineering exercise

Have every student ask their agent:

> Refactor my expense API to be more maintainable and scalable.

It will return factories, repositories, interfaces, and three new layers —
for an app with two tables.

The question for the room: **does this make it easier or harder to change?**

The lesson: *maintainable* and *scalable* are not free. Every abstraction is a thing
you must understand before you can change anything. Agents add them on request without
weighing the cost, because the cost is paid by the person who maintains it — not by
the agent.

| Add an abstraction when | Do not when |
|---|---|
| You have changed the same thing 3 times | You *might* need it someday |
| Two parts genuinely cannot know about each other | It sounds professional |
| The file is too large to find anything in | The agent suggested it |

## Checkpoint 3 — the final oral exam

**This is the course.** 6 minutes per student. Agents closed, laptops closed.

| Step | Question | Rubric |
|---|---|---|
| 1 | Open a file *they asked the agent to write*. Point at 5–15 lines. "What does this do, and what breaks if I delete it?" | 2 |
| 2 | "Which line makes sure this is *your* expense and not someone else's?" | 2 |
| 3 | "Why is `amount` stored that way? What goes wrong otherwise?" | 6 |
| 4 | "You now need two currencies. What changes?" | 6 |

Scope for step 1: **application code only.** Not framework scaffolding, not generated
config, not library internals. Nobody can explain those.

**Pass:** explains intent and consequence in their own words. Syntax names not required.
**Fail:** reads the code aloud without explaining, or says "the agent wrote that".

Use `instructor/oral-exam-bank.md` to rotate questions. Record in Classroom.

## The hard moment

Someone will have a beautiful, working, live app and will not be able to explain it.

**They do not pass.** See `instructor/grading-policy.md`. Decide before the day,
not in the room with the class watching.

## Closing — say this honestly

They are now a **full-stack builder**: they can take an idea to production alone.

They are **not** a junior engineer ready for a team codebase. That needs more time with
other people's code, more debugging, and more failure. Course 2 onward.

Telling them this honestly is more useful than a certificate, and they will respect it.
