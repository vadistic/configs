// ────────────────────────────────────────────────────────────────────────────────
// eslint-plugin-eslint-comments
// ────────────────────────────────────────────────────────────────────────────────

module.exports = {
  extends: ['plugin:jest/recommended'],

  plugins: ['eslint-plugin-jest',],

  rules: {
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
  },
}
