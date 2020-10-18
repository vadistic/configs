module.exports = {
  // https://eslint.org/docs/rules/
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules
  rules: {
    //
    // ─── TYPESCRIPT-ESLINT ───────────────────────────────────────────
    //

    '@typescript-eslint/semi': ['warn', 'never'],

    //
    // ─── ELINST ──────────────────────────────────────────────────────
    //

    // off because it does not respect max-width
    'implicit-arrow-linebreak': 'off',
  },
}
