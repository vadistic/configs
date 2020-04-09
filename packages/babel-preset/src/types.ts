// https://babeljs.io/docs/en/babel-preset-typescript#options
export interface BabelPresetTypescriptOptions {
  allExtensions?: boolean
  allowDeclareFields?: boolean
  allowNamespaces?: boolean
  jsxPragma?: string
  isTSX?: boolean
  onlyRemoveTypeImports?: boolean
}


// https://babeljs.io/docs/en/babel-preset-react#options
export interface BabelPresetReactOptions {
  // both runtimes
  runtime?: 'classic' | 'automatic'
  development?: boolean
  throwIfNamespace?: boolean
  // react automatic runtime
  importSource?: string
  // react Classic Runtime
  pragma?: string
  pragmaFrag?: string
  useBuiltIns?: boolean
  useSpread?: boolean
}


// https://babeljs.io/docs/en/babel-preset-env#options
export interface BabelPresetEnvOptions {
  targets?: string | string[] | {
    esmodules?: boolean
    node?: string
    safari?: string
    browsers?: string | string[]
  }
  bugfixes?: boolean
  spec?: boolean
  loose?: boolean
  modules?: 'amd' | 'umd' | 'systemjs' | 'commonjs' | 'cjs' | 'auto' | false
  debug? : boolean
  include?: Array<string | RegExp>
  exclude?: Array<string | RegExp>
  useBuiltIns?: 'usage' | 'entry' | false
  corejs?: 2 | 3 | { version: 2 | 3; proposals: boolean}
  forceAllTransforms?: boolean
  configPath?: string
  ignoreBrowserslistConfig?: boolean
  shippedProposals?: boolean
}


type Item = string | [string, unknown]

export type BabelPlugins = Item[]
export type BabelPresets = Item[]

export interface BabelConfig {
  plugins?: BabelPlugins
  presets?: BabelPresets
  ignore?: string[]
}
