import express from 'express'
import userRouter from './serverx/routes/user'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
console.log('LLLLLLLLLL')

// app.use('/api/v1/user', userRouter)

export default app
