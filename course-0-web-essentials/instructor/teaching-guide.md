# Teaching Philosophy — Course 0

Hein's confirmed teaching approach for Course 0 (Nov 2026 cohort onward).

**Core principle**: *"အိမ်စာ များများ + self-study များများ + ကျောင်းသား မေးခွန်း များများ"*

---

## The Flipped Classroom Approach

### What traditional teaching looks like

```
Teacher explains (70%)
    ↓
Student practices (20%)
    ↓
Q&A (10%)
```

Student = passive receiver.

### What Hein's Course 0 looks like

```
Pre-class: Student does homework + self-study (comes prepared)
    ↓
Class: Student asks questions from their struggle (25-30 min Q&A)
    ↓
Class: Teacher clarifies + leads deep discussion (15 min)
    ↓
Class: Live building together with AI (25 min)
    ↓
Class: Label what we figured out (10 min)
    ↓
Post-class: New homework + self-study assigned
```

Student = **active learner, question-asker, struggle-explorer**.

---

## The 3 Pillars

### 1. အိမ်စာ များများ (Lots of Homework)

- **3-4 hr per class day** — not optional
- **Build attempt required** — struggle is the learning
- **Reflection included** — what worked, what didn't, questions

### 2. Self-study များများ (Lots of Self-Study)

- **Pre-class videos** — YouTube, MDN, AI explanations
- **Research prompts assigned** — "find out what X is"
- **AI exploration** — "ask ChatGPT about Y, summarize"

### 3. ကျောင်းသား မေးခွန်း များများ (Lots of Student Questions)

- **Questions are the main deliverable** — not finished code
- **Class Q&A is 25-30 min** — protected block
- **"I don't know" welcomed** — struggle acknowledged
- **Written question submission** — alongside verbal (for shy students)

---

## Class Time Structure (90 min)

| Block | Min | Who's active | What happens |
|---|---|---|---|
| **Q&A from homework** | 25-30 | 🙋 Students | Each student shares 1+ question. Teacher collects on board. |
| **Clarifications + discussion** | 15 | 💬 Mixed | Teacher explains deeper. Group thinking. Analogies. |
| **Live building** | 20-25 | 🤝 Collaborative | Teacher at AI, students follow + modify in real-time. |
| **Label phase** | 10 | ✍️ Students | Own words: what did we figure out today? |
| **Next assignment** | 5-10 | 📋 Teacher | Prework for next class, homework, self-study pointers. |

**Teacher active ~30%, student active ~70%**.

---

## Materials Structure (5 files per day)

```
day-NN/
├── prework.md         ← Viber/Telegram message, 1-2 days before class
├── self-study.md      ← Videos/docs/AI to explore before class
├── README.md          ← Instructor plan (Q&A + discussion focus)
├── in-class.md        ← What students do in class (minimal)
└── homework.md        ← Post-class consolidation + questions
```

Each file serves a phase of the student journey:

1. **prework.md** → "setup your environment"
2. **self-study.md** → "explore this topic"
3. **in-class.md** → "come with questions"
4. **README.md** → (for teacher only) "how to run class"
5. **homework.md** → "consolidate + prepare for next"

---

## Known Risks + Mitigations

Flipped classroom is **demanding on both teacher and student**. Here are the risks and how to handle them.

See [`ai-assistant-prompts.md`](ai-assistant-prompts.md) for AI prompts that help the instructor handle these risks in real-time.

### Risk 1 — Student participation imbalance

**What happens**: Shy students never ask questions. Vocal students dominate.

**Mitigation**:
- Round-robin "each student share 1 question" rule
- Written Q&A alongside verbal (anonymous Google Form)
- Pair-share before whole-class discussion
- Teacher gently calls on silent students

**AI assistant role**: During Q&A, teacher can ask AI "how do I get a shy student to open up?" between blocks.

### Risk 2 — Student didn't do self-study

**What happens**: Student arrives unprepared. Class useless for them.

**Mitigation**:
- Pre-class Viber check (✅ done emoji)
- "Prepared buddy system" — help unprepared student catch up
- Don't lecture to the unprepared — they catch up next class
- Gentle flag if repeated (private conversation, not public shame)

**AI assistant role**: Teacher can quickly ask AI to generate "catch-up summary" for unprepared students to review during build time.

### Risk 3 — No one asks questions (awkward silence)

**What happens**: First 5 min of Q&A → silence → teacher tempted to lecture.

**Mitigation**:
- Wait 30 seconds minimum (silence is OK)
- Seed questions: "when you tried X at home, what happened?"
- Teacher-prepared "common confusion" questions to prime
- "Pair-share" fallback: 2 min with partner, then share

**AI assistant role**: Teacher asks AI (before class) "given today's topic, what are common beginner confusions?" to prepare seed questions.

### Risk 4 — Teacher doesn't know answer to question

**What happens**: Student asks unexpected question. Teacher freezes.

**Mitigation**:
- **"I don't know, let's find out together"** is a GREAT answer
- Open AI on big screen, ask question together
- Model "learning in real-time" for students
- Honest > performative

**AI assistant role**: AI is the safety net. Teacher never alone with a hard question.

### Risk 5 — Class derails into tangent

**What happens**: One student's question opens Pandora's box. Class spends 40 min on one topic.

**Mitigation**:
- Teacher has timer (phone alarm every 15 min)
- "Great question — let's park that, back to today's focus"
- Follow-up questions → next class or homework
- Protect the 5-phase structure

**AI assistant role**: Teacher asks AI between phases "is this tangent worth pursuing or should I redirect?"

### Risk 6 — Self-study rigor varies across cohort

**What happens**: 3 students do 4 hr self-study, 7 do 30 min. Class level mismatch.

**Mitigation**:
- Accept the reality — can't force identical prep
- Teach to the **middle**, not the top
- Challenge the prepared students with deeper questions
- Help the under-prepared during build phase

**AI assistant role**: Teacher asks AI "how do I handle mixed preparation in one class?"

### Risk 7 — Homework feels overwhelming

**What happens**: Students report "3-4 hr homework is too much". Burnout.

**Mitigation**:
- Honest pacing check at Week 2 and Week 4
- Trim homework if class average reports >5 hr
- Encourage "stuck at 2 hr → stop + come with questions" culture
- Burnout > perfect completion

**AI assistant role**: Teacher asks AI "how do I rebalance homework load mid-course?"

### Risk 8 — Teacher first-time, no lecture fallback

**What happens**: Flipped is harder than lecturing. Hein (first-time teacher) feels adrift.

**Mitigation**:
- **AI co-teacher** is always available (phone, laptop)
- Pre-class dry-run with AI: "walk me through today"
- Post-class debrief with AI: "what went wrong today, how to fix?"
- Week 1 can revert to lecture-heavy if needed — soft start

**AI assistant role**: AI is **Hein's teaching assistant** — not students' AI, but Hein's own silent co-teacher throughout.

---

## Why This Approach Fits Course 0

### Course 0 principle alignment

Course 0's core:
> *"Code ကို အဓိက မသင်။ AI ရှိတယ်။ Code ကို သဘောပေါက်ရမယ်, ဖတ်တတ်ရမယ်။"*

**Flipped teaching extends this to pedagogy**:
- Teacher မသင်။ AI ရှိတယ်။ Students က **ဖတ်**, **စမ်း**, **မေး**။
- Class က "transmission of knowledge" မဟုတ် → "collective inquiry"
- Student က passive "receiver" မဟုတ် → active "investigator"

### Hein's cohort profile fit

- Myanmar beginners with Burmese-primary learning
- Mix of hobby + serious learners
- 6-week commitment (slow enough to self-study, fast enough to maintain momentum)
- Nov 2026 batch with Viber/Telegram native communication

### Industry alignment

Modern self-directed learning is **the only way to keep up in tech**:
- New frameworks every 6 months
- Documentation + AI + community = primary learning sources
- "Classes" become rarer; "learning by doing" is default
- Course 0 teaches **how to learn**, not just what to learn

---

## When Flipped DOES NOT Work

Honest limits:

### Mandatory lecture moments
Some topics NEED teacher explanation:
- **Day 1**: Course structure, expectations — lecture OK
- **Day 6 (vanilla → React transition)**: conceptual bridge needs teacher
- **Day 12 (showcase + what's next)**: synthesis + preview

### When cohort isn't ready
If Nov 2026 cohort's first 2 weeks show:
- <30% homework completion
- Students arriving fully unprepared
- Q&A phase consistently silent

Then **revert to traditional pacing** for cohort 1, iterate to flipped for cohort 2.

---

## Rollout Plan

### Phase 1 — Nov 2026 cohort (hybrid)

- **Day 1-2**: Traditional (teacher-led), low-risk warm-up
- **Day 3+**: Introduce Q&A blocks gradually (10 min → 25 min over 3 classes)
- **Day 6+**: Full flipped (if cohort responding well)

### Phase 2 — Feb 2027 cohort (full flipped)

- All days follow 5-phase structure
- Materials refined based on Phase 1 learnings
- AI assistant prompts battle-tested

### Phase 3 — Cohort 3+ (standard)

- Flipped is default
- Course 0 brand: "the course where you learn by asking"

---

## Materials

- [`ai-assistant-prompts.md`](ai-assistant-prompts.md) — AI prompts for Hein during teaching
- [`pacing.md`](pacing.md) — 90-min day structure (updated for flipped)
- Day folders — `prework.md`, `self-study.md`, `README.md`, `in-class.md`, `homework.md`

---

## Honest Caveats

- Flipped teaching is **harder to execute than lecture** — expect first cohort rocky
- First-time teacher + flipped = double challenge — AI assistant is critical
- Cohort may resist initially ("you're supposed to teach us, not ask us questions") — persist
- Measure success by **student questions quality**, not quantity of content covered

> *"The best classroom is one where teacher learns alongside students."*

---

# AI Teaching Assistant Prompts — For Hein

AI (ChatGPT or Claude) as **your silent co-teacher** throughout Course 0.

**Core idea**: Hein ≠ alone in class. AI is a 24/7 teaching assistant that:
- Prepares class content
- Handles unexpected questions
- Debriefs after class
- Guides risk mitigation in real-time

**This file lists concrete prompts to use at each phase.**

---

## Before Class — Preparation

### 1. Day dry-run prompt

Paste before each class:

```
I'm teaching Day [N] of Course 0 — Web Essentials. Today's topic: [TOPIC].
My cohort: absolute beginners, no programming background, Burmese-primary.
Teaching time: 90 minutes, flipped classroom (25 min Q&A + 15 min discussion + 25 min build + 10 min label + 15 min wrap).

Walk me through:
1. Common beginner confusions about [TOPIC] — anticipate 5 likely questions
2. 3 analogies in Burmese context (not CS theory)
3. Live demo prompt I should use (AI code generation for build phase)
4. 2 seed questions if students are silent in Q&A
5. "Taste of what's next" preview for Day [N+1]

Be specific, not generic. I'm first-time teacher — don't assume I'll improvise well.
```

### 2. Common confusions prompt

```
I'm teaching [TOPIC] today to absolute beginners.
List 10 common beginner confusions about [TOPIC].
For each: the confusion + a 1-sentence Burmese-friendly explanation.
```

### 3. Analogy generator

```
I need 3 Burmese-culturally-relevant analogies for [CONCEPT].
Examples of good analogies I already use:
- HTML = အုတ်မြစ် (house foundation)
- CSS = ဆေးသုတ် (paint)
- JS = switch

Give me 3 analogies for [CONCEPT] in similar style.
```

---

## During Class — Real-time Assistance

### 4. Unexpected question prompt

When a student asks something you don't know:

```
A student just asked: "[QUESTION VERBATIM]"
Context: Day [N] of Course 0, topic [TOPIC], absolute beginner level.
Give me:
1. 30-second answer in simple Burmese-friendly English
2. Analogy if helpful
3. Honest flag if this is advanced (Course 1+) so I can defer
```

### 5. "Shy student won't talk" prompt

Quick between-block query:

```
I have a shy student who hasn't asked anything in 3 classes.
Topic today: [TOPIC].
Give me 2 gentle, low-stakes questions I can ask them to open up.
Burmese context — not confrontational.
```

### 6. "Class derailing on tangent" prompt

```
A student asked [TANGENT QUESTION] and now 10 min deep into it.
Original plan was [TODAY'S PLAN].
Is this tangent worth pursuing or should I redirect? Why?
If redirect, give me a 1-sentence graceful pivot.
```

### 7. "Student is confused during live build" prompt

```
During live build of [FEATURE], a student is stuck at [SPECIFIC STEP].
They say: "[STUDENT WORDS]"
Help me diagnose in 3 possible causes + 1 question to ask them to narrow down.
```

### 8. "No one asking questions" prompt

```
I just opened Q&A. 2 minutes of silence. Topic: [TODAY'S TOPIC].
Cohort: 8 absolute beginners.
Give me 3 "safe" starter questions I can ask the group to warm up Q&A.
Should be about their own experience, not testing knowledge.
```

---

## After Class — Debrief

### 9. Class debrief prompt

End of class, during commute home:

```
I just taught Day [N] of Course 0, topic [TOPIC].

What went well:
- [1-2 things]

What struggled:
- [1-2 things]

Student questions that stuck out:
- [list]

Students who seemed lost:
- [1-2 names/descriptions]

Advise me:
1. What to adjust for Day [N+1]
2. Which struggling students need 1-on-1
3. If I should revise upcoming homework based on today's confusion
```

### 10. Homework calibration prompt

```
Students reported homework taking [X hours] on average for Day [N].
Target was 3 hours.
Day [N+1] homework assigned is: [DESCRIPTION].
Should I trim? How?
```

### 11. Pacing check prompt

```
We're at Day [N] of 12. Capstone (News App) begins Day 9.
Topics covered so far: [LIST].
Topics remaining: [LIST].
Days remaining: [COUNT].
Realistic to finish on time? What to cut if not?
```

---

## For Each Risk (from teaching-philosophy.md)

### Risk 1 — Participation imbalance
```
In my 8-student class, 3 always answer, 5 never do.
Specifically, [NAME 1, NAME 2, NAME 3] stay silent.
Give me 3 strategies to balance participation without putting silent students on the spot.
```

### Risk 2 — Student didn't do self-study
```
A student came unprepared for Day [N]. They don't know [CONCEPT].
During today's 25-min Q&A + 15-min discussion, how do I include them without derailing class?
```

### Risk 3 — Awkward silence in Q&A
```
Give me 5 "warm-up" questions for Day [N] on topic [TOPIC].
These should get students talking about their homework experience without requiring technical knowledge.
```

### Risk 4 — I don't know the answer
```
Student asked: "[QUESTION]"
I genuinely don't know. Give me:
1. Honest answer script: "I don't know, let's find out together"
2. How to search for answer live with students (demonstration)
3. Follow-up: when should I ask AI vs when should I say "that's Course 1+"
```

### Risk 5 — Class tangent
```
We're 15 min deep into tangent about [TOPIC].
Students are engaged but we're off-plan.
Should I:
A) Let it continue (engagement > plan)
B) Redirect now
C) Give 5 more min then redirect
Which and why?
```

### Risk 6 — Mixed preparation levels
```
In today's class:
- 3 students did full self-study
- 3 did partial
- 2 didn't do any

Topic: [TODAY'S TOPIC].
How do I teach to all 3 groups in 90 minutes without boring the prepared or losing the unprepared?
```

### Risk 7 — Homework overwhelming
```
Students report burnout — average homework is 5 hr/day (target 3 hr).
Days 1-[N] are done. Days [N+1]-12 upcoming.
Give me:
1. Which topics to trim without breaking the curriculum
2. Which homework parts (research, build, reflect) to lighten first
3. How to communicate change without students feeling shortchanged
```

### Risk 8 — I feel overwhelmed as first-time teacher
```
I'm a first-time teacher. Today's class [went well / went badly].
I feel [emotion].

Remind me:
1. What's working in Course 0 design
2. What's realistic for first cohort
3. 1 small thing I can do tonight to feel better prepared for Day [N+1]

Be kind, not sycophantic. Honest.
```

---

## Meta-prompts — Teaching Skill Development

### Monthly reflection prompt

Once a month (or end of cohort):

```
I'm Hein, first-time teacher, 1 month into Course 0.
Reflect with me on:
1. 3 teaching habits I've built that are working
2. 3 that I should drop
3. 1 big question I should think about for cohort 2
```

### Mid-cohort adjustment prompt

End of Week 3 (Day 6):

```
We're at Day 6 of Course 0 (midpoint).
Cohort reaction summary: [HEIN'S OBSERVATIONS]
Who's thriving, who's struggling, who's dropping.

Given we're halfway:
1. Should I adjust curriculum pace for Days 7-12?
2. Should I add 1-on-1 sessions for struggling students?
3. What's the honest likelihood of 60-70% completing Capstone 2?
```

---

## Building a Prompt Library

As Hein teaches, he'll discover more scenarios. Encourage him to:

1. **Save effective prompts** here in this doc
2. **Note which prompts gave bad advice** and iterate
3. **Share with future instructors** (if Course 0 scales)

---

## Setting Up AI Access During Class

**Hein's phone/laptop should always have**:
- ChatGPT or Claude tab open (logged in)
- This file bookmarked
- Quick-copy snippets ready

**Hein may announce to class**:
> *"ကျွန်တော်လည်း AI ကို သုံးတယ်။ Class မှာ ကိုယ်မသိတဲ့ မေးခွန်းရှိရင် — AI နဲ့ အတူတူ ရှာကြမယ်။"*

This **models** the Course 0 principle: AI as learning partner, not teacher replacement.

---

## Core Mantras

1. **"I don't know, let's find out"** is a POWERFUL teacher phrase, not weak
2. **Silence in Q&A is OK** — wait 30 seconds minimum
3. **Student questions > my lecture** — always
4. **Flipped is harder than lecture** — AI is my safety net
5. **First cohort is practice** — perfection is for cohort 5

---

## Emergency Prompt

If class is completely falling apart:

```
HELP. Class is falling apart.
Context: Day [N], topic [TOPIC], 8 students.
Specific problem: [DESCRIPTION]

I have [X] minutes left.

Give me:
1. 30-second emotional reset for myself
2. 1 activity to pivot to that salvages the remaining time
3. 1 honest thing to say to the class
```

AI will never judge. Always available. Always helpful.

**You are not alone.**
