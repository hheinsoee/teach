# Day 7 — In-Class Exercise

**Goal**: Make your News App production-ready. Add filter, expand, loading state. Learn to spot AI's mistakes.

---

## Step 1 — Code review warm-up

The teacher will show you a News App with 2 bugs. **Try to spot them before the teacher reveals.**

Hints:
- Open browser Console (F12)
- Look at Network tab
- Try to use the app — what doesn't work?

---

## Step 2 — Add "Click to expand"

Ask AI:

```
Add this feature: when I click on an article in the News App, 
show the full article body in a modal (popup overlay).
Clicking outside the modal closes it.
Keep the existing features working.
```

**Before pasting the code, READ IT.**

Look for:
- Does it change HTML structure?
- Does it modify your existing JS?
- Does the modal CSS look sensible?

Then paste. Test.

---

## Step 3 — Add "Loading..." state

Ask AI:

```
Add a loading state. Before data arrives from the API, 
show "Loading news..." in the center of the page.
When data arrives, replace with the articles.
```

Test: reload page, watch for the "Loading..." text (might flash quickly).

If it's too fast to see, ask AI: *"Add a 2-second artificial delay so I can see the loading state."*

(This is for testing — remove delay for production.)

---

## Step 4 — Add error state

Ask AI:

```
If fetch fails (server down, no internet), show "Something went wrong. 
Please try again." with a retry button. Don't crash the page.
```

**Test it**: temporarily change the URL in fetch to something broken (`https://api.heinsoe.com/newzzz.json`). Reload.

Do you see the error state? Does the retry button work?

Restore the URL.

---

## Step 5 — Code review your own News App

Open your `index.html`. **Read it top to bottom.**

Ask yourself:
- Any lines you don't understand?
- Any lines that look suspicious?
- Is there error handling for fetch failures?
- Does the modal close properly if the user clicks outside?

Pick ONE line you want to improve. Ask AI:

```
Review this line of my code and suggest if there's a better way: 
[paste line]
```

Apply suggestion if it makes sense. Reject if AI's suggestion seems worse.

---

## Step 6 — Label (no AI!)

Write:

1. What is **code review**?
2. What is a **bug**?
3. What does **"hallucination"** mean when talking about AI?
4. Why read AI's code before pasting?
5. Give an example of code that "looks right but is wrong."

---

## Done when

- [ ] Click to expand works (modal)
- [ ] Loading state visible briefly on reload
- [ ] Error state shows when URL is broken
- [ ] You read all your code and understand each section
- [ ] You asked AI to review at least one line
- [ ] Label answers written

---

## If you finish early

- **Dark mode toggle**: switch between light/dark theme
- **Bookmarks**: save favorite articles to localStorage
- **Share button**: copy article URL to clipboard
- **Keyboard navigation**: press arrow keys to navigate articles

---

## Rules

1. **Read before pasting.** Every AI output.
2. **If AI's first fix doesn't work**, don't re-prompt the same thing. Look at the actual error and re-prompt with more context.
3. **Code review is the human's job.** AI can draft; you edit.
