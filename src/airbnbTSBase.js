import configAirbnbTsBase from "eslint-config-airbnb-typescript/lib/shared.js";

function removeImportRules(rules) {
    return Object.fromEntries(Object.entries(rules).filter(([key]) => !key.startsWith("import/")));
}

export default [
    { rules: removeImportRules(configAirbnbTsBase.rules) },
    { rules: removeImportRules(configAirbnbTsBase.overrides[0].rules) },
];
