'use strict'

const Schema = use('Schema')

class DriversTableSchema extends Schema {

  up () {
    this.create('drivers', (table) => {
      table.increments()
      table.timestamps()
      table.boolean('status').defaultTo(false)
      table.string('SIM', 12).unique()
      table.integer('idUser').unsigned().index().references('id').inTable('users')
      table.string('number').unique()
      table.string('name', 200).notNullable()
      

    })


  }

  down () {
    this.dropIfExists('drivers')
  }

}

module.exports = DriversTableSchema
