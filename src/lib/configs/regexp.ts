import type { Linter } from "eslint";
import * as pluginRegexp from "eslint-plugin-regexp";

import { EXTERNAL } from "../name.js";

const x = {
    name: `${EXTERNAL}/eslint-plugin-regexp`,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    ...(pluginRegexp.configs["flat/recommended"] as Linter.FlatConfig),
};

export default x;
