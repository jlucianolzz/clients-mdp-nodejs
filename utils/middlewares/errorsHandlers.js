const boom = require("@hapi/boom")
const debug = require("debug")("app:error")
const { config } = require("../../config")

function withErrorStack(err, stack) {
  if (config.dev) {
    return { ...err, stack }
  } else {
    return { ...err }
  }
}

function logErrors(err, req, res, next) {
  debug(err.stack)
  next(err)
}

function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    if (err.status == 401) return next(boom.unauthorized(err))
    else return next(boom.badImplementation(err))
  }

  return next(err)
}

function clientErrors(err, req, res, next) {
  const {
    output: { statusCode, payload },
  } = err

  const dataError = withErrorStack(payload, err.stack)
  return res.status(statusCode).json(dataError)
}

module.exports = {
  logErrors,
  wrapErrors,
  clientErrors,
}
