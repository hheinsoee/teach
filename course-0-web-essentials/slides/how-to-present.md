# How to Present Slides — For Hein

**Framework**: Reveal.js (CDN, zero install)
**Source**: `day-NN/slides.md` (markdown — easy to edit)
**Viewer**: `slides/viewer.html` (ONE viewer for all days)
**Index**: `slides/index.html` (landing page with all day links)

---

## Quickest way to present

### Step 1 — Start local server (one terminal command)

```bash
cd course-0-web-essentials
python3 -m http.server 8000
```

(Python 3 built-in to Mac. Windows: `python -m http.server 8000`)

### Step 2 — Open browser to landing page

```
http://localhost:8000/slides/
```

Click any day (e.g., "Day 3 — JS Variables").

### Step 3 — Present

Slides appear in Reveal.js. Press `F` for fullscreen.

---

## Directly load a specific day

Skip the index and go straight to a day:

```
http://localhost:8000/slides/viewer.html?day=03
```

`?day=03` loads `../day-03/slides.md`.

---

## Controls (Reveal.js built-in)

- **Arrow keys** `→` `←` for next/prev
- **Space** for next
- **Esc** for slide overview (all slides at once)
- **S** for speaker notes window (separate window)
- **F** for fullscreen
- **?** for all shortcuts
- **Click `?print-pdf`** in URL → Print → PDF export

Progress bar at bottom. Slide counter bottom-right.

---

## Structure

```
course-0-web-essentials/
├── slides/
│   ├── viewer.html          ← ONE generic Reveal.js viewer
│   ├── index.html           ← Landing page with all day links
│   └── how-to-present.md    ← this file
├── day-03/
│   └── slides.md            ← Markdown content (only Day 3 so far)
├── day-04/
│   └── (no slides.md yet)
└── ...
```

**One viewer serves all days.** No duplicated HTML per day.

---

## Why a local server?

Modern browsers block `fetch()` from `file://` for security (CORS). Reveal.js fetches `slides.md`, so we need HTTP.

**`python3 -m http.server`** = simplest option. Built into Mac + most Linux. Windows has it too.

One command. No install.

---

## Editing slides between classes

Edit `day-NN/slides.md` in any text editor (TextEdit, Notepad, Marpit, VSCode — your choice).

**Reload browser** to see changes.

### Slide separator

```markdown
# Slide 1
Content

---

# Slide 2
More content

---

# Slide 3
End
```

Each `---` on its own line = new slide.

### Vertical slides (sub-slides)

For nested slides (↓ navigation):

```markdown
# Main slide

--

## Sub-slide 1

--

## Sub-slide 2

---

# Next main slide
```

### Speaker notes

```markdown
# Slide content

Note: These notes only show in speaker view (press S).
```

### Code blocks

```javascript
let count = 0
console.log(count)
```

### Burmese text

Works natively. Theme uses Padauk / Myanmar Text / Noto Sans Myanmar fallback.

---

## Add slides for a new day

1. Create `day-NN/slides.md` (follow Day 3 as template)
2. Write markdown with `---` separators
3. Edit `slides/index.html` → find `days` array → mark `ready: true` for your day
4. Open `http://localhost:8000/slides/viewer.html?day=NN`

---

## For classroom projector

1. Connect laptop to projector
2. Open browser to `http://localhost:8000/slides/viewer.html?day=03`
3. Drag browser window to projector screen
4. Press `F` (fullscreen)
5. Teach from laptop (keyboard controls slides on projector)

### Speaker view

Press `S` on laptop → opens new window with:
- Current slide
- Next slide preview
- Speaker notes
- Elapsed time

Put speaker window on laptop, main slides on projector.

---

## Export to PDF

Add `?print-pdf` to URL:
```
http://localhost:8000/slides/viewer.html?day=03&print-pdf
```

Browser → Print → Save as PDF.

Each slide = one page.

---

## For recording

1. Start server + fullscreen browser
2. Start OBS Studio / QuickTime / any screen recorder
3. Record the browser window
4. Students see clean slides (no VSCode, no file explorer)

---

## Theme customization

Edit the `<style>` block in `slides/viewer.html`:

```css
:root {
    --r-background-color: #0b0d12;
    --r-heading-color: #ffd166;
}
```

Reload browser.

### Switch Reveal.js base theme

Change `theme/black.css` to:

- `theme/white.css` — light
- `theme/beige.css` — warm
- `theme/night.css` — dark blue
- `theme/moon.css` — dark olive
- `theme/dracula.css` — purple dark
- `theme/simple.css` — minimal

Edit `viewer.html`:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/dist/theme/THEME.css" id="theme">
```

---

## Troubleshooting

### "Failed to load slides" error
- You opened via `file://` (double-click)
- Fix: use `python3 -m http.server`

### "Slides not loaded" with day list
- URL missing `?day=NN` — click a day from `slides/index.html`

### Blank slides
- Hard refresh: `Cmd+Shift+R`
- Check browser console (F12) for errors
- Check `day-NN/slides.md` exists

### Burmese text as boxes (□□□)
- Install "Padauk" from fonts.google.com
- Or use "Noto Sans Myanmar" (built into most OS)

### `python3` not found
- Try `python -m http.server 8000`
- Install from python.org (free, 5 min)

---

## Quick reference

**Start server**: `cd course-0-web-essentials && python3 -m http.server 8000`
**Landing**: `http://localhost:8000/slides/`
**Direct day**: `http://localhost:8000/slides/viewer.html?day=03`
**Navigation**: `→` `←` `Space` `Esc`
**Fullscreen**: `F`
**Speaker notes**: `S`
**All shortcuts**: `?`
**Edit**: open `day-NN/slides.md` in any editor, reload browser

---

## Mindset

- **Slides = anchor**, not script
- **1 idea per slide** — split if cramped
- **Less text, more visuals**
- **Students' questions > slide completion**
- **Skip ahead** (Esc + click target slide) if class finishes a section fast

---

## Status

- ✅ `slides/viewer.html` — generic viewer
- ✅ `slides/index.html` — landing page
- ✅ `day-03/slides.md` — first slide deck
- ⏳ Days 4-12 — `slides.md` not yet created (extend as flipped teaching stabilizes)
