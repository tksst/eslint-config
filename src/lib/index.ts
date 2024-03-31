import js from "@eslint/js";
import type { Linter } from "eslint";
import configPrettier from "eslint-config-prettier";
import globals from "globals";

import jest from "./configs/jest.js";
import redos from "./configs/redos.js";
import regexp from "./configs/regexp.js";
import simpleImportSort from "./configs/simpleImportSort.js";
import typescriptEslint from "./configs/typescriptEslint.js";
import unicorn from "./configs/unicorn.js";

const javaScript = [
    js.configs.recommended,
    { rules: configPrettier.rules },
    simpleImportSort,
    redos,
    unicorn,
    {
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
            // no-return-await is deplicated in ESLint v8.46.0.
            // This rule is very harmful on V8, but airbnb is enabling it.
            // There is little difference in performance between no-return-await and return-await.
            // On V8, no-return-await does not properly place history on the call stack.
            "no-return-await": "off",
            // useful rules from eslint-config-airbnb-base
            "default-case-last": "error",
            eqeqeq: [
                "error",
                "always",
                {
                    null: "ignore",
                },
            ],

            "func-names": "warn",
            "grouped-accessor-pairs": "error",
            "guard-for-in": "error",
            "no-buffer-constructor": "error",
            "no-caller": "error",
            "no-else-return": ["error", { allowElseIf: false }],
            "no-eval": "error",
            "no-extend-native": "error",
            "no-extra-bind": "error",
            "no-extra-label": "error",
            "no-iterator": "error",
            "no-label-var": "error",
            "no-lone-blocks": "error",
            "no-lonely-if": "error",
            "no-new": "error",
            "no-new-object": "error",
            "no-new-require": "error",
            "no-new-wrappers": "error",
            "no-octal-escape": "error",
            "no-path-concat": "error",
            "no-promise-executor-return": "error",
            "no-proto": "error",
            "no-restricted-properties": [
                "error",
                {
                    message: "arguments.callee is deprecated",
                    object: "arguments",
                    property: "callee",
                },
                {
                    message: "Please use Number.isFinite instead",
                    object: "global",
                    property: "isFinite",
                },
                {
                    message: "Please use Number.isFinite instead",
                    object: "self",
                    property: "isFinite",
                },
                {
                    message: "Please use Number.isFinite instead",
                    object: "window",
                    property: "isFinite",
                },
                {
                    message: "Please use Number.isNaN instead",
                    object: "global",
                    property: "isNaN",
                },
                {
                    message: "Please use Number.isNaN instead",
                    object: "self",
                    property: "isNaN",
                },
                {
                    message: "Please use Number.isNaN instead",
                    object: "window",
                    property: "isNaN",
                },
                {
                    message: "Please use Object.defineProperty instead.",
                    property: "__defineGetter__",
                },
                {
                    message: "Please use Object.defineProperty instead.",
                    property: "__defineSetter__",
                },
                {
                    message: "Use the exponentiation operator (**) instead.",
                    object: "Math",
                    property: "pow",
                },
            ],
            "no-return-assign": "error",
            "no-script-url": "error",
            "no-self-compare": "error",
            "no-sequences": "error",
            "no-template-curly-in-string": "error",
            "no-undef-init": "error",
        },
    },
    regexp,
] satisfies Linter.FlatConfig[];

const typeScriptOnly = [
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
            // Override the default setting of typescript-eslint for the same reason as `no-return-await`,
            // but stays with warn for backward compatibility reasons.
            "@typescript-eslint/return-await": ["warn", "always"],
            // disable some opinionated rules in @typescript-eslint/plugin stylistic-type-checked
            "@typescript-eslint/prefer-optional-chain": "off",
            "@typescript-eslint/consistent-type-definitions": "off",
            "@typescript-eslint/class-literal-property-style": "off",
            "prefer-const": "warn",
            // useful rules from eslint-config-airbnb-typescript
            "@typescript-eslint/default-param-last": "error",
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    format: ["camelCase", "PascalCase", "UPPER_CASE"],
                    selector: "variable",
                },
                {
                    format: ["camelCase", "PascalCase"],
                    selector: "function",
                },
                {
                    format: ["PascalCase"],
                    selector: "typeLike",
                },
            ],
            "@typescript-eslint/no-loop-func": "error",
            "@typescript-eslint/no-unused-expressions": "error",
            // this is set by @eslint/js recommended but not needed for TypeScript
            "valid-typeof": "off",
            // This is enabled by typescript-eslint/recommended-type-checked, but it is too strict for me.
            "@typescript-eslint/restrict-template-expressions": "off",
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

const vitest = [
    jest,
    {
        rules: {
            "jest/no-deprecated-functions": "off",
        },
    },
] satisfies Linter.FlatConfig[];

export const config = {
    javaScript,
    typeScriptOnly,
    typeScript: [...javaScript, ...typeScriptOnly],
    jest,
};

export const util = {
    addFilesToConfigs,
};

export const preset = {
    typeScript: (option?: { jsIsCjs?: boolean; jest?: boolean; vitest?: boolean }): Linter.FlatConfig[] => [
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
        option?.jest === true ? jest : {},
        ...(option?.jest !== true && option?.vitest === true ? vitest : []),
        ...addFilesToConfigs(typeScriptOnly, ["**/*.ts", "**/*.mts", "**/*.cts", "**/*.tsx", "**/*.mtsx", "**/*.ctsx"]),
    ],
};
