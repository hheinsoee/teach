---
theme: seriph
background: https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=1920
class: text-center
highlighter: shiki
transition: slide-left
title: Day 3 — JS Variables & Data Types
mdc: true
---

# Day 3

## JavaScript Variables & Data Types

<div class="pt-8">
  <span class="px-3 py-1 rounded cursor-pointer bg-white bg-opacity-10">
    Course 0 — Web Essentials | 90 min | Flipped
  </span>
</div>

<div class="pt-12 text-xl opacity-80">
  <strong>Code က အရာတွေကို မှတ်တတ်တယ်</strong>
</div>

<!--
မင်္ဂလာပါ! Day 3 ကို ကြိုဆိုပါတယ်။ ဒီနေ့ JavaScript ရဲ့ အခြေခံတဲ့ variables နဲ့ data types တွေကို လေ့လာမယ်။ ကျောင်းသား ၃ ခု ကို ပြင်ဆင်ထားရမယ် — self-study လုပ်ပြီးပြီ, 3 questions ယူလာပြီ, DevTools console ဖွင့်ထားပြီ။
-->

---
layout: default
---

## ဒီနေ့ ဘာလုပ်မလဲ (90 min)

| Phase | Min | What |
|---|---|---|
| 🙋 Q&A | 25 | သင့် 3 questions |
| 💬 Discussion | 15 | Top confusions |
| 🤝 Live build | 25 | AI + code together |
| ✍️ Label | 10 | သင့်စကားနဲ့ ရေး |
| 📋 Wrap | 15 | Day 4 preview |

<!--
90 minutes က 5 phases ဆွဲထား။ Q&A က အရေးကြီးဆုံး — ကျောင်းသားတွေ မေးခွန်း မေးရမယ်။
-->

---
layout: center
class: text-center
background: '#1e1a2e'
---

# Phase 1 — Q&A

## ⏰ 25 min

<div class="pt-8 text-xl">

**Rule**: Each student, 1 question

ည self-study လုပ်ပြီးရင် — <strong>3 questions</strong> ထဲက တစ်ခု ပြော

မသိရင် → "ငါ့ကို X က confusing ဖြစ်တယ်" ဆိုရုံ ပြော

</div>

<!--
Round-robin ကိုယ့်ဖာသာ ပါ — ကျောင်းသားတစ်ယောက်ချင်း မေးခွန်းတစ်ခု။ Silence ရှိရင် 30 seconds စောင့်, ပြီးရင် seed questions ထည့်။
-->

---
layout: default
background: '#1e1a2e'
---

## Your questions on the board

<div class="pt-12 text-center text-2xl opacity-80">
(Teacher writes each student's question here)
</div>

<div class="pt-16 text-center">

> <strong class="text-pink-400">Silence မဖြစ်စေနဲ့</strong> — မေးမှသာ learning ဖြစ်တယ်

</div>

<!--
Board/whiteboard မှာ question တွေအားလုံး ချထား။ Pattern ရှာ — 5 ယောက်က let/const ကို မေးရင်, ဒါ discussion phase ရဲ့ main topic။
-->

---
layout: center
---

# Phase 2 — Discussion

## ⏰ 15 min

<div class="pt-8 text-xl">
အခု အများဆုံး confusion တွေ ရှင်းပြမယ်
</div>

---

## Variable ဆိုတာ ဘာလဲ

> ဘူးထဲ ပစ္စည်းထည့်ထား
> ဘူးရဲ့ လက်ပတ်မှာ <strong>နာမည်ရေးထား</strong>

```javascript
let habitName = "Pray"
    ↑         ↑  ↑
   ဘူး       =  တန်ဖိုး
```

Variable = <strong>မှတ်ထားလို့ရတဲ့ box</strong>

<!--
Analogy က အရေးကြီးဆုံး — ဘူး concept ကို ကျောင်းသားတွေ ချက်ချင်း ရ။
-->

---

## `let` vs `const`

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

<strong class="text-yellow-400">Default: <code>const</code></strong>, use <code>let</code> when you know it'll change

<!--
Industry rule — default const, ပြောင်းဖို့ သိတဲ့ အခါမှ let သုံး။ Immutability က bugs ကာကွယ်။
-->

---

## Data Types — 4 အခြေခံ

```javascript
let text   = "Pray"              // string (စာလုံး)
let count  = 4                   // number (ဂဏန်း)
let done   = true                // boolean (ဟုတ်/မဟုတ်)
let list   = ["Pray", "Study"]   // array (စာရင်း)
```

**Quotes လိုအပ်မှုမရှိ**:

- <code>"Pray"</code> ✅ string
- <code>Pray</code> ❌ error (undefined variable)
- <code>4</code> ✅ number
- <code>"4"</code> ✅ string (looks like number but isn't)

<!--
Type confusion က beginner ရဲ့ အကြီးဆုံး ပြဿနာ။ "4" string vs 4 number ကို အရေးအတွက်မှ ထုတ်ပြ။
-->

---

## `console.log` ဆိုတာ ဘာလဲ

```javascript
console.log("Hello")
console.log(habitName)
console.log(count + 1)
```

<strong class="text-yellow-400">Browser DevTools → Console tab</strong> မှာ ပေါ်

→ <em class="text-green-400">Debugging အတွက် အသုံးဝင်ဆုံး tool</em>

<strong>F12 နှိပ်</strong> ပြီး Console tab ဖွင့်

<!--
Live demo — teacher laptop မှာ DevTools ဖွင့်, console.log ပြ။ ကျောင်းသားတွေ ကိုယ့်ဖာသာ ဖွင့်ကြည့်။
-->

---
layout: center
class: text-center
background: '#0f1e1a'
---

# Phase 3 — Live Build

## ⏰ 25 min

<div class="pt-8 text-xl">
အခု <strong class="text-green-400">AI နဲ့ အတူတူ</strong> code ထည့်မယ်
</div>

<div class="pt-4 opacity-80">
ဆရာက AI prompt ထည့်မယ်။ ကျောင်းသားက ကိုယ့် <code>script.js</code> ပြင်မယ်။
</div>

---
background: '#0f1e1a'
---

## Prompt we'll use

```
Add JavaScript to script.js:
- const habits = [...]  (4 habits)
- Log number of habits
- Log first habit
- Log today's date

Simple, beginner comments.
```

- Teacher က AI ဖွင့်ထား
- ကျောင်းသားက ကိုယ့် <code>script.js</code> ပြင်
- Save → Commit → Push

<!--
AI ဖွင့်ထား — ChatGPT ဒါမှမဟုတ် Claude။ Projector မှာ prompt ရိုက်။ Output က code လာရင် line-by-line ပြော။
-->

---
background: '#0f1e1a'
---

## Expected output in Console

```
Habits: 4
First habit: Pray
Today: Mon Nov 04 2026
```

<strong class="text-green-400">Push လုပ်ပြီးရင် live URL မှာ ပေါ်မယ်</strong>

Commit message: <code>Day 3 — add JS variables</code>

<!--
Live URL check ကိုယ့်ဖာသာ — ကျောင်းသားတွေရဲ့ phone/browser မှာ ဖွင့်ကြည့်။ Group chat မှာ URL တွေ share။
-->

---
layout: center
---

# Phase 4 — Label

## ⏰ 10 min

<strong class="text-pink-400">No AI.</strong> ကိုယ့်စကားနဲ့ ရေး:

1. What is a <strong>variable</strong>?
2. <code>let</code> vs <code>const</code> difference?
3. 4 data types learned?
4. What does <code>console.log</code> do?
5. Why do variables exist?

<div class="pt-4 text-green-400">
Pair-share with neighbor (3 min)
</div>

<!--
AI မသုံးဘဲ ကိုယ့်ဖာသာ ရေး။ Paper ဒါမှမဟုတ် notes app။ 5 မိနစ်ရေး, 3 မိနစ် partner နဲ့ ဝေမျှ, 2 မိနစ် ဝေမျှစေ့ ဝေမျှ class နဲ့။
-->

---
layout: center
class: text-center
background: linear-gradient(135deg, #1e2130, #0b0d12)
---

# Phase 5 — Wrap

## ⏰ 15 min

Today you learned:

- ✅ Variables (<code>let</code>, <code>const</code>)
- ✅ 4 data types (string, number, boolean, array)
- ✅ <code>console.log</code> for debugging

---
background: linear-gradient(135deg, #1e2130, #0b0d12)
---

## Day 4 — Functions & Conditions

နောက်တနင်္လာ class — <strong class="text-yellow-400">code က decisions လုပ်တတ်အောင်</strong>

```javascript
if (count === 4) {
    console.log("All done!")
} else {
    console.log("Keep going")
}
```

<div class="pt-4 text-green-400">
<strong>Prework ကို Viber မှာ ၂ ရက်ကြို ပို့မယ်</strong>
</div>

<!--
Day 4 preview — functions and conditions. Tonight homework က 3 hours ပြီးထား။
-->

---
layout: center
class: text-center
background: linear-gradient(135deg, #0b0d12, #1e2130)
---

# 🎉 ကျေးဇူးတင်ပါတယ်

## Questions?

<div class="pt-8 opacity-80">
Class ပြီးရင်လည်း Viber မှာ မေးလို့ရ
</div>

<div class="pt-4 text-yellow-400">
<strong>Homework ကို tonight လုပ်ဖို့ မမေ့နဲ့</strong>
</div>

<div class="pt-2 opacity-60 text-sm">
(3 hr: research + build + reflect)
</div>

<!--
Thank you + reminder — homework က အရေးကြီးဆုံး။ Viber မှာ 3 questions for Day 4 ပို့ပေးဖို့ မေ့ပြော။
-->
