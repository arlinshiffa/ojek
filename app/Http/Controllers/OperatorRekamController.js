'use strict'

const Zone = use('App/Model/Zone')
const Transaction=use('App/Model/Transaction')
const Database=use('Database')

const User =use('App/Model/User')
const Driver = use('App/Model/Driver')


class OperatorRekamController {

  * index(request, response) {
    
    const user = request.currentUser
    const driver = yield Driver.findBy('idUser',user.id)
    const transaction = yield Database.table('transactions')
    .innerJoin('drivers','drivers.id','transactions.idDriver')
    .innerJoin('zones','zones.id','transactions.idZone')
    .where('idDriver',driver.id)
    console.log(transaction)
    yield response.sendView('operator',{transactions:transaction})
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = OperatorRekamController
