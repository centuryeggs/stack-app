const express = require('express')
const mongoose = require('mongoose')
const mongoURI = require('./config/keys').mongoURI
const bodyParser = require('body-parser')
const users = require('./routes/api/users')
const profiles = require('./routes/api/profiles')
const passport = require('passport')
const path = require("path")
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// 连接MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => { console.log('MongoDB is conneted!'); })
  .catch(err => { console.log(err); })


// passport 初始化
app.use(passport.initialize())

require('./config/passport')(passport)

// app.get('/', (req, res) => {
//   res.send('hello')
// })

app.use('/api/users', users)
app.use('/api/profiles', profiles)

// 执行前端静态页面
if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/dist'))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server running on port ${port}!`);

})