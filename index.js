/** @type {import('eslint').Linter.Config} */

module.exports = {
    plugins: ["simple-import-sort"],
    extends: ["eslint:recommended", "airbnb-base", "prettier"],
    rules: {
        "no-console": "off",
        "no-empty": ["error", { allowEmptyCatch: true }],
        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",
        "sort-imports": "off",
        "import/prefer-default-export": "off",
    },
    overrides: [
        {
            files: "*.ts",
            extends: ["plugin:@typescript-eslint/recommended", "airbnb-typescript/base", "prettier"],
            parserOptions: {
                project: "./tsconfig.json",
            },
            rules: {
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/no-use-before-define": "off",
                "@typescript-eslint/no-explicit-any": "off",
            },
        },
    ],
};
