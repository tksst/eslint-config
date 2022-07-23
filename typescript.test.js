const { ESLint } = require("eslint");
const relativize = require("./relativize.js");

describe("ESLint config Snapshot", () => {
    let eslint;

    beforeAll(() => {
        eslint = new ESLint({
            useEslintrc: false,
            overrideConfigFile: "./typescript.js",
            extensions: [".ts", ".cts", ".mts"],
        });
    });

    it("for TypeScript", async () => {
        const result = await eslint.calculateConfigForFile("./test.ts");
        relativize(result);
        expect(result).toMatchSnapshot();
    });
    it("for TypeScript cts", async () => {
        const result = await eslint.calculateConfigForFile("./test.cts");
        relativize(result);
        expect(result).toMatchSnapshot();
    });
    it("for TypeScript mts", async () => {
        const result = await eslint.calculateConfigForFile("./test.mts");
        relativize(result);
        expect(result).toMatchSnapshot();
    });
});
