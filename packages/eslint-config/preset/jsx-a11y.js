module.exports = {
  extends: ['plugin:jsx-a11y/recommended'],

  plugins: ['jsx-a11y'],

  rules: require('../rules/jsx-a11y').rules,
}
