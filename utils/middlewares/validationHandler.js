const esJoi = require("../../lib/locales/spanish-joi.json")
const boom = require("@hapi/boom")
const options = {
  errors: {
    labels: true,
    language: "es",
  },
  messages: {
    es: esJoi,
  },
  stripUnknown: true,
}

function validate(data, schema) {
  const result = schema.validate(data, options)
  return result
}

function validationHandler(schema, nameSchema = "data", check = "body") {
  return function (req, res, next) {
    const { error, value } = validate(req[check], schema)
    if (error) {
      next(boom.badRequest(error))
    } else {
      res.locals[nameSchema] = value
      next()
    }
  }
}

module.exports = validationHandler
