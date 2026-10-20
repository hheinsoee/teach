# Oral Exam Question Bank

For rubric criteria 2 and 6. Pick at random. Rotate between cohorts.

## On their own code (criterion 2)

Point at a block and ask one of these:

1. What does this do, and what breaks if I delete it?
2. Where does this data come from, and where does it go next?
3. This runs on the server or in the browser — which, and how do you know?
4. What happens here if the user is not logged in?
5. What happens here if the database is down?
6. Why is this `await` here? What would happen without it?
7. If I called this twice at the same time, would anything go wrong?
8. Which line enforces that this is *your* expense and not someone else's?

Question 8 is the strongest single question in this bank. A student who cannot point
at the ownership check does not understand their own security.

## On the data model (criterion 6)

1. Why is `amount` an integer and not a decimal?
2. What is the difference between `spent_on` and `created_at`, and why do you need both?
3. What would break if `user_id` were removed from `expenses`?
4. Why is `category` a column rather than its own table? When would that become wrong?
5. What happens to a user's expenses if the user is deleted? Is that what you want?
6. You now need expenses in two currencies. What changes?

Question 6 is the best one — it tests whether they understand the model or memorized it.

## On the agent (criteria 3 and 4)

1. Show me a time the agent gave you something wrong. What was it?
2. What did you ask for that you had to reject?
3. How do you check that what the agent wrote actually works?
4. Which part of this app do you understand least? (Honesty is a pass here.)

Question 4 rewards self-awareness. A student who names a weak spot is safer than one
who claims to understand everything.
