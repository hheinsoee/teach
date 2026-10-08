# Day 4 — Reading Errors & Finding Bugs

**Checkpoint 1 is graded after today** (rubric criterion 3).

## The three layers

| Layer | Today |
|---|---|
| **Understand** | Errors · exceptions · stack traces · logs · when agents are wrong |
| **Direct** | How to describe a broken state |
| **Verify** | Rejecting the agent's answer |

## The rule established today

> **Read the error message before calling the agent.**
> Pasting an unread error into the agent is not allowed in this course.

This is the single habit that separates the students who pass from the ones who do not.
Enforce it from today, every day.

## Sessions in this day

> A **day** is one 2-hour meeting. A **session** is a teaching block inside it.

| Session | Title | Kind | Length |
|---|---|---|---|
| **4.1** | Reading a Stack Trace | concept | 25 min |
| **4.2** | Five Broken Files | build, no agent | 40 min |
| **4.3** | Silent Failures | build, no agent | 15 min |
| **4.4** | Checkpoint 1 — Read the Error | exam | 15 min |

## Pacing — `TIGHT`

| | |
|---|---|
| **Fixed** (never shorten) | 4.1 Reading a Stack Trace · 4.4 Checkpoint 1 |
| **Elastic** (absorbs overrun) | 4.2 Five Broken Files |
| **Cut line** (goes first) | 4.2 — do 3 files in class, 2 at home. Never cut 4.3 |

Checkpoint 1 runs in parallel — every student has their own broken app. It is 15 min total, not 15 per student.

## Timing (120 min)

| Min | Block | Content |
|---|---|---|
| 0–15 | Homework review | Read one prompt log aloud. Discuss the rewritten prompt |
| 15–40 | Concept | How to read a stack trace. Where agents go wrong |
| 40–95 | Build | `broken/` — 5 bugs, **agents closed** |
| 95–110 | Checkpoint 1 | Each student gets a 6th bug. Find the location in 10 min, no agent |
| 110–120 | Wrap | Homework |

## Reading a stack trace — the 3 questions

Put these on the board. They work for every error in every language.

1. **What is the message?** The last line in plain English
2. **Which file and line is mine?** Ignore framework paths — find your own file
3. **What was it trying to do?** The function names above the error

Students default to reading the top of the trace, which is usually library code.
Teach them to scan for their own filename first.

## Where agents are wrong

| Failure | What it looks like |
|---|---|
| Hallucination | Calls a function that does not exist |
| Outdated API | Correct 2 years ago, removed since |
| Wrong assumption | Assumes a field name you never mentioned |
| Confident nonsense | Explains a cause that is not the cause |
| Fixing the symptom | Wraps the error in try/catch instead of fixing it |

The last one matters most. Show them an agent "fixing" a bug by hiding it.

## The broken code

`broken/` has 5 files. Each has exactly one problem. Solutions are in
`instructor/day-04-answers.md` — do not put them in the student folder.

| File | Bug | Teaches |
|---|---|---|
| `01-typo.js` | misspelled property | read the message, it says `undefined` |
| `02-async.js` | missing `await` | the result is a Promise, not a value |
| `03-off-by-one.js` | `<=` instead of `<` | no error, wrong answer — silent failure |
| `04-type.js` | string where number expected | `"10" + 5` is `"105"` |
| `05-swallow.js` | empty catch block | the bug is the *hiding*, not the error |

**File 03 and 05 are the important ones.** They produce no error at all. This is the
first time students meet silent failure — which is what weeks 4–5 are made of.

## Checkpoint 1 (rubric criterion 3)

Break each student's own day-1 site before class. You have collaborator access from Day 0 —
push the break to a branch named `checkpoint-1` and have them check it out:

- rename a variable in one place only
- change an import path
- remove an `await`

Give them the error. No agent, 10 minutes.
**Pass = they name the file and the likely cause.** Fixing it is not required.

Record pass/fail in Classroom under `Checkpoints`.

## Common failures

| Failure | Fix |
|---|---|
| Opens the agent reflexively | Close the laptop. Read it on paper |
| Reads only the first line of the trace | Point at their filename in the trace |
| "It just doesn't work" | Make them write the actual message down, word for word |
| Fixes 03 by changing the output | Ask them which line produced the wrong number |
