import * as config from "./index.js";

function removePlugin(c) {
    return c.map((it) => {
        if (it.plugins !== undefined) {
            delete it.plugins;
        }
        return it;
    });
}

function removeParser(c) {
    return c.map((it) => {
        if (it.languageOptions?.parser !== undefined) {
            delete it.languageOptions?.parser;
        }
        return it;
    });
}

describe("ESLint config Snapshot", () => {
    it("preset.typeScript", async () => {
        expect(removeParser(removePlugin(config.preset.typeScript()))).toMatchSnapshot();
    });
    it("rules.typeScript", async () => {
        expect(removeParser(removePlugin(config.rules.typeScript))).toMatchSnapshot();
    });
});
