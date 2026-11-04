# Day 1 — Problem, Idea, HTML & GitHub Starter

**Phase**: Learning (Day 1 of 8)
**Project**: Habit Tracker — practice vehicle
**Marcus stages**: 1-2
**Modules touched**: C (VS Code, GitHub Desktop), G (how web works), H (HTML), I/J (clone + Pages, integrated)
**Duration**: 90 min class + 3 hr homework

---

## Learning outcomes

- **Read**: an HTML file and name 3-5 tags
- **Understand**: that a browser renders HTML as a visible page
- **Direct**: ChatGPT/Claude to generate basic HTML
- **Verify**: generated HTML works in a browser AND is live on the internet

---

## 90-minute plan

| Block | Minutes | Activity |
|---|---|---|
| Welcome + expectations | 10 | Who this course is for; what we ship by Day 12 |
| Concept: "Why do we build?" | 10 | Problem → App; Marcus story brief |
| Setup: Clone starter + GitHub Desktop | 15 | Each student clones Hein's starter, sees Pages URL |
| Instructor demo | 15 | AI generates HTML for Habit Tracker, read line by line |
| Student build | 25 | Students prompt AI, replace index.html, see change on live URL |
| Label + commit + close | 15 | Label HTML terms; `git push`; next class preview |

---

## Pre-class setup (instructor)

**IMPORTANT**: Hein must prepare the starter repo BEFORE Day 1.

See [`instructor/setup-guide.md`](../instructor/setup-guide.md).

Starter repo contents:
- `index.html` with placeholder content
- `styles.css` (empty, ready to fill)
- `script.js` (empty, ready to fill)
- `.github/workflows/pages.yml` (auto-deploy on push)
- `README.md` with student instructions

Students clone this to begin. Pages auto-enabled.

---

## Welcome script (10 min)

> *"ဒီ ၆ ပတ် ပြီးရင် သင့်မှာ News App တစ်ခု — internet ပေါ်မှာ, 3+ real users ရှိ, သင့်ဖာသာ code အကုန်ဖတ်တတ်မယ်။"*
>
> *"ဒီ course က **programmer ဖြစ်ဖို့ မဟုတ်**။ ဒီ course က — AI နဲ့ လက်တွဲပြီး code ဖတ်တတ်, logic နားလည်, bug ဖမ်းတတ်ဖို့။"*
>
> *"ဒီနေ့ — ပထမဆုံး HTML file တစ်ခုကို သင့် browser မှာ ဖွင့်ပြီး, တကယ့် internet ပေါ်မှာ URL တစ်ခု ထွက်လာအောင် လုပ်မယ်။"*

---

## Concept phase (10 min)

Whiteboard:

```
Problem  →  Idea  →  App  →  Users
```

Marcus က **ရေသောက်ဖို့ မေ့** → *"App တစ်ခု ဆောက်မယ်"* → Sip app → family uses.

**Ask students**: "သင့်မှာ ဘယ်လို habit တွေ မမေ့ချင်လဲ?" — Collect 3-4 (ဘုရားရှိခိုး, စာကျက်, exercise, water).

These become the Habit Tracker list.

---

## Setup phase (15 min)

### Step 1: Install GitHub Desktop (if not done)

Give URL: desktop.github.com. 1-click install.

### Step 2: Clone starter repo

- Open GitHub Desktop
- File → Clone Repository → URL
- URL: `https://github.com/hheinsoee/web-essentials-starter.git` (Hein's starter)
- Local path: Desktop

### Step 3: Fork to student's account

Instructor shows: on github.com, student clicks "Use this template" → creates **their own** repo named `habit-tracker` or similar.

**Then re-clone the forked repo locally** (via GitHub Desktop).

### Step 4: Enable Pages

Settings → Pages → Source: `main`, root `/`. Save.

### Step 5: Open live URL

Wait 1 min. Open: `https://USERNAME.github.io/habit-tracker/`.

**It loads.** Placeholder HTML visible.

> *"ကြည့်။ သင့် first live URL ဖြစ်ပြီ။ Internet ပေါ်မှာ ရှိနေပြီ။"*

---

## Instructor demo (15 min)

Open ChatGPT/Claude. Prompt:

```
I'm building a Habit Tracker. Give me HTML with:
- Heading "My Daily Habits"
- Unordered list of 4 habits: Pray, Study, Exercise, Water
- Checkbox next to each habit
- Today's date at the bottom

Keep it simple. No CSS. Just HTML.
```

Read every tag out loud:

> *"`<!DOCTYPE html>` — browser ကို 'ဒါ HTML' လို့ ပြော*
> *`<html>` — စာမျက်နှာ စ*
> *`<body>` — မြင်ရမယ့်အရာအကုန်*
> *`<h1>` — အကြီးဆုံး heading*
> *`<ul>` — bulleted list*
> *`<li>` — list item တစ်ခု*
> *`<input type="checkbox">` — ချက်ဘောက်"*

Copy generated HTML. Paste into `index.html` on laptop. **Save.**

In GitHub Desktop:
- See changed file
- Summary: "add habits HTML"
- Commit to main
- Push origin

Wait 30 sec. Reload live URL. **Habits appear.**

> *"ဒါပဲ — သင့် laptop မှာ ပြင်, GitHub ကို တင်, URL က အလိုအလျောက် update ဖြစ်။"*

---

## Student build (25 min)

Each student:
1. Open AI, prompt (modify for their habits)
2. Replace `index.html` content
3. Save
4. GitHub Desktop: commit → push
5. Reload live URL

**Instructor circulates**:
- Student can't find `index.html` → GitHub Desktop → "Show in Finder"
- Changes not showing live → wait 30 sec, hard refresh (Cmd+Shift+R)
- GitHub Desktop login missing → sign in with Google

---

## Label phase (10 min)

Write (no AI):

1. What is HTML?
2. What is a **tag**?
3. What does `<h1>` do?
4. What does `<input type="checkbox">` do?
5. What did `git push` do?

### Pocket answers

- **HTML** — the language that tells browser what to show
- **Tag** — a word in `<brackets>` marking content
- **`<h1>`** — biggest heading
- **`<input type="checkbox">`** — clickable box
- **`git push`** — upload changes to GitHub (where Pages auto-publishes)

---

## Commit + close (5 min)

Everyone: GitHub Desktop → commit "Day 1 — HTML done" → push.

Preview Day 2: *"မနက်ဖြန် — ဒီ plain page က colorful ဖြစ်မယ်။ CSS ထည့်မယ်။"*

---

## Common failures

| Failure | Fix |
|---|---|
| Student didn't do pre-work (GitHub account) | Create on the spot — 2 min |
| GitHub Desktop confusing | Walk through click-by-click, each student 1-on-1 |
| Fork vs clone confusion | Fork = make your copy on github.com; clone = copy to laptop |
| Pages URL 404 | Settings → Pages: check branch is main, folder is `/` |
| Live URL shows old content | Hard refresh (Cmd+Shift+R); or wait 60 sec |
| AI gives complex HTML with divs | Re-prompt: "simpler, basic tags only" |

---

## What this day is NOT

- Not Git concept lesson (that's Day 12 retrospective)
- Not web history
- Not CSS or JS
- Not deep-dive on tags

Keep tight: clone → prompt → save → push → live URL updates.
