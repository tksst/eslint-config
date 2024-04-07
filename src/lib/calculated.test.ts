import type { Linter } from "eslint";
import { ESLint } from "eslint";
import { describe, expect, it } from "vitest";

function removeVersionFromParser(conf: { languageOptions: { parser: string } }): void {
    conf.languageOptions.parser = conf.languageOptions.parser.replace(/(?<!^)@[^@]+$/, "");
}

function removeVersionFromPlugins(conf: { plugins: string[] }): void {
    conf.plugins = conf.plugins.map((plugin) => plugin.replace(/(?<!^)@[^@]+$/, ""));
}

function removeDisabledRules(conf: Linter.FlatConfig): void {
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

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

describe("ESLint calculated config Snapshot", () => {
    it(".js", async () => {
        const eslint = new ESLint();
        const conf = await eslint.calculateConfigForFile("index.js");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/non-nullable-type-assertion-style
        const conf2 = JSON.parse(JSON.stringify(conf) as string) as any;

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        removeVersionFromParser(conf2);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        removeVersionFromPlugins(conf2);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        removeDisabledRules(conf2);

        expect(conf2).toMatchSnapshot();
    });
    it(".ts", async () => {
        const eslint = new ESLint();
        const conf = await eslint.calculateConfigForFile("index.ts");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/non-nullable-type-assertion-style
        const conf2 = JSON.parse(JSON.stringify(conf) as string) as any;

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        removeVersionFromParser(conf2);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        removeVersionFromPlugins(conf2);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        removeDisabledRules(conf2);

        expect(conf2).toMatchSnapshot();
    });
    /* eslint-enable */
});
