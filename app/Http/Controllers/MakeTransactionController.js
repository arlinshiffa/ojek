'use strict'

  const Transaction = use(App/Model/transaction)
  const Member = use(App/Model/member)
  const Driver = use(App/Model/driver)
  const Zone = use(App/Model/zone)

class MakeTransactionController {
  * makeTransaction(request, response){
      const transaction = new Transaction()
      const member = new Member()
      const driver = new Driver()
      const zone = yield Zone.findBy('id', request.param('idZone'))




  }
}

module.exports = MakeTransactionController
