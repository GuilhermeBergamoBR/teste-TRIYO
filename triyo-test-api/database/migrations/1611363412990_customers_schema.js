'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomersSchema extends Schema {
  up () {
    this.create('customers', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('address', 254).notNullable()
      table.string('phone').notNullable()
      table.timestamps()
    })
  }
  
  down () {
    this.drop('customers')
  }
}

module.exports = CustomersSchema
