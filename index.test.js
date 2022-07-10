const { ESLint } = require("eslint");
const relativize = require("./relativize");

describe("ESLint config Snapshot", () => {
    let eslint;

    beforeAll(() => {
        eslint = new ESLint({
            useEslintrc: false,
            overrideConfigFile: "./index.js",
            extensions: [".js", ".ts", ".cjs", ".cts", ".mjs", ".mts"],
        });
    });

    it("for JavaScript", async () => {
        const result = await eslint.calculateConfigForFile("./test.mjs");
        relativize(result);
        expect(result).toMatchSnapshot();
    });

    it("for TypeScript", async () => {
        const result = await eslint.calculateConfigForFile("./test.mts");
        relativize(result);
        expect(result).toMatchSnapshot();
    });
});
