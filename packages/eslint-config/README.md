# @vadisitc/eslint-config-base

> Personal typescript eslint configs for node & react

- all-in-one
- grouped into nice presets
- easy to maintain

## Installation

```sh
yarn add -D eslint

yarn add -D @vadistic/eslint-config

```

## Base

`@vadistic/eslint-config` or `@vadistic/eslint-config/base`

Includes:

- `/es2020` (project settings)
- `/style` (basic eslint rules)
- `/typescript` (basic typescript rules)
- `/import` (plugin import)
- `/jest` (plugin jest)
- `/comments` (plugin eslint-comments)

Alternatively I can just import `/es2020` or build config from scratch

## All Presets

Presets are grouped configuration of plugins + recommended + my costom overrides

Basic:

- `@vadistic/eslint-config/es2020` => configure parser for es2020
- `@vadistic/eslint-config/base` => basic default preset
- `@vadistic/eslint-config/recommended` => same as base but only recommended rules

Guidelines:

- `@vadistic/eslint-config/style` => `eslint` code style rules
- `@vadistic/eslint-config/typescript` => `@typescript-eslint` code style rules

Formating:

- `@vadistic/eslint-config/prettier` => enable `eslint-plugin-prettier` & `eslint-config-prettier`
- `@vadistic/eslint-config/format` => enable formatting rules (kinda prettier alternative)

Typechecking:

- `@vadistic/eslint-config/typecheck` => enable `@typescript-eslint` typechecking rules
- `@vadistic/eslint-config/typecheck-off`=> disable all `@typescript-eslint` typechecking rules

Plugins:

- `@vadistic/eslint-config/jsx-a11y` => enable `eslint-plugin-jsx-a11y`
- `@vadistic/eslint-config/jsx-a11y-off`=> disable all `eslint-plugin-jsx-a11y` (eg. for airbnb config)

- `@vadistic/eslint-config/import` => enable `eslint-plugin-import`
- `@vadistic/eslint-config/jest` => enable `eslint-plugin-jest`
- `@vadistic/eslint-config/react` => enable `eslint-plugin-react` & `eslint-plugin-react-hooks`

- `@vadistic/eslint-config/preact` => tweak react config for preact compatibility

## Example

### Default

```json
// .eslintrc
{
  "extends": ["@vadistic/eslint-config"]
}
```

### With typechecking rules & prettier

```json
// .eslintrc
{
  "extends": [
    "@vadistic/eslint-config",
    "@vadistic/eslint-config/typecheck",
    "@vadistic/eslint-config/prettier"
  ],

  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
