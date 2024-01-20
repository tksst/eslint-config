import type { Linter } from "eslint";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";

const x = {
    plugins: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        "simple-import-sort": pluginSimpleImportSort,
    },
    rules: {
        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",
        "sort-imports": "off",
    },
} satisfies Linter.FlatConfig;

export default x;
