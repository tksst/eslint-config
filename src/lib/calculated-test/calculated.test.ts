import path from "node:path";
import { fileURLToPath } from "node:url";

import type { Linter } from "eslint";
import { ESLint } from "eslint";
import { describe, expect, it } from "vitest";

import { preset } from "../index.js";

function removeVersionFromParser(conf: { languageOptions: { parser: string } }): void {
    conf.languageOptions.parser = conf.languageOptions.parser.replace(/(?<!^)@[^@]+$/, "");
}

function removeVersionFromPlugins(conf: { plugins: string[] }): void {
    conf.plugins = conf.plugins.map((plugin) => plugin.replace(/(?<!^)@[^@]+$/, ""));
}

function removeDisabledRules(conf: Linter.Config): void {
    if (conf.rules === undefined) {
        return;
    }

    const removingList = Object.entries(conf.rules)
        .filter(([, v]) => Array.isArray(v))
        // @ts-expect-error This must be an array
        .filter(([, v]) => v[0] === 0)
        .map(([k]) => k);

    for (const key of removingList) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete conf.rules[key];
    }
}

const thisFilePath = fileURLToPath(import.meta.url);

describe("ESLint calculated config Snapshot", () => {
    describe.each([true, false])("jsIsCjs: %p", (jsIsCjs) => {
        describe.each([true, false])("jest: %p", (jest) => {
            describe.each([true, false])("vitest: %p", (vitest) => {
                const eslint = new ESLint({
                    cwd: path.dirname(thisFilePath),
                    overrideConfig: preset.typeScript({ jsIsCjs, jest, vitest }),
                });

                it.each(["js", "cjs", "mjs", "ts"])("filetype: %p", async (filetype) => {
                    /* eslint-disable @typescript-eslint/no-unsafe-assignment */

                    const conf = await eslint.calculateConfigForFile(`index.${filetype}`);
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/non-nullable-type-assertion-style
                    const conf2 = JSON.parse(JSON.stringify(conf) as string) as any;

                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    removeVersionFromParser(conf2);
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    removeVersionFromPlugins(conf2);
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    removeDisabledRules(conf2);

                    expect(conf2).toMatchSnapshot();

                    /* eslint-enable */
                });
            });
        });
    });
});
