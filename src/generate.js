const { ESLint } = require("eslint");
const fs = require("fs/promises");

(async () => {
    await fs.mkdir("./dist");
})();

(async () => {
    const eslint = new ESLint({
        useEslintrc: false,
        overrideConfigFile: "./src/javascript-rule-base.js",
    });

    const result = await eslint.calculateConfigForFile("./test.js");
    result.ignorePatterns = undefined;
    await fs.writeFile("./dist/javascript.json", JSON.stringify(result));
})();

(async () => {
    const eslint = new ESLint({
        useEslintrc: false,
        overrideConfigFile: "./src/typescript-rule-base.js",
    });

    const result = await eslint.calculateConfigForFile("./test.ts");
    result.ignorePatterns = undefined;
    result.parser = "@typescript-eslint/parser";
    await fs.writeFile("./dist/typescript.json", JSON.stringify(result));
})();
