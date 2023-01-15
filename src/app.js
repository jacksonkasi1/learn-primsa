const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

const config = require("@config")
console.log(config.NAME)


// const connectDB = require("./db")
// const routes = require("./api")

const app = express()
const http = require("http").Server(app)
const PORT = process.env.PORT || 5000

// app.use(connectDB)
app.use(bodyParser.json({ limit: "50mb" }))
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    parameterLimit: 100000,
    extended: true
  })
)
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

// app.use(routes)

const server = http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

module.exports = { server }
