# Setup Guide — Course 0 Infrastructure

Everything Hein must prepare before class + what students must set up.

**3 sections**:
1. [Student tool setup](#part-1--student-tool-setup) — accounts students need (send 1 week before Day 1)
2. [Starter repos](#part-2--starter-repos-heins-responsibility) — 2 GitHub templates Hein creates
3. [News API](#part-3--news-api-heins-responsibility) — Day 9 Capstone API

---

## Part 1 — Student Tool Setup


---

## What every student needs

| # | Tool | Why |
|---|---|---|
| 1 | **Chrome** (or Edge/Firefox) | View pages + DevTools |
| 2 | **Gmail account** | Sign in to GitHub, ChatGPT, Claude |
| 3 | **GitHub account** | Day 1+ for clone + push |
| 4 | **GitHub Desktop** | Easiest Git without CLI |
| 5 | **ChatGPT** OR **Claude** | Code generation (every day) |
| 6 | **VS Code** (or any text editor) | Edit HTML/CSS/JS |

---

## Pre-Day-1 message

> Hi — before Course 0 — Web Essentials Day 1, please set up these accounts (20-30 min):
>
> 1. **GitHub** — github.com — Sign in with Google
> 2. **GitHub Desktop** — desktop.github.com — install, sign in
> 3. **ChatGPT** OR **Claude** — chatgpt.com or claude.ai
> 4. **VS Code** — code.visualstudio.com (free editor)
>
> **To bring Day 1**: laptop + charger + phone.

---

## Instructor Day-1 verification (first 10 min)

Walk the room:
- Chrome open?
- GitHub signed in?
- GitHub Desktop signed in?
- ChatGPT/Claude open?

Fix stragglers before continuing.

---

## Common setup problems

| Problem | Fix |
|---|---|
| GitHub asks for 2FA | Skip for now, Pages still works |
| ChatGPT limits | Switch to Claude |
| GitHub Desktop sign-in fails | Create Personal Access Token in GitHub settings |
| No laptop | Course requires laptop |

---

## What NOT to install

Course 0 doesn't need:
- Node.js
- Git CLI (GitHub Desktop handles everything)
- Any package manager
- Any framework
- Docker

**Course 1+ territory.**

---

## Account hygiene

- 2 GitHub repos created (habit-tracker + news-app)
- ~30 commits total across 6 weeks
- Free tier limits are generous

---

## Part 2 — Starter Repos (Hein's Responsibility)


**v4 change**: starter now includes React CDN (for Day 6+).

---

## Why starters matter

Day 1 goal = student has live URL in 90 min.

Without starter:
- 60 min lost to Git/GitHub setup

With starter:
- Click "Use template" → clone → Pages enabled → push → live.

---

## Starter 1 — `web-essentials-starter` (Habit Tracker, Days 1-8)

### Location

`github.com/hheinsoee/web-essentials-starter`

Mark as **Template repository** (Settings → check "Template repository").

### Files

```
web-essentials-starter/
├── index.html         ← placeholder HTML + React CDN scripts
├── styles.css         ← empty
├── script.js          ← empty (Days 3-5 vanilla JS)
├── app.jsx            ← empty (Days 6+ React)
├── README.md          ← student instructions
├── .nojekyll          ← tells Pages to skip Jekyll
└── .github/
    └── workflows/
        └── pages.yml  ← auto-deploy
```

### `index.html` (starter content)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Course 0 Project</title>
    <link rel="stylesheet" href="styles.css">

    <!-- React CDN (used from Day 6) -->
    <!-- Comment these out if not using React yet -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <h1>Welcome!</h1>
    <p>Replace this content with what you build on Day 1.</p>

    <!-- Vanilla JS mount point (Days 3-5) -->
    <script src="script.js"></script>

    <!-- React mount point (Day 6+) -->
    <div id="root"></div>
    <script type="text/babel" src="app.jsx"></script>
</body>
</html>
```

**Explanation for Hein**:
- Days 1-5: React scripts loaded but unused. `script.js` runs vanilla JS.
- Day 6: Student replaces vanilla code with React in `app.jsx`. Mounts to `<div id="root">`.
- Both can coexist (though Day 6 pattern: migrate fully to React).

### `styles.css` (empty)

```css
/* Add CSS here (Day 2+) */
```

### `script.js` (empty, for Days 3-5)

```javascript
// Add vanilla JavaScript here (Days 3-5)
```

### `app.jsx` (empty, for Days 6+)

```javascript
// React code goes here (Day 6+)
// Example:
// function App() {
//   return <h1>Hello React</h1>;
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
```

### `.github/workflows/pages.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - id: deployment
        uses: actions/deploy-pages@v4
```

### `README.md` (for forked student repos)

```markdown
# My Habit Tracker

Built in Course 0 — Web Essentials.

Live URL: https://[your-username].github.io/[repo-name]/

## What this is

A daily habit tracker built with HTML, CSS, JavaScript (Days 1-5), then React (Days 6-8) — with AI as my coding partner.

## Files

- `index.html` — structure + React CDN setup
- `styles.css` — look
- `script.js` — vanilla JS (Days 3-5)
- `app.jsx` — React (Days 6+)
```

### Pages setup (after student forks)

- Settings → Pages
- Source: **GitHub Actions**
- Save

Pages workflow runs on next push.

---

## Starter 2 — `news-app-starter` (Capstone 2, Days 9-12)

### Location

`github.com/hheinsoee/news-app-starter`

Mark as **Template repository**.

### Files

Similar structure, but React-focused from the start.

```
news-app-starter/
├── index.html         ← React CDN + news container
├── styles.css         ← card layout starter
├── app.jsx            ← React fetch placeholder
├── README.md
├── .nojekyll
└── .github/
    └── workflows/
        └── pages.yml
```

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>News App</title>
    <link rel="stylesheet" href="styles.css">

    <!-- React CDN -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel" src="app.jsx"></script>
</body>
</html>
```

### `styles.css` (starter card layout)

```css
body {
    font-family: system-ui, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: #fafafa;
}

h1 {
    color: #222;
}

.article-card {
    background: white;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.article-card img {
    max-width: 100%;
    border-radius: 4px;
}
```

### `app.jsx`

```javascript
// Day 9+ — Capstone 2 News App
// API: https://api.heinsoe.com/news.json
//
// Prompt AI on Day 9 to build:
// - App component
// - ArticleCard component
// - fetch articles on mount (useEffect)
// - useState for articles + loading + error
//
// Example starting point:
//
// const { useState, useEffect } = React;
//
// function App() {
//   const [articles, setArticles] = useState(null);
//   useEffect(() => {
//     fetch('https://api.heinsoe.com/news.json')
//       .then(r => r.json())
//       .then(data => setArticles(data));
//   }, []);
//
//   if (!articles) return <p>Loading...</p>;
//   return <div>{articles.map(a => <ArticleCard article={a} />)}</div>;
// }
```

---

## News API — `news.json`

See [`api-setup.md`](api-setup.md) for API spec + sample content.

**Must be live before Day 9.**

---

## Testing before Day 1

- [ ] Starter 1 public, template-enabled
- [ ] Fork test: use template, enable Pages, push → URL loads
- [ ] Pages uses **GitHub Actions** (not legacy Jekyll)
- [ ] Deploy time < 1 min

Testing before Day 6 (React starts):
- [ ] React CDN loads in Chrome (check Network tab)
- [ ] Babel processes JSX (no syntax errors)
- [ ] Test `<script type="text/babel">` runs
- [ ] Fork a starter, write minimal React, see it render

Testing before Day 9:
- [ ] Starter 2 public, template-enabled
- [ ] News API URL loads JSON
- [ ] Fetch from test file works (no CORS)

If any fails, fix before class.

---

## Why CDN approach, not Vite

**Course 0 scope**: no npm, no build, no terminal (except GitHub Desktop for Git).

**CDN approach**:
- ✅ Zero install
- ✅ Same deploy flow (GitHub Pages serves static HTML)
- ✅ Beginner-friendly (open file in browser)
- ❌ Slower first load (Babel compiles in browser)
- ❌ Not production-ready (Course 1+ teaches Vite)

**Trade-off accepted**: simplicity > performance for Course 0.

---

## Part 3 — News API (Hein's Responsibility)


**Must be live before Day 9.**

---

## Why

Students don't build backends in Course 0 (Course 1+ territory). They **consume** an API Hein provides.

---

## Minimum spec

- **Endpoint**: `https://api.heinsoe.com/news.json` (or chosen URL)
- **Method**: GET only
- **Returns**: JSON array of 10-20 articles
- **CORS**: `Access-Control-Allow-Origin: *`
- **No auth**: public, read-only
- **Uptime**: live Days 9-12 + 1 week post-course

---

## JSON schema per article

```json
{
  "id": 1,
  "title": "Myanmar tech scene grows with new coworking space",
  "image": "https://picsum.photos/seed/news1/400/250",
  "body": "Full article text. 2-5 sentences for click-to-expand feature.",
  "date": "2026-11-04",
  "category": "tech"
}
```

Full response:
```json
[
  { "id": 1, ... },
  { "id": 2, ... },
  ...
]
```

### Fields
- `id` — unique int
- `title` — 5-15 words
- `image` — real URL (picsum.photos OK for placeholder)
- `body` — 2-5 sentences
- `date` — `YYYY-MM-DD`
- `category` — one of: `tech`, `sports`, `local`, `business`, `arts`

### Content
- 10-20 articles total
- 4-5 categories, 2-5 articles per category
- Burmese/English titles OK
- Avoid controversy (politics, religious debates)

---

## Hosting (easiest)

### Option 1 — GitHub Pages static JSON

1. Create repo `course-0-news-api`
2. Add `news.json` at root
3. Enable Pages (main branch, root)
4. URL: `https://hheinsoee.github.io/course-0-news-api/news.json`
5. CORS enabled automatically on GitHub Pages

### Option 2 — Custom domain

Point `api.heinsoe.com` → Vercel static deploy.

---

## Sample `news.json` (10 articles starter)

```json
[
  {
    "id": 1,
    "title": "Yangon's first coworking space for beginners opens",
    "image": "https://picsum.photos/seed/news1/400/250",
    "body": "A new coworking space in Yangon opened this week for beginner coders.",
    "date": "2026-11-03",
    "category": "tech"
  },
  {
    "id": 2,
    "title": "Local football team wins regional championship",
    "image": "https://picsum.photos/seed/news2/400/250",
    "body": "The Mandalay football team secured their first regional championship.",
    "date": "2026-11-02",
    "category": "sports"
  },
  {
    "id": 3,
    "title": "Traditional art festival returns to Bagan",
    "image": "https://picsum.photos/seed/news3/400/250",
    "body": "Artists gathered in Bagan for the annual traditional arts festival.",
    "date": "2026-11-01",
    "category": "arts"
  },
  {
    "id": 4,
    "title": "Mobile banking adoption hits record high",
    "image": "https://picsum.photos/seed/news4/400/250",
    "body": "Mobile banking usage in Myanmar increased 40% this year.",
    "date": "2026-10-30",
    "category": "business"
  },
  {
    "id": 5,
    "title": "New AI tool helps Burmese writers",
    "image": "https://picsum.photos/seed/news5/400/250",
    "body": "A local startup released an AI tool trained on Burmese language.",
    "date": "2026-10-29",
    "category": "tech"
  },
  {
    "id": 6,
    "title": "Community garden project reaches 100 participants",
    "image": "https://picsum.photos/seed/news6/400/250",
    "body": "A grassroots community garden initiative in Yangon reached 100 participants.",
    "date": "2026-10-28",
    "category": "local"
  },
  {
    "id": 7,
    "title": "Marathon runners complete 42km charity race",
    "image": "https://picsum.photos/seed/news7/400/250",
    "body": "Over 2,000 runners completed a charity marathon for rural education.",
    "date": "2026-10-27",
    "category": "sports"
  },
  {
    "id": 8,
    "title": "Night market expands to weekdays",
    "image": "https://picsum.photos/seed/news8/400/250",
    "body": "The popular night market in downtown Yangon will operate 7 days a week.",
    "date": "2026-10-26",
    "category": "local"
  },
  {
    "id": 9,
    "title": "Small business loans program expanded",
    "image": "https://picsum.photos/seed/news9/400/250",
    "body": "A government program expanded to include first-time entrepreneurs.",
    "date": "2026-10-25",
    "category": "business"
  },
  {
    "id": 10,
    "title": "Street photography exhibition opens Friday",
    "image": "https://picsum.photos/seed/news10/400/250",
    "body": "An exhibition of street photography from across Southeast Asia opens Friday.",
    "date": "2026-10-24",
    "category": "arts"
  }
]
```

---

## Testing before Day 9

- [ ] Open URL in browser → JSON loads
- [ ] Fetch from test HTML file → no CORS error
- [ ] All images load (click 3-4)
- [ ] At least 10 articles, 4+ categories

---

## Fallback plan

Keep `news.json` as local file for students to use if API breaks mid-class:

> *"API is down today. Download this file, change your fetch URL to `./news.json`"*

Teaches resilience — real apps have fallbacks.

---

## Course 1 integration

In Course 1, students build their OWN version of this API with Express + SQLite. Course 0's API is the simple read-only example they'll later recreate with depth.
