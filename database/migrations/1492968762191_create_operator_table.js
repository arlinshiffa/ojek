'use strict'

const Schema = use('Schema')

class OperatorsTableSchema extends Schema {

  up () {
    this.create('operators', (table) => {
      table.increments()
      table.timestamps()


      table.string('name')
      table.string('number')
    })


  }

  down () {
    this.dropIfExits('operators')
  }

}

module.exports = OperatorsTableSchema
