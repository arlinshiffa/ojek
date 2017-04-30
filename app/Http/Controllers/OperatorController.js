
'use strict'

const Operator= use('App/Model/Operator')
const User = use('App/Model/User')
const Hash = use('Hash')

class OperatorController {

  * index(request, response) {
    const operators = yield Operator.all()
    const user = yield User.all()
    yield response.sendView('operator/index', {operators:operators.toJSON(), user:user.toJSON()})
  }

  * create(request, response) {
    yield response.sendView('operator/create')
    yield response.sendView('operator/index', {users:user.toJSON(), user:user.toJSON()})
  }

  * store(request, response) {
    const user = new User()
    const operator = new Operator()
    user.username = request.input('userName')
    user.password = request.input('password')
    user.role='3';
    yield user.save()
    const userLast = yield User.last()
    operator.number= request.input('number')
    operator.name = request.input('name')
    operator.idUser = userLast.id
    yield operator.save()

  }

  * show(request, response) {
    const operator=yield Operator.findBy('id', request.param('id'))
    const user= yield User.findBy('id',operator.idUser)
    yield response.sendView('operator/show',{operator:operator.toJSON(),user:user.toJSON()})
  }

  * edit(request, response) {
    const operator=yield Operator.findBy('id', request.param('id'))
    const user= yield User.findBy('id',operator.idUser)
    yield response.sendView('operator/edit',{operator:operator.toJSON(),user:user.toJSON()})
  }

  * update(request, response) {
    const operatorData = request.except('_csrf','submit')
    const operator= yield Operator.findBy('id', request.param('id'))
    const userData = request.except('_csrf','submit')
    const user= yield User.findBy('id', operator.idUser)
    operator.name = operatorData.name
    operator.number = operatorData.number
    user.userName = userData.userName
    user.password = yield Hash.make(userData.password)

    yield operator.save()
    yield user.save()
    yield response.redirect(request.param('id'))

  }

  * destroy(request, response) {
    const operator =yield Operator.findBy('id', request.param('id'))
    const user = yield User.findBy('id',operator.idUser)
    yield operator.delete()
    yield user.delete()
    yield response.redirect('/operatorIUD')
  }

}

module.exports = OperatorController
