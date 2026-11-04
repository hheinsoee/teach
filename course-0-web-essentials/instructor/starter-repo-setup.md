# Starter Repo Setup — Hein's Responsibility

Course 0 depends on 2 pre-built template repos students fork from. **Both must be ready before Day 1.**

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
