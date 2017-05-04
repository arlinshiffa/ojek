'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
    // this.create('users', (table) => {
    //   table.increments()
    //   table.timestamps()
    //   table.string('userName', 30).unique().notNullable()
    //   table.string('password').notNullable()
    //   table.integer('role', 1).unsigned().index().references('id').inTable('roles').notNullable()
    //   table.string('name',50).notNullable()
    //   table.string('number', 12).unique()
    // })


  }

  down () {
    // this.dropIfExists('users')
  }

}

module.exports = UsersTableSchema
