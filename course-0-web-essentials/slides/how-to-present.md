# How to Present Slides — For Hein

**Zero install (VSCode) or browser-only approaches.**

---

## Setup (one time, 2 min)

### Prerequisites
- VSCode installed (code.visualstudio.com)
- No npm, no pnpm, no Node.js needed

### Install Marp extension

1. Open VSCode
2. Extensions (left sidebar, or `Cmd+Shift+X`)
3. Search "Marp for VS Code"
4. Click Install (publisher: marp-team)

Done. No other setup.

---

## Daily workflow — Present a class

### 1. Open the day's slides

```
File → Open folder → course-0-web-essentials
Click day-03/slides.md
```

### 2. Open preview

Three ways:
- **Right-side preview**: Click "Open Preview to the Side" icon (top-right of editor)
- **Full preview**: `Cmd+Shift+V`
- **Marp specific**: Command palette (`Cmd+Shift+P`) → "Marp: Toggle Marp feature" if preview looks plain

### 3. Go fullscreen for class

- Open Marp preview in a new window
- Press `F11` (fullscreen)
- Or open preview URL in Chrome fullscreen

### 4. Navigate during class

- `→` next slide
- `←` previous slide
- `Home` first slide
- `End` last slide
- `F` fullscreen toggle

---

## Edit slides between classes

Just edit `day-NN/slides.md` in VSCode. Preview updates automatically.

### Slide separator

Each `---` on its own line = new slide:

```markdown
# Slide 1
Content here

---

# Slide 2
More content
```

### Slide classes (custom styling)

In this course's theme, use `<!-- _class: NAME -->` for special slides:

| Class | When to use |
|---|---|
| `<!-- _class: title -->` | Title slide, section opener |
| `<!-- _class: qa -->` | Q&A phase slides |
| `<!-- _class: build -->` | Live build phase slides |
| `<!-- _class: wrap -->` | Wrap / closing slides |

Example:

```markdown
---

<!-- _class: qa -->

# Phase 1 — Q&A

Your questions...
```

### Code blocks

Use fenced code blocks:

````markdown
```javascript
let count = 0
```
````

### Images

```markdown
![Screenshot](../ab/day2/image.png)
```

Keep images in a local folder — paths relative to slides.md.

### Inline HTML

Marp allows HTML — use for custom layouts:

```markdown
<div style="text-align: center;">
Big centered text
</div>
```

---

## Export slides (optional)

### To PDF
1. Right-click `slides.md` in VSCode file explorer
2. "Marp: Export slide deck..."
3. Choose PDF

### To HTML (standalone)
Same but choose HTML. Produces single `.html` file you can:
- Email to students
- Host on GitHub Pages
- Open offline

### To PPTX (PowerPoint)
Same but choose PPTX. If recording with OBS and need PowerPoint-like controls.

---

## Alternative: Browser-only (no VSCode)

If student uses Chromebook or iPad:

1. Go to **https://marp.app/**
2. Paste your `slides.md` content
3. Left side: markdown editor, right side: slide preview
4. Export via menu

**No install, works anywhere.**

---

## Recording classes

### Setup
- Fullscreen Marp preview on primary monitor
- OBS Studio / QuickTime recording
- Optional: webcam overlay for teacher face

### Tips
- Keep slides on main screen
- Browser/terminal on second screen (for AI demos)
- Pause recording between phases to re-center

---

## Theme customization

File: `slides/theme.css`

Change colors, fonts, spacing. Reload preview after save.

Current theme uses:
- Dark background (`#0b0d12`)
- Yellow headings (`#ffd166`)
- Green accents (`#06d6a0`)
- Burmese font: `Padauk`, `Myanmar Text`, `Noto Sans Myanmar`

---

## Troubleshooting

### Preview is blank
- Ensure file starts with `---\nmarp: true\n---`
- Check VSCode status bar for "Marp" indicator (click to enable)

### Theme doesn't apply
- Check `.vscode/settings.json` has `"markdown.marp.themes": ["./slides/theme.css"]`
- Reload window (`Cmd+Shift+P` → "Reload Window")

### Burmese text looks broken
- Install font: "Padauk" from Google Fonts (free)
- Or use "Noto Sans Myanmar" (built into most OS)

### Slides too long
- Each slide should be visible without scrolling
- If text overflows, split to 2 slides
- Reduce `font-size` in theme.css if needed

---

## Where slides live

```
course-0-web-essentials/
├── .vscode/
│   └── settings.json           ← Marp VSCode config (auto-loads theme)
├── slides/
│   ├── theme.css               ← Custom theme (shared across all days)
│   └── how-to-present.md       ← This file
├── day-03/
│   └── slides.md               ← Day 3 slide deck (first one)
└── ... (future: day-04/slides.md, etc.)
```

---

## Mindset reminders

- **Slides = anchor**, not script. Don't read them aloud.
- **1 idea per slide** — if 3 ideas, make 3 slides
- **Less text, more visuals** — code blocks + headings
- **Teach ကို slide follow မယ့်အတိုင်း မဟုတ်** — students' questions က priority

---

## Next steps

- Day 3 slides done (`day-03/slides.md`)
- Extend to Day 4-12 as flipped teaching stabilizes
- Share with students after each class (export HTML, paste link in Viber)
