import type { BabelPresetOptions } from './index'

import { IGNORE_PATHS } from './constants'
import type { BabelConfig } from './types'

const options: BabelPresetOptions = {
  typescript: true,
  react: true,
}

const config: BabelConfig = {
  presets: [['@vadistic/babel-preset', options]],
  plugins: [],
  ignore: IGNORE_PATHS,
}

// eslint-disable-next-line import/no-default-export
export default config
