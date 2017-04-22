'use strict'

const Schema = use('Schema')

class MotorSupirsTableSchema extends Schema {

  up () {
    this.create('motor_supirs', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('motor_supirs')
  }

}

module.exports = MotorSupirsTableSchema
