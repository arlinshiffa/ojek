'use strict'

const User= use('App/Model/User')

class LoginController {
  * login(request, response){
      response.sendView('member')
      // const user=yield User.findBy('id', request.param('id'))
      //   if(user.idMember!=null){
      //     response.sendView('member')
      //   }else if(user.idSupir!=null){
      //     response.sendView('supir')
      //   }else if(user.idOperator!=null){
      //     response.sendView('operator')
      //   }else if(user.idAdmin!=null){
      //     response.sendView('admin')
      //   }
      }
}

}

module.exports = LoginController
