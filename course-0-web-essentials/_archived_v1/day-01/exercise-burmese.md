# Day 1 — လက်တွေ့ လေ့ကျင့်ခန်း (မြန်မာဘာသာ)

**ပန်းတိုင်**: ဒီနေ့ ပြီးရင် — မင်းဆီမှာ internet ပေါ်မှာ URL တစ်ခု ရှိနေမယ်။ ဖုန်းနဲ့ ဖွင့်လို့ရမယ်။ မိတ်ဆွေကို ပို့လို့ရမယ်။

---

## မင်း ဘာလုပ်မှာလဲ

**ကိုယ့်အကြောင်း website တစ်ခု** — Personal landing page လို့ ခေါ်တယ်။ စာမျက်နှာ တစ်ခုတည်း, မင်းအကြောင်း ပြောတဲ့ website။

ထည့်ရမယ့်အရာ:
- အကျိုးချုပ် ၂ ကြောင်း (မင်း ဘယ်သူလဲ, ဘာလုပ်လဲ)
- ဓာတ်ပုံ တစ်ပုံ (ဒါမှမဟုတ် placeholder)
- Link ၂-၃ ခု (email, Facebook, Instagram — မင်းကြိုက်ရာ)

**Design က အရမ်း ပြင်ဖို့ မကြိုးစားနဲ့**။ ပန်းတိုင်က — **internet မှာ ရှိအောင် ထည့်ဖို့** ပဲ, လှလှ ပြင်ဖို့ မဟုတ်။

---

## အဆင့် ၁ — v0.dev ဖွင့် (၂ မိနစ်)

1. **https://v0.dev** သွား
2. "Sign in with Google" နှိပ်, ကိုယ့် Gmail နဲ့ login
3. မျက်နှာပြင်အလယ်မှာ prompt box တစ်ခု မြင်ရမယ်

**မပြီးရင်**: ဆရာကို ချက်ချင်း ပြော။ ဒီအဆင့် မပြီးဘဲ ကျန်တာ မလုပ်လို့ရဘူး။

---

## အဆင့် ၂ — Prompt ရေး (၁၀ မိနစ်)

ဒီ prompt ကို copy လုပ်, prompt box ထဲ paste လုပ်။ `[brackets]` ထဲက အရာတွေပဲ ပြင်:

```
Build a personal landing page for [YOUR NAME].

Include:
- A photo placeholder
- A 2-sentence bio: [who you are, what you do]
- 3 links: email, Facebook, and [one other]

Modern, minimal design. Mobile-friendly.
```

**ဥပမာ** (မင်း ပြင်ထားတဲ့ပုံစံ):

```
Build a personal landing page for Hein Soe.

Include:
- A photo placeholder
- A 2-sentence bio: Full-stack developer based in Yangon.
  Passionate about teaching beginners how to build with AI.
- 3 links: email, Facebook, and LinkedIn

Modern, minimal design. Mobile-friendly.
```

**Enter နှိပ်**။ v0 က ၃၀-၆၀ စက္ကန့်ထဲမှာ page ထုတ်ပေးမယ်။

**မကြိုက်ရင်**: v0 ကို အောက်က chat box မှာ ပြန်ပြော။ ဥပမာ:
- "Make the background darker"
- "Make the photo bigger"
- "Add a section with my skills"
- "Change the color to blue"

**၂-၃ ကြိမ် ပြန်ပြင်**, ပြီးရင် ရပ်။ **"ကောင်းပြီ" ဆိုတာ လုံလောက်တယ်**။ Perfect မလိုက်ဘူး။

---

## အဆင့် ၃ — Vercel ကို Deploy (၅ မိနစ်)

1. v0 မှာ **ညာဘက်ထိပ်** က "**Deploy**" button နှိပ်
2. Vercel popup window ပေါ်လာ
3. "Sign in with Google" နှိပ် (ဒါမှမဟုတ် GitHub)
4. Project name — default ထားလို့ရ, သို့မဟုတ် `my-landing` ဆိုတဲ့ simple name
5. **"Deploy"** button နှိပ်
6. ၁-၂ မိနစ် စောင့်။ Progress bar မြင်ရမယ်။
7. ပြီးရင် URL တစ်ခု မြင်ရမယ် — ဥပမာ: `my-landing-xyz.vercel.app`

**ဒီ URL က မင်း mini-app internet ပေါ်မှာ ရှိနေပြီ**။ ကမ္ဘာလုံးဆိုင်ရာ လူတိုင်း ဖွင့်ကြည့်လို့ရပြီ။

---

## အဆင့် ၄ — ဖုန်းနဲ့ ဖွင့်ကြည့် (၃ မိနစ်)

1. URL ကို **copy** လုပ်
2. ကိုယ့်ဖုန်းသို့ ပို့ (WhatsApp Saved Messages, Telegram Saved Messages, သို့မဟုတ် ကိုယ့်ဖာသာ email ပို့)
3. ဖုန်းမှာ URL ကို tap
4. မင်း website က ဖုန်းမှာ ဖွင့်လာမယ်

**ကောင်းကောင်း မြင်ရလား?** မကောင်းရင် v0 ပြန်သွား, "Make it mobile-friendly" ဆိုတဲ့ prompt ပေါင်းထည့်, redeploy။

---

## အဆင့် ၅ — မိတ်ဆွေနဲ့ share (၅ မိနစ်)

1. မင်းဘေးက ကျောင်းသားကို မင်းဖုန်း ပေး
2. သူက မင်း URL ကို **သူ့ဖုန်းနဲ့** ဖွင့်ကြည့်
3. သူ့ဖုန်းမှာ မင်း website ပေါ်မှာ မြင်ရရင် — **"ship" ဖြစ်ပြီ**

**ဒါ test ပဲ** — မင်း URL က တကယ့် internet ပေါ်မှာ ရှိရင် တခြားသူ့ဖုန်းမှာ ဖွင့်လို့ရရမယ်။ မဖွင့်လို့ရရင် — ship မဖြစ်သေးဘူး။ ဆရာကို ပြော။

---

## အဆင့် ၆ — Label (AI မပါ)

**v0 နဲ့ ChatGPT ကို ပိတ်**။ စာရွက်တစ်ရွက်မှာ ဒါမှမဟုတ် notes app မှာ ကိုယ့်စကားနဲ့ ရေး:

၁။ **URL** ဆိုတာ ဘာလဲ? (ဝါကျ တစ်ကြောင်း)

၂။ **"Deploy"** က ဘာလုပ်ပေးခဲ့လဲ? (တစ်ကြောင်း)

၃။ **Prompt** ဆိုတာ ဘာလဲ? (တစ်ကြောင်း)

၄။ ဒါ ဘာလို့ **mini-app** လို့ခေါ်တာလဲ, webpage မဟုတ်ဘဲ? (တစ်ကြောင်း)

**မင်း ဒီအဖြေတွေကို ကျောင်းသားတွေနဲ့ မျှဝေမယ်**။ Grade မပေးဘူး — ပန်းတိုင်က မင်းလုပ်ခဲ့တာကို **စကားလုံးနဲ့ ချိတ်ဖို့**။

---

## ပြီးစီးချိန် checklist

- [ ] `.vercel.app` နဲ့ ဆုံးတဲ့ URL တစ်ခု ရှိ
- [ ] မင်း ဖုန်းနဲ့ URL ဖွင့်ကြည့်ပြီ
- [ ] မင်းဘေးက ကျောင်းသား သူ့ဖုန်းနဲ့ မင်း URL ဖွင့်ပြီ
- [ ] Label အဖြေ ၄ ချက် ရေးပြီ (AI မပါ)
- [ ] ဆရာကို URL ပြပြီ

---

## စောစီးစွာ ပြီးရင်

- မိတ်ဆွေ သို့ မိသားစုအတွက် **ဒုတိယ** landing page တစ်ခု ဆောက်
- အတူတူ prompt ကို **Lovable.dev** မှာ စမ်း — ဘယ်လို ကွာလဲ ကြည့်

**မင်း page ကို ၃၀ မိနစ် လှလှ ပြင်မကြိုးစားနဲ့**။ ဒါ မနက်ဖြန် homework။ ဒီနေ့ ပန်းတိုင်က — **ship**။

---

## စည်းကမ်း ၃ ချက်

၁။ **Perfect မလိုက်**။ Ugly URL က beautiful draft ထက် တန်ဖိုးရှိ။

၂။ **မသိရင် မေး**။ ဆရာကိုမေးတာ **အားနည်းချက် မဟုတ်**။ Beginner တိုင်း မေးရတယ်။

၃။ **AI ကို Label မှာ မသုံး**။ Label က မင်း ကိုယ့်ဖာသာ ဘာလုပ်ခဲ့တယ် ဆိုတာ သိရှိဖို့ — AI က မင်း အစား ပြန်ပြော မပေးနိုင်။

---

## အထာ (ကိုယ့်ဖာသာ သတိရရန်)

- **"ဘာလို့အလုပ်လုပ်လဲ"** သိဖို့ မလို — အခု အခုမှ မလို။ Course 1 မှ သိရမယ်။
- **"How" အရင်, "Why" နောက်မှ** — ဒါ ဒီ course ရဲ့ စည်းကမ်း။
- **"ငါ မှားမိုးထားတဲ့ ထင်မြင်မှုတွေ ရှိနိုင်"** — vibe coder ဖြစ်ချင်ဖြစ်မယ်။ ဒါပေမဲ့ မပူနဲ့ — Label က မင်းကို အမှန်တကယ် သိအောင် လုပ်ပေးမယ်။
- **Builder life က trial-and-error ပဲ** — Perfect ကို မကြိုးစား, iterate ပေါ့။

ဒီ ၆ ပတ်ကို enjoy လုပ်။ မင်း ဘာမဆို ship လုပ်နိုင်ပြီ — ဒါ သိပ်မိုက်တယ်။
