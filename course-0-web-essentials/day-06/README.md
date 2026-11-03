# Day 6 — DOM & Events

**Phase**: Learning (Day 6 of 8)
**Project**: Habit Tracker
**Modules touched**: A, H, F
**Duration**: 90 min + 3 hr HW

---

## Learning outcomes

- **Read**: `querySelector`, `addEventListener` lines
- **Understand**: JS can read and change HTML live via DOM
- **Direct**: AI to make checkboxes interactive
- **Verify**: clicking updates visible state

---

## 90-min plan

| Block | Min | Activity |
|---|---|---|
| HW review | 10 | Students show loop outputs |
| Concept: DOM + events | 15 | JS as a tree walker + listener |
| Instructor demo | 15 | AI makes checkbox click do strikethrough |
| Student build | 35 | Each student makes checkboxes interactive |
| Label + commit | 15 | DOM, querySelector, event |

---

## Concept (15 min)

### DOM — Document Object Model

**ဘာလဲ**: Browser က HTML ကို "tree" အဖြစ် မြင်။ JS က အဲ့ tree ကို walk, read, change လုပ်နိုင်။

```
<body>
  ├── <h1>Habits</h1>
  ├── <ul>
  │     ├── <li>Pray</li>
  │     ├── <li>Study</li>
  │     └── <li>Exercise</li>
  └── <button>Reset</button>
```

**Find element**:
```javascript
let heading = document.querySelector("h1")
let allLis = document.querySelectorAll("li")
let button = document.querySelector("button")
```

**Change element**:
```javascript
heading.textContent = "My Habits Today"
heading.style.color = "red"
```

### Events

**ဘာလဲ**: Browser က user action တွေကို "event" အဖြစ် ပြော။ Click, type, submit, scroll...

**Listen**:
```javascript
button.addEventListener("click", function() {
    console.log("Button clicked!")
})
```

**Analogy**: Button မှာ "ကြားနေ" တယ့် ear တစ်ခု တပ်ထား။ Click တိုင်း — function run။

---

## Demo (15 min)

Prompt AI:

```
In my Habit Tracker, I want:
- When a checkbox is clicked, strike through the habit text
- When unchecked, remove strikethrough
- Add a counter at top showing "X of Y habits done"
- Update counter whenever a checkbox changes

Give me the JS. Explain each line.

My HTML has:
- h1 at top
- ul with li items; each li has text + input type=checkbox

Add an id="counter" div before the ul.
```

Read AI's output:
- `querySelectorAll("input[type=checkbox]")` — find all checkboxes
- `forEach` loop over them — set up listeners
- `addEventListener("change", ...)` — "when state changes"
- `event.target` — which checkbox was clicked
- `style.textDecoration` — change CSS from JS

Save, push, test.

---

## Student build (35 min)

Each student:
1. Prompt AI (as demo above, modified for their HTML)
2. Save `script.js`
3. Push
4. Test on live URL — clicking checkboxes should strike through text

Then iterate:
- Change strikethrough color
- When all done, change body background green

**Instructor circulates**:
- Checkbox state not changing → check listener is on `change` not `click`
- Can't find element → `querySelector` typo
- Counter not updating → listener needs to re-count after each change

---

## Label (10 min)

Write:
1. What is the **DOM**?
2. What does `querySelector` do?
3. What is an **event**?
4. What does `addEventListener` do?
5. What's the difference between HTML and DOM?

**Pocket answers**:
- DOM = browser's live tree of your page
- `querySelector` = find one element matching a selector
- Event = something that happened (click, change, submit)
- `addEventListener` = tell element to run code when event fires
- HTML = text; DOM = the live object browser builds from HTML

---

## Common failures

| Failure | Fix |
|---|---|
| JS can't find element | `<script>` runs before HTML loaded — move script to end of body, or use `defer` |
| Click doesn't do anything | Wrong event name (`click` vs `change` for checkbox) |
| Counter wrong | Need to recount AFTER each state change, not just once |

---

## NOT

- Event bubbling / delegation (Course 1)
- Virtual DOM / React (Day 12 taste)
- Shadow DOM
- Mutation observers

Keep tight: find element, listen for event, do thing.
