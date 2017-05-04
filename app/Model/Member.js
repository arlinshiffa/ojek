'use strict'

const Lucid = use('Lucid')

class Member extends Lucid {

  transaction(){
    return this.hasMany('App/Model/Transaction')
  }
}

module.exports = Member
