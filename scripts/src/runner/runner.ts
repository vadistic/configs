import path from 'path'
import { homedir } from 'os'
import fse from 'fs-extra'
import { Logger } from './logger'
import { Task, TaskProps } from './types'

/**
 * Run task from local or root dir, it's jsut ts-node, but
 * - with simplified paths
 * - parsed args
 * - logger
 * - TODO: some chaining/pararel util
 */
export const runner = async () => {
  const workspaceCwd = getWorkspaceCwd()
  const packageCwd = getPackageCwd()

  const cmd = process.argv[2]
  const base = path.basename(packageCwd || workspaceCwd || 'project')
  const logger = new Logger(`${base}/${cmd || 'task'}`)

  if (!workspaceCwd || !packageCwd) {
    logger.error(`could not resolve package/workspace cwd. Is yarn.lock present?`)
    return
  }

  if (!cmd) {
    logger.error(`task name missing`)
    return
  }

  const props: TaskProps = {
    log: logger,
    info: {
      cmd,
      isWorkspace: packageCwd !== workspaceCwd,
    },
    paths: {
      package: packageCwd,
      workspace: workspaceCwd,
    },
  }

  const [name, fn] = await findTaskFile(props)

  if (!name || !fn) {
    logger.error(`could not find task '${cmd}'`)
    return
  }

  await runTask(props, fn)
}

// ────────────────────────────────────────────────────────────────────────────────

const homePath = homedir()

const ROOT_FILES = ['yarn.lock', '.git', 'package-lock.json']

export const getWorkspaceCwd = (maybeCwd = process.cwd(), loop = 0): string | undefined => {
  if (loop > 8 || maybeCwd === homePath) {
    return
  }

  return ROOT_FILES.some(file => fse.existsSync(path.join(maybeCwd, file)))
    ? maybeCwd
    : getWorkspaceCwd(path.join(maybeCwd, '..'), loop + 1)
}

export const getPackageCwd = (maybeCwd = process.cwd(), loop = 0): string | undefined => {
  if (loop > 8 || maybeCwd === homePath) {
    return
  }

  return fse.existsSync(path.join(maybeCwd, 'package.json'))
    ? maybeCwd
    : getPackageCwd(path.join(maybeCwd, '..'), loop + 1)
}

// ────────────────────────────────────────────────────────────────────────────────

/**
 * runs task fn
 */
export const runTask = async (props: TaskProps, fn: Task) => {
  const args = process.argv.slice(3)

  props.log.start()

  const res = await fn(args, props)

  props.log.end()

  return res
}

/**
 * gets task fn by name from import
 */
const findTaskFn = (props: TaskProps, imported: any): [string, Task] | [] => {
  const fns: [string, Task][] = Object.entries(imported)

  // get first fn when only one export
  if (fns.length === 1) {
    return fns[0]
  }

  const main = props.info.cmd.split(':')[0]

  // TODO: some matcher for function names
  return fns.find(([name]) => name.match(main)) || []
}

/**
 * tries tofind task bot in process.cwd() and in workspace root
 */

const TASK_DIR = 'scripts'
const TASK_EXT = '.task'

const TS = '.ts'
const JS = '.js'

const findTaskFile = async (props: TaskProps) => {
  const filename = props.info.cmd + TASK_EXT

  const localTaskPath = path.join(props.paths.package, TASK_DIR, filename + TS)
  const rootTaskPath = path.join(props.paths.workspace, TASK_DIR, filename + TS)
  const libTaskPathJs = path.join(__dirname, '..', TASK_DIR, filename + JS)
  const libTaskPathTs = path.join(__dirname, '..', TASK_DIR, filename + TS)

  const isLocalTask = () => fse.existsSync(localTaskPath)
  const isRootTask = () => fse.existsSync(rootTaskPath)
  const isLibTaskJs = () => fse.existsSync(libTaskPathJs)
  const isLibTaskTs = () => fse.existsSync(libTaskPathTs)

  if (isLocalTask()) {
    return import(localTaskPath).then(imp => findTaskFn(props, imp))
  }

  if (props.info.isWorkspace && isRootTask()) {
    return import(rootTaskPath).then(imp => findTaskFn(props, imp))
  }

  if (isLibTaskJs()) {
    return import(libTaskPathJs).then(imp => findTaskFn(props, imp))
  }

  if (isLibTaskTs()) {
    return import(libTaskPathTs).then(imp => findTaskFn(props, imp))
  }

  return []
}
