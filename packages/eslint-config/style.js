module.exports = {
  extends: ['eslint:recommended'],

  // https://eslint.org/docs/rules/
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules
  rules: {
    'max-classes-per-file': 'off',

    'no-console': 'off',

    'no-continue': 'off',

    'no-nested-ternary': 'off',

    'no-plusplus': 'off',

    // https://github.com/airbnb/javascript/blob/06b3ab11d9a443ff46f052dd00375e271e5146e6/packages/eslint-config-airbnb-base/rules/style.js#L332
    'no-restricted-syntax': [
      'error',
      {
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        selector: 'ForInStatement',
      },
      {
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        selector: 'LabeledStatement',
      },
      {
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        selector: 'WithStatement',
      },
    ],

    'no-underscore-dangle': 'off',

    'no-void': 'off',

    'prefer-template': 'off',
  },
}
