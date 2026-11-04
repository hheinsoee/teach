# Day 8 — Database

## The three layers

| Layer | Today |
|---|---|
| **Understand** | Tables · columns · keys · relationships · **reading SQL** · schema design · migrations |
| **Direct** | Student designs the schema, agent implements it |
| **Verify** | Open the database and look at the rows yourself |

## The rule for today

> **The student designs the schema. The agent does not.**

A data model is a product decision, not a technical one, and it is the single most
expensive thing to get wrong — every later mistake is cheap to fix by comparison.
This is also rubric criterion 6, graded orally in day 12.

Make them draw it on paper before any agent is opened.

## Sessions in this day

> A **day** is one 2-hour meeting. A **session** is a teaching block inside it.

| Session | Title | Kind | Length |
|---|---|---|---|
| **8.1** | Tables, Keys & Relationships | concept | 20 min |
| **8.2** | Design the Schema | paper, no laptops | 20 min |
| **8.3** | Wire Up the Database | build | 45 min |
| **8.4** | Look at the Real Rows | verify | 15 min |

## Pacing — `FITS`

| | |
|---|---|
| **Fixed** (never shorten) | 8.2 Design the Schema · 8.4 Look at the Real Rows |
| **Elastic** (absorbs overrun) | 8.3 Wire Up the Database |
| **Cut line** (goes first) | 8.3 — finish wiring at home |

**Repaired:** was ~125 min. Money & Dates moved to day 2, Reading SQL to day 5. 8.2 is 20 min of paper and is rubric criterion 6 — if behind, sacrifice 8.3, never 8.2.

## Timing (120 min)

| Min | Block | Content |
|---|---|---|
| 0–15 | Homework review | Question 3: "what stops a stranger deleting your data?" Nothing. Hold that discomfort |
| 15–40 | Concept | Tables, keys, relationships. Read SQL together — do not write it |
| 40–60 | **Design** | Paper only. No laptops. Each student draws the schema |
| 60–100 | Build | Agent implements the student's schema. Wire the API to it |
| 100–115 | Verify | Open the database GUI. Look at real rows |
| 115–120 | Wrap | Homework |

## The design block — run it strictly

Laptops closed for 20 minutes. Each student draws two tables and the link between them.

Then: swap papers with a partner and attack each other's design with these questions.

| Question | What it exposes |
|---|---|
| Where do you store *who* this expense belongs to? | Missing `user_id` — the security hole |
| What if an amount is `0.1 + 0.2`? | Floats losing money |
| I bought lunch yesterday, entered it today. Which date? | `spent_on` vs `created_at` |
| What happens to expenses if a user is deleted? | Cascade, unconsidered |
| Add a second currency. What changes? | Whether they understand or memorized |

Compare against `project/spec.md` **after** they design, never before.

## Teaching notes

- Teach SQL as something to **read**, not write. They need to review the agent's
  queries, not author them.
- The `amount` integer decision is worth 10 minutes alone. Show `0.1 + 0.2` in Node.
  The output `0.30000000000000004` does the teaching for you.
- Make them look at the actual rows in a GUI. Students who only ever see data through
  their own UI cannot tell "saved correctly" from "saved wrong and displayed wrong".

## Common failures

| Failure | Fix |
|---|---|
| Lets the agent design the schema | Reject it. Paper first. Non-negotiable |
| No `user_id` on expenses | Ask who the expense belongs to. Wait |
| `amount` as float | Demo `0.1 + 0.2` in Node |
| One table with everything in it | Ask them to add a second user |
| Never looks at the real data | Open the GUI with them. Every student, once |
