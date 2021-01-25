const Database = use('Database')

class DependentController {
  async index({request, response}){
    const rows = await Database
      .table('dependents')
      .select('*')

      response.json({
        message: 'Consulta feita com sucesso',
        data: rows
      })
  }

  async store({request, response}){
    let {name, age, type, customer_id} = request._all    
    try{
      await Database
      .table('dependents')
      .insert({name, age, type, customer_id})
      
      response.json({
        message: 'Dependente criado com sucesso',
      })
    }
    catch(err){
      response.json({
        status: err.status,
        message: err.message,
      })
    }
  }
}

module.exports = DependentController
