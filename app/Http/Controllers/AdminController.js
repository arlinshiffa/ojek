
'use strict'

const Admin= use('App/Model/Admin')

class AdminController {

  * index(request, response) {
    const admins = yield Admin.all()
    yield response.sendView('admin/index', {admins:admins.toJSON()})
  }

  * create(request, response) {
    yield response.sendView('admin/create')
    yield response.sendView('admin/index', {admins:admins.toJSON()})
  }

  * store(request, response) {
    const adminData = request.except('_csrf','submit')
    yield Admin.create(adminData)

  }

  * show(request, response) {
    const admin=yield Admin.findBy('id', request.param('id'))
    yield response.sendView('Admin/show',{admin:admin.toJSON()})

  }

  * edit(request, response) {
    const admin=yield Admin.findBy('id', request.param('id'))
    yield response.sendView('admin/show',{admin:admin.toJSON()})
  }

  * update(request, response) {
    const adminData = request.except('_csrf','submit')
    const admin= yield Admin.findBy('id', request.param('id'))
    admin.name = adminData.name
    yield admin.save()
    yield response.redirect(request.param('id'))
  }

  * destroy(request, response) {
    const admin =yield Admin.findBy('id', request.param('id'))
    yield admin.delete()
    yield response.redirect('/adminIUD')

  }

}

module.exports = AdminController
