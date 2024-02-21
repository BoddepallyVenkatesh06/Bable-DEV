# Changelog

> **Tags:**
>
> - :boom: [Breaking Change]
> - :eyeglasses: [Spec Compliance]
> - :rocket: [New Feature]
> - :bug: [Bug Fix]
> - :memo: [Documentation]
> - :house: [Internal]
> - :nail_care: [Polish]

_Note: Gaps between patch versions are faulty, broken or test releases._

This file contains the changelog starting from v8.0.0-alpha.0.

<!-- DO NOT CHANGE THESE COMMENTS -->
<!-- insert-new-changelog-here -->

## v8.0.0-alpha.4 (2023-10-11)

This release does not include any changes specific to Babel 8, but it ports all the recent Babel 7 commits to Babel 8.

## v8.0.0-alpha.3 (2023-09-26)

#### :boom: Breaking Change
* `babel-node`
  * [#15956](https://github.com/babel/babel/pull/15956) [babel 8] Remove `-d`/`-gc` babel-node aliases ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`
  * [#15869](https://github.com/babel/babel/pull/15869) Disallow sync `createConfigItem`, `loadPartialConfig`, `loadOptions` usage ([@JLHwung](https://github.com/JLHwung))

#### :house: Internal
* `babel-code-frame`, `babel-highlight`
  * [#15792](https://github.com/babel/babel/pull/15792) [babel 8] Use ESM-based `chalk@5` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
## v8.0.0-alpha.2 (2023-08-09)

#### :bug: Bug Fix
* `babel-core`, `babel-traverse`
  * [#15759](https://github.com/babel/babel/pull/15759) [babel 8] Reland "Use `NodePath#hub` as part of the paths cache key" ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :nail_care: Polish
* `babel-preset-typescript`
  * [#15847](https://github.com/babel/babel/pull/15847) Provide better error message when allowDeclareFields is enabled ([@JLHwung](https://github.com/JLHwung))

#### :house: Internal
* `babel-helper-create-class-features-plugin`, `babel-plugin-transform-async-generator-functions`, `babel-plugin-transform-class-static-block`, `babel-plugin-transform-dynamic-import`, `babel-plugin-transform-export-namespace-from`, `babel-plugin-transform-json-strings`, `babel-plugin-transform-logical-assignment-operators`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-modules-systemjs`, `babel-plugin-transform-nullish-coalescing-operator`, `babel-plugin-transform-numeric-separator`, `babel-plugin-transform-object-rest-spread`, `babel-plugin-transform-optional-catch-binding`, `babel-plugin-transform-optional-chaining`, `babel-plugin-transform-private-property-in-object`
  * [#15823](https://github.com/babel/babel/pull/15823) Do not use syntax plugins for syntax enabled by default ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-code-frame`, `babel-highlight`
  * [#15814](https://github.com/babel/babel/pull/15814) [babel 8] Use `chalk@4` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

## v8.0.0-alpha.0 (2023-07-20)

#### :eyeglasses: Spec Compliance
* `babel-parser`
  * [#12451](https://github.com/babel/babel/pull/12451) [babel 8] Report a SyntaxError for `}` and `>` in JSX text ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#12447](https://github.com/babel/babel/pull/12447) [babel 8] Disallow sequence expressions in JSX expression containers ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :boom: Breaking Change
* Other
  * [#15763](https://github.com/babel/babel/pull/15763) [babel 8] Bump eslint-parser/plugin eslint requirements ([@JLHwung](https://github.com/JLHwung))
  * [#13921](https://github.com/babel/babel/pull/13921) [babel 8] Align `allow*` parser options with ESLint behavior ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* _All packages_
  * [#15585](https://github.com/babel/babel/pull/15585) [babel 8] Require Node.js `^16.20.0 || ^18.16.0 || >=20.0.0` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#14013](https://github.com/babel/babel/pull/14013) [babel 8] Add `"exports"` to every package ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-proposal-decorators`, `babel-plugin-proposal-pipeline-operator`, `babel-plugin-transform-class-properties`
  * [#15676](https://github.com/babel/babel/pull/15676) [babel 8] Only support `legacy` and `2023-05` decorators ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`, `babel-helper-create-class-features-plugin`, `babel-plugin-transform-arrow-functions`, `babel-plugin-transform-computed-properties`, `babel-plugin-transform-for-of`, `babel-plugin-transform-regenerator`, `babel-plugin-transform-unicode-escapes`, `babel-preset-env`, `babel-traverse`, `babel-types`
  * [#15576](https://github.com/babel/babel/pull/15576) [babel 8] Other Babel 8 misc changes ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`, `babel-helper-builder-binary-assignment-operator-visitor`, `babel-helper-create-class-features-plugin`, `babel-helper-create-regexp-features-plugin`, `babel-helper-environment-visitor`, `babel-helper-member-expression-to-functions`, `babel-helper-module-transforms`, `babel-helper-plugin-utils`, `babel-helper-replace-supers`, `babel-helper-simple-access`, `babel-helper-string-parser`, `babel-helper-transform-fixture-test-runner`, `babel-helpers`, `babel-plugin-transform-modules-commonjs`, `babel-preset-env`
  * [#15550](https://github.com/babel/babel/pull/15550) More misc Babel 8 little changes ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-cli`, `babel-compat-data`, `babel-core`, `babel-helper-create-class-features-plugin`, `babel-helper-environment-visitor`, `babel-helper-replace-supers`, `babel-helpers`, `babel-parser`, `babel-plugin-transform-for-of`, `babel-plugin-transform-react-jsx`, `babel-preset-env`, `babel-traverse`, `babel-types`
  * [#15068](https://github.com/babel/babel/pull/15068) Babel 8 misc changes ([@JLHwung](https://github.com/JLHwung))
* `babel-types`
  * [#15527](https://github.com/babel/babel/pull/15527) [babel 8] Remove builders present only for backwards-compatibility ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#14464](https://github.com/babel/babel/pull/14464) [babel 8] Remove `selfClosing` from `jsxElement` builder ([@wjw99830](https://github.com/wjw99830))
* `babel-core`, `babel-plugin-syntax-flow`, `babel-plugin-syntax-jsx`, `babel-plugin-syntax-typescript`, `babel-plugin-transform-parameters`, `babel-plugin-transform-react-jsx-development`, `babel-plugin-transform-spread`, `babel-plugin-transform-typescript`, `babel-preset-flow`, `babel-preset-typescript`, `babel-standalone`
  * [#14955](https://github.com/babel/babel/pull/14955) [babel 8] Better file ext handling for TS and Flow presets ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-traverse`
  * [#15288](https://github.com/babel/babel/pull/15288) [babel 8] Remove `block` argument from `Scope#rename` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-generator`, `babel-helper-compilation-targets`, `babel-preset-env`, `babel-preset-flow`, `babel-types`
  * [#14179](https://github.com/babel/babel/pull/14179) Bundle most packages in Babel 8 ([@JLHwung](https://github.com/JLHwung))
* `babel-generator`, `babel-helper-builder-binary-assignment-operator-visitor`, `babel-helper-create-class-features-plugin`, `babel-helper-member-expression-to-functions`, `babel-helper-skip-transparent-expression-wrappers`, `babel-plugin-proposal-function-bind`, `babel-plugin-proposal-logical-assignment-operators`, `babel-plugin-proposal-optional-chaining`, `babel-plugin-proposal-partial-application`, `babel-plugin-transform-proto-to-assign`, `babel-plugin-transform-spread`, `babel-traverse`, `babel-types`
  * [#14750](https://github.com/babel/babel/pull/14750) Remove `Super` from `Expression` alias ([@JLHwung](https://github.com/JLHwung))
* `babel-core`, `babel-generator`, `babel-helper-create-class-features-plugin`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-decorators`, `babel-plugin-proposal-pipeline-operator`, `babel-plugin-syntax-decorators`, `babel-plugin-transform-function-name`, `babel-plugin-transform-typescript`, `babel-standalone`
  * [#12712](https://github.com/babel/babel/pull/12712) [babel 8] Remove support for the `2018-09` decorators proposal ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`, `babel-helper-module-imports`, `babel-helper-transform-fixture-test-runner`, `babel-node`, `babel-plugin-proposal-class-static-block`, `babel-plugin-syntax-decorators`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-runtime`, `babel-standalone`
  * [#12695](https://github.com/babel/babel/pull/12695) [babel 8] Disallow synchronous usage of `babel.*` callback methods ([@JLHwung](https://github.com/JLHwung))
* `babel-generator`, `babel-types`
  * [#14465](https://github.com/babel/babel/pull/14465) [babel 8] `ObjectTypeAnnotation` fields must always be arrays ([@danez](https://github.com/danez))
  * [#12361](https://github.com/babel/babel/pull/12361) [babel 8] Remove the `Noop` node type ([@sidntrivedi012](https://github.com/sidntrivedi012))
* `babel-generator`, `babel-parser`, `babel-types`
  * [#13709](https://github.com/babel/babel/pull/13709) [babel 8] fix properties name for function-like TS nodes ([@sosukesuzuki](https://github.com/sosukesuzuki))
  * [#12829](https://github.com/babel/babel/pull/12829) [babel 8] Use an identifier for `TSTypeParameter.name` ([@fedeci](https://github.com/fedeci))
* `babel-node`, `babel-register`
  * [#14025](https://github.com/babel/babel/pull/14025) [babel 8] Move `@babel/register` transform to a separate worker ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`
  * [#13919](https://github.com/babel/babel/pull/13919) Improve template tokenizing ([@JLHwung](https://github.com/JLHwung))
  * [#13752](https://github.com/babel/babel/pull/13752) [babel 8] Materialize ESTree's `classFeatures` option ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-transform-react-constant-elements`, `babel-preset-env`
  * [#13866](https://github.com/babel/babel/pull/13866) [babel 8] Enable preset-env bugfixes by default ([@JLHwung](https://github.com/JLHwung))
* `babel-core`
  * [#13199](https://github.com/babel/babel/pull/13199) [babel 8] Move ESLint parsing to a Worker ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-generator`, `babel-parser`
  * [#13308](https://github.com/babel/babel/pull/13308) [Babel 8]: remove module attributes parser/generator support ([@JLHwung](https://github.com/JLHwung))
  * [#12608](https://github.com/babel/babel/pull/12608) [babel 8] Don't create `TSParenthesizedType` nodes by default ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-transform-block-scoping`, `babel-traverse`
  * [#13291](https://github.com/babel/babel/pull/13291) [babel 8] Do not skip requeued paths ([@JLHwung](https://github.com/JLHwung))
* `babel-cli`, `babel-core`, `babel-helper-module-transforms`, `babel-plugin-transform-modules-amd`, `babel-plugin-transform-modules-systemjs`, `babel-plugin-transform-modules-umd`
  * [#12724](https://github.com/babel/babel/pull/12724) [babel 8] Remove module-specific options from `@babel/core` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-preset-react`
  * [#12741](https://github.com/babel/babel/pull/12741) [babel 8] Type checking preset-react options ([@JLHwung](https://github.com/JLHwung))
* `babel-preset-flow`
  * [#12751](https://github.com/babel/babel/pull/12751) [babel 8] type checking preset-flow options ([@JLHwung](https://github.com/JLHwung))
* `babel-core`, `babel-helper-compilation-targets`, `babel-plugin-proposal-async-generator-functions`, `babel-plugin-proposal-class-properties`, `babel-plugin-proposal-decorators`, `babel-plugin-proposal-object-rest-spread`, `babel-plugin-transform-classes`, `babel-plugin-transform-flow-comments`, `babel-plugin-transform-flow-strip-types`, `babel-plugin-transform-function-name`, `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-parameters`, `babel-plugin-transform-react-constant-elements`, `babel-plugin-transform-regenerator`, `babel-plugin-transform-runtime`, `babel-preset-env`, `babel-standalone`
  * [#12989](https://github.com/babel/babel/pull/12989) breaking: fallback targets to "defaults, not ie 11" ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-proposal-dynamic-import`, `babel-plugin-transform-modules-systemjs`
  * [#12700](https://github.com/babel/babel/pull/12700) Require @babel/plugin-proposal-dynamic-import when transforming import() to SystemJS ([@JLHwung](https://github.com/JLHwung))
* `babel-generator`, `babel-plugin-transform-react-jsx`, `babel-plugin-transform-template-literals`, `babel-plugin-transform-unicode-escapes`
  * [#12675](https://github.com/babel/babel/pull/12675) [babel 8] Output minimal strings by default ([@JLHwung](https://github.com/JLHwung))
* `babel-code-frame`, `babel-highlight`
  * [#12660](https://github.com/babel/babel/pull/12660) [babel 8] Improve syntax highlighting ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-node`, `babel-plugin-transform-async-to-generator`, `babel-plugin-transform-block-scoping`, `babel-plugin-transform-classes`, `babel-plugin-transform-function-name`, `babel-plugin-transform-react-constant-elements`, `babel-plugin-transform-react-inline-elements`, `babel-plugin-transform-react-jsx`, `babel-plugin-transform-regenerator`, `babel-preset-react`, `babel-preset-typescript`, `babel-standalone`
  * [#12630](https://github.com/babel/babel/pull/12630) [babel 8] Use the JSX automatic runtime by default ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helper-builder-react-jsx`, `babel-plugin-transform-react-jsx-development`, `babel-plugin-transform-react-jsx`, `babel-preset-react`
  * [#12593](https://github.com/babel/babel/pull/12593) [babel 8] Remove `useSpread` and `useBuiltIns` jsx options ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-preset-env`
  * [#12594](https://github.com/babel/babel/pull/12594) [babel 8] Remove `uglify` target support in preset-env ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-proposal-class-properties`, `babel-plugin-transform-typescript`, `babel-preset-typescript`
  * [#12461](https://github.com/babel/babel/pull/12461) [babel 8] Enable `allowDeclareFields` option by default with TS ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-preset-typescript`
  * [#12460](https://github.com/babel/babel/pull/12460) Type checking preset-typescript options ([@JLHwung](https://github.com/JLHwung))
* `babel-generator`
  * [#12477](https://github.com/babel/babel/pull/12477) [babel 8] Remove the `jsonCompatibleStrings` option ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-helper-fixtures`, `babel-plugin-transform-flow-strip-types`
  * [#12457](https://github.com/babel/babel/pull/12457) [babel 8] Enable `allowDeclareFields` option by default w/ Flow ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))

#### :rocket: New Feature
* `babel-helper-compilation-targets`
  * [#15551](https://github.com/babel/babel/pull/15551) use browserslist's defaults as default targets ([@JLHwung](https://github.com/JLHwung))

#### :bug: Bug Fix
* `babel-helper-fixtures`, `babel-preset-typescript`
  * [#15562](https://github.com/babel/babel/pull/15562) [Babel 8] fix `ignoreExtensions` behaviour ([@JLHwung](https://github.com/JLHwung))

#### :house: Internal
* `babel-plugin-transform-runtime`
  * [#15528](https://github.com/babel/babel/pull/15528) [babel 8] regeneratorRuntime helper is always available ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-core`
  * [#15526](https://github.com/babel/babel/pull/15526) [babel 8] Remove old error plugin mappings for default syntax ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* Other
  * [#14949](https://github.com/babel/babel/pull/14949) Fix prepublish build of Babel 8 with ESM ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#14872](https://github.com/babel/babel/pull/14872) Use the built-in class fields and private methods rules in ESLint 8 ([@JLHwung](https://github.com/JLHwung))
* `babel-plugin-transform-modules-commonjs`, `babel-plugin-transform-runtime`
  * [#14120](https://github.com/babel/babel/pull/14120) [babel 8] Remove `@babel/runtime@<=7.13.0` compat check ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-cli`
  * [#14119](https://github.com/babel/babel/pull/14119) [babel 8] Remove `@nicolo-ribaudo/chokidar-2` fallback ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-cli`, `babel-node`, `babel-plugin-transform-runtime`, `babel-register`
  * [#13828](https://github.com/babel/babel/pull/13828) [babel 8] Remove `make-dir` polyfill for `fs.mkdirSync` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
  * [#12458](https://github.com/babel/babel/pull/12458) Use native Node.js functions when available ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-parser`
  * [#13768](https://github.com/babel/babel/pull/13768) Store token type as number ([@JLHwung](https://github.com/JLHwung))
  * [#13294](https://github.com/babel/babel/pull/13294) fix(parser): [Babel8] Align error codes between Flow and TypeScript ([@sosukesuzuki](https://github.com/sosukesuzuki))
* `babel-plugin-proposal-partial-application`, `babel-types`
  * [#13407](https://github.com/babel/babel/pull/13407) [Babel 8] Remove `optional` field from `MemberExpression` ([@danez](https://github.com/danez))
* `babel-core`, `babel-helper-transform-fixture-test-runner`, `babel-register`
  * [#12677](https://github.com/babel/babel/pull/12677) [babel 8] Replace lodash/escapeRegExp with escape-string-regexp ([@hzoo](https://github.com/hzoo))
* `babel-cli`, `babel-plugin-transform-classes`, `babel-register`, `babel-traverse`
  * [#12656](https://github.com/babel/babel/pull/12656) [babel 8] Update `globals`, `find-cache-dir` and `slash` ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))
* `babel-plugin-syntax-typescript`
  * [#12607](https://github.com/babel/babel/pull/12607) chore: do not push objectRestSpread parser option in Babel 8 ([@JLHwung](https://github.com/JLHwung))
