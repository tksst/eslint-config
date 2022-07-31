const { ESLint } = require("eslint");
const relativize = require("./src/relativize.js");

const eslint = new ESLint({
    useEslintrc: false,
    overrideConfigFile: "./index.js",
    extensions: [".js", ".ts", ".cjs", ".cts", ".mjs", ".mts"],
});

describe("ESLint config Snapshot", () => {
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

describe("config between typescript extensions", () => {
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

describe("config between javascript extensions", () => {
    let jsP;
    beforeAll(() => {
        jsP = eslint.calculateConfigForFile("./test.js");
    });
    it(".cts", async () => {
        expect(await jsP).toStrictEqual(await eslint.calculateConfigForFile("./test.cjs"));
    });
    it(".mts", async () => {
        expect(await jsP).toStrictEqual(await eslint.calculateConfigForFile("./test.mjs"));
    });
});
