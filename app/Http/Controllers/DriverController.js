
'use strict'

const Driver = use('App/Model/Driver')

class DriverController {

  * index(request, response) {
    const driver = yield Driver.all()
    yield response.sendView('driver/index', {driver:driver.toJSON()})

  }

  * create(request, response) {
    yield response.sendView('driver/create')
  }

  * store(request, response) {
    const driverData = request.except('_csrf','submit')
    yield Driver.create(driverData)

  }

  * show(request, response) {
    const driver=yield Driver.findBy('id', request.param('id'))
    yield response.sendView('driver/show',{driver:driver.toJSON()})
  }

  * edit(request, response) {
    const driver=yield Driver.findBy('id', request.param('id'))
    yield response.sendView('driver/show',{driver:driver.toJSON()})
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
    yield response.redirect('/driver')

  }

}

module.exports = DriverController
