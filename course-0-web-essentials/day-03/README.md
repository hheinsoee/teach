# Day 3 — JS Variables & Data Types (Flipped)

**Phase**: Learning (Day 3 of 8) — First JS day, prototype of flipped format
**Project**: Habit Tracker
**Modules touched**: A (programming), H (JS), F (AI)
**Duration**: 90 min class + ~3 hr homework (split: 1.5 hr pre-class self-study + 1.5 hr post-class build)

> **This is the first flipped day.** Day 1-2 were traditional. Day 3 onward (if successful) uses this format.

---

## Pre-class (student does at home)

- **prework.md** sent via Viber 2 days before (15-20 min setup)
- **self-study.md** done night before (60-90 min: videos, console experiments, write 3 questions)

Student arrives with:
- Working live URL
- DevTools open
- ChatGPT/Claude logged in
- **3 written questions**

---

## In-class 90-min flow (flipped)

| Block | Min | Who's active | What |
|---|---|---|---|
| **Q&A collection** | 25 | 🙋 Students | Each shares 1 question; teacher writes on board |
| **Discussion + clarification** | 15 | 💬 Mixed | Teacher explains top 3 common confusions with analogies |
| **Live building** | 25 | 🤝 Collaborative | Teacher at AI, students modify in their script.js |
| **Label** | 10 | ✍️ Students | Own words: variable, let, const, types |
| **Wrap + next assignment** | 15 | 📋 Teacher | Day 4 prework + homework + preview |

---

## Learning outcomes

By end of class, student can:
- **Read**: a JS line and identify variable, type, assignment
- **Understand**: variables remember things; types are kinds
- **Direct**: AI to log data about habits using variables
- **Verify**: console.log output in DevTools

---

## Teacher prep before this day

### AI prompt — anticipate common confusions

Ask your AI assistant:

```
I'm teaching Day 3 of Course 0 — Web Essentials.
Topic: JS variables and data types (let, const, string, number, boolean, array).
Cohort: absolute beginners, Burmese-primary, did 60-90 min self-study night before.

Anticipate the 10 most common beginner confusions about variables and types.
For each: the confusion + a 1-sentence Burmese-friendly analogy.
```

Save answers. Have them ready for Q&A phase.

### Example anticipated confusions

- `=` vs `===` (assignment vs comparison)
- Strings quotes `"Pray"` vs numbers `4`
- Why arrays start at 0 not 1
- `let` vs `const` — when to use which
- `undefined` vs `null`
- Variable naming (no spaces, camelCase)
- Array vs object (introduce briefly)
- `console.log` — where it shows up
- Reserved words (can't name variable `function`)
- `typeof` operator

---

## Phase 1 — Q&A collection (25 min)

### Protocol

1. "Each of you, 1 question. I'll write them all on the board."
2. Round-robin — go around the room
3. If student says "no question": "What was easiest? What felt weird?"
4. Write EVERY question on board, no filtering

**Why collect all first**: pattern recognition. If 5 students ask about `let` vs `const` — THAT's the topic to deep-dive.

### If Q&A phase is silent

**Seed questions** (from your AI prep):
- "When you tried `let habits = []` in console, did anything surprise you?"
- "Did the self-study video explain why strings need quotes?"
- "What's the weirdest thing you noticed about `console.log`?"

**Wait 30 seconds minimum before rescuing.** Awkward silence is OK.

---

## Phase 2 — Discussion + clarification (15 min)

Group questions on board into themes. Pick top 3. Explain each.

### Analogies to use

- **Variable** = ဘူးထဲ ပစ္စည်းထည့်ထား, ဘူးရဲ့ လက်ပတ်မှာ နာမည်ရေးထား
- **let vs const** = ပြင်နိုင်တဲ့ ဘူး (let) vs ပြင်မရတဲ့ ဘူး (const)
- **String vs number** = စာသား (quotes needed) vs ဂဏန်း (no quotes)
- **Array** = စာရင်း — အတန်းချ ထားတဲ့ ပစ္စည်းတွေ, 0 ကနေ စရေတွက်
- **console.log** = screen ပေါ် pop-up message ပြ (debugging အတွက်)

### When student asks something you don't know

> *"ကိုယ်လည်း မသိဘူး — အတူတူ AI ကို မေးကြမယ်"*

Open AI on big screen. Type question. Read answer together. Model "learning in real-time".

---

## Phase 3 — Live building (25 min)

Open ChatGPT in front of class. Prompt:

```
Add JavaScript to the Habit Tracker script.js file:
- Declare an array of 4 habits (const habits = [...])
- Log the number of habits
- Log the first habit name
- Log today's date using new Date()

Keep it simple, beginner-friendly comments in each line.
```

Read AI's code line by line WITH class:
- "ဒီ `const` က ဘာလဲ?"
- "ဒီ `habits[0]` က ဘာလို့ 0 သုံးတာလဲ?"
- "ဒီ `.length` က ဘာလဲ?"

Students follow in their own `script.js`. Commit + push together. All see URL update at same time.

**Then iterate** — "ဘာထည့်ချင်လဲ?" Student requests → AI generates → read → commit.

---

## Phase 4 — Label (10 min)

Students write (no AI, 5 min):

1. What is a **variable**?
2. `let` vs `const` difference?
3. 4 data types learned
4. What does `console.log()` do?
5. Why do variables exist?

Then **pair-share** (2 min): compare with neighbor.

Volunteer 2-3 students read theirs aloud (3 min).

---

## Phase 5 — Wrap + next assignment (15 min)

- **Celebrate**: first JS day done
- **Preview Day 4**: functions + if/else — "we'll teach code to make decisions"
- **Assign**:
  - **Day 3 homework** (post-class) — see `homework.md`
  - **Day 4 prework** — will arrive on Viber in 2 days
  - **Day 4 self-study** — will arrive on Viber 1 day before class

---

## Common risks today

| Risk | Handle |
|---|---|
| Students didn't do self-study | Q&A phase will reveal; have them follow during live build |
| Q&A phase is silent | Seed questions ready; wait before rescuing |
| Student asks advanced JS question | "Great question — that's Course 1+. Let me note it." |
| Variable naming confusion | Pair with partner, debug together |
| `=` vs `===` universal confusion | 2-min focused explanation in discussion phase |

---

## AI co-teacher prompts for today

See [`../instructor/teaching-guide.md`](../instructor/teaching-guide.md) for full prompt library.

Quick ones for Day 3:

### Before class
```
I'm teaching JS variables and types to beginners tonight. Give me:
- 5 common confusions with Burmese analogies
- 3 seed questions if Q&A is silent
- 1 live build prompt I can use with AI on screen
```

### During class (silent question)
```
A student asked: "[question verbatim]"
Context: Day 3, JS variables intro. Beginner level.
Give me a 30-second simple answer with a Burmese analogy.
```

### After class
```
Day 3 done. Things that went well: [...]. Things that struggled: [...].
What should I adjust for Day 4 (functions + conditions)?
```

---

## This day is NOT

- Not variable syntax drill
- Not deep type theory
- Not scope / hoisting / closures (Course 1)
- Not teacher-led lecture

---

## After class — debrief for Hein

Ask yourself:
1. Did Q&A phase fill 25 min naturally, or forced?
2. Were student questions aligned with what you anticipated?
3. Did live build phase feel collaborative or demonstration-only?
4. Any student who looked lost?

If **flipped worked** → extend format to Days 4-12
If **flipped failed** → revert Day 4 to traditional, debug what went wrong

Use AI assistant to debrief: paste what happened, ask "what should I change?"
