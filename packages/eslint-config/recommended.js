/* eslint-disable sort-keys */
module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',

    require.resolve('./preset/es2020'),

    require.resolve('./preset/import'),
    require.resolve('./preset/jest'),
    require.resolve('./preset/comments'),
  ],
}
