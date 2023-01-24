# Usage

## Install

```bash
$ npm install --save-dev @tksst/eslint-config
```

## Using the config

Example `eslint.config.js`:

```javascript
import globals from "globals";

import eslintConfig from "@tksst/eslint-config";

export default [
  {
    ignores: ["dist/**"]
  },
  {
    languageOptions: {
      globals: {
        // If your code runs on Node.js
        ...globals.node
      }
    }
  },
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        // If your test runs on Jest
        ...globals.jest
      }
    }
  },
  ...eslintConfig
];
```

# Shareable Configurations

This package provies three configurations:

## `default`

This is based on `javaScript`, and `typeScript` is applied depending on the extension of the source code.

## `javaScript`

This is for JavaScript source code. I recommend using this if your project is JavaScript only.

## `typeScript`

This is based on `javaScript` with additional settings for TypeScript source code.
