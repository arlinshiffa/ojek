'use strict'

const Lucid = use('Lucid')

class Transaction extends Lucid {
  driver(){
    return this.belongsToMany('App/Model/Driver')
  }
  member(){
    return this.belongsToMany('App/Model/member')
  }
  zone(){
    return this.hasOne('App/Model/zone')
  }
}

module.exports = Transaction
