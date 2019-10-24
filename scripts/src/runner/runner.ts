import path from 'path'
import fse from 'fs-extra'
import { Logger } from './logger'
import { TASK_EXT, Task, TaskProps, TASK_DIR } from './types'

/**
 * Run task from local or root dir, it's jsut ts-node, but
 * - with simplified paths
 * - parsed args
 * - logger
 * - TODO: some chaining/pararel util
 */
export const runner = async () => {
  const logger = new Logger('runner')
  const rootCwd = getYarnWorkspaceRoot()
  const [cmd, sub] = process.argv[2].split(':')

  if (!rootCwd) {
    logger.error(`could not resolve workspace cwd`)
    return
  }

  if (!cmd) {
    logger.error(`task name missing`)
    return
  }

  const [name, fn] = await findTask(cmd, sub, rootCwd)

  if (!name || !fn) {
    logger.error(`could not find task ${cmd + TASK_EXT}`)
    return
  }

  await runTask(name, fn, rootCwd)
}

/**
 * gets monorepo root path
 *
 * since I'm using yarn workspaces - it seems ok to look for yarn.lock
 */
export const getYarnWorkspaceRoot = (maybeCwd = process.cwd(), loop = 0): string | undefined => {
  if (loop > 5) {
    return
  }

  return fse.existsSync(path.join(maybeCwd, 'yarn.lock'))
    ? maybeCwd
    : getYarnWorkspaceRoot(path.join(maybeCwd, '..'), loop + 1)
}

/**
 * runs task fn
 */
export const runTask = async (name: string, fn: Task, rootCwd: string) => {
  const logger = new Logger(name)

  const util: TaskProps = {
    name,
    rootCwd,
    logger,
  }

  const args = process.argv.slice(3)

  logger.start()

  const res = await fn(args, util)

  logger.end()

  return res
}

/**
 * tries tofind task bot in process.cwd() and in workspace root
 */
const findTask = async (cmd: string, sub: string, rootCwd: string) => {
  const filename = cmd + TASK_EXT

  const localTaskPath = path.join(process.cwd(), TASK_DIR, filename)
  const rootTaskPath = path.join(rootCwd, TASK_DIR, filename)

  const isLocalTask = fse.existsSync(localTaskPath)
  const isRootTask = fse.existsSync(rootTaskPath)

  if (isLocalTask) {
    return import(localTaskPath).then(imp => getTask(imp, sub))
  }

  if (isRootTask) {
    return import(rootTaskPath).then(imp => getTask(imp, sub))
  }

  return []
}

/**
 * gets task fn by name from import
 */
const getTask = (imported: any, sub?: string): [string, Task] | [] => {
  const fns: [string, Task][] = Object.entries(imported)

  // get first fn when only one export
  if (fns.length === 1) {
    return fns[0]
  }

  // todo fn for sub names
  return fns.find(([name]) => name === sub) || []
}
