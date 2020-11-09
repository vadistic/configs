/* eslint-disable sort-keys */
module.exports = {
  plugins: ['react', 'react-hooks'],

  extends: ['plugin:react/recommended'],

  settings: {
    react: {
      version: 'detect',
    },
  },

  // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
  rules: {
    'import/no-default-export': 'off',

    'jsx-quotes': ['error', 'prefer-double'],

    // some issue with prettier
    'react/jsx-one-expression-per-line': 'off',

    // allow classes for some cases
    'react/prefer-stateless-function': 'off',

    'react/prop-types': 'off',
  },
}
