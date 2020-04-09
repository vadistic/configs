import type { BabelConfig } from './types'
import type { BabelPresetOptions } from './index'
import { IGNORE_PATHS } from './constants'


const options: BabelPresetOptions = {
  node: true,
  typescript: true,
}

const config: BabelConfig = {
  presets: [['@vadistic/babel-preset', options]],
  plugins: [],
  ignore: IGNORE_PATHS,
}


// eslint-disable-next-line import/no-default-export
export default config
