
'use strict'

const Member= use('App/Model/Member')
const User = use('App/Model/User')
const Hash = use('Hash')
const Database = use('Database')
class MemberController {

  * index(request, response) {
    const memberDetail = yield Database.table('users').innerJoin('members','users.id','members.idUser')
    yield response.sendView('member/index',{members:memberDetail})
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
    user.number= request.input('number')
    user.name = request.input('name')
    user.role='1';
    yield user.save()
    const userLast = yield User.last()

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
    user.name = memberData.name
    user.number = memberData.number

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
