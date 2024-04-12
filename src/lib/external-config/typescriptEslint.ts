import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsEslintParser from "@typescript-eslint/parser";
import type { ESLint, Linter } from "eslint";

import { EXTERNAL } from "../name.js";

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

const x = [
    {
        name: `${EXTERNAL}/@typescript-eslint/load-plugins-and-parser`,
        plugins: {
            "@typescript-eslint": tsEslintPlugin as unknown as ESLint.Plugin,
        },
        languageOptions: {
            parser: tsEslintParser as unknown as Linter.ParserModule,
            parserOptions: {
                project: "./tsconfig.json",
            },
        },
    },
    {
        name: `${EXTERNAL}/@typescript-eslint/eslint-recommended`,
        rules: {
            ...x1,
        },
    },
    {
        name: `${EXTERNAL}/@typescript-eslint/strict-type-checked`,
        rules: {
            ...x2,
        },
    },
    {
        name: `${EXTERNAL}/@typescript-eslint/stylistic-type-checked`,
        rules: {
            ...x3,
        },
    },
] satisfies Linter.FlatConfig[];

export default x;
