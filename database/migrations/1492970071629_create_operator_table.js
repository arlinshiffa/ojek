'use strict'

const Schema = use('Schema')

class OperatorsTableSchema extends Schema {

  up () {
    this.create('operators', (table) => {
      table.increments()
      table.timestamps()
      table.integer('idUser').unsigned().index().references('id').inTable('users')
      table.string('number').unique()
      table.string('name', 200).notNullable()
      
    })


  }

  down () {
    this.dropIfExists('operators')
  }

}

module.exports = OperatorsTableSchema
