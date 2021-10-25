import User from './server/models/user'
import AppError from './server/utils/AppError'
import asyncHandler from './server/utils/asyncHandler'

// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzViNTk3NzI4MzIyNTU3ZTY0Y2JkNiIsImlhdCI6MTYzNTEwNDE1MSwiZXhwIjoxNjM1MTkwNTUxfQ.z_6BwvKkjWThKwttWZ-3dTLcjKQFXrSXfKD8oFjmdlo"

// @desc      Register user
// @route     POST /api/Register user
// @access    Public
const register = asyncHandler(async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body
  const user = await User.create({
    name,
    email,
    password,
    confirmPassword,
  })

  const token = user.getSinedJwtToken()
  res.json({
    statusCode: 201,
    status: 'success',
    data: { token },
  })
})

// @desc      Register user
// @route     POST /api/Register user
// @access    Public
const login = asyncHandler(async (req, res, next) => {
  console.log('loginxxxxxxxxxx')
  const { email, password } = req.body
  if (!email || !password) return next(AppError(`Unable to find a document with this this id: ${error.value}`, 400))
  // const user = await User.create({
  //   name,
  //   email,
  //   password,
  //   confirmPassword,
  // })

  // const token = user.getSinedJwtToken()
  // res.json({
  //   statusCode: 201,
  //   status: 'success',
  //   data: { token },
  // })
})

export { register, login }
