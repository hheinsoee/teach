# Day 10 — Which Tests Are Fake

**Do not place this file in `day-10/broken/`.**

| File | Verdict | Why |
|---|---|---|
| `01-total.test.js` | **FAKE** | `toBeDefined()` passes for `0`, `NaN`, `"banana"`, `-1`. Make `monthlyTotal` return `0` always — still green |
| `02-ownership.test.js` | **REAL** | Checks the count *and* the owner. Remove the filter and it fails |
| `03-validation.test.js` | **FAKE** | Only checks a *valid* amount does not throw. Delete the whole function body — still green |
| `04-negative.test.js` | **REAL** | Checks negative, non-numeric, zero, and valid. Remove any rule and it fails |

## Prove it in front of them

### 01 is fake

```js
function monthlyTotal(expenses, month) { return 0; }
```
Test still passes. The total is now always zero and nothing complains.

### 03 is fake

```js
function validateAmount(amount) { }
```
Test still passes. Validation is entirely gone and the suite is green.

### 02 is real

```js
function expensesFor(all, userId) { return all; }
```
Fails — `length` is 2, not 1. **This is the security test working.**

### 04 is real

```js
if (amount < 0) throw new Error(...);   // was <=
```
Fails on `validateAmount(0)`. Catches the off-by-one.

## The pattern to name out loud

Fake tests share one shape: **they assert that something happened, not that it was correct.**

| Weak | Strong |
|---|---|
| `toBeDefined()` | `toBe(1550)` |
| `not.toThrow()` on valid input only | `toThrow()` on every invalid input |
| `expect(result).toBeTruthy()` | `expect(result.length).toBe(1)` |
| "it returns something" | "it returns *this*" |

Agents produce the left column constantly. The right column is what a test is for.

## Checkpoint 2 snippets (rubric criterion 4)

Give one per student, rotating:

**A — missing ownership**
```js
const rows = await db.query("SELECT * FROM expenses WHERE id = $1", [id]);
return rows[0];
```
*Missing `AND user_id = $2`. Anyone can read any expense by id.*

**B — injection**
```js
const rows = await db.query(`SELECT * FROM expenses WHERE category = '${category}'`);
```
*String-built SQL. `category` comes from the user.*

**C — swallowed error**
```js
try { await saveExpense(data); } catch (e) {} 
return { ok: true };
```
*Always reports success. Saves may silently fail forever.*

**D — over-engineering**
```js
class ExpenseRepositoryFactory {
  static createRepository() { return new ExpenseRepository(new ExpenseMapper()); }
}
```
*Three classes to run one query. Agents add this unprompted.*

**E — hallucination**
```js
const total = expenses.sumBy("amount");
```
*`sumBy` is not a JavaScript array method. This crashes immediately.*

**Pass:** finds the flaw, or names the right line and says they would not merge it
without understanding it. **Fail:** approves it, or comments only on style/formatting.
