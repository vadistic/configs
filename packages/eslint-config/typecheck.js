module.exports = {
  extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],

  rules: {
    '@typescript-eslint/dot-notation': [
      'warn',
      {
        allowKeywords: true,
        allowPrivateClassPropertyAccess: false,
      },
    ],

    '@typescript-eslint/no-throw-literal': 'warn',

    '@typescript-eslint/prefer-nullish-coalescing': [
      'warn',
      {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
      },
    ],

    '@typescript-eslint/prefer-readonly': 'warn',

    '@typescript-eslint/promise-function-async': 'warn',
  },
}
