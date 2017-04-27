'use strict'

const Schema = use('Schema')

class MotorsTableSchema extends Schema {

  up () {
    this.create('motors', (table) => {
      table.increments()
      table.timestamps()
      table.string('licensePlate').unique()
      table.string('color')
      table.string('type')

    })
  }

  down () {
    this.dropIfExists('motors')
  }

}

module.exports = MotorsTableSchema
