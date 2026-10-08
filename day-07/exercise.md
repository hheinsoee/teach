# Day 7 — In Class

## The idea

> Some of your code runs on **the user's computer** (the browser).
> Some runs on **your computer** (the server).
> They are different machines. They talk only by sending messages.

That message exchange is HTTP:

```
browser  ---- "GET /api/expenses"  ---->  server
browser  <---  200 + [ {...}, {...} ]  --  server
```

Every single thing your app does across the network is one of these round trips.

## Status codes — the six you need

| Code | Meaning |
|---|---|
| 200 | fine |
| 201 | created something |
| 400 | you sent me something wrong |
| 401 | you are not logged in |
| 404 | not found |
| 500 | I broke |

## Part 1 — Build the API (50 min)

Still no database. Keep the expenses in a variable on the server.

One endpoint at a time. Review every diff. Test each one before moving on:

| Method | Route | Does |
|---|---|---|
| `GET` | `/api/expenses` | returns the list |
| `POST` | `/api/expenses` | adds one, returns it with 201 |
| `PATCH` | `/api/expenses/:id` | updates one |
| `DELETE` | `/api/expenses/:id` | deletes one, returns 204 |

## Part 2 — Test with curl, not the browser (15 min)

```bash
curl http://localhost:3000/api/expenses

curl -X POST http://localhost:3000/api/expenses \
  -H "Content-Type: application/json" \
  -d '{"amount":350,"category":"food","note":"coffee","spent_on":"2026-03-01"}'

curl -i http://localhost:3000/api/expenses/999
```

That last `-i` shows the status code. Asking for an id that does not exist should
give you **404**, not 200.

### Why not just use the form?

Your form sends whatever you programmed it to send. `curl` sends whatever *you* want.

Anyone on the internet can send your server anything — they will never use your form.
If you only ever test by clicking buttons, you only ever test the nice case.

In day 9 you will attack your own app. You need `curl` to do it.

## Connecting the UI — this is homework

Replacing the browser's fake list with real calls to your API is mechanical work the
agent does in one instruction. It is not worth class time. Do it tonight.

Class time is for the part you cannot do alone: knowing whether the server is actually
correct, which is what `curl` just showed you.
