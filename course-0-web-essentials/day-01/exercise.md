# Day 1 — In-Class Exercise

**Goal**: Get your first web page live on the internet. By end of class, you have a URL anyone can open.

---

## Step 1 — Install GitHub Desktop (if not done)

Download: **desktop.github.com**. Install. Sign in with your GitHub account.

---

## Step 2 — Use Hein's starter repo

The teacher will share a GitHub link that looks like:
**`github.com/hheinsoee/web-essentials-starter`**

Click **Use this template** → **Create a new repository**.

- Owner: your username
- Name: `habit-tracker`
- Public
- Click Create.

---

## Step 3 — Clone your new repo to your laptop

Open **GitHub Desktop**:
- File → **Clone Repository**
- Find `YOUR_USERNAME/habit-tracker`
- Choose where to save (Desktop is fine)
- Click Clone

---

## Step 4 — Enable Pages (makes URL live)

On github.com, go to your repo → **Settings** → **Pages**:
- Source: **Deploy from a branch**
- Branch: **main**, folder: **/ (root)**
- Save

Wait 30-60 seconds. Open: **`https://YOUR_USERNAME.github.io/habit-tracker/`**

The placeholder page loads.

---

## Step 5 — Open the folder in a text editor

Open the `habit-tracker` folder on your Desktop. You should see:
- `index.html`
- `styles.css` (empty)
- `script.js` (empty)
- `README.md`

Open `index.html` in a text editor (VS Code, Notepad, TextEdit).

---

## Step 6 — Prompt AI for your HTML

Go to **ChatGPT** or **Claude**. Paste:

```
I'm building a Habit Tracker. Give me HTML with:
- Heading "My Daily Habits"
- Unordered list of 4 habits: [Pray, Study, Exercise, Water]
- Checkbox next to each habit
- Today's date at the bottom

Keep it simple. No CSS. Just HTML.
```

(Change the habits in `[brackets]` to YOUR habits.)

---

## Step 7 — Replace the HTML in your file

Copy the HTML from AI. Open `index.html` in your editor. **Replace everything** between `<body>` and `</body>` with AI's content.

Save the file.

---

## Step 8 — Commit and push

Open GitHub Desktop. You'll see your changes.

- Summary: `Day 1 — add habits HTML`
- Click **Commit to main**
- Click **Push origin**

---

## Step 9 — See your live URL update

Wait 30-60 seconds. Reload your live URL in Chrome.

**Your habits appear.** On the internet. Share-able.

---

## Step 10 — Label (no AI!)

Write in a notes app:

1. What is HTML?
2. What is a **tag**?
3. What does `<h1>` do?
4. What does `<input type="checkbox">` do?
5. What did `git push` do?

---

## Done when

- [ ] You have a `habit-tracker` repo on GitHub
- [ ] You have a live URL ending in `.github.io`
- [ ] Your HTML with YOUR habits is live
- [ ] You can read your HTML and name 3+ tags
- [ ] Label answers written

---

## Rules

1. **Save, commit, push.** Changes don't go live until you push.
2. **If something's wrong**, ask the teacher. Most problems are 2-minute fixes.
3. **Don't delete anything in the starter.** Just change what's in `<body>`.

---

## If you finish early

Try asking AI:
- "How do I add a profile picture?"
- "How do I add a subheading?"
- "How do I add a link?"

Try adding something. Commit, push, see it live.

**Don't worry about design yet.** That's Day 2.
