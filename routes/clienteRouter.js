const express = require("express")
const router = express.Router()

const ClienteService = require("../services/clienteService")
const clienteService = new ClienteService()

const validation = require("../utils/middlewares/validationHandler")
const { clienteSchema, filtroSchema } = require("../utils/schemas/clienteSchema")

/*******
 * Listar clientes
 ******/
router.get("/", validation(filtroSchema, "dataQuery", "query"), async function (req, res, next) {
  try {
    const data = res.locals.dataQuery
    const result = await clienteService.listar(data)
    res.json({ message: { iCod: 200 }, data: { clientes: result } })
  } catch (error) {
    next(error)
  }
})

/*******
 * Listar promedio de edades
 ******/
router.get("/promedioEdad", async function (req, res, next) {
  try {
    const result = await clienteService.promedioEdades()
    res.json({ message: { iCod: 200 }, data: { resumen: result } })
  } catch (error) {
    next(error)
  }
})

/*******
 * Agregar cliente
 ******/
router.post("/", validation(clienteSchema), async function (req, res, next) {
  try {
    const result = await clienteService.registrar(res.locals.data)
    res.status(201).json({ message: { iCod: 200 }, data: { cliente: result[0] } })
  } catch (error) {
    next(error)
  }
})

module.exports = router
