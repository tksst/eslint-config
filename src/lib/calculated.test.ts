import { FlatESLint } from "eslint/use-at-your-own-risk";

function removeVersionFromParser(conf: { languageOptions: { parser: string } }): void {
    conf.languageOptions.parser = conf.languageOptions.parser.replace(/(?<!^)@[^@]+$/, "");
}

function removeVersionFromPlugins(conf: { plugins: string[] }): void {
    conf.plugins = conf.plugins.map((plugin) => plugin.replace(/(?<!^)@[^@]+$/, ""));
}

/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */

describe("ESLint calculated config Snapshot", () => {
    it(".js", async () => {
        const eslint = new FlatESLint();
        const conf = await eslint.calculateConfigForFile("index.js");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/non-nullable-type-assertion-style
        const conf2 = JSON.parse(JSON.stringify(conf) as string) as any;

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        removeVersionFromParser(conf2);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        removeVersionFromPlugins(conf2);

        expect(conf2).toMatchSnapshot();
    });
    it(".ts", async () => {
        const eslint = new FlatESLint();
        const conf = await eslint.calculateConfigForFile("index.ts");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/non-nullable-type-assertion-style
        const conf2 = JSON.parse(JSON.stringify(conf) as string) as any;

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        removeVersionFromParser(conf2);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        removeVersionFromPlugins(conf2);

        expect(conf2).toMatchSnapshot();
    });
    /* eslint-enable */
});
