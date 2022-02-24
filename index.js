const express = require("express")
const debug = require("debug")("app:server")
const cors = require("cors")
const boom = require("@hapi/boom")

const { config } = require("./config")
const { wrapErrors, clientErrors, errorHandler } = require("./utils/middlewares/errorsHandlers")

// app
const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  cors({
    origin: config.appFront,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
)

// routes
app.use(require("./routes"))

// default
app.use(function (req, res, next) {
  const {
    output: { statusCode, payload },
  } = boom.notFound()

  return res.status(statusCode).json(payload)
})

app.use(wrapErrors)
app.use(clientErrors)

const server = app.listen(config.appPort, function () {
  debug(`Listening http://localhost:${server.address().port}`)
})
