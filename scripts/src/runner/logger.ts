export class Logger {
  constructor(public ctx: string, private startTime = new Date()) {}

  log(...msgs: string[]) {
    console.log(this.prefix(`log`), ...msgs)
  }

  warn(...msgs: string[]) {
    console.warn(this.prefix(`wrn`), ...msgs)
  }

  error(...msgs: string[]) {
    console.error(this.prefix(`err`), ...msgs)
  }

  start(...msgs: string[]) {
    console.log(this.prefix(`srt`), ...msgs)
  }

  end(...msgs: string[]) {
    console.log(this.prefix(`end`), ...msgs)
  }

  private prefix(type: string) {
    const now = new Date()
    const offset = now.valueOf() - this.startTime.valueOf()
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`

    return `[${this.ctx}:${type}][${time}+${offset}]`.padEnd(this.ctx.length + 6)
  }
}
