# Day 1 — Bound Your Context, Ship Your First Mini-App

**Instructor plan.** 120 minutes. Goal: every student leaves with a live URL they can open on their phone.

> **If a student leaves without a URL, this day failed.** No exceptions. Setup problems are addressed in-room, not deferred to homework.

---

## What they understand by the end

- A website is a thing on the internet, reached by a URL
- A deploy is the step that puts the thing on the internet
- A mini-app = problem + URL + usable by someone else
- v0.dev generates UI from prompts; Vercel hosts it

## What they can do by the end

- Prompt v0.dev for a landing page
- Deploy to Vercel
- Open the live URL on their phone
- Share the URL with another person

## What they can label by the end

**URL · deploy · mini-app · prompt · tool**

---

## Prerequisites (verify at start)

Every student must arrive with:

- Laptop + Chrome
- Email account (Gmail preferred, for Vercel/v0 login)
- v0.dev account (sign in with Google)
- Vercel account (sign in with GitHub or Google)
- (Optional) GitHub account

See [`instructor/tool-setup.md`](../instructor/tool-setup.md). **If accounts are missing, the first 15 minutes become account creation — budget for this if students did not do pre-reading.**

---

## 120-minute plan

| Block | Minutes | Activity |
|---|---|---|
| Welcome + why we're here | 10 | What this course promises (and doesn't). Show a mini-app shipped by a previous student. |
| Account check | 5 | Everyone opens v0.dev and Vercel in a tab. Fix stragglers now. |
| **Experience** — build & ship | 60 | Student prompts v0 → deploys → opens URL on phone |
| **Label** — vocabulary | 20 | Each student writes down what they just did, no AI. Then shares. |
| **Transfer** — the pattern | 15 | Instructor shows: Lovable looks different, same pattern. ChatGPT with artifacts: same pattern. |
| Verify + homework brief | 10 | Everyone reads their URL out loud. Homework assigned. |

---

## Experience phase (60 min) — minute-by-minute

**0-5 min — Everyone opens v0.dev**
Instructor demos one prompt (not the student's). Shows what "good enough first prompt" looks like.

**5-25 min — Students prompt v0**
Everyone picks: landing page about themselves. Instructor gives a prompt template on the whiteboard:

```
Build a personal landing page for a person named [NAME].
Include: a photo placeholder, a short bio (2 sentences),
and 3 links (email, LinkedIn, one other).
Modern design, minimal.
```

Students iterate until they see something they like. **No style debate** — "it looks fine" is fine. The point is deploying, not design.

**25-40 min — Deploy to Vercel**
v0 has a "Deploy to Vercel" button. Click it. First-timer walkthrough:
- Vercel asks for a project name — accept default
- Vercel builds (shows a progress bar)
- Vercel gives a URL ending in `.vercel.app`

**40-55 min — Open URL on phone**
Students send themselves the URL (email, message). Open on phone. Hand phone to the person next to them.

> **This is the dopamine moment.** Protect it. Do not interrupt with concepts.

**55-60 min — Buffer for stragglers**
Anyone whose deploy failed, instructor sits with them. Common causes: wrong Vercel account, popup blocker, slow network. Fix now; do not defer.

---

## Label phase (20 min)

Each student writes down, on paper or notes app, **without AI**:

1. What is a URL? (one sentence)
2. What did "deploy" do? (one sentence)
3. What is a prompt? (one sentence)
4. Why is this a mini-app and not just a webpage? (one sentence)

Then: **2 students read theirs aloud.** Instructor does not correct — asks the class to improve.

> **This is the first vibe-coder check.** A student who shipped but can't answer these is already at risk. Mark them in your notebook and watch across days 2-3.

**Instructor pocket answers** (for guidance, not for lecturing):

- **URL** — an address on the internet; type it into a browser and the site loads
- **Deploy** — copy the thing from v0 onto a server that's always on, so anyone can reach it
- **Prompt** — an instruction in words to an AI tool
- **Mini-app** — it solves a problem for someone, and that person can use it from their own device

---

## Transfer phase (15 min)

Instructor opens Lovable.dev in front of class. Same prompt. Students see:
- Different UI, different design
- Same pattern: prompt → generate → deploy

Then instructor shows ChatGPT or Claude generating an HTML artifact. Same pattern again.

**The lesson:** the tools will change next year. The pattern is "describe → generate → put on internet." That is the mini-app pattern.

---

## Verify + wrap (10 min)

- Every student reads their URL aloud. Instructor opens one on screen for sanity check.
- Homework brief (next 5 min): ship **another** mini-app for someone else (friend, family). Different topic. Due evening before day 2.

---

## Common failures (what actually goes wrong)

| Failure | What happens | Fix |
|---|---|---|
| No v0 account | Student stuck at step 1 | Pre-work email a week before — but still budget 15 min day-of |
| Vercel deploy fails ("project name taken") | Student picks a popular name | Suggest `name-landing-01` pattern |
| v0 preview looks ugly, student spirals on redesign | Burns 40 min on CSS | Enforce: "ship, then prettify" — the ugly URL counts |
| Student finishes in 20 min, bored | Does another one unprompted | Great. Suggest a mini-app for a family member — gets them a head start on homework |
| Student says "I did this before with Lovable" (vibe coder) | Rushes through, skips Label | **Do not let them skip Label.** Make them explain to the class. If they can't, they haven't done it. |
| URL doesn't load on phone (works on laptop) | Vercel deploy still processing | Wait 2 min; usually resolves |
| Student designs on paper first, never prompts | Analysis paralysis | "Prompt now, iterate" — stop them planning |

---

## Vibe coder watch (day 1)

Students who claim prior experience ("I used v0 before", "I built a thing with ChatGPT"):

- **Do not exempt them.** They do Label phase like everyone else.
- Ask them specifically: "What did Vercel do that v0 didn't?" If they can't separate the tools, they're coasting on vibes.
- Pair them with a true beginner for the Label phase — forces them to teach, which reveals gaps.

See [`instructor/vibe-check-playbook.md`](../instructor/vibe-check-playbook.md) for the full approach.

---

## What this day is NOT

- Not an HTML lesson
- Not a Vercel deep-dive
- Not a CSS tutorial
- Not a "what is the internet" lecture

If an instructor finds themselves explaining DNS or HTTP, they have left the lesson plan. Return to: build, deploy, open URL, label.
