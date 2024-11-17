import type { Linter } from "eslint";
import * as pluginRegexp from "eslint-plugin-regexp";

import { EXTERNAL } from "../name.js";

const x = {
    name: `${EXTERNAL}/eslint-plugin-regexp`,
    ...(pluginRegexp.configs["flat/recommended"] as Linter.Config),
};

export default x;
