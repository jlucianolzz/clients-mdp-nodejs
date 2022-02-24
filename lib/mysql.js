const mysql = require("mysql2/promise")
const { dbConnectionLimit, dbHost, dbName, dbPassword, dbPort, dbUser } = require("../config").config

let pool

function getPool() {
  if (pool) return pool

  pool = mysql.createPool({
    host: dbHost,
    port: dbPort,
    user: dbUser,
    password: dbPassword,
    database: dbName,
    connectionLimit: dbConnectionLimit,
    decimalNumbers: true,
  })

  return pool
}

module.exports = { getPool }
