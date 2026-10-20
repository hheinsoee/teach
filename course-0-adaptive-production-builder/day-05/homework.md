**Google Classroom assignment**
**Points:** 10
**Due:** evening before Day 6
**Submit:** 1 live URL, modification log, incident report

---

# Day 5 Homework — Add a Feature. Document What Broke.

## Why this homework exists

In class, you fixed what the instructor broke. Today's homework: **modify your mini-app yourself** — add one new feature — and document what broke along the way.

Because something will break. That's how you learn operating.

---

## What to do (3-4 hours)

### Part 1 — Pick ONE new feature (15 min)

Add exactly **one** feature to your mini-app from Day 4. Examples:

- Add a **search** box
- Add a **filter** (show only "done" / show only "not done")
- Add a **date picker** when adding a new item
- Add a **sort** (newest first / oldest first)
- Add a **profile page** where the user sees their email
- Add an **edit** button for existing rows
- Add a **delete** button

**One, not three.** Resist the urge.

### Part 2 — Prompt Lovable to add it (60 min)

Prompt specifically. Example:

```
Add a search box above the todo list.
When the user types, filter the list to only show todos whose text contains the search string (case-insensitive).
When the search box is empty, show all todos.
Keep everything else the same.
```

### Part 3 — Test the new feature AND the old features (30 min)

**Checklist** — go through every feature in the app:

- Signup still works?
- Login still works?
- Adding a row still works?
- Marking done still works?
- Logging out still works?
- (Any other features from before)

**Something will have broken.** Expect it. If nothing broke, test more carefully.

### Part 4 — Fix what broke, document each break (60 min)

For each thing that broke:

1. Describe what broke in one sentence
2. Which layer? (UI / Data / Infra)
3. What did you check first?
4. What was the actual cause?
5. How did you fix it?
6. Did the fix break anything else?

This is called an **incident report**. Every production engineer writes these.

### Part 5 — Submit (30 min)

**1. URL** — must work after your changes

**2. Modification log** — the exact prompts you sent to Lovable, in order. Example:

```
Prompt 1:
Add a search box above the todo list that filters by text.
---
Prompt 2:
After the search box, the add-todo form stopped submitting.
Fix it, keep both features working.
---
Prompt 3:
The search is case-sensitive. Make it case-insensitive.
```

**3. Incident report** — for each break:

```
Break 1:
What: Add-todo form stopped submitting after search was added.
Layer: UI
Checked first: browser console (saw a React error)
Actual cause: The search filter was wrapping the form in a conditional that hid it when search was active.
Fix: Prompted Lovable to keep the form always visible, only filter the list below.
Side effect: None.
```

---

## Done when

- [ ] You added exactly 1 new feature
- [ ] All old features still work
- [ ] You wrote an incident report for every break
- [ ] URL + mod log + incident report all submitted to Classroom
- [ ] Total time under 4 hours

---

## Rules

1. **One feature.** If you added 3, your incident report will be impossible to write and you'll waste more time.
2. **If nothing broke, you didn't test thoroughly.** Try harder. Common breakages: existing features silently broken by a new one, auth broken by a UI change, data not refreshing after an update.
3. **The incident report is the point.** Not the feature. We want to see you noticing and documenting breaks.
4. **Write the report in your own words.** AI-generated incident reports read like generic templates. Your instructor will notice.

---

## What the instructor will check

- URL works, new feature works, old features still work
- Mod log shows real iteration (not one perfect prompt)
- Incident report shows specific breaks (not generic "something didn't work")
- The layer labels (UI / Data / Infra) are right for the described break
