const path = require('path')
const fs = require('fs')

const TS_LIB = 'ts-lib'
const TS_APP = 'ts-app'
const REACT_LIB = 'react-lib'
const REACT_APP = 'react-app'
const MONOREPO = 'monorepo'

const DEFAULT_REPO_URL = 'https://github.com/vadistic/repositories'
const DEFAULT_REPO_PREFIX = '@repo'

const createGenerator = stackName => {
  return {
    description: `create new ${stackName}`,
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: 'path',
      },
      {
        type: 'input',
        name: 'name',
        message: 'name',
        default: ({ path: p }) => (p && p.length > 2 ? path.basename(p) : 'project'),
      },
    ],
    actions: answers => {
      const stackDir = path.dirname(require.resolve(`@vadistic/stack-${stackName}`))
      const templateDir = path.join(stackDir, 'template')

      const targetDir = path.join(process.cwd(), answers.path)

      const variables = getTemplateVariables({ cwd: targetDir, name: answers.name })

      const data = {
        ...answers,
        ...variables,
        templateDir,
        targetDir,
      }

      return [
        {
          type: 'addMany',
          data,
          templateFiles: [`{{ templateDir }}/**/*`, `{{ templateDir }}/**/.*`],
          base: `{{ templateDir }}`,
          destination: '{{ targetDir }}',
        },
      ]
    },
  }
}

const updateGenerator = () => {
  return {
    description: `update configs`,
    prompts: [],
    actions: () => {
      const pkg = getPkg()

      if (!pkg) {
        throw Error(`Update should be run in package dir`)
      }

      const stack =
        pkg.devDependencies &&
        Object.keys(pkg.devDependencies).find(el => el.includes(`@vadistic/stack-`))

      if (!stack) {
        throw Error(`Could not resolve stack for ${pkg.name}`)
      }

      const stackDir = path.dirname(require.resolve(stack))
      const templateDir = path.join(stackDir, 'template')

      const variables = getTemplateVariables({ cwd: process.cwd(), name: pkg.name })

      const data = {
        ...variables,
        templateDir,
      }

      return [
        {
          type: 'addMany',
          data,
          // all except package.json
          templateFiles: [
            `{{ templateDir }}/*`,
            `{{ templateDir }}/.*`,
            `!{{ templateDir }}/package.json`,
          ],

          base: `{{ templateDir }}`,
          destination: '.',
          force: true,
        },
      ]
    },
  }
}

// fs & pkg

const getPkg = cwd => {
  const pkgPath = path.join(cwd, 'package.json')
  const exists = fs.existsSync(pkgPath)

  if (exists) {
    return JSON.parse(fs.readFileSync(pkgPath))
  }
}

const getRootPkg = cwd => {
  const pkgPath = tryFind('package.json', path.join(cwd, '..'))

  if (pkgPath) {
    return JSON.parse(fs.readFileSync(pkgPath))
  }
}

const tryFind = (filename, currentCwd, loop = 0) => {
  if (loop === 6) {
    return
  }

  const maybePath = path.join(currentCwd, filename)

  const exists = fs.existsSync(maybePath)

  if (exists) {
    return maybePath
  }

  return tryFind(filename, path.join(currentCwd, '..'), loop + 1)
}

// handle @prefix/smth or plain "smth"
const getPrefix = _pkg => {
  if (!_pkg || !_pkg.name) {
    return DEFAULT_REPO_PREFIX
  }

  const part = _pkg.name.split('/')[0]

  if (part === _pkg.name) {
    return '@' + _pkg.name + '/'
  }

  return part + '/'
}

const getRepositoryUrl = _pkg =>
  (_pkg.repository && typeof _pkg.repository) === 'string'
    ? _pkg.repository
    : _pkg.repository.url && typeof _pkg.repository.url === 'string'
    ? _pkg.repository.url
    : DEFAULT_REPO_URL

const getTemplateVariables = ({ cwd, name }) => {
  const rootPkg = getRootPkg(cwd)

  const prefixedName = getPrefix + name

  const repository = getRepositoryUrl(rootPkg)

  const homepage = rootPkg.homepage
  const version = rootPkg.version
  const description = rootPkg.description
  const license = rootPkg.license

  const eslintExtends = path.relative(cwd, tryFind('.eslintrc', cwd))
  const tsconfigExtends = path.relative(cwd, tryFind('tsconfig.json', cwd))
  const prettierExtends = path.relative(cwd, tryFind('prettier.config.js', cwd))

  return {
    name: prefixedName,
    repository,
    homepage,
    version,
    description,
    license,
    eslintExtends,
    tsconfigExtends,
    prettierExtends,
  }
}

module.exports = {
  TS_LIB,
  TS_APP,
  REACT_LIB,
  REACT_APP,
  MONOREPO,
  DEFAULT_REPO_PREFIX,
  DEFAULT_REPO_URL,
  getPkg,
  getRootPkg,
  tryFind,
  getPrefix,
  createGenerator,
  updateGenerator,
  getTemplateVariables,
  getRepositoryUrl,
}
