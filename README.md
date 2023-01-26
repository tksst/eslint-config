# Usage

## Install

```bash
$ npm install --save-dev @tksst/eslint-config
```

## Using the config

Example `eslint.config.js`:

```javascript
import { preset } from "@tksst/eslint-config";

export default preset.typeScript({ jsIsCjs: true });
```
