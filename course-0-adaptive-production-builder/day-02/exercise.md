# Day 2 — In-Class Exercise

**Goal:** Learn why **prompt precision** matters. Ship a mini-app that solves one specific person's problem.

---

## Part A — The three-prompt test

### Prompt 1 (vague)

Open **v0.dev** and paste this exact text:

```
Build a tool to help people manage expenses.
```

Wait for the result. Look at it. Does it feel generic? Would anyone actually use it?

### Prompt 2 (slightly better)

New v0 chat. Paste:

```
Build a tool to help a small shop owner track daily expenses on their phone.
One page. Must add an expense in under 5 seconds.
```

Compare to Prompt 1.

### Prompt 3 (precise)

New v0 chat. Paste:

```
Build a one-page expense tracker for a Burmese tea shop owner.

Form at the top:
- amount (number)
- category (dropdown: ingredients, salary, rent, other)
- note (text, optional)

Below the form:
- today's total in large text
- a list of today's expenses

Mobile-first. Burmese text in UI is OK.
```

Compare all three. Pick which one you'd actually hand to a shop owner.

---

## Part B — Build your own precise mini-app

### Step 1 — Pick someone

**Not yourself.** Pick a real person you know. Write down:

- **Who?** (name, what they do)
- **What problem?** (one sentence)
- **How will they use it?** (phone? laptop? once a day? once a week?)

**Examples:**
- A tutor who wants a page listing upcoming classes
- A mother who wants a weekly meal planner
- A friend who sells things on Facebook and needs an order-collection form

### Step 2 — Write a precise prompt

Use **prompt 3** above as your model. Your prompt should include:

- **Who it's for** (specifically)
- **What they'll do with it** (specific action)
- **The parts of the page** (form fields, sections, buttons)
- **How they'll use it** (phone / laptop / etc.)

### Step 3 — Build and deploy

- Prompt v0
- Iterate 2-3 times
- Deploy to Vercel
- Open URL on your phone

### Step 4 — Show the person (if you can)

If the person you built this for is reachable, send them the URL. Watch (or ask) what they do with it. Note what you learn.

---

## Part C — Label (no AI!)

**Close v0 and ChatGPT.** Write in your notes:

1. What is a **specification**? (one sentence)
2. What is a **constraint**? (one sentence)
3. Why does "what problem, how to use" matter? (one sentence)
4. What specifically made your prompt better than prompt 1?

---

## Done when

- [ ] You ran all three prompts in v0 and compared the outputs
- [ ] You wrote down: who, what problem, how to use — for a specific person
- [ ] You shipped a mini-app with a live URL
- [ ] You wrote your Label answers, no AI
- [ ] You read your URL + the "who it's for" aloud to the class

---

## Rules

1. **Not yourself.** The user must be another real person.
2. **One page.** Not three. Scope creep is the enemy today.
3. **Ship by minute 55.** If you're still prompting at 55 minutes, deploy what you have and iterate later.
