import type { IncomingMessage, ServerResponse } from "http";
import { useCounter } from "~/stores/counter"

export default async (req: IncomingMessage, res: ServerResponse) => {
  const counter = useCounter()

  const data = {
    msg: 'hello 2',
    counter: counter.n
  }


  const json = JSON.stringify(data)
  return data
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  // res.setHeader('Content-length', 'application/json')
  res.end(json)
}
