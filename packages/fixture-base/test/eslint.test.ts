import { CLIEngine } from 'eslint'

describe('eslint', () => {
  const logErrReport = (report: CLIEngine.LintReport) => {
    report.results.forEach((result) => {
      console.warn(...result.messages)
      console.warn(result.filePath)
    })
  }

  test('base', () => {
    const config = {
      extends: ['@vadistic/eslint-config'],
    }

    const engine = new CLIEngine({ useEslintrc: false, cache: false, baseConfig: config })

    const report = engine.executeOnFiles(['src/**', 'test/**', 'examples/**'])

    if (report.errorCount) logErrReport(report)

    expect(report.errorCount).toBe(0)
  })


  test('recommended', () => {
    const config = {
      extends: ['@vadistic/eslint-config/recommended'],
    }

    const engine = new CLIEngine({ useEslintrc: false, cache: false, baseConfig: config })
    const report = engine.executeOnFiles(['src/**', 'test/**', 'examples/**'])

    if (report.errorCount) logErrReport(report)

    expect(report.errorCount).toBe(0)
  })

  test('prettier', () => {
    const config = {
      extends: ['@vadistic/eslint-config', '@vadistic/eslint-config/preset/prettier'],
    }

    const engine = new CLIEngine({ useEslintrc: false, cache: false, baseConfig: config })
    const report = engine.executeOnFiles(['src/**', 'test/**', 'examples/**'])

    expect(report.errorCount).toBeGreaterThan(0)
    expect(report.errorCount).toEqual(report.fixableErrorCount)

    const hasOnlyPrettieRErrors = report.results
      .flatMap((res) => res.messages)
      .every((msg) => msg.ruleId === 'prettier/prettier')

    expect(hasOnlyPrettieRErrors).toBeTruthy()
  })
})
