import js from "@eslint/js";
import type { Linter } from "eslint";
import configPrettier from "eslint-config-prettier";
import globals from "globals";

import airBnbBase from "./configs/airbnbBase.js";
import airBnbTsBase from "./configs/airbnbTSBase.js";
import jest from "./configs/jest.js";
import redos from "./configs/redos.js";
import regexp from "./configs/regexp.js";
import simpleImportSort from "./configs/simpleImportSort.js";
import typescriptEslint from "./configs/typescriptEslint.js";
import unicorn from "./configs/unicorn.js";

const javaScript = [
    js.configs.recommended,
    ...airBnbBase,
    jest,
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
