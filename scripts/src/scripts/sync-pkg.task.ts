import sortPkgJson from 'sort-package-json'
import { Task } from '../runner'
import { readPkg, filterUndefShallow, writePkg } from './util'

export const sortPkg: Task = async (args, props) => {
  let pkg = await readPkg(props.paths.package)

  if (props.info.isWorkspace) {
    props.log.log(`workspace detected, importing fields from root`)

    const {
      dependencies,
      devDependencies,
      peerDependencies,
      scripts,
      workspaces,
      ...parent
    } = await readPkg(props.paths.workspace)

    pkg = { ...parent, ...pkg }
  }

  const sorted = await sortPkgJson(pkg)
  const filtered = filterUndefShallow(sorted)

  writePkg(props.paths.package, filtered)

  props.log.log(`package.json sorted!`)
}
