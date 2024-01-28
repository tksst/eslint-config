---
"@tksst/eslint-config": minor
---

disable [`no-return-await`](https://eslint.org/docs/latest/rules/no-return-await) for JavaScript files and set [@typescript-eslint/return-await](https://typescript-eslint.io/rules/return-await/) from `error`/`in-try-catch` to `warn`/`always` that means you should always use return-await for TypeScript.  
return-await is preferable because:

- better call stack in some engines such as V8
- proper handling with try-catch statement
