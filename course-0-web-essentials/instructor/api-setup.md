# News API Setup — Hein's Responsibility

Capstone 2 (News App, Days 9-12) depends on a pre-built API Hein hosts.

**Must be live before Day 9.**

---

## Why

Students don't build backends in Course 0 (Course 1+ territory). They **consume** an API Hein provides.

---

## Minimum spec

- **Endpoint**: `https://api.heinsoe.com/news.json` (or chosen URL)
- **Method**: GET only
- **Returns**: JSON array of 10-20 articles
- **CORS**: `Access-Control-Allow-Origin: *`
- **No auth**: public, read-only
- **Uptime**: live Days 9-12 + 1 week post-course

---

## JSON schema per article

```json
{
  "id": 1,
  "title": "Myanmar tech scene grows with new coworking space",
  "image": "https://picsum.photos/seed/news1/400/250",
  "body": "Full article text. 2-5 sentences for click-to-expand feature.",
  "date": "2026-11-04",
  "category": "tech"
}
```

Full response:
```json
[
  { "id": 1, ... },
  { "id": 2, ... },
  ...
]
```

### Fields
- `id` — unique int
- `title` — 5-15 words
- `image` — real URL (picsum.photos OK for placeholder)
- `body` — 2-5 sentences
- `date` — `YYYY-MM-DD`
- `category` — one of: `tech`, `sports`, `local`, `business`, `arts`

### Content
- 10-20 articles total
- 4-5 categories, 2-5 articles per category
- Burmese/English titles OK
- Avoid controversy (politics, religious debates)

---

## Hosting (easiest)

### Option 1 — GitHub Pages static JSON

1. Create repo `course-0-news-api`
2. Add `news.json` at root
3. Enable Pages (main branch, root)
4. URL: `https://hheinsoee.github.io/course-0-news-api/news.json`
5. CORS enabled automatically on GitHub Pages

### Option 2 — Custom domain

Point `api.heinsoe.com` → Vercel static deploy.

---

## Sample `news.json` (10 articles starter)

```json
[
  {
    "id": 1,
    "title": "Yangon's first coworking space for beginners opens",
    "image": "https://picsum.photos/seed/news1/400/250",
    "body": "A new coworking space in Yangon opened this week for beginner coders.",
    "date": "2026-11-03",
    "category": "tech"
  },
  {
    "id": 2,
    "title": "Local football team wins regional championship",
    "image": "https://picsum.photos/seed/news2/400/250",
    "body": "The Mandalay football team secured their first regional championship.",
    "date": "2026-11-02",
    "category": "sports"
  },
  {
    "id": 3,
    "title": "Traditional art festival returns to Bagan",
    "image": "https://picsum.photos/seed/news3/400/250",
    "body": "Artists gathered in Bagan for the annual traditional arts festival.",
    "date": "2026-11-01",
    "category": "arts"
  },
  {
    "id": 4,
    "title": "Mobile banking adoption hits record high",
    "image": "https://picsum.photos/seed/news4/400/250",
    "body": "Mobile banking usage in Myanmar increased 40% this year.",
    "date": "2026-10-30",
    "category": "business"
  },
  {
    "id": 5,
    "title": "New AI tool helps Burmese writers",
    "image": "https://picsum.photos/seed/news5/400/250",
    "body": "A local startup released an AI tool trained on Burmese language.",
    "date": "2026-10-29",
    "category": "tech"
  },
  {
    "id": 6,
    "title": "Community garden project reaches 100 participants",
    "image": "https://picsum.photos/seed/news6/400/250",
    "body": "A grassroots community garden initiative in Yangon reached 100 participants.",
    "date": "2026-10-28",
    "category": "local"
  },
  {
    "id": 7,
    "title": "Marathon runners complete 42km charity race",
    "image": "https://picsum.photos/seed/news7/400/250",
    "body": "Over 2,000 runners completed a charity marathon for rural education.",
    "date": "2026-10-27",
    "category": "sports"
  },
  {
    "id": 8,
    "title": "Night market expands to weekdays",
    "image": "https://picsum.photos/seed/news8/400/250",
    "body": "The popular night market in downtown Yangon will operate 7 days a week.",
    "date": "2026-10-26",
    "category": "local"
  },
  {
    "id": 9,
    "title": "Small business loans program expanded",
    "image": "https://picsum.photos/seed/news9/400/250",
    "body": "A government program expanded to include first-time entrepreneurs.",
    "date": "2026-10-25",
    "category": "business"
  },
  {
    "id": 10,
    "title": "Street photography exhibition opens Friday",
    "image": "https://picsum.photos/seed/news10/400/250",
    "body": "An exhibition of street photography from across Southeast Asia opens Friday.",
    "date": "2026-10-24",
    "category": "arts"
  }
]
```

---

## Testing before Day 9

- [ ] Open URL in browser → JSON loads
- [ ] Fetch from test HTML file → no CORS error
- [ ] All images load (click 3-4)
- [ ] At least 10 articles, 4+ categories

---

## Fallback plan

Keep `news.json` as local file for students to use if API breaks mid-class:

> *"API is down today. Download this file, change your fetch URL to `./news.json`"*

Teaches resilience — real apps have fallbacks.

---

## Course 1 integration

In Course 1, students build their OWN version of this API with Express + SQLite. Course 0's API is the simple read-only example they'll later recreate with depth.
