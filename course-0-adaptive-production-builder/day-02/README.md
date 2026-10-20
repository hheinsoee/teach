# Day 2 — Ask Two Questions, Prompt With Precision

**Instructor plan.** 120 minutes. Goal: students see that **the prompt is the product** — same tool, different prompt, radically different result.

> **Core idea:** Before building anything, ask **(1) what problem does it solve, (2) how will someone use it?** If a student can't answer those, no prompt will save them.

---

## What they understand by the end

- A vague prompt gives generic output; a precise prompt gives useful output
- "What problem, how to use" is the two-question filter for any build
- The same tool (v0) can produce 10 very different things depending on how you ask
- Precision is not length — it's clarity about user and purpose

## What they can do by the end

- Rewrite a vague prompt into a precise one
- Spot when a prompt is missing the "who/why/how"
- Ship a mini-app that solves a **specific** problem, not a generic one

## What they can label by the end

**Specification · constraint · "what problem, how to use"**

---

## 120-minute plan

| Block | Minutes | Activity |
|---|---|---|
| Homework review | 15 | Everyone shares their homework URL. 2-3 volunteers explain who it was for. |
| **Experience** — same ask, three prompts | 60 | The vague-vs-precise exercise + build |
| **Label** — vocabulary | 20 | Students write definitions, no AI |
| **Transfer** — two questions beyond prompting | 15 | Apply two questions to picking tools |
| Verify + homework brief | 10 | URL check, homework assigned |

---

## Experience phase (60 min)

### Part A — The three-prompt comparison (20 min)

Instructor writes a product ask on the whiteboard, deliberately vague:

> *"Build a tool to help people manage expenses."*

Everyone types that exact prompt into v0. Wait for output. Then:

**Prompt 2** (slightly better):
> *"Build a tool to help a small shop owner track daily expenses on their phone. One page. Must add an expense in under 5 seconds."*

**Prompt 3** (precise):
> *"Build a one-page expense tracker for a Burmese tea shop owner. Form at the top: amount (number), category (dropdown: ingredients, salary, rent, other), note (text). Below the form: today's total in large text, then a list of today's expenses. Mobile-first. Burmese text is OK."*

Students run all three. Compare side-by-side. Discuss as a group:
- What changed between prompt 1 and 2?
- What changed between prompt 2 and 3?
- Which is more "work"? Which gives you a usable thing?

### Part B — Build their own precise mini-app (40 min)

Each student picks a **real problem for a real person** (not themselves). Write down:

1. **Who?** (name, role)
2. **What problem?** (one sentence)
3. **How will they use it?** (phone? laptop? how often?)

Then write a precise prompt — modeled on prompt 3 above. Build and deploy.

**Instructor rule:** If a student's prompt doesn't mention a specific person or specific use, send them back to steps 1-3.

---

## Label phase (20 min)

Each student writes, **no AI**:

1. What is a **specification**? (one sentence)
2. What is a **constraint** in a prompt? (one sentence)
3. Why are "what problem, how to use" important? (one sentence)
4. What makes prompt 3 better than prompt 1? (your own words)

Then: pair up. Each student reads their partner's answers aloud. Partner says "yes" or "say that again."

**Instructor pocket answers:**

- **Specification** — a clear description of exactly what you want, including who it's for and how it'll be used
- **Constraint** — a rule that limits the output (e.g. "mobile-first", "one page", "under 5 seconds to add an expense")
- **What problem / how to use** — the two questions that force clarity. Without them, you build generic things nobody uses.

---

## Transfer phase (15 min)

Apply the two questions to **choosing a tool**, not just prompting:

- "I want to add a form to my site." → *What problem? Collect user emails. How to use? Once at signup.* → Google Forms is enough. Don't need Lovable.
- "I want users to pay me." → *What problem? Accept payments. How to use? Monthly subscription.* → Stripe. Don't need to build.
- "I want a chatbot." → *What problem? Answer FAQ. How to use? On my landing page.* → ChatGPT embed or Intercom. Don't build.

**The lesson:** the two questions filter out 80% of "I need to build X" that doesn't actually need building.

---

## Verify + wrap (10 min)

- URL check — everyone shows the mini-app from Part B
- Homework brief — see [`homework.md`](homework.md)

---

## Common failures

| Failure | Fix |
|---|---|
| Student writes a long prompt that is still vague | Push: "who specifically, doing what specifically?" |
| Student spends 40 min polishing prompt, never deploys | Enforce ship deadline: 30 min max on prompt |
| Student picks "myself" as the user | Not allowed today — must be someone else |
| Vibe coder jumps to prompt 3 immediately, skips comparison | Make them run all three. The comparison IS the lesson. |

---

## Vibe coder watch (day 2)

Day 2 is when vibe coders start to show:
- They skip the comparison exercise ("I already know prompts work")
- Their Label answers are high-level marketing words ("it's about the user journey")
- They can't name a specific person their mini-app is for

**Response:** Make them pair with a true beginner for Label. Ask them to teach "what makes prompt 3 better" to the beginner. If they can't teach it, they don't know it.
