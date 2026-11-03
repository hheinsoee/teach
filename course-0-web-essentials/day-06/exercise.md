# Day 6 — In-Class Exercise

**Goal**: Make your Habit Tracker **interactive**. Click a checkbox → text strikes through.

---

## Step 1 — Try DOM in Console

Open live URL. F12 → Console.

```javascript
let heading = document.querySelector("h1")
console.log(heading)
```

See the `<h1>` element.

```javascript
heading.textContent = "Changed from Console!"
```

**Heading on your page changes.** JS controls HTML.

Try:
```javascript
heading.style.color = "red"
heading.style.fontSize = "60px"
```

---

## Step 2 — Try events in Console

```javascript
let btn = document.querySelector("button")
btn.addEventListener("click", () => {
    console.log("Clicked!")
})
```

Click your Reset button (if you have one). "Clicked!" appears.

**That's an event listener.**

---

## Step 3 — Prompt AI for interactive checkboxes

Paste:

```
In my Habit Tracker, I want:
- When a checkbox is clicked, strike through the habit text
- When unchecked, remove strikethrough
- Add a counter above the list: "X of Y habits done"
- Update counter whenever a checkbox changes

Give me the complete JavaScript. Explain each line.
```

---

## Step 4 — Save, push, test

Save `script.js`. Push.

Wait 30 sec. Reload URL.

**Click checkboxes.** Text should strike through.
**Counter should update.**

---

## Step 5 — Read your code

For each major piece:
- `querySelectorAll` — what does it return?
- `forEach` — why loop here?
- `addEventListener` — what event? What does it do?
- `event.target.checked` — what's this?

Ask AI to explain if unclear.

---

## Step 6 — Modify

Try these one at a time:

A. Change strikethrough to red color:
   - Instead of `textDecoration = 'line-through'`
   - Use `color = 'red'`

B. When all done, show alert:
   - "🎉 All habits done today!"

Push after each change.

---

## Step 7 — Label (no AI!)

Write:
1. What is the **DOM**?
2. What does `querySelector` do?
3. What is an **event**?
4. What does `addEventListener` do?
5. HTML vs DOM — what's different?

---

## Done when

- [ ] You changed heading text from Console
- [ ] Clicking checkboxes strikes through text (via your JS)
- [ ] Counter updates automatically
- [ ] You modified at least 1 thing (A or B)
- [ ] Label answers written

---

## Rules

1. **`change` event for checkboxes** (not `click`)
2. **Can't find element?** Check `<script>` is at end of `<body>` or has `defer`
3. **Read error in Console** if nothing works

---

## If you finish early

Make the counter clickable — when counter is clicked, uncheck all habits:

```javascript
document.querySelector("#counter").addEventListener("click", () => {
    document.querySelectorAll("input[type=checkbox]").forEach(cb => {
        cb.checked = false
    })
    // ... update strikethrough + count
})
```

Ask AI to help you fill this in.
