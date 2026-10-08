# Day 0 — Pre-Work (Instructor)

**Not a class day.** Posted to Google Classroom at least 5 days before day 1.

## Why this exists

Zero-background students need Node, an editor, an AI agent, GitHub, Railway, and a
Postgres account. That is 2 hours of friction. Without pre-work, day 1 becomes
a setup day and the course loses 1 of its 12 days — 8% of all contact time.

## Your job before day 1

1. Post `homework.md` as the **Day 0 — Setup** assignment.
2. Check submissions **48 hours before** day 1, not on the day.
3. For anyone stuck, run a 20-minute call. Do not let them arrive broken.

## Common failures

| Failure | Fix |
|---|---|
| Node installed but `node --version` not found | PATH issue — reinstall via the official installer, not a package manager |
| Windows student, commands fail | Have them use WSL or stick to the agent's built-in terminal |
| GitHub push rejected | They never set up auth — use GitHub CLI `gh auth login` |
| Railway not linked to GitHub | Sign up *with* GitHub, not with email |
| Agent not authenticated | Most common. Check they can get a response, not just that it opened |

## Readiness gate

A student who has not submitted Day 0 by the morning of day 1 attends as an
observer and completes setup during the build block. Do not hold the room for them.
