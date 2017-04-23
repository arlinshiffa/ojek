
'use strict'

const transaction= use('App/Model/transaction')

class transactionController {

  * index(request, response) {
    const transaction = yield operator.all()
    yield response.sendView('transaction/index', {transaction:transaction.toJSON()})
  }

  * create(request, response) {
    yield response.sendView('transaction/create')
    yield response.sendView('transaction/index', {transactions:transactions.toJSON()})
  }

  * store(request, response) {
    const transactionData = request.except('_csrf','submit')
    yield transaction.create(operatorData)

  }

  * show(request, response) {
    const transaction=yield transaction.findBy('id', request.param('id'))
    yield response.sendView('transaction/show',{transaction:transaction.toJSON()})

  }

  * edit(request, response) {
    const transaction=yield transaction.findBy('id', request.param('id'))
    yield response.sendView('transaction/show',{transaction:transaction.toJSON()})
  }

  * update(request, response) {
    const transactionData = request.except('_csrf','submit')
    const transaction= yield transaction.findBy('id', request.param('id'))
    transaction.name = transactionData.name
    yield transaction.save()
    yield response.redirect(request.param('id'))
  }

  * destroy(request, response) {
    const transaction =yield transaction.findBy('id', request.param('id'))
    yield transaction.delete()
    yield response.redirect('/transactionIUD')

  }

}

module.exports = transactionController
