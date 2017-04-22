'use strict'

const Schema = use('Schema')

class AdminsTableSchema extends Schema {

  up () {
    this.create('admins', (table) => {
      table.increments()
      table.timestamps()
      table.string('userName').unique()
      table.string('password')
    })
  }

  down () {
    this.drop('admins')
  }

}

module.exports = AdminsTableSchema
