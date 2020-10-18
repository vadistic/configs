import { lintTest, logErrReport } from './utils'

describe('eslint', () => {
  test('base', async () => {
    const config = {
      extends: ['@vadistic/eslint-config'],
    }

    const { combined, results } = await lintTest(config, [
      'src/**/*.ts',
      'test/**/*.ts',
      'examples/**/*.ts',
    ])

    if (combined.messages.length) logErrReport(results)

    expect(combined.messages.length).toBe(0)
  })

  test('prettier', async () => {
    const config = {
      extends: ['@vadistic/eslint-config', '@vadistic/eslint-config/prettier'],
    }

    const { combined, results } = await lintTest(config, [
      'src/**/*.ts',
      'test/**/*.ts',
      'examples/**/*.ts',
    ])

    if (combined.messages.length) logErrReport(results)

    expect(combined.messages.length).toBe(0)
  })
})
