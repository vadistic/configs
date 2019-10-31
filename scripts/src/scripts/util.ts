import { join } from 'path'
import { readJSON, writeJSON } from 'fs-extra'

export const readPkg = (cwd: string) => {
  return readJSON(join(cwd, 'package.json'))
}

export const writePkg = (cwd: string, data: any) => {
  return writeJSON(join(cwd, 'package.json'), data, { spaces: 2 })
}

export const filterUndefShallow = (input: any) => {
  const res: any = {}

  for (const key of Object.keys(input)) {
    if (typeof input[key] !== 'undefined') {
      res[key] = input[key]
    }
  }

  return res
}
