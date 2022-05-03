const { ESLint } = require("eslint");
const path = require("path");

// ESLint's parser settings cannot be shared as is because it is absolute path.
function relativize(config) {
    if (config.parser !== undefined && config.parser !== null) {
        config.parser = path.relative(".", config.parser);
    }
}

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
