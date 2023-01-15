const route = require("express").Router()

const { getAllauthors } = require("../controllers/author")

route.get("/", (req, res) => {
  res.send("server working fine!")
})

route.get("/test-error", (req, res, next) => {
  const error = new Error("This is a test error")
  error.status = 400
  next(error)
})

route.get("/get-authors", getAllauthors)

module.exports = route
