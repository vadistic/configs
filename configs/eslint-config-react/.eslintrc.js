module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: ['@vadistic/eslint-config-base', 'plugin:react/recommended'],

  plugins: ['eslint-plugin-react', 'eslint-plugin-react-hooks'],

  settings: {
    react: {
      version: 'detect',
    },
  },

  env: {
    es2020: true,
    browser: true,
    jest: true,
    node: false
  },

  rules: {
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
