'use strict'

const Schema = use('Schema')

class ZonasTableSchema extends Schema {

  up () {
    this.create('zones', (table) => {
      table.increments()
      table.timestamps()
      table.string('zona').unique()
      table.integer('tarifZona')
    })
  }

  down () {
    this.drop('zones')
  }

}

module.exports = ZonasTableSchema
