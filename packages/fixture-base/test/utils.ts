import { ESLint, Linter } from 'eslint'

export type CombinedLintResult = Pick<
  ESLint.LintResult,
  | 'errorCount'
  | 'warningCount'
  | 'fixableErrorCount'
  | 'fixableWarningCount'
  | 'usedDeprecatedRules'
  | 'messages'
>

export const logErrReport = (results: ESLint.LintResult[]) => {
  results.forEach(result => {
    if (result.messages.length) {
      console.warn(result.filePath + '\n', ...result.messages)
    }
  })
}

export const combineResults = (results: ESLint.LintResult[]) =>
  results.reduce<CombinedLintResult>(
    (acc, result) => {
      return {
        errorCount: acc.errorCount + result.errorCount,
        warningCount: acc.warningCount + result.warningCount,
        fixableErrorCount: acc.fixableErrorCount + result.fixableErrorCount,
        fixableWarningCount: acc.fixableWarningCount + result.fixableWarningCount,
        usedDeprecatedRules: [...acc.usedDeprecatedRules, ...result.usedDeprecatedRules],
        messages: [...acc.messages, ...result.messages],
      }
    },
    {
      errorCount: 0,
      warningCount: 0,
      fixableErrorCount: 0,
      fixableWarningCount: 0,
      usedDeprecatedRules: [],
      messages: [],
    },
  )

export const lintTest = async (config: Linter.Config, files: string[]) => {
  const engine = new ESLint({ useEslintrc: false, cache: false, baseConfig: config })
  const results = await engine.lintFiles(files)
  const combined = combineResults(results)

  return {
    engine,
    results,
    combined,
  }
}
