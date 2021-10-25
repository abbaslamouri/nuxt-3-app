import colors from 'colors'
import AppError from './AppError'

export default (err, req, res, next) => {
  console.log(colors.brightYellow(err))

  let error = { ...err }
  error.message = err.message

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    error = new AppError(`Unable to find a document with this this id: ${error.value}`, 404)
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0]
    const fieldValue = Object.values(err.keyValue)[0]
    error = new AppError(
      `${
        field[0].toUpperCase() + field.substring(1)
      } must be unique.  A document with ${field} = ${fieldValue} exists in the database`,
      400
    )
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    error = new AppError(
      Object.values(err.errors).map((item) => item.message),
      400
    )
  }

  res.json({
    statusCode: error.statusCode || 500,
    name: error.name,
    errors: error.errors,
    errorCode: error.code,
    errorValue: error.value,
    status: 'error',
    message: error.message || 'Server error',
  })
}
