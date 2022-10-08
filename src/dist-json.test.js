const { ESLint } = require("eslint");
const normalizeParserForTest = require("./normalizeParserForTest.js");

describe("ESLint config Snapshot", () => {
    it("dist/typescript.json", async () => {
        const eslint = new ESLint({
            useEslintrc: false,
            overrideConfigFile: "./dist/typescript.json",
        });
        const result = await eslint.calculateConfigForFile("./test.ts");
        normalizeParserForTest(result);
        expect(result).toMatchSnapshot();
    });
    it("dist/javascript.json", async () => {
        const eslint = new ESLint({
            useEslintrc: false,
            overrideConfigFile: "./dist/javascript.json",
        });
        const result = await eslint.calculateConfigForFile("./test.js");
        normalizeParserForTest(result);
        expect(result).toMatchSnapshot();
    });
});
