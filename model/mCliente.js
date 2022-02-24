var { getPool } = require("../lib/mysql")
var pool = getPool()

/**
 * Registrar cliente
 * @function
 * @param {Object} data                           - Parámetros para Gestionar reserva
 * @param {string} params.PA_VNOMBRE              - vNombre - Nombre del cliente. Texto 50.
 * @param {decimal} params.PA_VAPELLIDO           - vApellido - Apellido del cliente. Texto 50.
 * @param {string} params.PA_DFECNACIMIENTO       - dFecNacimiento - Fecha de nacimiento. Texto 10.
 * @returns {Object}                              - Un Objeto con mensaje y data
 **/
let registrarCliente = async data => {
  const sql = "INSERT INTO cliente(vNombre,vApellido,dFecNacimiento) VALUES(?,?,?);"
  const values = Object.values(data)
  const results = await pool.query(sql, values)
  return { idCliente: results[0].insertId }
}

/**
 * Listar cliente
 * @function
 * @returns {Object}                       - Un Objeto con mensaje y data
 **/
let listarClientes = async data => {
  const sql = "SELECT * FROM cliente ORDER BY idCliente DESC LIMIT ?,? ;"
  const values = Object.values(data)
  const results = await pool.query(sql, values)
  return results[0]
}

/**
 * Obtener cliente
 * @function
 * @param {Object} data                           - Parámetros para obtener un cliente
 * @param {string} params.PA_IDCLIENTE            - idCliente - codigo autogenerado de cliente. Number.
 * @returns {Object}                              - Un Objeto con mensaje y data
 **/
let obtenerCliente = async data => {
  const sql = "SELECT * FROM cliente WHERE idCliente=?;"
  const values = Object.values(data)
  const results = await pool.query(sql, values)
  return results[0]
}

/**
 * Obtener promedio de edad
 * @function
 * @returns {Object}                       - Un Objeto con mensaje y data
 **/
let obtenerPromedioEdades = async () => {
  const sql = "SELECT ROUND(AVG(TRUNCATE(DATEDIFF(CURDATE(), dFecNacimiento)/365.25,0)),0) promedio FROM cliente;"
  const results = await pool.query(sql)
  return { promedio: results[0][0].promedio }
}

module.exports = {
  registrarCliente,
  listarClientes,
  obtenerCliente,
  obtenerPromedioEdades,
}
