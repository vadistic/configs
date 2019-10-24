import { Task } from '../src/runner/types'

export const abc: Task = async (args, { logger: log }) => {
  log.log('DONE')
}
