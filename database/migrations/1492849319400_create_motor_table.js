'use strict'

const Schema = use('Schema')

class MotorsTableSchema extends Schema {

  up () {
    this.create('motors', (table) => {
      table.increments()
      table.timestamps()
      table.string('nomorPolisi').unique()
      table.string('warna')
      table.string('tipe')
    })
  }

  down () {
    this.drop('motors')
  }

}

module.exports = MotorsTableSchema
