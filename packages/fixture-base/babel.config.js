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
}

module.exports = {
  presets: [['@vadistic/babel-preset', options]],
}
