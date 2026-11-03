# Day 3 — JavaScript Basics (Reading-Level)

**Project**: Habit Tracker (continuing)
**Marcus stages**: 2-3 (First App → Browser Model)
**Modules touched**: A (variables, functions, events — reading), H (JS in browser)
**Duration**: 90 min class + 3 hr homework

---

## Learning outcomes

Students can:
- **Read**: a JS file and identify variables, functions, event handlers
- **Understand**: that JS makes things happen when the user interacts
- **Direct**: AI to add interactive behavior
- **Verify**: clicking a checkbox marks it done (visual change)

---

## 90-minute plan

| Block | Minutes | Activity |
|---|---|---|
| Homework review | 15 | 2-3 students show styled pages, discuss emoji icons |
| Concept: HTML + CSS + JS | 15 | Static vs interactive. "Behavior" layer. |
| Instructor demo | 15 | Prompt AI for "click to mark done" JS, read line by line |
| Student build | 35 | Each student adds JS to make checkboxes work |
| Label | 10 | Variable? Function? Event? Click? |

---

## Concept phase (15 min)

Draw:

```
HTML  →  Structure
CSS   →  Look
JS    →  Behavior   ← today
```

Analogy continued:
- HTML က **ကိုယ်ခန္ဓာ**
- CSS က **အဝတ်**
- JS က **လှုပ်ရှားမှု** — "ဒီ button နှိပ်ရင် ဒါဖြစ်မယ်"

**Static vs interactive**:
- ကာ (ကိုယ့် Habit Tracker in Day 1-2) → static → checkbox နှိပ်ပေမဲ့ ဘာမှ မမှတ်ထား
- JS ထည့်မယ် → interactive → နှိပ်ရင် "done" မှတ်, color ပြောင်း

---

## Instructor demo (15 min)

Open Habit Tracker in Chrome. Click a checkbox. **Reload page.** Click is gone — nothing saved. "Static."

Open ChatGPT. Prompt:

```
I have a Habit Tracker with HTML and CSS. The checkboxes work visually
but nothing happens when I click them. I want:

- When I check a checkbox, the habit text should get a line through it (strikethrough)
- When I uncheck, the strikethrough goes away

Give me the JavaScript code to add. Tell me where to put it in my HTML.

Here is my HTML:
[paste HTML]
```

AI gives JS code. **Instructor reads every line out loud**:

> *"ဒီ `const checkboxes = document.querySelectorAll('input[type=checkbox]');` က —*
>
> *`const` ဆိုတာ **variable** လိုပေါ့ — အရာတစ်ခုကို နာမည်ပေးထား။*
>
> *`document.querySelectorAll` က — browser ကို 'ဒီ page ထဲက checkbox အကုန် ရှာပေး' လို့ ပြော။*
>
> *ဒီ `checkboxes.forEach(cb => { ... })` က — checkbox တစ်ခုချင်းစီအတွက် ... ကိစ္စလုပ်။*
>
> *ဒီ `cb.addEventListener('change', ...)` က — 'ဒီ checkbox state ပြောင်းရင် ...' ဆိုတဲ့ **event listener**။*
>
> *ဒီ `cb.parentElement.style.textDecoration = 'line-through';` က — label ကို strike-through လိုင်းခြေ။"*"

Add `<script>` tag before `</body>`. Reload. Click checkbox. **Text strikes through.** Reload. Click again. Toggles.

> *"ကြည့်။ JS က page ကို **အသက်ဝင်** စေတယ်။"*

---

## Student build (35 min)

Each student:

1. Prompt AI (modify the demo prompt for their habits)
2. Copy JS code
3. Add `<script>` tag + code to their HTML before `</body>`
4. Save, reload
5. Click checkboxes — see strikethrough

**Then iterate**:
- Ask AI: *"When all 4 habits are done, show a message '🎉 All done today!'"*
- Try it. Read the new code.

**Instructor circulates**:
- `<script>` outside `<body>` → doesn't work; move inside
- JS syntax error → read error in Console (F12)
- Student doesn't understand `forEach` → explain: "do this for each one"

---

## Label phase (10 min)

Write (no AI):

1. What is a **variable**? (one sentence)
2. What is a **function**? (one sentence)
3. What is an **event**? (one sentence)
4. What does `addEventListener` do?
5. What does JS do that HTML and CSS can't?

### Pocket answers

- **Variable** — a name for something we want to remember (a number, a text, a checkbox)
- **Function** — a set of instructions grouped together, run when called
- **Event** — something that happens (click, type, submit, load)
- **`addEventListener`** — tells browser "when THIS event happens, do THIS"
- **JS does** — makes things respond to user action; HTML/CSS can't change on their own

---

## Common failures

| Failure | Fix |
|---|---|
| JS doesn't run | `<script>` placed wrong; must be before `</body>` or in `<head>` with `defer` |
| Console shows red error | Open DevTools (F12 → Console), read error, paste to AI |
| Checkbox checks but no strikethrough | `parentElement` selector targets wrong element; re-prompt with HTML |
| Student panics at `=>` arrow syntax | Explain: "shorthand for function"; move on |
| Student wants to type own JS | Fine, but also run AI version first |

---

## What this day is NOT

- Not a JavaScript tutorial covering all operators / types
- Not promise / async (that's Day 6)
- Not ES6 features deep-dive
- Not DOM manipulation reference

Keep tight: static page → add script → click = response. That's the only story today.
