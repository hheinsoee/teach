# Vibe Check Playbook — How to Spot and Intervene

**The vibe coder is the biggest risk in Course 0.** This playbook helps instructors catch and handle them without destroying their motivation.

---

## What a vibe coder is

Someone who:
- Produces working output with AI tools
- Cannot explain how or why it works
- When it breaks, re-prompts AI harder instead of looking at the system
- Over-estimates their ability; underestimates scope
- Cannot transfer knowledge when a tool changes

**They are not bad students.** They just haven't learned to look under the hood yet. The whole course is designed to pull them from vibe coding into actual understanding.

---

## Signs by day

### Day 1
- Rushes through the exercise ("yeah yeah I've done v0")
- Label answers are generic or marketing-sounding ("empowering users to...")
- Can't explain the difference between v0 and Vercel

### Day 2
- Skips the three-prompt comparison ("prompt 3 is obviously better")
- Can't name the specific person their mini-app is for
- Prompt log shows one giant prompt, no iteration

### Day 3
- Can prompt Lovable but can't open Supabase
- Doesn't know what their table is called
- Says "the data saves" without being able to point at where

### Day 4
- Login screen appears, but can't explain **what** auth is doing
- Doesn't test 2-account isolation unless forced
- Says "yes it works" when both users see all data

### Day 5
- Pastes error into AI without reading
- Says "AI's suggestion didn't work, I don't know what else to try"
- Can't name which layer (UI / Data / Infra) the bug lives in

### Day 6
- Beautiful capstone, cannot explain it
- 4-minute oral: all generic answers, no specifics
- Can't name own table columns in Supabase

---

## Intervention protocol

### Soft intervention (Day 1-3)

**Goal:** Catch early, redirect without discouraging.

- During Label: ask them specifically, "What is X in your own words?"
- Pair them with a true beginner — the beginner's questions force the vibe coder to teach, which exposes gaps
- At end of day, 1-on-1: "I noticed you moved fast — let's double-check you got the Label piece. What is a URL in your own words?"

**Message framing:** "You already know how to build. Course 0 is also about **understanding** so you can keep building when AI gets it wrong. Let's work on that part."

### Firm intervention (Day 4-5)

**Goal:** They're not learning the comprehension side. Make the gap visible.

- At Day 5 Vibe Check: ask the specific questions. If they can't answer, say so directly:

> "You've built a working app. But right now, you can't tell me where your data lives or what your table is called. That means if something breaks tomorrow, you won't be able to fix it. That's not the goal of this course."

- Give them concrete homework: open Supabase, name every column, write it down. Due before Day 6.

### Hard intervention (Day 6)

**Goal:** Pass/fail decision. Honest grading.

- Final Oral: if they can't answer specifics, they fail criterion 2
- Deliver the result privately, same day:

> "Your capstone is live and real users signed up — those are real wins. But the oral check is about whether you can explain your own app, and today you couldn't do that. In this course, that's a fail — not because the app is bad, but because the promise of the course is that you can keep going after it ends. Right now I'm not confident you can."

- Offer remediation: retake days 3-5 in the next cohort, or self-study with specific topics

**Never say "you tried hard, you pass."** That is how courses become certificate mills.

---

## The one question that catches most vibe coders

> **"Open Supabase right now and tell me the name of your table and every column in it."**

A real builder, even a new one, can do this in 30 seconds. A vibe coder either:
- Doesn't know where to click
- Reads the column names haltingly like they've never seen them
- Says "I don't remember" (they never looked)

**Use this question in Day 3, Day 4, Day 5 Vibe Check, and Day 6 Final Oral.** It is the simplest and most reliable filter.

---

## What vibe coders are good at (lean into this)

Vibe coders usually:
- Prompt well
- Iterate fast
- Have design taste
- Can bootstrap a working thing quickly

**These are real skills.** They're half of being a builder. The missing half is comprehension and operation.

When intervening, acknowledge their strengths: "You can ship fast. Course 0 is about adding the other half — understanding — so you can ship *and* survive when it breaks."

---

## When NOT to flag someone as a vibe coder

- Nervous students who freeze under oral questions but demonstrate understanding in writing (give them writing-based alternatives for criterion 2)
- Students whose English isn't strong — switch to Burmese for the oral, they may know it fine
- Students who ship slow but clearly understand (opposite problem — comprehension without velocity)

**Vibe coder = shipped fast + can't explain.** Both conditions required.

---

## Instructor self-check

If you find yourself:

- "They'll pick it up later" → No. Later never comes. Intervene now.
- "They've already paid for the course, I should pass them" → That's how the course becomes worthless.
- "The oral exam feels mean" → It feels mean because it has teeth. That's the whole point.
- "They tried really hard" → Effort ≠ comprehension. Grade comprehension.

The oral exam is the whole course. Soften it and nothing else matters.
