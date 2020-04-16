module.exports = {
  rules: {
    // off because it does not respect max-width
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': 'off',

    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': 'off',

    // https://eslint.org/docs/rules/no-console
    'no-console': 'off',

    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'off',

    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'off',

    // allow for of loops
    // https://github.com/airbnb/javascript/blob/06b3ab11d9a443ff46f052dd00375e271e5146e6/packages/eslint-config-airbnb-base/rules/style.js#L332
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        selector: 'ForInStatement',
      },
      {
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        selector: 'LabeledStatement',
      },
      {
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        selector: 'WithStatement',
      },
    ],

    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 'off',

    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'off',

  },
}
