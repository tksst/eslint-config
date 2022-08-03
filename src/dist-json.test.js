const { ESLint } = require("eslint");
const relativize = require("./relativize.js");

describe("ESLint config Snapshot", () => {
    it("dist/javascript.json", async () => {
        const eslint = new ESLint({
            useEslintrc: false,
            overrideConfigFile: "./dist/javascript.json",
        });
        const result = await eslint.calculateConfigForFile("./test.js");
        relativize(result);
        expect(result).toMatchSnapshot();
    });
});
