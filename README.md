# Usage

## Install

```bash
$ npm install --save-dev @tksst/eslint-config
```

## Using the config

To apply the config simply, put the below to `.eslintrc.js` on your project root:

```javascript
/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    // Your project environment settings here.
    // See ESLint document of "Specifying Environments":
    // https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments

    // example:
    es2020: true,
    node: true,
    jest: true
  },
  extends: "@tksst"
};
```
