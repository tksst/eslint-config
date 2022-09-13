/** @type {import('eslint').Linter.Config} */

module.exports = {
    extends: [
        "./javascript-rule-base.js",
        "eslint-config-airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "prettier",
    ],
    parserOptions: {
        project: "./tsconfig.json",
    },
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-floating-promises": ["error", { ignoreIIFE: true }],
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/strict-boolean-expressions": "error",
        "@typescript-eslint/prefer-readonly": "warn",
        "@typescript-eslint/consistent-type-imports": "warn",
        "@typescript-eslint/explicit-member-accessibility": "warn",
        "@typescript-eslint/no-redundant-type-constituents": "warn",
        "no-useless-empty-export": "warn",
        "prefer-const": "warn",
        // from https://github.com/iamturns/eslint-config-airbnb-typescript/blob/4aec5702be5b4e74e0e2f40bc78b4bc961681de1/lib/shared.js#L230-L240
        "import/extensions": ["error", "ignorePackages"],
    },
};
