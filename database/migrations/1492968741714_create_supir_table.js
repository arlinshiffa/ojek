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


    })


  }

  down () {
    this.dropIfExits('drivers')
  }

}

module.exports = DriversTableSchema
