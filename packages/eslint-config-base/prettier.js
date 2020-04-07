/**
 * @vadistic/eslint-config-base/prettier
 *
 * this configuration adds support for prettier
 * must be always last!
 */
module.exports = {
  extends: [
    // must be always last
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],

  plugins: ['prettier'],

  rules: {
    // => prettier
    'prettier/prettier': 'warn',
  },
}
