if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
}

const config = {
  plugins: [
    ['@babel/plugin-transform-react-jsx', { pragma: 'h' }],
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    [
      require.resolve('./babel-plugin.js'),
      {
        dir: './web_modules',
        importMap: '../dist/web_modules/import-map.json',
        // seems required extension should be a standard
        // https://nodejs.org/api/esm.html#esm_package_scope_and_file_extensions
        optionalExtensions: true
      }
    ]
  ],
  presets: [['@babel/preset-typescript', { jsxPragma: 'h' }]]
}

if (process.env.NODE_ENV === 'production') {
  config.presets.push([
    '@babel/preset-env',
    {
      esmodules: true,
      modules: 'false',
      useBuiltIns: false
    }
  ])
}

module.exports = config
