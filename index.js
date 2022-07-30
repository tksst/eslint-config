/** @type {import('eslint').Linter.Config} */

module.exports = {
    ...require("./javascript.js"),

    overrides: [
        {
            files: ["*.ts", "*.cts", "*.mts"],
            ...require("./typescript.js"),
        },
    ],
};
