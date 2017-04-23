'use strict'

const Schema = use('Schema')

class DriversMotorTableSchema extends Schema {

  up () {
    this.create('driversMotor', (table) => {
      table.increments()
      table.timestamps()
      
      table.integer('idMotor').unsigned().index().references('id').inTable('users')
      table.integer('idDriver').unsigned().index().references('id').inTable('users')
      table.string('licensePlate')
      table.string('color')
      table.string('type')
      table.boolean('status')
      table.string('name')
      table.string('SIM', 16)

    })
  }

  down () {
    this.drop('driversMotor')
  }

}

module.exports = DriversMotorTableSchema
