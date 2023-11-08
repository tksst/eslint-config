import { FlatESLint } from "eslint/use-at-your-own-risk";

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
