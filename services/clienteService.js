const mCliente = require("../model/mCliente")

class ClienteService {
  constructor() {
    this.model = {
      vNombre: "",
      vApellido: "",
      dFecNacimiento: "1970-01-01",
    }
  }

  async registrar(data) {
    let params = { ...this.model, ...data }
    const { idCliente } = await mCliente.registrarCliente(params)
    return await mCliente.obtenerCliente({ idCliente })
  }

  async listar({ pagina, cantidad }) {
    const salto = (pagina - 1) * cantidad
    return await mCliente.listarClientes({ salto, cantidad })
  }

  async obtener({ idCliente }) {
    return await mCliente.listarClientes({ idCliente })
  }

  async promedioEdades() {
    return await mCliente.obtenerPromedioEdades()
  }
}

module.exports = ClienteService
