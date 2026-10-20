# Day 5 — Planted Problems

**Before Day 5 class:** instructor plants 2-3 realistic bugs in each student's Day 4 mini-app. Each student gets a different mix (prevents copying across the room).

> **Rule:** every planted problem must be **fixable in 15 minutes** by a motivated student who looks at the actual system. If a plant requires reading code, it's wrong for Course 0 — use Course 1 instead.

---

## The plant catalog

### Plant 1 — Row Level Security turned off

**What you do:**
- Open the student's Supabase project
- Table Editor → their main table (e.g. `todos`)
- Click the "RLS" indicator → turn off Row Level Security

**What breaks:**
- User A can now see User B's data (or vice versa)
- The app looks "fine" but privacy is gone

**How a student should diagnose:**
- Try the app with 2 accounts (as they did Day 4)
- Notice: "Wait, I'm seeing someone else's data"
- Guess: Data layer
- Check: Supabase → table → RLS indicator

**How to fix:**
- Turn RLS back on
- Or: prompt Lovable "The todos aren't filtered by user anymore. Fix the Row Level Security."

**Teaches:** auth isn't just a login screen; the data layer enforces who sees what.

---

### Plant 2 — Environment variable removed

**What you do:**
- In Vercel/Lovable → the student's project → Settings → Environment Variables
- Delete `SUPABASE_ANON_KEY` (or similar)
- Redeploy

**What breaks:**
- The site loads but all Supabase operations fail (signup, login, data load)
- Browser console shows an auth or 401 error
- Supabase itself works — the mini-app just can't reach it

**How a student should diagnose:**
- Try the app → it looks blank or broken
- Guess: Infra (or Data at first)
- Check: browser console → sees "Invalid API key" or similar
- Then check: Vercel/Lovable → Environment Variables → empty!

**How to fix:**
- Copy the key from Supabase (Project Settings → API)
- Paste back into Vercel/Lovable env vars
- Redeploy

**Teaches:** apps have **configuration** outside the code. If a config value disappears, the app can't do its job.

---

### Plant 3 — Form validation removed

**What you do:**
- In Lovable: prompt it to "remove all validation on the add-todo form, let empty todos be saved"
- Deploy

**What breaks:**
- Users can submit empty rows
- The list shows blank entries
- UX is bad; data is messy

**How a student should diagnose:**
- Try the app → add an empty todo → it saves
- Notice the blank row in the list
- Guess: UI (validation) or Data (constraint)
- Check: try adding empty, see what happens

**How to fix:**
- Prompt Lovable: "Don't allow empty todos. The text field must have at least 1 character."
- Verify: empty submission is now rejected

**Teaches:** UX problems are also "breaks" — users submitting nonsense is a real failure mode.

---

### Plant 4 — Column renamed in Supabase, UI breaks

**What you do:**
- Open Supabase → Table Editor → the student's table
- Rename a column (e.g. `is_done` → `done`)

**What breaks:**
- The app can still show existing rows (maybe)
- Checking "mark done" → the API call fails because it writes to `is_done` but the column is now `done`
- Error in browser console

**How a student should diagnose:**
- Try "mark done" → nothing happens visually
- Guess: Data or UI
- Check: browser console → sees "column is_done does not exist"
- Then check: Supabase → see the renamed column

**How to fix:**
- Rename back in Supabase, OR
- Prompt Lovable: "The column was renamed from is_done to done. Update the app to use the new name."

**Teaches:** the UI and the database have to agree on names. Rename one, break the other.

---

### Plant 5 — Deploy stuck on old version

**What you do:**
- In Vercel: trigger a redeploy of an **older** commit (one from Day 3, before auth was added)
- The URL now shows a version without auth

**What breaks:**
- Student loads their URL → it looks like Day 3 (no login)
- Signup doesn't exist
- Their "live" Day 4 features are gone

**How a student should diagnose:**
- "Wait, my login page is gone"
- Guess: Infra (something changed about deploy)
- Check: Vercel/Lovable → Deployments → sees which deploy is current

**How to fix:**
- Promote the latest deployment back to production, OR
- Trigger a fresh redeploy from Lovable

**Teaches:** the version you're running isn't automatically the latest you built.

---

## Choosing plants per student

- **Student who moved fast all week:** give them Plant 4 or 5 (harder)
- **Student who struggled on Day 3-4:** give them Plant 1 or 3 (visible, user-level breakage)
- **Vibe coder in your notes:** give them Plant 2 (needs them to look at actual config — most AI resistance)

**2 plants per student is the default.** 3 only for students who speed through.

---

## Rules for instructor

1. **No plant that requires reading code.** The student should fix it by: toggling a Supabase setting, pasting a value in Vercel, re-prompting Lovable, OR renaming a column back.
2. **No plant that destroys student work permanently.** Everything must be undo-able.
3. **No plant you haven't tested on yourself first.** Verify the fix works before planting it on a student.
4. **Document what you planted** — for post-class debriefing. Example:

```
Student: Hein
Plants: #1 (RLS off), #3 (form validation removed)
Day 5 result: Fixed #1 after 10 min (checked Supabase first — good instinct).
Didn't notice #3 until I pointed to it. Fixed #3 in 5 min after that.
Overall: pass criterion 3.
```

5. **Reset the plants before the student goes home** — their mini-app should be back to a working state so they can continue to Day 6.

---

## What NOT to plant

- Code bugs (requires reading code)
- Framework-level issues (React component errors)
- Package / dependency breakages
- Anything requiring the terminal to fix
- Anything that takes more than 15 min to diagnose + fix

Those are Course 1 and beyond.
