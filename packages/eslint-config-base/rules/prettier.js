/**
 * @vadistic/eslint-config-base/rules/prettier
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
