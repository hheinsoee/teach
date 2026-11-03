# Day 12 — 🎓 Showcase + What's Next

**Phase**: ⭐ Capstone 2 (Day 4 of 4) — FINAL DAY
**Project**: Showcase + wrap-up
**Modules touched**: K (taste), I/J (retrospective)
**Duration**: 90 min + post-course homework

---

## Learning outcomes

- **Present** News App in 3 min
- **Reflect** on 6-week journey
- **Preview** what Course 1+ holds
- **Understand** what Git/CI-CD was doing all along

---

## 90-min plan

| Block | Min | Activity |
|---|---|---|
| HW review | 5 | Final check — everyone's URL works |
| Student showcase | 30 | Each student presents News App |
| "What was Git doing?" retrospective | 10 | The behind-the-scenes tour |
| "Taste of what's next" | 25 | React, Cursor, backend demos |
| Course 1 preview | 10 | What's next if interested |
| Close + certificate | 10 | Group photo, URLs sheet |

---

## Student showcase (30 min)

Each student (3 min):
1. Open their News App URL on big screen
2. Scroll articles, use search, show features
3. Say:
   - What it does
   - Favorite feature
   - User feedback highlight
   - What they'd add next

Instructor keeps time strictly.

**Audience** = other students. Clap for every presentation.

### Scaling

- 5 students → 15 min, easy
- 10 students → 30 min, fills slot
- 15+ students → 45+ min, cut other sections or split

---

## "What was Git doing?" retrospective (10 min)

> *"သင်တို့ ပြီးခဲ့တဲ့ ၆ ပတ်မှာ **commit ၂၀-၃၀ ကြိမ်** လုပ်ခဲ့ပြီ။ 'git push' လုပ်တိုင်း URL update ဖြစ်။ ဒါ ဘယ်လိုဖြစ်တာလဲ?"*

Walk through:

```
Your laptop
     ↓ git push
GitHub (cloud copy)
     ↓ GitHub Actions
Live URL (publicly viewable)
```

Explain:
- **Git** = tracks every change you made
- **GitHub** = online copy
- **GitHub Pages** = turns repo into website
- **CI/CD** (Continuous Integration / Continuous Deployment) = automation that deploys on push

> *"ဒါတွေက **behind the scenes** work လုပ်နေခဲ့တယ်။ ကိုယ်တို့က 'push' ပဲလုပ်ရတယ်။ ဒါပေမဲ့ real engineers က ဒီ pipeline တွေကို ကိုယ့်ဖာသာ configure လုပ်ကြတယ်။ ဒါ Course 1+ မှ သေချာ သင်မယ်။"*

---

## "Taste of what's next" (25 min)

### 1. React (10 min)

Open codesandbox / React playground:

```jsx
function NewsCard({ article }) {
  return (
    <div className="card">
      <img src={article.image} />
      <h2>{article.title}</h2>
      <p>{article.date}</p>
    </div>
  )
}

function App({ articles }) {
  return articles.map(a => <NewsCard article={a} />)
}
```

> *"ဒါ React — **component** ဆိုတဲ့ reusable piece တွေ ဆောက်။ Big apps က framework မပါဘဲ မြင်းနိုင်။ ဒါ Course 1 မှ ပြီးပြည့်စုံ သင်မယ်။"*

### 2. Cursor / Agentic AI (10 min)

Open Cursor (or demo video). Prompt:
```
Build me a complete news aggregator with 3 sources, dark mode, filters
```

Watch AI generate entire app.

> *"ဒါ agentic AI — AI က developer အစား code ရေး, decide, deploy။ ဒါပေမဲ့ ဒီ app break ဖြစ်ရင် ဘယ်သူ fix လုပ်မလဲ? **ကိုယ်**။ Course 1 skills ကို သိမှ handle လုပ်နိုင်မယ်။"*

### 3. Backend (5 min)

Show simple Express.js:
```javascript
app.get('/news', (req, res) => {
    res.json({ articles: [...] })
})
```

> *"ဒါ **backend** — Hein's API က ဒီအတိုင်း ဆောက်ထား။ Course 1 မှ ကိုယ့်ဖာသာ ဆောက်တတ်မယ်။"*

---

## Course 1 Preview (10 min)

Hand out syllabus (or show screen):

**Course 1 — AI-Assisted Full-Stack**
- 12 days × 90-120 min
- Reading code AND writing code with AI
- Build a full-stack app (Node.js + Express + SQLite)
- Authentication
- Testing
- 4 completion markers

**Keep building between courses**:
- Pick a new problem each week
- Ship 1 mini-app weekly
- Learn one thing deeper (CSS, JS, Git — pick one)

Burmese resources list (if any available).

---

## Close + Certificate (10 min)

### Group photo

Everyone + screen with URLs list.

### Shared URLs sheet

Google Doc with:
- Each student's name
- Each student's News App URL
- Each student's Habit Tracker URL (bonus)

### Certificate language (honest)

> *"[Student Name] has completed Course 0 — Web Essentials, demonstrating the ability to read HTML/CSS/JavaScript, direct AI to generate code, and deploy two web applications to the internet."*

Don't inflate. Not "a web developer." A **web essentials graduate**.

---

## Post-course homework (1 week)

See [`homework.md`](homework.md).

---

## Common failures

| Failure | Fix |
|---|---|
| Student News App broken mid-showcase | 15-min buffer early; help them push a fix |
| Student too nervous to present | 2-min minimum; teacher helps with Q&A |
| Running out of time | Cut "Taste of what's next" to 10 min |

---

## What this day is NOT

- Not a React tutorial
- Not a framework comparison lecture
- Not backend deep-dive
- Not final exam

Keep tight: celebrate → preview → close.

---

## The teacher's job today

**Celebrate.** You just helped non-programmers build and deploy real web apps in 6 weeks. That's remarkable. Make sure every student feels proud.
