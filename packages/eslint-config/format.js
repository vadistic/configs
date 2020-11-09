// https://eslint.org/docs/rules/
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules

module.exports = {
  rules: {
    '@typescript-eslint/semi': ['warn', 'never'],

    // off because it does not respect max-width
    'implicit-arrow-linebreak': 'off',
  },
}
