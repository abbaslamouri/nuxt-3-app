import express from 'express'
import userRouter from './server/routes/user'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
console.log('LLLLLLLLLL')

// app.use('/api/v1/user', userRouter)

export default app
