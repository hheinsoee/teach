# Day 6 — Frontend

**The real project starts today.** Everything from here builds the Expense Tracker
in `project/spec.md`.

## The three layers

| Layer | Today |
|---|---|
| **Understand** | UI · components · **state** · events · rendering · forms · client validation |
| **Direct** | Breaking the UI into components before asking |
| **Verify** | Inspect state in browser DevTools |

## Sessions in this day

> A **day** is one 2-hour meeting. A **session** is a teaching block inside it.

| Session | Title | Kind | Length |
|---|---|---|---|
| **6.1** | State & Rendering | concept | 25 min |
| **6.2** | Plan Before Prompting | build, no agent | 10 min |
| **6.3** | Build the Interface | build | 50 min |
| **6.4** | Find Your State in DevTools | verify | 15 min |

## Pacing — `FITS`

| | |
|---|---|
| **Fixed** (never shorten) | 6.1 State & Rendering · 6.2 Plan Before Prompting |
| **Elastic** (absorbs overrun) | 6.3 Build the Interface |
| **Cut line** (goes first) | 6.3 polish → homework. Filter and delete can be finished at home |

Cap styling at 10 min out loud, or half the room will spend 40 min on colours.

## Timing (120 min)

| Min | Block | Content |
|---|---|---|
| 0–15 | Homework review | Project a student's commit history. Read 3 messages |
| 15–40 | Concept | State is the whole idea. Components, events, rendering |
| 40–100 | Build | Expense Tracker UI — list, add form, filter. No server yet |
| 100–115 | Verify | DevTools: find your state in `app.js`, change it, watch the page redraw |
| 115–120 | Wrap | Homework |

## Teach state like this

> **State is what your app currently remembers. The screen is a picture of the state.**
> You do not change the screen. You change the state, and the screen redraws itself.

This single idea is most of frontend. Students coming from spreadsheets expect to
edit the screen directly; break that expectation early and explicitly.

Demo: add an expense to the array in DevTools → the list updates without a reload.

## No framework — on purpose

The frontend is `public/index.html`, `public/app.js`, `public/style.css`. That is all.

State is a plain array in `app.js` and a `render()` function that redraws the list from
it. Teach that loop explicitly: **change the array, call render, the page follows.**

A framework would do the redrawing for them and hide the one idea this day exists to
teach. It would also fill their repo with files they did not ask for — and rubric
criterion 2 says they must be able to explain any file they asked for.

## Today's data is fake

No database, no server. A hard-coded array of expenses in the browser.

Say clearly: **refresh the page and everything is gone.** That is not a bug —
that is the problem day 8 solves. The gap is the motivation.

## Client validation is UX, not security

State this today and repeat it in day 9:

| Where | Purpose | Trustworthy? |
|---|---|---|
| Browser | Tell the user quickly that the form is wrong | **No** — anyone can bypass it |
| Server | Protect the data | Yes — day 9 |

A student who thinks the browser check protects anything will build an insecure app
in day 9. Plant the correction now.

## Common failures

| Failure | Fix |
|---|---|
| Asks the agent for the whole app at once | One component per instruction. Enforce day 3's rule |
| Edits the DOM directly | Back to state. "Change the data, not the picture" |
| Cannot find state in DevTools | Open Sources, set a breakpoint in `app.js`, as a group |
| Styling for 40 minutes | Cap it. Function first — the deadline is real |
