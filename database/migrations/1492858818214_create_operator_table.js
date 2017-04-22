'use strict'

const Schema = use('Schema')

class OperatorsTableSchema extends Schema {

  up () {
    this.create('operators', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('operators')
  }

}

module.exports = OperatorsTableSchema
