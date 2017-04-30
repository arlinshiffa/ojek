
'use strict'

const Admin= use('App/Model/Admin')
const User = use('App/Model/User')

class AdminController {

  * index(request, response) {
    const admins = yield Admin.all()
    const user = yield User.all()
    yield response.sendView('admin/index', {admins:admins.toJSON(), user:user.toJSON()})
  }

  * create(request, response) {
    yield response.sendView('admin/create')
    yield response.sendView('admin/index', {users:user.toJSON(), user:user.toJSON()})
  }

  * store(request, response) {
    const user = new User()
    const admin = new Admin()
    user.username = request.input('userName')
    user.password = request.input('password')
    user.role='2';
    yield user.save()
    const userLast = yield User.last()
    admin.number= request.input('number')
    admin.name = request.input('name')
    admin.idUser = userLast.id
    yield admin.save()

  }

  * show(request, response) {
    const admin=yield Admin.findBy('id', request.param('id'))
    const user= yield User.findBy('id',admin.idUser)
    yield response.sendView('admin/show',{admin:admin.toJSON(),user:user.toJSON()})
  }

  * edit(request, response) {
    const admin=yield Admin.findBy('id', request.param('id'))
    const user= yield User.findBy('id',admin.idUser)
    yield response.sendView('admin/edit',{admin:admin.toJSON(),user:user.toJSON()})
  }

  * update(request, response) {
    const adminData = request.except('_csrf','submit')
    const admin= yield Admin.findBy('id', request.param('id'))
    const userData = request.except('_csrf','submit')
    const user= yield User.findBy('id', admin.idUser)
    admin.name = adminData.name
    admin.number = adminData.number
    user.userName = userData.userName
    user.password = yield Hash.make(userData.password)

    yield admin.save()
    yield user.save()
    yield response.redirect(request.param('id'))

  }

  * destroy(request, response) {
    const admin =yield Admin.findBy('id', request.param('id'))
    const user = yield User.findBy('id',admin.idUser)
    yield admin.delete()
    yield user.delete()
    yield response.redirect('/adminIUD')
  }

}

module.exports = AdminController
