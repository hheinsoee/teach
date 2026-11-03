# Day 7 — News App: Features & Code Review

**Project**: News App (continuing)
**Marcus stages**: 7
**Modules touched**: E (software engineering — reviewing AI code), F (prompting craft), H (DOM depth)
**Duration**: 90 min class + 3 hr homework

---

## Learning outcomes

Students can:
- **Read**: AI-generated code and spot something suspicious
- **Understand**: that AI makes mistakes (hallucinations, outdated APIs)
- **Direct**: AI with more precise prompts after reviewing output
- **Verify**: their news app works for all features

---

## 90-minute plan

| Block | Minutes | Activity |
|---|---|---|
| Homework review | 15 | Show redesigned News Apps |
| Concept: "AI gets things wrong" | 20 | Code review intro — how to spot problems |
| Live code review demo | 15 | Instructor shows AI News App with 2 planted bugs, students find them |
| Student build | 30 | Add final features: filter, expand, loading state |
| Label | 10 | Code review? Bug? Prompt craft? |

---

## Concept phase (20 min)

**"AI is confident, not correct."**

Draw/discuss:
- AI generates code that LOOKS right
- But it might: use outdated functions, hallucinate APIs that don't exist, miss edge cases
- Your job as the human: **read, verify, test**

**3 common AI mistakes**:

1. **Hallucinated API** — AI calls a function that doesn't exist. Example: `document.getLatestNews()` (no such thing)
2. **Outdated syntax** — AI uses old ways (jQuery `$()` when you asked for modern JS)
3. **Wrong assumption** — AI assumes your API returns data differently than it does

**How to spot**:
- Does the code **actually run** when you load the page?
- Does it do what you asked?
- Does Console show errors?
- Does it break when you try "weird" input?

---

## Live demo (15 min)

Instructor shows a pre-prepared News App with planted bugs. Example buggy code:

```javascript
fetch('https://api.heinsoe.com/news.json')
  .then(r => r.json())
  .then(articles => {
    const container = document.getElementById('news-container');
    articles.forEach(a => {
      // BUG 1: typo — should be innerHTML
      container.innerHtml += `<h2>${a.title}</h2>`;
    });
  });
  // BUG 2: no error handling if fetch fails
```

Ask class: **"What's wrong?"**

Discussion flows:
- First look → "it looks fine"
- Instructor shows: open in browser → nothing appears → check Console
- Console says `undefined is not a function` → student spots the typo
- Fix typo → works
- Then: "what if API is down?" → nothing happens, no feedback → add `.catch()`

> *"ဒါ **code review** လို့ ခေါ်တယ်။ AI ပေးတဲ့ code ကို ဖတ်, စမ်း, စစ် — ပြီးမှ accept။"*

---

## Student build (30 min)

Each student adds 3 features to their News App via AI:

1. **Click to expand**: click article → show full body text (modal or expand in place)
2. **Loading state**: before data arrives, show "Loading news..."
3. **Error state**: if fetch fails, show "Something went wrong. Try again."

**For each feature**:
- Prompt AI
- Read the code BEFORE pasting
- Ask yourself: "does this look right?"
- Paste, test
- If broken: Console → error → re-prompt AI with error

**Instructor circulates**:
- Student copies without reading → stop them: "read first"
- Student can't find error → walk through: Chrome F12 → Console → read red text
- Student frustrated with repeated AI mistakes → model patience: "AI is a draft, you are the editor"

---

## Label phase (10 min)

Write (no AI):

1. What is **code review**?
2. What is a **bug**?
3. What is a **hallucination** (AI context)?
4. Why should you read AI code before using it?
5. What's one way AI's output could look correct but actually be wrong?

### Pocket answers

- **Code review** — reading code to understand it + spot problems before using it
- **Bug** — code behavior that's not what you wanted
- **Hallucination** — when AI makes up something that doesn't exist (fake function, fake API)
- **Why read first** — AI is confident even when wrong; blind trust leads to broken apps
- **Looks right, is wrong** — typo in function name, wrong assumption about data, missing error case

---

## Common failures

| Failure | Fix |
|---|---|
| Student accepts AI code without reading | Stop them. Read it line by line together. |
| Error messages too cryptic | Teach: "paste the error back to AI with 'what does this mean?'" |
| Student spends 30 min on one bug | Help them: pair with another student, or instructor sits down |
| Student assumes AI is always right | Show them an obvious AI failure (ask AI something you know it'll get wrong) |

---

## What this day is NOT

- Not static analysis / linting tools
- Not formal testing framework
- Not peer review workflow
- Not defensive programming deep-dive

Keep tight: read AI output → spot issues → verify behavior → iterate.
