
'use strict'

const Operator= use('App/Model/Operator')

class OperatorController {

  * index(request, response) {
    const operators = yield Operator.all()
    yield response.sendView('operator/index', {operators:operators.toJSON()})
  }

  * create(request, response) {
    yield response.sendView('operator/create')
    yield response.sendView('operator/index', {operators:operators.toJSON()})
  }

  * store(request, response) {
    const operatorData = request.except('_csrf','submit')
    yield Operator.create(operatorData)

  }

  * show(request, response) {
    const operator=yield Operator.findBy('id', request.param('id'))
    yield response.sendView('operator/show',{operator:operator.toJSON()})

  }

  * edit(request, response) {
    const operator=yield Operator.findBy('id', request.param('id'))
    yield response.sendView('operator/edit',{operator:operator.toJSON()})
  }

  * update(request, response) {
    const operatorData = request.except('_csrf','submit')
    const operator= yield Operator.findBy('id', request.param('id'))
    operator.name = operatorData.name
    yield Operator.save()
    yield response.redirect(request.param('id'))
  }

  * destroy(request, response) {
    const operator =yield Operator.findBy('id', request.param('id'))
    yield Operator.delete()
    yield response.redirect('/operatorIUD')

  }

}

module.exports = OperatorController
