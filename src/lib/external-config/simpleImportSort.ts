import type { Linter } from "eslint";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";

import { EXTERNAL } from "../name.js";

const x = {
    name: `${EXTERNAL}/eslint-plugin-simple-import-sort`,
    plugins: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        "simple-import-sort": pluginSimpleImportSort,
    },
    rules: {
        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",
        "sort-imports": "off",
    },
} satisfies Linter.Config;

export default x;
