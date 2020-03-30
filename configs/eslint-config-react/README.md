# @vadisitc/eslint-config-react

> Personal reusable eslint react+typescript config

## Usage

### standard

```js
// .eslintrc.js
module.exports = {
  extends: '@vadistic/eslint-config-react',

  parserOptions: {
    project: './tsconfig.json',
  },
}
```

### with airbnb a11y

```js
// .eslintrc.js
module.exports = {
  extends: ['@vadistic/eslint-config-react', '@vadistic/eslint-config-react/a11y'],

  parserOptions: {
    project: './tsconfig.json',
  },
}
```

### with preact

```js
// .eslintrc.js
module.exports = {
  extends: ['@vadistic/eslint-config-react', '@vadistic/eslint-config-react/preact'],

  parserOptions: {
    project: './tsconfig.json',
  },
}
```
