# Day 2 — In Class

## Goal

Look at code you did not write and say what it does.

## The 7 things

Every program ever written is made of these:

| | Thing | Reads as |
|---|---|---|
| 1 | Variable | remember this value under this name |
| 2 | Type | what kind of thing — number, text, true/false, list, object |
| 3 | Condition | only do this if... |
| 4 | Loop | do this once for each... |
| 5 | Function | a named job you can run |
| 6 | Array | an ordered list |
| 7 | Object | one thing with named properties |

That is the whole list. There is nothing else coming.

## Part 1 — Explain your own code (30 min, in pairs)

Open the page you deployed in day 1.

For each file, with your partner:

1. Point at a line.
2. Say what it does — **in normal words**, not code words.
3. Say what would break if you deleted it.

If you cannot answer, ask the agent:

> Explain this line like I have never programmed before. Do not give me more code.

Then put the answer **in your own words** to your partner.

## Part 2 — Read code you have never seen (20 min)

Your instructor will show a file on the screen. Before anyone speaks, write down:

- What does this code produce?
- Which of the 7 things do you see?
- Which line is doing the most important work?

## Numbers, money and dates

Three data-type facts that cause real bugs. You will meet all three again in day 8.

### Money

Open Node and run:

```js
0.1 + 0.2
```

You get `0.30000000000000004`.

That is not a JavaScript bug — it is how computers store decimals. Store money as a
decimal and your totals will eventually be wrong by a cent, then by more.

**The rule:** store the smallest unit as a whole number. `350.50` becomes `35050`.
Divide by 100 only when showing it to a person.

### Text that looks like a number

```js
"10" + 5        // "105"
Number("10") + 5 // 15
```

Anything arriving from a form, a file, or a web address is **text** until you convert it.
This is the single most common silent bug for beginners.

### Dates

Two different dates get confused constantly:

| | Means |
|---|---|
| when it happened | you bought lunch yesterday |
| when it was recorded | you typed it in today |

They are not the same, and apps that store only one of them cannot answer basic questions.

## Part 3 — Cold call (15 min)

Agents closed. Laptops closed. A block of code goes on the screen and someone explains it.

This is not a test. It is practice for the exam in week 6, which works exactly like this.

## Rule you learned today

**Never merge code you cannot explain.** When the agent gives you something you do not
understand, you have two choices: ask it to explain, or ask it to do it a simpler way.
Accepting it silently is how people end up owning an app they cannot fix.
