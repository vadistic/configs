/* eslint-disable sort-keys */
module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'eslint:recommended',
    require.resolve('./rules/env'),
    require.resolve('./rules/style'),
    require.resolve('./rules/typescript'),
    require.resolve('./rules/import'),
    require.resolve('./rules/jest'),
    require.resolve('./rules/comments'),
  ],
}
