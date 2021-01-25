const Database = use('Database')

class CustomerController {
  async index({ request, response }) {
    const customer = await Database
      .table('customers')
      .select('*')

    const dependents = await Database
      .table('dependents')
      .where('customer_id', 1)

    customer[0].dependents = dependents

    console.log(customer)
    response.json({
      message: 'Consulta feita com sucesso',
      data: customer
    })
  }

  async store({ request, response }) {
    let { name, address, phone } = request.body
    await Database
      .table('customers')
      .insert({ name, address, phone })

    response.json({
      message: 'Cliente criado com sucesso',
    })
  }
}

module.exports = CustomerController
