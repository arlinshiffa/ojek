'use strict'

const Transaction = use('App/Model/Transaction')
class RekamTransaksiController {

  * index(request, response) {
    const transactions = yield Transaction.all()
    yield response.sendView('operator', {transactions:transactions.toJSON()})
  }

}

module.exports = RekamTransaksiController
