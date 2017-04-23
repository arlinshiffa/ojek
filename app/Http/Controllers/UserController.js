
'use strict'

const user= use('App/Model/user')

class userController {

  * index(request, response) {
    const user = yield user.all()
    yield response.sendView('user/index', {user:user.toJSON()})
  }

  * create(request, response) {
    yield response.sendView('user/create')
    yield response.sendView('user/index', {users:users.toJSON()})
  }

  * store(request, response) {
    const userData = request.except('_csrf','submit')
    yield user.create(userData)

  }

  * show(request, response) {
    const user=yield user.findBy('id', request.param('id'))
    yield response.sendView('user/show',{user:user.toJSON()})

  }

  * edit(request, response) {
    const user=yield user.findBy('id', request.param('id'))
    yield response.sendView('user/show',{user:user.toJSON()})
  }

  * update(request, response) {
    const userData = request.except('_csrf','submit')
    const user= yield user.findBy('id', request.param('id'))
    user.name = userData.name
    yield user.save()
    yield response.redirect(request.param('id'))
  }

  * destroy(request, response) {
    const user =yield user.findBy('id', request.param('id'))
    yield user.delete()
    yield response.redirect('/userIUD')

  }

}

module.exports = userController
