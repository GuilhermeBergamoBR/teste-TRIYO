'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DependentsSchema extends Schema {
  up () {
    this.create('dependents', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.integer('age', 3).notNullable()
      table.string('type', 6).notNullable()
      table.integer('customer_id').unsigned().references('id').inTable('customers')
      table.timestamps()
    })
  }

  down () {
    this.drop('dependents')
  }
}

module.exports = DependentsSchema
