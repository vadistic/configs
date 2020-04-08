module.exports = {
  setting: {
    react: {
      pragma: 'h',
      //"react 16.0" to avoid pushing to UNSAFE_ methods.
      // also needs to disable autodection
      version: '16.0',
    },
  },

  // eslint-disable-next-line sort-keys
  rules: {
    // Legacy APIs not supported in Preact:
    'react/no-did-mount-set-state': "error",
    'react/no-did-update-set-state': "error",
    'react/no-find-dom-node': "error",
    'react/no-is-mounted': "error",
    'react/no-string-refs': "error",
  },
}
