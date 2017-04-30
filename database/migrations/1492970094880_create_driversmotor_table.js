'use strict'

const Schema = use('Schema')

class DriversMotorTableSchema extends Schema {

  up () {
    this.create('drivers_motors', (table) => {
      table.increments()
      table.timestamps()

      table.integer('idMotor').unsigned().index().references('id').inTable('motors')
      table.integer('idDriver').unsigned().index().references('id').inTable('drivers')
      table.string('licensePlate')
      table.string('color')
      table.string('type')
      table.boolean('status')
      table.string('name')
      table.string('SIM', 16)

    })
  }

  down () {
    this.dropIfExists('drivers_motors')
  }

}

module.exports = DriversMotorTableSchema
