import globals from "globals";

import * as config from "./index.js";

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
    ...config.javaScript,
];
