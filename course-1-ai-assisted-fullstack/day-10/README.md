# Day 10 — Proving the Code Works

**Checkpoint 2 is graded after today** (rubric criterion 4).

## The three layers

| Layer | Today |
|---|---|
| **Understand** | What is worth testing · acceptance criteria · reading a test |
| **Direct** | Asking the agent for tests |
| **Verify** | **Break the code and prove the test fails** |

## The rule for today

> **A test that still passes when you break the code is worthless.**

Agent-written tests are frequently assertion-free theater — they call the function,
assert nothing meaningful, and go green forever. Today exists to catch that.
Never weaken the break-it exercise.

## Sessions in this day

> A **day** is one 2-hour meeting. A **session** is a teaching block inside it.

| Session | Title | Kind | Length |
|---|---|---|---|
| **10.1** | What Is Worth Proving | concept | 20 min |
| **10.2** | Get Three Tests Written | build | 20 min |
| **10.3** | Break It to Prove It | verify | 35 min |
| **10.4** | Checkpoint 2 — Review the Code | exam | 25 min |

## Pacing — `FITS`

| | |
|---|---|
| **Fixed** (never shorten) | 10.3 Break It to Prove It · 10.4 Checkpoint 2 |
| **Elastic** (absorbs overrun) | 10.2 Get Three Tests Written |
| **Cut line** (goes first) | 10.2 — one test in class, the rest at home |

**Trimmed:** this is not a testing-framework unit. `node --test` is built in, so there is nothing to install. The day exists to prove the agent's confident green output actually does something.

## Timing (120 min)

| Min | Block | Content |
|---|---|---|
| 0–15 | Homework review | Who found a hole in their own app? Praise it publicly |
| 15–35 | Concept | What is worth testing. What a test actually asserts |
| 35–55 | Build | Agent writes **three** tests for the expense API |
| 55–90 | **Break** | `broken/` — 4 fake tests. Which ones actually test anything? |
| 90–115 | Checkpoint 2 | Flawed code review, individually |
| 115–120 | Wrap | Homework |

## What is worth testing — give them this list

| Test | Do not test |
|---|---|
| A can never read B's expense | that a button is blue |
| A negative amount is rejected | that a variable is assigned |
| The monthly total is correct | that a library works |
| A missing field returns 400 | things that cannot plausibly break |

Students want to test everything. Teach the filter: **would a plausible bug make this
test fail?** If not, the test is noise that will slow them down forever.

## The break-it exercise

For each test they have:

1. Deliberately break the code it covers — change `<` to `<=`, remove the `user_id`
   filter, return 200 instead of 400
2. Run the test
3. **It must fail.** If it passes, the test is fake — delete or fix it
4. Undo the break

`broken/` holds 4 pre-written tests. Two are real, two are theater. Answers in
`instructor/day-10-answers.md`.

## Checkpoint 2 (rubric criterion 4)

Individually, hand each student a working-looking snippet with one real flaw. Rotate:

| Flaw | Should notice |
|---|---|
| Query missing `WHERE user_id` | anyone reads anyone's data |
| String-concatenated SQL | injection |
| `catch (e) {}` | failure made invisible |
| Four abstraction layers for one function | over-engineering |
| A method that does not exist | hallucination |

**Pass:** finds it, or says "I would not merge this until I understood X" about the
right line. **Fail:** approves it, or objects only to formatting.

Record in Classroom under `Checkpoints`.

## Common failures

| Failure | Fix |
|---|---|
| Test asserts nothing | Break the code. Show them it still passes |
| Tests the framework instead of their rules | "Which of YOUR decisions does this check?" |
| Writes 40 tests, none meaningful | Delete all. Write 5 that matter |
| Will not delete a passing fake test | A green fake test is worse than no test — it lies |
