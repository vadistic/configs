module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },

  extends: [
    'eslint:recommended',

    'plugin:react/recommended',

    'plugin:import/warnings',
    'plugin:import/typescript',

    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',

    'plugin:prettier/recommended',
  ],

  plugins: ['eslint-plugin-import', 'eslint-plugin-prettier'],

  env: {
    es2017: true,
    node: true,
    jest: true,
  },

  rules: {
    'prettier/prettier': 'warn',

    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^(_|returns|type|root|args|ctx|info)',
      },
    ],

    'import/order': 'warn',
    'import/no-useless-path-segments': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts',
          '**/*.spec.ts',
          '**/test/**',
          '**/spec/**',
          '**/scripts/**',
        ],
      },
    ],
  },

  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
