'use strict'

const User = use('App/Model/User')
const Hash = use('Hash')
const Validator = use('Validator')

class RegisterController {
  * index(request, response) {
    const users = yield User.all()
    yield response.sendView('welcome', {users:users.toJSON()})
  }

  *create(request, response){
    const users = yield User.all()
    yield response.sendView('welcome',{users:users.toJSON()})
  }

  * doRegister(request, response) {
    const userData =  request.except('_csrf','submit')
    const validation = yield Validator.validate(userData, User.rules)
    if(validation.fails()){
      yield request
      .withOnly('name','userName','KTP','email','password','number')
      .andWith({error:validation.messages()})
      .flash()
      response.redirect('welcome')
      return
    }
    yield User.create(userData)
    yield response.sendView('welcome',{successMessage:'Created User Successfully'})
  }

  //
  // yield user.save()

  // var registerMessage = {
  //   success: 'Registration Successful! Now go ahead and login'
  // }

//   yield response.sendView('welcome register', { registerMessage : registerMessage })
// }
}

module.exports = RegisterController
