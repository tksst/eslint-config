## [7.0.2](https://github.com/tksst/eslint-config/compare/v7.0.1...v7.0.2) (2023-02-20)


### Bug Fixes

* **deps:** update npm dependencies to v5.52.0 ([e7410ba](https://github.com/tksst/eslint-config/commit/e7410baee658b882de4006ac968ac1525ec73416))

## [7.0.1](https://github.com/tksst/eslint-config/compare/v7.0.0...v7.0.1) (2023-02-03)


### Bug Fixes

* **deps:** update npm dependencies ([e61a6b1](https://github.com/tksst/eslint-config/commit/e61a6b1ce3da484a4010d5ced2a2a4972b6e1051))

# [7.0.0](https://github.com/tksst/eslint-config/compare/v6.0.0...v7.0.0) (2023-01-28)


### Features

* **deps:** update dependency eslint-plugin-simple-import-sort to v10 ([#143](https://github.com/tksst/eslint-config/issues/143)) ([d864fbd](https://github.com/tksst/eslint-config/commit/d864fbd831a0c71abbfbcb2d0e30f06fcfd338a8))


### BREAKING CHANGES

* **deps:** This release might move some imported items with `type` around. This is a breaking formatting change (that only affects TypeScript and Flow), but only in the form of that you need to autofix your files. https://github.com/lydell/eslint-plugin-simple-import-sort/blob/7d4947ad55a446e0a26ac6db8be19ce6fddd4d19/CHANGELOG.md#version-1000-2023-01-27

# [6.0.0](https://github.com/tksst/eslint-config/compare/v5.0.0...v6.0.0) (2023-01-26)


### Features

* provides a preset for TypeScript projects ([e362c56](https://github.com/tksst/eslint-config/commit/e362c56c2bc6804e24b0f4842b444b5b8c9e258b))


### BREAKING CHANGES

* The configuration files have been moved to the `rules` with some changes.

# [5.0.0](https://github.com/tksst/eslint-config/compare/v4.3.1...v5.0.0) (2023-01-24)


### Bug Fixes

* **deps:** update dependency eslint-plugin-simple-import-sort to v9 ([23c5dc0](https://github.com/tksst/eslint-config/commit/23c5dc0d91bd59d13432e27fbb4506af8447d244))
* **deps:** update npm dependencies to v5.49.0 ([6918f9c](https://github.com/tksst/eslint-config/commit/6918f9c2736d631af94f638894bbba814e1744af))


### Features

* migrate to "flat config" of ESLint ([9e16008](https://github.com/tksst/eslint-config/commit/9e16008ff2d3493fb117ff152acf2ee7c4060858))


### BREAKING CHANGES

* This package now provides "flat config" and the entry point has changed, so users will need to migrate to it.
* This package no longer provides eslint-plugin-import rules.

## [4.3.1](https://github.com/tksst/eslint-config/compare/v4.3.0...v4.3.1) (2023-01-07)


### Bug Fixes

* add eslint-plugin-import to peerDependencies to fix the plugin not found error (regression of b70ef30) ([0344f98](https://github.com/tksst/eslint-config/commit/0344f98bee939e9485ba98eb1b47f9b36e1c6d27))
* disable import/order, which duplicates the role of simple-import-sort ([e3d251c](https://github.com/tksst/eslint-config/commit/e3d251c251b95988accb032d9faa48c6fda49453))

# [4.3.0](https://github.com/tksst/eslint-config/compare/v4.2.0...v4.3.0) (2023-01-07)


### Bug Fixes

* Eliminate the need for users to install eslint-config-airbnb-typescript and eslint-config-prettier ([b70ef30](https://github.com/tksst/eslint-config/commit/b70ef30920ddb59233fd4d36f0baa79e7a659f1d))


### Features

* sort the rules for easy reference ([86e08fc](https://github.com/tksst/eslint-config/commit/86e08fc487158ee4b113544bd4fe883f11882f01))

# [4.2.0](https://github.com/tksst/eslint-config/compare/v4.1.0...v4.2.0) (2022-11-12)


### Features

* enable a new rule `no-empty-static-block` ([16afe8c](https://github.com/tksst/eslint-config/commit/16afe8c051e0bad7fbeb24a7505a2b74a71b3c1c))

# [4.1.0](https://github.com/tksst/eslint-config/compare/v4.0.0...v4.1.0) (2022-10-08)


### Features

* disable some rules ([03e627d](https://github.com/tksst/eslint-config/commit/03e627d04ac81eb12d7c4510fe60a521e2951bf9))

# [4.0.0](https://github.com/tksst/eslint-config/compare/v3.0.1...v4.0.0) (2022-09-13)


### Features

* enable typescript-eslint-strict rules and also add some rules for better code. ([890afce](https://github.com/tksst/eslint-config/commit/890afce22cefed6653e96978d0dc53fd183a1296))


### BREAKING CHANGES

* This change may cause errors in the current code.

## [3.0.1](https://github.com/tksst/eslint-config/compare/v3.0.0...v3.0.1) (2022-09-04)


### Bug Fixes

* support eslint-plugin-simple-import-sort v8 ([1142f31](https://github.com/tksst/eslint-config/commit/1142f312cce1444e00aaf7ccc2c3a2aeafd8b972))

# [3.0.0](https://github.com/tksst/eslint-config/compare/v2.3.1...v3.0.0) (2022-08-30)


### Features

* introduce eslint-plugin-jest ([d587207](https://github.com/tksst/eslint-config/commit/d587207e5f89feaf68c11ad4639533dd1f75c6c0))


### BREAKING CHANGES

* This can cause errors in the test code in jest.

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
