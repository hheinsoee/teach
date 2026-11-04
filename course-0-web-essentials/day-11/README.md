# Day 11 — Polish + Real Users

**Phase**: ⭐ Capstone 2 (Day 3 of 4)
**Project**: News App
**Modules touched**: F (AI), user feedback
**Duration**: 90 min + 3 hr HW

---

## Learning outcomes

- **Read**: your own code to understand what it does
- **Understand**: real users do unexpected things
- **Direct**: AI to fix what users report
- **Verify**: fixes actually solve the problem

---

## 90-min plan

| Block | Min | Activity |
|---|---|---|
| HW review | 10 | Students show mobile fixes |
| Concept: "Real users surprise you" | 10 | Why test with people |
| Instructor demo | 15 | Share a URL, watch real reactions |
| Student build | 40 | Self-read code + share with 3 real users |
| Label + commit | 15 | User feedback, iteration |

---

## Concept (10 min)

### "Real users surprise you"

ကိုယ့်ကိုယ်တိုင် test လုပ်တဲ့အခါ — ကိုယ်သိတဲ့အတိုင်း သုံး။ **"Happy path"** ပဲ စမ်း။

Real user —
- Tap places ကိုယ် မထင်
- Confused words
- "This button doesn't work" — ဘယ် button လဲ?
- Phone holds differently

**ဒါ UX feedback** — code သုတေသနမဟုတ်, actual usage information။

### Also: read your own code

Day 1-10 အကုန် AI က code ထုတ်ပေးခဲ့။ ကိုယ့်ကိုယ်တိုင် ဖတ်ဖို့ သိပ်မလိုခဲ့။

အခု — **ကိုယ့် News App script.js ကို အကုန် ဖတ်။**
- Section တစ်ခုချင်း ဘာလုပ်လဲ?
- ဘယ်ဟာ မရှင်းလဲ?
- Modify လိုက်ရင် ဘာဖြစ်မလဲ ထင်ထား?

**ဒါ understanding** — Course 1 မှာ "code review" ဆိုတဲ့ formal skill သင်မယ်။ ဒီနေ့ — ကိုယ့်ကိုယ်ကိုယ် familiarize ပဲ။

---

## Instructor demo (15 min)

Instructor ဖုန်း မှာ ကိုယ့် News App ဖွင့်။ Students watch screen share from phone.

Walk through:
- *"ကိုယ့်ဖာသာ သုံးရင် — သိပ်ပြေပြစ်ပဲ။ ဒါပေမဲ့ real user က..."*
- Give phone to a student (OR teacher plays "naive user")
- Watch them use it
- Notice pauses, confused taps, questions
- Discuss: "what did they expect that didn't happen?"

> *"ဒါ UX feedback ပဲ။ Developer က visible ဖြစ်တဲ့ ပြဿနာကို fix လုပ်တယ်။"*

---

## Student build (40 min)

### Part A — Self-read code (15 min)

Each student opens `script.js`. Reads top to bottom.

Prompt AI:
```
Explain this code section-by-section in simple English:

[PASTE YOUR script.js]

I want to understand what each part does, not critique it.
```

Note sections you don't understand. Ask AI follow-ups.

### Part B — Share with 3 real users (25 min)

Each student:
- Sends News App URL to **3 real people** (friends, family, NOT this cohort)
- Message template:
  > *"Hey! I built a News App — can you try it on your phone and tell me what you think? Just 2 min."*
- Record responses (screenshots)

Pay attention to:
- Did they understand what it does?
- What was confusing?
- Would they use it again?

---

## Label (15 min)

Write:
1. What is **UX feedback**?
2. Why real users > self-testing?
3. What section of your code do you understand best?
4. What section is still unclear?
5. Most surprising user reaction?

---

## Common failures

| Failure | Fix |
|---|---|
| Users don't respond | Keep asking, lower barrier ("just screenshot") |
| User says "looks good" without using | Push: "what did you actually try?" |
| Student scared to share | 2 friends OK, no need for 3 |
| Student confused by own code | Spend more time on Part A |

---

## NOT

- Formal code review (Course 1)
- Testing frameworks (Course 1)
- Bug tracking systems (Course 1+)
- User research methodology (separate domain)

Keep tight: read your code + ask real humans.
