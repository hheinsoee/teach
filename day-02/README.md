# Day 2 — Reading Code (not writing it)

## The three layers

| Layer | Today |
|---|---|
| **Understand** | Variables · data types · conditions · loops · functions · arrays · objects — **to read, not to write** |
| **Direct** | Asking the agent "explain this" and "explain it simpler" |
| **Verify** | Explain a block of code in your own words, agent closed |

## Why reading, not writing

This is the day that makes the whole course honest. The agent types; the student's
job is comprehension. A student who can read code can supervise an agent forever.
A student who memorized syntax but cannot read unfamiliar code can supervise nothing.

**Do not teach them to write loops.** Teach them to look at a loop and say what it does.

## Sessions in this day

> A **day** is one 2-hour meeting. A **session** is a teaching block inside it.

| Session | Title | Kind | Length |
|---|---|---|---|
| **2.1** | The Seven Things | concept | 25 min |
| **2.2** | Explain Your Own Code | build, pairs | 45 min |
| **2.3** | Numbers, Money & Dates | concept | 15 min |
| **2.4** | Cold Call | verify | 15 min |

## Pacing — `FITS`

| | |
|---|---|
| **Fixed** (never shorten) | 2.3 Numbers, Money & Dates · 2.4 Cold Call |
| **Elastic** (absorbs overrun) | 2.2 Explain Your Own Code |
| **Cut line** (goes first) | 2.2 — 4 files in class instead of all of them |

**Repaired:** absorbed Money & Dates from day 8. The `0.1 + 0.2` demo belongs with data types, and by day 8 it is recall rather than a new idea.

## Timing (120 min)

| Min | Block | Content |
|---|---|---|
| 0–15 | Homework review | Read 3 students' answers to question 4 aloud. Correct the mental model |
| 15–40 | Concept | The 7 things code does. Walk through one 20-line file on the projector |
| 40–100 | Build | Pairs: each student explains their own page's code, line by line, to their partner |
| 100–115 | Verify | Cold call: projector shows a block, random student explains it, agent closed |
| 115–120 | Wrap | Homework |

## The 7 things (whiteboard)

Everything in any program is one of these:

| | Thing | Reads as |
|---|---|---|
| 1 | Variable | "remember this value under this name" |
| 2 | Type | "what kind of thing is this — number, text, true/false, list, object" |
| 3 | Condition | "only do this if..." |
| 4 | Loop | "do this once for each..." |
| 5 | Function | "a named job you can run, maybe with inputs, maybe giving something back" |
| 6 | Array | "an ordered list of things" |
| 7 | Object | "one thing with named properties" |

Students will meet nothing else for the next 10 days. Say that — it reduces fear.

## Teaching notes

- **The cold call matters more than the pair work.** Explaining to a partner is easy;
  explaining to a room with the agent closed is the real check. Run it every day
  from now on, 5 minutes.
- When a student says "it makes the list" — push: *which line? what is in the list?*
  Vague answers are the warning sign for criterion 2 failure in week 6.
- Teach them the phrase **"explain this like I have never programmed"** as an agent
  prompt. It is the single most useful prompt they will learn today.

## Common failures

| Failure | What it means | Fix |
|---|---|---|
| Reads the code aloud instead of explaining | No model of what it does | Ask "what breaks if I delete this line?" |
| Explains only the first and last line | Skipped the middle | Point at the middle, wait |
| Uses words they cannot define | Repeating the agent | Ask them to define the word |
