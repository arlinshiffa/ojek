'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
    // this.create('users', (table) => {
    //   table.increments()
    //   table.timestamps()
    //   table.string('userName', 30).unique().notNullable()
    //   table.string('password', 100).unique().notNullable()
    //   table.integer('role').unsigned().index().references('id').inTable('roles')
    //
    // })


  }

  down () {
    // this.dropIfExists('users')
  }

}

module.exports = UsersTableSchema
