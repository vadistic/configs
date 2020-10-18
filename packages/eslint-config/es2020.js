/* eslint-disable sort-keys */
module.exports = {
  extends: [],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    es2020: true,
    node: true,
    browser: true,
    jest: true,
  },

  globals: {
    process: true,
  },

  overrides: [
    {
      files: ['*.js'],
      rules: {
        // allow var requires in config files
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
