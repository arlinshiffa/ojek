'use strict'

const Schema = use('Schema')

class TokensTableSchema extends Schema {

  up () {
    this.create('tokens', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('tokens')
  }

}

module.exports = TokensTableSchema
