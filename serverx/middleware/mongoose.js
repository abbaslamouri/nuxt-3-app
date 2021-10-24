import colors from 'colors'
import mongoose from 'mongoose'
// console.log('PPPPPP', process.env)

mongoose.connect(process.env.DB_URL, {}).then(
  () => {
    console.log(colors.magenta.bold('Database connection succesfull'))
  },
  (err) => {
    console.log(err)
  }
)

export default (req, res) => {
  console.log('RU', req.url)
  req.junk = 'JUNK'
}
