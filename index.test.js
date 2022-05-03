const { ESLint } = require("eslint");
const relativize = require("./relativize");

describe("ESLint config Snapshot", () => {
    let eslint;

    beforeAll(() => {
        eslint = new ESLint({ useEslintrc: false, overrideConfigFile: "./index.js", extensions: [".js", ".ts"] });
    });

    it("for JavaScript", async () => {
        const result = await eslint.calculateConfigForFile("./test.js");
        relativize(result);
        expect(result).toMatchSnapshot();
    });

    it("for TypeScript", async () => {
        const result = await eslint.calculateConfigForFile("./test.ts");
        relativize(result);
        expect(result).toMatchSnapshot();
    });
});
