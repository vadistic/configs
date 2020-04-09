# @vadisitc/eslint-config-base

> Personal eslint typescript config for node/typescript

- my customisations of `eslint-config-airbnb-typescript`
- allows to separately enable group of rules
- all-in-one - no peerDep plugins/configs
- grouped into presets (setups whole thing) and rules-only exports

## Installation

```sh
$ yarn add -D eslint

$ yarn add -D @vadistic/eslint-config

```

## Packages

- **`@vadistic/eslint-config/base`**

- **`@vadistic/eslint-config/react`**

- **`@vadistic/eslint-config/recommended`**

### Presets

Presets extend recommended rules + plugins + my custom rules

- `@vadistic/eslint-config/preset/es2020` *[default]*
- `@vadistic/eslint-config/preset/import` *[default]*
- `@vadistic/eslint-config/preset/jest` *[default]*
- `@vadistic/eslint-config/preset/prettier`
- `@vadistic/eslint-config/preset/jsx-a11y`
- `@vadistic/eslint-config/preset/typecheck`

### Rules

Those are only custom rules - will not overwrite other stuff

- `@vadistic/eslint-config/rules/jsx-a11y-off` *[react]*
- `@vadistic/eslint-config/rules/react` *[react]*
- `@vadistic/eslint-config/rules/style` *[default]*
- `@vadistic/eslint-config/rules/typecheck-off`*[default]*
- `@vadistic/eslint-config/rules/typescript` *[default]*
- `@vadistic/eslint-config/rules/jsx-a11y`
- `@vadistic/eslint-config/rules/preact`
- `@vadistic/eslint-config/rules/typecheck`

### Example

Default

```json
{
  "extends": ["@vadistic/eslint-config"]
}
```

With typechecking rules & prettier

```json
{
  "extends": [
    "@vadistic/eslint-config",
    "@vadistic/eslint-config/preset/typecheck",
    "@vadistic/eslint-config/preset/prettier"
  ],

  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

Only recommended rules (no airbnb)

```json
{
  "extends": ["@vadistic/eslint-config/recommended"]
}
```
