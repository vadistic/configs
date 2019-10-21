#!/usr/bin/env node

const nodePlop = require('node-plop')
const { createGenerator, MONOREPO } = require('./plop-utils')

/** @type {import('node-plop').NodePlopAPI} */

const cli = async () => {
  const plop = nodePlop()

  plop.setHelper(`curly`, t => `{{ ${t} }}`)
  plop.setGenerator(`monorepo`, createGenerator(MONOREPO))
  const generator = plop.getGenerator(`monorepo`)

  console.log('Scaffold new monorepo!')

  const data = await generator.runPrompts()
  await generator.runActions(data)
}

cli()
