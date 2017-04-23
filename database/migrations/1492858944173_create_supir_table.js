'use strict'

const Schema = use('Schema')

class DriversTableSchema extends Schema {

  up () {
    this.create('drivers', (table) => {
      table.increments()
      table.timestamps()
      table.boolean('status')
      table.string('name')
      table.string('SIM', 12)
      table.string('userName')
      table.integer('idDriver').unsigned().index().references('id').inTable('users')
    })


  }

  down () {
    this.drop('drivers')
  }

}

module.exports = DriversTableSchema
