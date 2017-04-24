'use strict'

const Schema = use('Schema')

class AdminsTableSchema extends Schema {

  up () {
    this.create('admins', (table) => {
      table.increments()
      table.timestamps()

      table.string('name')
      table.string('number')
    })


  }

  down () {
    this.dropIfExits('admins')
  }

}

module.exports = AdminsTableSchema
