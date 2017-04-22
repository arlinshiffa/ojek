'use strict'

const Schema = use('Schema')

class SupirTableSchema extends Schema {

  up () {
    this.create('supirs', (table) => {
      table.increments()
      table.timestamps()
      table.string('name', 100)
      table.string('status', 5)
      table.string('nomorSIM',12)
      table.string('password', 20)
      table.string('userName', 20)
    })
  }

  down () {
    this.drop('supirs')
  }

}

module.exports = SupirTableSchema

