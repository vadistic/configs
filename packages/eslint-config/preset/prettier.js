module.exports = {
  extends: ['prettier', 'prettier/@typescript-eslint', 'prettier/react'],

  plugins: ['prettier'],

  rules: {
    // somehow not ignroed by prettier preset
    '@typescript-eslint/no-extra-semi': 'off',

    'prettier/prettier': 'error',
  },
}
