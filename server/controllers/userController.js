const createUser = async (req, res, next) => {
  console.log('serverMiddleware', req.body)
  res.statusCode = 200
  res.end('Works!ffdgfdsdfs')
}

export { createUser }
