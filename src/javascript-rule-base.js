/** @type {import('eslint').Linter.Config} */

export default {
    rules: {
        "no-console": "off",
        "no-empty": ["error", { allowEmptyCatch: true }],
        "no-empty-static-block": "warn",
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
        "prefer-destructuring": [
            "error",
            {
                AssignmentExpression: {
                    array: false,
                    object: false,
                },
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        "prefer-regex-literals": "off",
        "class-methods-use-this": "off",
        "global-require": "off", // this is DEPRECATED in ESLint v7.0.0
        "max-classes-per-file": "off",

        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",
        "sort-imports": "off",
        "redos/no-vulnerable": "error",
    },
};
