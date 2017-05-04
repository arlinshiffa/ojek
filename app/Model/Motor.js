'use strict'

const Lucid = use('Lucid')

class Motor extends Lucid {
  driver(){
    return this.belongsToMany('App/Model/Driver')
  }
}

module.exports = Motor
