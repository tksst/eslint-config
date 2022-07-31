const { ESLint } = require("eslint");
const fs = require("fs/promises");

function trimRules(conf) {
    Object.entries(conf.rules)
        // eslint-disable-next-line no-unused-vars
        .filter(([key, value]) => Array.isArray(value) && (value[0] === "off" || value[0] === 0))
        // eslint-disable-next-line no-unused-vars
        .forEach(([key, value]) => {
            conf.rules[key] = undefined;
        });
}

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
    trimRules(result);
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
    trimRules(result);
    result.ignorePatterns = undefined;
    result.parser = "@typescript-eslint/parser";
    await fs.writeFile("./dist/typescript.json", JSON.stringify(result, undefined, 2));
})();
