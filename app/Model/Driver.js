'use strict'

const Lucid = use('Lucid')

class Driver extends Lucid {

  transaction(){
    return this.hasMany('App/Model/Transaction')
  }
  motor(){
    return this.hasMany('App/Model/Motor')
  }
  user(){
    return this.hasOne('App/Model/User')
  }
}

module.exports = Driver
