# Day 1 — Instructor Live Demo Walkthrough

**ဘာအတွက်**: ပထမ ၁၅ မိနစ်ထဲက **၅ မိနစ် live demo** ကို run through လုပ်ဖို့ step-by-step guide။

**ဘယ်လိုသုံးရမလဲ**: Class မစခင် **အနည်းဆုံး ၂ ကြိမ် ကိုယ့်ဖာသာ practice** လုပ်။ Live မှာ မအောင်မြင်ရင် motivation ကို ဆွဲချမယ်။

**စုစုပေါင်း အချိန်**: ၅ မိနစ် (ဒါပေမဲ့ pre-practice အတွက် အနည်းဆုံး ၁၅ မိနစ် ခွဲထား)

---

## Pre-demo setup (class မစခင် ၁၀ မိနစ်)

### ၁။ Browser setup
- Chrome အသစ် window တစ်ခု ဖွင့် (incognito မသုံး — login state လိုတယ်)
- Tabs ၂ ခု ဖွင့်:
  - Tab 1: `https://v0.dev` — logged in ပြီး, "New chat" ပြီးသား
  - Tab 2: `https://vercel.com/dashboard` — logged in ပြီး

### ၂။ Fallback assets ready
Live demo fail ဖြစ်ရင် ဒီ assets ကို အစားထိုးသုံး:
- **Pre-deployed URL** တစ်ခု (ဆရာ့ ကိုယ်ပိုင် landing page URL)
- **Screenshot**: v0 generated UI တစ်ခု (gallery မှာ ပြထား)
- **Screenshot**: Vercel deploy success page

### ၃။ Projector check
- Font size ကြီးထား (code သုံးစရာ မလို — ကျောင်းသား ဖတ်လို့ရရုံ)
- Browser zoom 125% (ဒါမှ သူတို့ဘေးက ကျောင်းသား မြင်)
- Audio off (notification popup တွေ silence)

### ၄။ Phone ready
- ဖုန်းကို charge full
- QR code scanner app ဖွင့်ထား (ဒါမှ URL ကို scan လုပ်ပြ လွယ်)
- WhatsApp / Telegram ဖွင့်ထား (URL ကို ကိုယ့်ဖုန်းသို့ ပို့ဖို့)

---

## Demo flow — step by step

### Step 1 — v0.dev ပြ (၃၀ စက္ကန့်)

**ပြောရမယ့်စကား**:
> *"ဒါ v0.dev — Vercel ကုမ္ပဏီက လုပ်ထားတဲ့ AI tool။ Prompt တစ်ကြောင်း ရေးလိုက်ရုံပဲ — website ထုတ်ပေးမယ်။ ကြည့်။"*

**လုပ်ရမယ့်အရာ**:
- Tab 1 (v0.dev) ကို ဖွင့်
- Prompt box ကို အာရုံပြုအောင် zoom in (optional)

---

### Step 2 — Prompt ရိုက်ထည့် (၁ မိနစ်)

**ပြောရမယ့်စကား**:
> *"ကိုယ့်အကြောင်း — personal landing page တစ်ခု ဆောက်မယ်။ ဒီ prompt ပဲ ရေးမယ်။"*

**Prompt** (type ထည့်ပြီး ကျောင်းသား ပြောင်ပြင်းမြင်ရအောင် **အရေးကြီးဆုံး အပိုင်းကို အသံထည့်ဖတ်**):

```
Build a personal landing page for a teacher named [YOUR NAME].

Include:
- A photo placeholder
- A 2-sentence bio: full-stack developer in Yangon, teaching at theBuilderPros
- 3 links: email, LinkedIn, portfolio

Modern, minimal design.
```

**ဖတ်ပြရမယ့် အသံထည့်ချက်**:
- "**personal landing page**" — ဒါ ကိုယ့်အကြောင်း page
- "**teacher named [NAME]**" — specific name ထည့်တယ်
- "**modern, minimal design**" — ဒါ constraint — AI ကို style ပြတယ်

Enter နှိပ်။

---

### Step 3 — Generate ကြည့် (၃၀-၆၀ စက္ကန့်)

**ပြောရမယ့်စကား** (generate လုပ်နေစဉ်):
> *"သူ့ဘာသာသူ layout ဆွဲနေ, color scheme ရွေးနေ, photo နေရာ ထားနေ... ကြည့်။"*

**UI ထွက်လာတဲ့အခါ**:
> *"ကြည့်။ **၃၀ စက္ကန့်ထဲ** — website တစ်ခု ထွက်လာပြီ။ ကိုယ့်နာမည်, ကိုယ့် bio, link ၃ ခု — အကုန်ပါ။"*

**သတိ**: v0 output က မကြိုက်စရာ ဖြစ်ချင်ဖြစ်မယ် — **"ကြိုက်ပြီ" ပြော**။ ဒီ moment မှာ aesthetics debate မလုပ်။ Point က — AI generate လုပ်ပေးတယ် ဆိုတာ ပြ။

---

### Step 4 — Deploy to Vercel (၁ မိနစ်)

**ပြောရမယ့်စကား**:
> *"အခု — ဒီ page က **ကိုယ့် laptop ထဲမှာပဲ** ရှိသေးတယ်။ Internet မှာ မရှိသေးဘူး။ မိတ်ဆွေကို ပြသချင်ရင် — **deploy** လုပ်ရမယ်။"*

**လုပ်ရမယ့်အရာ**:
1. v0 UI ရဲ့ **top-right corner** က "**Deploy**" button နှိပ်
2. Vercel popup window ပေါ်လာ
3. Project name — default accept (ဒါမှမဟုတ် `teacher-landing` ဆိုတဲ့ simple name)
4. **"Deploy"** button နှိပ်
5. Progress bar ပြနေ...

**Waiting time story** (၃၀-၆၀ စက္ကန့် ကြာမယ်, စိတ်ဖိစီးမှုမဖြစ်အောင် ပြော):

> *"ဒီ ၁ မိနစ်မှာ Vercel က ဘာလုပ်နေလဲ ဆိုတော့ — ကိုယ့် page ကို server တွေပေါ် upload လုပ်, URL တစ်ခု ဆောက်။ ဒီအတွက် server မပိုင်ဖို့ လိုတယ်, တကယ့် ကုမ္ပဏီတွေမှာ engineer team တွေ ဒါ လုပ်တယ်။ ကိုယ်တို့က — click ရုံပဲ။*
>
> *ကိုယ့် ပထမဆုံး deploy လုပ်တုန်းက ဒီ ၁ မိနစ်က ၁၀ မိနစ်လို ခံစားမိတယ်။ 'ဘာလို့ မပြီးသေးတာလဲ' ဆိုပြီး။ သူ့ဘာသာသူ ပြီးမှာ။"*

---

### Step 5 — URL ထွက်လာ (၁၅ စက္ကန့်)

**ပြောရမယ့်စကား**:
> *"ဪ — URL ထွက်လာပြီ။ ဒီက URL ပဲ — **`[your-url].vercel.app`**။ ဒါ internet ပေါ်မှာ ရှိနေပြီ။ ကမ္ဘာလုံးဆိုင်ရာ လူတိုင်း ဖွင့်ကြည့်လို့ရပြီ။"*

**လုပ်ရမယ့်အရာ**:
- URL ကို browser address bar ကို ကူးထား
- အသံထည့်ဖတ်ပြ: "**teacher-landing-xyz.vercel.app**"

---

### Step 6 — Phone မှာ ဖွင့်ပြ (၁ မိနစ်)

**ပြောရမယ့်စကား**:
> *"အခု ကိုယ့်ဖုန်းနဲ့ ဖွင့်ကြည့်မယ်။"*

**လုပ်ရမယ့်အရာ** (choose တစ်နည်း):

**Option A — WhatsApp/Telegram ပို့**:
1. URL ကို copy
2. ကိုယ့်ဖုန်းသို့ ကိုယ့်ဖာသာ ပို့ (ဥပမာ: Saved Messages)
3. ဖုန်းကို ကျောင်းသားကို လှည့်ပြ
4. URL ကို tap, browser မှာ ဖွင့်
5. Phone screen ကို ကျောင်းသားတွေမြင်အောင် ပြ

**Option B — QR Code** (ပိုမြန်, ပိုသိသာ):
1. QR code generator website တွေ ဖွင့် (ဥပမာ: qr-code-generator.com)
2. URL ကို paste → QR ထွက်
3. Projector မှာ QR ပြ
4. ဆရာ ဖုန်းနဲ့ scan — browser ဖွင့်
5. Phone ကို ကျောင်းသားတွေမြင်အောင် ပြ

**Phone ပြနေစဉ် ပြောရမယ့်စကား**:
> *"ကြည့်။ ဖုန်းမှာ ဖွင့်လို့ရပြီ။ ကိုယ့် မိတ်ဆွေကို URL ပို့ပေးရင် — သူတို့လည်း ဖွင့်ကြည့်လို့ရပြီ။*
>
> ***ဒါပဲ။ ဒီ ၆ မိနစ်ထဲ — personal website တစ်ခု internet ပေါ်မှာ ရှိနေပြီ***။ Code တစ်လုံးမှ မရေးရ။ HTML မသိရ။ Server မသိရ။ **Click ရုံပဲ**။"*

---

## Demo အပြီးရည်မှန်းချက်

ဒီ ၅ မိနစ် demo အပြီးမှာ ကျောင်းသား ဦးနှောက်ထဲမှာ **၃ ချက်** ဖြစ်နေရမယ်:

1. **"ဪ — ဖြစ်နိုင်တယ်"** (belief — ကိုယ်လည်း လုပ်လို့ရနိုင်မယ့် ခံစားမှု)
2. **"Code မပါဘူး, ကိုယ်လည်း လုပ်နိုင်မယ့်ပုံပဲ"** (confidence — barrier က မမြင့်ဘူး)
3. **"ကိုယ့်ဖာသာ ဘာ ship ချင်လဲ"** (motivation — စိတ်ကူး စပေါ်လာ)

ဒီ ၃ ချက် ဖြစ်မှ — ကျန်တဲ့ ၁ နာရီ ၅၀ မိနစ်မှာ ကျောင်းသား engaged ဖြစ်မယ်။

---

## Common demo problems + fallbacks

### Problem 1: v0 slow / မ generate ဖြစ်
**Response**:
> *"ဪ — ဒီနေ့ internet က နှေးနေပုံရတယ်။ ဒါ builder life ပဲ — tools တွေ perfect မဟုတ်။ ဒီအတောအတွင်း — ကိုယ့် ပထမဆုံး deploy လုပ်တုန်းက..."*

(Story တစ်ခု ပြော, generate ပြန်စမ်း)

**Fallback**: Pre-deployed URL တစ်ခု အရန်ထား → ကျောင်းသားကို QR နဲ့ ပြ

---

### Problem 2: Vercel deploy fail
**Response**:
> *"ဒါ ပထမဆုံး deploy ဆိုတော့ setting ပြဿနာ ဖြစ်မယ်။ မပူနဲ့ — ကိုယ့်ဖာသာ လုပ်တဲ့အခါ step-by-step ပြမယ်။ အခုတော့ — ကိုယ့် ပြီးသား site တစ်ခု ပြမယ်။"*

**Fallback**: Pre-deployed URL ကို ဖွင့်ပြ, phone မှာ scan ပြ

---

### Problem 3: v0 output က အရမ်း ugly
**Response**:
> *"ဒါ — AI က ပထမဆုံး guess ပဲ။ **ကိုယ့်မကြိုက်ရင် ပြန်ပြင်လို့ရတယ်**။ ဒါပေမဲ့ ဒီနေ့ ပထမဆုံး — ugly လည်း **ship**။ Perfect လိုက်နေရင် ဘာမှ ship မဖြစ်။"*

(Prompt ပြင်ဖို့ မလို — ship သွား။ "Ugly ships beat beautiful drafts" principle ကို live မှာ ပြ)

---

### Problem 4: ကျောင်းသား "ဒါ ကိုယ့်အတွက်မှ ဘာ ship ရမလဲ မသိ"
**Response** (demo ပြီးရင်):
> *"မပူနဲ့ — exercise.md မှာ templates ပေးထား။ ဒီ ပထမ exercise က **personal landing page** — ကိုယ်အကြောင်းပဲ။ Idea မလို။ ကိုယ့်နာမည်, ကိုယ့်အကြောင်း ၂ ကြောင်း — ဒါပါပဲ။"*

---

## Pre-class checklist (ဆရာ လုပ်ထားရမယ့်)

Class မစခင် ၁ နာရီ:

- [ ] v0.dev login verified
- [ ] Vercel login verified
- [ ] Test deploy တစ်ခု ပြီးထား (ဘာမှ မပြန်ဖြစ်ဘူး ဆိုတာ confirm)
- [ ] Pre-deployed fallback URL ready
- [ ] QR code generator website bookmark
- [ ] ဖုန်း charge full
- [ ] Projector + browser zoom check
- [ ] Prompt text (above) ready to paste
- [ ] Deep breath — energy ready

---

## Energy management

Demo လုပ်နေစဉ် သတိ:

**ကျောင်းသားတွေ မြင်မယ့်အရာ**:
- ဆရာ confident, excited — သူတို့လည်း excited
- ဆရာ nervous, confused — သူတို့လည်း confused
- ဆရာ bored — သူတို့ sleepy

**Micro-moments ကို emphasize**:
- v0 generate လုပ်ပြီးချိန် → **"ကြည့်!"** (point at screen, excitement)
- Deploy ပြီးချိန် → **"URL ထွက်လာပြီ!"** (celebrate)
- Phone မှာ ဖွင့်ပြီးချိန် → **"ဒါပဲ — internet ပေါ်မှာ ရှိနေပြီ!"** (big smile)

ကိုယ့်ဖာသာ excited မဖြစ်ရင် — ကျောင်းသားတွေ excited မဖြစ်ဘူး။ ပထမနေ့ energy က ၆ ပတ်လုံးရဲ့ foundation။
