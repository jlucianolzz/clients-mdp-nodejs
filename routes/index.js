const express = require("express")
const app = express()

const rCliente = require("./clienteRouter")

app.use("/api/clientes", rCliente)

module.exports = app
