'use strict'

const Schema = use('Schema')

class RolesTableSchema extends Schema {

  up () {
    // this.create('roles', (table) => {
    //   table.increments()
    //   table.timestamps()
    //   table.string('name', 10).unique()
    // })
  }

  down () {
  //   this.dropIfExists('roles')
   }

}

module.exports = RolesTableSchema
