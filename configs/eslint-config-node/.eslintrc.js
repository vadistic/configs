module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },

  extends: [
    '@vadistic/eslint-config-base',
  ],

  env: {
    es2017: true,
    node: true,
    jest: true,
    browser: false
  },

  rules: {},
}
