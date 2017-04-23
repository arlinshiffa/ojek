
'use strict'

const admin = use('App/Model/admin')

class adminController {

  * index(request, response) {
    const admin = yield admin.all()
    yield response.sendView('admin/index', {admin:admin.toJSON()})

  }

  * create(request, response) {
    yield response.sendView('admin/create')
  }

  * store(request, response) {
    const adminData = request.except('_csrf','submit')
    yield admin.create(adminData)

  }

  * show(request, response) {
    const admin=yield admin.findBy('id', request.param('id'))
    yield response.sendView('admin/show',{admin:admin.toJSON()})
  }

  * edit(request, response) {
    const admin=yield admin.findBy('id', request.param('id'))
    yield response.sendView('admin/show',{admin:admin.toJSON()})
  }

  * update(request, response) {
    const adminData = request.except('_csrf','submit')
    const admin= yield admin.findBy('id', request.param('id'))
    admin.name = adminData.name
    yield admin.save()
    yield response.redirect(request.param('id'))
  }

  * destroy(request, response) {
    const admin =yield admin.findBy('id', request.param('id'))
    yield admin.delete()
    yield response.redirect('/admin')

  }

}

module.exports = adminController
