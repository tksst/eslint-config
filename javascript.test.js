const { ESLint } = require("eslint");
const relativize = require("./relativize.js");

const eslint = new ESLint({
    useEslintrc: false,
    overrideConfigFile: "./javascript.js",
    extensions: [".js", ".cjs", ".mjs"],
});

describe("ESLint config Snapshot", () => {
    it("for JavaScript", async () => {
        const result = await eslint.calculateConfigForFile("./test.js");
        relativize(result);
        expect(result).toMatchSnapshot();
    });
});

describe("config between extensions", () => {
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
