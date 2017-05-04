'use strict'

const Schema = use('Schema')

class AdminsTableSchema extends Schema {

  up () {
    // this.create('admins', (table) => {
    //   table.increments()
    //   table.timestamps()
    //   table.integer('idUser').unsigned().index().references('id').inTable('users')
    //
    //
    // })


  }

  down () {
    // this.dropIfExists('admins')
  }

}

module.exports = AdminsTableSchema
