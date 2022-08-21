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

async function createRuleResultJson(configFile, targetFileForRule, resultJsonFile, func) {
    const eslint = new ESLint({
        useEslintrc: false,
        overrideConfigFile: configFile,
    });

    const config = await eslint.calculateConfigForFile(targetFileForRule);
    trimRules(config);
    delete config.ignorePatterns;
    delete config.env;
    func(config);
    await fs.writeFile(resultJsonFile, JSON.stringify(config));
}

(async () => {
    await fs.mkdir("./dist");
})();

(async () => {
    await createRuleResultJson("./src/javascript-rule-base.js", "./test.js", "./dist/javascript.json", (conf) => {
        delete conf.parserOptions;
    });
})();

(async () => {
    await createRuleResultJson("./src/typescript-rule-base.js", "./test.ts", "./dist/typescript.json", (conf) => {
        delete conf.parserOptions.ecmaVersion;
        delete conf.parserOptions.ecmaFeatures;
        delete conf.parserOptions.sourceType;
        conf.parser = "@typescript-eslint/parser";
    });
})();
