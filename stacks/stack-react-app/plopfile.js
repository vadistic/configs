const { updateGenerator } = require('@vadistic/scripts/plopfile')

module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) => {
  plop.setHelper('curly', t => `{{ ${t} }}`)

  plop.setGenerator(`update`, updateGenerator())
}
