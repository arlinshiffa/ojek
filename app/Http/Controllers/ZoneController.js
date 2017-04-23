
'use strict'

const zone= use('App/Model/zone')

class zoneController {

  * index(request, response) {
    const zone = yield zone.all()
    yield response.sendView('zone/index', {zone:zone.toJSON()})
  }

  * create(request, response) {
    yield response.sendView('zone/create')
    yield response.sendView('zone/index', {zones:zones.toJSON()})
  }

  * store(request, response) {
    const zoneData = request.except('_csrf','submit')
    yield zone.create(zoneData)

  }

  * show(request, response) {
    const zone=yield zone.findBy('id', request.param('id'))
    yield response.sendView('zone/show',{zone:zone.toJSON()})

  }

  * edit(request, response) {
    const zone=yield zone.findBy('id', request.param('id'))
    yield response.sendView('zone/show',{zone:zone.toJSON()})
  }

  * update(request, response) {
    const zoneData = request.except('_csrf','submit')
    const zone= yield zone.findBy('id', request.param('id'))
    zone.name = zoneData.name
    yield zone.save()
    yield response.redirect(request.param('id'))
  }

  * destroy(request, response) {
    const zone =yield zone.findBy('id', request.param('id'))
    yield zone.delete()
    yield response.redirect('/zoneIUD')

  }

}

module.exports = zoneController
