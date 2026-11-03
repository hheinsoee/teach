# Day 2 — CSS Styling

**Project**: Habit Tracker (continuing)
**Marcus stages**: 2 (First App)
**Modules touched**: H (CSS depth), F (AI for styling)
**Duration**: 90 min class + 3 hr homework

---

## Learning outcomes

Students can:
- **Read**: a CSS file and name 5+ properties
- **Understand**: that CSS is separate from HTML and controls look only
- **Direct**: AI to generate CSS matching a style description
- **Verify**: changes appear in the browser after refresh

---

## 90-minute plan

| Block | Minutes | Activity |
|---|---|---|
| Homework review | 15 | 2-3 students show modified pages |
| Concept: HTML = structure, CSS = look | 10 | Analogy: HTML is the body, CSS is the clothes |
| Instructor demo | 15 | Prompt AI for styling, create `styles.css`, link to HTML |
| Student build | 40 | Each student styles their Habit Tracker via AI |
| Label | 10 | What is CSS? Selector? Property? Value? |

---

## Concept phase (10 min)

Draw on whiteboard:

```
HTML  →  Structure  (what's on the page)
CSS   →  Style      (how it looks)
JS    →  Behavior   (what happens when you click — tomorrow)
```

Analogy:
- HTML က **ကိုယ့်ကိုယ်ခန္ဓာ** လိုမျိုး — ကြွက်သား, အရိုး, အင်္ဂါ
- CSS က **အဝတ်အစား** လိုမျိုး — ဘယ်အရောင်, ဘယ်ဆိုက်, ဘယ်လိုတပ်ဆင်လဲ
- JS က **လှုပ်ရှားမှု** (မနက်ဖြန်) — လက်လှုပ်, ပြေး, ပြောင်း

---

## Instructor demo (15 min)

Open the Habit Tracker HTML from Day 1 in Chrome. Looks plain.

Open ChatGPT/Claude. Prompt:

```
I have a Habit Tracker HTML file. Here's the content:

[paste the HTML]

Please create a styles.css file that makes it look:
- Clean and modern
- Dark background, light text
- Big friendly font
- Checkboxes larger than default
- Centered on the page
- Mobile-friendly

Give me the CSS code and tell me how to connect it to my HTML.
```

AI gives:
1. `styles.css` content
2. The `<link rel="stylesheet" href="styles.css">` line to add to HTML

**Instructor reads each CSS rule out loud**:

> *"ဒီ `body { }` က — body tag ကို ပြောင်းမယ်။*
>
> *`background: #1a1a1a;` က — background ကို အနက်။*
>
> *`color: #f5f5f5;` က — စာသား အရောင် အဖြူ။*
>
> *`font-family: system-ui;` က — ဖောင့်မျိုး။*
>
> *`font-size: 1.2rem;` က — ဖောင့်အရွယ်။*"

Save `styles.css` in same folder. Add `<link>` tag to HTML. **Reload browser. Now it's styled.**

---

## Student build (40 min)

Each student:

1. Open AI, use the demo prompt (modified for their habits)
2. Create `styles.css` in their `habit-tracker/` folder
3. Add `<link>` to their HTML
4. Reload — see styled version
5. **Then iterate**: ask AI for one change ("make headings pink", "make bigger spacing", "use rounded corners")

**Instructor circulates**. Common issues:
- Student forgot `<link>` → no styles apply
- Student saved CSS as `.txt` → not recognized
- Student put `styles.css` in wrong folder → not found
- Browser cache → add `?v=2` to link or hard refresh (Cmd+Shift+R)

---

## Label phase (10 min)

Write (no AI):

1. What is CSS? (one sentence)
2. What is a **selector**? (what you'd target: `body`, `h1`, `.habit`)
3. What is a **property**? (`color`, `background`, `font-size`)
4. What is a **value**? (`red`, `20px`, `center`)
5. How does CSS "find" HTML? (via selectors matching tags)

### Pocket answers

- **CSS** — the language that tells the browser how HTML should look
- **Selector** — the thing you want to style (`h1`, `body`, `.classname`)
- **Property** — what aspect you're changing (color, size, position)
- **Value** — the specific setting (`red`, `20px`, `center`)

---

## Common failures

| Failure | Fix |
|---|---|
| CSS not loading | Check `<link>` path and filename |
| Changes don't show | Hard refresh (Cmd+Shift+R / Ctrl+Shift+R) |
| AI gives Tailwind classes | Re-prompt: "plain CSS, no frameworks" |
| Student spends 30 min on colors | Enforce: "pick one, move on" |
| Student copies prompt but result is ugly | Iterate: ask AI "make it look like Twitter" |

---

## What this day is NOT

- Not a CSS reference lesson (specificity, cascade, box model — not taught)
- Not Flexbox / Grid deep dive
- Not responsive design beyond "it works on phone"
- Not design critique

Keep it practical: style exists → open file → change value → reload → see result.
