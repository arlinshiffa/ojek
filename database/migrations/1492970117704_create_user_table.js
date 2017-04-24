'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
    this.create('users', (table) => {
      table.increments()
      table.timestamps()
      table.string('userName')
      table.string('password')
      table.integer('idMember').unsigned().index().references('id').inTable('members')
      table.integer('idOperator').unsigned().index().references('id').inTable('operators')
      table.integer('idDriver').unsigned().index().references('id').inTable('drivers')
    })


  }

  down () {
    this.dropIfExits('users')
  }

}

module.exports = UsersTableSchema
