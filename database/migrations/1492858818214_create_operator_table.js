'use strict'

const Schema = use('Schema')

class OperatorsTableSchema extends Schema {

  up () {
    this.create('operators', (table) => {
      table.increments()
      table.timestamps()
      table.string('userName')
      table.integer('idOperator').unsigned().index().references('id').inTable('users')
      table.string('name')
      table.string('number')
    })


  }

  down () {
    this.drop('operators')
  }

}

module.exports = OperatorsTableSchema
