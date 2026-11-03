# Day 2 — CSS Styling

**Phase**: Learning (Day 2 of 8)
**Project**: Habit Tracker
**Modules touched**: H (CSS), F (AI)
**Duration**: 90 min + 3 hr HW

---

## Learning outcomes

- **Read** a CSS file, name 5+ properties
- **Understand** CSS is separate from HTML, controls look only
- **Direct** AI to style via descriptions
- **Verify** changes appear after push + reload

---

## 90-min plan

| Block | Min | Activity |
|---|---|---|
| HW review | 10 | 2-3 students show modified HTML |
| Concept: HTML vs CSS vs JS | 10 | Structure / Look / Behavior |
| Instructor demo | 15 | AI generates CSS, link to HTML, push, see live |
| Student build | 40 | Students style their Habit Tracker |
| Label + commit | 15 | CSS terms + push |

---

## Concept (10 min)

```
HTML  →  Structure (what's on the page)
CSS   →  Look (how it appears)
JS    →  Behavior (what happens when clicked — Day 3+)
```

Analogy:
- HTML = ကိုယ်ခန္ဓာ
- CSS = အဝတ်
- JS = လှုပ်ရှားမှု

---

## Demo (15 min)

Prompt AI:

```
Here's my HTML:
[paste index.html body]

Create styles.css that:
- Dark background, light text
- Big friendly font
- Centered on page
- Bigger checkboxes
- Mobile-friendly

Give me the CSS and tell me how to link it.
```

AI gives CSS. Read each rule aloud. Save to `styles.css`. Add `<link>` to HTML. Push. Reload. Styled.

---

## Student build (40 min)

Each student:
1. Prompt AI with their HTML
2. Save to `styles.css`
3. Add `<link rel="stylesheet" href="styles.css">` to `<head>`
4. Commit + push
5. Iterate: "make headings pink", "bigger spacing", etc.

**Common issues**: `<link>` typo, CSS not loading (hard refresh), AI gives Tailwind (re-prompt plain CSS).

---

## Label (10 min)

Write:
1. What is CSS?
2. What is a **selector**?
3. What is a **property**?
4. What is a **value**?
5. How does CSS find HTML?

**Pocket answers**:
- CSS = language that styles HTML
- Selector = what to style (`body`, `h1`, `.habit`)
- Property = what aspect (color, size, position)
- Value = the setting (`red`, `20px`, `center`)
- Via matching selectors to tags

---

## Common failures

| Failure | Fix |
|---|---|
| CSS not loading | Check `<link>` path/filename |
| Changes don't show | Hard refresh |
| AI gives Tailwind | Re-prompt "plain CSS, no frameworks" |

---

## NOT

- CSS specificity, cascade, box model (Course 1)
- Flexbox/Grid deep dive
- Design critique
