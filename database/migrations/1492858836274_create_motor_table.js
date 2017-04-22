'use strict'

const Schema = use('Schema')

class MotorsTableSchema extends Schema {

  up () {
    this.create('motors', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('motors')
  }

}

module.exports = MotorsTableSchema
