const Youch = require("youch")
const youchTerminal = require("youch-terminal")

const youchMiddleware = async (err, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    const youch = new Youch(err, req)

    const errorJSON = await youch.toJSON()

    // use youchTerminal
    const log = youchTerminal(errorJSON, { debug: true, forceColor: true })

    console.log(log)

    // const errorJSON = await youch.toJSON()
    // return res.status(err.status || 500).json(errorJSON)

    const errorHTML = await youch.toHTML()
    return res.status(err.status || 500).send(errorHTML)
  } else {
    res.status(err.status || 500).json({ message: err.message })
  }
}

module.exports = youchMiddleware
