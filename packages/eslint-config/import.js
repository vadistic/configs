// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules

module.exports = {
  extends: ['plugin:import/errors', 'plugin:import/typescript'],

  plugins: ['eslint-plugin-import'],

  rules: {
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        // skip checking in scripts, tests, configs
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
          '**/*.test.tsx',
          '**/*.spec.tsx',
          '**/scripts/**',
        ],
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
    'import/no-useless-path-segments': 'error',

    'import/order': [
      'warn',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [['external', 'builtin'], ['internal', 'index', 'parent'], ['sibling']],
        'newlines-between': 'always',
      },
    ],

    'import/prefer-default-export': 'off',
  },
}
