
'use strict'

const Zone= use('App/Model/Zone')

class ZoneController {

  * index(request, response) {
    const zones = yield Zone.all()
    yield response.sendView('zone/index', {zones:zones.toJSON()})
  }


    * member(request, response) {
      const zones = yield Zone.all()
      yield response.sendView('member', {zones:zones.toJSON()})
    }



  * create(request, response) {
    yield response.sendView('zone/create')
    yield response.sendView('zone/index', {zones:zones.toJSON()})
  }

  * store(request, response) {
    const zoneData = request.except('_csrf','submit')
    yield Zone.create(zoneData)

  }

  * show(request, response) {
    const zone=yield Zone.findBy('id', request.param('id'))
    yield response.sendView('zone/show',{zone:zone.toJSON()})


  }

  * edit(request, response) {
    const zone=yield Zone.findBy('id', request.param('id'))
    yield response.sendView('zone/edit',{zone:zone.toJSON()})
  }

  * update(request, response) {
    const zoneData = request.except('_csrf','submit')
    const zone= yield Zone.findBy('id', request.param('id'))
    zone.name = zoneData.name
    yield zone.save()
    yield response.redirect(request.param('id'))
  }

  * destroy(request, response) {
    const zone =yield Zone.findBy('id', request.param('id'))
    yield zone.delete()
    yield response.redirect('/zoneIUD')

  }

}

module.exports = ZoneController
