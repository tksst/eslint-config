import { type Linter } from "eslint";
import { FlatESLint } from "eslint/use-at-your-own-risk";

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

describe("ESLint calculated config Snapshot", () => {
    /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
    it(".js", async () => {
        const eslint = new FlatESLint();
        const conf = await eslint.calculateConfigForFile("index.js");
        expect(conf).toMatchSnapshot();
    });
    it(".ts", async () => {
        const eslint = new FlatESLint();
        const conf = await eslint.calculateConfigForFile("index.ts");
        expect(conf).toMatchSnapshot();
    });
    /* eslint-enable */
});
