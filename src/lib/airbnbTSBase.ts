import { type Linter } from "eslint";
import configAirbnbTsBase from "eslint-config-airbnb-typescript/lib/shared.js";

function removeImportRules(rules: Linter.RulesRecord): Linter.RulesRecord {
    return Object.fromEntries(Object.entries(rules).filter(([key]) => !key.startsWith("import/")));
}

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

const x = [
    { rules: removeImportRules(configAirbnbTsBase.rules) },
    { rules: removeImportRules(configAirbnbTsBase.overrides[0].rules) },
] satisfies Linter.FlatConfig[];

export default x;
