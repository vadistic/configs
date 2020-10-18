/* eslint-disable sort-keys */
module.exports = {
  extends: [
    require.resolve('./es2020'),

    // basic
    require.resolve('./style'),
    require.resolve('./typescript'),

    // plugins
    require.resolve('./import'),
    require.resolve('./jest'),
    require.resolve('./comments'),
  ],
}
