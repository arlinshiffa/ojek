'use strict'

const Schema = use('Schema')

class AdminsTableSchema extends Schema {

  up () {
    this.create('admins', (table) => {
      table.increments()
      table.timestamps()
      table.string('userName')
      table.integer('idAdmin').unsigned().index().references('id').inTable('users')
      table.string('name')
      table.string('number')
    })


  }

  down () {
    this.drop('admins')
  }

}

module.exports = AdminsTableSchema
