const { ESLint } = require("eslint");
const relativize = require("./relativize.js");

const eslint = new ESLint({
    useEslintrc: false,
    overrideConfigFile: "./dist/typescript.json",
});

describe("ESLint config Snapshot", () => {
    it("for TypeScript", async () => {
        const result = await eslint.calculateConfigForFile("./test.ts");
        relativize(result);
        expect(result).toMatchSnapshot();
    });
});
