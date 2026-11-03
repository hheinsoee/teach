# Day 5 — Git, GitHub & Deploy

**Project**: Habit Tracker — final day, goes live
**Marcus stages**: 6 (Package, Deploy, Distribute — web)
**Modules touched**: I (Git), J (CI/CD), D (terminal)
**Duration**: 90 min class + 3 hr homework

---

## Learning outcomes

Students can:
- **Read**: a git log (sees commit history)
- **Understand**: that code lives on their laptop AND on GitHub AND on the live URL
- **Direct**: themselves through git add → commit → push → GitHub Pages auto-deploy
- **Verify**: the live URL loads on their phone

---

## 90-minute plan

| Block | Minutes | Activity |
|---|---|---|
| Homework review | 15 | Students show new features |
| Concept: "Where does your code live?" | 10 | Laptop → GitHub → Live URL |
| Demo | 20 | Instructor pushes Habit Tracker to GitHub, sees Pages auto-deploy |
| Student build | 35 | Each student does the same for their Habit Tracker |
| Label | 10 | Git? Commit? Push? CI/CD? |

---

## Pre-class setup (instructor)

- **All students must have a GitHub account** (pre-work from Day 0)
- Instructor has a sample repo for demo (e.g., `hheinsoee/habit-tracker-demo`)
- Browser has GitHub tab, VS Code or GitHub Desktop open
- Students know their GitHub username (write on a sticker)

---

## Concept phase (10 min)

Whiteboard:

```
Your laptop (local)
      ↓ git push
GitHub (cloud)
      ↓ GitHub Actions auto-deploys
Live URL (anyone can see)
```

Explain:
- **Git** — a tool that tracks every change you make
- **GitHub** — a website that stores your git repository online
- **GitHub Pages** — turns your repository into a live website for free
- **CI/CD** — "when you push code, something automatic happens" (here: deploy)

Analogy:
- Laptop = your sketchbook
- GitHub = your folder in the cloud
- Live URL = the gallery where people see your work

---

## Instructor demo (20 min)

### Create a repo on GitHub

1. Go to github.com → click "+" → "New repository"
2. Name: `habit-tracker`
3. Public, add README, click Create

### Push code from laptop

Two paths. Pick ONE for the class (depending on comfort):

**Path A — Terminal (recommended, teaches Module D)**

```bash
cd ~/Desktop/habit-tracker
git init
git add .
git commit -m "my first commit"
git branch -M main
git remote add origin https://github.com/USERNAME/habit-tracker.git
git push -u origin main
```

Instructor types each command, explains:
- `git init` — "start tracking this folder"
- `git add .` — "stage all changes for the next commit"
- `git commit -m "..."` — "save a snapshot with this message"
- `git push` — "upload to GitHub"

**Path B — GitHub Desktop (easier for first-timers)**

- Open GitHub Desktop, "Add Existing Repository" → pick `habit-tracker` folder
- Publish Repository → public → publish
- (All future commits done via GUI)

### Turn on GitHub Pages

- GitHub repo → Settings → Pages
- Source: Deploy from branch
- Branch: `main`, folder: `/ (root)`
- Save

Wait 30-60 seconds. Click the URL. **Live.**

### Show auto-deploy

Change `index.html` on laptop (e.g., add a heading). Commit, push. Wait 30 seconds. Refresh live URL. **Change appears.**

> *"ကြည့်။ ကိုယ့် laptop မှာ ပြင်, GitHub ကို တင်, URL က အလိုအလျောက် update ဖြစ်။"*

---

## Student build (35 min)

Each student:
1. Create GitHub repo `habit-tracker`
2. Push their local `habit-tracker/` folder
3. Enable GitHub Pages
4. Get their URL (`USERNAME.github.io/habit-tracker/`)
5. Open on their phone
6. Share URL in class group chat

**Instructor circulates heavily**. This is the day with the most friction:
- Terminal unfamiliar → walk through each command
- Git asks for auth → setup credential helper, or use HTTPS token
- Pages URL 404s → wait 2 minutes, check Settings → Pages status
- `git push` rejected → set origin correctly
- `.html` file at wrong path → check root of repo

**Have a fallback**: if a student can't push via terminal, use GitHub web UI to drag-drop their files.

---

## Label phase (10 min)

Write (no AI):

1. What is **git**?
2. What is a **commit**?
3. What is **GitHub**?
4. What does **GitHub Pages** do?
5. What is **CI/CD** in your own words?

### Pocket answers

- **Git** — a tool that saves snapshots of your code
- **Commit** — one snapshot with a message describing what changed
- **GitHub** — a website that stores git repositories in the cloud
- **GitHub Pages** — turns a repository into a live website
- **CI/CD** — when you upload code, something runs automatically (tests, deploys, etc.)

---

## Common failures

| Failure | Fix |
|---|---|
| GitHub auth fails via terminal | Use GitHub Desktop or create a Personal Access Token |
| Pages URL 404s | Check Settings → Pages → status; wait 2 min; check branch/folder settings |
| Student pushed to `master` not `main` | GitHub uses `main` by default; `git branch -M main` renames |
| Student committed node_modules or large files | Not an issue for Course 0 (no node_modules), but mention `.gitignore` exists |
| Local change doesn't appear live | Didn't push; or Pages taking a while — refresh after 1 min |

---

## Celebration moment

**Every student's URL goes in the class group chat.** Each student opens 2-3 classmates' URLs on their phone. Takes 5 minutes but creates the "we all shipped" feeling.

---

## What this day is NOT

- Not a Git deep-dive (branches, merge, rebase — Course 1)
- Not GitHub Actions custom workflows (Course 2)
- Not DNS, custom domains (Course 2)
- Not GitHub Flow or team collaboration (Course 1)

Keep tight: code on laptop → GitHub → live URL. Three places, one flow.
