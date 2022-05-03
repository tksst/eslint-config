const { ESLint } = require("eslint");
const relativize = require("./relativize");

describe("ESLint config Snapshot", () => {
    let eslint;

    beforeAll(() => {
        eslint = new ESLint({ useEslintrc: false, overrideConfigFile: "./typescript.js", extensions: [".ts"] });
    });

    it("for TypeScript", async () => {
        const result = await eslint.calculateConfigForFile("./test.ts");
        relativize(result);
        expect(result).toMatchSnapshot();
    });
});
