module.exports = {
  // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
  rules: {
    // some react frameworks needs default exports (gatsby/next)
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
    'import/no-default-export': 'off',


    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],

    // allow classes for some cases
    'react/prefer-stateless-function': 'off',
  },
}
