import { ServerResponse, IncomingMessage } from 'http'

const handler = (req: IncomingMessage, res: ServerResponse) => {
  console.log(req.url)

  res.end(`Hello`)
}

// eslint-disable-next-line import/no-default-export
export default handler
