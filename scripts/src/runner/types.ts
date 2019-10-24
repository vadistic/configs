import { Logger } from './logger'

export const TASK_DIR = 'scripts'
export const TASK_EXT = '.task.ts'

export interface TaskProps {
  name: string
  logger: Logger
  rootCwd: string
}

export type Task = (args: any, props: TaskProps) => any
