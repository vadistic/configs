# @vadisitc/eslint-config-base

> Personal eslint typescript config for node/typescript

- mostly follows recommended + air-bnb
- clean separation of concerns and outline of my customisations
- plugins are in the dependencies to simplify project setup
- no jsx/ style rules - for those use `@vadsitic/eslint-config-react`

## Installation

```sh
$ yarn add -D eslint

$ yarn add -D @vadistic/eslint-config-base

```

No other configs/plugins/presets required :)

## Modules

### Default presets

Enabled by extending `@vadsitic/eslint-config-base`

- #### [env](./rules/env.js)

  `@vadistic/eslint-config-base/env`

  setup `@typescript-eslint` / ES2020 / env globals and nothing more. Use as base extends to skip recommended rules

- #### [style](./rules/style.js)

  `@vadistic/eslint-config-base/rules/style`

  enables native `eslint` airbnb code style rules

- #### [typescript](./rules/typescript.js)

  `@vadistic/eslint-config-base/rules/typescript`

  enables `@typescript-eslint` plugin & rules

- #### [import](./rules.import)

  `@vadistic/eslint-config-base/rules/import`

  enables `eslint-plugin-import` plugin & rules

- #### [jest](./rules/jest.js)

  `@vadistic/eslint-config-base/rules/jest`

  enables `eslint-plugin-jest` plugin & rules

- #### [comments](./rules/comments.js)

  `@vadistic/eslint-config-base/rules/typescript`

  enables `eslint-plugin-eslint-comments` plugin & rules

### Optional presets

- #### [format](./rules/format.js)

  `@vadistic/eslint-config-base/rules/format`

  enables using eslint as code prettifier with `air-bnb` formatting rules (exclusive with `rules/prettier`)

- #### [prettier](./rules/prettier.js)

  `@vadistic/eslint-config-base/rules/prettier`

  enable `eslint-plugin-prettier` and `eslint-config-presttier` plugins & rules (exclusive with `rules/format`)

- #### [typecheck](./rules/typecheck.js)

  `@vadistic/eslint-config-base/rules/typechecking`

  enables `@typescript-eslint` typechecking rules (not enabled by default because of performance impact)

## Usage

### All default

```json
{
  "extends": "@vadistic/eslint-config-base"
}
```

### With typechecking rules & prettier

```json
{
  "extends": ["@vadistic/eslint-config-base", "@vadistic/eslint-config-base/rules/prettier"],

  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

### Without any recommended rules

```json
{
  "extends": [
    "@vadistic/eslint-config-base/base",
    "@vadistic/eslint-config-base/rules/format",
    "... some custom presets"
  ],

  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
