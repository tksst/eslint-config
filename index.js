/** @type {import('eslint').Linter.Config} */

module.exports = {
    overrides: [
        {
            files: ["*.js", "*.cjs", "*.mjs"],
            ...require("./dist/javascript.json"),
        },
        {
            files: ["*.ts", "*.cts", "*.mts"],
            ...require("./dist/typescript.json"),
        },
    ],
};
