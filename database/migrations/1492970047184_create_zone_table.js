'use strict'

const Schema = use('Schema')

class ZonesTableSchema extends Schema {

  up () {
    // this.create('zones', (table) => {
    //   table.increments()
    //   table.timestamps()
    //   table.integer('fare', 15)
    //   table.string('name', 50)
    //
    // })
  }

  down () {
    // this.dropIfExists('zones')
  }

}

module.exports = ZonesTableSchema
