import js from "@eslint/js";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsEslintParser from "@typescript-eslint/parser";
import configPrettier from "eslint-config-prettier";
import pluginJest from "eslint-plugin-jest";
import pluginRedos from "eslint-plugin-redos";
import pluginRegexp from "eslint-plugin-regexp";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import pluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";

import airBnbBase from "./src/airbnbBase.js";
import airBnbTsBase from "./src/airbnbTSBase.js";
import javascriptRule from "./src/javascript-rule-base.js";
import typescriptRule from "./src/typescript-rule-base.js";

const javaScript = [
    js.configs.recommended,
    ...airBnbBase,
    {
        plugins: {
            jest: pluginJest,
        },
    },
    { rules: pluginJest.configs.style.rules },
    { rules: pluginJest.configs.recommended.rules },
    { rules: configPrettier.rules },
    {
        plugins: {
            "simple-import-sort": pluginSimpleImportSort,
            redos: pluginRedos,
            unicorn: pluginUnicorn,
        },
        rules: javascriptRule.rules,
    },
    {
        plugins: {
            regexp: pluginRegexp,
        },
        rules: pluginRegexp.configs.recommended.rules,
    },
];

const typeScriptOnly = [
    ...airBnbTsBase,
    {
        plugins: {
            "@typescript-eslint": tsEslintPlugin,
        },
        languageOptions: {
            parser: tsEslintParser,
        },
    },
    { rules: tsEslintPlugin.configs["eslint-recommended"].overrides[0].rules },
    { rules: tsEslintPlugin.configs["strict-type-checked"].rules },
    { rules: tsEslintPlugin.configs["stylistic-type-checked"].rules },
    { rules: configPrettier.rules },
    {
        languageOptions: {
            parserOptions: {
                project: "./tsconfig.json",
            },
        },
        rules: typescriptRule.rules,
    },
];

function addCore(config, something, propertyName, append) {
    console.assert(Array.isArray(something));

    return config.map((it) => {
        // typeof it === string for "eslint:recommended"
        if (typeof it !== "string") {
            if (!append || it[propertyName] === undefined) {
                it[propertyName] = something;
            } else {
                it[propertyName] = it[propertyName].concat(something);
            }
        }
        return it;
    });
}

function addFilesToConfigs(config, files, append = false) {
    return addCore(config, files, "files", append);
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
    typeScript: (option) => [
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
                globals: {
                    ...globals.node,
                },
            },
        },
        ...javaScript,
        ...addFilesToConfigs(typeScriptOnly, ["**/*.ts", "**/*.mts", "**/*.cts", "**/*.tsx", "**/*.mtsx", "**/*.ctsx"]),
    ],
};
