// import type { IncomingMessage, ServerResponse } from 'http'

// export default async (req: IncomingMessage, res: ServerResponse) => {
//   console.log(req.url)
//   const response: any = await $fetch(`https://api.tvmaze.com/search/shows${req.url}`)
//   res.writeHead(200, {"Content-Type": "application/json"})
//   res.write(JSON.stringify(response))
//   res.end()
// }
import express from 'express'
const app = express()

export default (req, res) => {
  console.log(req.url)
  return 'Hello World'
}



// app.get('/', (req, res) => {
//   res.send('Hello from the movies!')
// })





