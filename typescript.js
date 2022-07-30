/** @type {import('eslint').Linter.Config} */

module.exports = {
    extends: [
        "./javascript.js",
        "./airbnb-typescript-base-override.js",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
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
        // from https://github.com/iamturns/eslint-config-airbnb-typescript/blob/4aec5702be5b4e74e0e2f40bc78b4bc961681de1/lib/shared.js#L230-L240
        "import/extensions": ["error", "ignorePackages"],
    },
};
