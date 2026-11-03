# Day 11 — Code Review + User Feedback

**Phase**: ⭐ Capstone 2 (Day 3 of 4)
**Project**: News App
**Modules touched**: E (software engineering), F (AI review)
**Duration**: 90 min + 3 hr HW

---

## Learning outcomes

- **Read**: your own code critically, spot issues
- **Understand**: AI makes mistakes; your job is to catch them
- **Direct**: AI to improve specific sections
- **Verify**: feedback from real users

---

## 90-min plan

| Block | Min | Activity |
|---|---|---|
| HW review | 10 | Students show mobile fixes |
| Concept: "AI is confident, not correct" | 15 | Common AI mistakes; code review |
| Instructor demo | 15 | Review a buggy AI-generated News App |
| Student build | 30 | Students review own code + share with 3 users |
| Label + commit | 20 | Code review, user feedback |

---

## Concept (15 min)

### "AI is confident, not correct"

AI generates code that LOOKS right but might:
- Use outdated functions (`document.write`)
- Call APIs that don't exist (hallucination)
- Miss edge cases (what if article has no image?)
- Assume wrong data structure

**Your job**: read, test, catch errors.

### Code review process

For each major section:
- What does it do?
- Does it handle edge cases?
- Is there a cleaner way?
- Could it break?

Walk through the News App section by section.

---

## Instructor demo (15 min)

Show pre-prepared buggy News App with 2-3 issues:

```javascript
// BUG 1: typo — innerHTML vs innerHtml
container.innerHtml += `<h2>${a.title}</h2>`

// BUG 2: no fallback if image missing
<img src="${a.image}">
// (what if a.image is null?)

// BUG 3: no .catch on fetch
fetch(url).then(r => r.json()).then(data => ...)
// (what if network fails?)
```

Ask class: "What's wrong?"

Walk through finding each bug:
- Open DevTools Console
- Try to break the app (unplug WiFi, broken image URL)
- Spot the issue
- Fix

---

## Student build (30 min)

### Part A — Self-review (15 min)

Each student opens their own `script.js`. Walks through section by section:
- Does fetch have `.catch`?
- Does `innerHTML` properly escape data?
- Does any array operation assume non-empty?
- Would code break if API returned different data?

Prompt AI: *"Review this code and suggest 2 improvements: [paste section]"*

Apply suggestions that make sense.

### Part B — Share with real users (15 min)

Each student:
- Send News App URL to **3 real people** (friends, family — NOT this cohort)
- Ask: "Open on your phone, tell me what you think"
- Collect feedback (screenshots of messages)

---

## Label (20 min)

Write:
1. What is **code review**?
2. What is a **bug**?
3. What's **hallucination** in AI context?
4. Why ask real users to test?
5. One bug you found today?

---

## Common failures

| Failure | Fix |
|---|---|
| Student can't find anything wrong | Instructor plants a bug (edit their file) |
| Users don't respond | Fine for class; keep trying for homework |
| User says "I don't understand" | That's valuable feedback — note it |

---

## NOT

- Formal testing frameworks
- Unit tests (Course 1+)
- Security audit (Course 1+)
- Performance profiling (Course 2+)

Keep tight: read your code, catch bugs, get user eyes on it.
