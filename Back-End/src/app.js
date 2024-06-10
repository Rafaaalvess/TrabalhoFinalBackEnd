const Express = require('express')
require('dotenv').config()
const router = require("./routes/index")

const app = Express()

app.use(Express.json())
app.use(router)

module.exports = app