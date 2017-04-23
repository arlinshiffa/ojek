'use strict'

const Schema = use('Schema')

class TransactionsTableSchema extends Schema {

  up () {
    this.create('transactions', (table) => {
      table.increments()
      table.timestamps()
      table.integer('fare')
      table.time('time')
      table.date('date')
      table.integer('idMember').unsigned().index().references('id').inTable('users')
      table.integer('idOperator').unsigned().index().references('id').inTable('users')
      table.integer('idZone').unsigned().index().references('id').inTable('users')
      table.integer('idDriver').unsigned().index().references('id').inTable('users')

    })

  }

  down () {
    this.drop('transactions')
  }

}

module.exports = TransactionsTableSchema
