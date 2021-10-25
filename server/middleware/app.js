import express from 'express'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
console.log('LLLLLLLLLL')

app.all('/api/v1/auth/register', (req, res, next) => {
  console.log('ROUTE')
  next()
})

export default app