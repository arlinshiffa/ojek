'use strict'

const Schema = use('Schema')

class ZonesTableSchema extends Schema {

  up () {
    this.create('zones', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('zones')
  }

}

module.exports = ZonesTableSchema
