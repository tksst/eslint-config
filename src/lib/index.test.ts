import { type Linter } from "eslint";

import * as config from "./index.js";

function removePlugin(c: Linter.FlatConfig[]) {
    return c.map((it) => {
        if (it.plugins !== undefined) {
            delete it.plugins;
        }
        return it;
    });
}

function removeParser(c: Linter.FlatConfig[]) {
    return c.map((it) => {
        if (it.languageOptions?.parser !== undefined) {
            delete it.languageOptions.parser;
        }
        return it;
    });
}

describe("ESLint config Snapshot", () => {
    it("preset.typeScript", () => {
        expect(removeParser(removePlugin(config.preset.typeScript()))).toMatchSnapshot();
    });
    it("rules.typeScript", () => {
        expect(removeParser(removePlugin(config.rules.typeScript))).toMatchSnapshot();
    });
});
