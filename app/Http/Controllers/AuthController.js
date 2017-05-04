'use strict'

const User = use('App/Model/User')
const Hash = use('Hash')

const Role = use('App/Model/role')
const Token = use('App/Model/Token')
class AuthController {

    * index(request, response) {
        yield response.sendView('welcome')
    }

    * login(request, response) {
        const userName = request.input('userName')
        const password = request.input('password')



        const loginMessage = {
            success: 'Logged-in Successfully!',
            error: 'Invalid Credentials'
        }

        // Attempt to login with userName and password
        const authCheck = yield request.auth.attempt(userName, password)
        const user = yield User.findBy('userName',userName)
        const role = yield Role.findBy('id', user.role)
        //
        // const token = yield request.auth.generate(user)
        // yield Token.create(token)

        // sessionStorage.setItem('username',userName)

        if (authCheck) {
            if(role.name=='member')
            return response.redirect('/member')
            else if(role.name=='admin')
            return response.redirect('/admin')
            else if(role.name=='operator')
            return response.redirect('/operator')
            else if(role.name=='driver')
            return response.redirect('/supir')
        }
        yield response.sendView('login', { error: loginMessage.error })
    }

    * logout(request, response) {
        yield Factory.model('App/Model/Temp').reset()
        yield request.auth.logout()

        return response.redirect('/')
    }
}

module.exports = AuthController
