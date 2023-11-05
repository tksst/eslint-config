/** @type {import('eslint').Linter.Config} */

export default {
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
        "@typescript-eslint/no-useless-empty-export": "warn",
        "prefer-const": "warn",
    },
};
