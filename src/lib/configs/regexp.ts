import type { Linter } from "eslint";
import * as pluginRegexp from "eslint-plugin-regexp";

const x = {
    plugins: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        regexp: pluginRegexp,
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    rules: pluginRegexp.configs.recommended.rules,
} satisfies Linter.FlatConfig;

export default x;
