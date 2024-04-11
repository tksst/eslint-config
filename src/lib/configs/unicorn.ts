import type { Linter } from "eslint";
import pluginUnicorn from "eslint-plugin-unicorn";

import { EXTERNAL } from "../name.js";

const x = {
    name: `${EXTERNAL}/eslint-plugin-unicorn`,
    plugins: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        unicorn: pluginUnicorn,
    },
    rules: {
        // Require escape sequences to use uppercase values.
        "unicorn/escape-case": "error",
        // Enforce the use of Unicode escapes instead of hexadecimal escapes.
        "unicorn/no-hex-escape": "error",
        // Require Array.isArray() instead of instanceof Array.
        "unicorn/no-instanceof-array": "error",
        // Prevent calling EventTarget#removeEventListener() with the result of an expression.
        "unicorn/no-invalid-remove-event-listener": "error",
        // Enforce the use of Buffer.from() and Buffer.alloc() instead of the deprecated new Buffer().
        "unicorn/no-new-buffer": "error",
        // Disallow classes that only have static members.
        "unicorn/no-static-only-class": "error",
        // Disallow comparing undefined using typeof.
        "unicorn/no-typeof-undefined": "error",
        // Disallow unnecessary spread.
        "unicorn/no-useless-spread": "error",
        // Enforce proper case for numeric literals.
        "unicorn/number-literal-case": "error",
        // Enforce the style of numeric separators by correctly grouping digits.
        "unicorn/numeric-separators-style": ["error", { onlyIfContainsSeparator: true }],
        // Prefer .find(…) and .findLast(…) over the first or last element from .filter(…)
        "unicorn/prefer-array-find": "error",
        // Prefer Array#{indexOf,lastIndexOf}() over Array#{findIndex,findLastIndex}() when looking for the index of an item.
        "unicorn/prefer-array-index-of": "error",
        // Prefer .some(…) over .filter(…).length check and .{find,findLast}(…).
        "unicorn/prefer-array-some": "error",
        // Prefer Blob#arrayBuffer() over FileReader#readAsArrayBuffer(…) and Blob#text() over FileReader#readAsText(…).
        "unicorn/prefer-blob-reading-methods": "error",
        // Prefer Date.now() to get the number of milliseconds since the Unix Epoch
        "unicorn/prefer-date-now": "error",
        // Prefer default parameters over reassignment
        "unicorn/prefer-default-parameters": "error",
        // Prefer .includes() over .indexOf() and Array#some() when checking for existence or non-existence
        "unicorn/prefer-includes": "error",
        // Prefer using a logical operator over a ternary
        "unicorn/prefer-logical-operator-over-ternary": "error",
        // Prefer using String, Number, BigInt, Boolean, and Symbol directly.
        "unicorn/prefer-native-coercion-functions": "error",
        // Prefer using the node: protocol when importing Node.js builtin modules.
        "unicorn/prefer-node-protocol": "error",
        // Prefer Number static properties over global ones.
        "unicorn/prefer-number-properties": "error",
        // Prefer omitting the catch binding parameter
        "unicorn/prefer-optional-catch-binding": "error",
        // Prefer RegExp#test() over String#match() and RegExp#exec()
        "unicorn/prefer-regexp-test": "error",
        // Prefer String#startsWith() & String#endsWith() over RegExp#test()
        "unicorn/prefer-string-starts-ends-with": "error",
        // Prefer String#trimStart() / String#trimEnd() over String#trimLeft() / String#trimRight()
        "unicorn/prefer-string-trim-start-end": "error",
        // Enforce throwing TypeError in type checking conditions
        "unicorn/prefer-type-error": "error",
        // Disallow passing single-element arrays to Promise methods
        "unicorn/no-single-promise-in-promise-methods": "error",
        // Disallow using await in Promise method parameters
        "unicorn/no-await-in-promise-methods": "error",
    },
} satisfies Linter.FlatConfig;

export default x;
