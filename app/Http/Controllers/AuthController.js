'use strict'

const User = use('App/Model/User')
const Hash = use('Hash')

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
        if (authCheck) {
            if(user.role=='1')
            return response.redirect('/member')
            else if(user.role=='2')
            return response.redirect('/admin')
            else if(user.role=='3')
            return response.redirect('/operator')
            else if(user.role=='4')
            return response.redirect('/supir')
        }

        yield response.sendView('login', { error: loginMessage.error })
    }

    * logout(request, response) {
        yield request.auth.logout()

        return response.redirect('/')
    }
}

module.exports = AuthController
