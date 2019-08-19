const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 创建数据模型
const ProfileSchema = new Schema({
  income: {
    type: String,
    required: true
  },
  expend: {
    type: String,
    required: true
  },
  cash:{
    type: String,
    required: true
  },
  type: {
    type: String
  },
  describe: {
    type: String
  },
  remark: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})
module.exports = Profile = mongoose.model("profile",ProfileSchema)