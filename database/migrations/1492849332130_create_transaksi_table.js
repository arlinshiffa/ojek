'use strict'

const Schema = use('Schema')

class TransaksisTableSchema extends Schema {

  up () {
    this.create('transactions', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('transactions')
  }

}

module.exports = TransaksisTableSchema
