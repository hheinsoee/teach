# Day 5 — Git, Diffs & Review

## The three layers

| Layer | Today |
|---|---|
| **Understand** | Why version control exists · commits · history · **diffs** |
| **Direct** | Small changes, one at a time — never one giant request |
| **Verify** | Read the diff. What changed that should not have? |

## Why this is the most important day in the course

Writing code is no longer the student's job. **Reviewing code is.** A developer who
reads diffs catches the agent's mistakes before they land. One who does not accumulates
damage invisibly, and by week 6 owns a codebase nobody understands.

If you have to cut material from any day, do not cut this one.

## Sessions in this day

> A **day** is one 2-hour meeting. A **session** is a teaching block inside it.

| Session | Title | Kind | Length |
|---|---|---|---|
| **5.1** | Commits & History | concept | 20 min |
| **5.2** | Reading a Diff | build | 50 min |
| **5.3** | Reading SQL You Didn't Write | concept | 15 min |
| **5.4** | Find the Planted Change | verify | 15 min |

## Pacing — `FITS`

| | |
|---|---|
| **Fixed** (never shorten) | 5.2 Reading a Diff · 5.3 Reading SQL |
| **Elastic** (absorbs overrun) | 5.2 Reading a Diff |
| **Cut line** (goes first) | 5.4 Planted Change → run it the next day unannounced |

**Repaired:** absorbed Reading SQL from day 8. Day 5 is the review-skills day — reading a query you did not write is the same muscle as reading a diff.

## Timing (120 min)

| Min | Block | Content |
|---|---|---|
| 0–15 | Homework review | Who guessed wrong on the silent bugs? Normalise that |
| 15–40 | Concept | Commits, history, how to read a diff — `+`, `-`, context |
| 40–100 | Build | Ask for a feature → review the diff line by line → accept or reject |
| 100–115 | Verify | Instructor plants a bad change in a diff. Who catches it? |
| 115–120 | Wrap | Homework |

## How to read a diff — teach exactly this

| Symbol | Meaning |
|---|---|
| `-` | this line was removed |
| `+` | this line was added |
| no symbol | context, unchanged, shown so you can see where you are |

Then the four review questions:

1. **Did it change files I did not ask about?**
2. **Did it delete anything?** Deletions are where damage hides
3. **Did it add a dependency?** Check `package.json` every time
4. **Can I explain every `+` line?** If not, ask before merging

## The planted-change exercise

Before the verify block, have each student ask the agent for a small feature. Then
*you* push one extra change to their repository (collaborator access, set up in Day 0):

| Planted change | What they should catch |
|---|---|
| An extra dependency in `package.json` | "I never asked for a library" |
| A deleted line elsewhere in the file | "Why did this disappear?" |
| A changed default value | Subtle — most will miss it. That is the lesson |
| A `console.log` with a fake API key | Secrets do not belong in code |

Roughly half the room catches it the first time. Run it again the next day, unannounced.

## Teaching notes

- Big diffs are unreviewable. Teach the rule: **if you cannot review it, it was too
  big an instruction.** Ask the agent for less.
- Make them say the words "I accept this" or "I reject this" out loud per hunk. It
  converts reviewing from passive scrolling into a decision.
- Never let a student push a diff they have not read, starting today.

## Common failures

| Failure | Fix |
|---|---|
| Scrolls through the diff without stopping | Make them count the changed lines out loud |
| Reviews only `+` lines | Point at the `-` lines. "What did you just lose?" |
| 300-line diff | Reset. One feature per instruction |
| Commit message `update` | Message must say *why*, not *what*. The diff shows what |
