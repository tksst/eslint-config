/** @type {import('eslint').Linter.Config} */

module.exports = {
    plugins: ["simple-import-sort"],
    extends: ["eslint:recommended", "airbnb-base", "prettier"],
    rules: {
        "no-console": "off",
        "no-empty": ["error", { allowEmptyCatch: true }],
        "no-restricted-syntax": "off",
        "no-plusplus": "off",
        "no-continue": "off",
        "no-bitwise": "off",
        "no-param-reassign": "off",
        "no-await-in-loop": "warn",
        "no-empty-function": "off",
        "no-unused-vars": "warn",
        "default-case": "off",
        "prefer-const": "warn",

        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",
        "sort-imports": "off",
        "import/prefer-default-export": "off",
    },
};
