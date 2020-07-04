import { CLIEngine } from 'eslint'

describe('eslint', () => {
  const logErrReport = (report: CLIEngine.LintReport) => {
    report.results.forEach((result) => {
      if (result.messages.length) {
        console.warn(result.filePath + '\n', ...result.messages)
      }
    })
  }

  test('base', () => {
    const config = {
      extends: ['@vadistic/eslint-config', '@vadistic/eslint-config/rules/typecheck-off'],
    }

    const engine = new CLIEngine({ useEslintrc: false, cache: false, baseConfig: config })

    const report = engine.executeOnFiles(['src/**/*.ts', 'test/**/*.ts', 'examples/**/*.ts'])

    if (report.errorCount) logErrReport(report)

    expect(report.results.length).toBeGreaterThan(3)
    expect(report.errorCount).toBe(0)
  })

  test('recommended', () => {
    const config = {
      extends: ['@vadistic/eslint-config/recommended'],
    }

    const engine = new CLIEngine({ useEslintrc: false, cache: false, baseConfig: config })
    const report = engine.executeOnFiles(['src/**/*.ts', 'test/**/*.ts', 'examples/**/*.ts'])

    if (report.errorCount) logErrReport(report)

    expect(report.results.length).toBeGreaterThan(3)
    expect(report.errorCount).toBe(0)
  })

  test('recommended prettier', () => {
    const config = {
      extends: [
        '@vadistic/eslint-config/recommended',
        '@vadistic/eslint-config/rules/typecheck-off',
        '@vadistic/eslint-config/preset/prettier',
      ],
    }

    const engine = new CLIEngine({ useEslintrc: false, cache: false, baseConfig: config })
    const report = engine.executeOnFiles(['src/**/*.ts', 'test/**/*.ts', 'examples/**/*.ts'])

    expect(report.results.length).toBeGreaterThan(3)
    expect(report.errorCount).toBeGreaterThan(0)
    expect(report.errorCount).toEqual(report.fixableErrorCount)

    const hasOnlyOkErrors = report.results
      .flatMap((res) => res.messages)
      .every(
        (msg) =>
          msg.ruleId === 'prettier/prettier' || msg.ruleId === '@typescript-eslint/no-explicit-any',
      )

    if (!hasOnlyOkErrors) logErrReport(report)

    expect(hasOnlyOkErrors).toBeTruthy()
  })
})
