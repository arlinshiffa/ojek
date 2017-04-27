
'use strict'

const DriverMotor= use('App/Model/DriverMotor')

class DriverMotorController {

  * index(request, response) {
    const driverMotors = yield DriverMotor.all()
    yield response.sendView('driverMotor/index', {driverMotors:driverMotors.toJSON()})
  }

  * create(request, response) {
    yield response.sendView('driverMotor/create')
    yield response.sendView('driverMotor/index', {driverMotors:driverMotors.toJSON()})
  }

  * store(request, response) {
    const driverMotorData = request.except('_csrf','submit')
    yield DriverMotor.create(driverMotorData)

  }

  * show(request, response) {
    const driverMotor=yield DriverMotor.findBy('id', request.param('id'))
    yield response.sendView('driverMotor/show',{driverMotor:driverMotor.toJSON()})

  }

  * edit(request, response) {
    const driverMotor=yield DriverMotor.findBy('id', request.param('id'))
    yield response.sendView('driverMotor/edit',{driverMotor:driverMotor.toJSON()})
  }

  * update(request, response) {
    const driverMotorData = request.except('_csrf','submit')
    const driverMotor= yield DriverMotor.findBy('id', request.param('id'))
    driverMotor.name = driverMotorData.name
    yield driverMotor.save()
    yield response.redirect(request.param('id'))
  }

  * destroy(request, response) {
    const driverMotor =yield DriverMotor.findBy('id', request.param('id'))
    yield driverMotor.delete()
    yield response.redirect('/driverMotorIUD')

  }

}

module.exports = DriverMotorController
