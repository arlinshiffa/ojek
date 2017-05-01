'use strict'

const Schema = use('Schema')

class TransactionsTableSchema extends Schema {

  up () {
    this.create('transactions', (table) => {
      table.increments()
      table.timestamps()
      table.integer('idMember').unsigned().index().references('id').inTable('members')

      table.integer('idZone').unsigned().index().references('id').inTable('zones')
      table.integer('idDriver').unsigned().index().references('id').inTable('drivers')

    })

  }

  down () {
    this.dropIfExists('transactions')
  }

}

module.exports = TransactionsTableSchema
