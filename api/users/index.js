import express from 'express'

// Create express instnace
const app = express()

let xx

// Init body-parser options (inbuilt with express)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.all("/", (req, res, next) => {
  xx=2345
  console.log("serverMiddleware", req.body)
  app.xxx = 12345
  // return {data:123345}
  next()
})

// Export the server middleware
export default  app


// export default (req, res, next) => {
//   console.log("HHHHHHHHHH", req.url)
//   next()

// }