'use strict'

const Driver= use(App/Model/Driver)
const Transaction= use(App/Model/Transaction)

class TampilanDriverController {

  * index(request, response){
  const transactions = yield transactions.query().with('idDriver').fetch()
   yield response.sendView('supir', {transactions:transactions.toJSON()})
   //console.log(users.toJSON())
}
}

module.exports = TampilanDriverController
