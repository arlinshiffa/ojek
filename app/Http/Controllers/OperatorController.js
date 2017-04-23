
'use strict'

const operator= use('App/Model/operator')

class operatorController {

  * index(request, response) {
    const operator = yield operator.all()
    yield response.sendView('operator/index', {operator:operator.toJSON()})
  }

  * create(request, response) {
    yield response.sendView('operator/create')
    yield response.sendView('operator/index', {operators:operators.toJSON()})
  }

  * store(request, response) {
    const operatorData = request.except('_csrf','submit')
    yield operator.create(operatorData)

  }

  * show(request, response) {
    const operator=yield operator.findBy('id', request.param('id'))
    yield response.sendView('operator/show',{operator:operator.toJSON()})

  }

  * edit(request, response) {
    const operator=yield operator.findBy('id', request.param('id'))
    yield response.sendView('operator/show',{operator:operator.toJSON()})
  }

  * update(request, response) {
    const operatorData = request.except('_csrf','submit')
    const operator= yield operator.findBy('id', request.param('id'))
    operator.name = operatorData.name
    yield operator.save()
    yield response.redirect(request.param('id'))
  }

  * destroy(request, response) {
    const operator =yield operator.findBy('id', request.param('id'))
    yield operator.delete()
    yield response.redirect('/operatorIUD')

  }

}

module.exports = operatorController
