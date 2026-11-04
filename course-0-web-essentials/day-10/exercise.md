# Day 10 — News App Features (React)

**Goal**: Add real features to your News App — search, filter, expand.

---

## Required: Search bar

### Step 1 — Prompt AI

```
Add a search bar to my React News App at the top:

- useState for search query
- When I type, filter articles by title (case-insensitive)
- Show all articles when search is empty
- Style the input nicely

Keep existing fetch and ArticleCard. Give me updated app.jsx.
```

### Step 2 — Save, push, test

Type in search. Articles filter in real-time.

### Step 3 — Read the filter

Find `.filter()` call. Can you explain which articles are kept?

---

## Pick 1-2 more features

### Option A — Category Filter Buttons

```
Add buttons for each category (tech, sports, local, business, arts).
useState for selectedCategory.
Clicking button filters articles. "All" button resets.
```

### Option B — Click to Expand (Modal)

```
Create a Modal component.
useState for selectedArticle.
Click article card → set selected → modal opens with full body.
Click outside or X button → close.
```

### Option C — Dark Mode Toggle

```
Add dark mode toggle button.
useState for isDark.
Apply className="dark" to root div when dark.
Save preference to localStorage.
```

---

## For each feature:

1. **READ** AI's code before pasting
2. **Paste** into app.jsx
3. **Push**
4. **Test** live
5. **Iterate** if broken

---

## Label (no AI!)

Write:
1. What is a **feature**?
2. `.filter()` on an array?
3. What is **conditional rendering**?
4. What makes a **modal** component different?
5. Easiest feature? Hardest?

---

## Done when

- [ ] Search bar works
- [ ] At least 1 more feature works (A/B/C)
- [ ] Pushed, live has it
- [ ] You can explain filter / modal / toggle
- [ ] Label answers written

---

## Rules

1. **Features step on each other.** Test each individually first.
2. **Read before pasting.**
3. **Push often.** Small commits = safer.

---

## If you finish early

Combine features:
- Search + category filter together (both active)
- Dark mode + modal (modal styled for dark mode)

Prompt AI for combined solution.
