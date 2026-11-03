# Day 5 — In-Class Exercise

**Goal**: Your Habit Tracker goes LIVE on the internet. Get a URL you can share.

---

## Step 1 — Create a GitHub repo

1. Open **github.com**, sign in
2. Click **+** (top right) → **New repository**
3. Repository name: **`habit-tracker`**
4. Public
5. Check "Add a README file"
6. Click **Create repository**

---

## Step 2 — Push your code to GitHub

### Option A — Using Terminal (teacher will walk you through)

Open Terminal (Mac) or Git Bash (Windows). Navigate to your folder:

```bash
cd ~/Desktop/habit-tracker
```

Then run these commands one by one:

```bash
git init
git add .
git commit -m "my first habit tracker"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/habit-tracker.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

If asked for a password: GitHub wants a **Personal Access Token** (teacher will help set this up).

### Option B — Using GitHub Desktop (easier)

1. Download GitHub Desktop from desktop.github.com
2. Sign in with your GitHub account
3. File → **Add Local Repository** → pick your `habit-tracker` folder
4. Click **Publish Repository** → public → **Publish**

---

## Step 3 — Enable GitHub Pages

1. On your GitHub repo page, click **Settings** (top right)
2. Scroll down, click **Pages** in the left sidebar
3. Under "Source", select **Deploy from a branch**
4. Branch: **main**, Folder: **/ (root)**
5. Click **Save**

Wait 30-60 seconds. Refresh the page. You'll see a URL like:

```
https://YOUR_USERNAME.github.io/habit-tracker/
```

---

## Step 4 — Visit your URL

Copy the URL. Open it in a new tab.

**Your Habit Tracker is live.** On the internet. Anyone can access it.

---

## Step 5 — Open on your phone

Send the URL to yourself (WhatsApp, Telegram, email). Open on your phone.

**Add a habit. Check some boxes.** Is localStorage per device or shared?

(Answer: per device. Your phone's checks are separate from your laptop's checks. We'll discuss.)

---

## Step 6 — Share with classmates

Post your URL in the class group chat.

Open 2-3 classmates' URLs. Try their Habit Trackers. See how different everyone's design is.

---

## Step 7 — Make a change, push again

Back on your laptop:
- Add a new habit to `index.html`
- Save

Then push the change:

```bash
git add .
git commit -m "added a new habit"
git push
```

(Or in GitHub Desktop: write commit summary → Commit → Push origin)

Wait 30 seconds. Refresh your live URL. **The new habit appears.**

That's **CI/CD** — Continuous Deployment. You pushed code; GitHub deployed it automatically.

---

## Step 8 — Label (no AI!)

Write:

1. What is **git**?
2. What is a **commit**?
3. What is **GitHub**?
4. What does **GitHub Pages** do?
5. What is **CI/CD**?

---

## Done when

- [ ] Your Habit Tracker has a live URL
- [ ] URL ends in `.github.io`
- [ ] It opens on your phone
- [ ] You made at least 2 commits (not just 1)
- [ ] Your URL is in the class group chat
- [ ] You opened 2 classmates' URLs
- [ ] Label answers written

---

## If you finish early

Share your URL with:
- A family member (parent, sibling)
- A friend outside this class

Ask them to try it. Watch what they do.

---

## Rules

1. **Public repository**. Do not make it private (GitHub Pages free tier requires public).
2. **Commit messages matter**. Write what you changed, not "update".
3. **Push after every change** so your live URL stays in sync.
4. **If something breaks, don't delete the repo**. Ask the teacher. Most problems are 2-minute fixes.
