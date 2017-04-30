
'use strict'

const Member= use('App/Model/Member')
const User = use('App/Model/User')
const Hash = use('Hash')

class MemberController {

  * index(request, response) {
    const members = yield Member.all()
    const user = yield User.all()
    yield response.sendView('member/index', {members:members.toJSON(), user:user.toJSON()})
  }

  * create(request, response) {
    yield response.sendView('member/create')
    yield response.sendView('member/index', {users:user.toJSON(), user:user.toJSON()})
  }

  * store(request, response) {
    const user = new User()
    const member = new Member()
    user.username = request.input('userName')
    user.password = request.input('password')
    user.role='1';
    yield user.save()
    const userLast = yield User.last()
    member.number= request.input('number')
    member.name = request.input('name')
    member.KTP =request.input('KTP')
    member.email = request.input('email')
    member.idUser = userLast.id
    yield member.save()

  }

  * show(request, response) {
    const member=yield Member.findBy('id', request.param('id'))
    const user= yield User.findBy('id',member.idUser)
    yield response.sendView('member/show',{member:member.toJSON(),user:user.toJSON()})
  }

  * edit(request, response) {
    const member=yield Member.findBy('id', request.param('id'))
    const user= yield User.findBy('id',member.idUser)
    yield response.sendView('member/edit',{member:member.toJSON(),user:user.toJSON()})
  }

  * update(request, response) {
    const memberData = request.except('_csrf','submit')
    const member= yield Member.findBy('id', request.param('id'))
    const userData = request.except('_csrf','submit')
    const user= yield User.findBy('id', member.idUser)
    member.name = memberData.name
    member.number = memberData.number
    member.KTP = memberData.KTP
    member.email = memberData.email
    user.userName = userData.userName
    user.password = yield Hash.make(userData.password)

    yield member.save()
    yield user.save()
    yield response.redirect(request.param('id'))

  }

  * destroy(request, response) {
    const member =yield Member.findBy('id', request.param('id'))
    const user = yield User.findBy('id',member.idUser)
    yield member.delete()
    yield user.delete()
    yield response.redirect('/memberIUD')
  }

}

module.exports = MemberController
