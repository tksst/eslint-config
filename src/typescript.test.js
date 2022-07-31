const { ESLint } = require("eslint");
const relativize = require("./relativize.js");

const eslint = new ESLint({
    useEslintrc: false,
    overrideConfigFile: "./dist/typescript.json",
    extensions: [".ts", ".cts", ".mts"],
});

describe("ESLint config Snapshot", () => {
    it("for TypeScript", async () => {
        const result = await eslint.calculateConfigForFile("./test.ts");
        relativize(result);
        expect(result).toMatchSnapshot();
    });
});

describe("config between extensions", () => {
    let tsP;
    beforeAll(() => {
        tsP = eslint.calculateConfigForFile("./test.ts");
    });
    it(".cts", async () => {
        expect(await tsP).toStrictEqual(await eslint.calculateConfigForFile("./test.cts"));
    });
    it(".mts", async () => {
        expect(await tsP).toStrictEqual(await eslint.calculateConfigForFile("./test.mts"));
    });
});
