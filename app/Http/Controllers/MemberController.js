
'use strict'

const Member = use('App/Model/member')

class memberController {

  * index(request, response) {
    const member = yield Member.all()
    yield response.sendView('member/index', {member:member.toJSON()})

  }

  * create(request, response) {
    yield response.sendView('member/create')
  }

  * store(request, response) {
    const memberData = request.except('_csrf','submit')
    yield Member.create(memberData)

  }

  * show(request, response) {
    const member=yield Member.findBy('id', request.param('id'))
    yield response.sendView('member/show',{member:member.toJSON()})
  }

  * edit(request, response) {
    const member=yield Member.findBy('id', request.param('id'))
    yield response.sendView('member/show',{member:member.toJSON()})
  }

  * update(request, response) {
    const memberData = request.except('_csrf','submit')
    const member= yield Member.findBy('id', request.param('id'))
    member.name = memberData.name
    yield Member.save()
    yield response.redirect(request.param('id'))
  }

  * destroy(request, response) {
    const member =yield Member.findBy('id', request.param('id'))
    yield member.delete()
    yield response.redirect('/member')

  }

}

module.exports = memberController
