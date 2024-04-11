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

const x = {
    name: `${EXTERNAL}/@typescript-eslint`,
    plugins: {
        "@typescript-eslint": tsEslintPlugin as unknown as ESLint.Plugin,
    },
    languageOptions: {
        parser: tsEslintParser as unknown as Linter.ParserModule,
        parserOptions: {
            project: "./tsconfig.json",
        },
    },
    rules: {
        ...x1,
        ...x2,
        ...x3,
    },
} satisfies Linter.FlatConfig;

export default x;
