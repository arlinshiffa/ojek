'use strict'

const User = use('App/Model/User')
const Hash = use('Hash')

class RegisterController {
    * index(request, response) {
        yield response.sendView('welcome.register')
    }

    * doRegister(request, response) {
        const user = new User()

        user.username = request.input('username')
        user.KTP= request.input('KTP')
        user.email = request.email('email')
        user.password = yield Hash.make(request.input('password'))
        user.number = request.input('number')


        yield user.save()

        var registerMessage = {
            success: 'Registration Successful! Now go ahead and login'
        }

        yield response.sendView('welcome register', { registerMessage : registerMessage })
    }
}

module.exports = RegisterController
