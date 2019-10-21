const { createGenerator, MONOREPO } = require('./plop-utils')

module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) => {
  plop.setHelper('curly', t => `{{ ${t} }}`)

  plop.setGenerator(`monorepo`, createGenerator(MONOREPO))
}
