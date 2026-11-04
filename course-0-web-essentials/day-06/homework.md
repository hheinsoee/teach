**Google Classroom** · **10 pts** · **Due: before Day 7**

---

# Day 6 Homework — React Deep Dive

**Total**: ~3 hours

---

## Part 1 — Research (1 hour)

### A. What is React?
- Who made React? Why?
- What is a "library" vs "framework"?

### B. Component thinking
- What makes a good component?
- "Component composition" — what does it mean?

### C. Vanilla DOM vs React
- When is vanilla fine?
- When is React better?

4-5 sentences per topic.

---

## Part 2 — Build (1-1.5 hours)

### A. Break your habits into components

Ask AI:

```
Refactor my React Habit Tracker so each habit is its own component called <Habit>.
Pass each habit's name and emoji as props.
```

### B. Add a Header component

Ask AI:

```
Add a <Header> component that shows "My Daily Habits" and today's date.
Place it above the HabitList.
```

### C. Add a Footer component

```
Add a <Footer> component that shows "Built by [your name] with React".
```

### D. Break and fix

Change `className` to `class` in one JSX line. Push. Reload.

What happens? (React warns in console.) Fix.

---

## Part 3 — Reflect (0.5 hour)

5 sentences:
1. Easier than vanilla DOM?
2. What's weirdest about JSX?
3. Your favorite component you built?
4. What would you add if you had more time?
5. One question about React?

---

## Submit

1. Live URL (should render via React)
2. Screenshot of your 3 components (Header, HabitList/Habit, Footer)
3. Research notes
4. Reflection

---

## Done when

- [ ] 3 topics researched
- [ ] Habit is its own component
- [ ] Header + Footer added
- [ ] Broke `className` and fixed
- [ ] Reflection submitted

---

## Looking ahead

Tomorrow (Day 7): **useState** — React's way of making components remember things. No more localStorage manual save/load. React handles it.
