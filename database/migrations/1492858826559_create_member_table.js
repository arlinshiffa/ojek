'use strict'

const Schema = use('Schema')

class MembersTableSchema extends Schema {

  up () {
    this.create('members', (table) => {
      table.increments()
      table.timestamps()
      table.string('KTP', 16)
      table.string('userName')
      table.integer('idMember').unsigned().index().references('id').inTable('users')

      table.string('email')
      table.string('number')
      table.string('name')

  })

}

  down () {
    this.drop('members')
  }

}

module.exports = MembersTableSchema
