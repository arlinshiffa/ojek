
'use strict'

const Transaction= use('App/Model/Transaction')

class TransactionController {

  * index(request, response) {
    const transactions = yield Transaction.all()
    yield response.sendView('transaction/index', {transactions:transactions.toJSON()})
  }

  * create(request, response) {
    yield response.sendView('transaction/create')
    yield response.sendView('transaction/edit', {transactions:transactions.toJSON()})
  }

  * store(request, response) {
    const transactionData = request.except('_csrf','submit')
    yield Transaction.create(transactionData)

  }

  * show(request, response) {
    const transaction=yield Transaction.findBy('id', request.param('id'))
    yield response.sendView('transaction/show',{transaction:transaction.toJSON()})

  }

  * edit(request, response) {
    const transaction=yield Transaction.findBy('id', request.param('id'))
    yield response.sendView('transaction/show',{transaction:transaction.toJSON()})
  }

  * update(request, response) {
    const transactionData = request.except('_csrf','submit')
    const transaction= yield Transaction.findBy('id', request.param('id'))
    transaction.name = transactionData.name
    yield transaction.save()
    yield response.redirect(request.param('id'))
  }

  * destroy(request, response) {
    const transaction =yield Transaction.findBy('id', request.param('id'))
    yield transaction.delete()
    yield response.redirect('/transactionIUD')

  }

}

module.exports = TransactionController
