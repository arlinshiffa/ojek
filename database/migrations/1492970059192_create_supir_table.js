'use strict'

const Schema = use('Schema')

class DriversTableSchema extends Schema {

  up () {
    // this.create('drivers', (table) => {
    //   table.increments()
    //   table.timestamps()
    //   table.boolean('status', 1).defaultTo(false)
    //   table.string('SIM', 20).unique().notNullable()
    //   table.integer('idUser').unsigned().index().references('id').inTable('users')
    //
    //
    //
    // })


  }

  down () {
    // this.dropIfExists('drivers')
  }

}

module.exports = DriversTableSchema
