# Day 2 — In-Class Exercise

**Goal**: Make your Habit Tracker look nice using CSS.

---

## Step 1 — Open your Day 1 files

Open your `habit-tracker/` folder. You should have `index.html` there. Open it in Chrome.

Right now it looks plain. Today we'll change that.

---

## Step 2 — Prompt AI for CSS

Go to ChatGPT or Claude. Paste this prompt (change the style words to what you want):

```
I have a Habit Tracker HTML file. Here is the content:

[PASTE YOUR HTML HERE — copy from index.html]

Please create a styles.css file that makes it look:
- Dark background with light text
- Big, friendly, readable font
- Checkboxes larger than default
- Centered on the page
- Mobile-friendly

Give me the CSS code and tell me how to link it to my HTML.
```

Press Enter.

---

## Step 3 — Save styles.css

AI gives you CSS code. Copy it. Create a new file in your `habit-tracker/` folder called **`styles.css`**. Paste the CSS. Save.

---

## Step 4 — Link CSS to HTML

In your `index.html`, inside the `<head>` section, add this line:

```html
<link rel="stylesheet" href="styles.css">
```

Save `index.html`.

---

## Step 5 — Reload browser

Go back to Chrome. Press **Cmd+R** (Mac) or **F5** (Windows). Your page should now look styled.

**If it still looks plain**:
- Check your `<link>` line is spelled correctly
- Check `styles.css` is in the same folder as `index.html`
- Hard refresh: **Cmd+Shift+R** / **Ctrl+Shift+R**

---

## Step 6 — Iterate

Ask AI for ONE change at a time. Example:

```
Make the headings pink
```

or

```
Make the spacing between habits bigger
```

AI gives updated CSS. Copy, paste into your `styles.css`, save, reload.

**Try 3 different changes.** Each one teaches you a new CSS property.

---

## Step 7 — Label (no AI!)

Close AI. Write in notes:

1. What is CSS? (one sentence)
2. What is a selector? (`body`, `h1`, `.habit`)
3. What is a property? (give one example)
4. What is a value? (give one example)
5. How does CSS "find" the HTML to style?

---

## Done when

- [ ] You have `styles.css` in your `habit-tracker/` folder
- [ ] Your HTML has the `<link>` tag connecting it to CSS
- [ ] Your webpage looks styled (not plain) when you reload
- [ ] You asked AI for at least 3 style changes
- [ ] You wrote the 5 Label answers
- [ ] You can point at a CSS rule and name selector / property / value

---

## If you finish early

Try asking AI for:
- A hover effect on habits
- Icons for each habit (emoji or icon font)
- A gradient background
- A card-style design where each habit is in a box

**Reload after each change.** Have fun. Don't worry if it looks weird.

---

## Rules

1. **One change at a time.** If you ask for 5 changes at once, you can't learn what did what.
2. **Save and reload.** CSS doesn't update automatically.
3. **If AI gives something confusing, ask**: *"Explain the CSS I just pasted"*.
