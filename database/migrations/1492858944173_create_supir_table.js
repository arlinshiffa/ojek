'use strict'

const Schema = use('Schema')

class SupirsTableSchema extends Schema {

  up () {
    this.create('supirs', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('supirs')
  }

}

module.exports = SupirsTableSchema
