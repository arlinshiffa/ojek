'use strict'

const Schema = use('Schema')

class MembersTableSchema extends Schema {

  up () {
    this.create('members', (table) => {
      table.increments()
      table.timestamps()
      table.string('password')
      table.string('noKTP', 16).unique()
      table.string('email').unique()
      table.string('noHP').unique()


    })
  }

  down () {
    this.drop('members')
  }

}

module.exports = MembersTableSchema
