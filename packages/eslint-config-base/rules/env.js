/* eslint-disable sort-keys */
module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [],

  plugins: ['@typescript-eslint'],

  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },

  env: {
    es2020: true,
    node: true,
    browser: true,
    jest: true,
  },

  rules: {},

  overrides: [
    // allow var requires in config files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
