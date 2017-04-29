'use strict'

const Schema = use('Schema')

class MembersTableSchema extends Schema {

  up () {
    this.create('members', (table) => {
      table.increments()
      table.timestamps()
      table.integer('idUser').unsigned().index().references('id').inTable('users')
      table.string('KTP', 20).unique()
      table.string('email')
      table.string('name')
      table.string('number')




  })

}

  down () {
    this.dropIfExists('members')
  }

}

module.exports = MembersTableSchema
