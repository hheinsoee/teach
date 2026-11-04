# Day 1 — The Whole Map, and Your First Live URL

**Ships:** 🚀 a live URL, in the first two hours

## The three layers

| Layer | Today |
|---|---|
| **Understand** | What software is · how a program runs · the four layers: Browser → Network → Server → Database · dev vs production |
| **Direct** | Agent setup · giving a first instruction |
| **Verify** | Open the live site on your own phone |

## Why deploy in day 1

Knowledge first means seeing the whole map before the parts. The student has a public
URL in hour two; the remaining 11 days fill that map in. This is only possible
because the agent removes the typing cost — a hand-coded course cannot reach deploy
on day one.

The motivational effect is the real reason. A student who has shipped something
public in week 1 behaves differently for the next five weeks.

## Sessions in this day

> A **day** is one 2-hour meeting. A **session** is a teaching block inside it.

| Session | Title | Kind | Length |
|---|---|---|---|
| **1.1** | The Four Layers | concept | 25 min |
| **1.2** | Ship to Production | build, from template | 55 min |
| **1.3** | Open Someone Else's URL | verify | 15 min |

## Pacing — `FITS`

| | |
|---|---|
| **Fixed** (never shorten) | 1.1 The Four Layers |
| **Elastic** (absorbs overrun) | 1.2 Ship to Production |
| **Cut line** (goes first) | 1.3 — swap URLs in pairs instead of as a class |

**Repaired:** students clone a starter template instead of scaffolding from zero. Deploy friction was the cause of the old overrun.

## Timing (120 min)

| Min | Block | Content |
|---|---|---|
| 0–10 | Open | Check Day 0 pre-work. Anyone unprepared sits in and catches up |
| 10–35 | Concept | Draw the four layers on the board. Every day from now on fills in one box |
| 35–90 | Build | Each student: starter template → agent edits the page → GitHub → Railway → live |
| 95–110 | Verify | Everyone opens someone else's URL on their phone |
| 110–120 | Wrap | Set the rules. Assign homework |

## Teaching notes

- **Draw the map and leave it up all course.** Point at it at the start of every
  day: "today we are here."
- Do not explain plain JavaScript, components, or state yet. Today the page is just a page.
- When a student asks "but what is the agent actually doing?" — that is day 2.
  Write the question on the board; answer it next week.
- **Say the grading rule out loud today:** a working app that you cannot explain
  is a fail. Students must hear this in week 1, not week 6.

## Common failures

| Failure | Fix |
|---|---|
| Railway deploy fails on first push | The template builds clean — if it fails, the cause is env/linking, not code |
| Student has no GitHub auth | `gh auth login`, 2 minutes |
| Deploy succeeds, page is blank | Wrong output directory in Railway settings |
| Student finishes in 20 minutes | Have them change the page and redeploy. Do not let them start the real project |

## Board diagram

```
   [ Browser ]      what the user sees          <- day 6
       |
   [ Network ]      HTTP requests               <- day 7
       |
   [ Server  ]      your code, your rules       <- days 7, 9
       |
   [ Database]      what is remembered          <- day 8
```
