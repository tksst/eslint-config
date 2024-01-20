import js from "@eslint/js";
import type { Linter } from "eslint";
import configPrettier from "eslint-config-prettier";
import pluginRedos from "eslint-plugin-redos";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import pluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";

import airBnbBase from "./configs/airbnbBase.js";
import airBnbTsBase from "./configs/airbnbTSBase.js";
import jest from "./configs/jest.js";
import regexp from "./configs/regexp.js";
import typescriptEslint from "./configs/typescriptEslint.js";

const javaScript = [
    js.configs.recommended,
    ...airBnbBase,
    jest,
    { rules: configPrettier.rules },
    {
        plugins: {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            "simple-import-sort": pluginSimpleImportSort,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            redos: pluginRedos,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            unicorn: pluginUnicorn,
        },
        rules: {
            "no-console": "off",
            "no-empty": ["error", { allowEmptyCatch: true }],
            "no-empty-static-block": "warn",
            "no-restricted-syntax": "off",
            "no-plusplus": "off",
            "no-continue": "off",
            "no-bitwise": "off",
            "no-param-reassign": "off",
            "no-await-in-loop": "warn",
            "no-empty-function": "off",
            "no-unused-vars": "warn",
            "default-case": "off",
            "prefer-const": "warn",
            "prefer-destructuring": [
                "error",
                {
                    AssignmentExpression: {
                        array: false,
                        object: false,
                    },
                    VariableDeclarator: {
                        array: false,
                        object: true,
                    },
                },
                {
                    enforceForRenamedProperties: false,
                },
            ],
            "prefer-regex-literals": "off",
            "class-methods-use-this": "off",
            "global-require": "off", // this is DEPRECATED in ESLint v7.0.0
            "max-classes-per-file": "off",

            "simple-import-sort/imports": "warn",
            "simple-import-sort/exports": "warn",
            "sort-imports": "off",
            "redos/no-vulnerable": "error",

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
        },
    },
    regexp,
] satisfies Linter.FlatConfig[];

const typeScriptOnly = [
    ...airBnbTsBase,
    typescriptEslint,
    { rules: configPrettier.rules },
    {
        rules: {
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-floating-promises": ["error", { ignoreIIFE: true }],
            "@typescript-eslint/no-use-before-define": "off",
            "@typescript-eslint/strict-boolean-expressions": "error",
            "@typescript-eslint/prefer-readonly": "warn",
            "@typescript-eslint/consistent-type-imports": "warn",
            "@typescript-eslint/explicit-member-accessibility": "warn",
            "@typescript-eslint/no-redundant-type-constituents": "warn",
            "@typescript-eslint/no-useless-empty-export": "warn",
            "prefer-const": "warn",
        },
    },
] satisfies Linter.FlatConfig[];

function addFilesToConfigs(config: Linter.FlatConfig[], something: string[], append = false) {
    // console.assert(Array.isArray(something));

    return config.map((it) => {
        // typeof it === string for "eslint:recommended"
        if (typeof it !== "string") {
            if (!append || it.files === undefined) {
                it.files = something;
            } else {
                it.files = it.files.concat(something);
            }
        }
        return it;
    });
}

export const rules = {
    javaScript,
    typeScriptOnly,
    typeScript: [...javaScript, ...typeScriptOnly],
};

export const util = {
    addFilesToConfigs,
};

export const preset = {
    typeScript: (option?: { jsIsCjs: boolean }): Linter.FlatConfig[] => [
        {
            ignores: ["dist/**", "coverage/**"],
        },
        {
            files: ["**/*.js", "**/*.jsx"],
            languageOptions: {
                sourceType: option?.jsIsCjs === true ? "commonjs" : "module",
            },
        },
        {
            files: ["**/*.js", "**/*.cjs", "**/*.mjs", "**/*.jsx", "**/*.cjsx", "**/*.mjsx"],
            languageOptions: {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                globals: {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    ...globals.node,
                },
            },
        },
        ...javaScript,
        ...addFilesToConfigs(typeScriptOnly, ["**/*.ts", "**/*.mts", "**/*.cts", "**/*.tsx", "**/*.mtsx", "**/*.ctsx"]),
    ],
};
