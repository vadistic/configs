module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  plugins: ['@typescript-eslint'],

  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',

    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],

    '@typescript-eslint/explicit-module-boundary-types': 'off',

    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],

    '@typescript-eslint/no-empty-interface': 'off',

    '@typescript-eslint/no-explicit-any': 'off',

    // it's ugly so it should be confirmed
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    // alows ;(p as any) = 1 expressions
    '@typescript-eslint/no-extra-semi': 'off',

    '@typescript-eslint/no-unsafe-member-access': 'off',

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        // unused vars hould have underscore dangle
        // also ignore nestjs callbacks & graphql resolver args
        argsIgnorePattern: '^(_|returns|type|root|args|arg|props|ctx|info)',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],

    '@typescript-eslint/no-use-before-define': 'off',

    '@typescript-eslint/prefer-function-type': 'error',

    '@typescript-eslint/prefer-optional-chain': 'error',

    '@typescript-eslint/prefer-regexp-exec': 'off',

    '@typescript-eslint/require-await': 'off',
  },
}
