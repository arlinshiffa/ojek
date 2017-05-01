transaction
'use strict'

const Transaction= use('App/Model/Transaction')
const Member = use('App/Model/Member')
const Supir = use('App/Model/Supir')

class TransactionController {

  * index(request, response) {
    const transaction = yield Transaction.all()
    const  = yield Member.all()
    yield response.sendView('operator', {transaction:transaction.toJSON(), member:member.toJSON()})
  }

  * store(request, response) {
    const member = new Member()
    const transaction = new Transaction()
    member.membername = request.input('memberName')
    member.password = request.input('password')
    member.role='2';
    yield member.save()
    const memberLast = yield Member.last()
    transaction.number= request.input('number')
    transaction.name = request.input('name')
    transaction.idMember = memberLast.id
    yield transaction.save()

  }

  * show(request, response) {
    const transaction=yield Transaction.findBy('id', request.param('id'))
    const member= yield Member.findBy('id',transaction.idMember)
    yield response.sendView('transaction/show',{transaction:transaction.toJSON(),member:member.toJSON()})
  }

  * edit(request, response) {
    const transaction=yield Transaction.findBy('id', request.param('id'))
    const member= yield Member.findBy('id',transaction.idMember)
    yield response.sendView('transaction/edit',{transaction:transaction.toJSON(),member:member.toJSON()})
  }

  * update(request, response) {
    const transactionData = request.except('_csrf','submit')
    const transaction= yield Transaction.findBy('id', request.param('id'))
    const memberData = request.except('_csrf','submit')
    const member= yield Member.findBy('id', transaction.idMember)
    transaction.name = transactionData.name
    transaction.number = transactionData.number
    member.memberName = memberData.memberName
    member.password = yield Hash.make(memberData.password)

    yield transaction.save()
    yield member.save()
    yield response.redirect(request.param('id'))

  }

  * destroy(request, response) {
    const transaction =yield Transaction.findBy('id', request.param('id'))
    const member = yield Member.findBy('id',transaction.idMember)
    yield transaction.delete()
    yield member.delete()
    yield response.redirect('/transactionIUD')
  }

}

module.exports = TransactionController
