
'use strict'

const Motor= use('App/Model/Motor')

class MotorController {

  * index(request, response) {
    const motors = yield Motor.all()
    yield response.sendView('motor/index', {motors:motors.toJSON()})
  }

  * create(request, response) {
    yield response.sendView('motor/create')
    yield response.sendView('motor/index', {motors:motors.toJSON()})
  }

  * store(request, response) {
    const motorData = request.except('_csrf','submit')
    yield Motor.create(motorData)

  }

  * show(request, response) {
    const motor=yield Motor.findBy('id', request.param('id'))
    yield response.sendView('motor/show',{motor:motor.toJSON()})

  }

  * edit(request, response) {
    const motor=yield Motor.findBy('id', request.param('id'))
    yield response.sendView('motor/show',{motor:motor.toJSON()})
  }

  * update(request, response) {
    const motorData = request.except('_csrf','submit')
    const motor= yield Motor.findBy('id', request.param('id'))
    motor.name = motorData.name
    yield Motor.save()
    yield response.redirect(request.param('id'))
  }

  * destroy(request, response) {
    const motor =yield Motor.findBy('id', request.param('id'))
    yield motor.delete()
    yield response.redirect('/motorIUD')

  }

}

module.exports = MotorController
