# Day 12 — 🎓 Showcase + What's Next

> **v5 flipped format**: This day uses 5 files: `prework.md` (Viber 2 days before) + `self-study.md` (night before) + `README.md` (this file) + `in-class.md` (student in-class guide) + `homework.md` (post-class).
>
> **Class structure (90 min)**: Q&A 25min + Discussion 15min + Live Build 25min + Label 10min + Wrap 15min. Teacher ~30% active, student ~70% active.
>
> **The 90-min plan table below is legacy v4 traditional**. See `../instructor/teaching-guide.md` for flipped guidance.


**Phase**: ⭐ Capstone 2 (Day 4 of 4) — FINAL DAY
**Project**: Showcase + wrap-up
**Modules touched**: K (taste), I/J (retrospective)
**Duration**: 90 min + post-course homework

---

## Learning outcomes

- **Present** News App in 3 min
- **Reflect** on 6-week journey
- **Preview** what Course 1+ holds
- **Understand** what Git/CI-CD did all along

---

## 90-min plan

| Block | Min | Activity |
|---|---|---|
| HW review | 5 | Final URL check |
| Student showcase | 30 | Each presents News App (3 min) |
| "What was Git doing?" retrospective | 10 | The behind-the-scenes tour |
| "Taste of what's next" | 25 | Vite, TypeScript, Next.js, backend demos |
| Course 1 preview | 10 | What's next if interested |
| Close + certificate | 10 | Group photo, URLs sheet |

---

## Student showcase (30 min)

Each student (3 min):
1. Open News App URL on screen
2. Scroll articles, use search, show features
3. Say:
   - What it does
   - Favorite React component
   - User feedback highlight
   - What they'd add next

Instructor keeps time strictly.

**Audience** = other students. Clap for every presentation.

### Scaling

- 5 students → 15 min, easy
- 10 students → 30 min, fills slot
- 15+ students → 45 min, cut other sections

---

## "What was Git doing?" retrospective (10 min)

> *"ပြီးခဲ့တဲ့ ၆ ပတ်မှာ **commit ၂၀-၃၀ ကြိမ်** လုပ်ခဲ့ပြီ။ `push` လုပ်တိုင်း URL update ဖြစ်။ ဒါ ဘယ်လိုဖြစ်တာလဲ?"*

Whiteboard:

```
Your laptop
     ↓ git push
GitHub (cloud)
     ↓ GitHub Actions
Live URL
```

Explain briefly:
- **Git** = tracks changes
- **GitHub** = online copy
- **GitHub Pages** = turns repo into site
- **CI/CD** = automation on push

> *"ဒါ behind the scenes ပဲ ဖြစ်နေခဲ့တယ်။ Real engineers က ဒီ pipelines ကို ကိုယ့်ဖာသာ configure လုပ်။ Course 1 မှ သေချာ သင်မယ်။"*

---

## "Taste of what's next" (25 min)

### 1. Vite (replaces CDN) — 8 min

Show on screen:

```bash
npm create vite@latest news-app -- --template react
cd news-app
npm install
npm run dev
```

Demo:
- `npm run dev` → `localhost:5173`
- JSX compiled instantly (not by Babel in browser)
- Hot reload — save file → page updates

> *"ဒီ course မှာ React CDN သုံး — **simple, no install**။ Industry က **Vite** သုံး — fast, production-ready။ Course 1 မှ သုံးမယ်။"*

### 2. TypeScript — 5 min

Show:

```tsx
type Article = {
    id: number;
    title: string;
    image: string;
    date: string;
};

function ArticleCard({ article }: { article: Article }) {
    return (
        <div>
            <h2>{article.title}</h2>
        </div>
    );
}
```

> *"**TypeScript** = JavaScript + **types**。 'Article က id, title ရှိရမယ်' လို enforce လုပ်။ Bug များ ကာကွယ်။ Course 1+ မှ သင်မယ်။"*

### 3. Next.js (full framework) — 5 min

Show briefly:
- `pages/` folder = routes
- Server-side rendering
- API routes in same project

> *"**Next.js** = React ပေါ်မှာ ထည့်တဲ့ framework — pages, routing, backend တွေ ပါ။ Real-world production app တွေ Next.js နဲ့ ဆောက်။ Course 1-2 territory။"*

### 4. Backend — 7 min

Show simple Express:

```javascript
app.get('/news', (req, res) => {
    res.json({ articles: [...] });
});
```

> *"ဒါ **backend** — Hein's News API ကို ဒီအတိုင်း ဆောက်။ Course 1 မှ ကိုယ့်ဖာသာ ဆောက်တတ်မယ်။"*

---

## Course 1 Preview (10 min)

**Course 1 — AI-Assisted Full-Stack**:
- 12 days × 120 min
- **Real-world professional practice**:
  - Vite + TypeScript
  - Reading other people's code
  - Formal code review
  - Writing tests
  - Full-stack (backend + database + auth)
  - Production deployment
- Hard rubric, oral exam (not optional)
- 5-6 of 10 pass honestly

**Keep building between courses**:
- Pick a new problem each week
- Ship 1 mini-app weekly
- Learn deeper (React, Git, CSS — pick one)

Burmese resources list (if available).

---

## Close + Certificate (10 min)

### Group photo

### Shared URLs sheet

Google Doc:
- Each student's name
- News App URL
- Habit Tracker URL (bonus)

### Certificate language (honest)

> *"[Student Name] has completed Course 0 — Web Essentials, demonstrating the ability to read HTML/CSS/JavaScript/React code, direct AI to generate code, and deploy two web applications to the internet."*

Don't inflate.

---

## Post-course homework (1 week)

See [`homework.md`](homework.md).

---

## Common failures

| Failure | Fix |
|---|---|
| News App broken mid-showcase | 15-min buffer early |
| Student too nervous | 2-min minimum, help with questions |
| Running out of time | Cut "what's next" to 10 min |

---

## The teacher's job today

**Celebrate.** Students built 2 React apps in 6 weeks. That's remarkable.
