/* eslint-disable sort-keys */
module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    // recommended
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    // airbnb
    'eslint-config-airbnb-typescript/base',

    // base
    require.resolve('./preset/es2020'),

    // overrides
    require.resolve('./rules/style'),
    require.resolve('./rules/typescript'),
    require.resolve('./rules/typecheck'),

    // presets
    require.resolve('./preset/import'),
    require.resolve('./preset/jest'),
    require.resolve('./preset/comments'),
  ],
}
