# Day 9 — Auth Setup Steps

Hand this to students with [`day-09/prework.md`](../day-09/prework.md), posted right
after Day 8.

**Run it yourself on a clean clone of the template first.** The Day 9 repair depends on
students arriving with a working login. If you have not tested these steps on the
current version of Node and the current package versions, you have not done the prep.

---

## 1. Install

```
npm install bcrypt express-session
```

> `bcrypt` compiles native code. If it fails to install, use `bcryptjs` instead —
> same API, pure JavaScript, slower but fine for this course. Decide which one *before*
> class and put it in the handout, so the room is not split.

## 2. The users table

```sql
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
```

`email` is `UNIQUE` so two accounts cannot share an address. The column is
`password_hash`, never `password` — the name is a reminder of what belongs in it.

## 3. Sessions

```js
const session = require("express-session");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, secure: process.env.NODE_ENV === "production" },
  })
);
```

`SESSION_SECRET` comes from the environment. Set it locally in `.env` and in Railway's
variables. It is never written in a file that goes to GitHub.

## 4. Signup

```js
const bcrypt = require("bcrypt");

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "email and password required" });

  const hash = await bcrypt.hash(password, 10);
  // INSERT INTO users (email, password_hash) VALUES (?, ?)
  // then: req.session.userId = <new id>
  res.status(201).json({ email });
});
```

**Never store `password`. Store `hash`.**

## 5. Login and logout

```js
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // SELECT * FROM users WHERE email = ?
  const ok = user && (await bcrypt.compare(password, user.password_hash));
  if (!ok) return res.status(401).json({ error: "wrong email or password" });

  req.session.userId = user.id;
  res.json({ email: user.email });
});

app.post("/logout", (req, res) => {
  req.session.destroy(() => res.status(204).end());
});
```

> The error message is the same for a wrong email and a wrong password, on purpose.
> "No such user" tells an attacker which addresses are registered. Good question for the
> oral exam.

## 6. The gate

```js
function requireLogin(req, res, next) {
  if (!req.session.userId) return res.status(401).json({ error: "not logged in" });
  next();
}
```

Students apply this in class (session 9.3), not at home.

## Verify before class

Check each submission:

- [ ] signup, login, logout all work on `localhost`
- [ ] `password_hash` in the database is unreadable, not the typed password
- [ ] `SESSION_SECRET` is not in the repository
- [ ] no expense code touched yet

Anyone failing these gets a 15-minute call **before** Day 9. A student who arrives with
a broken login spends the day on configuration and misses the attack exercise, which is
the entire point of Day 9.
