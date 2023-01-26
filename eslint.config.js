import globals from "globals";

import { rules } from "./index.js";

export default [
    {
        ignores: ["dist/*"],
    },
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
    {
        files: ["**/*.test.js"],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
    },
    ...rules.javaScript,
];
