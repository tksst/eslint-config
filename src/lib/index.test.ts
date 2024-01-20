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

describe("config snapshot", () => {
    it("config.typeScript", () => {
        expect(removeParser(removePlugin(config.config.typeScript))).toMatchSnapshot();
    });
    it("config.javaScript", () => {
        expect(removeParser(removePlugin(config.config.javaScript))).toMatchSnapshot();
    });
    it("config.typeScriptOnly", () => {
        expect(removeParser(removePlugin(config.config.typeScriptOnly))).toMatchSnapshot();
    });
    it("config.jest", () => {
        expect(removeParser(removePlugin([config.config.jest]))).toMatchSnapshot();
    });
});

describe("preset snapshots", () => {
    it("preset.typeScript", () => {
        expect(removeParser(removePlugin(config.preset.typeScript()))).toMatchSnapshot();
    });
    it("preset.typeScript jest: true", () => {
        expect(removeParser(removePlugin(config.preset.typeScript({ jest: true })))).toMatchSnapshot();
    });
});
