module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
    node: true,
  },

  extends: [],

  globals: {
    process: true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },

  // eslint-disable-next-line sort-keys
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
