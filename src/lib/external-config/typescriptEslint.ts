import type { ESLint, Linter } from "eslint";
import { configs, parser, plugin } from "typescript-eslint";

import { EXTERNAL } from "../name.js";

type FlatConfig = typeof configs.base;

function removeFilesEntry(config: FlatConfig) {
    delete config.files;
    return config;
}

const strictTypeCheckedRules = configs.strictTypeChecked.map(removeFilesEntry);
const stylisticTypeCheckedRules = configs.stylisticTypeChecked.map(removeFilesEntry);

const x = [
    {
        name: `${EXTERNAL}/@typescript-eslint/load-plugins-and-parser`,
        plugins: {
            "@typescript-eslint": plugin as unknown as ESLint.Plugin,
        },
        languageOptions: {
            parser: parser as unknown as Linter.FlatConfigParserModule,
            parserOptions: {
                project: "./tsconfig.json",
            },
        },
    },
    ...(strictTypeCheckedRules as Linter.FlatConfig[]),
    ...(stylisticTypeCheckedRules as Linter.FlatConfig[]),
] satisfies Linter.FlatConfig[];

export default x;
