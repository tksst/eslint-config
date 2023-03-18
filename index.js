import js from "@eslint/js";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsEslintParser from "@typescript-eslint/parser";
import configPrettier from "eslint-config-prettier";
import pluginJest from "eslint-plugin-jest";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
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
        },
        rules: javascriptRule.rules,
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
