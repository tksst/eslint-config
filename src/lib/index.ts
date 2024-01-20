import js from "@eslint/js";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsEslintParser from "@typescript-eslint/parser";
import type { ESLint, Linter } from "eslint";
import configPrettier from "eslint-config-prettier";
import pluginRedos from "eslint-plugin-redos";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import pluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";

import airBnbBase from "./configs/airbnbBase.js";
import airBnbTsBase from "./configs/airbnbTSBase.js";
import javascriptRule from "./configs/javascript-rule-base.js";
import jest from "./configs/jest.js";
import regexp from "./configs/regexp.js";
import typescriptRule from "./configs/typescript-rule-base.js";

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
        rules: javascriptRule.rules,
    },
    regexp,
] satisfies Linter.FlatConfig[];

const x1 = tsEslintPlugin.configs["eslint-recommended"]?.overrides?.[0]?.rules as Linter.RulesRecord | undefined;

if (x1 === undefined) {
    throw new TypeError("unexpected @typescript-eslint/plugin eslint-recommended config");
}

const x2 = tsEslintPlugin.configs["strict-type-checked"]?.rules as Linter.RulesRecord | undefined;

if (x2 === undefined) {
    throw new TypeError("unexpected @typescript-eslint/plugin strict-type-checked config");
}

const x3 = tsEslintPlugin.configs["stylistic-type-checked"]?.rules as Linter.RulesRecord | undefined;

if (x3 === undefined) {
    throw new TypeError("unexpected @typescript-eslint/plugin stylistic-type-checked config");
}

const typeScriptOnly = [
    ...airBnbTsBase,
    {
        plugins: {
            "@typescript-eslint": tsEslintPlugin as unknown as ESLint.Plugin,
        },
        languageOptions: {
            parser: tsEslintParser as unknown as Linter.ParserModule,
        },
    },
    { rules: x1 },
    { rules: x2 },
    { rules: x3 },
    { rules: configPrettier.rules },
    {
        languageOptions: {
            parserOptions: {
                project: "./tsconfig.json",
            },
        },
        rules: typescriptRule.rules,
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
