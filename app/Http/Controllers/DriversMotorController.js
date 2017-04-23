
'use strict'

const driversMotor= use('App/Model/driversMotor')

class driversMotorController {

  * index(request, response) {
    const driversMotor = yield driversMotor.all()
    yield response.sendView('driversMotor/index', {driversMotor:driversMotor.toJSON()})
  }

  * create(request, response) {
    yield response.sendView('driversMotor/create')
    yield response.sendView('driversMotor/index', {driversMotors:driversMotors.toJSON()})
  }

  * store(request, response) {
    const driversMotorData = request.except('_csrf','submit')
    yield driversMotor.create(driversMotorData)

  }

  * show(request, response) {
    const driversMotor=yield driversMotor.findBy('id', request.param('id'))
    yield response.sendView('driversMotor/show',{driversMotor:driversMotor.toJSON()})

  }

  * edit(request, response) {
    const driversMotor=yield driversMotor.findBy('id', request.param('id'))
    yield response.sendView('driversMotor/show',{driversMotor:driversMotor.toJSON()})
  }

  * update(request, response) {
    const driversMotorData = request.except('_csrf','submit')
    const driversMotor= yield driversMotor.findBy('id', request.param('id'))
    driversMotor.name = driversMotorData.name
    yield driversMotor.save()
    yield response.redirect(request.param('id'))
  }

  * destroy(request, response) {
    const driversMotor =yield driversMotor.findBy('id', request.param('id'))
    yield driversMotor.delete()
    yield response.redirect('/driversMotorIUD')

  }

}

module.exports = driversMotorController
