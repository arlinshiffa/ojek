'use strict'

const Zone = use('App/Model/Zone')
class ChooseZoneController {

  * member(request, response) {
    const zones = yield Zone.all()
    yield response.sendView('zone/member', {zones:zones.toJSON()})
  }
}

module.exports = ChooseZoneController
