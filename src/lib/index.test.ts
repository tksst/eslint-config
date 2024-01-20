import { type Linter } from "eslint";
import { describe, expect, it } from "vitest";

import * as config from "./index.js";

function removePlugin(c: Linter.FlatConfig[]) {
    return c.map((x) => {
        if (x.plugins !== undefined) {
            delete x.plugins;
        }
        return x;
    });
}

function removeParser(c: Linter.FlatConfig[]) {
    return c.map((x) => {
        if (x.languageOptions?.parser !== undefined) {
            delete x.languageOptions.parser;
        }
        return x;
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
    it("preset.typeScript vitest: true", () => {
        expect(removeParser(removePlugin(config.preset.typeScript({ vitest: true })))).toMatchSnapshot();
    });
});
