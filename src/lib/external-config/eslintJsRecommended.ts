import js from "@eslint/js";
import type { Linter } from "eslint";

import { EXTERNAL } from "../name.js";

export default function eslintJsRecommended() {
    return {
        name: `${EXTERNAL}/@eslint/js/recommended`,

        ...(js.configs.recommended as Linter.FlatConfig),
    } satisfies Linter.FlatConfig;
}
