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

function split(str) {
    return str.includes("/") ? str.split("/", 2) : [undefined, str];
}

function compareStr(a, b) {
    if (a !== undefined && b !== undefined) {
        // eslint-disable-next-line no-nested-ternary
        return a > b ? 1 : a < b ? -1 : 0;
    }
    if (a === b) {
        return 0;
    }
    if (a === undefined) {
        // undefined is after string
        return 1;
    }
    return -1;
}

function sortRules(conf) {
    const ar = Object.entries(conf.rules);
    ar.sort(([a], [b]) => {
        const an = split(a);
        const bn = split(b);

        if (an[0] === bn[0]) {
            return compareStr(an[1], bn[1]);
        }

        return compareStr(an[0], bn[0]);
    });
    conf.rules = Object.fromEntries(ar);
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
    sortRules(config);
    delete config.ignorePatterns;
    delete config.env;
    func(config);
    safeWriteFile(resultJsonFile, JSON.stringify(config));
}

(async () => {
    await fs.mkdir("./dist", { recursive: true });

    const x = createRuleResultJson("./src/javascript-rule-base.js", "./test.js", "./dist/javascript.json", (conf) => {
        delete conf.parserOptions;
    });

    const y = createRuleResultJson("./src/typescript-rule-base.js", "./test.ts", "./dist/typescript.json", (conf) => {
        delete conf.parserOptions.ecmaVersion;
        delete conf.parserOptions.ecmaFeatures;
        delete conf.parserOptions.sourceType;
        conf.parser = "@typescript-eslint/parser";
    });

    await Promise.all([x, y]);
})();
