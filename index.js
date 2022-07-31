/** @type {import('eslint').Linter.Config} */

module.exports = {
    overrides: [
        {
            files: ["*.js", "*.cjs", "*.mjs"],
            ...require("./javascript.js"),
        },
        {
            files: ["*.ts", "*.cts", "*.mts"],
            ...require("./typescript.js"),
        },
    ],
};
