/* eslint-disable sort-keys */
module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [],

  plugins: ['@typescript-eslint'],

  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    es2020: true,
    browser: true,
    jest: true,
    // instead of overriding for tests
    node: true,
  },

  globals: {
    process: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

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
