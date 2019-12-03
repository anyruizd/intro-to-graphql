import mongoose from 'mongoose'
import options from './config'

export const connect = (url = options.dbUrl, opts = {}) => {
  // This returns a promise
  return mongoose.connect(
    url,
    { ...opts, useNewUrlParser: true }
  )
}
