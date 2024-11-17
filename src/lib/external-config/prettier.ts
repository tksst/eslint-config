import type { Linter } from "eslint";
import configPrettier from "eslint-config-prettier";

import { EXTERNAL } from "../name.js";

export default function prettier() {
    return {
        name: `${EXTERNAL}/eslint-config-prettier`,
        rules: configPrettier.rules,
    } satisfies Linter.Config;
}
