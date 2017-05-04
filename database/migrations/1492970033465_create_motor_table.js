'use strict'

const Schema = use('Schema')

class MotorsTableSchema extends Schema {

  up () {
    // this.create('motors', (table) => {
    //   table.increments()
    //   table.timestamps()
    //   table.string('licensePlate', 10).unique()
    //   table.string('color',10)
    //   table.string('type',10)
    //
    // })
  }

  down () {
    // this.dropIfExists('motors')
  }

}

module.exports = MotorsTableSchema
