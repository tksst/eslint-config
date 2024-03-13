import type { Linter } from "eslint";
import * as pluginRegexp from "eslint-plugin-regexp";

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const x = pluginRegexp.configs["flat/recommended"] as Linter.FlatConfig;

export default x;
