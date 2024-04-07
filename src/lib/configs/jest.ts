import type { Linter } from "eslint";
import pluginJest from "eslint-plugin-jest";

const x = {
    plugins: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        jest: pluginJest,
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    rules: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        ...pluginJest.configs.style.rules,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        ...pluginJest.configs.recommended.rules,
    },
} satisfies Linter.FlatConfig;

export default x;
