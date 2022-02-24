const Joi = require("joi")

const clienteSchema = Joi.object({
  vNombre: Joi.string().max(50).required(),
  vApellido: Joi.string().max(50).required(),
  dFecNacimiento: Joi.string().max(10).required(),
})

const filtroSchema = Joi.object({
  pagina: Joi.number().required(),
  cantidad: Joi.number().max(50).required(),
})

module.exports = {
  clienteSchema,
  filtroSchema,
}
