# Day 11 — Production

## The three layers

| Layer | Today |
|---|---|
| **Understand** | Env vars · config · build · production DB · migrations · **logging** · monitoring · error logging · backups |
| **Direct** | Specifying production configuration |
| **Verify** | Read production logs · break something on purpose and see if monitoring notices |

## The idea

> **Production is not "the code works". Production is "I find out when it stops working."**

Students think shipping is the finish line. Shipping is where you lose the ability to
see what is happening — unless you build that ability deliberately. That is today.

## Sessions in this day

> A **day** is one 2-hour meeting. A **session** is a teaching block inside it.

| Session | Title | Kind | Length |
|---|---|---|---|
| **11.1** | Dev vs Production | concept | 25 min |
| **11.2** | Logging, Monitoring & Backups | build | 50 min |
| **11.3** | Break Your Own Live App | verify | 25 min |

## Pacing — `FITS`

| | |
|---|---|
| **Fixed** (never shorten) | 11.1 Dev vs Production · 11.3 Break Your Own Live App |
| **Elastic** (absorbs overrun) | 11.2 Logging & Monitoring |
| **Cut line** (goes first) | 11.2 — error logging can be wired at home; backups must be switched on in class |

Students will claim backups are on without checking. Watch the screen.

## Timing (120 min)

| Min | Block | Content |
|---|---|---|
| 0–15 | Homework review | Which fake test fooled the most people? Show 01 and 03 passing against dead code |
| 15–40 | Concept | Dev vs prod. Env vars. What a log is for. What monitoring is for |
| 40–90 | Build | Production DB, env vars, logging, error logging |
| 90–115 | **Break it** | Each student breaks their own production app. Does anything tell them? |
| 115–120 | Wrap | Homework — 5 real users |

## Env vars, taught concretely

| | Development | Production |
|---|---|---|
| Database | a test one, with junk data | the real one, with real data |
| Secrets | `.env`, never committed | set in Railway's dashboard |
| Errors | full details on screen | logged privately, generic message to the user |

Two rules, said plainly:

1. **Secrets never go in GitHub.** If one did, it is in the history forever — rotate it.
2. **Users never see a stack trace.** It tells an attacker how your app is built.

## The break-it exercise

Each student deliberately breaks their own live app, then checks whether anything told them:

| Break | What should happen |
|---|---|
| Point `DATABASE_URL` at nothing | Error tracker fires. The page does not show a stack trace |
| Throw an error in one endpoint | It appears in the logs with enough detail to find it |
| Return 500 from the summary route | Visible in the dashboard |

**The question is not "did it break" — it is "would I have known?"**
Most students discover their logs say nothing useful. That is the lesson.

## Teaching notes

- Make them read a real log line and say what it means. Logs that nobody reads are
  not monitoring.
- A log line with no user id, no route, and no timestamp is useless. Show the difference.
- Backups: ask "your database is deleted right now — what do you do?" Most have no
  answer. Enabling the provider's backup takes 2 minutes.

## Common failures

| Failure | Fix |
|---|---|
| `.env` committed to GitHub | Rotate the secret. `.gitignore`. Check history |
| Dev database used in production | Separate them. Real data never mixes with test data |
| Logs every request, finds nothing | Log decisions and failures, not noise |
| Stack trace shown to users | Generic message out, full detail to the log |
| No backup | Turn it on in the provider dashboard, now, in class |
