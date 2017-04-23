
'use strict'

const member= use('App/Model/member')

class memberController {

  * index(request, response) {
    const member = yield member.all()
    yield response.sendView('member/index', {member:member.toJSON()})
  }

  * create(request, response) {
    yield response.sendView('member/create')
    yield response.sendView('member/index', {members:members.toJSON()})
  }

  * store(request, response) {
    const memberData = request.except('_csrf','submit')
    yield member.create(memberData)

  }

  * show(request, response) {
    const member=yield member.findBy('id', request.param('id'))
    yield response.sendView('member/show',{member:member.toJSON()})

  }

  * edit(request, response) {
    const member=yield member.findBy('id', request.param('id'))
    yield response.sendView('member/show',{member:member.toJSON()})
  }

  * update(request, response) {
    const memberData = request.except('_csrf','submit')
    const member= yield member.findBy('id', request.param('id'))
    member.name = memberData.name
    yield member.save()
    yield response.redirect(request.param('id'))
  }

  * destroy(request, response) {
    const member =yield member.findBy('id', request.param('id'))
    yield member.delete()
    yield response.redirect('/memberIUD')

  }

}

module.exports = memberController
