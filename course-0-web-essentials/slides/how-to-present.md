# How to Present Slides — For Hein

**Framework**: Reveal.js (loaded via CDN, no install)
**Source**: `day-NN/slides.md` (pure markdown — easy to edit)
**Viewer**: `day-NN/present.html` (opens slides.md in browser)

---

## Presenting a class

### Step 1 — Start local server (one terminal command)

```bash
cd day-03
python3 -m http.server 8000
```

(Python 3 built-in to Mac. Windows: `python -m http.server 8000`)

### Step 2 — Open browser

```
http://localhost:8000/present.html
```

Slides appear. Press `F` for fullscreen.

### Step 3 — Navigate

- **Arrow keys** `→` `←` for next/prev
- **Space** for next
- **Esc** for slide overview (all slides at once)
- **S** for speaker notes window
- **F** for fullscreen
- **?** for all shortcuts

**Progress bar** at bottom. **Slide number** bottom-right (e.g., "3/15").

---

## Why a local server?

Modern browsers block `fetch()` from `file://` for security (CORS). Since Reveal.js fetches `slides.md`, we need HTTP.

**`python3 -m http.server`** = simplest option, built into Mac + most Linux. Windows has it too.

One command. No install.

---

## Editing slides between classes

Edit `day-NN/slides.md` in any text editor (TextEdit, Notepad, VSCode — your choice).

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

Use fenced code with language:

````markdown
```javascript
let count = 0
console.log(count)
```
````

### Burmese text

Works natively. Theme uses Padauk / Myanmar Text / Noto Sans Myanmar fallback.

---

## Theme customization

Edit the `<style>` block in `present.html`:

```css
:root {
    --r-background-color: #0b0d12;      /* page background */
    --r-heading-color: #ffd166;         /* h1/h2/h3 */
}
```

Reload browser to see changes.

### Pre-built Reveal.js themes

Change `theme/black.css` to another:

- `theme/white.css` — light theme
- `theme/beige.css` — warm beige
- `theme/night.css` — dark blue
- `theme/moon.css` — dark olive
- `theme/solarized.css` — solarized light
- `theme/dracula.css` — purple dark
- `theme/simple.css` — minimal

Replace:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/dist/theme/THEME.css" id="theme">
```

---

## For classroom projector

1. Connect laptop to projector
2. Open browser to `http://localhost:8000/present.html`
3. Drag browser window to projector screen
4. Press `F` (fullscreen)
5. Teach from laptop (keyboard/trackpad controls slides on projector)

### Speaker view

Press `S` on laptop → opens new window with:
- Current slide
- Next slide preview
- Speaker notes
- Elapsed time
- Timer

Put speaker window on laptop, main slides on projector.

---

## Export to PDF

Add `?print-pdf` to URL:
```
http://localhost:8000/present.html?print-pdf
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

## Why Reveal.js (not Marp, not custom HTML)

| Choice | Pros | Cons |
|---|---|---|
| **Reveal.js** ✅ | Mature, feature-rich, speaker notes, PDF export, pure MD source | Needs local server |
| Marp (CLI) | Simple MD | Needs npm install |
| Marp (VSCode) | No install if VSCode | VSCode visible during class ❌ |
| Custom HTML | Zero dependency | Reinventing wheel, no features |
| Google Slides | Rich UI | Requires internet, cloud account |

**Reveal.js = best balance** for Course 0 use case:
- ✅ Pure markdown source
- ✅ Framework-based (don't reinvent)
- ✅ Browser only (no VSCode shown)
- ✅ Zero install (CDN)
- ⚠️ Needs 1 terminal command (python server)

---

## Where slides live

```
course-0-web-essentials/
├── slides/
│   └── how-to-present.md    ← this file
├── day-03/
│   ├── slides.md            ← markdown source (edit this)
│   └── present.html         ← Reveal.js viewer (loads slides.md)
└── ... (future: day-04/slides.md + present.html, etc.)
```

Each day has own `slides.md` + `present.html` pair.

**Why both per day**: `present.html` references `./slides.md` (same folder). Avoids cross-folder paths.

---

## Troubleshooting

### "Failed to load slides.md" error
- You opened via `file://` (double-click)
- Fix: use `python3 -m http.server` as above

### Blank slides
- Hard refresh: `Cmd+Shift+R`
- Check browser console (F12) for errors

### Burmese text as boxes (□□□)
- Install "Padauk" from fonts.google.com
- Or use "Noto Sans Myanmar" (built into most OS)

### Slides too small on projector
- `Cmd +` to zoom browser (text scales)
- Or edit `font-size` in present.html CSS

### Speaker notes don't open
- Pop-up blocker? Allow for localhost
- Press `S` again after allowing

### `python3` not found (Mac)
- Try `python` (older Macs)
- Or install from python.org (free, 5 min)

### `python3` not found (Windows)
- Try `python -m http.server 8000`
- Or install from python.org

---

## Quick reference

**Start server**: `cd day-03 && python3 -m http.server 8000`
**URL**: `http://localhost:8000/present.html`
**Navigation**: `→` `←` `Space` `Esc`
**Fullscreen**: `F`
**Speaker notes**: `S`
**All shortcuts**: `?`
**Edit**: open `slides.md` in any editor, reload browser

---

## Mindset reminders

- **Slides = anchor**, not script
- **1 idea per slide** — split if cramped
- **Less text, more visuals** — use code blocks, tables
- **Skip ahead** (Esc + click target slide) if class finishes a section fast
- **Students' questions > slide completion**

---

## Next steps

- ✅ Day 3 slides ready (`day-03/slides.md` + `present.html`)
- ⏳ Create for Days 4-12 when Day 3 teaching stabilizes
- 💡 First class: test slides with projector before students arrive
