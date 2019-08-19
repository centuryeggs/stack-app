const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 创建数据模型
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: false
  },
  identity: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})
module.exports = User = mongoose.model("users",UserSchema)