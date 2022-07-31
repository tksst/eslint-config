const { ESLint } = require("eslint");
const fs = require("fs/promises");

(async () => {
    await fs.mkdir("./dist");
})();

(async () => {
    const eslint = new ESLint({
        useEslintrc: false,
        overrideConfigFile: "./src/javascript.js",
        extensions: [".js", ".cjs", ".mjs"],
    });

    const result = await eslint.calculateConfigForFile("./test.js");
    result.ignorePatterns = undefined;
    await fs.writeFile("./dist/javascript.json", JSON.stringify(result, undefined, 2));
})();

(async () => {
    const eslint = new ESLint({
        useEslintrc: false,
        overrideConfigFile: "./src/typescript.js",
        extensions: [".ts", ".cts", ".mts"],
    });

    const result = await eslint.calculateConfigForFile("./test.ts");
    result.ignorePatterns = undefined;
    result.parser = "@typescript-eslint/parser";
    await fs.writeFile("./dist/typescript.json", JSON.stringify(result, undefined, 2));
})();
