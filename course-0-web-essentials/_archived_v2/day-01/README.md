# Day 1 — Problem, Idea & First HTML

**Project**: Habit Tracker (Days 1-5)
**Marcus stages**: 1-2 (Problem → First App)
**Modules touched**: C (VS Code intro), G (how the web works), H (HTML structure)
**Duration**: 90 min class + 3 hr homework

---

## Learning outcomes

By end of Day 1, students can:

- **Read**: an HTML file and name 3-5 tags
- **Understand**: that a browser renders HTML as a visible page
- **Direct**: ChatGPT/Claude to generate basic HTML
- **Verify**: the generated HTML works by opening it in a browser

---

## 90-minute plan

| Block | Minutes | Activity |
|---|---|---|
| Welcome + expectations | 15 | Who this course is for; what we'll ship by Day 8 |
| Concept: "Why do we build?" | 10 | Problem → App framing (Marcus story) |
| Instructor demo | 15 | Live: open ChatGPT, prompt "build me HTML for a habit tracker", read every line |
| Student build | 35 | Each student prompts AI for their Habit Tracker HTML, opens in browser |
| Label | 15 | What is HTML? What is a tag? What does `<h1>` mean? (own words, no AI) |

---

## Pre-class setup (instructor)

- Chrome open with ChatGPT/Claude tab logged in
- Projector working
- VS Code open (optional, can use any text editor)
- A folder for each student (`habit-tracker/`) ready as a template to copy
- Previous student app URL ready as a "look what you'll build" demo

---

## Welcome script (15 min)

Open with:

> *"ဒီ ၂၄ နာရီ ပြီးရင် သင့်မှာ Habit Tracker နဲ့ News App ၂ ခု — internet ပေါ်မှာ, ဖုန်းနဲ့ ဖွင့်လို့ရ, မိတ်ဆွေကို share လို့ရ။"*

Then:

> *"ဒါပေမဲ့ ဒီ course က **programmer ဖြစ်ဖို့ မဟုတ်**။ ဒီ course က — **AI နဲ့ လက်တွဲပြီး ဘယ်လို app ဆောက်မလဲ, code ဘယ်လိုဖတ်မလဲ, AI ပြောတာ မှန်မမှန် ဘယ်လိုစစ်မလဲ** သိဖို့။"*
>
> *"Programmer ဖြစ်ချင်ရင် Course 1 မှ။ ဒီနေ့က ကိုယ့်ဖာသာ ဘာမှ မသိရသေးဘူး ဆိုတဲ့ ကျောင်းသားကို — code ဖတ်တတ်ဖို့, AI နဲ့ လက်တွဲတတ်ဖို့ — ၄ ပတ်ထဲ။"*

---

## Concept phase (10 min)

**"Why do we build?"**

Draw on whiteboard / show on screen:

```
Problem  →  Idea  →  App  →  Users  →  Feedback  →  Improved App
```

Explain with Marcus's story:
- Marcus က **ရေသောက်ဖို့ မေ့တယ်** → problem
- "App တစ်ခု ရှိရင် reminder ပေးမယ်" → idea
- Sip app ဆောက် → first app
- Share with family → users
- Family said "button ကြီးချင်" → feedback
- Improved Sip

**Then ask**: *"သင့်မှာ ဘယ်လို habit တွေ မမေ့ချင်လဲ?"*

Students answer (ဘုရားရှိခိုး, စာကျက်, exercise, စသည်). Write 3-4 habits on board.

**That becomes their Habit Tracker list.**

---

## Instructor demo (15 min)

Open ChatGPT (or Claude). Type this prompt in front of class:

```
I want to build a simple Habit Tracker web app.

Build me a single HTML file with:
- A heading "My Daily Habits"
- A list of 4 habits (replace with: Pray, Study, Exercise, Water)
- Next to each habit, a checkbox
- A small text at the bottom showing today's date

Keep it simple. No CSS or JavaScript yet. Just HTML.
```

ChatGPT produces HTML. **Instructor reads every line out loud**:

> *"ဒီ `<!DOCTYPE html>` က — browser ကို 'ဒါ HTML ပဲ' လို့ ပြောတယ်။*
>
> *ဒီ `<html>` tag က — စာမျက်နှာအစ။*
>
> *ဒီ `<body>` ထဲမှာ — ကိုယ်မြင်ရမယ့် အကုန်။*
>
> *ဒီ `<h1>` က — heading, အကြီးဆုံး စာသား။*
>
> *ဒီ `<ul>` က — unordered list, ဘုလ်းနဲ့ စာရင်း။*
>
> *ဒီ `<li>` က — list item, စာရင်းထဲက တစ်ခု။*
>
> *ဒီ `<input type="checkbox">` က — ချက်ဘောက်။*"

Save the file as `index.html`. Double-click to open in Chrome. **It shows.**

> *"ကြည့်။ Code က text ပဲ ဆိုပေမဲ့ — browser မှာ page ဖြစ်သွားတယ်။ ဒါ HTML။"*

---

## Student build (35 min)

Each student:

1. Open ChatGPT or Claude in browser
2. Use the **same prompt** (or a modified one with their own habits)
3. Copy the generated HTML
4. Create a new folder on desktop: `habit-tracker/`
5. Save as `index.html`
6. Double-click to open in Chrome

**Instructor circulates**. Common issues:
- Student copies prompt but AI gives slightly different output — fine, works too
- Student forgets `.html` extension — rename
- Student puts code inside wrong folder — help find it
- Chrome shows plain text instead of page — missing `.html` extension

**By minute 35, every student has an HTML file open in their browser.**

---

## Label phase (15 min)

Everyone closes AI and VS Code. On paper or in notes app, write:

1. What is HTML? (one sentence)
2. What is a tag? (one sentence)
3. What does `<h1>` mean?
4. What does `<ul>` mean?
5. What does `<input type="checkbox">` do?

**Then share**: 2-3 students read their definitions out loud. Class validates.

### Instructor pocket answers (for guidance, not lecture)

- **HTML** — the language that tells the browser what to show on a page
- **Tag** — a word in `<brackets>` that marks a piece of content
- **`<h1>`** — the biggest heading on the page
- **`<ul>`** — a list with bullet points
- **`<input type="checkbox">`** — a box you can click to check

---

## Common failures (what actually goes wrong in the room)

| Failure | What happens | Fix |
|---|---|---|
| Student has no ChatGPT account | Can't prompt | Day 0 pre-work check; create account now (2 min) |
| ChatGPT gives advanced HTML with lots of divs | Confusing for beginner | Re-prompt: "simpler please, only basic tags" |
| Student opens `.txt` file instead of `.html` | Browser shows code as text | Rename extension to `.html` |
| Student copies prompt but doesn't understand output | Reads but doesn't see what to do | Instructor sits with student, reads line by line |
| Student skips Label phase ("I already know HTML") | Vibe-coder risk | Make them teach a classmate — if they can't, they don't know |

---

## What this day is NOT

- Not a lecture on web history
- Not a deep-dive on every HTML tag
- Not CSS (that's tomorrow)
- Not JavaScript (that's Day 3)

Keep it tight: AI prompts → HTML file → browser shows it → students name what they see.

---

## Homework assignment

Direct students to [`homework.md`](homework.md). Due before Day 2.
