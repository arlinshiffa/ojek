'use strict'

const Schema = use('Schema')

class MembersTableSchema extends Schema {

  up () {
    this.create('members', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('members')
  }

}

module.exports = MembersTableSchema
