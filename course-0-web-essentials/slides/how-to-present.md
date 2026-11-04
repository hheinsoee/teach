# How to Present Slides — For Hein

**Framework**: [Slidev](https://sli.dev/) (same as `digital-literacy-slides` project)
**Source**: `day-NN/in-class.md` (markdown + Slidev frontmatter)

---

## Setup (one time)

```bash
cd course-0-web-essentials
pnpm install
```

Downloads Slidev + themes. Takes ~30 seconds.

---

## Present a day

```bash
pnpm day3     # opens Day 3 slides in browser
pnpm day4     # Day 4
# ...
pnpm day12    # Day 12
```

Opens http://localhost:3030/ automatically. Press `F` for fullscreen.

### Alternative — manual slidev command

```bash
pnpm slidev day-03/in-class.md --open
```

---

## Controls (Slidev built-in)

- `→` `Space` — next slide
- `←` — previous slide
- `F` — fullscreen
- `O` — overview (grid of all slides)
- `P` — presenter mode (notes + timer + next preview)
- `D` — drawing mode (annotate on slide)
- `G` — go to slide number
- `?` — show all shortcuts

**Progress bar** + **slide counter** built in.

---

## Presenter mode (press `P`)

Opens new window with:
- Current slide
- **Next slide preview**
- **Speaker notes** (your `<!-- -->` comments)
- **Timer** (elapsed class time)
- **Click counter** (for animated slides)

Put presenter window on laptop, main slides on projector.

---

## Editing slides

Edit `day-NN/in-class.md` in any text editor. **Save → browser auto-reloads** (hot reload).

### Slide format

Each `---` with frontmatter = new slide:

```markdown
---
layout: center
background: '#1e1a2e'
---

# Slide title

Content here

<!--
Speaker notes (not shown in slides)
-->
```

### Layouts

- `default` — standard
- `center` — centered content
- `cover` — title slide
- `two-cols` — 2-column layout
- `image-right`, `image-left` — image + text
- `quote` — big quote
- `end` — closing slide

### Speaker notes

```markdown
# Slide content

<!--
These notes show in presenter mode (press P).
မြန်မာနဲ့လည်း ရေးလို့ရတယ်။
-->
```

### Code with highlighting

````markdown
```javascript
let count = 0
console.log(count)
```
````

### Interactive animations

```markdown
<div v-click>Shows on first click</div>
<div v-click>Shows on second click</div>
```

### Burmese text

Works natively with `theme: seriph` or default theme. Font fallbacks to Myanmar Text / Noto Sans Myanmar.

---

## Export to PDF

```bash
pnpm export:day3
```

Creates `day-03/in-class-export.pdf`.

---

## Build static site (optional)

For sharing with students after class:

```bash
pnpm build:day3
```

Creates `dist/` folder — upload to GitHub Pages or any static host.

---

## For classroom projector

1. Connect laptop to projector
2. Run `pnpm day3` (opens http://localhost:3030/)
3. Drag browser to projector screen
4. Press `F` for fullscreen on projector
5. Press `P` on laptop to open presenter mode
6. Teach from laptop (keyboard controls slides on projector)

---

## For recording

1. `pnpm day3` to start slides
2. Fullscreen on main screen
3. Start OBS Studio / QuickTime recording
4. Record browser window
5. Clean slides (no editor, no file explorer)

---

## Troubleshooting

### `pnpm not found`
Install pnpm: https://pnpm.io/installation

Or use npm instead: `npm install && npx slidev day-03/in-class.md --open`

### Slides don't load
- Check terminal for errors
- Ensure `in-class.md` has proper Slidev frontmatter
- Hard refresh browser: `Cmd+Shift+R`

### Burmese text boxes (□□□)
- Install "Padauk" from fonts.google.com
- Or "Noto Sans Myanmar" (built into most OS)

### Port 3030 already in use
Kill old server: `lsof -ti:3030 | xargs kill`

Or change port: `pnpm slidev day-03/in-class.md --port 3031`

---

## Status

- ✅ `package.json` — Slidev setup
- ✅ `day-03/in-class.md` — first Slidev deck
- ⏳ Days 4-12 — Slidev `in-class.md` not yet created (extend as flipped teaching stabilizes)

---

## Why Slidev (not Reveal.js, not Marp)

Hein pointed to `/Users/heinsoe/Desktop/sarshay/digital-literacy-slides` which uses Slidev.

**Slidev advantages**:
- ✅ Same tool across Hein's projects (consistency)
- ✅ Hot reload (edit → save → see instantly)
- ✅ Rich theming (seriph, default, plus npm themes)
- ✅ Vue components inline for interactivity
- ✅ Built-in presenter mode (notes + timer + preview)
- ✅ Drawing/annotation on slides
- ✅ Icon support (iconify built in)
- ✅ Better syntax highlighting (Shiki)
- ⚠️ Requires `pnpm install` (acceptable — same as digital-literacy-slides)

---

## Quick reference

```bash
# Setup once
cd course-0-web-essentials && pnpm install

# Present
pnpm day3

# Edit
# Open day-03/in-class.md in any text editor
# Save → browser reloads

# Fullscreen: F
# Presenter mode: P
# Draw: D
# Export PDF: pnpm export:day3
```

---

## Mindset

- **Slides = anchor**, not script
- **1 idea per slide**
- **Less text, more visuals** (use Vue components for interactivity)
- **Students' questions > slide completion**
- **Presenter mode is your friend** (notes, timer, next-slide preview)
