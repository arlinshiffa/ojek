const Supir = use('App/Model/Supir')

class SupirController {

  * index(request, response) {
    const supir = yield Supir.all()
    yield response.sendView('supir/index', {supir:supir.toJSON()})
    
  }

  * create(request, response) {
    yield response.sendView('biro/create')
  }

  * store(request, response) {
    const supirData = request.except('_csrf','submit')
    yield Supir.create(supirData)
    
  }

  * show(request, response) {
    const supir=yield Supir.findBy('id', request.param('id'))
    yield response.sendView('supir/show',{supir:supir.toJSON()})
  }

  * edit(request, response) {
    const supir=yield Supir.findBy('id', request.param('id'))
    yield response.sendView('supir/show',{supir:supir.toJSON()})
  }

  * update(request, response) {
    const supirData = request.except('_csrf','submit')
    const supir= yield Supir.findBy('id', request.param('id'))
    supir.name = supirData.name
    yield supir.save()
    yield response.redirect(request.param('id'))
  }

  * destroy(request, response) {
    const supir =yield Supir.findBy('id', request.param('id'))
    yield supir.delete()
    yield response.redirect('/supir')
    
  }

}

module.exports = SupirController
