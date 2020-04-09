
export const IGNORE_PATHS = [
  'coverage/',
  'node_modules/',
  'public/',
  'esm/',
  'lib/',
  'tmp/',
  'dist/',
  'build/',
  'pkg/',
  '*.d.ts',
]

export const NODE_TARGET = { node: '10' }

export const WEB_TARGET = {
  browsers: [
    'last 1 version',
    '> 1%',
    'not ie',
  ],
}

export const WEB_TARGET_DEV = {
  browsers: [
    'last 2 chrome versions',
  ],
}
