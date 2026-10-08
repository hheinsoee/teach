# Homework 7 — The API

**Google Classroom assignment**
**Points:** 10
**Due:** evening before Day 8
**Submit:** GitHub link + your curl transcript

---

## Part 0 — Connect the UI

Replace the fake list in your browser with real calls to your API. One instruction to
the agent, then review the diff.

## Part 1 — All four endpoints (5 points)

`GET`, `POST`, `PATCH`, `DELETE` on `/api/expenses`, connected to your UI.

Correct status codes:

- creating something returns **201**
- an id that does not exist returns **404**
- sending a bad body returns **400**
- a successful delete returns **204**

## Part 2 — The curl transcript (5 points)

Test every endpoint with `curl -i`. Paste the commands **and the responses** into
`notes/day-07.md`.

Include these failing cases:

| Test | Expected |
|---|---|
| GET an id that does not exist | 404 |
| POST with no amount | 400 |
| POST with amount as text, `"abc"` | 400 |
| DELETE an id that does not exist | 404 |
| PATCH with an empty body | 400 |

Then answer:

1. Which of your endpoints runs on the user's computer? (Careful — read it twice.)
2. If someone sends `{"amount": -500}`, what does your API do right now?
3. What stops a stranger from calling your `DELETE` endpoint?

Question 3 has an uncomfortable answer today. Write the honest one.

## Done when

- [ ] 4 endpoints work, UI uses them
- [ ] All 5 failing cases return the right code
- [ ] `notes/day-07.md` has real pasted output, not a description
- [ ] The 3 questions are answered honestly

## Submit

1. GitHub link to `notes/day-07.md`
2. GitHub link to your API code
