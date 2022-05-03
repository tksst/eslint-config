/** @type {import('eslint').Linter.Config} */

module.exports = {
    extends: ["./javascript.js"],

    overrides: [
        {
            files: "*.ts",
            extends: ["./typescript.js"],
        },
    ],
};
