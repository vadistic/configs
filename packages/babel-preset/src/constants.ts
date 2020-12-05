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

export const NODE_TARGET = { node: '12' }

export const WEB_TARGET = {
  browsers: ['>0.2%', 'not dead', 'not op_mini all'],
}

export const WEB_TARGET_DEV = {
  browsers: ['last 1 chrome version', 'last 1 firefox version'],
}
