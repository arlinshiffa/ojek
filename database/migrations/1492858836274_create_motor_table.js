'use strict'

const Schema = use('Schema')

class MotorsTableSchema extends Schema {

  up () {
    this.create('motors', (table) => {
      table.increments()
      table.timestamps()
      table.string('licensePlate')
      table.string('color')
      table.string('type')

    })
  }

  down () {
    this.drop('motors')
  }

}

module.exports = MotorsTableSchema
