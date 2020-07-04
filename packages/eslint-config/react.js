/* eslint-disable sort-keys */
module.exports = {
  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint', 'react', 'react-hooks'],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',

    'eslint-config-airbnb-typescript',

    require.resolve('./preset/es2020-react'),

    require.resolve('./rules/style'),
    require.resolve('./rules/typescript'),
    require.resolve('./rules/typecheck'),
    require.resolve('./rules/react'),

    require.resolve('./preset/import'),
    require.resolve('./preset/jest'),
    require.resolve('./preset/comments'),
  ],
}
