'use strict'


const Supir = use('App/Model/Driver')
const Member = use('App/Model/Member')
const Zone = use('App/Model/Zone')
const User = use('App/Model/User')
const Transaction = use('App/Model/Transaction')
const Database = use('Database')

class TempController {

  * index(request, response) {

    const zone = yield Zone.all()
    yield response.sendView('member', {zones:zone.toJSON()})
  }

  * store(request, response) {
    const transactionDetail= new Transaction()

    const user = request.currentUser

    const member = yield Member.findBy('idUser',user.id)
    const supir = yield Supir.findBy('status', 0)

    transactionDetail.idMember= member.id
    transactionDetail.idDriver = supir.id
    transactionDetail.idZone = request.input('zoneId')
    yield transactionDetail.save()
    supir.status=1
    yield supir.save()

  }


  * show(request, response) {
    const transactionDetail = yield Database.table('transactions').innerJoin('drivers','drivers.id','transactions.idDriver')
    // .innerJoin('zones','zones.id','transaction.idDriver')
    yield response.sendView('member',{transactionDetail:transactionDetail})
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

module.exports = TempController
