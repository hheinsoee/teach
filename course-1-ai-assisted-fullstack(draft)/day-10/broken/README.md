# Four Tests. Two Are Fake.

Run them:

```
node --test
```

Nothing to install — Node has a test runner built in.

All four pass. All four look reasonable.
Two of them would still pass if the code they test were completely broken.

For each one, decide: **real, or theater?**

Then prove it. Break the thing it claims to test in `code.js`, run the tests again,
and see which ones notice.

A test that passes no matter what the code does is worse than no test —
it tells you everything is fine when it is not.
