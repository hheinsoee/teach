# News API Setup — Hein's Responsibility

The Course 0 News App (Days 6-8) depends on a pre-built API that Hein hosts. Students only consume it.

**This document is for Hein (the instructor) to set up the API before Day 6.**

---

## Why Hein builds this

Students don't build backends in Course 0 (that's Course 1+). But they need to see "fetch from a server" work. So Hein hosts a tiny read-only API they consume.

Think of it as a teaching prop — not production infrastructure.

---

## Minimum API spec

- **Endpoint**: `https://api.heinsoe.com/news.json` (or any URL Hein picks)
- **Method**: GET only
- **Returns**: JSON array of 10-20 news articles
- **CORS**: must allow all origins (`Access-Control-Allow-Origin: *`)
- **No auth**: public, read-only
- **Uptime**: must be live Day 6, 7, 8 and homework windows (so Days 5-8 + 1 week after)

---

## JSON schema

Each article:

```json
{
  "id": 1,
  "title": "Myanmar tech scene grows with new coworking space",
  "image": "https://picsum.photos/400/250",
  "body": "Full article text goes here. Can be multiple sentences. Students will show this when they click to expand.",
  "date": "2026-11-03",
  "category": "tech"
}
```

Full response:

```json
[
  { "id": 1, "title": "...", ... },
  { "id": 2, "title": "...", ... },
  ...
]
```

### Field notes

- `id` — unique integer, 1 to N
- `title` — 5-15 words
- `image` — real URL that loads; placeholders OK (e.g., picsum.photos)
- `body` — 2-5 sentences, enough to show "expand" feature
- `date` — ISO format `YYYY-MM-DD`
- `category` — one of: `tech`, `sports`, `local`, `business`, `arts` (4-5 categories, 2-5 articles per category)

### Content guidance

- Mix of Burmese and English titles OK (whatever's realistic for cohort)
- Fictional articles fine — students won't fact-check
- Avoid sensitive topics (politics, religion-controversial)
- Keep it light and relatable (tech news, local events, sports, arts)

---

## Hosting options (ranked)

### Option 1 — Static JSON on GitHub Pages (easiest, recommended)

1. Create a repo: `hheinsoee/course-0-news-api`
2. Add `news.json` at root
3. Enable GitHub Pages → `main` branch, `/` root
4. URL will be: `https://hheinsoee.github.io/course-0-news-api/news.json`
5. **CORS is automatic** on GitHub Pages ✅
6. To update: edit `news.json`, commit, push — live in 30 seconds

**Pros**: free, zero config, Hein controls content
**Cons**: static (no dynamic data) — fine for Course 0

### Option 2 — Custom domain (api.heinsoe.com)

Point `api.heinsoe.com` to a Vercel / Netlify / GitHub Pages static deploy. Follow their custom domain setup.

**Pros**: nicer URL (`api.heinsoe.com/news.json`)
**Cons**: DNS setup required

### Option 3 — Serverless function (if dynamic data wanted)

Vercel / Netlify serverless function returning JSON.

**Pros**: can add dynamic features (new articles daily, randomization)
**Cons**: overkill for Course 0

---

## Sample `news.json` (starter — 10 articles)

```json
[
  {
    "id": 1,
    "title": "Yangon's first coworking space for beginners opens",
    "image": "https://picsum.photos/seed/news1/400/250",
    "body": "A new coworking space in Yangon opened its doors this week, specifically targeting beginner coders and non-technical founders. The space offers free workshops and mentorship.",
    "date": "2026-11-03",
    "category": "tech"
  },
  {
    "id": 2,
    "title": "Local football team wins regional championship",
    "image": "https://picsum.photos/seed/news2/400/250",
    "body": "The Mandalay football team secured their first regional championship in a thrilling final match. Fans celebrated across the city.",
    "date": "2026-11-02",
    "category": "sports"
  },
  {
    "id": 3,
    "title": "Traditional art festival returns to Bagan",
    "image": "https://picsum.photos/seed/news3/400/250",
    "body": "Artists from across Myanmar gathered in Bagan this weekend for the annual traditional arts festival. The event showcased lacquerware, puppetry, and classical music.",
    "date": "2026-11-01",
    "category": "arts"
  },
  {
    "id": 4,
    "title": "Mobile banking adoption hits record high",
    "image": "https://picsum.photos/seed/news4/400/250",
    "body": "Mobile banking usage in Myanmar increased 40% this year, with new users joining weekly. Experts say the trend will accelerate through 2027.",
    "date": "2026-10-30",
    "category": "business"
  },
  {
    "id": 5,
    "title": "New AI tool helps Burmese writers",
    "image": "https://picsum.photos/seed/news5/400/250",
    "body": "A local startup released an AI tool specifically trained on Burmese language, helping writers draft and edit content faster.",
    "date": "2026-10-29",
    "category": "tech"
  },
  {
    "id": 6,
    "title": "Community garden project reaches 100 participants",
    "image": "https://picsum.photos/seed/news6/400/250",
    "body": "A grassroots community garden initiative in Yangon reached 100 participants this month. Organizers plan to expand to 5 more neighborhoods.",
    "date": "2026-10-28",
    "category": "local"
  },
  {
    "id": 7,
    "title": "Marathon runners complete 42km charity race",
    "image": "https://picsum.photos/seed/news7/400/250",
    "body": "Over 2,000 runners completed a charity marathon on Sunday, raising funds for rural education.",
    "date": "2026-10-27",
    "category": "sports"
  },
  {
    "id": 8,
    "title": "Night market expands to weekdays",
    "image": "https://picsum.photos/seed/news8/400/250",
    "body": "The popular night market in downtown Yangon will now operate 7 days a week due to overwhelming demand.",
    "date": "2026-10-26",
    "category": "local"
  },
  {
    "id": 9,
    "title": "Small business loans program expanded",
    "image": "https://picsum.photos/seed/news9/400/250",
    "body": "A government program for small business loans was expanded to include first-time entrepreneurs with no collateral.",
    "date": "2026-10-25",
    "category": "business"
  },
  {
    "id": 10,
    "title": "Street photography exhibition opens Friday",
    "image": "https://picsum.photos/seed/news10/400/250",
    "body": "An exhibition of street photography from across Southeast Asia opens Friday at the central gallery.",
    "date": "2026-10-24",
    "category": "arts"
  }
]
```

---

## Fallback plan (if API breaks)

Keep a local `news.json` file as a backup. Give to students:
> *"If the API is down today, download this file and change your fetch URL to point at the local file."*

Teaches resilience — real apps have fallbacks.

---

## Testing before Day 6

Day 5 evening (before Day 6 class):

- [ ] Open `https://api.heinsoe.com/news.json` in browser — JSON loads
- [ ] Fetch from a test HTML file — no CORS errors
- [ ] Image URLs all load (click 3-4 to verify)
- [ ] At least 10 articles, 4+ categories
- [ ] Dates are formatted correctly (`YYYY-MM-DD`)
- [ ] No sensitive content

If any of these fail, fix before class.

---

## Updating during the week

If a student finds a bug or you want to add more articles mid-week, edit `news.json`, push. Deploy takes ~30 seconds. No downtime.

---

## Course 1 integration

In Course 1, students may build their OWN version of this API — with Express.js, SQLite, auth, etc. Course 0's API is the simple read-only example they'll later recreate with more depth.
