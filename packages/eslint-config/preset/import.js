module.exports = {
  extends: ['plugin:import/errors', 'plugin:import/typescript'],

  plugins: ['eslint-plugin-import'],

  // eslint-disable-next-line sort-keys
  rules: {
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
    'import/no-default-export': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      {
        // skip checking in scripts & configs
        devDependencies: [
          '**/*.js',
          '**/test/**',
          '**/__test__/**',
          '**/tests/**',
          '**/__tests__/**',
          '**/spec/**',
          '**/__spec__/**',
          '**/*.test.ts',
          '**/*.spec.ts',
          '**/scripts/**',
        ],
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          ['external', 'builtin'],
          ['internal', 'index', 'sibling', 'parent'],
        ],
        'newlines-between': 'always',
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',
  },
}
