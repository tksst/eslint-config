import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsEslintParser from "@typescript-eslint/parser";
import configPrettier from "eslint-config-prettier";
import pluginJest from "eslint-plugin-jest";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";

import airBnbBase from "./src/airbnbBase.js";
import airBnbTsBase from "./src/airbnbTSBase.js";
import javascriptRule from "./src/javascript-rule-base.js";
import typescriptRule from "./src/typescript-rule-base.js";

export const javaScript = [
    "eslint:recommended",
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
        },
        rules: javascriptRule.rules,
    },
];

const pureTypeScript = [
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
    { rules: tsEslintPlugin.configs.recommended.rules },
    { rules: tsEslintPlugin.configs["recommended-requiring-type-checking"].rules },
    { rules: tsEslintPlugin.configs.strict.rules },
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

export const typeScript = [...javaScript, ...pureTypeScript];

function addFilesProperty(config, files) {
    return config.map((it) => {
        // typeof it === string for "eslint:recommended"
        if (typeof it !== "string") {
            it.files = files;
        }
        return it;
    });
}

export default [...javaScript, ...addFilesProperty(pureTypeScript, ["**/*.ts", "**/*.mts", "**/*.cts"])];
