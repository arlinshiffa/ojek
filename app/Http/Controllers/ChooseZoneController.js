'use strict'

const Zone = use('App/Model/Zone')
class ChooseZoneController {

  * index(request, response) {
    const zones = yield Zone.all()
    yield response.sendView('member', {zones:zones.toJSON()})
  }
}

module.exports = ChooseZoneController
