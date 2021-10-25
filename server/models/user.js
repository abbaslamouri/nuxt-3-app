import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 50 characters long'],
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: [true, 'Email is required'],
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please enter a valid email address',
    ],
  },
  role: {
    type: String,
    enum: ['user', 'shop-manager'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Pasword is required'],
    minlength: [8, 'Password must contain at least 8 charcaters'],
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, 'Confirmation Pasword is required'],
    validate: {
      // Only works on save()/create()
      validator: function (val) {
        return val === this.password
      },
      message: 'Passwords dont match',
    },
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdDate: {
    type: Date,
    default: Date.now(),
  },
})

// Document Middleware, runs before save() and create()
schema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  this.confirmPassword = undefined
  next()
})

schema.methods.getSinedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })
}

export default mongoose.model('User', schema)
