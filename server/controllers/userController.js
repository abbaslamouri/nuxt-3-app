import User from '../models/userModel'

const createUser = async (req, res, next) => {
  try {

    console.log("RB", req.body)
    const user = await User.create(req.body)
    res.status(201).json({
      status: "success",
      data: {
        user
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export { createUser }
