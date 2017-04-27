
'use strict'

const Driver= use('App/Model/Driver')

class DriverController {

  * index(request, response) {
    const drivers = yield Driver.all()
    yield response.sendView('driver/index', {drivers:drivers.toJSON()})
  }

  * create(request, response) {
    yield response.sendView('driver/create')
    yield response.sendView('driver/index', {drivers:drivers.toJSON()})
  }

  * store(request, response) {
    const driverData = request.except('_csrf','submit')
    yield Driver.create(driverData)

  }

  * show(request, response) {
    const driver=yield Driver.findBy('id', request.param('id'))
    yield response.sendView('driver/show',{driver:driver.toJSON()})

  }

  * memberpilihZona(request, response) {
    const zones = yield Zone.all()
    yield response.sendView('member', {zones:zones.toJSON()})
  }

  * edit(request, response) {
    const driver=yield Driver.findBy('id', request.param('id'))
    yield response.sendView('driver/edit',{driver:driver.toJSON()})
  }

  * update(request, response) {
    const driverData = request.except('_csrf','submit')
    const driver= yield Driver.findBy('id', request.param('id'))
    driver.name = driverData.name
    yield driver.save()
    yield response.redirect(request.param('id'))
  }

  * destroy(request, response) {
    const driver =yield Driver.findBy('id', request.param('id'))
    yield driver.delete()
    yield response.redirect('/driverIUD')

  }

}

module.exports = DriverController
