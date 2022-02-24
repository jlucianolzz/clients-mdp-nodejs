const Cliente = require("../../services/clienteService")
const cliente = new Cliente()
describe("Servicio de gestión de cliente", () => {
  test("debería devolver una lista de 10 clientes como maximo", async () => {
    const result = await cliente.listar({ pagina: 1, cantidad: 10 })
    expect(result.length).toBeLessThanOrEqual(10)
  })

  test("debería devolver el promedio de edades de todos los clientes", async () => {
    const { promedio } = await cliente.promedioEdades()
    expect(typeof promedio).toBe("number")
  })

  test("debería devolver el cliente registrado", async () => {
    const data = { vNombre: "Melany", vApellido: "Luciano", vFecNacimiento: "2011-08-10" }
    const nuevoCliente = await cliente.registrar(data)
    expect(nuevoCliente.length).toBe(1)
  })
})
