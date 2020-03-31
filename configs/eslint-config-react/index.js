module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    '@vadistic/eslint-config-base',
    'plugin:react/recommended',
    require.resolve('./react'),
    // must be always last
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],

  // there's a problem with resolution of nested config dependencies
  // https://github.com/eslint/eslint/issues/3458
  plugins: [
    '@typescript-eslint',
    'prettier',
    'react',
    'react-hooks',
    'jsx-a11y',
    'eslint-plugin-import',
  ],

  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    es2020: true,
    browser: true,
    jest: true,
    // instead of overriding for tests
    node: true,
  },

  settings: {
    react: {
      version: 'detect',
    },

    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
      },
    },

    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
  },

  globals: {
    process: true,
  },

  rules: {
    // base overrides

    // some react frameworks needs default exports (gatsby/next)
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
    'import/no-default-export': 'off',

    // eslint-plugin-react
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules

    'react/prefer-stateless-function': 'off',

    // airbnb overrides
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

    // some issue with prettier
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    'react/jsx-one-expression-per-line': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 'off',
  },
}
