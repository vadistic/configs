// Inspiration: https://github.com/airbnb/nimbus/blob/master/packages/config-babel/src/index.ts

/* eslint-disable no-param-reassign */
import type {
  BabelPresetReactOptions,
  BabelPresetTypescriptOptions,
  BabelPresetEnvOptions,
  BabelConfig,
  BabelPlugins,
} from './types'

export interface BabelPresetOptions {
  /** use esmodules
   * @default false
   */
  esm?: boolean
  /** ??
   * @default false
   */
  node?: boolean

  /** add graphql plugin
   * @default false
   */
  graphql?: boolean

  /**
   * is development target
   * @default process.env.NODE_NEV !== 'production'
   */
  dev?: boolean

  // presets
  react?: boolean | BabelPresetReactOptions
  typescript?: boolean | (BabelPresetTypescriptOptions & { metadata?: boolean })
  env?: boolean | BabelPresetEnvOptions
}

const preset = (
  _api: unknown,
  {
    esm = false,
    node = false,
    graphql = false,
    dev = process.env.NODE_NEV !== 'production',
    env = true,
    typescript = true,
    react = false,
  }: BabelPresetOptions,
): BabelConfig => {
  // just in case set envs
  if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development'
  }

  if (!process.env.BABEL_ENV) {
    process.env.BABEL_ENV = dev ? 'development' : 'production'
  }

  if (node && react) {
    console.warn(
      '[@vadistic/babel-preset]: using both react and node flag does not make much sense!',
    )
  }

  // ugly but quick to allow booleans
  if (env === true) env = {}
  if (typescript === true) typescript = {}
  if (react === true) react = {}

  // BASE

  const plugins: BabelPlugins = [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ]

  const presets: BabelPlugins = []

  // ENV

  if (typeof env === 'object') {
    const envOptions: BabelPresetEnvOptions = {
      loose: true,
      modules: esm ? false : 'commonjs',
      shippedProposals: true,
      ...env,
      // eclude transforms that make all code slower
      exclude: ['transform-typeof-symbol', ...(env.exclude || [])],
    }

    // override for bugfixes with esmodules
    // https://babeljs.io/blog/2020/03/16/7.9.0#highlights
    envOptions.bugfixes =
      typeof envOptions.targets === 'object' &&
      !Array.isArray(envOptions.targets) &&
      !!envOptions.targets?.esmodules

    // override for babel-jest
    if (process.env.NODE_ENV === 'test') {
      envOptions.modules = 'commonjs'
      envOptions.targets = { node: 'current' }
      plugins.push('babel-plugin-dynamic-import-node')
    }

    presets.push(['@babel/preset-env', envOptions])
  }

  // TYPESCRIPT

  if (typeof typescript === 'object') {
    const typescriptOptions: BabelPresetTypescriptOptions = {
      // handle preact pragma??
    }

    presets.push(['@babel/preset-typescript', typescriptOptions])

    // opt-in because it's increase size!
    if (typescript.metadata) {
      plugins.push('babel-plugin-transform-typescript-metadata')
    }
  }

  // REACT

  if (typeof react === 'object') {
    const reactOptions: BabelPresetReactOptions = {
      // react 17 runtime default
      runtime: 'automatic',
      ...react,
    }

    presets.push(['@babel/preset-react', reactOptions])
  }

  // ────────────────────────────────────────────────────────────────────────────────
  // GRAPHQL

  if (graphql) {
    plugins.push('babel-plugin-graphql-tag')
  }

  return {
    plugins,
    presets,
  }
}

// eslint-disable-next-line import/no-default-export
export default preset
