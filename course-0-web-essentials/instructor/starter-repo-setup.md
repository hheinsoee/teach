# Starter Repo Setup — Hein's Responsibility

Course 0 depends on 2 pre-built template repos students fork from.

**Must be ready before Day 1.**

---

## Why starters matter

Day 1 goal = student has live URL in 90 min. 

Without starter:
- 60 min lost to Git/GitHub setup, CORS issues, Pages config

With starter:
- Student clicks "Use this template" → clones → Pages already enabled → push → live.

---

## Starter 1 — `web-essentials-starter` (for Habit Tracker, Days 1-8)

### Location

Create at: `github.com/hheinsoee/web-essentials-starter`

Mark as **Template repository** (Settings → check "Template repository").

### Files

```
web-essentials-starter/
├── index.html         ← placeholder (students will replace body)
├── styles.css         ← empty
├── script.js          ← empty
├── README.md          ← student instructions
├── .nojekyll          ← tells Pages to not Jekyll-build
└── .github/
    └── workflows/
        └── pages.yml  ← auto-deploy workflow
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
</head>
<body>
    <h1>Welcome!</h1>
    <p>Replace this content with what you build on Day 1.</p>

    <script src="script.js"></script>
</body>
</html>
```

### `styles.css` (empty)

```css
/* Add CSS here (Day 2+) */
```

### `script.js` (empty)

```javascript
// Add JavaScript here (Day 3+)
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

A daily habit tracker built with HTML, CSS, and JavaScript — with AI as my coding partner.

## Files

- `index.html` — structure
- `styles.css` — look
- `script.js` — behavior
```

### Pages setup for fork

After student forks:
- Settings → Pages
- Source: **GitHub Actions**
- Save

Pages workflow runs on next push.

---

## Starter 2 — `news-app-starter` (for Capstone 2, Days 9-12)

### Location

Create at: `github.com/hheinsoee/news-app-starter`

Mark as **Template repository**.

### Same file structure as Starter 1

But with:
- `index.html` with placeholder news container
- `styles.css` with card layout starter
- `script.js` with fetch placeholder comment

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>News App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>News App</h1>
    <div id="news-container">
        <p>Loading...</p>
    </div>

    <script src="script.js"></script>
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
}

#news-container {
    display: grid;
    gap: 20px;
}

.article {
    background: white;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.article img {
    max-width: 100%;
    border-radius: 4px;
}
```

### `script.js`

```javascript
// Add your fetch code here (Day 9+)
// API: https://api.heinsoe.com/news.json
```

---

## News API — `news.json`

See [`api-setup.md`](api-setup.md) for API spec + sample content.

**Must be live before Day 9.**

---

## Testing before Day 1

- [ ] Starter 1 is public, is a template
- [ ] Fork test: use template, enable Pages, push to main → URL loads
- [ ] Pages uses GitHub Actions (not legacy Jekyll)
- [ ] Deploy time < 1 min

Testing before Day 9:
- [ ] Starter 2 is public, is a template
- [ ] News API URL loads JSON
- [ ] Fetch from test file works (no CORS error)

If any fails, fix before class.
