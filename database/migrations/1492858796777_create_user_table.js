'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
    this.create('users', (table) => {
      table.increments()
      table.timestamps()
      table.string('userName')
      table.string('password')
    })


  }

  down () {
    this.drop('users')
  }

}

module.exports = UsersTableSchema
