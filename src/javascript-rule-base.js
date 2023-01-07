/** @type {import('eslint').Linter.Config} */

module.exports = {
    plugins: ["simple-import-sort", "jest"],
    extends: ["eslint:recommended", "airbnb-base", "plugin:jest/style", "plugin:jest/recommended", "prettier"],
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
        "import/order": "off",
        "import/prefer-default-export": "off",
        // almost all are from https://github.com/airbnb/javascript/blob/f3d3a075cda2acc02011e71991c10bb5b4a15278/packages/eslint-config-airbnb-base/rules/imports.js#L71-L94
        "import/no-extraneous-dependencies": [
            "error",
            {
                devDependencies: [
                    "test/**", // tape, common npm pattern
                    "tests/**", // also common npm pattern
                    "spec/**", // mocha, rspec-like pattern
                    "**/__tests__/**", // jest pattern
                    "**/__mocks__/**", // jest pattern
                    "test.{js,cjs,jsx}", // repos with a single test file
                    "test-*.{js,cjs,jsx}", // repos with multiple top-level test files
                    "**/*{.,_}{test,spec}.{js,cjs,jsx}", // tests where the extension or filename suffix denotes that it is a test
                    "**/jest.config.{js,cjs}", // jest config
                    "**/jest.setup.{js,cjs}", // jest setup
                    "**/vue.config.js", // vue-cli config
                    "**/webpack.config.js", // webpack config
                    "**/webpack.config.*.js", // webpack config
                    "**/rollup.config.js", // rollup config
                    "**/rollup.config.*.js", // rollup config
                    "**/gulpfile.js", // gulp config
                    "**/gulpfile.*.js", // gulp config
                    "**/Gruntfile{,.js}", // grunt config
                    "**/protractor.conf.js", // protractor config
                    "**/protractor.conf.*.js", // protractor config
                    "**/karma.conf.js", // karma config
                    "**/.eslintrc.{js,cjs}", // eslint config
                ],
                optionalDependencies: false,
            },
        ],
        // https://github.com/airbnb/javascript/blob/f3d3a075cda2acc02011e71991c10bb5b4a15278/packages/eslint-config-airbnb-base/rules/imports.js#L138-L144
        "import/extensions": ["error", "ignorePackages"],
    },
};
