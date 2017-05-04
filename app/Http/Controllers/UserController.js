
'use strict'

const User= use('App/Model/User')

class UserController {

  * index(request, response) {
    const users = yield User.all()
    yield response.sendView('user/index', {users:users.toJSON()})
  }

  * greet(request, response){
    const user = yield User.findBy(request.param('userName'))
    yield response.sendView('member',{user})
  }

  * create(request, response) {
    yield response.sendView('user/create')
    yield response.sendView('user/index', {users:users.toJSON()})
  }

  * store(request, response) {
    const userData = request.except('_csrf','submit')
    yield User.create(userData)

  }

  * show(request, response) {
    const user=yield User.findBy('id', request.param('id'))
    yield response.sendView('user/show',{user:user.toJSON()})

  }

  * edit(request, response) {
    const user=yield User.findBy('id', request.param('id'))
    yield response.sendView('user/show',{user:user.toJSON()})
  }

  * update(request, response) {
    const userData = request.except('_csrf','submit')
    const user= yield User.findBy('id', request.param('id'))
    user.name = userData.name
    yield user.save()
    yield response.redirect(request.param('id'))
  }

  * destroy(request, response) {
    const user =yield User.findBy('id', request.param('id'))
    yield user.delete()
    yield response.redirect('/userIUD')

  }

}

module.exports = UserController
