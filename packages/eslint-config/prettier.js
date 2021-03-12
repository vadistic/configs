module.exports = {
  extends: ['plugin:prettier/recommended'],

  plugins: ['prettier'],

  rules: {
    // somehow not ignroed by prettier preset
    '@typescript-eslint/no-extra-semi': 'off',

    'prettier/prettier': 'error',
  },
}
