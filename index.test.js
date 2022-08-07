const { ESLint } = require("eslint");
const relativize = require("./src/relativize.js");

const eslintIndexJs = new ESLint({
    useEslintrc: false,
    overrideConfigFile: "./index.js",
    extensions: [".js", ".ts", ".cjs", ".cts", ".mjs", ".mts"],
});

describe("ESLint config Snapshot", () => {
    it("index.js for JavaScript", async () => {
        const result = await eslintIndexJs.calculateConfigForFile("./test.js");
        relativize(result);
        expect(result).toMatchSnapshot();
    });
    it("index.js for TypeScript", async () => {
        const result = await eslintIndexJs.calculateConfigForFile("./test.ts");
        relativize(result);
        expect(result).toMatchSnapshot();
    });
});

describe("config between typescript extensions", () => {
    let tsP;
    beforeAll(() => {
        tsP = eslintIndexJs.calculateConfigForFile("./test.ts");
    });
    it(".cts", async () => {
        expect(await tsP).toStrictEqual(await eslintIndexJs.calculateConfigForFile("./test.cts"));
    });
    it(".mts", async () => {
        expect(await tsP).toStrictEqual(await eslintIndexJs.calculateConfigForFile("./test.mts"));
    });
});

describe("config between javascript extensions", () => {
    let jsP;
    beforeAll(() => {
        jsP = eslintIndexJs.calculateConfigForFile("./test.js");
    });
    it(".cts", async () => {
        expect(await jsP).toStrictEqual(await eslintIndexJs.calculateConfigForFile("./test.cjs"));
    });
    it(".mts", async () => {
        expect(await jsP).toStrictEqual(await eslintIndexJs.calculateConfigForFile("./test.mjs"));
    });
});
