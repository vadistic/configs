# @vadisitc/eslint-config-base

> Personal eslint typescript config (for node/non-react packages)

## Usage

```sh
$ yarn add -D @vadistic/eslint-config-base

```

```js
// .eslintrc.js
module.exports = {
  extends: '@vadistic/eslint-config-base',

  parserOptions: {
    project: './tsconfig.json',
  },
}
```
