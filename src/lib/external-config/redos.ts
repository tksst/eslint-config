import type { Linter } from "eslint";
import pluginRedos from "eslint-plugin-redos";

import { EXTERNAL } from "../name.js";

const x = {
    name: `${EXTERNAL}/eslint-plugin-redos`,
    plugins: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        redos: pluginRedos,
    },
    rules: {
        "redos/no-vulnerable": "error",
    },
} satisfies Linter.Config;

export default x;
