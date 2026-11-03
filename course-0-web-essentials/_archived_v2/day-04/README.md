# Day 4 — localStorage & Features

**Project**: Habit Tracker (continuing)
**Marcus stages**: 4 (Add Features)
**Modules touched**: A (state concept), H (DOM), F (AI prompting craft)
**Duration**: 90 min class + 3 hr homework

---

## Learning outcomes

Students can:
- **Read**: localStorage API calls
- **Understand**: that browser can remember things between reloads
- **Direct**: AI to add persistent storage
- **Verify**: data survives page refresh and tab close

---

## 90-minute plan

| Block | Minutes | Activity |
|---|---|---|
| Homework review | 15 | Students show counter + buttons added last homework |
| Concept: "Where does data live?" | 10 | Browser memory vs disk/localStorage |
| Demo | 15 | AI adds localStorage, students see refresh preserves state |
| Student build | 40 | Add persistence + streak counter + reset button |
| Label | 10 | localStorage? State? Save/load? |

---

## Concept phase (10 min)

Ask the class:
> *"ကိုယ့် Habit Tracker ကို ပိတ်, ဖွင့်ပြန်။ ဘာဖြစ်လဲ?"*

Answer: All checks disappear. Why?
- Browser က **memory ထဲမှာ** ထား
- Reload ရင် — memory clear → data ပျောက်

**Analogy**: 
- Browser memory → **ကိုယ့်ဦးနှောက်** (short-term memory)
- localStorage → **စာအုပ်** (writes it down, keeps it)

```
Click checkbox
       ↓
JavaScript updates variable (in memory)
       ↓
localStorage.setItem('habits', ...) ← SAVE
       ↓
Reload page
       ↓
localStorage.getItem('habits') ← LOAD
       ↓
JavaScript restores checked state
```

---

## Instructor demo (15 min)

Prompt AI:

```
I have a Habit Tracker with HTML, CSS, JS. The checkboxes work but
reset when I reload the page. I want:

- When I check a habit, save that it's checked to localStorage
- When the page loads, read localStorage and re-check the saved habits
- Also save and restore the "streak" count — how many days in a row the user hit all habits

Give me updated JS. Explain each new line.

Here is my current HTML:
[paste]
```

AI gives updated code. **Instructor reads each new piece**:

> *"ဒီ `localStorage.setItem('habits', JSON.stringify(state))` က —*
>
> *localStorage ဆိုတဲ့ စာအုပ်ထဲ 'habits' ဆိုတဲ့ စာမျက်နှာမှာ state ကို ရေးထည့်။*
>
> *`JSON.stringify` က — object ကို text ပြောင်း (localStorage က text ပဲ သိမ်းနိုင်လို့)။*"
>
> *"ဒီ `localStorage.getItem('habits')` က — စာအုပ်ဖွင့်, 'habits' စာမျက်နှာကို ဖတ်။*
>
> *`JSON.parse` က — text ကို object ပြန်ပြောင်း။"*

Reload. All checks preserved. **Close tab. Reopen.** Still preserved.

> *"ဒါပဲ — browser က 'ကိုယ့် data' ကို မှတ်ထား။"*

---

## Student build (40 min)

Each student:
1. Prompt AI (adapt demo prompt)
2. Replace their JS with the new version
3. Test: check boxes → reload → still checked
4. **Then** prompt AI for streak counter:
   - "Each day user checks all habits, streak +1. Reset streak if they miss a day."
5. **Then** prompt AI for reset button:
   - "Add a 'Reset today' button that unchecks all habits."

**Instructor circulates**:
- `JSON.parse` fails → data in localStorage was never set; add safety: `JSON.parse(raw || '[]')`
- Streak logic wrong → re-prompt with specific wording
- Reset button clears localStorage → remind: only clear today, not streak

---

## Label phase (10 min)

Write (no AI):

1. What is **localStorage**?
2. What does "save" mean in programming?
3. What does "state" mean?
4. Why does `JSON.stringify` exist?
5. What's the difference between browser memory and localStorage?

### Pocket answers

- **localStorage** — a small notebook the browser keeps for your site, surviving reloads and tab close
- **Save** — write data somewhere it won't disappear
- **State** — the current situation of your app (which habits are checked, what streak is at)
- **`JSON.stringify`** — converts a JavaScript object into a text string (localStorage can only hold text)
- **Memory vs localStorage** — memory forgets on reload; localStorage remembers

---

## Common failures

| Failure | Fix |
|---|---|
| Reload loses data | localStorage code not placed, or key name mismatch |
| Streak counts wrong | Logic edge case — missing day detection; re-prompt |
| Reset button clears everything | Specify: "clear today's checks only, not streak" |
| localStorage shows weird text | `JSON.stringify` not applied |
| Student checks localStorage in DevTools and panics at raw JSON | Explain: "that's just how data looks when saved — it's normal" |

---

## What this day is NOT

- Not sessionStorage, IndexedDB, cookies deep-dive
- Not security (localStorage limits — Course 1)
- Not sync across devices (Course 2+)
- Not database (localStorage is "local" — just this browser)

Keep tight: data saves, data loads, data persists.
