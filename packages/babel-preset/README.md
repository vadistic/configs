# @vadisitc/babel-config

> Personal babel typescript config

- sane defaults (with decorators, metadata and class properties)
- supports js/browser/node/react/typescript/jest/esm
- allows using typescript typings in `babel.config.js`
- all-in-one - no peerDep babel plugins/presets

## Installation

```sh
  $ yarn add -D @vadistic/babel-preset
```

## Example

```js

// babel.config.js
/**
 * @typedef { import("@vadistic/babel-preset").BabelPresetOptions } Options
 */

/**
 *
 * @type Options
 */
const options = {
  node: true,
  dev: true,
  esm: false,

  env: {/* typed @babel/preset-env options */},
  typescript: {/* typed @babel/preset-typescript options */}
  react: {/* typed @babel/preset-react options */}
}

module.exports = {
  presets: [['@vadistic/babel-preset', options]],
}
```
