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
  extends: "@tksst/eslint-config"
};
```

As above, in addition to putting this eslint-config in `extends`, you should also set `root` and `env`.

# Shareable Configurations

## [`@tksst/eslint-config/javascript`](./javascript.js)

This is for JavaScript source code. I recommend using this if your project is JavaScript only.

## [`@tksst/eslint-config/typescript`](./typescript.js)

This is based on `@tksst/eslint-config/javascript` with additional settings for TypeScript source code.

## [`@tksst/eslint-config`](./index.js)

This setting is based on `@tksst/eslint-config/javascript`, and `@tksst/eslint-config/typescript` is applied depending on the extension of the source code.
