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
    it("config for default", async () => {
        expect(removeParser(removePlugin(config.default))).toMatchSnapshot();
    });
    it("config for JavaScript", async () => {
        expect(removeParser(removePlugin(config.javaScript))).toMatchSnapshot();
    });
    it("config for TypeScript", async () => {
        expect(removeParser(removePlugin(config.typeScript))).toMatchSnapshot();
    });
});
