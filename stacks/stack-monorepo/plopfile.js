const {
  createGenerator,
  updateGenerator,
  TS_LIB,
  TS_APP,
  REACT_APP,
  REACT_LIB,
  MONOREPO,
} = require('@vadistic/scripts/plop-utils')

module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) => {
  plop.setHelper('curly', t => `{{ ${t} }}`)

  plop.setGenerator(`${TS_LIB} package`, createGenerator(TS_LIB))

  plop.setGenerator(`${TS_APP} package`, createGenerator(TS_APP))

  plop.setGenerator(`${REACT_APP} package`, createGenerator(REACT_APP))

  plop.setGenerator(`${REACT_LIB} package`, createGenerator(REACT_LIB))

  plop.setGenerator(`update`, updateGenerator(MONOREPO))
}
