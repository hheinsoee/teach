# Day 2 — Code Sample Answers

Students must answer in their own words. These are what a passing answer contains.

| Sample | Marked line does | 7 things present | Delete it and... |
|---|---|---|---|
| `1-greeting.js` | picks one of two texts based on whether `hour` is under 12 | variable, type, condition | `greeting` does not exist — the last line crashes |
| `2-totals.js` | goes through the list one at a time, adding each to the running total | variable, loop, array | `total` stays 0 |
| `3-filter.js` | makes a **new** list containing only the food rows | array, object, function, condition | `food` is not defined — crashes |
| `4-function.js` | converts whole cents to a 2-decimal text for display | function, type | the function returns nothing — prints `undefined` |
| `5-lookup.js` | finds the first item whose id matches, or gives back nothing | array, object, function, condition | returns nothing at all |

## What to push on

- **`1-greeting`** — ask what `hour < 12` produces *by itself*. Answer: true or false. Many will not have met a boolean as a value.
- **`2-totals`** — ask why `total` is declared *outside* the loop. This is the first scope question.
- **`3-filter`** — ask whether `expenses` changed. It did not. Original-vs-new-list is the idea.
- **`4-function`** — this is the money rule from the same day. `35050` is stored, `350.50` is shown.
- **`5-lookup`** — `missing` prints `undefined`. Connect forward to day 4: `undefined` is the most common thing you will chase.

## Marking

Full marks = plain words, no undefined jargon. *"It iterates over the collection"* scores
zero if they cannot say what "iterates" means. *"It goes through the list one at a time"*
is full marks.
