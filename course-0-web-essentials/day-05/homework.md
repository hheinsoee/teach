**Google Classroom** · **10 pts** · **Due: before Day 6**

---

# Day 5 Homework — Loops Deep Dive

**Total**: ~3 hours

---

## Part 1 — Research (1 hour)

- "for loop JavaScript" — 1 video
- "forEach JavaScript" — 1 video  
- "array methods JavaScript" — 1 video (map, filter, reduce — just introduction)

4-5 sentences in own words.

---

## Part 2 — Build (1-1.5 hours)

### A. Loop variations

Prompt AI to:
- Rewrite your habit log using `forEach` instead of `for`
- Add a loop that logs habits in reverse order

### B. Filter loop

Prompt AI:
```
Add a function `getDoneHabits(habits, doneArray)` that uses a loop
to return a new array of habits that are "done" (where doneArray[i] is true).

Call with example data. Log result.
```

### C. Break and fix

In your loop, change `i++` to `i--`. Push. What happens?

(Infinite loop — `i` goes negative but `i < length` is still true? Or counter never grows?)

Fix. Push.

---

## Part 3 — Reflect (0.5 hour)

3-5 sentences:
1. `for` vs `forEach` — which do you prefer?
2. What's "off-by-one" and did it bite you?
3. Something you still don't understand about loops?

---

## Submit

1. Live URL
2. Research notes
3. Console screenshot showing loop output
4. Reflection

---

## Done when

- [ ] 3 topics researched
- [ ] At least 2 loop styles in script.js (`for` + `forEach`)
- [ ] `getDoneHabits` function works
- [ ] Experienced an infinite loop
- [ ] Reflection submitted
