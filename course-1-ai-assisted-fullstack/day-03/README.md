# Day 3 — How to Direct an Agent

**Ships:** a working CLI tool

## The three layers

| Layer | Today |
|---|---|
| **Understand** | What a specification is · decomposition · context · constraints |
| **Direct** | The whole day |
| **Verify** | Does the output match what you actually asked for? |

## Sessions in this day

> A **day** is one 2-hour meeting. A **session** is a teaching block inside it.

| Session | Title | Kind | Length |
|---|---|---|---|
| **3.1** | The Four Parts of an Instruction | concept | 25 min |
| **3.2** | Write the Spec First | build, no agent | 15 min |
| **3.3** | Build the CLI Tool | build | 45 min |
| **3.4** | Break Your Partner's Tool | verify | 15 min |

## Pacing — `FITS`

| | |
|---|---|
| **Fixed** (never shorten) | 3.1 The Four Parts · 3.2 Write the Spec First |
| **Elastic** (absorbs overrun) | 3.3 Build the CLI Tool |
| **Cut line** (goes first) | 3.4 Break Your Partner's Tool → homework |

3.2 must stay agent-free and in class. If students write the spec at home they will skip it.

## Timing (120 min)

| Min | Block | Content |
|---|---|---|
| 0–15 | Homework review | Read two annotations aloud — one vague, one precise. Do not name who wrote them |
| 15–40 | Concept | Vague vs precise. Live demo: the same feature asked 3 ways |
| 40–100 | Build | Each student builds a CLI tool, logging every prompt |
| 100–115 | Verify | Swap tools with a partner. Try to break each other's |
| 115–120 | Wrap | Homework |

## The live demo (do this yourself, on the projector)

Ask the agent the same thing three ways and show the results side by side:

| Prompt | Typical result |
|---|---|
| "make a script that handles expenses" | 200 lines, a database, a web server, nothing asked for |
| "write a script that reads expenses.csv and prints the total" | roughly right, but invents the file format |
| "write a Node script `total.js`. It reads `expenses.csv` with columns date,category,amount. It prints the sum of amount, rounded to 2 decimals. If the file is missing, print `no file` and exit. No libraries." | exactly that |

The lesson is visible, not argued. Students stop writing one-line prompts after seeing this.

## The four parts of a good instruction

| Part | Example |
|---|---|
| **What** | "a Node script that reads a CSV and prints the total" |
| **Shape** | "columns are date, category, amount" |
| **Edge** | "if the file is missing, print `no file`" |
| **Constraint** | "no libraries, one file, under 40 lines" |

**Constraint is the one students skip** and the one that prevents the most damage.
Without it the agent adds dependencies, abstractions, and files nobody asked for.

## Teaching notes

- Do not give them the CLI tool spec. Make them write their own spec first, then build.
  A student who cannot write the spec does not understand the task.
- Ban "make it better" as a prompt today. Better how? That is the lesson.
- Students who get a perfect result from a lazy prompt got lucky. Have them ask for
  one more feature and watch it fall apart.

## Common failures

| Failure | Fix |
|---|---|
| Accepts whatever comes back | "Compare it to your spec. Line by line." |
| Keeps re-prompting the same way | Have them write the spec down first, on paper |
| Asks for everything at once | One feature per instruction. Enforce it |
| Agent adds a library | "You did not ask for that. Ask it to remove it." |
