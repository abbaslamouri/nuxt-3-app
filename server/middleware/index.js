import mongoose from 'mongoose'

mongoose
  .connect(
    'mongodb+srv://nuxt-3-app:adrar0714@nuxt-3-app.a4xvz.mongodb.net/nuxt-3-app?retryWrites=true&w=majority',
    {}
  )
  .then(
    () => {
      console.log('Database connection succesfull')
    },
    (err) => {
      console.log(err)
    }
  )

// export default (req, res) => 'Hello World'

// app.get('/', (req, res) => {
//   res.send('Hello from the movies!')
// })

// export default (req, res) => {
//   const app = express()

//   app.get('/', (req, res) => {
//   res.send('Hello from the movies!')
// })
// }

export default async (req, res) => {
  // console.log(req.url)
  // console.log("PE", process.env.PORT)
  req.junk = 'JUNK'
}
