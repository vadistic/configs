const TS_LIB = 'ts-lib'
const TS_APP = 'ts-app'
const REACT_LIB = 'react-lib'
const REACT_APP = 'react-app'
const MONOREPO = 'monorepo'

module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) => {
  plop.setHelper('curly', t => `{{ ${t} }}`)

  plop.setGenerator('all', {
    description: `update all templates`,
    prompts: [],
    actions: [
      ...updateMonorepoTemplateActions(MONOREPO),
      ...updatePackageTemplateActions(TS_LIB),
      ...updatePackageTemplateActions(TS_APP),
      ...updatePackageTemplateActions(REACT_LIB),
      ...updatePackageTemplateActions(REACT_APP),
    ],
  })
}

const updateMonorepoTemplateActions = name => [
  updateFixtureDotfiles(name),
  copyFixtureToTemplateDir(name),

  updateLernaJson(name),

  ...updatePackageJsonActions(name),
]

const updatePackageTemplateActions = name => [
  updateFixtureDotfiles(name),
  copyFixtureToTemplateDir(name),

  updateEslintRc(name),
  updatePrettierConfigJs(name),
  updateTsconfigJson(name),

  ...updatePackageJsonActions(name),
]

/**
 * copy standard dotfiles
 */
const updateFixtureDotfiles = name => ({
  type: 'addMany',
  base: `fixtures/fixture-dotfiles`,
  templateFiles: [`fixtures/fixture-dotfiles/*`, `fixtures/fixture-dotfiles/.*`],
  destination: `fixtures/fixture-${name}`,
  force: true,
  abortOnFail: true,
})

/**
 * copy fixture dir to template
 */
const copyFixtureToTemplateDir = name => ({
  type: 'addMany',
  base: `fixtures/fixture-${name}`,
  templateFiles: [
    `fixtures/fixture-${name}/*`,
    `fixtures/fixture-${name}/.*`,
    `!fixtures/fixture-${name}/node_modules`,
  ],
  destination: `stacks/stack-${name}/template`,
  force: true,
  abortOnFail: true,
})

const updateEslintRc = name => ({
  type: 'modify',
  path: `stacks/stack-${name}/template/.eslintrc`,
  pattern: /"extends": [^\n,]+/g,
  template: `"extends": "{{{ curly "eslintExtends" }}}"`,
})

const updatePrettierConfigJs = name => ({
  type: 'modify',
  path: `stacks/stack-${name}/template/prettier.config.js`,
  pattern: /require\('.+prettier\.config\.js'\)/g,
  template: `require('{{{ curly "prettierExtends" }}}')`,
})

const updateTsconfigJson = name => ({
  type: 'modify',
  path: `stacks/stack-${name}/template/tsconfig.json`,
  pattern: /"extends": [^\n,]+/g,
  template: `"extends": "{{{ curly "tsconfigExtends" }}}"`,
})

const updateLernaJson = name => ({
  type: 'modify',
  path: `stacks/stack-${name}/template/lerna.json`,
  pattern: /"version": ".+"/g,
  template: `"version": "{{{ curly "version" }}}"`,
})

const updatePackageJsonActions = name => [
  {
    // replace name with hbs placeholder
    type: 'modify',
    path: `stacks/stack-${name}/template/package.json`,
    pattern: /"name": ".+"/g,
    template: `"name": "{{{ curly "name" }}}"`,
  },
  {
    // replace description with hbs placeholder
    type: 'modify',
    path: `stacks/stack-${name}/template/package.json`,
    pattern: /"description": ".+"/g,
    template: `"description": "{{{ curly "description" }}}"`,
  },
  {
    // replace homepage with hbs placeholder
    type: 'modify',
    path: `stacks/stack-${name}/template/package.json`,
    pattern: /"homepage": ".+"/g,
    template: `"homepage": "{{{ curly "homepage" }}}"`,
  },
  {
    // replace repository with hbs placeholder
    type: 'modify',
    path: `stacks/stack-${name}/template/package.json`,
    pattern: /"url": ".+"/g,
    template: `"url": "{{{ curly "repository" }}}"`,
  },
  {
    // replace version with hbs placeholder
    type: 'modify',
    path: `stacks/stack-${name}/template/package.json`,
    pattern: /"version": ".+"/g,
    template: `"version": "{{{ curly "version" }}}"`,
  },
  {
    // replace license with hbs placeholder
    type: 'modify',
    path: `stacks/stack-${name}/template/package.json`,
    pattern: /"license": ".+"/g,
    template: `"license": "{{{ curly "license" }}}"`,
  },
  // replace private settings
  {
    type: 'modify',
    path: `stacks/stack-${name}/template/package.json`,
    pattern: /"private": (true|false)/g,
    template: `"private": ${name.includes('lib') ? 'false' : 'true'}`,
  },
]
