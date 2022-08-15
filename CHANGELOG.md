## [2.3.1](https://github.com/tksst/eslint-config/compare/v2.3.0...v2.3.1) (2022-08-15)


### Bug Fixes

* change license from MPL to Apache ([5ff3e26](https://github.com/tksst/eslint-config/commit/5ff3e26101a6885c5d07e9dd797af246e4fe32d0))

# [2.3.0](https://github.com/tksst/eslint-config/compare/v2.2.0...v2.3.0) (2022-07-31)


### Bug Fixes

* remove project-specific settings ([ee36d39](https://github.com/tksst/eslint-config/commit/ee36d39c53dfebb4e401568e9bc911d1e901276b))


### Features

* provide the merged ESLint configuration to users to clarify what settisngs are provided. ([c82549b](https://github.com/tksst/eslint-config/commit/c82549b7351f6dbc3ad4d2303d945f95e9d7c6e7))
* trim the rules ([5a43611](https://github.com/tksst/eslint-config/commit/5a4361102cf22809b49d6ca6967652f2bfafa4dc))

# [2.2.0](https://github.com/tksst/eslint-config/compare/v2.1.0...v2.2.0) (2022-07-31)


### Features

* separate settings for javascript and typescript. ([667ebf8](https://github.com/tksst/eslint-config/commit/667ebf8710bbdccc8bc523123ba42006e87a1660))

# [2.1.0](https://github.com/tksst/eslint-config/compare/v2.0.0...v2.1.0) (2022-07-30)


### Bug Fixes

* add ignoreIIFE to @typescript-eslint/no-floating-promises ([1446c9f](https://github.com/tksst/eslint-config/commit/1446c9fa1f1d4b8b6c9feff90d435f719885806c))
* change no-unsafe-* to error ([de96926](https://github.com/tksst/eslint-config/commit/de96926c0b1660bef7fd65b9829498f0ad31082d))


### Features

* exports configs as CommonJS modules ([2dfe47c](https://github.com/tksst/eslint-config/commit/2dfe47ccf4db12edcf99943a25e32c1c7fb27cd0))

# [2.0.0](https://github.com/tksst/eslint-config/compare/v1.8.0...v2.0.0) (2022-07-30)


### Features

* introduce @typescript-eslint/recommended-requiring-type-checking ([f464a02](https://github.com/tksst/eslint-config/commit/f464a02eaed8b41326604573e9568f39501a27d4))


### BREAKING CHANGES

* This can make a lot of errors in existing code.

# [1.8.0](https://github.com/tksst/eslint-config/compare/v1.7.0...v1.8.0) (2022-07-30)


### Features

* disable max-classes-per-file ([d09288c](https://github.com/tksst/eslint-config/commit/d09288c9362a2b8143245c3e88e8cf8c20d7acd3))
* Replace "extends" to "requires" to make it easier to customize ([cee066e](https://github.com/tksst/eslint-config/commit/cee066e010d2267e0d47e0eb9780a61dc306f4e0))

# [1.7.0](https://github.com/tksst/eslint-config/compare/v1.6.0...v1.7.0) (2022-07-23)


### Features

* Local imports now always require the extension ([03cf4df](https://github.com/tksst/eslint-config/commit/03cf4df571f85a9fa7827edde5403798924248d8))

# [1.6.0](https://github.com/tksst/eslint-config/compare/v1.5.0...v1.6.0) (2022-07-20)


### Bug Fixes

* unable to import packages in devDependencies in jest.config.cjs ([597dc7f](https://github.com/tksst/eslint-config/commit/597dc7f4cef84c401bf456958a8dbd70d4b90ecd))


### Features

* disable global-require as it is deprecated ([231bb5d](https://github.com/tksst/eslint-config/commit/231bb5dd36d056ee545616a70778b78215cee340))

# [1.5.0](https://github.com/tksst/eslint-config/compare/v1.4.0...v1.5.0) (2022-07-10)


### Features

* support extensions mts and cts. ([8ee2acc](https://github.com/tksst/eslint-config/commit/8ee2accb5ca1010e6248e549a83a5c38d4d69291))
* support Node.js 12 ([3ca692c](https://github.com/tksst/eslint-config/commit/3ca692c18544d070d2d72ba9539ccd6c9427b8b4))

# [1.4.0](https://github.com/tksst/eslint-config/compare/v1.3.0...v1.4.0) (2022-06-20)


### Features

* disable class-methods-use ([3c7679d](https://github.com/tksst/eslint-config/commit/3c7679d995429d1cbf0fb07d8066343e33ebe1bd))

# [1.3.0](https://github.com/tksst/eslint-config/compare/v1.2.1...v1.3.0) (2022-05-21)


### Bug Fixes

* missing CHANGELOG. ([7604692](https://github.com/tksst/eslint-config/commit/76046922453644dc59ce4b0d5648da28a06f2e3b))


### Features

* relax some rules ([d5418a2](https://github.com/tksst/eslint-config/commit/d5418a2e06f10e620b117b58982524528b1217d5))

## [1.2.1](https://github.com/tksst/eslint-config/compare/v1.2.0...v1.2.1) (2022-05-03)


### Bug Fixes

* **build:** remove unnecessary files from the release (e.g., files for testing) ([ca27069](https://github.com/tksst/eslint-config/commit/ca2706942c3c4f0adef6d7e1c35069d2cf6f20e3))
* **build:** stop linting on npm install ([22f0a8f](https://github.com/tksst/eslint-config/commit/22f0a8f54a14483a6387ff95a3cbb66785bc8d9b))
* **ci:** CHANGELOG.md is not generated automatically. ([dc4ad07](https://github.com/tksst/eslint-config/commit/dc4ad077e61d25dfec681ff969c4ba9b646397d8))

# [1.2.0](https://github.com/tksst/eslint-config/compare/v1.1.0...v1.2.0) (2022-05-03)


### Features

* new language-specific shareable configs. ([01cdbc5](https://github.com/tksst/eslint-config/commit/01cdbc5d392b26d7b48a9216a20ad470524ca7b3))

# [1.1.0](https://github.com/tksst/eslint-config/compare/v1.0.1...v1.1.0) (2022-04-17)


### Bug Fixes

* unable to use the shareable config on a project's internal directory. ([b0ad18e](https://github.com/tksst/eslint-config/commit/b0ad18e641061f9d25d7844cd8b480d4baf72cdd))


### Features

* disable some airbnb rules ([008ee12](https://github.com/tksst/eslint-config/commit/008ee12a49aef15020aedc3753c575d74c7fab10))
* remove env settings from shareable config. ([1d1612f](https://github.com/tksst/eslint-config/commit/1d1612fae4cecc258d1cb32feb2ea55c4d64f3bf))

## [1.0.1](https://github.com/tksst/eslint-config/compare/v1.0.0...v1.0.1) (2022-04-16)


### Bug Fixes

* This is a dummy commit to make a release. ([1cf7ad6](https://github.com/tksst/eslint-config/commit/1cf7ad659436b51796bb746be245daaf24c7dfc5))

# 1.0.0 (2022-04-16)


### Features

* modify from tksst/typescript-node-starter ([0564cfa](https://github.com/tksst/eslint-config/commit/0564cfa5d88f9231e6aa46712b71cef1f39d36e5))
