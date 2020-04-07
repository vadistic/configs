module.exports = {
  plugins: ['react'],

  setting: {
    react: {
      pragma: 'h',
      //"react 16.0" to avoid pushing to UNSAFE_ methods.
      // also needs to disable autodection
      version: '16.0',
    },
  },

  rules: {
    // Legacy APIs not supported in Preact:
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-find-dom-node': 2,
    'react/no-is-mounted': 2,
    'react/no-string-refs': 2,
  },
}
