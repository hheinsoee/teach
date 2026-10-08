# Day 7 — Backend & API

⚠️ **The cliff starts here.** From today, failures stop being loud.
No red error, no crash — just wrong data or an open door. Staff days 7–10 heavier
than 1–6, and expect your drop-outs in this window.

## The three layers

| Layer | Today |
|---|---|
| **Understand** | Client & server · HTTP · request/response · status codes · APIs · REST · JSON |
| **Direct** | Specifying one endpoint at a time |
| **Verify** | Test with `curl` — **not** through the UI |

## Sessions in this day

> A **day** is one 2-hour meeting. A **session** is a teaching block inside it.

| Session | Title | Kind | Length |
|---|---|---|---|
| **7.1** | Client, Server & HTTP | concept | 25 min |
| **7.2** | Build the CRUD API | build | 50 min |
| **7.3** | Test With curl, Not the Browser | verify | 25 min |

## Pacing — `FITS`

| | |
|---|---|
| **Fixed** (never shorten) | 7.1 Client, Server & HTTP · 7.3 Test With curl |
| **Elastic** (absorbs overrun) | 7.2 Build the CRUD API |
| **Cut line** (goes first) | 7.2 — PATCH and DELETE to homework; GET and POST must work in class |

**Repaired:** rewiring the UI to the API moved to homework. It is mechanical work the agent does — it was never worth class time. Never cut 7.3; day 9 depends on curl.

## Timing (120 min)

| Min | Block | Content |
|---|---|---|
| 0–15 | Homework review | Discuss question 4 — "could someone bypass your form?" |
| 15–40 | Concept | Where code runs. The request/response cycle. Status codes |
| 40–100 | Build | CRUD API, in memory. Connect the existing UI to it |
| 100–115 | Verify | Everyone hits their own endpoints with `curl` |
| 115–120 | Wrap | Homework |

## The idea that unlocks the rest of the course

> **Some of your code runs on the user's computer. Some runs on yours.
> They are different computers. They only talk through HTTP.**

Most confusion for the next three days traces back to a student not knowing which
side a piece of code is on. Put it on the board and point at it constantly.

## Why curl, not the UI

The UI tests the UI. `curl` tests the API.

A student who only clicks buttons cannot tell the difference between "the server is
correct" and "the form happens to send the right thing". In day 9 that distinction
*is* the security of their app — an attacker never uses your form.

Teach `curl` today so that day 9's attack exercise is possible.

## Status codes — only these six

| Code | Meaning |
|---|---|
| 200 | fine |
| 201 | created |
| 400 | you sent something wrong |
| 401 | you are not logged in |
| 404 | not found |
| 500 | I broke |

Do not teach more. These six cover everything in this project.

## Common failures

| Failure | Fix |
|---|---|
| Does not know which side code runs on | Back to the board diagram. Ask "which computer?" |
| Returns 200 for everything, including errors | Walk through the six codes with their routes |
| Tests only via the browser form | Close the browser. `curl` only, for 15 minutes |
| CORS error | Explain it once, simply: "different origin, browser blocks it" |
| Agent builds all 5 endpoints at once | Reject it. One endpoint, one review, one commit |
