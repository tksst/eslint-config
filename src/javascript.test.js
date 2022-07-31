const { ESLint } = require("eslint");
const relativize = require("./relativize.js");

const eslint = new ESLint({
    useEslintrc: false,
    overrideConfigFile: "./dist/javascript.json",
});

describe("ESLint config Snapshot", () => {
    it("for JavaScript", async () => {
        const result = await eslint.calculateConfigForFile("./test.js");
        relativize(result);
        expect(result).toMatchSnapshot();
    });
});
