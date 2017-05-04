'use strict'

const Lucid = use('Lucid')

class Zone extends Lucid {
  transaction(){
    return this.belongsToMany('App/Model/Transaction')
  }
}

module.exports = Zone
