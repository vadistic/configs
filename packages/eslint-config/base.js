/* eslint-disable sort-keys */
module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    "eslint-config-airbnb-typescript/base",

    require.resolve('./preset/es2020'),

    require.resolve('./rules/typecheck-off'),
    require.resolve('./rules/style'),
    require.resolve('./rules/typescript'),

    require.resolve('./preset/import'),
    require.resolve('./preset/jest'),
    require.resolve('./preset/comments'),
  ],
}
