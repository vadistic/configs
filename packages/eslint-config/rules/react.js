module.exports = {
  // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
  rules: {
    // some react frameworks needs default exports (gatsby/next)
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
    'import/no-default-export': 'off',

    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],

    // some issue with prettier
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    'react/jsx-one-expression-per-line': 'off',

    // allow classes for some cases
    'react/prefer-stateless-function': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 'off',
  },
}
