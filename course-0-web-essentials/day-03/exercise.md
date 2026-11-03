# Day 3 — In-Class Exercise

**Goal**: Make your checkboxes DO something. When you click, the habit gets struck through.

---

## Step 1 — Open your project

Open `habit-tracker/index.html` in Chrome. Click a checkbox.

Notice: nothing happens except the check appears. Reload — check is gone.

Today we fix that.

---

## Step 2 — Prompt AI for JavaScript

Go to ChatGPT or Claude. Paste:

```
I have a Habit Tracker with HTML and CSS. I want JavaScript that:

- When I check a checkbox, the habit text gets a line through it (strikethrough)
- When I uncheck it, strikethrough goes away
- When ALL habits are checked, show a happy message "🎉 All done!"

Give me the JavaScript code. Tell me where to put it in my HTML.

Here is my HTML:

[PASTE YOUR INDEX.HTML HERE]
```

---

## Step 3 — Add the script to HTML

AI gives you code. It might look like:

```html
<script>
  // ... some code here
</script>
```

Open `index.html`. **Right before** `</body>`, add this script block.

Save `index.html`.

---

## Step 4 — Test it

Reload Chrome. Click a checkbox. Does the text get struck through?

**Click all checkboxes.** Does the message appear?

**Uncheck one.** Does the message disappear?

---

## Step 5 — Read the code

Open your `index.html`. Look at the `<script>` section. Try to answer:

- Which line finds the checkboxes?
- Which line listens for a click?
- Which line adds the strikethrough?

**Don't understand a line? Ask AI:**

```
Explain this line in simple words: [paste the line]
```

---

## Step 6 — Add one more feature

Ask AI for ONE of these:

- **A**: When all habits done, change the background color to green
- **B**: Add a "Reset all" button that unchecks everything
- **C**: Keep a running count: "2 of 4 done"

Add the new code. Test.

---

## Step 7 — Label (no AI!)

Close AI. Write:

1. What is a **variable**? (one sentence)
2. What is a **function**? (one sentence)
3. What is an **event**? (one sentence)
4. What does `addEventListener` do?
5. What can JS do that HTML and CSS can't?

---

## Done when

- [ ] Clicking a checkbox strikes through the habit
- [ ] Unchecking removes strikethrough
- [ ] Message appears when all done
- [ ] You added one extra feature (A, B, or C)
- [ ] You can point at a JS line and say "that's a variable" / "that's a function" / "that's an event"
- [ ] Label answers written

---

## If you finish early

Open DevTools (press **F12**). Click the **Console** tab.

In your JS, add this line temporarily:

```javascript
console.log("checkbox clicked!");
```

Where should you add it? Inside the `addEventListener` function. Click a checkbox. See the message appear in Console.

**That's debugging.** You can watch what's happening inside your code.

---

## Rules

1. **Save, then reload.** Browser doesn't update until you reload.
2. **If something breaks**, press F12 → Console tab. Red text = error. Paste it to AI.
3. **Read before you accept.** Don't paste code without looking at it.
