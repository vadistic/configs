import { IGNORE_PATHS } from './constants'
import type { BabelPresetOptions } from './index'
import type { BabelConfig } from './types'


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
