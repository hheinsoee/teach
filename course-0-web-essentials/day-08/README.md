# Day 8 — Capstone: Showcase + Real Users + What's Next

**Project**: Both apps presented
**Marcus stages**: 7 (Real Users + Growth)
**Modules touched**: F (final AI skills), E (user feedback), K (taste only)
**Duration**: 90 min class + 1 week post-course homework

---

## Learning outcomes

Students can:
- **Present** both their apps in 3 minutes each
- **Reflect** on what they learned across 4 weeks
- **Preview** what Course 1+ holds
- **Know** where to go next

---

## 90-minute plan

| Block | Minutes | Activity |
|---|---|---|
| Homework review | 15 | Celebrate deployed News Apps |
| Student showcase | 30 | Each student presents BOTH apps (3 min each in short cohort; adjust by size) |
| "Taste of what's next" | 20 | Instructor shows frameworks (React), AI agents (Cursor), backends briefly |
| What's next & Course 1 preview | 15 | Resources, learning channels, Course 1 syllabus overview |
| Close + certificate | 10 | Group photo, URLs sheet, Burmese resources list |

---

## Student showcase (30 min)

Each student:
- Shows their Habit Tracker live URL (1 min)
- Shows their News App live URL (1 min)
- Says one thing they're proud of + one thing they'd change (1 min)

**Instructor keeps time strictly.** 3 min per student × cohort size.

**Audience** = other students. No pass/fail judging; this is celebration.

**Group chat capture**: all URLs posted in one message. Students take screenshots.

### Scaling note

- 5 students → 15 min, fits easily
- 10 students → 30 min, fills the slot
- 15+ students → runs over; split into 2 groups, do showcase in parallel breakouts, then regroup

---

## "Taste of what's next" (20 min)

Instructor demos (shows, doesn't teach):

### 1. React / Framework taste (5 min)

Open a React playground or codesandbox with a simple component:

```jsx
function HabitTracker({ habits }) {
  return (
    <ul>
      {habits.map(h => <li key={h}>{h}</li>)}
    </ul>
  );
}
```

Explain:
> *"ဒါ React — JavaScript framework။ Component ဆိုတဲ့ reusable piece တွေ ဆောက်။*
>
> *ဘာလို့ သုံးလဲ? App ကြီးလာလာ ဆိုရင် — plain HTML/CSS/JS က မြင်းနိုင်တော့ဘူး။ React လိုမျိုး framework က scale လုပ်ပေး။"*

### 2. Agentic AI tools (10 min)

Open **Cursor** (or v0.dev or Lovable). Prompt:

```
Build me a complete expense tracker web app with database, auth, and deploy
```

Watch AI generate everything. Discuss:
- Pros: fast, impressive
- Cons: code is generated for you — you need Course 1 skills to understand/fix

> *"ဒါ **agentic AI** — AI က developer အစား ကုဒ်ရေး, decide လုပ်, deploy လုပ်။ ဒါပေမဲ့ — ဒီ app break ဖြစ်ရင် ဘယ်သူ fix လုပ်မလဲ? **ကိုယ်**။ Course 1 မှ ဒါ သင်မယ်။"*

### 3. Backend taste (5 min)

Open a simple Express.js server code:

```javascript
app.get('/habits', (req, res) => {
  res.json({ habits: ['pray', 'exercise'] });
});
```

Explain:
> *"ဒါ **backend** — server-side code။ API တွေ ကိုယ့်ဖာသာ ဆောက်။ ကိုယ့် database နဲ့ ဆက်။ Multi-user app ဆောက်။"*
>
> *"Hein's News API က ဒီအတိုင်း ဆောက်ထား။ Course 1 မှ ဒါကို ကိုယ့်ဖာသာ ဆောက်တတ်မယ်။"*

---

## What's next (15 min)

### Course 1 Preview

Hand out or show the Course 1 syllabus overview:
- 12 days
- Reading code → directing AI → verifying
- Build a full-stack app
- Node.js + Express + SQLite + Auth
- 4 completion markers

### Burmese learning resources

List to share with students:

- YouTube channels (Burmese dev content, if any)
- MDN Web Docs (English, but authoritative)
- freeCodeCamp (free, English)
- The Odin Project (free, English)
- Discord/Telegram community (if any)

### Keep building

> *"ဒီ course ပြီးရင် — Course 1 မလာခင် ဘာလုပ်မလဲ?*
>
> *၁။ ကိုယ့် Habit Tracker + News App ကို ထပ်မြင့်မား။ Features ထည့်။*
>
> *၂။ သုံးစွဲသူ ပိုရှာ။ Feedback ယူ။*
>
> *၃။ MDN ကို ကိုယ့်ဖာသာ ဖတ်။ YouTube videos များများ ကြည့်။*
>
> *၄။ မေ့မသွားအောင် — တစ်ပတ်မှာ app တစ်ခု ဆောက်။ Habit tracker, timer, calculator — ဘာမဆို။*"*

---

## Close + certificate (10 min)

### Group photo

Everyone + their URLs on a shared screen.

### Shared URLs sheet

A Google Doc / Classroom post with:
- Every student's name
- Every student's Habit Tracker URL
- Every student's News App URL

Each student will have this list to share with pride.

### Certificate (optional)

If theBuilderPros provides certificates:
> *"[Student Name] has completed Course 0 — Web Essentials, demonstrating the ability to read code, direct AI to generate it, and deploy two web applications to the internet."*

Honest language. Don't inflate.

---

## Post-course homework (1 week)

See [`homework.md`](homework.md).

Students have 1 week after Day 8 to:
- Share both apps with 5+ real people
- Collect feedback
- Pick one app and iterate
- Submit final write-up

**This is the real test of inspiration.** Did it stick? Do they keep going when the course ends?

---

## Common failures

| Failure | Fix |
|---|---|
| Student didn't deploy News App | Help them during the 15-min homework review window |
| Students run over 3 min in showcase | Keep time strictly; use a timer |
| Student presentation nervous / shy | Encourage: "it doesn't need to be perfect — just show it" |
| Instructor tempted to explain React in depth | Resist. "Taste" only. Course 1 is for depth. |

---

## What this day is NOT

- Not a React tutorial
- Not a framework comparison
- Not a backend lesson
- Not an AI agent masterclass

Keep tight: showcase → taste → what's next → goodbye.
