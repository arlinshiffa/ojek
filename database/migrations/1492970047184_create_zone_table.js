'use strict'

const Schema = use('Schema')

class ZonesTableSchema extends Schema {

  up () {
    this.create('zones', (table) => {
      table.increments()
      table.timestamps()
      table.integer('fare')
      table.string('name')

    })
  }

  down () {
    this.dropIfExists('zones')
  }

}

module.exports = ZonesTableSchema
