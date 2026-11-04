# Day 3

## JavaScript Variables & Data Types

**Code က အရာတွေကို မှတ်တတ်တယ်**

---

## ဒီနေ့ ဘာလုပ်မလဲ (90 min)

| Phase | Min | What |
|---|---|---|
| 🙋 Q&A | 25 | သင့် 3 questions |
| 💬 Discussion | 15 | Top confusions |
| 🤝 Live build | 25 | AI + code together |
| ✍️ Label | 10 | သင့်စကားနဲ့ ရေး |
| 📋 Wrap | 15 | Day 4 preview |

---

## Phase 1 — Q&A

### ⏰ 25 min

**Rule**: Each student, 1 question

ည self-study လုပ်ပြီးရင် — **3 questions** ထဲက တစ်ခု ပြော

မသိရင် → "ငါ့ကို X က confusing ဖြစ်တယ်" ဆိုရုံ ပြော

---

### Your questions on the board

(Teacher writes each student's question here)

> **Silence မဖြစ်စေနဲ့** — မေးမှသာ learning ဖြစ်တယ်

---

## Phase 2 — Discussion (15 min)

အခု အများဆုံး confusion တွေ ရှင်းပြမယ်

---

### Variable ဆိုတာ ဘာလဲ

> ဘူးထဲ ပစ္စည်းထည့်ထား
> ဘူးရဲ့ လက်ပတ်မှာ **နာမည်ရေးထား**

```javascript
let habitName = "Pray"
    ↑         ↑  ↑
   ဘူး       =  တန်ဖိုး
```

Variable = **မှတ်ထားလို့ရတဲ့ box**

---

### `let` vs `const`

```javascript
let count = 0
count = 5   // ✅ ပြောင်းလို့ရ

const name = "Hein"
name = "John"   // ❌ Error
```

| Keyword | Can change? |
|---|---|
| `let` | ✅ Yes |
| `const` | ❌ No |

**Default: `const`**, use `let` when you know it'll change

---

### Data Types — 4 အခြေခံ

```javascript
let text   = "Pray"              // string (စာလုံး)
let count  = 4                   // number (ဂဏန်း)
let done   = true                // boolean (ဟုတ်/မဟုတ်)
let list   = ["Pray", "Study"]   // array (စာရင်း)
```

**Quotes လိုအပ်မှုမရှိ**:
- `"Pray"` ✅ string
- `Pray` ❌ error (undefined variable)
- `4` ✅ number
- `"4"` ✅ string (looks like number but isn't)

---

### `console.log` ဆိုတာ ဘာလဲ

```javascript
console.log("Hello")
console.log(habitName)
console.log(count + 1)
```

**Browser DevTools → Console tab** မှာ ပေါ်

→ Debugging အတွက် အသုံးဝင်ဆုံး tool

**F12 နှိပ်** ပြီး Console tab ဖွင့်

---

## Phase 3 — Live Build

### ⏰ 25 min

အခု **AI နဲ့ အတူတူ** code ထည့်မယ်

---

### Prompt we'll use

```
Add JavaScript to script.js:
- const habits = [...]  (4 habits)
- Log number of habits
- Log first habit
- Log today's date

Simple, beginner comments.
```

- Teacher က AI ဖွင့်ထား
- ကျောင်းသားက ကိုယ့် `script.js` ပြင်
- Save → Commit → Push

---

### Expected output in Console

```
Habits: 4
First habit: Pray
Today: Mon Nov 04 2026
```

**Push လုပ်ပြီးရင် live URL မှာ ပေါ်မယ်**

Commit message: `Day 3 — add JS variables`

---

## Phase 4 — Label (10 min)

**No AI.** ကိုယ့်စကားနဲ့ ရေး:

1. What is a **variable**?
2. `let` vs `const` difference?
3. 4 data types learned?
4. What does `console.log` do?
5. Why do variables exist?

Pair-share with neighbor (3 min)

---

## Phase 5 — Wrap

### ⏰ 15 min

Today you learned:

- ✅ Variables (`let`, `const`)
- ✅ 4 data types (string, number, boolean, array)
- ✅ `console.log` for debugging

---

### Day 4 — Functions & Conditions

တနင်္လာ class — **code က decisions လုပ်တတ်အောင်**

```javascript
if (count === 4) {
    console.log("All done!")
} else {
    console.log("Keep going")
}
```

**Prework ကို Viber မှာ ၂ ရက်ကြို ပို့မယ်**

---

## 🎉 ကျေးဇူးတင်ပါတယ်

### Questions?

Class ပြီးရင်လည်း Viber မှာ မေးလို့ရ

**Homework ကို tonight လုပ်ဖို့ မမေ့နဲ့**

(3 hr: research + build + reflect)
