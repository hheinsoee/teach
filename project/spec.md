# The Project — Expense Tracker

Every student builds this same app in days 6–11. It is the spine of the course.

## Why this app

| Requirement | How this app covers it |
|---|---|
| One-to-many relationship | One user has many expenses |
| Meaningful queries | Total by category, total by month |
| Obvious auth boundary | You must never see another user's expenses |
| Fast to demo | Add an expense, see the total change — 30 seconds |
| Silent-failure teaching | Wrong category, wrong user id, wrong month — nothing crashes |

Do **not** let students pick their own app for days 6–11. When ten students have
ten different schemas, in-class debugging cannot be run as a group and the instructor
loses the room. Re-theming is allowed in day 12.

## Features

### Must have (days 6–11)

1. Sign up and log in
2. Add an expense: amount, category, note, date
3. List my expenses, newest first
4. Edit and delete my own expense
5. Filter by category and by month
6. See total spent this month, and total per category

### Must not have

- Sharing, teams, or multi-user accounts
- File uploads or receipt images
- Payment integration
- Mobile app

Scope creep is the most common way a student fails to finish. The feature list is closed.

## Data model

Students design this themselves in day 8 **before** seeing this section.
Use it only to check their work.

```
users
  id            primary key
  email         unique, not null
  password_hash not null
  created_at

expenses
  id          primary key
  user_id     foreign key -> users.id, not null
  amount      not null          (store the smallest currency unit, as an integer)
  category    not null
  note        nullable
  spent_on    date, not null    (the date of the expense, not the row's creation time)
  created_at
```

### The four decisions students must be able to defend (rubric 6)

| Decision | Why it matters |
|---|---|
| `amount` is an integer, not a float | Floats lose money. `0.1 + 0.2 != 0.3` |
| `spent_on` is separate from `created_at` | You can enter yesterday's lunch today |
| `user_id` is on every expense | Without it there is no ownership, and no security |
| `category` is a plain column, not a table | Deliberate simplification — know that it is one |

## API surface

| Method | Route | Returns |
|---|---|---|
| `POST` | `/api/expenses` | the created expense |
| `GET` | `/api/expenses?category=&month=` | my expenses only |
| `PATCH` | `/api/expenses/:id` | the updated expense |
| `DELETE` | `/api/expenses/:id` | 204 |
| `GET` | `/api/summary?month=` | total, and total per category |

Every route is authenticated. Every query is scoped to the logged-in user.

## The security test (rubric 5)

Two accounts, A and B. Logged in as A, call:

```
GET    /api/expenses/<B's expense id>
PATCH  /api/expenses/<B's expense id>
DELETE /api/expenses/<B's expense id>
```

All three must return **404**, not 403.

> 403 says "this exists and it isn't yours" — that leaks the existence of the row.
> 404 says nothing. Students should be able to explain this distinction.
