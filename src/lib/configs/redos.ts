import type { Linter } from "eslint";
import pluginRedos from "eslint-plugin-redos";

const x = {
    plugins: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        redos: pluginRedos,
    },
    rules: {
        "redos/no-vulnerable": "error",
    },
} satisfies Linter.FlatConfig;

export default x;
