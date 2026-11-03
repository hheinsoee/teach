# Day 7 — localStorage: Data That Persists

**Phase**: Learning (Day 7 of 8) — Habit Tracker practice COMPLETE after today
**Project**: Habit Tracker (final build day)
**Modules touched**: A, H, F
**Duration**: 90 min + 3 hr HW

---

## Learning outcomes

- **Read**: `localStorage.setItem` / `getItem` + `JSON.stringify` / `parse`
- **Understand**: browser can remember data across page reloads
- **Direct**: AI to save/restore habit state
- **Verify**: refresh page — state persists

---

## 90-min plan

| Block | Min | Activity |
|---|---|---|
| HW review | 10 | Students show buttons working |
| Concept: Where does data live? | 15 | Memory vs localStorage |
| Instructor demo | 15 | AI adds localStorage, refresh preserves state |
| Student build | 35 | Each student adds persistence to Habit Tracker |
| Label + commit | 15 | localStorage, state, JSON |

---

## Concept (15 min)

### Where does data live?

Ask: *"Habit Tracker ကို reload လုပ်ရင် ဘာဖြစ်လဲ?"*

→ Check boxes အကုန် ပျောက်။ Why? **Memory ပဲ**။

Draw:

```
JS Variables (memory)
       ↑ fast, temporary
       | lost on reload

localStorage
       ↑ stays after reload
       | per browser, per domain
```

### How to use

```javascript
// Save
localStorage.setItem("done", JSON.stringify([true, false, true, false]))

// Load
let raw = localStorage.getItem("done")
let done = JSON.parse(raw) || [false, false, false, false]
```

### Why JSON?

localStorage က **string ပဲ သိမ်းနိုင်**။ Array, object သိမ်းချင်ရင် — `JSON.stringify` နဲ့ string ပြောင်း → ပြန်ဖတ်တဲ့အခါ `JSON.parse` နဲ့ ပြန် object ပြောင်း။

**Analogy**:
- Memory = ဦးနှောက် (short-term)
- localStorage = စာအုပ် (writes it down)
- JSON = အရာကို စာအဖြစ်ပြောင်းနည်း

---

## Demo (15 min)

Prompt AI:

```
In my Habit Tracker:
- Save which habits are checked to localStorage after any change
- Load from localStorage when page loads
- If no saved state, default to all unchecked

Give me the JS. Explain where save/load happen.
```

Read AI's output:
- Where it saves: inside the change listener
- Where it loads: at page start
- `JSON.stringify` call: converts array to string
- `JSON.parse` call: converts back
- Default fallback: `|| [false, false, false, false]`

Save, push.

Reload URL. Check boxes. Reload again. **State preserved.**

Close tab. Reopen URL. **Still preserved.**

Open DevTools → Application → Local Storage → see the stored data.

---

## Student build (35 min)

Each student:
1. Prompt AI (adapted)
2. Add localStorage save/load to their `script.js`
3. Push
4. Test: check → reload → still checked
5. Add streak counter via AI: "If all done, streak +1. New day resets."
6. View localStorage in DevTools

**Instructor circulates**:
- Reload loses data → localStorage code not reached (wrong listener event)
- `JSON.parse` crashes → raw is null; need fallback
- Streak counter resets wrong → day comparison tricky

---

## Label (10 min)

Write:
1. What is **localStorage**?
2. Difference between memory and localStorage?
3. Why do we need `JSON.stringify`?
4. What does **state** mean?
5. Where does localStorage live physically?

**Pocket answers**:
- localStorage = browser's notebook, survives reload
- Memory = fast but gone on reload; localStorage = slower but saved
- Because localStorage only holds strings; JSON converts objects to strings
- State = the current situation of your app
- On your laptop, per browser, per domain

---

## Common failures

| Failure | Fix |
|---|---|
| State doesn't persist | localStorage call missing or wrong key name |
| `JSON.parse` throws error | Raw is null first time; add `\|\| default` |
| State persists but wrong data | Save after state update, not before |
| Student panics at raw JSON in DevTools | "That's normal — strings for storage" |

---

## NOT

- sessionStorage, IndexedDB, cookies (Course 1+)
- Security limits, XSS considerations (Course 1+)
- Sync across devices (Course 2+)

---

## End of Day 7 — Habit Tracker is DONE

Students should have:
- Styled Habit Tracker
- Interactive checkboxes
- Persistent state
- Counter + streak

**Habit Tracker practice project COMPLETE.** From Day 8 we start Fetch, then Days 9-12 Capstone 2 (News App).
