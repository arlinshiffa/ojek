'use strict'

const User = use('App/Model/User')

const Member = use('App/Model/Member')

class RegisterController {
    * index(request, response) {
        yield response.sendView('register')
    }

    * doRegister(request, response) {
        const user = new User()
        const member = new Member()
        user.username = request.input('userName')
        user.password = request.input('password')
        user.role='1';
        yield user.save()
        const userLast = yield User.last()
        member.KTP= request.input('KTP')
        member.number= request.input('number')
        member.email = request.input('email')
        member.name = request.input('name')
        member.idUser = userLast.id

        yield member.save()
        var registerMessage = {
            success: 'Registration Successful! Now go ahead and login'
        }

        yield response.sendView('register', { registerMessage : registerMessage })
    }
}

module.exports = RegisterController
