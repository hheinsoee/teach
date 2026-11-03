# Tool Setup — For Students, Before Day 1

Send this list to students at least **1 week before Day 1**. Setup problems kill Day 1 if deferred.

---

## What every student needs

| # | Tool | Why | Where |
|---|---|---|---|
| 1 | **Chrome** (or Edge/Firefox) | View their web pages, DevTools | Pre-installed on most laptops |
| 2 | **Gmail account** | Sign in to GitHub, ChatGPT, Claude | gmail.com |
| 3 | **GitHub account** | Day 5 deploy | github.com — "Sign in with Google" |
| 4 | **ChatGPT** OR **Claude** account | Days 2-8 — generates code | chatgpt.com or claude.ai (free tier OK) |
| 5 | **Text editor** | Edit HTML/CSS/JS files | VS Code (recommended), Notepad, TextEdit |
| 6 | **Git** (CLI) | Day 5 — push to GitHub | git-scm.com |

**Alternative for Day 5**: GitHub Desktop (desktop.github.com) — easier than Git CLI for first-timers.

---

## Pre-Day-1 message to send students

Copy-paste and send 1 week before Day 1:

> Hi — before Day 1 of **Course 0 (Web Essentials)**, please set up these accounts and tools. Takes about 20-30 minutes.
>
> **Accounts (sign in with Gmail everywhere)**:
> 1. **ChatGPT** or **Claude** — chatgpt.com or claude.ai (either works)
> 2. **GitHub** — github.com — "Sign in with Google"
>
> **Software to install**:
> 3. **Chrome** browser — if you don't have it
> 4. **VS Code** — code.visualstudio.com (free text editor)
> 5. **Git** — git-scm.com (click Download, next-next-finish)
>
> If step 5 (Git) seems hard, don't worry — we'll help in class. Install it if you can; if not, come to Day 1 and we'll set up GitHub Desktop instead.
>
> **What to bring to Day 1**:
> - Your laptop + charger
> - Your phone (we'll view your work on it)
> - A notebook or notes app

---

## Instructor verification (first 10 min of Day 1)

Walk the room. Each student opens:
- Chrome → chatgpt.com or claude.ai (logged in?)
- Chrome → github.com (logged in?)
- A text editor (anything works)

**Anyone missing accounts**: create them now. Budget 15 min for this.

**Anyone without Git installed**: 
- Mac — Terminal → `git --version` should show something; if not, install Xcode Command Line Tools
- Windows — install Git from git-scm.com (or defer to Day 5 and use GitHub Desktop)
- Linux — `apt install git` or equivalent

**Day 5 fallback**: have GitHub Desktop URLs ready (desktop.github.com) for students who struggle with Git CLI.

---

## Common setup problems

| Problem | Fix |
|---|---|
| GitHub asks for 2FA setup | Skip to Day 5 for most; GitHub still works without it |
| ChatGPT limits free users | Suggest Claude as alternative, or wait 24 hrs for reset |
| Git ask for Personal Access Token on push | Create PAT in GitHub Settings → Developer settings → Personal Access Tokens → classic → repo scope |
| Terminal unfamiliar | Fall back to GitHub Desktop |
| Student uses mobile instead of laptop | Laptop required — editing files on phone impractical |

---

## What NOT to install

Course 0 students should **not** need:

- Node.js
- npm / yarn / bun
- Any package manager
- Docker
- Databases
- Frameworks (React, Vue, Flutter)

If a student insists on installing these (e.g., they're already a developer), fine — but Course 0 doesn't use them. Course 1+ does.

---

## Account hygiene

Students will:
- Create 2 GitHub repositories (habit-tracker, news-app)
- Push ~10-20 commits total
- Use ChatGPT/Claude ~30-50 times across 4 weeks

All within free tier limits.

**End of course**: no cleanup needed. Repos are their portfolio.
