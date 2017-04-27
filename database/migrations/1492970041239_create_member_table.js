'use strict'

const Schema = use('Schema')

class MembersTableSchema extends Schema {

  up () {
    this.create('members', (table) => {
      table.increments()
      table.timestamps()
      table.integer('idUser').unsigned().index().references('id').inTable('users')
      table.string('KTP', 20).unique()





  })

}

  down () {
    this.dropIfExists('members')
  }

}

module.exports = MembersTableSchema
