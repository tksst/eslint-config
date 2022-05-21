/** @type {import('eslint').Linter.Config} */

module.exports = {
    extends: ["./javascript.js", "plugin:@typescript-eslint/recommended", "airbnb-typescript/base", "prettier"],
    parserOptions: {
        project: "./tsconfig.json",
    },
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "prefer-const": "warn",
    },
};
