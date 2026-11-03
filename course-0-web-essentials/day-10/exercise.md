# Day 10 — News App Features

**Goal**: Add real app features to your News App — search, filter, expand.

---

## Required: Search bar

### Step 1 — Prompt AI

```
Add a search bar at the top of my News App:
- When I type, filter articles whose title contains the search text
- Case-insensitive
- Show all when empty
- Nice styling

Keep existing fetch and card layout working.
```

### Step 2 — Save, push, test

Type in your search box. Articles filter in real-time.

### Step 3 — Read the filter code

Find the `.filter()` call. Can you explain how it decides which articles to keep?

---

## Pick ONE more feature

### Option A — Category Filter Buttons

Prompt AI:
```
Add buttons for each category (tech, sports, local, business, arts).
Clicking a button shows only articles in that category.
Add an "All" button to reset.
```

### Option B — Click to Expand (Modal)

Prompt AI:
```
When I click on an article card, show a modal overlay with:
- Full article body
- Image
- Title
- Date
- Close button (or click outside to close)
```

### Option C — Dark Mode Toggle

Prompt AI:
```
Add a dark mode toggle button at the top.
When clicked, switch between light and dark themes.
Save preference to localStorage.
```

---

## For each feature:

1. **READ** the AI code before pasting
2. **Paste** into appropriate file
3. **Push**
4. **Test** on live URL
5. **Iterate** if broken

---

## Label (no AI!)

Write:
1. What is a **feature**?
2. What's `.filter()` on an array?
3. What's a **modal**?
4. What's **state**?
5. Easiest feature today? Hardest?

---

## Done when

- [ ] Search bar works
- [ ] At least ONE more feature works (A, B, or C)
- [ ] Code pushed, live URL has it
- [ ] You can explain the filter / modal / toggle code
- [ ] Label answers written

---

## Rules

1. **Features step on each other.** Test each feature individually before combining.
2. **Read before pasting.** AI might assume different structure.
3. **Push often.** Small commits are safer.
4. **If a feature breaks everything**, undo in GitHub Desktop (right-click file → Discard changes).

---

## If you finish early

Try combining features:
- Search + category filter together (both filters applied)
- Dark mode + modal

Prompt AI for integrated solution.
