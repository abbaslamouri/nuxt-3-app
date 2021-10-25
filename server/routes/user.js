import express from 'express'
import { register, login } from '../../auth'

console.log('User Router')

const router = express.Router()

router.route('/register').post(register)
router.route('/login').post(login)

export default router
