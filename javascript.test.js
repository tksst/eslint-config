const { ESLint } = require("eslint");
const relativize = require("./relativize");

describe("ESLint config Snapshot", () => {
    let eslint;

    beforeAll(() => {
        eslint = new ESLint({
            useEslintrc: false,
            overrideConfigFile: "./javascript.js",
            extensions: [".js", ".cjs", ".mjs"],
        });
    });

    it("for JavaScript", async () => {
        const result = await eslint.calculateConfigForFile("./test.mjs");
        relativize(result);
        expect(result).toMatchSnapshot();
    });
});
