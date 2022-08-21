const { ESLint } = require("eslint");
const fs = require("fs/promises");
const path = require("path");
const { randomBytes } = require("crypto");

function trimRules(conf) {
    Object.entries(conf.rules)
        // eslint-disable-next-line no-unused-vars
        .filter(([key, value]) => Array.isArray(value) && (value[0] === "off" || value[0] === 0))
        // eslint-disable-next-line no-unused-vars
        .forEach(([key, value]) => {
            conf.rules[key] = undefined;
        });
}

async function safeWriteFile(file, str) {
    const tmpfile = path.join(path.dirname(file), `temp-${randomBytes(8).toString("base64url")}`);
    const handle = await fs.open(tmpfile, "w");
    try {
        await handle.writeFile(str);
        await handle.datasync();
        await fs.rename(tmpfile, file);
    } catch (e) {
        await fs.rm(tmpfile, { force: true });
        throw e;
    } finally {
        await handle.close();
    }
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
    safeWriteFile(resultJsonFile, JSON.stringify(config));
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
