/** @type {import('eslint').Linter.Config} */

module.exports = {
    ...require("./dist/javascript.json"),

    overrides: [
        {
            files: ["*.ts", "*.cts", "*.mts"],
            ...require("./dist/typescript.json"),
        },
    ],
};
